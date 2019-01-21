<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Access List</title>
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/datatables/dataTables.bootstrap.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/select2/select2.min.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/datepicker/datepicker3.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/dist/css/scrypt.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/jQuery/jquery.mCustomScrollbar.css">
	<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>	
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
 <style>
 
.a-tcenter{
text-align:center;
}
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" style="background-color:#ecf0f5 !important;">
	<form id="accesslistFormId">
	<div class="wrapper" >
	<div id="headerId"></div>
	<!-- <header class="main-header m-layer" id="headerId">
			<a href="/upf-system/upf/debitCredit/welcome" class="logo"> <span class="logo-lg">
					<img src="/upf-system/resources/ui_content/dist/img/KTlogo.png"
					class="m-KTBrandCls" alt="KapitalTech">
				</span>
			</a>

			<nav class="navbar navbar-static-top" role="navigation">
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
					role="button"> <span class="sr-only">Toggle navigation</span>
				</a>
				<div class="" align="center">
					<ul class="nav navbar-nav">
						<li id="liIdHead"><a><b>Access Assign To Role</b></a></li>
					</ul>
				</div>
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<li><a href="javascript:void(0);" id="userNameHeadId"></a></li>
						<li><a href="javascript:void(0);"><span id="chngPassId">Change Password</span></a></li>
						<li><a href="#">Logout</a></li>
						<li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              
              <span id="userNameHeadId" class="hidden-xs"></span>
              <span id="loginRoleNameId" class="hidden-xs" style="padding-left:5px;"></span>
            </a>
            <ul class="dropdown-menu">
              User image
              
              Menu Body
             
              Menu Footer
              <li class="user-footer">
                <div class="pull-left">
                  <a href="javascript:void(0);" onclick="$_modalCall('btnModalChngPswd');" class="btn btn-default">Change Password</a>
                </div>
                 
                <div class="pull-right">
                  <a href="#" class="btn btn-danger" onclick="$_logout();">Log out</a>
                </div>
              </li>
            </ul>
          </li>
					</ul>
				</div>
			</nav>
		</header> -->
	
	<div id="bodyId"></div>
		
   <div class="content-wrapper">
	<section class="content">
      <div class="row" style="width:4450px;">
        <!-- left column -->  
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
            <!-- tools box -->
              <!-- /. tools -->
              <h3 class="box-title">Access Assign To Role</h3>
            </div>
              <div class="box-bod" id="accessList">
             	
              	<!-- ************************************* -->
              	<!-- ROLES WILL RENDER HERE -->		        
		        <!-- ************************************* -->
              </div>
              <!-- /.box-body -->
               <div align="center" style="padding-bottom:20px;">
		<button type="button" id="btnAccListDumId" class="btn btn-success">Submit</button>
		<button type="submit" id="btnAccListSubmitId" style="display:none;"></button>
	</div>
          </div>
          <!-- /.box -->
       
        <!--/.col (left) -->
      </div>
      <!-- /.row -->
      
    </section>
   
	</div>
	</div>
</form>
<script
		src="/upf-system/resources/ui_content/plugins/jQuery/jquery-2.2.3.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/ajax/ajax-1.12.0.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/jQuery/jquery.mCustomScrollbar.concat.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/bootstrap/js/bootstrap.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/jQueryUI/jquery-ui.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/select2/select2.full.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/datepicker/bootstrap-datepicker.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/datatables/jquery.dataTables.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/datatables/dataTables.bootstrap.min.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/forAll.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/scrypt.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/boottag/boottag-1.0.7.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/camUI/forAll.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/camUI/itr.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/bankSummary.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/stressTest.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/qualitative.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/snapShot.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/LOS/forAllLos.js"></script>


<script type="text/javascript">
var API_ALL_VALUES_GET   = '/upf-system/upf/authentication/UserMappingDetails';

var API_TAB_COL_LEB_GET      = '/upf-system/upf/authentication/getAllTabDetails';
var API_ROLE_HEADER_GET        = '/upf-system/upf/authentication/getAllRole';
var API_ACCESS_DROP_OPTIONS_GET    = '/upf-system/upf/authentication/getAllAccessDetails';

var API_MAPPINGDETAILS_POST = '/upf-system/upf/authentication/addUserMappingDetails';
var _tbl = '',
	row_cnt = 0,
	col_cnt = 2,
	head_cnt=2,
	tabHid_cnt = 0,
	headHid_cnt = 0,
	sample=0;
