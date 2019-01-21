
var dsaHtml = {
	invoice: function(_class, stateName,billingState){
		return `
		<tr  id="inv-${_class}">
			<td class="temp-hid-state a-dis" id="hid-${_class}"></td>
			<td class="temp-hid-invAmnt a-dis" id="hid-invAmnt-${_class}"></td>
			<td class="temp-cls-state">${stateName}</td>
			<td class="temp-cls-billing-state">${billingState==null?'':billingState}</td>
			<td><input type="text" class="form-control temp-cls-gstNo" pattern="^([0-3]{1}[0-9]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$" maxlength="15" style="text-transform: uppercase;" onkeyup="getBillingState(this);checkAllGST(this);"></td>
			<td><input type="text" class="form-control temp-cls-invNo" onkeyup="dupChk(this);" required></td>
			<td class="temp-cls-action"></td>
			<td class="temp-cls-equip"></td>
			<td class="temp-hid-id a-dis" id="hid-id-${_class}"></td>
			<td class="temp-hid-submit_flag a-dis" id="hid-submit_flag-${_class}"></td>
		</tr>
	`
	}
}; 
var appStat = `<table class="table table-bordered" id="payoutTblId" style="">
		<thead>
	<tr style="align:center;background-color:#ffb375;">
	<td>COUNT</td>
	<td></td>
	<td></td>

	<td class="dsaMonthDis"></td>
	<td></td>
	<td></td>

	<td class="dsaSlfCntCls"></td>
	<td class="dsaSlfCntCls"></td>
	<td class="dsaSlfCntCls"></td>
	<td></td>
	<td></td>
	</tr>
	<tr style="align:center;background-color:#ffb375;">
	<td>SUM</td>
	<td></td>
	<td></td>
	
	<td class="dsaMonthDis"></td>
	<td></td>
	<td></td>

	<td id="dsaNetPyRtSumId"></td>
	<td id="sancSumAmntId"></td>
	<td id="fnlPayAmntSumId"></td>
	<td></td>
	<td></td>
	</tr>
	<tr style="align:center;background-color:#ffb375;">
	<td>AVERAGE</td>
	<td></td>
	<td></td>
	
	<td class="dsaMonthDis"></td>
	<td></td>
	<td></td>
	
	<td id="dsaNtPyRtAvgId"></td>
	<td id="sancAmntAvgId"></td>
	<td id="fnlPayAmntAvgId"></td>
	<td></td>
	<td></td>
	</tr>
	<tr class="leftbgcolor">
		<th onclick="sortTablepayout(0);">SR NO<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="sortTablepayout(1);">STATE<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="sortTablepayout(2);">LOCATION<span class="glyphicon glyphicon-sort pull-right"></span></th>
		
		<th onclick="sortTablepayout(3);" class="dsaMonthDis">MONTH<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="sortTablepayout(4);">COMPANY NAME<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="sortTablepayout(5);">SALES MANAGER<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="sortTablepayout(6);">NET PAY RATE<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="sortTablepayout(7);">SANCTIONED LOAN AMOUNT<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th id="fpaTdId" class="a-dis" onclick="sortTablepayout(8);">FINAL PAYOUT AMOUNT<span class="glyphicon glyphicon-sort pull-right"></span></th>
		<th onclick="">CONFIRMATION <br>Agree all <input type="checkbox" onclick="slctAllPV(this);" id="slctDCCls_agreeAll" class="selectAllCls" name ="selectAll"></th>
		<th onclick="sortTable(10);">REMARK</th>
	</tr>
</thead>
<tbody id="appStatBdypayoutId">
</tbody>
<tfoot id="appStatFtrpayoutId" class="a-dis" style="background-color:#ffb375;">
</tfoot>
</table>
<div align="center" style="padding-top:20px; padding-bottom:20px;">

<input type="submit" id="dsaSbmtFirstId" class="btn btn-success a-dis" value="Submit">
</div>`;
//<th onclick="sortTablepayout(2);">YEAR<span class="glyphicon glyphicon-sort pull-right"></span></th>
//	<th onclick="sortTablepayout(6);">STATUS<span class="glyphicon glyphicon-sort pull-right"></span></th>
//<input type="submit" id="dsaSbmtId" class="btn btn-success" onclick="$_payoutSbmt(event);">
var mainDsaStat = '<table class="sortable table table-striped table-bordered" id="dsaStatTblId" style="width:1500px; background:#fff;">'+
'<thead>'+
'<tr style="align:center;background-color:#ffb375;">'+
'<td>COUNT</td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
//'<td></td>'+
'<td class="dsaAppCntCls"></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td class="dsaAppCntCls"></td>'+
'<td class="dsaAppCntCls"></td>'+
'<td></td>'+
'</tr>'+
'<tr style="align:center;background-color:#ffb375;">'+
'<td>SUM</td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
//'<td></td>'+
'<td id="appLnAmntSumId"></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td id="ntPyRteSumId"></td>'+
'<td id="appSumAmntId"></td>'+
'<td></td>'+
'</tr>'+
'<tr style="align:center;background-color:#ffb375;">'+
'<td>AVERAGE</td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
//'<td></td>'+
'<td id="appLnAmntAvgId"></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td></td>'+
'<td id="ntPyRteAvgId"></td>'+
'<td id="appAmntAvgId"></td>'+
'<td></td>'+
'</tr>'+
'<tr style="align:center;" class="leftbgcolor">'+ 
	'<th onclick="sortTable(0);">SR NO<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(1);">YEAR<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(2);">MONTH<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(3);">REGION<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(4);" style="min-width: 85px">LOCATION<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(5);">CUSTOMER<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(6);">SALES MANAGER<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	//'<th onclick="sortTable(7);">DSA<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(7);">APPLIED LOAN AMOUNT<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(8);">GK ACCEPT/REJECT<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(9);">GK REJECT REASON<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	//'<th onclick="sortTable(11);">FILE NO<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	//'<th onclick="sortTable(12);">CAM DATE<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(10);">CURRENT STATUS-HOLD/PD PENDING/REJECT<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(11);">PD DATE<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(12);">STATUS<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(13);">NET PAY RATE<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(14);">APPROVED AMOUNT<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'<th onclick="sortTable(15);">DISBURSAL DATE<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
'</tr>'+
'</thead>'+
'<tbody id="appStatBdyId">'+

'</tbody>'+
`<tfoot class ="a-dis" style="background-color:#fff;">
	<tr align="center"><td colspan="17">NO DATA FOUND !</td></tr>
</tfoot>`+
'</table>';
var  API_APPSTAT_POST = '/upf-system/upf/dsa/getlistdsa'
	,API_PAYOUT_POST  = '/upf-system/upf/dsa/getdsabasedlist'
	,API_QUARTERLY_POST = '/upf-system/upf/dsa/getdsalistquarterly'
	,API_DSA_GET = '/upf-system/upf/dsa/getDsabyuserid?userid='
	,API_DSA_POST = '/upf-system/upf/dsa/addDsaInfo'
	,API_DSACODE_POST = '/upf-system/upf/dsa/getDsabyuserid?userid='
	,API_STATE_GET = '/upf-system/upf/dsa/getliststate'
	,API_CITY_GET = '/upf-system/upf/dsa/getlistcity?state='
	,API_STATECODE_GET = '/upf-system/upf/dsa/getstatecode?state='
	,API_INVOICE_GET = '/upf-system/upf/dsa/createinvoicepdf'
	//API_INVOICE_GET = '/upf-system/upf/dsa/generateinvoice?dsacode='
	,API_INVOICEQRTR_GET = '/upf-system/upf/dsa/quarterlyinvoice?dsacode='
    ,API_BANKNAME_GET = '/upf-system/upf/dsa/getlistbank'
    ,API_INVOICE_POST = '/upf-system/upf/dsa/getinvoicelist'
    ,API_QRTR_POST = '/upf-system/upf/dsa/quarterlyinvoice'
    ,API_COST_POST = '/upf-system/upf/dsa/addadmindsa'
    ,API_EMAIL_SEND = '/upf-system/upf/dsa/sendemailnsm'
    ,API_SMS_SEND = '/upf-system/upf/dsa/sendSms'
    ,API_INVOICE_DEL = '/upf-system/upf/dsa/deleteinvoice'
    ,API_EMAIL_NSM = '/upf-system/upf/dsa/sendEmailNsmOnDisagree'
    ,API_INVOICE_CHECK = '/upf-system/upf/dsa/checkInvoiceNo'
    ,API_STATEBYCODE_GET = '/upf-system/upf/dsa/getStateData?statecode='
    ;
var compData = {};
var fileName;

var myBarChart = null
	,myPieChart = null
	,allInvcAgr = false
	,payoutSubmitAllowed = true
	,postData
	,finalpostData = []
	, glblFileCount = 0
	,arrInvList = []
	
;

var monthArr = ["","January","February","March","April","May","June",
                "July","August","September","October","November","December"];
