var uid = window.location.search.split('=')[1]==null?localStorage.getItem('userId'):window.location.search.split('=')[1];
var html = {
		"FILE_UPLOADS": '<li class="treeview"><a href="#"><span>File Uploads</span>'+
			'<span class="pull-right-container">'+
			'<i class="fa fa-angle-left pull-right"></i>'+
			'</span> </a>'+
			'<ul class="treeview-menu">'+
			'<li><a href="/upf-system/upf/debitCredit/uploadex" class="asideCls"><i class="fa fa-circle-o"></i> Upload Excel</a></li>'+
			'<li><a href="/upf-system/upf/debitCredit/uploadst" class="asideCls"><i class="fa fa-circle-o"></i> Upload Status</a></li>'+
			'</ul></li>',
		"CAMUI": '<li><a href="/upf-system/upf/debitCredit/camui"  class="asideCls"><span>DEXTER UI</span></a></li>',
		"BUREAU_ANALYZER" : '<li><a href="/upf-system/upf/debitCredit/creditvidya"  class="asideCls"><span>Bureau Analyzer</span></a></li>',
		"CREDIT_POLICY" : '<li><a href="/upf-system/upf/debitCredit/creditpolicy" id="crdtPlcyId"  class="asideCls"><span>Credit Policy</span></a></li>',
		"ADMINISTRATION":'<li class="treeview"><a href="#"><span>Administration</span>'+
		'<span class="pull-right-container">'+
		'<i class="fa fa-angle-left pull-right"></i>'+
		'</span> </a><ul class="treeview-menu">'+
		'<li><a href="/upf-system/upf/debitCredit/roles"  class="asideCls"><i class="fa fa-circle-o"></i>Roles List</a></li>'+
		'<li><a href="/upf-system/upf/debitCredit/users" class="asideCls"><i class="fa fa-circle-o"></i>Users List</a></li>'+
		'<li><a href="/upf-system/upf/debitCredit/smdsamapping" class="asideCls"><i class="fa fa-circle-o"></i>DSA Mapping</a></li>'+
		'<li><a href="/upf-system/upf/debitCredit/accessList" class="asideCls"><i class="fa fa-circle-o"></i>Access Assign to Role</a></li>'+
		'<li><a href="/upf-system/upf/debitCredit/accessAssign" class="asideCls"><i class="fa fa-circle-o"></i>Permission List</a></li>'+
		'</ul></li>',
		"sbl_options": {
			"SBL_MAKER": '<li><a href="/upf-system/upf/debitCredit/gklddmaker" class="asideCls"><i class="fa fa-circle-o"></i>SBL Maker</a></li>',
			"SBL_CHECKER": '<li><a href="/upf-system/upf/debitCredit/gklddchecker" class="asideCls"><i class="fa fa-circle-o"></i>SBL Checker</a></li>',
			func: function(sub_options){
				return '<li class="treeview" id="lddLftPnlId"><a href="javascript:void(0);"><span>SBL</span>'+
							'<span class="pull-right-container">'+
							'<i class="fa fa-angle-left pull-right"></i>'+
						'</span> </a>'+ 
						'<ul class="treeview-menu">'+
							sub_options +
						'</ul></li>';
			}
		},
		"bl_options": {
			"BL_MAKER": '<li><a href="/upf-system/upf/debitCredit/gkwebmaker" class="asideCls"><i class="fa fa-circle-o"></i>BL Maker</a></li>',
			"BL_CHECKER": '<li><a href="/upf-system/upf/debitCredit/gkweb" class="asideCls"><i class="fa fa-circle-o"></i>BL Checker</a></li>',
			func: function(sub_options){
				return '<li class="treeview" id="ddLftPnlId"><a href="javascript:void(0);"><span>BL</span>'+
							'<span class="pull-right-container">'+
							'<i class="fa fa-angle-left pull-right"></i>'+
						'</span> </a>'+ 
						'<ul class="treeview-menu">'+
							sub_options +
						'</ul></li>'
			}
		},
		"DSA":'<li class="treeview"><a href="javascript:void(0);" id="listViewDsaId"><span>DSA</span>'+
		'<span class="pull-right-container">'+
		'<i class="fa fa-angle-left pull-right"></i>'+
		'</span> </a>'+  '<ul class="treeview-menu">'+
		'<li><a href="javascript:void(0);" onclick="$_appStatus();"><i class="fa fa-circle-o"></i>Application Status</a></li>'+
		'<li><a href="javascript:void(0);" onclick="$_payouts();"><i class="fa fa-circle-o"></i>Payouts Months/Quarter</a></li>'+
		//'<li><a href="#" onclick="$_gstDet();"><i class="fa fa-circle-o"></i>GST Details</a></li>'+
		'<li><a href="javascript:void(0);" onclick="$_invoice();" id="inoviceHrefId"><i class="fa fa-circle-o"></i>Invoice</a></li>'+
		'</ul></li>',

		"ACCOUNT_APPLICATION_MIS": '<li><a href="/upf-system/upf/debitCredit/accounts" class="asideCls"><span>APPLICATION MIS</span></a></li>',
		"ACCOUNT_HISTORIC": '<li><a href="/upf-system/upf/debitCredit/historic" class="asideCls"><span>HISTORICAL DATA</span></a></li>',
		"ACCOUNT_INVOICE" : '<li><a href="/upf-system/upf/debitCredit/accinvoice" class="asideCls"><span>INVOICE</span></a></li>',
		"DSA_PAYOUT":'<li><a href="/upf-system/upf/debitCredit/dsapayout" class="asideCls"><span>DSA PAYOUT</span></a></li>',
		"APPLICATION_MIS" : '<li><a href="/upf-system-dsapayout/dsapayout/dsa/costMaintain" class="asideCls"><span>APPLICATION MIS</span></a></li>',
		"HIERARCHY" : '<li><a href="/upf-system/upf/debitCredit/hierarchy" class="asideCls"><span>HIERARCHY</span></a></li>',
		"INCENTIVES" : '<li><a href="/upf-system-dsapayout/dsapayout/dsa/incentives" class="asideCls"><span>PAYOUT MASTER</span></a></li>',
		"CAMS_LIST" :'<li><a href="/upf-system/upf/debitCredit/cams" class="asideCls"><span>CAMS LIST</span></a></li>',
		"DEXTER" :'<li><a href="/upf-system/upf/debitCredit/dexter" class="asideCls"><span>DEXTER ENGINE</span></a></li>',
		"SCORE_CARD" : '<li id="scrCrdPnlId"><a href="/upf-system/upf/debitCredit/scorecard" class="asideCls"><span>SCORE CARD</span></a></li>',
		"DSA_ONBOARD":'<li><a href="/upf-system/upf/debitCredit/addDsa" class="asideCls"><span>DSA ONBOARD</span></a></li>',
        "UNVERIFIED_DSA_LIST":'<li><a href="/upf-system/upf/debitCredit/dsaList" class="asideCls"><span>UNVERIFIED DSA LIST</span></a></li>',
        "COLLECTION_LIST":'<li><a href="/upf-system/upf/debitCredit/collectionList" class="asideCls"><span>COLLECTION LIST</span></a></li>',
        
        "MONTHOFFERS":'<li><a href="/upf-system-dsapayout/dsapayout/dsa/offerMonths" class="asideCls"><span>OFFER MONTHS</span></a></li>',
        "FESTIVALOFFERS":'<li><a href="/upf-system-dsapayout/dsapayout/dsa/festivalOffer" class="asideCls"><span>FESTIVAL MONTHS</span></a></li>'
		//"SALES_APPLICATION_MIS" : '<li><a href="/upf-system/upf/debitCredit/salesmis" class="asideCls"><span>SALES APPLICATION MIS</span></a></li>'
};   
$(document).ready(function(){
//	console.log('localStorage.getItem()-',localStorage.getItem("role"));
	var API_PRODUCT_GET = '/upf-system-dsapayout/dsapayout/dsa/getproductbyuserid?userid=';
	var API_ALLLOGINDETAIL_GET	  = 'http://192.168.149.17:8080/upf-system/upf/authentication/getUserByUserId?id='+uid;
	var API_SCORECARD_GET = '/upf-system/upf/scoreCard/getScoreCardCreditMember?userName=';
	
	var roleLeftId = localStorage.getItem("role");
	var gkLdd = 
	'<li class="treeview"><a href="javascript:void(0);"><span>LDD</span>'+
	'<span class="pull-right-container">'+
		'<i class="fa fa-angle-left pull-right"></i>'+
	'</span> </a>'+ 
	'<ul class="treeview-menu">'+
		'<li><a href="/upf-system/upf/debitCredit/gklddmaker"><i class="fa fa-circle-o"></i>LDD Maker</a></li>'+
		'<li><a href="/upf-system/upf/debitCredit/gklddchecker"><i class="fa fa-circle-o"></i>LDD Checker</a></li>'+
	'</ul></li>';
	
	var dd ='<li class="treeview"><a href="javascript:void(0);"><span>DD</span>'+
	'<span class="pull-right-container">'+
	'<i class="fa fa-angle-left pull-right"></i>'+
		'</span> </a>'+ 
			'<ul class="treeview-menu">'+
				'<li><a href="/upf-system/upf/debitCredit/gkwebmaker"><i class="fa fa-circle-o"></i>DD Maker</a></li>'+
				'<li><a href="/upf-system/upf/debitCredit/gkweb"><i class="fa fa-circle-o"></i>DD Checker</a></li>'+
			'</ul></li>';
	requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
		localStorage.setItem("loginEntity", JSON.stringify(reply))
		$("body").append(function(){
			return '<aside class="main-sidebar m-layer">'+
							'<section class="sidebar">'+   
							'<ul class="sidebar-menu">'+
									'<li class="header" id="loginRoleNameId" style="text-align:center;color:#fff;">'+roleLeftId+'</li>'+
									renderList(reply.accessList)+
							'</ul>'+
						'</section>'+
						'<section class="sidebar">'+ 
						'<div style="padding-top:8px;padding-bottom:55px;">'+
						'<ul class="sidebar-menu">'+
						'<li><a href="javascript:void(0)" onclick="$_modalCall();"><i class="fa fa-key pull-right"></i>Change Password</a></li>'+
						'<li><a href="javascript:void(0)" onclick="$_logout();"><i class="fa fa-power-off pull-right"></i>Logout</a></li>'+
						'</ul>'+
						'</div>'+
						'</section>'+  
					'</aside>';
		});
		if(localStorage.getItem('role') == "DSA"){
//			$('#btntoggleClick').click();
			$('#listViewDsaId').click();
		}
		if(reply.accessList.SBL_MAKER == "HIDE" && reply.accessList.SBL_CHECKER == "HIDE"){
			$('#lddLftPnlId').hide();
		}
		if(reply.accessList.BL_MAKER == "HIDE" && reply.accessList.BL_CHECKER == "HIDE"){
			$('#ddLftPnlId').hide();
		}
		
	/*	requestData(API_SCORECARD_GET+localStorage.getItem('userName'),'GET').done(function(reply){
			if(reply.reply == "Success") {
				$('#scrCrdPnlId').show();
			}else{
				$('#scrCrdPnlId').hide();
			}
		});	*/
		requestData(API_PRODUCT_GET+localStorage.getItem('userId'),'GET').done(function(prodType){
			localStorage.setItem('productType',prodType.product);
			if(roleLeftId=='CM' ||roleLeftId=='ACM'||roleLeftId=='RCM'||roleLeftId=='ZCM'||roleLeftId=='NCM'){
				$('#lddLftPnlId').show();
				$('#ddLftPnlId').show();
			}else{
				if(prodType.product == "BL"){
					$('#lddLftPnlId').hide();
					$('#ddLftPnlId').show();
				}else if(prodType.product == "SBL"){
					$('#ddLftPnlId').hide();
					$('#lddLftPnlId').show();
				}
			}
		});
		
	});
	
	var uriWelcome = "/upf-system/upf/debitCredit/welcome";
	var uriDSA = "/upf-system/upf/debitCredit/dsa";
		var headerHtml = '<header class="main-header m-layer" id="headerId">'+
		'<a class="logo" id="welcomePgId"> <span class="logo-lg">'+
		'<img src="/upf-system/resources/ui_content/dist/img/KTlogo.png" class="m-KTBrandCls" alt="KapitalTech">'+
		'</span></a>'+
	'<nav class="navbar navbar-static-top" role="navigation">'+
	'<a href="javascript:void(0);" class="sidebar-toggle" data-toggle="offcanvas" role="button" id="btntoggleClick"> <span class="sr-only">Toggle navigation</span>'+
	'</a>'+
	'<div class="" align="center">'+
		'<ul class="nav navbar-nav">'+
			'<li id="liIdHead"><a href="javascript:void(0);"><b>'+$(document).find("title").text()+'</b></a></li>'+
		'</ul></div></nav></header>';
	
	$('#headerId').append(headerHtml);
	(roleLeftId)=="DSA"?$('#welcomePgId').attr('href',uriDSA):$('#welcomePgId').attr('href',uriWelcome);
});