$(document).ready(function(){
	requestData(API_ALL_VALUES_GET, "GET", '').done(function(aData){
		//if(aData.length == 0){
			requestData(API_ROLE_HEADER_GET, "GET", '').done(function(he){
				requestData(API_TAB_COL_LEB_GET, "GET", '').done(function(cl){
					requestData(API_ACCESS_DROP_OPTIONS_GET, "GET", '').done(function(op){
						$tableRender(he,cl,op,aData);
					});
				});
			});
		//}
	}); // end for requestData(API_ALL_VALUES_GET, "GET"
	
	$(document).on('click','#btnAccListDumId',function(){
		if($formValid('accesslistFormId','btnAccListSubmitId')){
			$('#btnAccListDumId').prop('disabled',true);
			var jsonData = [],qwe = 0;
			for(x=1;x<=row_cnt;x++){
				var tabId = $('#colHidId-'+x).text();
				for(y=3;y<=col_cnt;y++){
					var roleId = $('#headHidId-'+y).text();
					var accessId = $('#accDropdownId-'+x+'-'+(y-2)+' select').val();
					var userAccessMappingId = isNaN(parseInt($('#userAccMapHidId-'+x+'-'+(y-2)).text()))?0:$('#userAccMapHidId-'+x+'-'+(y-2)).text();
					var objData = {							
									"tabId": parseInt(tabId),
									"roleId": parseInt(roleId),	
									"userAccessMappingId" : parseInt(userAccessMappingId),
									"accessId": parseInt(accessId)								
								  };
					jsonData.push(objData);
					// console.log(jsonData);
				}// end for sub loop
			}//end for main loop
			
			requestData(API_MAPPINGDETAILS_POST, "POST", JSON.stringify((jsonData))).done(function (reply) {
				if(reply.reply=="success"){
				alert('Access assigned to roles successfully.');
				window.location.reload();
				}else{
					$('#btnAccListDumId').prop('disabled',false);
				}
			});
		}
	}); // end for $(document).on('click','#btnAccListDumId 
}); // end for $(document).ready(function()

function $tableRender(he,cl,op,aData){
	var accessId = 0;
	// DROPDOWN OPTIONS
	var sel = '<select class="form-control" required="required"><option></option>';
	$(op).each(function(options, o){
		if(o.accessName == "VIEW ALL"){
			accessId = o.accessId;
		}
		sel += '<option value="'+o.accessId+'">'+o.accessName+'</option>';
	});
	sel += '</select>';
	
	// HEADER
	_tbl += '<table class="table table-bordered" style="width:4450px;"><tbody>'+
			'<tr><th>ListItems</th><th>Fields</th>';
	
	$(he).each(function(head, h){++col_cnt;++head_cnt;
	
	
		_tbl += '<th><span id="headHidId-'+head_cnt+'" style="display:none">'+h.roleId+'</span><span>'+h.roleName+'</span></th>';
	});
	_tbl += '</tr>';	
	
	// COLUMN LABELS & DROPDOWNS
	$(cl).each(function(column, c){
		++row_cnt;var _dum = (c.fields==null)?'':c.fields;
		_tbl += '<tr><td><span style="display:none" id="colHidId-'+row_cnt+'">'
		+c.tabId+'</span><span>'+c.tabName+'</span></td><td>'+_dum+'</td>';
		var j=0;
		for(a=3;a<=col_cnt;a++){++j;
			_tbl += '<td id="accDropdownId-'+row_cnt+'-'+j+'"><span style="display:none" id="userAccMapHidId-'+row_cnt+'-'+j+'"></span>'+sel+'</td>';
		}
		_tbl += '</tr>';
	});
	_tbl += '</tbody></table>';
	$('#accessList').append(_tbl);
	
		var count =1 ,count1=0;
		for(i=1;i<=row_cnt;i++){
				count1=3;
				for(j=1;j<=col_cnt-2;j++){
					// console.log(aData[sample].tabId == $('#colHidId-'+count+'').text() , aData[sample].roleId == $('#headHidId-'+count1+'').text(), aData[sample].tabName != null);
					if(aData[sample].tabId == $('#colHidId-'+count+'').text() && aData[sample].roleId == $('#headHidId-'+count1+'').text() && aData[sample].tabName != null){
						// console.log('aData[sample].userAccessMappingId-',aData[sample].userAccessMappingId);
						$('#userAccMapHidId-'+i+'-'+j).text(aData[sample].userAccessMappingId);
						$('#accDropdownId-'+i+'-'+j+' select').val(aData[sample].accessId);
						sample++;count1++;
					}else{
						$('#accDropdownId-'+i+'-'+j+' select').val(accessId);
					}
				}
				count++;
		}		
		$('nav').css({"width":"4300px"});
}
function $formValid(a,b) {
	//return true;
	 if (!$("#" + a)[0].checkValidity()) {
	  $("#" + a + " select[required='required']").each(function() {
	   if (!$("#" + a)[0].checkValidity()) {
	    $('#'+b).click();
	   }
	  });return false;
	 } else {return true;}
}
</script>
</body>
</html>