$(function(){
	
	toastr.options = {
			  "closeButton": false,
			  "debug": false,
			  "newestOnTop": false,
			  "progressBar": false,
			  "positionClass": "toast-top-right",
			  "preventDuplicates": true,
			  "onclick": null,
			  "showDuration": "1000",
			  "hideDuration": "1000",
			  "timeOut": "2500",
			  "extendedTimeOut": "500",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut"
			}
	// $_barChrt(); 
		$('#userNameWcId').text(localStorage.getItem('smName'));   
		requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
		$(reply.accessList).each(function(k,v){
		if( v.DSA_TAB == "READ ONLY" ||  v.DSA_TAB == "READONLY" || v.DSA_TAB == "READ" ){
			$('#gstFormId input, #gstFormId select, #gstFormId textarea, #gstFormId button').prop('disabled', true);
			$('#payoutId input, #payoutId select, #payoutId textarea, #payoutId button').prop('disabled', true);
		}else if( v.DSA_TAB == "WRITE" ||  v.DSA_TAB == "VIEW ALL"){
			$('#gstFormId input, #gstFormId select, #gstFormId textarea, #gstFormId button').prop('disabled', false);
			$('#payoutId input, #payoutId select, #payoutId textarea, #payoutId button').prop('disabled', false);
		}else{
			$('#gstFormId input, #gstFormId select, #gstFormId textarea, #gstFormId button').prop('disabled', false);
			$('#payoutId input, #payoutId select, #payoutId textarea, #payoutId button').prop('disabled', false);
		}  
		});
});
		$_yearList('<option value="">Select Year</option>','yearDSA');
		 requestData(API_BANKNAME_GET,'GET').done(function(reply){
				var opt = '<option value="Dummy Bank">Select Bank Name</option>';
				 $(reply.data).each(function(k,v){
					 opt += '<option value='+v.bankname+'>'+v.bankname+'</option>';
				 });
				 $('#bankNameDsaId').html(opt);
		 });
	
	
	requestData(API_DSACODE_POST+localStorage.getItem('userId'),"GET").done(function(reply){
		$('#dsaCodeId').text(reply.dsacode);
	});
	$(document).on('click','.invLink',function(){
		var id = $(this).attr('id').split('-')[1];
		var finalPath = ($('#pathId-'+id).text()).replace('/var/www/html/','');
	    fileName = 'http://'+window.location.hostname+'/'+finalPath; 
	    $("#dialog").dialog({
            modal: true,
            title: fileName.split('monthlyinvoice/')[1],  
            width: 800,
            height: 550,
            resizable: false,
            draggable: true,
            open: function () {
                var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"800px\" height=\"500px\">";
                object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                object += "</object>";
                object = object.replace(/{FileName}/g, fileName);
                $("#dialog").html(object);
                $('.ui-button-text').html('&times;');
                $('button[role=button]').removeClass('ui-dialog-titlebar-close');
                $('button[role=button]').addClass('ui-titlebar-close');
                $('button[role=button]').addClass('pull-right');
                $('div').removeClass('ui-widget-overlay');    
            }
        });
	});
	$(document).on('click','.btnSuccessCls',function(){
		$.confirm({
		    title: 'Success !',
		    content: 'Data successfully saved.',
		    buttons: {
		    	OKAY: {
		            btnClass: 'btn-blue',
		            action: function () {
			            window.location.reload();
			        }
		        }
		    }
		});
	});
	
	$(document).on('click', '.linkCls', function(e){
		var getId = $(this).attr('id'); 
	    e.preventDefault(); 
	    var url = $("#"+getId).attr('href'); 
	    window.open(url, '_blank');
	});
	
	/*$(document).on('change','#slctInvYr,#slctInvMnth',function(){
		fileName = "";
		if($('#slctInvYr').val() != "" && $('#slctInvMnth').val() != ""){
			requestData(API_INVOICE_GET+$('#dsaCodeId').text()+'&year='+$('#slctInvYr').val()+'&month='+$('#slctInvMnth').val()).done(function(reply){
				if(reply.reply == "success"){
					$('#invoiceLstRowId').show();
					var finalPath = (reply.path).replace('/var/www/html/','');
				    fileName = 'http://'+window.location.hostname+'/'+finalPath; 
					}else if(reply.reply == "failure"){      
					$('#invoiceLstRowId').hide();   
					alert('No data found.');
					}else if(reply.reply == "gstabsent"){
					$('#invoiceLstRowId').hide();   
					alert('Please submit GST details.');
				}
			});
		}else{
			//alert("Please select Year and Month both.");
		}
	});*/
	
	$(document).on('change','.inv,#prodTypInvId,#slctInvYr,#slctInvMnth,#slctInvQrtrYr,#slctInvQrtrMnth',function(){
		/*$('#slctInvYr').val("");
		$('#slctInvQrtrYr').val("");
		$('#slctInvMnth').val("");
		$('#slctInvQrtrMnth').val("");*/
		if($('#prodTypInvId').val() == "SBL"){
			$('input[name=invqtrmntrd][value=Quarter]').prop('disabled',true);
			$('input[name=invqtrmntrd][value=Month]').prop('checked',true);
		}else if($('#prodTypInvId').val() == "UBL"){
			$('input[name=invqtrmntrd][value=Quarter]').prop('disabled',false);
		}else{
			$('input[name=invqtrmntrd]').prop('checked',false);
			$('#invoiceQrtrRowId').hide();
			$('#invoiceInitRowId').hide();
		}
		if($('input[name=invqtrmntrd]:checked').val() == "Month"){
			$('#invoiceQrtrRowId').hide();
			$('#invoiceInitRowId').show();
		}else if($('input[name=invqtrmntrd]:checked').val() == "Quarter"){
			$('#invoiceQrtrRowId').show();
			$('#invoiceInitRowId').hide();
		}
		
		fileName = "";
		$('#invoiceLstRowId').hide();
			var tblData = '<table class="table table-bordered">'+
				'<thead class="leftbgcolor">'+
				'<tr>'+
				'<td>Sr. No</td>'+
				'<td>Invoice</td>'+
				'<td>View</td>'+
				'</tr>'+
				'</thead>'+
				'<tbody id="invoiceListbdyId"></tbody>'+
				'</table>';
				$('#invoiceBoxId').html(tblData);
			var radVal = $('input[name=invqtrmntrd]:checked').val()
			if(radVal == "Month"){
				var formData = {
						  "year" : radVal=="Month"?$('#slctInvYr').val():$('#slctInvQrtrYr').val(),
						  "month" : radVal=="Month"?$('#slctInvMnth').val():"none",
						  "dsacode" : $('#dsaCodeId').text(),
						  "productname" : $('#prodTypInvId').val(),
						  "quarter":radVal=="Quarter"?$('#slctInvQrtrMnth').val():"none"
						}
			if($('#slctInvYr').val() != "" && $('#slctInvMnth').val() != "" && $('#prodTypInvId').val() != ""){
				requestData(API_INVOICE_POST, "POST" , JSON.stringify(formData)).done(function(invListRep){
					var count = 0;
					var tblRwData = ""
					if($.isEmptyObject(invListRep)){
							tblRwData += '<tr align="center">'+
							'<td colspan="3">NO INVOICE FOUND</td>'+
							'</tr>';
					}else{
						$(invListRep).each(function(k,v){ ++count;
							tblRwData += '<tr>'+
							'<td>'+count+'</td>'+
							'<td>'+v.invoiceno+'</td>'+
							'<td class="a-dis" id="pathId-'+count+'">'+v.invoicepath+'</td>'+
							'<td><button class="btn btn-primary invLink" id="btnIdPth-'+count+'">Show</button></td>'+
							'</tr>';  
					});
					}
					$('#invoiceLstRowId').show();
					$('#invoiceBoxId').show();
					$('#invoiceListbdyId').html(tblRwData);
				});
			 }
			}else if(radVal == "Quarter"){
				var formData = {
						  "year" : radVal=="Month"?$('#slctInvYr').val():$('#slctInvQrtrYr').val(),
						  "month" : radVal=="Month"?$('#slctInvMnth').val():null,
						  "dsacode" : $('#dsaCodeId').text(),
						  "productname" : $('#prodTypInvId').val(),
						  "quarter":radVal=="Quarter"?$('#slctInvQrtrMnth').val():"none",
						}
			if($('#slctInvQrtrYr').val() != "" && $('#slctInvQrtrMnth').val() != ""  && $('#prodTypInvId').val() != ""){
				requestData(API_QRTR_POST, "POST" , JSON.stringify(formData)).done(function(invListRep){
					var count = 0;
					var tblRwData = "";
					if(invListRep[0] === null){
						tblRwData += '<tr align="center">'+
						'<td colspan="3">NO INVOICE FOUND</td>'+
						'</tr>';
					}else{
						$(invListRep).each(function(k,v){ ++count;
							tblRwData += '<tr>'+
							'<td>'+count+'</td>'+
							'<td>Invoice - '+count+'</td>'+
							'<td class="a-dis" id="pathId-'+count+'">'+v.invoicepath+'</td>'+
							'<td><button class="btn btn-primary invLink" id="btnIdPth-'+count+'">Show</button></td>'+
							'</tr>';  
						});
					}
					$('#invoiceLstRowId').show();
					$('#invoiceBoxId').show();
					$('#invoiceListbdyId').html(tblRwData);
				});
			 }
			}
	});
	
	
	/*$(document).on('change','.invPayoutCls,#prodTypInvId,#slctInvQrtrYr,#slctInvQrtrMnth',function(){
		fileName = "";
		if($('#slctInvQrtrYr').val() != "" && $('#slctInvQrtrMnth').val() != ""  && $('#prodTypInvId').val() != ""){
			var tblData = '<table class="table table-bordered table-condensed">'+
			'<thead>'+
			'<tr>'+
			'<td>Sr. No</td>'+
			'<td>Invoice</td>'+
			'<td>View</td>'+
			'</tr>'+
			'</thead>'+
			'</table>';
		var radVal = $('input[name=invqtrmntrd]:checked').val()
		var formData = {
				  "year" : radVal=="Month"?$('#slctInvYr').val():$('#slctInvQrtrYr').val(),
				  "month" : radVal=="Month"?$('#slctInvMnth').val():null,
				  "dsacode" : $('#dsaCodeId').text(),
				  "productname" : $('#prodTypInvId').val(),
				  "quarter":radVal=="Quarter"?$('#slctInvQrtrMnth').val():"none",
				}
		
		}else{
			//alert("Please select Year and Month both.");
		}
	});*/
	
	//$_barChrt();
	//$_pieChart();
	var dateYrOptn = '<option value="">Select Year</option>'
	for(i=(new Date()).getFullYear();i>=2000;i--){
		dateYrOptn += '<option>'+i+'</option>';
	}
	$('#byYearMnth').html(dateYrOptn);
	$('#byYearQrtr').html(dateYrOptn);
	$('#slctInvYr').html(dateYrOptn);
	$('#slctInvQrtrYr').html(dateYrOptn);
	$(document).on('change','.qtrInvmntCls',function(){
		$('#invoiceLstRowId').hide();
		if($('input[name=invqtrmntrd]:checked').val() == "Month"){
			$('#invoiceQrtrRowId').hide();
			$('#invoiceInitRowId').show();
		}else if($('input[name=invqtrmntrd]:checked').val() == "Quarter"){
			$('#invoiceQrtrRowId').show();
			$('#invoiceInitRowId').hide();
		}
	});
	
	$(document).on('change','.qtrmntCls',function(){
		if($('input[name=qtrmntrd]:checked').val() == "Month"){
			$('#qrtrDivId').hide();
			$('#mnthDivId').show();
		}else if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
			$('#qrtrDivId').show();
			$('#mnthDivId').hide();
		}
	});
	

	$(document).on('change','#dsaProTypId',function(){
		$('#pieChartDivId').hide();
		$('#statAppRwId').hide();
		$('#byYearMnth').val("");
		$('#byMnthMnth').val("");
		$('#fnlShwFpyAmntId').hide();
		if($('#dsaProTypId').val() == "SBL"){
			$('input[name=qtrmntrd][value=Month]').prop('checked', true);
			$('#qrtrlyRadColId').hide();
			$('#finalShowQrtId').hide();
			$('#qrtrDivId').hide();
			$('#mnthDivId').show();
		}else if($('#dsaProTypId').val() == "UBL"){
			//$('#qrtrlyRadColId').show();
			
			$('input[name=qtrmntrd][value=Month]').prop('checked', true);
			$('#qrtrlyRadColId').hide();
			$('#finalShowQrtId').hide();
			$('#qrtrDivId').hide();
			$('#mnthDivId').show();
		}
	});
	
	$(document).on('change','.payoutCls',function(){
		agrStsCnt = 0;
		$('#pieChartDivId').hide();
		$('#statAppRwId').hide();
		if($('input[name=qtrmntrd]:checked').val() == "Month"){
			$("input[name=qtrmntrd][value=Month]").prop("checked", true);
			$('#finalShowQrtId').hide();
			if($('input[name=qtrmntrd]:checked').val() == undefined || $('#byYearMnth').val() == "" || $('#byMnthMnth').val() == "" || $('#dsaProTypId').val() == ""){
				
			}else{
				$_payMnth();
			}
		}else if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
			$("input[name=qtrmntrd][value=Quarter]").prop("checked", true);
			$('#fnlShwFpyAmntId').hide();
			if($('input[name=qtrmntrd]:checked').val() == undefined || $('#byYearQrtr').val() == "" || $('#byQrtrQtr').val() == ""){
				
			}else{
				$_payMnth();
			}
		}
	});
	
	$(document).on('change','#stateSlctDsaId',function(){
		var cityList = "<option></option>";
		requestData(API_CITY_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCity){
			$(getCity.data).each(function(k,v){
				cityList += '<option>'+v.city+'</option>';
			});
			$('#citySlctDsaId').html(cityList);
		});
		requestData(API_STATECODE_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCode){
			$('#stateCodeId').val(getCode.statecode);
		});
	}); 
	
	$(document).on('change','#prodTypDsaId',function(){
		if($(this).val() == ""){
			$('#statAppRwId').hide();  
			$('.filterDSA').val('').attr('disabled',true);
		}else{
			$('#statAppRwId').html(mainDsaStat);
			$('#statAppRwId').show();
			var tblData = "";
			var rowNo = 0;
			console.log({"dsa" :$('#dsaCodeId').text(),"productcode":parseInt($('#prodTypDsaId').val())});
			requestData(API_APPSTAT_POST,"POST",JSON.stringify({"dsa" :$('#dsaCodeId').text(),"productcode":parseInt($('#prodTypDsaId').val())})).done(function(reply){
				if($.isEmptyObject(reply)){
/*					tblData += 
						'<tr><td colspan="17" style="text-align:center;">NO DATA FOUND</td></tr>';
						$('#appStatBdyId').html(tblData);*/
						
						$("#dsaStatTblId tfoot").show();
						$('.dsaAppCntCls').text(0);
						
						$('#appLnAmntAvgId').text(0);
						$('#ntPyRteAvgId').text(0);
						$('#appAmntAvgId').text(0);
						
						$('#appLnAmntSumId').text(0);
						$('#appSumAmntId').text(0);
				}else{
					var appliedAmnt = 0,
					netPayRate = 0.00,
					approvedAmnt = 0;
					$("#dsaStatTblId tfoot").hide();
				$(reply).each(function(k,v){++rowNo;
				appliedAmnt += parseInt(v.appliedloanamount);
				netPayRate += parseFloat(v.netpayrate);
				approvedAmnt += parseInt(v.sanctionloanamount);
				tblData += 
					'<tr>'+  
						'<td>'+rowNo+'</td>'+
						'<td>'+(v.year==undefined?'':v.year)+'</td>'+
						'<td>'+(v.disbmonth==undefined?'':v.disbmonth)+'</td>'+
						'<td>'+(v.state==undefined?'':(v.state))+'</td>'+
						'<td>'+(v.location==undefined?'':v.location)+'</td>'+
						'<td>'+(v.customer==undefined?'':v.customer)+'</td>'+
						'<td>'+(v.salesmanger==undefined?'':v.salesmanger)+'</td>'+
				    //	'<td>'+(v.dsaname==undefined?'0':v.dsaname)+'</td>'+
						'<td class="appliedloanamountCls">'+(v.appliedloanamount==undefined?'':$comPut(v.appliedloanamount))+'</td>'+
						'<td>'+(v.accept==undefined?'':v.accept)+'</td>'+
						'<td>'+(v.rejectreason==undefined?'':v.rejectreason)+'</td>'+
					//	'<td>'+(v.losid==undefined?'':v.losid)+'</td>'+
					//	'<td>'+(v.camdate==undefined?'':(v.camdate))+'</td>'+
						'<td>'+(v.hold_pending==undefined?'':v.hold_pending)+'</td>'+
						'<td>'+(v.pddate==undefined?'':v.pddate)+'</td>'+
						'<td style="background-color:#d6efff">'+(v.status==undefined?'':v.status)+'</td>'+
						'<td class="netpayrateCls">'+(v.netpayrate==undefined?'0':parseFloat(v.netpayrate).toFixed(2))+'</td>'+
						'<td class="sanctionloanamountCls">'+(v.sanctionloanamount==undefined?'':$comPut(v.sanctionloanamount))+'</td>'+
						'<td>'+(v.disbdate==undefined?'':v.disbdate)+'</td>'+
						'</tr>';
				});
				$('#appStatBdyId').html(tblData);
				$('.dsaAppCntCls').text(rowNo);
				
				$('#appLnAmntAvgId').text($comPut(parseFloat(appliedAmnt/rowNo).toFixed(0)));
				$('#ntPyRteAvgId').text(parseFloat(netPayRate/rowNo).toFixed(2));
				$('#appAmntAvgId').text($comPut(parseFloat(approvedAmnt/rowNo).toFixed(0)));
				
				$('#appLnAmntSumId').text($comPut(appliedAmnt));
				$('#appSumAmntId').text($comPut(approvedAmnt));
				$('.filterDSA').val('').attr('disabled',false);
				requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
					$(reply.accessList).each(function(k,v){
					if( v.DSA_TAB == "READ ONLY" ||  v.DSA_TAB == "READONLY" || v.DSA_TAB == "READ" ){
						$('#appStatBdyId input, #appStatBdyId select, #appStatBdyId textarea, #appStatBdyId button').prop('disabled', true);
					}else if( v.DSA_TAB == "WRITE" ||  v.DSA_TAB == "VIEW ALL"){
						$('#appStatBdyId input, #appStatBdyId select, #appStatBdyId textarea, #appStatBdyId button').prop('disabled', false);
					}else{
						$('#appStatBdyId input, #appStatBdyId select, #appStatBdyId textarea, #appStatBdyId button').prop('disabled', false);
					}
					});
			});
				}
			});
		}
	});
	 $(".filterDSA").on("change", function() {
		    var cls = this.className.split(" ")[1]
		    	,value = $("."+cls+" option:selected").text().toLowerCase()
		    	,noData
		    	,rowNo = 0;
		    if(value == "select yearselect month"){
		    	var appliedAmnt = 0,
			    	netPayRate = 0.00,
			    	approvedAmnt = 0;
		    	$("#appStatBdyId tr").css("display","table-row")
		    	$("#dsaStatTblId tfoot").hide();
		    	rowNo = $("#dsaStatTblId tbody > tr:visible").length;
		    	$($(".appliedloanamountCls:visible")).each(function(k,v){
		    		appliedAmnt +=parseInt($comRem($(v).text()))
		    	})
		    	$($(".netpayrateCls:visible")).each(function(k,v){
		    		netPayRate +=parseFloat($comRem($(v).text()))
		    	})
		    	$($(".sanctionloanamountCls:visible")).each(function(k,v){
		    		approvedAmnt +=parseInt($comRem($(v).text()))
		    	})
		    	$('.dsaAppCntCls').text(rowNo);
		    	$('#appLnAmntAvgId').text($comPut(parseFloat(appliedAmnt/rowNo).toFixed(0)));
		    	$('#ntPyRteAvgId').text(parseFloat(netPayRate/rowNo).toFixed(2));
		    	$('#appAmntAvgId').text($comPut(parseFloat(approvedAmnt/rowNo).toFixed(0)));
		    	$('#appLnAmntSumId').text($comPut(appliedAmnt));
		    	$('#appSumAmntId').text($comPut(approvedAmnt));
		    }else{
		    	if(value.includes("select month")){
		    		value = value.split("select ")[0]
			    }else if(value.includes("select year")){
			    	value = value.split("year")[1]
			    }
			    $("#appStatBdyId tr").filter(function() {
			    	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			    	if ($(this).text().toLowerCase().indexOf(value) == -1) {
			    		noData == undefined ? noData = true : noData = noData;
			    		noData = noData && true;
			    	} else {
			    		noData == undefined ? noData = false : noData = noData;
			    		noData = noData && false;
			    	}
			    });
		    }
		    
		    if (noData) {
		    	$("#dsaStatTblId tfoot").show();
		    	$('.dsaAppCntCls').text(0);
				$('#appLnAmntAvgId').text(0);
				$('#ntPyRteAvgId').text(0);
				$('#appAmntAvgId').text(0);
				$('#appLnAmntSumId').text(0);
				$('#appSumAmntId').text(0);
		    } else if (noData == false) {
		    	var appliedAmnt = 0,
			    	netPayRate = 0.00,
			    	approvedAmnt = 0;
		    	$("#dsaStatTblId tfoot").hide();
		    	rowNo = $("#dsaStatTblId tbody > tr:visible").length;
		    	$($(".appliedloanamountCls:visible")).each(function(k,v){
		    		appliedAmnt +=parseInt($comRem($(v).text()))
		    	})
		    	$($(".netpayrateCls:visible")).each(function(k,v){
		    		netPayRate +=parseFloat($comRem($(v).text()))
		    	})
		    	$($(".sanctionloanamountCls:visible")).each(function(k,v){
		    		approvedAmnt +=parseInt($comRem($(v).text()))
		    	})
		    	$('.dsaAppCntCls').text(rowNo);
		    	$('#appLnAmntAvgId').text($comPut(parseFloat(appliedAmnt/rowNo).toFixed(0)));
		    	$('#ntPyRteAvgId').text(parseFloat(netPayRate/rowNo).toFixed(2));
		    	$('#appAmntAvgId').text($comPut(parseFloat(approvedAmnt/rowNo).toFixed(0)));
		    	$('#appLnAmntSumId').text($comPut(appliedAmnt));
		    	$('#appSumAmntId').text($comPut(approvedAmnt));
		    }
	 });
});