function renderList(accessList){ //console.log(accessList)
	var _ = '';
	$(accessList).each(function(k, v){
		for(key in html){
			if(!v.hasOwnProperty(key)){
				var __ = '';
				for(sub_key in html[key]){				
					if(v[sub_key] != "HIDE"){
						if(v.hasOwnProperty(sub_key)){
							__ += html[key][sub_key];
						}
					}					
				}
				_ += html[key].func(__);
			}else{
				_ += v[key] != "HIDE"?html[key]:'';
			}
		}
	});
	return _
} 
 
function $_deleteLos(API,ROWID,GETROW,SRNO,SRNOID,ALERT){ 
	//$_deleteLos(API_USER_DEL,'rowUserId',getRowNo,srNoUser,'srNoUserId');
	if(confirm("Do you really want to delete?")==true){
		requestData(API, "GET",'').done(function (reply) {
					$('#'+ROWID+'-'+GETROW).remove();
					for(i=GETROW;i<=SRNO;i++){
						var temp = parseInt(i)+1;
						$('#'+SRNOID+'-'+temp).text(i);
					}
			});	
		}
}
function $_pInt(a){ var z;
return parseInt(a);

}
function $_isNaNChck(a,b){
var x = $('#'+a);
return ((b=="t")?isNaN($_pInt(x.text()))?0:$_pInt(x.text()):isNaN($_pInt(x.val()))?0:$_pInt(x.val()));

}
function $_datePick(){
	var d = new Date();

	var month = d.getMonth()+1;
	var day = d.getDate();

	var output = d.getFullYear() + '/' +
	    (month<10 ? '0' : '') + month + '/' +
	    (day<10 ? '0' : '') + day;
	return output;

}
function slctAllPV(__){
	console.log($(__).attr('id').split('_')[0])
	cls= '.'+$(__).attr('id').split('_')[0]
	chkFlag = $(__).is(':checked')
	$(cls+':enabled').val('').change()
	if(chkFlag){
		$($(cls+':enabled')).each(function(k,v){
			$('#'+v.id).val('AGREE').change();
		})
	}else{
		$($(cls+':enabled')).each(function(k,v){
			$('#'+v.id).val('').change().change();
		})
	}
}
function uniqueArrayPV(array) {
	  var result = Array.from(new Set(array));
	  return result    
	}
function resetChkBoxPV(_this){
	$($(_this).attr('class').split(' ')).each(function(k,v){
		if(v.includes('slct')){
    		$('input:checkbox[name="selectAll"][id="'+v+'_agreeAll"]').removeAttr('checked')
    		console.log(v+'_agreeAll')
		}
	})
}
function remSpc(s){
	return s.split(' ').join('');
}
function replaceAll(s,tr,rw){
	return s.split(tr).join(rw);
}