function $_yearList(initOpt,idToApp){
	var dateYrOptn = initOpt;
		for(i=(new Date()).getFullYear();i>=2000;i--){
			dateYrOptn += '<option>'+i+'</option>';
	}
	$('#'+idToApp).html(dateYrOptn);
}
function $_appStatus(){ 
	$('nav').css({"width":"1650px"})
	$('#prodRowId').show();
	$('#prodTypDsaId').val("");
	$('#btntoggleClick').click();
	$('#welcmMsgId').hide();
	$('#gstRowId').hide();
	$('#payOutRowId').hide();
	$('#statAppRwId').hide();
	//$('#statAppId').html(appStat);
	$('#invoiceInitRowId').hide();
	$('#invoiceLstRowId').hide();
	$('#invoiceQrMnSlctId').hide();
	$('#invoiceQrtrRowId').hide();
	$('.resetCls').val("");
	$('#invoiceRowId').hide();
	$('#dsaSbmtSecondId').hide();
}

function $_gstDet(){
	$('#prodRowId').hide();
	$('#btntoggleClick').click();
	$('#welcmMsgId').hide();
	$('#gstRowId').show();
	$('#payOutRowId').hide();
	$('#statAppRwId').hide();

	 $('#invoiceInitRowId').hide();
	 $('#invoiceLstRowId').hide();
	 $('#invoiceQrMnSlctId').hide();
	 $('#invoiceQrtrRowId').hide();
	
		 requestData(API_DSA_GET+localStorage.getItem('userId'),"GET").done(function(reply){
			console.log('reply-',reply);	
			 compData = reply;
				if(reply.gstdetails === null){
				$('#cmpNameDsId').val(reply.companyname);
				$('#compPanDsId').val(reply.companypan);
				$('#compAddId').val(reply.address);
				
				$('#bankNameDsaId').val(reply.bankname);
				$('#accNumDsaId').val(reply.accountno);
				$('#ifscCodeId').val(reply.ifsccode);
				$('#bankAccNameDsaId').val(reply.bankaccountname);
				requestData(API_STATE_GET).done(function(getState){
					var stateList = "<option></option>";
					$(getState.data).each(function(k,v){
						stateList += '<option>'+v.state+'</option>';
					});
					$('#stateSlctDsaId').html(stateList);
					$('#stateSlctDsaId').val(reply.state);
					var cityList = "<option></option>";
					requestData(API_CITY_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCity){
					$(getCity.data).each(function(k,v){
						cityList += '<option>'+v.city+'</option>';
					});
						$('#citySlctDsaId').html(cityList);
						$('#citySlctDsaId').val(reply.city);
					});
					requestData(API_STATECODE_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCode){
						$('#stateCodeId').val(getCode.statecode);
					});
				});
				$('#gstCodeId').val(reply.gstcode);
				$('#hsnCodeId').val(reply.hsncode);
				$('#stateCodeId').val(reply.statecode);
			}else{
				$('#cmpNameDsId').val(reply.gstdetails.companyname);
				$('#compPanDsId').val(reply.gstdetails.companypan);
				$('#compAddId').val(reply.gstdetails.address);
				
				$('#bankNameDsaId').val(reply.gstdetails.bankname);
				$('#accNumDsaId').val(reply.gstdetails.accountno);
				$('#ifscCodeId').val(reply.gstdetails.ifsccode);
				$('#bankAccNameDsaId').val(reply.gstdetails.bankaccountname);
				requestData(API_STATE_GET).done(function(getState){
					var stateList = "<option></option>";
					$(getState.data).each(function(k,v){
						stateList += '<option>'+v.state+'</option>';
					});
					$('#stateSlctDsaId').html(stateList);
					$('#stateSlctDsaId').val(reply.gstdetails.state);   
					var cityList = "<option></option>";
					requestData(API_CITY_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCity){
						$(getCity.data).each(function(k,v){
							cityList += '<option>'+v.city+'</option>';
						});
							$('#citySlctDsaId').html(cityList);
							$('#citySlctDsaId').val(reply.gstdetails.city);
						});
					requestData(API_STATECODE_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCode){
						$('#stateCodeId').val(getCode.statecode);
					});
				});
				$('#gstCodeId').val(reply.gstdetails.gstcode);
				$('#hsnCodeId').val(reply.gstdetails.hsncode);
				$('#stateCodeId').val(reply.gstdetails.statecode);
			}
			});
}
function $_gstSubmit(event){
	event.preventDefault();
	console.log('compDataBefore-',compData);
	var gstdetails = {
			"companyname" : $('#cmpNameDsId').val(),
			"companypan" : $('#compPanDsId').val(),
			"address" : $('#compAddId').val(),
			"state" : $('#stateSlctDsaId').val(),
			"city" :  $('#citySlctDsaId').val(),
			
			"bankname" : $('#bankNameDsaId').val(),
			"accountno" : $('#accNumDsaId').val(),
			"ifsccode" : $('#ifscCodeId').val(),
			"bankaccountname": $('#bankAccNameDsaId').val(),
			
			"gstcode" :  $('#gstCodeId').val(),
			"hsncode" :  $('#hsnCodeId').val(),
			"statecode" :  $('#stateCodeId').val()
	}	
		compData['gstdetails'] = gstdetails;
	console.log('compData-',compData);
	requestData(API_DSA_POST,"POST",JSON.stringify(compData)).done(function(reply){
		if(reply.reply == "success"){
			$('#gstFormId')[0].reset();
			alert('Data successfully saved.');
			window.location.reload();
			//$('.btnSuccessCls').click();
		}
	});  
}
function $_payouts(){

	$('#btntoggleClick').click();
	$('input[name=qtrmntrd]').prop('checked',false);
	$('#welcmMsgId').hide();
	
	$('#gstRowId').hide();
	$('#payOutRowId').show();
	
	$('#statAppRwId').hide();
	$('#prodRowId').hide();
	
	$('#finalShowQrtId').hide();
	$('#fnlShwFpyAmntId').hide();
	
	$('#pieChartDivId').hide();
	
	$('#qrtrDivId').hide();
	$('#mnthDivId').hide();
	
	$('#invoiceInitRowId').hide();
	$('#invoiceLstRowId').hide();
	$('#invoiceQrMnSlctId').hide();
	$('#invoiceQrtrRowId').hide();
	$('.resetCls').val("");
	
	$('#invListTblId').hide();
	$('#dsaSbmtSecondId').hide();
	//demo

//	$('#dsaProTypId').val('UBL');
//	$("input[name='qtrmntrd'][value='Month']").click();
//	$('#byYearMnth').val('2018');
//	$('#byMnthMnth').val("5");
//	$('#byMnthMnth').change();
//	$('#invoiceRowId').hide();
//	
	
}

function isEmpty(val){
	return val==""
}

function $_conStsChk(_this,_id,_value,_get){

	var id = _id.split('-')[1]
	var tblRow = $('#payoutTblId tr').length - 4;
	var chckAll = false;
	countChck = 0;
	for(i=1;i<=tblRow;i++) {
		if($('#dsaConfirmId-'+i).val() == "") {
			countChck++;  
		}else if($('#dsaConfirmId-'+i).val() == "AGREE"){
			$('#remarkId-'+i).attr('required',false);
		}else if($('#dsaConfirmId-'+i).val() == "DISAGREE") {
			$('#remarkId-'+i).attr('required',true);
		}
	}
	
	if(_get){
		if(_value === undefined || _value == "Yet To Confirm"){
			$('#dsaConfirmId-'+id).val("").attr("disabled",false);
			$('#remarkId-'+id).attr({"disabled":false,'required':false}).prop('placeholder',"");
		}else{ 
			if(_value == "DISAGREE"){
				$('#dsaConfirmId-'+id).val(_value).attr("disabled",false);
				$('#remarkId-'+id).attr({"disabled":false,'required':true}).prop('placeholder',"Please enter Remark");
			}else{
				$('#dsaConfirmId-'+id).val(_value).attr("disabled",true);
				$('#remarkId-'+id).attr({"disabled":true,'required':false}).prop('placeholder',"");
			}
		}
		if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
			$('#dsaConfirmId-'+id).val(_value).attr("disabled",true);
			$('#remarkId-'+id).attr({"disabled":true,'required':false}).prop('placeholder',"");
		}
		return false
	}else{
		
		/*if(countChck > 0){
			$('#invSbmtId').hide();
			$('#invListTblId').hide();
			$('#invoiceRowId').hide();
			$('#dsaSbmtSecondId').show();
		}else {*/

			$('#dsaSbmtSecondId').hide();
			$('#invSbmtId').show();
			var classs = $(_this).attr("class").split(" ")[2];
			var dynCls = $("." + classs);
			var agrFlag_temp = false;
			var stateValue = $("#state-"+id).text()
//			console.log(classs)
			
			$(dynCls).each(function(k,v){
				if(v.value == "AGREE"){
					agrFlag_temp = true
				}else{
					agrFlag_temp = false
					return false
				}
			});
			
			if(agrFlag_temp){
				$('#invListTblId').show();
				$('#invoiceRowId').show();
				$('#invoiceRowId tbody').append(dsaHtml.invoice(classs,stateValue,'',false));
			}else{
				var chkIfId = isNaN(parseInt($('#hid-'+classs).text().trim()))?0:parseInt($('#hid-'+classs).text().trim());
				if(chkIfId == 0) {
					$(`#inv-${classs}`).remove();
				}else {
					requestData(API_INVOICE_DEL,"POST",JSON.stringify([{"invoiceid" : parseInt($('#hid-'+classs).text().trim())}])).done(function(replyDel) {
						if(replyDel.reply == "success") {
							$(`#inv-${classs}`).remove();
						}else{
							
						}
					}).error(function(e) {
						console.log(e);
					});
				}
				if($('#invListTblBdyId tr').length > 0) {
					$('#invListTblId').show();
					$('#invoiceRowId').show();
					$('#invSbmtId').show();
					$('#dsaSbmtSecondId').hide();
				}else{
					$('#invListTblId').hide();
					$('#invoiceRowId').hide();
					$('#dsaSbmtSecondId').show();
					$('#invSbmtId').hide();
				}
			}
		//}
	}

}
function $_listLos(noOfRows, state){
var formLosList = {};
var arrLosList = [];

for(var i=1;i<=noOfRows;i++){
	if($('#state-'+i).text().toUpperCase() == state.toUpperCase()){
		formLosList = {
				"losid" : $('#losidPayoutId-'+i).text(),
				"companyname" : $('#compNme-'+i).text(),
				"netpayrate" : $('#netPayRateId-'+i).text(),
				"finalpayoutamount" : parseFloat($comRem($('#finalpayoutamount-'+i).text()))
		}
		arrLosList.push(formLosList);
	}else{
		
	}
}
return arrLosList;
}
function $_payoutSbmt(event){
	
	event.preventDefault();
	
	$(postData).each(function(k,v){
		id = k+1 ;
		newData = {
						  "dsadetailsid" : v.dsadetailsid,
						  "productname" : v.productname,
						  "applied_loan_amount" : v.applied_loan_amount,
						  "location" : v.location,
						  "state" : v.state,
						  "companyname" : v.companyname,
						  "salesmanager" : v.salesmanger,
						  "dsa" : v.dsa,
						  "status" : v.status,
						  "sanctionedamount" : v.sanctionloanamount,
						  "payrate" : v.definedpayrate,
						  "subvention" : v.subvention,
						  "netpayrate" : v.netpayrate,
						  "include" : v.include,
						  "finalpayoutamount" : v.finalpayoutamount,
						  "roi" : v.roi,
						  "interestamount" : v.intamt,
						  "pf" : v.pf,
						  "pfamount" : v.pfamount,
						  "losid" : v.losid,
						  "sanctioned_amount_total" : v.sanctioned_amount_total,
						  "avgnetpayrate" : v.avgnetpayrate,
						  "finalpayoutamount_total" : v.finalpayoutamount_total,
						  "avgroi" : v.avgroi,
						  "int_amount_total" : v.int_amount_total,
						  "avgpf" : v.avgpf,
						  "dsacode" : v.dsacode,
						  "year": v.year,
						  "month": $('#byMnthMnth').val(),
						  "paymentFlag": v.paymentFlag,
						  "misFlag" : v.misFlag,
						  "frequency" : v.frequency,
						  "gatekeeperid" : v.gatekeeperid,  
						  "pfamounttotal" : v.pfamounttotal,
						  "remark" : $('#remarkId-'+id).val(),
						  "paymentdate" : v.paymentdate===undefined?"":v.paymentdate,
						  "constatus" : $('#dsaConfirmId-'+id).val()==""?"Yet To Confirm":$('#dsaConfirmId-'+id).val(),
						  "quarterlypayrate": v.quarterlypayrate===undefined? 0: v.quarterlypayrate,
  						  "quarterlytotalpayout": v.quarterlytotalpayout===undefined? 0: v.quarterlytotalpayout,
						};
		finalpostData.push(newData)
	});
		console.log('finalpostData-',finalpostData);
		$('#dsaSbmtSecondId').attr('disabled',true);
		requestData(API_COST_POST,"POST",JSON.stringify(finalpostData)).done(function(reply){
			 if(reply.reply == "success"){
				 var trArray = $(`#invListTblBdyId tr`);
				 var countState = $('#payoutTblId tr').length - 4;
				 var postJSON_array = [];
				 $(trArray).each(function(k, v){
					//console.log(k, v);
					 //
					 if($(v).children(".temp-cls-equip").html().trim() != "") {
							postJSON_array.push({
								  "invoicename" : null,
								  "invoicepath" : $(v).children("td").children("a").attr('href'),
								  "updated_date" : null,
								  "year" : $('#byYearMnth').val(),
								  "month" : $("#byMnthMnth option:selected").text(),
								  "dsacode" : $('#dsaCodeId').text(), 
								  "productname" : $("#dsaProTypId").val(),
								  "invoiceno": $(v).children("td").children(".temp-cls-invNo").val(),
							      "gstnumber": $(v).children("td").children(".temp-cls-gstNo").val(),
							      "invoiceamount" :  isNaN(parseInt($(v).children(".temp-cls-invAmnt").text()))?0:parseInt($(v).children(".temp-cls-invAmnt").text()),
							      "invoiceid" : isNaN(parseInt($(v).children(".temp-hid-state").text()))?0:parseInt($(v).children(".temp-hid-state").text()),
							      "state": $(v).children(".temp-cls-state").text(),
							      "loan_billing_state": $(v).children(".temp-cls-billing-state").text(),
								  "listlos" : $_listLos(countState, $(v).children(".temp-cls-state").text().toUpperCase()),
								  "submit_flag" : "Yes"
							});
					 }
				}); 
				 requestData(API_INVOICE_GET,"POST",JSON.stringify(postJSON_array)).done(function(invReply) {
					 if(invReply.reply == "success"){
					 requestData(API_EMAIL_NSM,"POST",JSON.stringify(finalpostData)).done(function(emailReply){
							if(emailReply.reply == "success"){
								$('#dsaSbmtSecondId').attr('disabled',false);
								$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
								$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
								$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Data saved successfully.');
								$('#sucMwFtrId').html('<div align="center">'+
								          				'<button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal" onclick="$_reloadWindow();">OK</button>'+
								         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
								          				'</div>');
								$('#sucModalWindId').click();
							}
						});
					 }
				 });
				}
			//console.log(postJSON_array);
		}).fail(function(e){
			$('#dsaSbmtSecondId').attr('disabled',false);
		});	
}
function $_reloadWindow() {
	window.location.reload();
}
function $_payMnth(){
	$('#statAppRwId').show();
	$('#statAppRwId').html(appStat);
	$('#fpaTdId').show();
	
	var tblDataPayout = ""
		,rowNo = 0
		,dummy;
//		dummy="AGREE";
	if($('input[name=qtrmntrd]:checked').val() == "Month"){
		var jsonData = {
				  "dsacode" : $('#dsaCodeId').text(),
				  "year":$('#byYearMnth').val(),
				  "month":$("#byMnthMnth option:selected").text(),
				  "productname" : $('#dsaProTypId').val()     
				}
		requestData(API_PAYOUT_POST,"POST",JSON.stringify(jsonData)).done(function(reply){
			var netPayRate= 0.00;
			var sancLoanAmnt = 0;
			var finalPayOutAmntTtl = 0;
			$('nav').css({"width":"1200px"});
			if($.isEmptyObject(reply)){
				tblDataPayout += 
				'<tr style="background-color:#fff;"><td colspan="10" style="text-align:center;">NO DATA FOUND</td></tr>';
				$("#dsaStatTblId tfoot").show();
				$('#fnlShwFpyAmntId').hide();
				$('#pieChartDivId').hide();
				$('#dsaNtPyRtAvgId').text(0);
				$('#sancAmntAvgId').text(0);
				$('#fnlPayAmntAvgId').text(0);
				$('.dsaSlfCntCls').text(0);
			}else{
				postData = reply;
				$("#dsaStatTblId tfoot").hide();
				$(reply).each(function(k,v){++rowNo;
				tblDataPayout += 
					'<tr style="background-color:#fff;">'+
						'<td id="srNo-'+rowNo+'">'+rowNo+'</td>'+
						'<td id="state-'+rowNo+'" class="a-di stateCls">'+(v.state==undefined?'':v.state)+'</td>'+
						'<td id="location-'+rowNo+'" style="min-width: 100px">'+(v.location==undefined?'':v.location)+'</td>'+
					//	'<td id="year-'+rowNo+'">'+(v.year==undefined?'':v.year)+'</td>'+
						'<td id="month-'+rowNo+'" class="dsaMonthDis">'+(v.month==undefined?'':(v.month))+'</td>'+
						'<td id="compNme-'+rowNo+'">'+(v.companyname==undefined?'':v.companyname)+'</td>'+
						'<td id="slsMngr-'+rowNo+'">'+(v.salesmanger==undefined?'':v.salesmanger)+'</td>'+
					//	'<td id="sts-'+rowNo+'">'+(v.status==undefined?'':v.status)+'</td>'+
						'<td id="netPayRateId-'+rowNo+'">'+(v.netpayrate==undefined?'0':parseFloat(v.netpayrate).toFixed(2))+'</td>'+
						'<td id="sancLnAmnt-'+rowNo+'">'+(v.sanctionloanamount==undefined?'':$comPut(v.sanctionloanamount))+'</td>'+
						'<td id="finalpayoutamount-'+rowNo+'">'+(v.finalpayoutamount==undefined?'':$comPut(v.finalpayoutamount))+'</td>'+		
						`
						<td>
						<select id="dsaConfirmId-${rowNo}"
								class="form-control slctDCCls dynCls-${v.state}"
								onchange="$_conStsChk(this,this.id,$(this).val(),false);" required>
							<option value="">Select Status</option>
							<option>AGREE</option>
							<option selected>DISAGREE</option>
						</select>
						</td>
						<td>
						<input id="remarkId-${rowNo}" type="text" class="form-control remarkCls" value="${v.remark===undefined?"":v.remark}">
						<span id="losidPayoutId-${rowNo}" class="a-dis">${v.losid}</span>
						</td>
						`+
						'</tr>';
				netPayRate = netPayRate + parseFloat(v.netpayrate);
				sancLoanAmnt = sancLoanAmnt + parseInt(v.sanctionloanamount);
				finalPayOutAmntTtl = finalPayOutAmntTtl + parseInt(v.finalpayoutamount);
			}); 
				$('#fnlShwFpyAmntId').show();
				$('#pieChartDivId').show();
				$('#finlPyOtTtlAmnt').val($comPut(finalPayOutAmntTtl));
				$_totalPieChart(reply);
				$('#pieChartDivId').show();
			}
			$('#appStatBdypayoutId').html(tblDataPayout);
			$('.dsaMonthDis').hide();
		//	$('#appStatBdyId').html(tblData);
			$('.dsaSlfCntCls').text(rowNo);
			
			$('#dsaNtPyRtAvgId').text(isNaN(parseFloat(netPayRate/rowNo).toFixed(2))?0:parseFloat(netPayRate/rowNo).toFixed(2));
			$('#sancAmntAvgId').text(isNaN(sancLoanAmnt/rowNo)?0:$comPut((sancLoanAmnt/rowNo).toFixed(0)));
			$('#fnlPayAmntAvgId').text(isNaN((finalPayOutAmntTtl/rowNo).toFixed(0))?0:$comPut((finalPayOutAmntTtl/rowNo).toFixed(0)));
			
			$('#sancSumAmntId').text(isNaN(sancLoanAmnt)?0:$comPut(sancLoanAmnt));
			$('#fnlPayAmntSumId').text(isNaN(finalPayOutAmntTtl)?0:$comPut(finalPayOutAmntTtl));
			
			var slctCnt = 0;
			$(reply).each(function(k,v){++slctCnt;
			$_conStsChk(false,'dsaConfirmId-'+slctCnt,v.constatus,true);
			});
			
			 var countDesc = 0;
			 var countTblRw = $('#appStatBdypayoutId tr').length;
			 
			 for(i=1;i<=countTblRw;i++) {
				 if($('#dsaConfirmId-'+i).val() != "") {
					 countDesc++;
				 }
			 }
			 
			 if(countDesc == countTblRw) {
				 var invoiceData = {
					        "year": $('#byYearMnth').val(),
					        "month": $("#byMnthMnth option:selected").text(),
					        "quarter": "none",
					        "dsacode": $('#dsaCodeId').text(), 
					        "productname": $("#dsaProTypId").val()
					    }
				 requestData(API_INVOICE_POST,"POST",JSON.stringify(invoiceData)).done(function(replyInv) {
					 if($.isEmptyObject(replyInv)) {
						 $('#invListTblId').hide();
							$('#invoiceRowId').hide();
							$('#invoiceRowId tbody').html("");
							 $('#dsaSbmtSecondId').show();
							 $('#invSbmtId').hide();
					 }else {

							$('#invListTblId').show();
							$('#invoiceRowId').show();
							$('#invoiceRowId tbody').html("");
							 $('#dsaSbmtSecondId').show();
							 $('#invSbmtId').hide();
							$(replyInv).each(function(k,v) {
								$('#invoiceRowId tbody').append(dsaHtml.invoice('dynCls-'+v.state, v.state,v.loan_billing_state,true));
							});

							 stateArr=[];
							 
							/* $($('.slctDCCls')).each(function(ke,val){
									$($(val).attr('class').split(' ')).each(function(k,c){
										if(c.includes('dynCls')){
											state = c.split('-')[1];
											decision = $(val).val();
											stateArr.push(state);
											stateArr = $.unique(stateArr);
											$(replyInv).each(function(key,i) {
												if(state == i.state){
													if(1==1) {
														if(decision == "AGREE"){
															$('#invoiceRowId tbody').append(dsaHtml.invoice('dynCls-'+i.state, i.state,i.loan_billing_state,true));
														}
													}
												}
											});
										}
									})
							});*/ 
							 
							
							var trArray = $(`#invListTblBdyId tr`);
							$(trArray).each(function(k, v){
								var filepath;
							 	var finalPath;
							 	var invoicepath = replyInv[k]['invoicepath'];
							 	var state = replyInv[k]['state'];
							 	//replyInv[k]['invoicepath']
								if(invoicepath !=null){
									filepath = (invoicepath).replace("/var/www/html/","");
									finalPath = 'http://'+window.location.hostname+'/'+filepath;
								}
								$(v).children(".temp-cls-action").html(`
										<a href="${finalPath}"
										   id="inv${remSpc(state)}Id" class="linkCls">
										 	View/Download
										 </a>
								`); 
								$(v).children(".temp-hid-state").html(`
										${replyInv[k]['invoiceid']}
								`);
								$(v).children(".temp-hid-invAmnt").html(`
										${replyInv[k]['invoiceamount']}
								`);
								$(v).children(".temp-hid-submit_flag").html(`
										${replyInv[k]['submit_flag']}
								`);
								$(v).children(".temp-hid-id").html(`
										${replyInv[k]['invoiceid']}
								`);
								$(v).children("td").children(".temp-cls-gstNo").val(replyInv[k]['gstnumber']).attr('disabled',true);
								$(v).children("td").children(".temp-cls-invNo").val(replyInv[k]['invoiceno']).attr('disabled',true);;
								var href = $(v).children("td").children(".temp-cls-action").attr("href");
							});
							
							 $('#invListTblBdyId tr').each(function(k,v){
								 $('#appStatBdypayoutId tr').each(function(ke,va){
									 if($(v).children(".temp-cls-state").text() == $(va).children("#state-"+(ke+1)).text()) {
										if($(va).children("td").children("#dsaConfirmId-"+(ke+1)).val() == "DISAGREE"){
//											$('#inv-dynCls-'+$(va).children("#state-"+(ke+1)).text()).remove();
											state = $(va).children("#state-"+(ke+1)).text()
											requestData(API_INVOICE_DEL,"POST",JSON.stringify([{"invoiceid" : parseInt($('#hid-dynCls-'+state).text().trim())}])).done(function(replyDel) {
												if(replyDel.reply == "success") {
//													$(`#inv-${classs}`).remove();
													$('#inv-dynCls-'+$(va).children("#state-"+(ke+1)).text()).remove();
												}else{
													
												}
											}).error(function(e) {
												console.log(e);
											});
										}
									 }
								 });					
							 });
					 }
				 });
			 }
		});
	}else if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
		var jsonData = {
				  "dsacode" : $('#dsaCodeId').text(),
				  "year":$('#byYearQrtr').val(),
				  "month":$('#byQrtrQtr').val(),
				  "productname" : $('#dsaProTypId').val()     
				}                  
		requestData(API_QUARTERLY_POST,"POST",JSON.stringify(jsonData)).done(function(reply){
			var sumSanc = 0;
			var qtrlySlab = 0;
			var qrtlyPayotTtl = 0;
			var netPayRate= 0.00;
			var finalPayOutAmntTtl = 0;
			$('nav').css({"width":"1300px"});
			if($.isEmptyObject(reply)){
				tblData += 
					'<tr style="background-color:#fff;"><td colspan="10" style="text-align:center;">NO DATA FOUND</td></tr>';
					$('#finalShowQrtId').hide();
					$('#pieChartDivId').hide();
					$('#dsaNtPyRtAvgId').text(0);
					$('#sancAmntAvgId').text(0);
					$('#fnlPayAmntAvgId').text(0);
					$('.dsaSlfCntCls').text(0);
			}else{
				postData = reply;
				$("#dsaStatTblId tfoot").hide();
				$(reply).each(function(k,v){++rowNo;
				tblData += 
					'<tr style="background-color:#fff;">'+
						'<td id="srNo-'+rowNo+'">'+rowNo+'</td>'+
						'<td id="location-'+rowNo+'" style="min-width: 100px">'+(v.location==undefined?'':v.location)+'</td>'+
						'<td id="state-'+rowNo+'" class="a-dis stateCls">'+(v.state==undefined?'':v.state)+'</td>'+
				//		'<td id="year-'+rowNo+'">'+(v.year==undefined?'':v.year)+'</td>'+
						'<td id="month-'+rowNo+'" class="dsaMonthDis">'+(v.month==undefined?'':(v.month))+'</td>'+
						'<td id="compNme-'+rowNo+'">'+(v.companyname==undefined?'':v.companyname)+'</td>'+
						'<td id="slsMngr-'+rowNo+'">'+(v.salesmanger==undefined?'':v.salesmanger)+'</td>'+
				//		'<td id="sts-'+rowNo+'">'+(v.status==undefined?'':v.status)+'</td>'+
						'<td id="netPayRateId-'+rowNo+'">'+(v.netpayrate==undefined?'0':parseFloat(v.netpayrate).toFixed(2))+'</td>'+
						'<td id="sancLnAmnt-'+rowNo+'">'+(v.sanctionloanamount==undefined?'':$comPut(v.sanctionloanamount))+'</td>'+
						'<td id="finalpayoutamount-'+rowNo+'">'+(v.finalpayoutamount==undefined?'':$comPut(v.finalpayoutamount))+'</td>'+
						`
						<td>
						<select id="dsaConfirmId-${rowNo}"
								class="form-control slctDCCls"
								onchange="$_conStsChk(this,this.id,$(this).val(),false)" >
							<option value="">Select Status</option>
							<option>AGREE</option>
							<option selected>DISAGREE</option>
						</select>
						</td>
						<td>
						<input id="remarkId-${rowNo}" type="text" class="form-control remarkCls" value="${v.remark===undefined?"":v.remark}">
						</td>
						`+
						'</tr>';
				sumSanc = sumSanc + parseInt(v.sanctionloanamount);
				qtrlySlab = v.quarterlypayrate;
				qrtlyPayotTtl = v.quarterlytotalpayout;
				netPayRate = netPayRate + parseFloat(v.netpayrate);
				finalPayOutAmntTtl = finalPayOutAmntTtl + parseInt(v.finalpayoutamount);
			}); 
				$('#finalShowQrtId').show();
				$('#sancTtlAmnt').val($comPut(sumSanc));
				$('#qrtrlySlbId').val($comPut(qtrlySlab));
				$('#snctnAmntTtl').val($comPut(sumSanc));
				$('#qrtrlyTtlPayout').val($comPut(qrtlyPayotTtl.toFixed(0)));
				$_totalBarChart(reply);
				$('#pieChartDivId').show();
				if(qtrlySlab == 0) {
					$('.hideQrtrCls').hide();
				}else {
					$('.hideQrtrCls').show();
				}
			}
			$('#appStatBdypayoutId').html(tblData);
			$('.dsaMonthDis').show();
			$('.dsaSlfCntCls').text(rowNo);
			
			$('#dsaNtPyRtAvgId').text(isNaN(parseFloat(netPayRate/rowNo).toFixed(2))?0:parseFloat(netPayRate/rowNo).toFixed(2));
			$('#sancAmntAvgId').text(isNaN(sumSanc/rowNo)?0:$comPut((sumSanc/rowNo).toFixed(0)));
			$('#fnlPayAmntAvgId').text(isNaN((finalPayOutAmntTtl/rowNo).toFixed(0))?0:$comPut((finalPayOutAmntTtl/rowNo).toFixed(0)));
			
			$('#sancSumAmntId').text(isNaN(sumSanc)?0:$comPut(sumSanc));
			$('#fnlPayAmntSumId').text(isNaN(finalPayOutAmntTtl)?0:$comPut(finalPayOutAmntTtl));
			
			var slctCnt = 0;
			$(reply).each(function(k,v){++slctCnt;
				$_conStsChk(false,'dsaConfirmId-'+slctCnt,v.constatus,true)
			});
		});
	}
}  
function $_pieChart(dataAmnt,city){
	$('#pieDivId').show();
	$('#barDivId').hide();
	var canvas = document.getElementById("pieChartId");
	var ctx = canvas.getContext('2d');
	
	var coloR = [];
	var borderColor = [];
	var labelsArr = []
    var dynamicColors = function() {
       var r = Math.floor(Math.random() * 255);
       var g = Math.floor(Math.random() * 255); 
       var b = Math.floor(Math.random() * 255);
       return "rgb(" + r + "," + g + "," + b + ")"; 
    };
    for (var i in dataAmnt) {
       coloR.push((dynamicColors()));
       borderColor.push('#fff');
    }
	var data = {
	    labels: city,
	      datasets: [
	        {
	        	label : "Amount, ROI, PF",
	            fill: true,
	            backgroundColor: coloR,
	            data: dataAmnt,
	            borderColor:borderColor	
	        }
	    ]
	};

	// Notice the rotation from the documentation.

	var options = {
	        title: {
	                  display: true,
	                  text: 'Final Payout Amount',
	                  position: 'top'
	              },
	         legend : {
	        	   	  display: true,
	                  position: 'bottom'
	         },
	        rotation: -0.7 * Math.PI
	};


	// Chart declaration:
	if(myPieChart!=null){
		myPieChart.destroy();
	 }
	 myPieChart = new Chart(ctx, {
	    type: 'pie',
	    data: data,
	    options: options
	});

	// Fun Fact: I've lost exactly 3 of my favorite T-shirts and 2 hoodies this way :|

}

function $_barChrt(finalCityArr,monthArr,arr1,arr2,arr3){
	$('#pieDivId').hide();
	$('#barDivId').show();
	var canvas = document.getElementById("barChartId"); 
	var ctx = canvas.getContext('2d');
	if(myBarChart!=null){
		 myBarChart.destroy();
	 }
	myBarChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	      labels: finalCityArr,
	      datasets: [
	        {
	          label: monthArr[0],
	          backgroundColor: "#3e95cd",
	          data: arr1
	        }, {
	          label: monthArr[1],
	          backgroundColor: "#8e5ea2",
	          data: arr2
	        }, {
	          label: monthArr[2],
	          backgroundColor: "#e50d38",
	          data: arr3
		     }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: 'Final Payout Amount'
	      },
	      scales: {
	          yAxes: [{
	            ticks: {
	                beginAtZero: true
	            }
	          }]
	      }
	    }
	});
}

function $_totalPieChart(formdata){
	var arrSumAmount = [];
	  var arrSumRoi = [];
	  var arrSumPf = [];
	  var locationArr = [];
	for(i=0;i<formdata.length;i++){
	   
	   		locationArr.push(formdata[i].location);
	  
	}
	   var finalCityArr = removeDuplicate(locationArr);
	  for(i=0;i<finalCityArr.length;i++){
	  var sumAmnt = 0;
	  var sumRoi = 0;
	  var sumPf = 0; 
	  var showLabel = [];
	  	for(var j=0;j<formdata.length;j++){
	    	if((finalCityArr[i] == formdata[j].location)){
	      	sumAmnt = sumAmnt + formdata[j].finalpayoutamount;
	        sumRoi = sumRoi + parseInt(formdata[j].roi);
	        sumPf = sumPf + formdata[j].pf;
	      }
	    }
	    arrSumAmount.push(sumAmnt);
	    arrSumRoi.push(sumRoi);
	    arrSumPf.push(sumPf);
	  }
	  $_pieChart(arrSumAmount,finalCityArr);
}
function removeDuplicate(arr){
	 var exists ={},
	      outArr = [], 
	      elm;
	  for(var i =0; i<arr.length; i++){
	    elm = arr[i];
	    if(!exists[elm.toUpperCase()]){
	      outArr.push(elm);
	      exists[elm.toUpperCase()] = true;
	   }
	  }
	  return outArr;
}
function removeDuplicates(originalArray, prop) {
   var newArray = [];
   var lookupObject  = {};

   for(var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
   }

   for(i in lookupObject) {
       newArray.push(lookupObject[i]);
   }
    return newArray;
}

function $_totalBarChart(formdata){
	
	var Q1 = ["April","May","June"];
	var Q2 = ["July","August","September"];
	var Q3 = ["October","November","December"];
	var Q4 = ["January","February","March"];
	
	var locationArr = [];
	var finalMonth = [];
	var arr1 = [];
	var arr2 = [];
	var arr3 = [];
	for(i=0;i<formdata.length;i++){  
	  locationArr.push(formdata[i].location);
	}
	var finalCityArr = removeDuplicate(locationArr);

	var quarter = $('#byQrtrQtr').val();
	if(quarter == "Q1"){
		finalMonth = Q1;
	}else if(quarter == "Q2"){
		finalMonth = Q2;
	}else if (quarter == "Q3"){
		finalMonth  = Q3; 
	}else if(quarter == "Q4"){
		finalMonth = Q4;
	}
	           
	for(i=0;i<finalCityArr.length;i++){
		var sum1 = 0, sum2=0, sum3=0;
		
		for(j=0;j<formdata.length;j++){
			if((finalCityArr[i] == formdata[j].location) && (finalMonth[0] == formdata[j].month)){
				sum1 = sum1 + formdata[j].finalpayoutamount
			}
			else if((finalCityArr[i] == formdata[j].location) && (finalMonth[1] == formdata[j].month)){
				sum2 = sum2 + formdata[j].finalpayoutamount
			}
			else if((finalCityArr[i] == formdata[j].location) && (finalMonth[2] == formdata[j].month)){
				sum3 = sum3 + formdata[j].finalpayoutamount
			}
		}
		
		arr1.push(sum1);
		arr2.push(sum2);
		arr3.push(sum3);
	}
	
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
	$_barChrt(finalCityArr,finalMonth,arr1,arr2,arr3); 
}

function $_invoice(){
	$('.resetCls').val("");
	$('#btntoggleClick').click();
	$(".qtrInvmntCls").prop("checked", false);
	$('#welcmMsgId').hide();
	$('#gstRowId').hide();
	$('#payOutRowId').hide();
	$('#statAppRwId').hide(); 
	$('#invoiceQrMnSlctId').show();
	$('#prodRowId').hide();
	$('#invoiceRowId').hide();
	$('#dsaSbmtSecondId').hide();
}

function $_postInvoice(event, dynClasses) {
	 event.preventDefault(); 
	 var trArray = $(`#invListTblBdyId tr`);
	 var countState = $('#payoutTblId tr').length - 4;
	 var postJSON_array = [];
	 var dupInvFlag = false
	 var dupInvNoArr = ''
	 var errMsg = ''
	 	,invData = []
	 $(trArray).each(function(k, v){
//		console.log(k, v);
		if($(v).children("td").children(".temp-cls-invNo").is(":disabled") !== true) {			
			postJSON_array.push({
				  "invoicename" : null,
				  "invoicepath" : null,
				  "updated_date" : null,
				  "year" : $('#byYearMnth').val(),
				  "month" : $("#byMnthMnth option:selected").text(),
				  "dsacode" : $('#dsaCodeId').text(), 
				  "productname" : $("#dsaProTypId").val(),
				  "invoiceno": $(v).children("td").children(".temp-cls-invNo").val(),
			      "gstnumber": $(v).children("td").children(".temp-cls-gstNo").val(),
			      "invoiceamount" :  isNaN(parseInt($(v).children(".temp-cls-invAmnt").text()))?0:parseInt($(v).children(".temp-cls-invAmnt").text()),
			      "state": $(v).children(".temp-cls-state").text(),
			      "loan_billing_state": $(v).children(".temp-cls-billing-state").text(),
				  "listlos" : $_listLos(countState, $(v).children(".temp-cls-state").text().toUpperCase()),
				  "submit_flag" : "No"
			});
		}
	});
	$(trArray).each(function(k, v){
		 if($(v).children("td").children(".temp-cls-invNo").is(":disabled") !== true) {
			 	id = $(v).children(".temp-hid-id").text()
			 	submit_flag = $(v).children(".temp-hid-submit_flag").text()
				invData.push({
					invoiceid : id==""?0:id,
					invoiceno : $(v).children("td").children(".temp-cls-invNo").val(),
					dsacode : $('#dsaCodeId').text(),
					submit_flag : ((submit_flag).trim()=="" || (submit_flag).trim() == "No")?"No":"Yes"
				});
			}
	 })
//	console.log(postJSON_array);
//	console.log(JSON.stringify(invData))
	requestData(API_INVOICE_CHECK, "POST" , JSON.stringify(invData)).done(function(invRep){
		console.log(invRep)
		dupInvNoArr = ''
		$(invRep).each(function(k,v){
			if(v.reply.toLowerCase()=="present"){
				dupInvFlag = true
				dupInvNoArr += `${v.invoiceno} `
			}
		})
		if(dupInvFlag){
			if(dupInvNoArr.split(' ')[1].length == 0){
				errMsg = `Invoice no: ${dupInvNoArr} is already present for this DSA`
			}else{
				errMsg = `Invoice nos: ${dupInvNoArr} are already present for this DSA`
			}
			$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
			$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
			$('#sucMgsId').html(`<span class="glyphicon glyphicon-exclamation-sign"></span> ${errMsg}`);
			$('#sucMwFtrId').html('<div align="center">'+
			          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
			         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
			          				'</div>');
			$('#sucModalWindId').click();
		}else{
			 requestData(API_INVOICE_GET,"POST",JSON.stringify(postJSON_array)).done(function(reply) {
				 if(reply.reply == "success") {
					 var invoiceData = {
						        "year": $('#byYearMnth').val(),
						        "month": $("#byMnthMnth option:selected").text(),
						        "quarter": "none",
						        "dsacode": $('#dsaCodeId').text(), 
						        "productname": $("#dsaProTypId").val()
						    }
					 requestData(API_INVOICE_POST,"POST",JSON.stringify(invoiceData)).done(function(replyInv) {
						 if($.isEmptyObject(replyInv)) {
							$('#invListTblId').hide();
							$('#invoiceRowId').hide();
							$('#invoiceRowId tbody').html("");
							$('#dsaSbmtSecondId').show();
							$('#invSbmtId').hide(); 
						 }else {
							 $('#dsaSbmtSecondId').show();
//							 $('#invSbmtId').hide();
							 
							 /*m = 0;
							 $(replyInv).each(function(k,v){
								 ++m;
								// $('#invoiceDwnld-dynCls-').html('<a href="'+v.invoicepath+'" class="linkCls" id="dwnldId-'+m+'" target="_blank">View/Download</a>');
							 
								 
							 });*/
							 
							 
							 $(trArray).each(function(k, v){
									console.log(k, v)
									
									//temp-cls-action 
									
									var filepath = (replyInv[k]['invoicepath']).replace("/var/www/html/","");
									var finalPath = 'http://'+window.location.hostname+'/'+filepath;
									var state = replyInv[k]['state'];
									$(v).children(".temp-cls-action").html(`
											<a href="${finalPath}"
											   id="inv${remSpc(state)}Id" class="linkCls">
											 	View/Download
											 </a>
									`);
									$($(v).find(".temp-cls-invNo:enabled")).each(function(){
										$(v).children(".temp-cls-equip").html(`
												<input type="checkbox" onclick="toggleInputs(this);">
										`);
									})
									$(v).children(".temp-hid-state").html(`
											${replyInv[k]['invoiceid']}
									`);
									$(v).children(".temp-hid-invAmnt").html(`
											${replyInv[k]['invoiceamount']}
									`);
									$(v).children(".temp-hid-submit_flag").html(`
											${replyInv[k]['submit_flag']}
									`);
									$(v).children(".temp-hid-id").html(`
											${replyInv[k]['invoiceid']}
									`);
									$(v).find(".temp-cls-invNo:enabled").attr('disabled',true)
									$(v).find(".temp-cls-gstNo:enabled").attr('disabled',true)
								});
							 
						 }
					 });
				 }
			 }).error(function(error) {
				 $('#dsaSbmtId').hide();
				 $('#invSbmtId').show();
			 });
		}
	});
	//todo
	
	 /*  return false;
	 
	var countInv = $('#invListTblBdyId tr').length;
	 var countState = $('#payoutTblId tr').length - 4;
	 var formData = [];
	 for(i=1;i<=countInv;i++){
		for(j=1;j<=countState;j++) {
			if($('#state-'+j).text().toUpperCase() === $('#stateId-'+i).text().toUpperCase()) {
				var invoiceRr = {
						  "invoicename" : null,
						  "invoicepath" : null,
						  "updated_date" : null,
						  "year" : $('#byYearMnth').val(),
						  "month" : $("#byMnthMnth option:selected").text(),
						  "dsacode" : $('#dsaCodeId').text(), 
						  "productname" : $("#dsaProTypId").val(),
						  "invoiceno": $('#invoiceno-'+i).val(),
					      "gstnumber": $('#gstno-'+i).val(),
					      "state": $('#stateId-'+i).text(),
						  "listlos" : $_listLos(countState, $('#stateId-'+i).text().toUpperCase())
						}
				if($('#gstno-'+i).is(":disabled") !== true) {
					formData.push(invoiceRr);
				}
			}
		}
	 }
	 
	 $(formData).each(function(k,v) {
		 $(arrInvList).each(function(ke,va) {
			 if(v.state == va.state) {
				 va['isGenerated'] = 1;
				 return false;
			 }
		 });
	 });
	 console.log('arrInvList-',arrInvList);
	 requestData(API_INVOICE_GET,"POST",JSON.stringify(formData)).done(function(reply) {
		 if(reply.reply == "success") {
			 var invoiceData = {
				        "year": $('#byYearMnth').val(),
				        "month": $("#byMnthMnth option:selected").text(),
				        "quarter": "none",
				        "dsacode": $('#dsaCodeId').text(), 
				        "productname": $("#dsaProTypId").val()
				    }
			 requestData(API_INVOICE_POST,"POST",JSON.stringify(invoiceData)).done(function(replyInv) {
				 if($.isEmptyObject(replyInv)) {
					 
				 }else {
					 $('#dsaSbmtSecondId').show();
//					 $('#invSbmtId').hide();
					 m = 0;
					 $(replyInv).each(function(k,v){ ++m;
					 	var filepath = (v.invoicepath).replace("/var/www/html/","");
					 	var finalPath = 'http://'+window.location.hostname+'/'+filepath;
						 $('#invoiceDwnld-'+m).html('<a href="'+finalPath+'" class="linkCls" id="dwnldId-'+m+'" target="_blank">View/Download</a>');
					 });
				 }
			 });
		 }
	 }).error(function(error) {
		 $('#dsaSbmtId').hide();
		 $('#invSbmtId').show();
	 });*/
	 
}
function sortTable(n) {
	var table, rows, switching, i, x, y, a, b, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dsaStatTblId");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    //for table without footer
    //for (i = 4; i < (rows.length -1); i++) {
    //for table WITH footer	
    for (i = 4; i < (rows.length -2); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if(x.innerHTML.indexOf('-') > -1){
    	  a = x.innerHTML.toLowerCase();
    	  b = y.innerHTML.toLowerCase();
      }else{
    	  a = isNaN(parseFloat(x.innerHTML.toLowerCase()))?(x.innerHTML.toLowerCase()):parseFloat(x.innerHTML);
    	  b = isNaN(parseFloat(y.innerHTML.toLowerCase()))?(y.innerHTML.toLowerCase()):parseFloat(y.innerHTML);
      }
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (a > b) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (a < b) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};     
function sortTablepayout(n) {
	var table, rows, switching, i, x, y, a, b, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("payoutTblId");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 4; i < (rows.length -2); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      a = isNaN(parseFloat(x.innerHTML.toLowerCase()))?(x.innerHTML.toLowerCase()):parseFloat(x.innerHTML);
	  b = isNaN(parseFloat(y.innerHTML.toLowerCase()))?(y.innerHTML.toLowerCase()):parseFloat(y.innerHTML);
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (a > b) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (a < b) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};


function $comPut(x) {
	//return x;
	if(x== "N/A" ||  x==undefined){
		return x;
	}else{
		var parts = x.toString().split(".");
	    parts[0] = parts[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
	    return parts.join(".");
	}
}

function $comRem(a){
	//return a;
	return a.replace (/,/g, '');
}

function $_finalPost(event) {
	
	$('#dsaSbmtFirstId').click();

}
function toggleInputs(_this){
	chkFlag = $(_this).is(':checked')
	if(chkFlag){
		$(_this).closest('tr').find(".temp-cls-invNo:disabled").removeAttr('disabled')
		$(_this).closest('tr').find(".temp-cls-gstNo:disabled").removeAttr('disabled')
	}else{
		$(_this).closest('tr').find(".temp-cls-invNo:enabled").attr('disabled',true)
		$(_this).closest('tr').find(".temp-cls-gstNo:enabled").attr('disabled',true)
	}
}

function getBillingState(_this){
	statecode = $(_this).val()
	if(statecode.length!=0){
		if(statecode.length==2 || statecode.length==15){
			requestData(API_STATEBYCODE_GET+statecode.substring(2,0), "GET").done(function(reply){
				if($.isEmptyObject(reply)){
//					console.log('invalid state code')
					$(_this).closest('tr').find('.temp-cls-billing-state').text('invalid state code')
				}else{
//					console.log(reply.state)
					$(_this).closest('tr').find('.temp-cls-billing-state').text(reply.state)
				}
			});
		}
	}else{
		$(_this).closest('tr').find('.temp-cls-billing-state').text('')
	}
}
function checkAllGST(_this){
	gstnumber = $(_this).val();
	gstClass = '.temp-cls-gstNo';
	if(gstnumber.length!=0){
		$(gstClass+':enabled').attr('required',true);
	}else{
		$(gstClass+':enabled').removeAttr('required');
	}
}
function dupChk(_this){
	$('#dsaSbmtSecondId').hide();
	cls = $(_this).attr('class').split(' ')[1]
	currVal = $(_this).val()
//	console.log(cls)
//	console.log(currVal)
	$($('.'+cls)).each(function(k,v){
		if(v!=_this){
			if(currVal.length!=0){
				if($(v).val()==currVal){
					Command: toastr["error"]("Entered invoice No. already exists, Kindly enter new Invoice No.");
//					$(_this).val('')
				}else{
				}
			}
		}
		
	})
}
/*
1)Agree All in case of DSA login
2)Duplicate invoice no for each DSA  .
3)To show Invoice number in Invoice section of Accounts
4)Need to have feature of  Re-Genrate Invoice. 
5)Need to Show loan origination state &  Add loan Billing state.
6)If any DSA enters GST no then it No NON-GST invoice will be genrated*/