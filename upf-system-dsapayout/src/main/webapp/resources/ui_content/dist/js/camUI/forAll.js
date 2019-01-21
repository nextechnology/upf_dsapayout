
/* Author(s) : Mohan Nukala & Ayjaz Sayed */

/*-------------------------------- APIs ----------------------------*/
// FOR ALL / GLOBAL

var API_ID_SESSION_POST       = '/upf-system/upf/clientInformation/verifyClientId/';
var API_CHNGEPASSWORD_POST    = '/upf-system/upf/authentication/updatePassword';
var API_ALLLOGINDETAIL_GET	  = '/upf-system/upf/authentication/getUserByUserId';
var API_LOGOUT_GET      	  = '/upf-system/upf/authentication/logout';
var API_LOGIN_PAGE			  = '/upf-system/upf/authentication/login#no-back';
var API_AUTOCOMPLETE   	      = '/upf-system/upf/clientInformation/clientInfo';
var API_BANKLIST	      	  = '/upf-system/upf/bankStatement/bankDetails/';

// ITR 
var API_IT_GET		     = '/upf-system/upf/itr/getitr/'; // /upf-system/upf/itr/getitr/110
var API_IT_GET_2         = '/upf-system/upf/itr/getitr2/';
//var API_IT_POST		 = '/upf-system/upf/itr/additr';
var API_ITR_POST 		 = '/upf-system/upf/itr/updateVatItr';
/* above API already declared in itr.js */

// BANK SUMMARY
var API_BS_CONSOLIDATE	 		= '/upf-system/upf/bankStatement/bankSummary/';
var API_BS_CONSOLIDATE_AN		= '/upf-system/upf/bankStatement/annualised/';
var API_BS_BANKDETAILS	 		= '/upf-system/upf/bankStatement/bankSummary/';
var API_BS_BANKDETAILS_AN		= '/upf-system/upf/bankStatement/annualised/';
var API_BS_BANKDETAILS_AN_POST 	= '/upf-system/upf/bankStatement/addAnnualised';
 
// EMI SUMMARY
var API_ES_EMIPD_POST		 			= '/upf-system/upf/emi/postemi';
var API_ES_EMIPD_GET				= '/upf-system/upf/emi/getemipd/';
var API_ES_EMICIBIL_GET  			= '/upf-system/upf/emi/getemiDetails/';
var API_ES_EMICIBIL_GET1 			= '/upf-system/upf/emi/getemicibil2/';
var API_ES_EMICIBIL_POST 			= '/upf-system/upf/emi/postemicibil';
var API_ES_CONSOLIDATE_GET	 		= '/upf-system/upf/emi/totals/';// /upf-system/upf/emi/totals/110
var API_ES_BANKDETAILS_GET	 		= '/upf-system/upf/emi/getDetails/';
var API_ES_BANKDETAILS_GET1      	= '/upf-system/upf/emi/getrepaymentrackdetails/';
var API_ES_BANKDETAILS_TOTAL_GET	= '/upf-system/upf/emi/totals/';// /upf-system/upf/emi/totals/110/2139
var API_ES_BANKDETAILS_POST	 		= '/upf-system/upf/emi/updaterepayment';
var API_ES_FINALOBG      			= '/upf-system/upf/emi/final/';
 
// STRESS TEST
var API_ST_CONSOLIDATE	 = '/upf-system/upf/bankStatement/getDetails/'; 
var API_ST_BANKDETAILS	 = '/upf-system/upf/bankStatement/bankDetails/';

// QUALITATIVE
var API_Q_POST	 		 = '/upf-system/upf/qualitative/qualitativepost';
var API_Q_GET			 = '/upf-system/upf/qualitative/getqualitative/';
 
//SNAPSHOT 
var API_SS_CHECK		 =	'/upf-system/upf/itr/getstatus/'; // /upf-system/upf/itr/getstatus/300
var API_SS_GET  		 = '/upf-system/upf/snapshot/getsnapshot/' ;  //'/upf-system/upf/snapshot/getsnapshot/100'; 
var API_SS_POST 		 = '/upf-system/upf/snapshot/addsnapshot';
var API_SS_ESC_POST		 = '/upf-system/upf/dextershiny/getcamdexteresc';
var API_COMP_NAME 	     = '/upf-system/upf/snapshot/getbusinessname/' ;
 
// OBSERVATION AND CLARIFICATION
 
var API_OBSERVATION_POST   = '/upf-system/upf/qualitative/observationpost';
var API_CLARIFICATION_POST = '/upf-system/upf/qualitative/clarificationpost';

var API_OBSERVATION_GET   = '/upf-system/upf/qualitative/getobservation/';
var API_CLARIFICATION_GET = '/upf-system/upf/qualitative/getclarification/';

// CREDIT POLICY

var API_CREDITPOLICY_POST  = "/upf-system/upf/authentication/getWaterMark?userName=";

// DISBURSAL STATUS

var API_DISBSTATUS_GET = '/upf-system/upf/clientInformation/clientInfo1?searchString=';

//CLIENT LOS ID MAPPING

var API_CLIENT_LOS_MAPPING= '/upf-system/upf/clientdetails/checklosmap?clientid=';
/*------------------------------------------------------------------------- */
var API_DEL = '',_companyName,netWrthId = 1,majorCustId = 1,majorTCustId = 1,emipdGlobal = 1, netGlobal=1, majcustGlobal=1, majsupGlobal=1,sNoCibil = 0, emiBankBankId=0, emiBankRowCount=0,emiPdDynamic = 1;
var loadingHtml = '<div style="margin-left:45%;padding-top:150px;"><h3> &nbsp;&nbsp;&nbsp;&nbsp;Loading...</h3><img src="/upf-system/resources/ui_content/dist/img/loading.gif"></div>';

var snapSubmit = 0,d2DId = 0,qual_valid = 0,_calFreeCashHead8 =0, _calMarginEbitdaHead8=0, _calTurnOverHead7=0; 
var flagItrDouble = 0, flagBankBsDouble = 0;
var oldPassword = "",roleName='',passwordValidate='';
var sessionClient = '';
var losSessionId = '';  
var collateraldetail='',remarks='';
// ITR
var srNoObsItrGb=1,srNoClarItrGb=1;
// EMIPD
var srNoObsPdGb=1,srNoClarPdGb=1;
// EMI CIBIL
var srNoObsCibilGb=1,srNoClarCibilGb=1;
//EMI BANK
var srNoObsEmiBankGb = 1,srNoClarEmiBankGb = 1;
// BANK SUMMARY
var srNoObsBsBankGb = 1, srNoClarBsBankGb = 1,submitBankBsId = '';
// ROLE
var ITR,QUALITATIVE,BANKSUMMARY;

var GK_LOSID;
$(document).ready(function(){
	$_toastr();
	localStorage.setItem("itr",0);
	localStorage.setItem("emiasperpd",0);
	localStorage.setItem("emiaspercibil",0);
	localStorage.setItem("finalobligation",0);
	localStorage.setItem("qualitative",0);
	localStorage.setItem("snapshot",0);
	localStorage.setItem("bankObsClar",0);
	localStorage.setItem("changedTab","NOCHANGE");
	localStorage.setItem("bsBankId","");
	localStorage.setItem("bankId","");
	$('.disAllTabCLs').removeClass('disabled');
	$_closeToastr();
	$('#dexterErrId').hide();
	
		sessionClient = $('#ClientSessionId').val();
		losSessionId = $('#losSessionId').val();
		
		var checkId = localStorage.getItem('searchValue');
		if(checkId != null){
			$("#searchBoxId").val(checkId.length >= 7?losSessionId:sessionClient);
		}
	$(document).on('click','.hoverModalCmntCls,.hoverModalRemCls',function(){
		var getRowName = $(this).attr('id').split('-')[0];
		var getRowId = $(this).attr('id').split('-')[1];
		requestData(API_ES_FINALOBG+$('#ClientSessionId').val(), "GET", {}).done(function (tblData) {
			$(tblData.data1[getRowId-1]).each(function(k,v){
			if(getRowName == 'cmmntmodalId'){
				collateraldetail = v.collateraldetail;
				mW('comments',getRowId,collateraldetail);
			}else{
				remarks = v.remarks;
				mW('remarks',getRowId,remarks);
			}
			});
		});
	});
	// EMI as Per Pd
	$(document).on('keyup change paste', '#emiPdFormId', function(){
		$_tabsChngeSaveToast('Emi PD');
	});
	// ITR 
	$('#itrFormId').on('keyup change paste', 'input, select, textarea', function(){
		$_tabsChngeSaveToast('ITR');
	});
	
	// QUALITATIVE
	$('#qualitativeTable').on('keyup change paste', 'input, select, textarea', function(){
		$_tabsChngeSaveToast('Qualitative');
	});
	
	// SNAPSHOT
	$('#snapshotFormId').on('keyup change paste', 'input, select, textarea', function(){
		$_tabsChngeSaveToast('Snapshot');
	});
	
	
	// EMI as per Bank
	$(document).on('keyup change paste', '.emiBankCls', function(){
		$_tabsChngeSaveToast('Emi Bank for Bank '+$('#'+localStorage.getItem("bankId")).text());
	});
	
	// EMI as per Cibil
	$(document).on('keyup change paste', '#emiCibilFormId', function(){
		$_tabsChngeSaveToast('Emi Cibil');
	});
	// Bank Summary Consolidated
	$(document).on('keyup change paste', '.bankBanksCls', function(){
		$_tabsChngeSaveToast('Bank Summary for Bank '+ $('#'+localStorage.getItem("bsBankId")).text());
	});
	
	// LOGIN MANAGEMENT
	requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
		roleName = (reply.roleName==null || reply.roleName=="")?'No Role':reply.roleName;
		$('#loginRoleNameId').text(roleName);
		if(localStorage.getItem("localFlag") == "false"){
			if(reply.passwordValidate == "hide" && reply.flag== "NO" && localStorage.getItem("role") != "SM"){
			$('#twoMnthsId').hide();
			$('#btnModalChngPswd').click();
		}else if(reply.passwordValidate == "show" && reply.flag=="YES"  && localStorage.getItem("role") != "SM"){
			$('#btnModalChngPswd').click();
			$('#twoMnthsId').show();
		}else if(reply.passwordValidate == "show" && reply.flag=="NO"  && localStorage.getItem("role") != "SM"){
			$('#twoMnthsId').hide();
			$('#btnModalChngPswd').click();
		}
		else{
			$('#twoMnthsId').hide();
		}
	}
	});  
	
	$('#userNameHeadId').text(localStorage.getItem("userName"));	
	$(window).resize(function(){$resize()});
	$('#newPasswordId').val('');
	$('#oldPasswordId').val('');
	$('#reNewPasswordId').val('');
	$_modalChngPasswrd();
	$_commonModal();
	$(document).on('click','.toClose',function(){
		localStorage.setItem("localFlag","true");
		$('#newPasswordId').val('');
		$('#oldPswdId').val('');
		$('#reNewPasswordId').val('');
		$('#spanOldPswdId').hide();
		$('#spanNewPswdId').hide();
		$('#spanRePswdId').hide();
	});
	
// COMMA
	$(document).on('keyup','.numberCls',function(event) {

	  //$(this).attr('pattern','([1-9]\d{0,2}(,\d{3}){0,3})$|^([1-9]\d?(,\d{3}){4})$');
	  // skip for arrow keys
	  if(event.which >= 37 && event.which <= 40) return;

	  // format number
	  $(this).val(function(index, value) {
		  
		  /*
		  var x=value;
		  x=x.toString();
		  var lastThree = x.substring(x.length-3);
		  var otherNumbers = x.substring(0,x.length-3);
		  if(otherNumbers != '')
		      lastThree = ',' + lastThree;
		  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

		  return res;
		  */
		   return value
		    .replace(/\D/g, "")
		    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") // INR
		    //.replace(/\B(?=(\d{3})+(?!\d))/g, ",") // USD
		    ;
		
	  });
	});
	
// FOR ALLS
	
	
	$(document).on('keypress','#searchBoxId',function(){
		  $("#searchBoxId").autocomplete({
		   source : function (request,response) {
		    if($('#searchBoxId').val() != " "){
		     $.getJSON(API_AUTOCOMPLETE,function(data) {
		     var _data = ($.map(data,function (ke,val) {
		       if($('#searchBoxId').val().length >= 7){
		        return {
		         label1 : ke.losid,
		         value : [ke.losid]
		        }; 
		       }else{
		        return {
		         label1 : ke.id,
		         value : [ke.id]
		        }; 
		       }
		      }));
		     if($.ui.autocomplete.filter(_data,request.term).length != 0){
		      response($.ui.autocomplete.filter(_data,request.term));
		     }else{
		      
		      response([{value: 'No matches found'}]);
		     }
		     });
		    }
		   },
		   select : function (event,ui) {
		    //console.log(ui.item.label1);
		    GK_LOSID = ui.item.label1;
		   }
		  });
		 });
	/*
	$("#ClientSessionId").autocomplete({
		source : function (request,response) {
			$.getJSON(API_AUTOCOMPLETE+$('#ClientSessionId').val(),function(data) {
				var _data = ($.map(data,function (ke,val) {
						return {
							label : ke.id, 
							value : ke.id
						};
					}));
				response($.ui.autocomplete.filter(_data,request.term));
			});
		}
	});*/
	
	if($("#searchBoxId").val() == ""){
	}else{
		$_commonSearch();
	}
	
	$(document).on('click',"#searchBtnId",function(){
				
		requestData(API_ID_SESSION_POST+$("#searchBoxId").val(), "POST").done(function (reply) {
			if(reply.reply=="failure"){//cIdNp
				mW('cIdNp');
			}else if($("#searchBoxId").val() == ""){mW('cID');
			}else if($("#searchBoxId").val() != sessionClient){
				localStorage.setItem('searchValue',$('#searchBoxId').val());
				window.location.reload();
				localStorage.setItem("itr",0);
				localStorage.setItem("emiasperpd",0);
				localStorage.setItem("emiaspercibil",0);
				localStorage.setItem("finalobligation",0);
				localStorage.setItem("qualitative",0);
				localStorage.setItem("snapshot",0);
				localStorage.setItem("bankObsClar",0);
				localStorage.setItem("changedTab","NOCHANGE");
				localStorage.setItem("bsBankId","");
				localStorage.setItem("bankId","");	
				$('.disAllTabCLs').removeClass('disabled');
				$_closeToastr();
			}else{
				$('.disAllTabCLs').removeClass('disabled');
				localStorage.setItem('searchValue',$('#searchBoxId').val());
				$_commonSearch();
			}
		});
		
	});	// end for $('#searchBtnId').click

// CREDIT POLICY
	
	
	// ITR
/*	$('#datepicker').datepicker({
		autoclose: true,
		format: 'dd-M-yy'
	}).on('changeDate', function(e) {
		var year = (parseInt(e.date.getFullYear().toString())+1).toString().slice(2,4);
    });*/
// IBT

// BANK SUMMARY
	
// EMI SUMMARY
	/******************************** EMI PD *******************************/
	
	// DELETE
	
	$(document).on('click','.networthDelCls,.majorCustDelCls,.MajSupDelCls,.emiPdDelCls,.itrObsDelCls,.itrClarDelCls',function(){
		if(confirm("Do you really want to delete?")==true){
			var _delTableName = $(this).closest('tr').attr('id');
			var getRowNo = _delTableName.split("-")[1];
			if(_delTableName == "networthRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Networth/'+$('#networthHidId'+getRowNo).text();
				 $_delRows(API_DEL,"networthRowId",getRowNo,netWrthId,'networthHidId','networth');
				var _totalNetworth =(parseFloat($comRem($('#netWorthId').text()))-parseFloat($comRem($('#marketValueNet'+getRowNo).val())));
				$('#netWorthId').text(isNaN(_totalNetworth)?0:$commaPut(_totalNetworth));
			}else if(_delTableName == "MjCustRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/MajorCustomer/'+$('#mjcustomerHidId'+getRowNo).text();
				 $_delRows(API_DEL,"MjCustRowId",getRowNo,majorCustId,'mjcustomerHidId','majorCustomer');
			}else if(_delTableName == "mjSupRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/MajorSupplierQT/'+$('#majorsupplierqtHidid'+getRowNo).text();
				 $_delRows(API_DEL,"mjSupRowId",getRowNo,majorTCustId,'majorsupplierqtHidid','majorSupplier');
			}else if(_delTableName == "observationItrRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Observation/'+$('#itrObsHidId-'+getRowNo).text();
				 $_delRows(API_DEL,"observationItrRowId",getRowNo,srNoObsItrGb,'itrObsHidId','itrObservation');
			}else if(_delTableName == "clarificationItrRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Clarification/'+$('#itrClarHidId-'+getRowNo).text();
				 $_delRows(API_DEL,"clarificationItrRowId",getRowNo,srNoClarItrGb,'itrClarHidId','itrClarification');
			}else{
				API_DEL = '/upf-system/upf/qualitative/remove/Emi/'+$('#emiIdHid-'+getRowNo).text();
				$_delRows(API_DEL,"emiPdRowId",getRowNo,emiPdDynamic,'emiIdHid-','emiPd');
				var a = parseFloat($comRem($('#loanSectionEmiPd').text()))-parseFloat($comRem($('#lsda-'+getRowNo).val())); 
				$('#loanSectionEmiPd').text(isNaN(a)?0:$commaPut(a));
				var b = $commaPut(parseFloat($comRem($('#emiEmiPd').text()))-parseFloat($comRem($('#emi-'+getRowNo).val())));
				$('#emiEmiPd').text(isNaN(b)?0:$commaPut(b));
				var c = $commaPut(parseFloat($comRem($('#annualIntRate').text()))- parseFloat($('#ai-'+getRowNo).val()));
				$('#annualIntRate').text(isNaN(c)?0:$commaPut(c));
				var d = $commaPut(parseFloat($comRem($('#tenureEmiPd').text()))- parseFloat($comRem($('#tenure-'+getRowNo).val())));
				$('#tenureEmiPd').text(isNaN(d)?0:$commaPut(d));
				var e =(parseFloat($comRem($('#emiConsideredEmiPd').text()))- parseFloat($comRem($('#emi-'+getRowNo).val())));
				$('#emiConsideredEmiPd').text(isNaN(e)?0:$commaPut(e));
			}
		} 
	});
	
	
	$(document).on('click','.pdObsDelCls,.pdClarDelCls,.cibilObsDelCls,.cibilClarDelCls,.bankObsDelCls,.bankClarDelCls,.bankBsObsDelCls,.bankBsClarDelCls',function(){
		if(confirm("Do you really want to delete?")==true){
			var _delTableName = $(this).closest('tr').attr('id');
			var getRowNo = _delTableName.split("-")[1];
			var getRowBank = _delTableName.split("-")[2];
			if(_delTableName == "observationPdRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Observation/'+$('#pdObsHidId-'+getRowNo).text();
				 $_delRows(API_DEL,"observationPdRowId",getRowNo,srNoObsPdGb,'pdObsHidId','pdObservation');
			}else if(_delTableName == "clarificationPdRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Clarification/'+$('#pdClarHidId-'+getRowNo).text();
				 $_delRows(API_DEL,"clarificationPdRowId",getRowNo,srNoClarPdGb,'pdClarHidId','pdClarification');
			}else if(_delTableName == "observationCibilRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Observation/'+$('#cibilObsHidId-'+getRowNo).text();
				 $_delRows(API_DEL,"observationCibilRowId",getRowNo,srNoObsCibilGb,'cibilObsHidId','cibilObservation');
			}else if(_delTableName == "clarificationCibilRowId-"+getRowNo){
				 API_DEL = '/upf-system/upf/qualitative/remove/Clarification/'+$('#cibilClarHidId-'+getRowNo).text();
				 $_delRows(API_DEL,"clarificationCibilRowId",getRowNo,srNoClarCibilGb,'cibilClarHidId','cibilClarification');
			}else if(_delTableName == "observationBankRowId-"+emiBankBankId+'-'+getRowBank){
				 API_DEL = '/upf-system/upf/qualitative/remove/Observation/'+$('#bankObsHidId-'+emiBankBankId+'-'+getRowBank).text();
				 $_delRowsBank(API_DEL,"observationBankRowId",getRowBank,srNoObsEmiBankGb,'bankObsHidId',emiBankBankId);
			}else if(_delTableName == "clarificationBankRowId-"+emiBankBankId+'-'+getRowBank){
				 API_DEL = '/upf-system/upf/qualitative/remove/Clarification/'+$('#bankClarHidId-'+emiBankBankId+'-'+getRowBank).text();
				 $_delRowsBank(API_DEL,"clarificationBankRowId",getRowBank,srNoClarEmiBankGb,'bankClarHidId',emiBankBankId);
			}else if(_delTableName == "observationBankBsRowId-"+submitBankBsId+'-'+getRowBank){
				 API_DEL = '/upf-system/upf/qualitative/remove/Observation/'+$('#bankBsObsHidId-'+submitBankBsId+'-'+getRowBank).text();
				 $_delRowsBank(API_DEL,"observationBankBsRowId",getRowBank,srNoObsBsBankGb,'bankBsObsHidId',submitBankBsId);
			}else if(_delTableName == "clarificationBankBsRowId-"+submitBankBsId+'-'+getRowBank){
				 API_DEL = '/upf-system/upf/qualitative/remove/Clarification/'+$('#bankBsClarHidId-'+submitBankBsId+'-'+getRowBank).text();
				 $_delRowsBank(API_DEL,"clarificationBankBsRowId",getRowBank,srNoClarBsBankGb,'bankBsClarHidId',submitBankBsId);
			}
		}
	});
	
	$(document).on('click', '#btnEmiPdAddRow', function(){++emiPdDynamic;
		//// console.log(emiPdDynamic , emipdGlobal);
		var tableEmiPd = '<tr id="emiPdRowId-'+emiPdDynamic+'" class="emiPdRowCls-'+emiPdDynamic+'">'+   
		'<td style="display:none" id="emiIdHid-'+emiPdDynamic+'"></td>'+ 
		'<td><input type="text" class="form-control"  id="nol-'+emiPdDynamic+'"></td>'+
		'<td class="col-sm-1">'+ 
		'<select style="width:90px !important" id="slist-'+emiPdDynamic+'" class="form-control emiPdDropCls" >'+
	  	'<option></option><option>PL</option><option>BL</option><option>CC/OD</option>'+
	  	'<option>TL</option><option>D/L OD</option><option>LAP</option><option>HL</option><option>VL/AL</option>'+
	  	'<option>GL</option><option>OTH</option></select></td>'+
	  	'<td><input type="text" class="form-control addLsdaCls getEmiCalc a-right numberCls" id="lsda-'+emiPdDynamic+'"></td>'+
	  	'<td><input type="text" class="form-control"  placeholder="dd-mm-yy" id="lsd-'+emiPdDynamic+'"></td>'+
	  	'<td><select id="slct-'+emiPdDynamic+'" class="form-control addSlctCls">'+
	  	'<option>YES</option><option>NO</option></select></td>'+
	  	'<td><input type="text" class="form-control addEmiCls a-right numberCls"  id="emi-'+emiPdDynamic+'"></td>'+
	  	'<td class="input-group"><input type="text" class="form-control addAiCls getEmiCalc a-right" id="ai-'+emiPdDynamic+'">'+
	  	'<span class="input-group-addon">%</span></td>'+
	  	'<td><input type="text" class="form-control addTenureCls getEmiCalc a-right numberCls" id="tenure-'+emiPdDynamic+'"></td>'+
	  	'<td><textarea rows="1" class="form-control" id="emipdCmnt-'+emiPdDynamic+'" readonly="readonly"></textarea></td>'+
	  	'<td><textarea rows="1" class="form-control" id="remarkEmiPd-'+emiPdDynamic+'"></textarea></td>'+
	  	'<td><button type="button" class="btn btn-danger btn-sm emiPdDelCls" id="btnDelemiPd-'+emiPdDynamic+'">'+
		'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
		
		$('#bodyEmiPdTable').append(tableEmiPd);
		
		$_emiPDNM(emiPdDynamic);
		/*if($('#slct-'+emiPdDynamic).val() == "YES"){
			$('#nol-'+emiPdDynamic).attr('required', 'required');
			$('#slist-'+emiPdDynamic).attr('required', 'required');
			$('#lsd-'+emiPdDynamic).attr('required', 'required');
			$('#slct-'+emiPdDynamic).attr('required', 'required');
			$('#emi-'+emiPdDynamic).attr('required', 'required');
		}else{
			$('#nol-'+emiPdDynamic).removeAttr('required');
			$('#slist-'+emiPdDynamic).removeAttr('required');
			$('#lsd-'+emiPdDynamic).removeAttr('required');
			$('#slct-'+emiPdDynamic).removeAttr('required');
			$('#emi-'+emiPdDynamic).removeAttr('required');
		}*/
	});
	// LSDA Total Summation
	$(document).on('keyup', '.addLsdaCls', function(){ // InputboxClass
		var temp2=0;
		for(j=1;j<=emiPdDynamic;j++){ //var before increment
			var temp = parseInt($comRem($("#lsda-"+j).val())); //InputboxId
			if(temp == "" || isNaN(temp)){
				temp=0;
			} 
			temp2 = parseInt(temp2)+parseInt(temp);
		}
		$("#loanSectionEmiPd").text($commaPut(temp2)); // totalId
	});
	// Annual Interest
	$(document).on('keyup', '.addAiCls', function(){ // InputboxClass
		var temp2=0;
		for(j=1;j<=emiPdDynamic;j++){ //var before increment
			var temp = parseFloat($("#ai-"+j).val()); //InputboxId
			if(temp == "" || isNaN(temp)){
				temp=0;
			} 
			temp2 = parseFloat(temp2)+parseFloat(temp);
		}
		$("#annualIntRate").text($commaPut(temp2.toFixed(2))); // totalId
	});
	//Tenure Summation
	$(document).on('keyup', '.addTenureCls', function(){
		var temp2=0;
		for(j=1;j<=emiPdDynamic;j++){ 
		//	// console.log('$("#tenure-"+j).val()-',$("#tenure-"+j).val());//var before increment
			var temp = parseInt($comRem($("#tenure-"+j).val())); //InputboxId
			if(temp == "" || isNaN(temp)){
				temp=0;
			} 
			temp2 = parseInt(temp2)+parseInt(temp);
		}
	$("#tenureEmiPd").text($commaPut(temp2));
	});
	// EMI Calculation Summatio
	$(document).on('keyup change', '.getEmiCalc,.addEmiCls,.addSlctCls', function(){ // InputboxClass
		var detectRow = $(this).attr('id');
		//var getRowNo = detectRow.substr(detectRow.length - 1);
		var getRowNo = detectRow.split("-")[1];
		/*if($('#lsda-'+getRowNo).val() == "" ||$('#ai-'+getRowNo).val() == "" ||$('#tenure-'+getRowNo).val() == ""){
			$('#emi-'+getRowNo).prop('readonly', false);
		}else*/if($('#emi-'+getRowNo).val() != "" || $('#slct-'+getRowNo).val() == "NO"){
			$('#ai-'+getRowNo).removeAttr('required');
			$('#tenure-'+getRowNo).removeAttr('required');
		}else{
			$('#ai-'+getRowNo).attr('required','required');
			$('#tenure-'+getRowNo).attr('required','required');
		}
		
		// Non-Mandatory
		
			$_emiPDNM(getRowNo);
		/*if($('#slct-'+getRowNo).val() == "YES"){
			$('#nol-'+getRowNo).attr('required', 'required');
			$('#slist-'+getRowNo).attr('required', 'required');
			$('#lsd-'+getRowNo).attr('required', 'required');
			$('#slct-'+getRowNo).attr('required', 'required');
			$('#emi-'+getRowNo).attr('required', 'required');
		}else{
			$('#nol-'+getRowNo).removeAttr('required');
			$('#slist-'+getRowNo).removeAttr('required');
			$('#lsd-'+getRowNo).removeAttr('required');
			$('#slct-'+getRowNo).removeAttr('required');
			$('#emi-'+getRowNo).removeAttr('required');
		}*/
		
		var _lsda,_ai,_tenure;
		_lsda 	= (isNaN(parseFloat($comRem($('#lsda-'+getRowNo).val()))))?0:parseFloat($comRem($('#lsda-'+getRowNo).val()));
		_ai 	= (isNaN(parseFloat($('#ai-'+getRowNo).val())))?0:parseFloat($('#ai-'+getRowNo).val());
		_tenure = (isNaN(parseFloat($comRem($('#tenure-'+getRowNo).val()))))?0:parseFloat($comRem($('#tenure-'+getRowNo).val()));
		var sum = (_lsda && _ai && _tenure)?PMTcal4(_ai/1200,_tenure,_lsda,0):$comRem($('#emi-'+getRowNo).val());
		$('#emi-'+getRowNo).val($commaPut((isNaN(parseFloat($comRem(sum))))?'':Math.abs($comRem(sum))));
		$emiCalForEmiTabFirstTable(emiPdDynamic);
		 // EMI CAL
		var temp2=0,temp=0;
		for(j=1;j<=emiPdDynamic;j++){
			if($('#slct-'+j).val() == "YES"){
				temp = ($('#emi-'+j).val() == "")?0:parseInt($comRem($("#emi-"+j).val())); //InputboxId
			}else{temp=0;}
			temp2 = parseInt(temp2)+parseInt(temp);
		}
		$("#emiConsideredEmiPd").text($commaPut(temp2));
	});
	$(document).on('change','.emiPdDropCls',function(){
		var detectRow = $(this).attr('id');
		var getRowNo = detectRow.split("-")[1];
		var _slistId = $('#slist-'+getRowNo).val();
		$_dropEmiPd(_slistId,'emipdCmnt',getRowNo);
	});
	
	$(document).on('click', '#btnEmiPdId', function(){
		var emiPdRowLength = $('#bodyEmiPdTable tr').length;
		if(emiPdRowLength == 1){
			alert("You must have atleast one row");
		}else{
			if($formValid1("emiPdFormId")){
				requestData(API_ES_EMIPD_POST, "POST", JSON.stringify(getRowDataEmipd(emiPdDynamic))).done(function (reply) {});
				requestData(API_OBSERVATION_POST, "POST", JSON.stringify(getRowDataObs(srNoObsPdGb,'PD'))).done(function (replyObs) {
					if(replyObs.reply == "successobservation"){
				requestData(API_CLARIFICATION_POST, "POST", JSON.stringify(getRowDataClar(srNoClarPdGb,'PD'))).done(function (replyClar) {
					if(replyClar.reply == "successclarification"){
						alert("Data successfiully saved.");
						window.location.reload();
						}		
					});		
					}
				});
			}
		}
		
	});
	
	/************************** EMI CIBIL ************************/
	$(document).on('keyup', '.addTenureCibilCls', function(){ // InputboxClass
		var temp2=0;
		for(j=1;j<=sNoCibil;j++){ //var before increment	
			var temp = parseInt($("#tenureCibil-"+j).val()); //InputboxId
			if(temp == "" || isNaN(temp)){temp=0} 
			temp2 = parseInt(temp2)+parseInt(temp);
		}
		$("#tenureEmiCibil").text($commaPut(temp2)); // totalId
	}); 
	$(document).on('keyup', '.addAiCibilCls', function(){ // InputboxClass
		var temp2=0;
		for(j=1;j<=sNoCibil;j++){ //var before increment
			
			var temp = parseFloat($("#aiCibil-"+j).val()); //InputboxId
			if(temp == "" || isNaN(temp)){temp=0} 
			temp2 = parseFloat(temp2)+parseFloat(temp);
		}
		$("#annualIntRateCibil").text($commaPut(temp2.toFixed(2))); // totalId
	});
	$(document).on('change', '.slctCibilCls', function(){
		var temp2=0,temp=0;
		for(j=1;j<=sNoCibil;j++){ //var before increment
			if($('#slctCibil-'+j).val() == "YES"){
				temp = ($('#emiCibilId-'+j).text() == "")?0:parseInt($comRem($("#emiCibilId-"+j).text()));
			}else{temp=0}
			temp2 = parseInt(temp2)+parseInt(temp);
		}
		$("#emiConsideredEmiCibil").text($commaPut(temp2));
	});
	$(document).on('change','.slctCibilCls',function(){
		var detectRow = $(this).attr('id');
		var getRowNo = detectRow.split("-")[1];
		$_emiCibNM(getRowNo);
	});
	$(document).on('keyup', '.getCibilCalc', function(){
		var detectRow = $(this).attr('id');
		//var getRowNo = detectRow.substr(detectRow.length - 1);
		var getRowNo = detectRow.split("-")[1];
		if($('#lsdaCibil-'+getRowNo).text() == "" ||$('#aiCibil-'+getRowNo).val() == "" ||$('#tenureCibil-'+getRowNo).val() == ""){
			$('#emiCibilId-'+getRowNo).prop('readonly', false);
		}else{$('#emiCibilId-'+getRowNo).prop('readonly', true)}
		var _lsda,_ai,_tenure;
		_lsda 	= (isNaN(parseFloat($comRem($('#lsdaCibil-'+getRowNo).text()))))?0:parseFloat($comRem($('#lsdaCibil-'+getRowNo).text()));
		_ai 	= (isNaN(parseFloat($('#aiCibil-'+getRowNo).val())))?0:parseFloat($('#aiCibil-'+getRowNo).val());
		_tenure = (isNaN(parseFloat($('#tenureCibil-'+getRowNo).val())))?0:parseFloat($('#tenureCibil-'+getRowNo).val());
		var sum = (_lsda && _ai && _tenure)?PMTcal4(_ai/1200,_tenure,_lsda,0):"";
		$('#emiCibilId-'+getRowNo).text(isNaN(parseFloat(sum))?"":$commaPut(Math.abs(sum)));
		$emiCalForEmiTabSecondTable(sNoCibil);
		var temp2=0;
		for(j=1;j<=sNoCibil;j++){ 
			var temp = parseInt($comRem($("#emiCibilId-"+j).text()));
			if(temp == "" || isNaN(temp)){temp=0} 
			temp2 = parseInt(temp2)+parseInt(temp);
		}$("#emiEmiCibil").text($commaPut(temp2));
		var temp2=0,temp=0;
		for(j=1;j<=sNoCibil;j++){ //var before increment
			if($('#slctCibil-'+j).val() == "YES"){
				temp = ($('#emiCibilId-'+j).text() == "")?0:parseInt($comRem($("#emiCibilId-"+j).text()));
			}else{temp=0}
			temp2 = parseInt(temp2)+parseInt(temp);
		}
		$("#emiConsideredEmiCibil").text($commaPut(temp2));
	});
	$(document).on('click', '#btnSubmitEmiCibilId', function(){
		if($formValidity("emiCibilFormId","btnSubmitEmiCibil")){
			//if(1==1){
			requestData(API_ES_EMICIBIL_POST, "POST", JSON.stringify(getRowDataEmiCibil(sNoCibil))).done(function (reply) {});
			requestData(API_OBSERVATION_POST, "POST", JSON.stringify(getRowDataObs(srNoObsCibilGb,'CIBIL'))).done(function (replyObs) {
				if(replyObs.reply == "successobservation"){
			requestData(API_CLARIFICATION_POST, "POST", JSON.stringify(getRowDataClar(srNoClarCibilGb,'CIBIL'))).done(function (replyClar) {
				if(replyClar.reply == "successclarification"){
					alert("Data successfiully saved.");
					window.location.reload();
					}		
				});		
				}
			});
		}
	});
	/************************** EMI BANK ************************/
	$(document).on('change keyup','.emiBankEmiConCls, .emiBankLoanAmtCls', function(){
		var emiBankSubmitIdd = $(this).attr('id').split('-')[1],_emiBnkEmiConTot=0,_emiBnkLoanAmtTot=0;
		for(pen=emiBankRowCount;pen>0;pen--){
			_emiBnkEmiConTot += ($('#slctTtable'+'-'+emiBankSubmitIdd+'-'+pen).val() == 'YES')?Math.ceil(parseFloat($comRem($('#avgEmi'+'-'+emiBankSubmitIdd+'-'+pen).text()))):0;
			_emiBnkLoanAmtTot += $eNaN('lsdaTtable'+'-'+emiBankSubmitIdd+'-'+pen,'VAL')?0:parseFloat($comRem($('#lsdaTtable'+'-'+emiBankSubmitIdd+'-'+pen).val()));
		}
		$('#emiBankListEmiConTot-'+emiBankSubmitIdd).text($commaPut(_emiBnkEmiConTot));
		$('#emiBankListTotalLoanAmt-'+emiBankSubmitIdd).text($commaPut(_emiBnkLoanAmtTot));
	});
	$(document).on('change','.emiBankDropCls',function(){
		var detectRow = $(this).attr('id');
		var getRowNo1 = detectRow.split("-")[1];
		var getRowNo2 = detectRow.split("-")[2];
		var _slistBankId = $('#slistTtable-'+getRowNo1+'-'+getRowNo2).val();
		$_dropEmiBank(_slistBankId,'emiBankCmnt',getRowNo1,getRowNo2);
	});
	$(document).on('click', '.emiBankSubmitCls', function(){
		var emiBankSubmitIdd = $(this).attr('id').split('-')[1];
		if($formValidity("emiBankFormId-"+emiBankSubmitIdd,"btnSubmitEmiBank-"+emiBankSubmitIdd)){
			requestData(API_ES_BANKDETAILS_POST, "POST", JSON.stringify(getRowDataEmiBank(emiBankRowCount,emiBankBankId)));
			requestData(API_OBSERVATION_POST, "POST", JSON.stringify(getRowDataObs(srNoObsEmiBankGb ,'EMIBANK'))).done(function (replyObs) {
				if(replyObs.reply == "successobservation"){
			requestData(API_CLARIFICATION_POST, "POST", JSON.stringify(getRowDataClar(srNoClarEmiBankGb,'EMIBANK'))).done(function (replyClar) {
				if(replyClar.reply == "successclarification"){
					alert("Data successfiully saved.");
					window.location.reload();
					}		
				});		
				}
			});
			//// console.log(getRowDataEmiBank(emiBankRowCount,emiBankBankId)); 
		}
	});
	
	$(document).on('change','.emiBankEmiConCls',function(){
		var detectRow = $(this).attr('id');
		var getRowNo1 = detectRow.split("-")[1];
		var getRowNo2 = detectRow.split("-")[2];
		$_emiBnkNM(getRowNo1,getRowNo2);
	});
	
	$('#spanOldPswdId').hide();
	$('#spanNewPswdId').hide();
	$('#spanRePswdId').hide();
	// $('#newPasswordId').val() == $('#reNewPasswordId').val() &&  && $('#oldPswdId').val() != $('#newPasswordId').val())
		
		$(document).on('click','#btnChngPswdDummy',function(){
			var oldPwd = $('#oldPswdId').val();
			var newPwd = $('#reNewPasswordId').val();
				if($formValidity("formChngPswdId", "btnChngPswdSubmit")){
					requestData(API_CHNGEPASSWORD_POST + '?newPassword='+newPwd+'&oldPassword='+oldPwd, "POST").done(function (reply){
			//			// console.log('reply-',reply);
						if(reply.reply == "failure"){
							$('#spanOldPswdId').show();
							$('#spanNewPswdId').hide();
							$('#spanRePswdId').hide();
							$('#spanOldPswdId').delay(300000).fadeOut();
						}else{
							$('#newPasswordId').val('');
							$('#oldPswdId').val('');
							$('#reNewPasswordId').val('');
							$('#closeChngPwdId').click();
							alert('Password changed successfully');
							window.location.reload();
						}
					});
				}
		});
		
		$(document).on('keyup','#reNewPasswordId,#newPasswordId',function(){
			if($('#newPasswordId').val() == $('#reNewPasswordId').val()){
				$('#btnChngPswdDummy').prop('disabled', false);
				$('#spanRePswdId').hide();
			}else{
				$('#btnChngPswdDummy').prop('disabled', true);
				$('#spanOldPswdId').hide();
				$('#spanNewPswdId').hide();
				$('#spanRePswdId').show();
				$('#spanRePswdId').delay(300000).fadeOut();
			}
		});
		
			/*$('input[required]').on('invalid', function() {
		    this.setCustomValidity($(this).data("required-message"));
		});
		*/
		
		
		$(document).on('click','.addObsCls',function(){
			var getRowName = $(this).attr('id');
			if(getRowName == 'btnItrObsAddRow'){
				$_addObs('itrObsHidId','observationItrRowId','observationItrId','itrObsDelCls','btnItrObsDelId','observationBodyId',srNoObsItrGb,'itr');
			}else if(getRowName == 'btnItrClarAddRow'){
				$_addClar('itrClarHidId','clarificationItrRowId','clarificationItrId','itrClarDelCls','btnItrClarDelId','clarificationBodyId',srNoClarItrGb,'itr');
			}else if(getRowName == 'btnPdObsAddRow'){
				$_addObs('pdObsHidId','observationPdRowId','observationpdId','pdObsDelCls','btnPdObsDelId','observationPdBodyId',srNoObsPdGb,'emipd');
			}else if(getRowName == 'btnPdClarAddRow'){
				$_addClar('pdClarHidId','clarificationPdRowId','clarificationPdId','pdClarDelCls','btnPdClarDelId','clarificationPdBodyId',srNoClarPdGb,'emipd');
			}else if(getRowName == 'btnCibilObsAddRow'){
				$_addObs('cibilObsHidId','observationCibilRowId','observationCibilId','cibilObsDelCls','btnCibilObsDelId','observationCibilBodyId',srNoObsCibilGb,'cibil');
			}else if(getRowName == 'btnCibilClarAddRow'){
				$_addClar('cibilClarHidId','clarificationCibilRowId','clarificationCibilId','cibilClarDelCls','btnCibilClarDelId','clarificationCibilBodyId',srNoClarCibilGb,'cibil');
			}else if(getRowName == 'btnBankObsAddRow-'+emiBankBankId){
				$_addObsBank('bankObsHidId','observationBankRowId','observationBankId','bankObsDelCls','btnBankObsDelId','observationBankBodyId',srNoObsEmiBankGb,'emibank',emiBankBankId);
			}else if(getRowName == 'btnBankClarAddRow-'+emiBankBankId){
				$_addClarBank('bankClarHidId','clarificationBankRowId','clarificationBankId','bankClarDelCls','btnBankClarDelId','clarificationBankBodyId',srNoClarEmiBankGb,'emibank',emiBankBankId);
			}else if(getRowName == 'btnBankBsObsAddRow-'+submitBankBsId){  // srNoObsBsBankGb = 1, srNoClarBsBankGb = 1, srNoObsEmiBankGb,srNoClarEmiBankGb
				//			// console.log('checkkrAdd-',srNoObsBsBankGb);
				$_addObsBank('bankBsObsHidId','observationBankBsRowId','observationBankBsId','bankBsObsDelCls','btnBankBsObsDelId','observationBankBsBodyId',srNoObsBsBankGb,'bsbank',submitBankBsId);
			}else if(getRowName == 'btnBankBsClarAddRow-'+submitBankBsId){
				//	 // console.log('checkkrAdd-',srNoClarBsBankGb);
				$_addClarBank('bankBsClarHidId','clarificationBankBsRowId','clarificationBankBsId','bankBsClarDelCls','btnBankBsClarDelId','clarificationBankBsBodyId',srNoClarBsBankGb,'bsbank',submitBankBsId);
			}
		});
		// 
		$(document).on('click', '#btnDummyItr', function(){
			$('#btnSubmitItr').click();
		});
		
		//		// console.log('submitBankBsId-',submitBankBsId);
		$(document).on('click', '.bsBankSubmitCls', function(){
			//	// console.log('srNoObsBsBankGb-',srNoObsBsBankGb,srNoClarBsBankGb);
		requestData(API_OBSERVATION_POST, "POST", JSON.stringify(getRowDataObs(srNoObsBsBankGb,'BSBANK'))).done(function (replyObs) {
			if(replyObs.reply == "successobservation"){
				requestData(API_CLARIFICATION_POST, "POST", JSON.stringify(getRowDataClar(srNoClarBsBankGb,'BSBANK'))).done(function (replyClar) {
					if(replyClar.reply == "successclarification"){
						alert("Data successfiully saved.");
						window.location.reload();
						}		
					});		
				}
			});
		});
	
		/*$(document).on('click', '#btnDummyItr', function(){
				requestData(API_CLARIFICATION_POST, "POST", JSON.stringify(getRowDataClar(srNoClarItrGb,'ITR'))).done(function (replyClar) {
					clarMsg = replyClar.reply;
			});
		});*/
}); // end for $(document).ready

/*---------- FUNCTIONS ------------*/
// emiBankBankId
// OBSERVATION AND CLARIFICATION
function $_itrFinalPostCall(event) {
	event.preventDefault();

	requestData(API_ITR_POST,"POST",JSON.stringify(itrPostCall())).done(function(itrReply){
		if(itrReply.reply == "success"){
			requestData(API_OBSERVATION_POST, "POST", JSON.stringify(getRowDataObs(srNoObsItrGb,'ITR'))).done(function (replyObs) {
				if(replyObs.reply == "successobservation"){
			requestData(API_CLARIFICATION_POST, "POST", JSON.stringify(getRowDataClar(srNoClarItrGb,'ITR'))).done(function (replyClar) {
				if(replyClar.reply == "successclarification"){
					alert("Data successfiully saved.");
					window.location.reload();
					}		
				});		
			}
		});
		}
	});
}
function $_addObs(HIDID,ROWID,TEXTID,DELCLS,DELID,TBLBODYID,INCOBSGB,TAB){ var tblData='';
	++INCOBSGB;
	tblData = '<tr id="'+ROWID+'-'+INCOBSGB+'">'+
	'<td id="'+HIDID+'-'+INCOBSGB+'" style="display:none;"></td>'+
	'<td><input type="text" class="form-control"  id="'+TEXTID+'-'+INCOBSGB+'"></td>'+
	'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm '+DELCLS+'" id="'+DELID+'-'+INCOBSGB+'">'+
	'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
	$('#'+TBLBODYID).append(tblData);
	if(TAB == 'itr'){
		srNoObsItrGb  = INCOBSGB;
	}else if(TAB == 'emipd'){
		srNoObsPdGb  = INCOBSGB;
	}else if(TAB == 'cibil'){
		srNoObsCibilGb  = INCOBSGB;
	}
	
}
// // srNoObsBsBankGb = 1, srNoClarBsBankGb = 1, srNoObsEmiBankGb,srNoClarEmiBankGb
function $_addObsBank(HIDID,ROWID,TEXTID,DELCLS,DELID,TBLBODYID,INCOBSGB,TAB,BNKID){ var tblData='';
//	// console.log('INCOBSGB-',INCOBSGB);
++INCOBSGB;
tblData = '<tr id="'+ROWID+'-'+BNKID+'-'+INCOBSGB+'">'+
'<td id="'+HIDID+'-'+BNKID+'-'+INCOBSGB+'" style="display:none;"></td>'+
'<td><input type="text" class="form-control"  id="'+TEXTID+'-'+BNKID+'-'+INCOBSGB+'"></td>'+
'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm '+DELCLS+'" id="'+DELID+'-'+BNKID+'-'+INCOBSGB+'">'+
'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
$('#'+TBLBODYID+'-'+BNKID).append(tblData);
if(TAB == 'emibank'){
	srNoObsEmiBankGb = INCOBSGB;  
}else{
	srNoObsBsBankGb = INCOBSGB;  
}
}


function $_addClar(HIDID,ROWID,TEXTID,DELCLS,DELID,TBLBODYID,INCCLARGB,TAB){ var tblData='';
//	// console.log('INCCLARGB-',INCCLARGB);
++INCCLARGB;
tblData = '<tr id="'+ROWID+'-'+INCCLARGB+'">'+
'<td id="'+HIDID+'-'+INCCLARGB+'" style="display:none;"></td>'+
'<td><input type="text" class="form-control"  id="'+TEXTID+'-'+INCCLARGB+'"></td>'+
'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm '+DELCLS+'" id="'+DELID+'-'+INCCLARGB+'">'+
'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
$('#'+TBLBODYID).append(tblData);
if(TAB == 'itr'){
	srNoClarItrGb  = INCCLARGB;
}else if(TAB == 'emipd'){
	srNoClarPdGb  = INCCLARGB;
}else if(TAB == 'cibil'){
	srNoClarCibilGb  = INCCLARGB;
}
}

function $_addClarBank(HIDID,ROWID,TEXTID,DELCLS,DELID,TBLBODYID,INCCLARGB,TAB,BNKID){ var tblData='';
++INCCLARGB;
tblData = '<tr id="'+ROWID+'-'+BNKID+'-'+INCCLARGB+'">'+
'<td id="'+HIDID+'-'+BNKID+'-'+INCCLARGB+'" style="display:none;"></td>'+
'<td><input type="text" class="form-control"  id="'+TEXTID+'-'+BNKID+'-'+INCCLARGB+'"></td>'+
'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm '+DELCLS+'" id="'+DELID+'-'+BNKID+'-'+INCCLARGB+'">'+
'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
$('#'+TBLBODYID+'-'+BNKID).append(tblData);
if(TAB == 'emibank'){
	srNoClarEmiBankGb = INCCLARGB;  
}else{
	srNoClarBsBankGb = INCCLARGB;  
}
}
function getRowDataObs(ROWCOUNTOBS,TAB){//alert(a);
var arr = [];
//			// console.log('ROWCOUNTOBS-',ROWCOUNTOBS);
				for(i=1; i<=ROWCOUNTOBS; i++) {
					if(TAB == 'ITR'){
						$_undefinedCheck($_getRowValObs('itrObsHidId','itr','observationItrId','ClientSessionId',0,i),arr);
					
					}else if(TAB == 'PD'){
						$_undefinedCheck($_getRowValObs('pdObsHidId','pd','observationpdId','ClientSessionId',0,i),arr);
					}else if(TAB == 'CIBIL'){
						$_undefinedCheck($_getRowValObs('cibilObsHidId','cibil','observationCibilId','ClientSessionId',0,i),arr);
					
					}else if(TAB == 'EMIBANK'){
						$_undefinedCheck($_getRowBankValObs('bankObsHidId','emibank','observationBankId','ClientSessionId',emiBankBankId,i),arr);
					
					}else if(TAB == 'BSBANK'){
						$_undefinedCheck($_getRowBankValObs('bankBsObsHidId','bsbank','observationBankBsId','ClientSessionId',submitBankBsId,i),arr);
						
					}
			}	//	// console.log('obs-',arr);
			return arr;
}

function getRowDataClar(ROWCOUNTCLAR,TAB){
	var arr = [];
	//		// console.log('ROWCOUNTCLAR-',ROWCOUNTCLAR);
		for(i=1; i<=ROWCOUNTCLAR; i++){
		if(TAB == 'ITR'){
			$_undefinedCheck($_getRowValClar('itrClarHidId','itr','clarificationItrId','ClientSessionId',0,i),arr);
		}else if(TAB == 'PD'){
			$_undefinedCheck($_getRowValClar('pdClarHidId','pd','clarificationPdId','ClientSessionId',0,i),arr);
		}else if(TAB == 'CIBIL'){
			$_undefinedCheck($_getRowValClar('cibilClarHidId','cibil','clarificationCibilId','ClientSessionId',0,i),arr);
		}else if(TAB == 'EMIBANK'){
			$_undefinedCheck($_getRowBankValClar('bankClarHidId','emibank','clarificationBankId','ClientSessionId',emiBankBankId,i),arr);
			
		}else if(TAB == 'BSBANK'){
			$_undefinedCheck($_getRowBankValClar('bankBsClarHidId','bsbank','clarificationBankBsId','ClientSessionId',submitBankBsId,i),arr);
		}
	}	//	// console.log('clar-',arr);
	return arr;
}
function $_getRowValClar(HIDID,TABNAME,CLARVAL,CID,BNKID,IVAL){
	
	if($('#'+HIDID+'-'+IVAL).text() == "" && $('#'+CLARVAL+'-'+IVAL).val() == ""){
		
	}
	else if($('#'+HIDID+'-'+IVAL).text() == 0 && $('#'+CLARVAL+'-'+IVAL).val() === undefined){
		
	}else{
		var rowData = {
				//isNaN(parseInt($('#'+HIDID+'-'+IVAL).text()))?0:(parseInt($('#'+HIDID+'-'+IVAL).text())),
				  "clarificationid":isNaN(parseInt($('#'+HIDID+'-'+IVAL).text()))?0:(parseInt($('#'+HIDID+'-'+IVAL).text())),
				  "tabname" :TABNAME,
				  "clarification" :$('#'+CLARVAL+'-'+IVAL).val(),
				  "clientid" :$('#'+CID).val(),
				  "bankId":BNKID
				}
		return rowData;
	}
}

function $_getRowValObs(HIDID,TABNAME,OBSVAL,CID,BNKID,IVAL){
if($('#'+HIDID+'-'+IVAL).text() == "" && $('#'+OBSVAL+'-'+IVAL).val() == ""){
		
	}
	else if($('#'+HIDID+'-'+IVAL).text() == 0 && $('#'+OBSVAL+'-'+IVAL).val() === undefined){
		
	}else{
		var rowData = {
				  "observationid":isNaN(parseInt($('#'+HIDID+'-'+IVAL).text()))?0:(parseInt($('#'+HIDID+'-'+IVAL).text())),
				  "tabname" :TABNAME,
				  "observation" :$('#'+OBSVAL+'-'+IVAL).val(),
				  "clientid" :$('#'+CID).val(),
				  "bankId":BNKID
				}
		return rowData;
	}
}


function $_getRowBankValObs(HIDID,TABNAME,OBSVAL,CID,BNKID,IVAL){
	if($('#'+HIDID+'-'+BNKID+'-'+IVAL).text() == "" && $('#'+OBSVAL+'-'+BNKID+'-'+IVAL).val() == ""){
		
	}
	else if($('#'+HIDID+'-'+BNKID+'-'+IVAL).text() == 0 && $('#'+OBSVAL+'-'+BNKID+'-'+IVAL).val() === undefined){
		
	}else{
		var rowData = {
				  "observationid":isNaN(parseInt($('#'+HIDID+'-'+BNKID+'-'+IVAL).text()))?0:(parseInt($('#'+HIDID+'-'+BNKID+'-'+IVAL).text())),
				  "tabname" :TABNAME,
				  "observation" :$('#'+OBSVAL+'-'+BNKID+'-'+IVAL).val(),
				  "clientid" :$('#'+CID).val(),
				  "bankId":BNKID
				}
		return rowData;
	}
}


function $_getRowBankValClar(HIDID,TABNAME,CLARVAL,CID,BNKID,IVAL){
	if($('#'+HIDID+'-'+BNKID+'-'+IVAL).text() == "" && $('#'+CLARVAL+'-'+BNKID+'-'+IVAL).val() == ""){
		
	}
	else if($('#'+HIDID+'-'+BNKID+'-'+IVAL).text() == 0 && $('#'+CLARVAL+'-'+BNKID+'-'+IVAL).val() === undefined){
		
	}else{
		var rowData = {
				//isNaN(parseInt($('#'+HIDID+'-'+IVAL).text()))?0:(parseInt($('#'+HIDID+'-'+IVAL).text())),
				  "clarificationid":isNaN(parseInt($('#'+HIDID+'-'+BNKID+'-'+IVAL).text()))?0:(parseInt($('#'+HIDID+'-'+BNKID+'-'+IVAL).text())),
				  "tabname" :TABNAME,
				  "clarification" :$('#'+CLARVAL+'-'+BNKID+'-'+IVAL).val(),
				  "clientid" :$('#'+CID).val(),
				  "bankId":BNKID
				}
		return rowData;
	}
}


function $_undefinedCheck(a,b){
	if(a===undefined){
		
	}else{
		b.push(a);
	}
}
//FOR ALL
function mW(a,b,c){var z='',x='',head='',collateraldetail='';
	$('#btnMwId').click();
	if(a == 'cID'){
		head += '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
			'<h4 class="modal-title">Alert!</h4>';
		x += '<h3 align="center">Please enter ID</h3>';
		z += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
	}else if(a == 'cIdNp'){
		head += '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
		'<h4 class="modal-title">Alert!</h4>';
		x += '<h3 align="center">ID does not exist.</h3>';
		z += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
	}else if(a == 'comments'){
		//		// console.log('collateraldetail-',c);
		head += '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
		'<h4 class="modal-title">Comments</h4>';
		x += '<h4 align="center">'+c+'</h4>';
		z += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
	}else if(a == 'remarks'){
		//		// console.log('remarks-',c);
		head += '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
		'<h4 class="modal-title">Remarks</h4>';
		x += '<h4 align="center">'+c+'</h4>';
		z += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
	}else if(a == 'nodata'){
		head += '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
		'<h4 class="modal-title">Alert!</h4>';
		x += '<h4 align="center">NO DATA</h4>';
		z += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
	}else{
		head += '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
		'<h4 class="modal-title">Alert!</h4>';
		x += '<h3 align="center">Please enter Company Name</h3>'+
			'<input type="text"  class="form-control" id="compNamReqId" placeholder="Company Name">';
		z += '<button type="button" class="btn btn-primary" data-dismiss="modal" id="btnUpComNmId">Update</button>';
	}
	$('#modalHeaderId').empty().append(head);
	$('#modalBodyId').empty().append(x);
	$('#modalFooterId').empty().append(z);
}
function requestData(url, type, data) {
 var request = $.ajax({
     url: url,
     method: type,
     data: data,
     headers: {"Content-Type": "application/json;charset=UTF-8"},
     dataType: "json"
 });
 return request;
}
function activaTab(tab){$('.nav-tabs a[href="#' + tab + '"]').tab('show');};
//ITR
function $GET_ITR(API_IT_GET_1){
	requestData(API_IT_GET_1+$('#ClientSessionId').val(), "GET", '').done(function(a){

		$('#salesItrText3Id').keyup(function(){
			//// console.log(a.bankingturnover);
			var _tempbankingturnover = a.bankingturnover;
			var _calturn = (_tempbankingturnover)/parseFloat($('#salesItrText3Id').val());
			
			$('#bankingTurnoverItrColId3').text($nFF(_calturn,2));
			});
		
	});
}
//IBT
//BANK SUMMARY
function bsRenderFunForAn(a,c,d,e){
	var b = '<td class="m-lightBlue">Annualised</td>';
	if(d == "Ann"){
		b += '<td class="m-lightBlue anRowColEmpty'+c+'">'+a.annual1+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+a.annual2+'</td><td class="m-lightBlue anRowColEmpty'+c+'">'+a.annual3+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+a.annual4+'</td><td class="m-lightBlue anRowColEmpty'+c+'"></td><td class="m-lightBlue anRowColEmpty'+c+'"></td>'+
		'<td class="forSpace"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="forSpace"></td>'+
		'<td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td>';
		b += (e == "con")?'':'<td class="m-lightBlue"></td>';
	}else{
		b += '<td class="m-lightBlue anRowColEmpty'+c+'">'+a[0].total1+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+a[0].total2+'</td><td class="m-lightBlue anRowColEmpty'+c+'">'+a[0].total3+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+a[0].total4+'</td><td class="m-lightBlue anRowColEmpty'+c+'"></td><td class="m-lightBlue anRowColEmpty'+c+'"></td>'+
		'<td class="forSpace"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="forSpace"></td>'+
		'<td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td>';
		b += (e == "con")?'':'<td class="m-lightBlue"></td>';
	} 
	return b;
}
function bsRenderFun(a, c, d, e){
	if(c == "Total"){
		var b = '<tr class="m-lightBlue"><td>'+c+'</td>';
		b += '<td>'+a[0].total1+'</td>'+
		'<td>'+a[0].total2+'</td><td>'+a[0].total3+'</td>'+
		'<td>'+a[0].total4+'</td><td></td>'+
		'<td></td><td class="forSpace"></td>'+ // space
		'<td></td><td></td>'+
		'<td></td><td></td>'+
		'<td></td><td class="forSpace"></td>'+ // space
		'<td>'+a[0].total12+'</td><td>'+a[0].total13+'</td>'+
		'<td>'+a[0].total14+'</td><td>'+a[0].total15+'</td>';
		b += (e != "con")?'<td>'+a[0].total16+'</td>':'';
		
	}else if(c == "Average 6m"){
		var b = '<tr class="m-lightBlue"><td>'+c+'</td>';
		b += '<td>'+a[0].averageSix1+'</td>'+
		'<td>'+a[0].averageSix2+'</td><td>'+a[0].averageSix3+'</td>'+
		'<td>'+a[0].averageSix4+'</td><td>'+a[0].averageSix5+'</td>'+
		'<td>'+a[0].averageSix6+'</td><td class="forSpace"></td>'+ // space
		'<td>'+parseFloat(a[0].averageSix7).toFixed(2)+'</td><td>'+a[0].averageSix8+'</td>'+
		'<td>'+a[0].averageSix9+'</td><td>'+a[0].averageSix10+'</td>'+
		'<td>'+($_fix2((a[0].averageSix11)*100))+'</td><td class="forSpace"></td>'+ // space
		'<td>'+a[0].averageSix12+'</td><td>'+a[0].averageSix13+'</td>'+
		'<td>'+a[0].averageSix14+'</td><td>'+a[0].averageSix15+'</td>';
		b += (e != "con")?'<td>'+$commaPut(a[0].averageSix16)+'</td>':'';
	
		
	}else if(c == "Average 9m"){
		var b = '<tr class="m-lightBlue"><td>'+c+'</td>';
		b += '<td>'+a[0].avg1+'</td>'+
		'<td>'+a[0].avg2+'</td><td>'+a[0].avg3+'</td>'+
		'<td>'+a[0].avg4+'</td><td>'+a[0].avg5+'</td>'+
		'<td>'+a[0].avg6+'</td><td class="forSpace"></td>'+ // space
		'<td>'+parseFloat(a[0].avg7).toFixed(2)+'</td><td>'+a[0].avg8+'</td>'+
		'<td>'+a[0].avg9+'</td><td>'+a[0].avg10+'</td>'+
		'<td>'+($_fix2((a[0].avg11)*100))+'</td><td class="forSpace"></td>'+ // space
		'<td>'+a[0].avg12+'</td><td>'+a[0].avg13+'</td>'+
		'<td>'+a[0].avg14+'</td><td>'+a[0].avg15+'</td>';
	//	// console.log('e-',e);
		b += (e != "con")?'<td>'+$commaPut(a[0].avg16)+'</td>':'';
	}else{
		var b = '<tr id="anRowDataId'+d+'"><td class="m-lightBlue">'+c+'</td>';
		b += '<td class="m-lightBlue anRowColEmpty'+d+'">'+a.annual1+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+d+'">'+a.annual2+'</td><td class="m-lightBlue anRowColEmpty'+d+'">'+a.annual3+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+d+'">'+a.annual4+'</td><td class="m-lightBlue anRowColEmpty'+d+'"></td><td class="m-lightBlue anRowColEmpty'+d+'"></td>'+
		'<td class="forSpace"></td class="m-lightBlue"><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="forSpace"></td>'+
		'<td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td>';
	//	// console.log('e-',e);
		
		b += (e == "con")?'':'<td class="m-lightBlue"></td>';
		//// console.log(b);
	}
	b += '</tr>';return b;
	
}
//EMI SUMMARY

function PMTcal4 (i, n, p, noUse) {
	return parseFloat(i * p * Math.pow((1 + i), n) / (1 - Math.pow((1 + i), n))).toFixed(0);	
}
function getRowDataEmipd(a){
	var arr = [];
	for(i=1; i<=a; i++) {
		if($('#nol-'+i).val() == "" && $('#emipdCmnt-'+i).val() == "" && $('#slist-'+i).val() == "" && $('#lsda-'+i).val() == "" && $('#lsd-'+i).val() == "" && $('#emi-'+i).val() == "" && $('#ai-'+i).val() == "" && $('#tenure-'+i).val() == ""){
			
		}
		else if($('#nol-'+i).val() === undefined && $('#emipdCmnt-'+i).val() === undefined && $('#slist-'+i).val() === undefined && $('#lsda-'+i).val() === undefined && $('#lsd-'+i).val() === undefined && $('#emi-'+i).val() === undefined && $('#ai-'+i).val() === undefined && $('#tenure-'+i).val() === undefined){
			
		}
		else{
				var rowData = {
					"emiid" : isNaN(parseInt($('#emiIdHid-'+i).text()))?0:(parseInt($('#emiIdHid-'+i).text())),
					"clientid" :parseInt($('#ClientSessionId').val()),
					"nameofLender" : $('#nol-'+i).val(),
					"typeofLoan" : $('#slist-'+i).val(),
					"loansactionAmount" : (isNaN(parseInt($comRem($('#lsda-'+i).val()))))?"":parseInt($comRem($('#lsda-'+i).val())),
					"dateString" : $('#lsd-'+i).val(),
					"emitobeconsidered" : $('#slct-'+i).val(),
					"emi" : isNaN(parseInt($comRem($('#emi-'+i).val())))?0:(parseInt($comRem($('#emi-'+i).val()))),
					"annualintrestRate" : (isNaN(parseFloat($('#ai-'+i).val()).toFixed(2)))?"":parseFloat($('#ai-'+i).val()).toFixed(2),
					"collateraldetail" : $('#emipdCmnt-'+i).val(),
					"remarks" : $('#remarkEmiPd-'+i).val(),
					"tenure" : (isNaN(parseInt($comRem($('#tenure-'+i).val()))))?"":parseInt($comRem($('#tenure-'+i).val()))				
			};
				  arr.push(rowData);
		}
	//  // console.log('emiPd-',arr);
	}return arr;
}
function $emiCalForEmiTabFirstTable(emiPdDynamic){
	var temp2=0;
	for(j=1;j<=emiPdDynamic;j++){ //var before increment
		var temp = parseInt($comRem($("#emi-"+j).val())); //InputboxId
		if(temp == "" || isNaN(temp)){
			temp=0;
		} 
		temp2 = parseInt(temp2)+parseInt(temp);
	}
	$("#emiEmiPd").text($commaPut(temp2));
}
/*function $emiCalForEmiTabFirstTable(emiPdDynamic1){
	var temp2=0;
	for(j=1;j<=emipdGlobal;j++){ //var before increment
		var temp = parseInt($("#emi-"+j).val()); //InputboxId
		if(temp == "" || isNaN(temp)){
			temp=0;
		} 
		temp2 = parseInt(temp2)+parseInt(temp);
	}
	$("#emiEmiPd").text(temp2);
}*/
function $formValid1(a) {
	//return true;
	if (!$("#" + a)[0].checkValidity()) {
	  $("#" + a + " input[required='required']").each(function() {
	   if (!$("#" + a)[0].checkValidity()) {
	    $("#btnSubmitEmiPd").click();
	   }
	  });return false;
	 } else {return true;}
}
function $formValidity(a,b) {
	//return true;
	 if (!$("#" + a)[0].checkValidity()) {
	  $("#" + a + " input[required='required']").each(function() {
	   if (!$("#" + a)[0].checkValidity()) {
	    $("#"+b).click();
	   }
	  });return false;
	 } else {return true;}
}
function $emiCalForEmiTabSecondTable(sNoCibil){
	var temp2=0;
	for(j=1;j<=sNoCibil;j++){
		var temp = parseInt($("#emiCibilId"+j).text());
		if(temp == "" || isNaN(temp)){
			temp=0;
		} 
		temp2 = parseInt(temp2)+parseInt(temp);
	}
	$("#emiEmiCibil").text(temp2);
}
function getRowDataEmiCibil(a){
	var arr = [];
	for(i=1; i<=a; i++) {
		var rowData = {		
				"emicibilid" :isNaN(parseInt($('#emiCibilIdHid-'+i).text()))?0:parseInt($('#emiCibilIdHid-'+i).text()),
				"clientid" : parseInt($('#ClientSessionId').val()),
				"nameofcibilholder" : $('#noCibil-'+i).text(),
				"typeofLoan" : $('#tolCibil-'+i).text(),
				"loansactionAmount" :parseInt($comRem($('#lsdaCibil-'+i).text())),
				"dateString" : $('#lsdCibil-'+i).text(),
				"emitobeconsidered" : $('#slctCibil-'+i).val(),
				"emi" : isNaN(parseInt($comRem($('#emiCibilId-'+i).text())))?0:parseInt($comRem($('#emiCibilId-'+i).text())),
				"annualintrestRate" : isNaN(parseFloat($('#aiCibil-'+i).val()).toFixed(2))?0:parseFloat($('#aiCibil-'+i).val()).toFixed(2),
				"collateraldetail" : $('#cmntCibil-'+i).val(),
				"remarks" : $('#remarkCibil-'+i).val(),
				"tenure" :isNaN(parseInt($('#tenureCibil-'+i).val()))?0:parseInt($('#tenureCibil-'+i).val())
			};
	   arr.push(rowData);
	//  console.log('emi-cibil-',arr);
	}return arr;
}
function getRowDataEmiBank(a,b){
	var arr = [];
	for(i=1; i<=a; i++) {		
		if(i==1){
			var rowData = {		
					"repaymenttrackid" : isNaN(parseInt($('#emiBankHidId-'+b+'-'+i).text()))?0:parseInt($('#emiBankHidId-'+b+'-'+i).text()),
					"clientid" : parseInt($('#ClientSessionId').val()),
					"bankid" : b,
					"typeofLoan" :$('#slistTtable-'+b+'-'+i).val(),
					"loansactionAmount" : parseInt($comRem($('#lsdaTtable-'+b+'-'+i).val())),
					"emitobeconsidered" : $('#slctTtable-'+b+'-'+i).val(),
					"dateString" : $('#lsdTtable-'+b+'-'+i).val(),
					"nameofLender" : $('#emiBankNol-'+b+'-'+i).text(),
					"collateraldetail" :$('#emiBankCmnt-'+b+'-'+i).val(),
					"remarks" :$('#emiBankRemark-'+b+'-'+i).val(),
					"emi" :  parseFloat($comRem($('#avgEmi-'+b+'-'+i).text())),
					"totalloansactionAmount": parseInt($comRem($('#emiBankListTotalLoanAmt-'+b).text())),
					"toatalemitobeconsidered": parseInt($comRem($('#emiBankListEmiConTot-'+b).text()))
				};
		}else{
			var rowData = {			
					"repaymenttrackid" : isNaN(parseInt($('#emiBankHidId-'+b+'-'+i).text()))?0:parseInt($('#emiBankHidId-'+b+'-'+i).text()),
					"clientid" : parseInt($('#ClientSessionId').val()),
					"bankid" : b,
					"typeofLoan" :$('#slistTtable-'+b+'-'+i).val(),
					"loansactionAmount" : parseInt($comRem($('#lsdaTtable-'+b+'-'+i).val())),
					"emitobeconsidered" : $('#slctTtable-'+b+'-'+i).val(),
					"dateString" : $('#lsdTtable-'+b+'-'+i).val(),
					"nameofLender" : $('#emiBankNol-'+b+'-'+i).text(),
					"collateraldetail" :$('#emiBankCmnt-'+b+'-'+i).val(),
					"remarks" :$('#emiBankRemark-'+b+'-'+i).val(),
					"emi" :  parseFloat($comRem($('#avgEmi-'+b+'-'+i).text()))
				};
		}
	   arr.push(rowData);
//	  // console.log('arr-',arr);
	}return arr;
}
//STRESS TEST
//QUALITATIVE
function getRowData(a){
//	// console.log(a);
	var arr = [];
	for(i=1; i<=a; i++) {
		//	// console.log('area-if-',$('#area'+i).val());
		
		if($('#propType'+i).val() == "" && $('#area'+i).val() == "" && $('#locality'+i).val() == "" && $('#marketValueNet'+i).val() == "" ){
			
		}else if($('#propType'+i).val() === undefined && $('#area'+i).val() === undefined && $('#locality'+i).val() === undefined && $('#marketValueNet'+i).val() === undefined ){
			
		}else{
			
			var rowData = {	
					
					"networthId": isNaN(parseInt($('#networthHidId'+i).text()))?0:parseInt($('#networthHidId'+i).text()),
					"propertyType" : $('#propType'+i).val(),
					"area" : isNaN(parseInt($comRem($('#area'+i).val())))?0:parseInt($comRem($('#area'+i).val())),
					"locality" : $('#locality'+i).val(),
					"total" : isNaN(parseInt($comRem($('#netWorthId').text())))?0:parseInt($comRem($('#netWorthId').text())),
					"marketValue" : $comRem($('#marketValueNet'+i).val())
					//"marketValue" : isNaN(parseInt($('#marketValueNet'+i).val()))?0:parseInt($('#marketValueNet'+i).val())
				};
			arr.push(rowData);
		}
		
	/*	if($('#area'+i).val() === undefined){
			
		}else{
				var rowData = {
					"networthId": isNaN(parseInt($('#networthHidId'+i).text()))?0:parseInt($('#networthHidId'+i).text()),
					"propertyType" : $('#propType'+i).val(),
					"area" : isNaN(parseInt($comRem($('#area'+i).val())))?0:parseInt($comRem($('#area'+i).val())),
					"locality" : $('#locality'+i).val(),
					"total" : isNaN(parseInt($comRem($('#netWorthId').text())))?0:parseInt($comRem($('#netWorthId').text())),
					"marketValue" : $comRem($('#marketValueNet'+i).val())
					//"marketValue" : isNaN(parseInt($('#marketValueNet'+i).val()))?0:parseInt($('#marketValueNet'+i).val())
				};
			arr.push(rowData);
		}*/
	}return arr;
}
function getRowData2(a){
	//// console.log(a);
	var arr = [];
	for(i=1; i<=a; i++) {
	if($('#perOfConcQual-'+i).val() == "" && $('#cpnQual-'+i).val() == "" && $('#CommentQual-'+i).val() == "" && $('#desigQual-'+i).val() == "" && $('#mobQual-'+i).val() == ""&& $('#custName-'+i).val() == ""){
	
	}else if($('#perOfConcQual-'+i).val() === undefined && $('#cpnQual-'+i).val() === undefined && $('#CommentQual-'+i).val() === undefined && $('#desigQual-'+i).val() === undefined && $('#mobQual-'+i).val() === undefined && $('#custName-'+i).val() === undefined){
	}	
		else{
			var rowData = {		
					//  "clientid" : $('#ClientSessionId').val(),
					  "mjcustomerId": isNaN(parseInt($('#mjcustomerHidId'+i).text()))?0:parseInt($('#mjcustomerHidId'+i).text()),
					  "pconcentration": isNaN(parseFloat($('#perOfConcQual-'+i).val()).toFixed(2))?0:parseFloat($('#perOfConcQual-'+i).val()),
				      "contactperson": $('#cpnQual-'+i).val(),
				      "comment": $('#CommentQual-'+i).val(),
				      "designation": $('#desigQual-'+i).val(),
				      "mobileno": isNaN(parseInt($('#mobQual-'+i).val()))?0:parseInt($('#mobQual-'+i).val()),
				      "customername": $('#custName-'+i).val()
					};
			  arr.push(rowData);
		}
			
		
	 
	  // // console.log(arr);
	}return arr;
}
function getRowData3(a){
	//// console.log(a);
	var arr = [];
	for(i=1; i<=a; i++) {
		
		if($('#perOfConcTQual-'+i).val() == "" && $('#cpnTQual-'+i).val() == "" && $('#CommentTQual-'+i).val() == "" && $('#desigTQual-'+i).val() == "" && $('#mobTQual-'+i).val() == "" && $('#supTName-'+i).val() == ""){
			
		}else if($('#perOfConcTQual-'+i).val() === undefined && $('#cpnTQual-'+i).val() === undefined && $('#CommentTQual-'+i).val() === undefined && $('#desigTQual-'+i).val() === undefined && $('#mobTQual-'+i).val() === undefined && $('#supTName-'+i).val() === undefined){
			
		}else{
			var rowData = {		
			  "majorsupplierqtid": isNaN(parseInt($('#majorsupplierqtHidid'+i).text()))?0:parseInt($('#majorsupplierqtHidid'+i).text()),
			  "pconcentration": isNaN(parseFloat($('#perOfConcTQual-'+i).val()).toFixed(2))?0:parseFloat($('#perOfConcTQual-'+i).val()),
		      "contactperson": $('#cpnTQual-'+i).val(),
		      "comment": $('#CommentTQual-'+i).val(),
		      "designation": $('#desigTQual-'+i).val(),
		      "mobileno": isNaN(parseInt($('#mobTQual-'+i).val()))?0:parseInt($('#mobTQual-'+i).val()),
		      "suppliername": $('#supTName-'+i).val()
			};
			arr.push(rowData);
		}
	   
	   //// console.log(arr);
	}return arr;
}
function $formValid(a) {
	//return true;
	 if (!$("#" + a)[0].checkValidity()) {
	  $("#" + a + " input[required='required']").each(function() {
	   if (!$("#" + a)[0].checkValidity()) {
	    $("#btnSubmitQualitative").click();
	   }
	  });return false;
	 } else {return true;}
}
//SNAPSHOT

/*function $_NaNCheck(x,y){ var z;
	z = (y=='val')?$('#'+x).val():$('#'+x).text();
	return z==''?0:z;
}*/
 
function $_NaNCheck(x,y){ 
	 var z;
	 z = (y=='val')?$comRem($('#'+x).val()):$comRem($('#'+x).text());
	 return z==''?0:z;
}
 
function $pF(a){
	return parseFloat($comRem(a));
}
function $pI(a){
	return parseInt($comRem(a));
}
function $_pV(ID,TYPE,VALUE,decType){//// console.log(decType);
	(TYPE=='value')?($('#'+ID).val($commaPut((decType=='a')?parseFloat(VALUE).toFixed(2):parseFloat(VALUE).toFixed(0)))):($('#'+ID).text($commaPut((decType=='a')?parseFloat(VALUE).toFixed(2):parseFloat(VALUE).toFixed(0))))
}
function $_resizeStat(){
	$('.content').height($(window).height() - 190);
	$('.content2').height($(window).height() - 220);
	$('.content3').height($(window).height()- 110);
}
function $resize(){
	$('.content').height($(window).height() - 220);
	$('.content2').height($(window).height() - 260);
	$('.content3').height($(window).height()- 230);
}
function $dataTable(a,b){
	var i=0,j=0;
	var oTable = $('#'+a).DataTable({
		 oSearch: {"bRegex":true, "bSmart": false},
		 bPaginate: false,
		 bInfo: false,
		 data : b,
		 columns : [//remarks
		   {data : 'nameOfLender'},
		   {data : 'typeOFLoan'},
		   {data : 'loanSanctionedAmount',render : function( data, type, full ) {return $commaPut(data)}},
		   {data : 'loanSantionedDate'},
		   {data : 'emi', render : function( data, type, full ) {return $commaPut(data)}},
		   {data : 'collateraldetail', "render": function (data, type, full, meta) {++i;
               return (data=="")?'':'<div style="padding-right:55px;"><button type="button" id="cmmntmodalId-'+i+'" class="btn btn-primary hoverModalCmntCls"><span class="glyphicon glyphicon-file"></span></button></div>'}},
           {data : 'remarks', "render": function (data, type, full, meta) {++j;
               return (data=="")?'':'<div style="padding-right:45px;"><button type="button" id="remarksmodalId-'+j+'" class="btn btn-primary hoverModalRemCls"><span class="glyphicon glyphicon-file"></span></button></div>'}}
		 ],
		 columnDefs: [
		    	        { "targets": [2,3], "searchable": false }
		 ]
	 });
	 jQuery.fn.dataTable.Api.register( 'sum()', function () {
	    return this.flatten().reduce( function ( a, b ) {
	        return (a*1) + (b*1); // cast values in-case they are strings
	    });
	 });
	 $('.dataTables_filter').hide();
	 
	 $('#finalLoanTotal').text($commaPut($('#'+a).DataTable().column( 2, {page:'current'} ).data().sum()));
	 $('#finalEmiTotal').text($commaPut($('#'+a).DataTable().column( 4, {page:'current'} ).data().sum()));
	 
	 $("select").on("select2:select", function (evt) {
		  var element = evt.params.data.element;
		  var $element = $(element);
		  
		  $element.detach();
		  $(this).append($element);
		  $(this).trigger("change");
	});
	 
	 $(document).on('change','#finalObFilter',function(){
		 $(".ui-tooltip").hide();
		 oTable.column( 1 ).search( $mulSelecct($(this).val()), true, false ).draw(); 
		 //oTable.column(1).search($mulSelecct($(this).val())).draw();
		 //$('input[type=search]').val($mulSelecct($(this).val())).keyup();
		 $('#finalLoanTotal').text($commaPut($('#'+a).DataTable().column( 2, {page:'current'} ).data().sum()));
		 $('#finalEmiTotal').text($commaPut($('#'+a).DataTable().column( 4, {page:'current'} ).data().sum()));
		 $('.select2-search__field , .select2-results__message').hide();
	 });
}


function $mulSelecct(a){
	var z=a==null?-9:a.length,y='';
 	for(x=0;x<z;x++){y += x==0?'':'|';y += a[x];}
    return y;
}

function $_dropEmiPd(VAR,ID,INC){
	 
	 if(VAR == "BL" || VAR == "PL"){
	  $('#'+ID+'-'+INC).val('');
	  $('#'+ID+'-'+INC).prop('readonly', true);
	 }else{
	  $('#'+ID+'-'+INC).prop('readonly', false);
	 }
	}
	
function $_dropEmiBank(VAR,ID,INC1,INC2){
	  if(VAR == "BL" || VAR == "PL"){
	   $('#'+ID+'-'+INC1+'-'+INC2).val('');
	   $('#'+ID+'-'+INC1+'-'+INC2).prop('readonly', true);
	 }else{
	  $('#'+ID+'-'+INC1+'-'+INC2).prop('readonly', false);
	 }
}

function $_delRows(API,ROWID,INCR,DECR,HIDID,CHECK){
	if($('#'+HIDID+INCR).text() != ''){
		requestData(API, "GET",'').done(function (reply) {
			//		// console.log('reply-',reply)
			if(reply.reply == 'entityremovedsuccessfully'){
				$("#"+ROWID+'-'+INCR).remove();
				DECR--;
			}
		});
	}else if($('#'+HIDID+'-'+INCR).text() != ''){
		requestData(API, "GET",'').done(function (reply) {
			//		// console.log('reply-',reply)
			if(reply.reply == 'entityremovedsuccessfully'){
				$("#"+ROWID+'-'+INCR).remove();
				DECR--;
			}
		});
	}else{
		$("#"+ROWID+'-'+INCR).remove();
		DECR--;
	}
}
function $_delRowsBank(API,ROWID,INCR,DECR,HIDID,BNKID){
	if($('#'+HIDID+'-'+BNKID+'-'+INCR).text() != ''){
		requestData(API, "GET",'').done(function (reply) {
			// console.log('reply-',reply)
			if(reply.reply == 'entityremovedsuccessfully'){
				$("#"+ROWID+'-'+BNKID+'-'+INCR).remove();
				DECR--;
			}
		});
	}else{
		$("#"+ROWID+'-'+BNKID+'-'+INCR).remove();
		DECR--;
	}
}
function $_pIp(a){
	return parseFloat(a*100).toFixed(2);
}
// Comma
function $commaPut(x) {
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

function $_fix2(a){
	return parseFloat(a).toFixed(2);
}
function $_fix0(a){
	return parseFloat(a).toFixed(0);
}


function $_emiPDNM(INC){
	if($('#slct-'+INC).val() == "YES"){
		$('#nol-'+INC).attr('required', 'required');
		$('#slist-'+INC).attr('required', 'required');
		$('#lsda-'+INC).attr('required', 'required');
		$('#lsd-'+INC).attr('required', 'required');
		$('#slct-'+INC).attr('required', 'required');
		$('#emi-'+INC).attr('required', 'required');
		$('#ai-'+INC).attr('required', 'required');
		$('#tenure-'+INC).attr('required', 'required');
	}else{
		$('#nol-'+INC).removeAttr('required');
		$('#slist-'+INC).removeAttr('required');
		$('#lsda-'+INC).removeAttr('required');
		$('#lsd-'+INC).removeAttr('required');
		$('#slct-'+INC).removeAttr('required');
		$('#emi-'+INC).removeAttr('required');
		$('#ai-'+INC).removeAttr('required');
		$('#tenure-'+INC).removeAttr('required');
	}
	if($('#emi-'+INC).val() != "" || $('#slct-'+INC).val() == "NO"){
		$('#ai-'+INC).removeAttr('required');
		$('#tenure-'+INC).removeAttr('required');
	}else{
		$('#ai-'+INC).attr('required','required');
		$('#tenure-'+INC).attr('required','required');
	}
}

function $_emiCibNM(INC){
	if($('#slctCibil-'+INC).val() == "YES"){
		$('#aiCibil-'+INC).attr('required', 'required');
		$('#tenureCibil-'+INC).attr('required', 'required');
	}else{
		$('#aiCibil-'+INC).removeAttr('required');
		$('#tenureCibil-'+INC).removeAttr('required');
	}
}

function $_emiBnkNM(BNKID,INC){
	//slctTtable-2151-1
//	// console.log($('#slctTtable-'+BNKID+'-'+INC).val());
	if($('#slctTtable-'+BNKID+'-'+INC).val() == "YES"){
		$('#slistTtable-'+BNKID+'-'+INC).attr('required', 'required');
		$('#lsdaTtable-'+BNKID+'-'+INC).attr('required', 'required');
		$('#lsdTtable-'+BNKID+'-'+INC).attr('required', 'required');
		$('#slctTtable-'+BNKID+'-'+INC).attr('required', 'required');
	}else{
		$('#slistTtable-'+BNKID+'-'+INC).removeAttr('required');
		$('#lsdaTtable-'+BNKID+'-'+INC).removeAttr('required');
		$('#lsdTtable-'+BNKID+'-'+INC).removeAttr('required');
		$('#slctTtable-'+BNKID+'-'+INC).removeAttr('required');
	}
} 

function $_unCheck(a){
	return (a===undefined)?'':a;		
}

/*function $_emiBankRen(REP,DIS0,BNKID,ROWNO,DISPROP,REPROP,tblRen){
	if($.isEmptyObject(REP)){
		if($.isEmptyObject(DIS0)){
			tblRen += '<td><input type="text" class="form-control emiBankLoanAmtCls a-right numberCls" value="" id="lsdaTtable'+'-'+BNKID+'-'+ROWNO+'"></td>';
		}else{
			tblRen += '<td><input type="text" class="form-control emiBankLoanAmtCls a-right numberCls" value="'+DISPROP+'" id="lsdaTtable'+'-'+BNKID+'-'+ROWNO+'"></td>';
		}
	}else{
		tblRen += '<td><input type="text" class="form-control emiBankLoanAmtCls a-right numberCls" value="'+REPROP+'" id="lsdaTtable'+'-'+BNKID+'-'+ROWNO+'"></td>';
	}
	return tblRen;
}*/

function $_modalCall(){
	//API_ALLLOGINDETAIL_GET 
	$('#btnModalChngPswd').click();
	$('#twoMnthsId').hide();
}
function $_logout(){
	requestData(API_LOGOUT_GET, "GET",{}).done(function (reply) {
		if(reply.reply="Logout Success"){
			window.location.href = API_LOGIN_PAGE; 
		}
	});
}
function $_modalChngPasswrd(){
	var modal = '<button type="button" data-toggle="modal" data-target="#modalChngPasswrd"' + 
	'style="display:none" id="btnModalChngPswd" data-backdrop="static" data-keyboard="false"></button>'+
	  '<div class="modal fade" id="modalChngPasswrd" role="dialog">'+
	    '<div class="modal-dialog modal-lg">'+
	      '<form role="form" id="formChngPswdId">'+
	      ' <div class="modal-content col-md-6 col-md-offset-3">'+
	        '<div class="modal-header">'+
	          '<button type="button" class="close toClose" data-dismiss="modal">&times;</button>'+
	          '<h4 class="modal-title" style="text-align:center">Change Password</h4>'+
	          '<span id="twoMnthsId" style="color:red; text-align:center">Please change your password, you didnt change your passowrd from last two months</span>'+
	        '</div>'+
	        '<div class="modal-body">'+
	          '<div class="row">'+
	       	 '<div class="col-md-12">'+
	          '<div>'+
	          '<fieldset>'+
	                 '<div class="form-group" >'+
	                  '<input type="password" id="oldPswdId" class="form-control" required="required" pattern="[A-Za-z0-9_$@./#&+-]{4,20}"  placeholder="Old Password" autofocus>'+  
	                  '<span id="spanOldPswdId" style="color:red">Old password does not match</span>'+
	                  '</div>'+
	                 '<div class="form-group">'+
	                 '<input class="form-control" placeholder="New Password" name="newPassword" required="required"  pattern="[A-Za-z0-9_$@./#&+-]{4,20}" type="password" id="newPasswordId"  >'+
	                 '<span id="spanNewPswdId" style="color:red">New password should not match old password</span>'+
	                 '</div>'+
	                 '<div class="form-group">'+
	                	'<input class="form-control" placeholder="Re-enter New Password" required="required"  pattern="[A-Za-z0-9_$@./#&+-]{4,20}"   name="reNewPassword" type="password" id="reNewPasswordId">'+ 
	                	'<span id="spanRePswdId" style="color:red">New password does not match</span>'+
	                	'</div>'+
	          '</fieldset> </div></div></div></div>'+
	          '<div class="modal-footer">'+
	          '<button type="button" id="btnChngPswdDummy" value="" class="btn btn-primary pull-left">Change Password</button>'+
	          '<button type="submit" id="btnChngPswdSubmit" style="display:none;"></button>'+
	          '<button type="button" class="btn btn-default toClose" id="closeChngPwdId" data-dismiss="modal">Close</button>'+
	        '</div></div></form></div></div>';
	$('body').append(modal);
}

function $_commonModal(){
	var commonModal = '<button type="button" data-toggle="modal" data-target="#btnForgotPswd"' + 
	'style="display:none" id="btnForgotPswdId" data-backdrop="static" data-keyboard="false"></button>'+
	  '<div class="modal fade" id="btnForgotPswd" role="dialog">'+
	    '<div class="modal-dialog modal-lg">'+
	      '<form role="form" id="formForgotPswd">'+
	      ' <div class="modal-content col-md-6 col-md-offset-3">'+
	        '<div class="modal-header">'+
	          '<button type="button" class="close toClose" data-dismiss="modal">&times;</button>'+
	          '<h4 class="modal-title" style="text-align:center">Forgot Passowrd</h4>'+
	        '</div>'+
	        '<div class="modal-body">'+
	          '<div class="row">'+
	       	 '<div class="col-md-12">'+
	          '<div>'+
	          '<fieldset>'+
	                 '<div class="form-group" >'+
	                  '<input type="text" name="fpEmail" id="fpEmailId" class="form-control" required="required" placeholder="Enter your email id" autofocus>'+
	                  '<span id="fpEmailSpanId">Enter email does not exist.</span>'+
	                  '</div>'+
	          '</fieldset> </div></div></div></div>'+
	          '<div class="modal-footer">'+
	          '<button type="button" id="btnForgotPswdDummy" value="" class="btn btn-primary pull-left">Submit</button>'+
	          '<button type="submit" id="btnForgotPswdSubmit" style="display:none;"></button>'+
	          '<button type="button" class="btn btn-default toForgotClose" id="closeForgotPwdId" data-dismiss="modal">Close</button>'+
	        '</div></div></form></div></div>';
	$('body').append(commonModal);
}

function $_commonSearch(){

	API_DEL = '',srNoObsItrGb=1,flagBankBsDouble=1,srNoClarItrGb=1,netWrthId = 1,majorCustId = 1,majorTCustId = 1,emipdGlobal = 1, netGlobal=1, majcustGlobal=1, majsupGlobal=1,sNoCibil = 0, emiBankBankId=0, emiBankRowCount=0,emiPdDynamic = 1;
	// OBSERVATION AND CLARIFICATION
	srNoObsPdGb=1,srNoClarPdGb=1;
	srNoObsCibilGb=1,srNoClarCibilGb=1;
	srNoObsEmiBankGb = 1,srNoClarEmiBankGb = 1;
	srNoObsBsBankGb = 1, srNoClarBsBankGb = 1,submitBankBsId = '';
	if($("#searchBoxId").val() == "" || $("#searchBoxId").val() === undefined){
	
	}else{
		requestData(API_COMP_NAME+$("#ClientSessionId").val(), "GET", '').done(function (compCheck) {
			//// console.log('-'+compCheck.name+'-');
			_companyName = compCheck.name;
			$('.cmpnynameCls').text(_companyName);
			});
	}
		//	requestData(API_ID_SESSION_POST+$("#ClientSessionId").val(), "POST").done(function (reply) {
			/*if(reply.reply=="failure"){//cIdNp
				mW('cIdNp');
			}else*/ 
			if($("#ClientSessionId").val() == ""){mW('cID');
			}else{
				if($("#ClientSessionId").val() != undefined){
					requestData(API_DISBSTATUS_GET+$("#ClientSessionId").val(),"GET").done(function(reply){
						localStorage.setItem('disbStatus',reply.data[0].status);
					});
				}
				$('#tabsDiv').show();activaTab('emptyTab');
				$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
					var mainTabChild = $(e.target).attr('aria-controls');
					var mainTabParId = $(e.target).attr('id');
					requestData(API_BANKLIST+$("#ClientSessionId").val(), "GET", {}).done(function (bankList) {
						if(mainTabChild == "itrTab"){
							var srNoLclObsItr = 0,tblDataObs = '',srNoLclClarItr = 0,tblDataClar='';
							if(localStorage.getItem("itr") == 0) {
								$itr_js(API_IT_GET_2);
							}
							if(flagItrDouble == 0){
								requestData(API_OBSERVATION_GET+'/itr/'+$('#ClientSessionId').val()+'/0', "GET", '').done(function (obsItr){
									requestData(API_CLARIFICATION_GET+'/itr/'+$('#ClientSessionId').val()+'/0', "GET", '').done(function (clarItr){
										$(obsItr).each(function(k,v){++srNoLclObsItr;// console.log('v-',v)
										flagItrDouble = 1;
										srNoObsItrGb = srNoLclObsItr;	
											if(srNoLclObsItr == 1){
												$('#itrObsHidId-1').text(v.id);
												$('#observationItrId-1').val(v.observation);
											}else{// console.log('mul-',v.id,v.observation)
												tblDataObs += '<tr id="observationItrRowId-'+srNoLclObsItr+'">'+
												'<td id="itrObsHidId-'+srNoLclObsItr+'" style="display:none;">'+v.id+'</td>'+
												'<td><input type="text" class="form-control"  id="observationItrId-'+srNoLclObsItr+'" value="'+v.observation+'"></td>'+
												'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm itrObsDelCls" id="btnItrObsDelId-'+srNoLclObsItr+'">'+
												'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
											}
										});
										$(clarItr).each(function(k,v){++srNoLclClarItr;// console.log('v-',v)
										srNoClarItrGb = srNoLclClarItr;
										if(srNoLclClarItr == 1){
											$('#itrClarHidId-1').text(v.id);
											$('#clarificationItrId-1').val(v.clarification);
										}else{// console.log('mul-',v.id,v.clarification)
											tblDataClar += '<tr id="clarificationItrRowId-'+srNoLclClarItr+'">'+
											'<td id="itrClarHidId-'+srNoLclClarItr+'" style="display:none;">'+v.id+'</td>'+
											'<td><input type="text" class="form-control"  id="clarificationItrId-'+srNoLclClarItr+'" value="'+v.clarification+'"></td>'+
											'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm itrClarDelCls" id="btnItrClarDelId-'+srNoLclClarItr+'">'+
											'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
											srNoClarItrGb = srNoLclClarItr;
										}
									});
										$('#observationBodyId').append(tblDataObs);
										$('#clarificationBodyId').append(tblDataClar);
										requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
											$(reply.accessList).each(function(k,v){
											if( v.ITR == "READ ONLY" ||  v.ITR == "READONLY" || v.ITR == "READ" ){
												$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', true);
											}else if( v.ITR == "WRITE" ||  v.ITR == "VIEW ALL"){
												$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', false);
											}else{
												$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', false);
											}
											});
											 $_disableAllItrFields();
									});
									});});
							}
						}else if(mainTabChild == "emiSummaryTab"){
							var asd = '<ul class="nav nav-tabs" role="tablist">';
							asd += '<li role="presentation" class="disEmiPdCLs disAllTabCLs"><a href="#emiPd'+'-'+mainTabParId+'Tab" aria-controls="emiPd'+'-'+mainTabParId+'Tab" role="tab" data-toggle="tab" onclick="$_tabsChngeSave(this)">EMI as per PD</a></li>';
							asd += '<li role="presentation" class="disEmiCibilCLs disAllTabCLs"><a href="#emiCibil'+'-'+mainTabParId+'Tab" aria-controls="emiCibil'+'-'+mainTabParId+'Tab" role="tab" data-toggle="tab" onclick="$_tabsChngeSave(this)">EMI of Live & Filtered Loans as per CIBIL</a></li>';
							asd += '<li role="presentation" class="disEmiBankCLs disAllTabCLs"><a href="#emiBank'+'-'+mainTabParId+'Tab" aria-controls="emiBank'+'-'+mainTabParId+'Tab" role="tab" data-toggle="tab">EMI & Repayment Track as per Banking</a></li>';
							asd += '<li role="presentation" class="disEmiFinOblCLs disAllTabCLs"><a href="#emiFinal'+'-'+mainTabParId+'Tab" aria-controls="emiFinal'+'-'+mainTabParId+'Tab" role="tab" data-toggle="tab" onclick="$_tabsChngeSave(this)">Final Obligation</a></li>';
							asd += '</ul><div class="tab-content">';
							//
							asd += '<div role="tabpanel" class="tab-pane" id="emiPd'+'-'+mainTabParId+'Tab">'+
								'<div class="box box-body box-primary content" id="emiPd'+'-'+mainTabParId+'Tbl" style="overflow: scroll;"></div></div>';
			 				//
							asd += '<div role="tabpanel" class="tab-pane" id="emiCibil'+'-'+mainTabParId+'Tab">'+
							'<div class="box box-body box-primary content" id="emiCibil'+'-'+mainTabParId+'Tbl" style="overflow: scroll;">'+loadingHtml+'</div></div>';
							//
							asd += '<div role="tabpanel" class="tab-pane" id="emiBank'+'-'+mainTabParId+'Tab">'+
							'<div id="emiBank'+'-'+mainTabParId+'Tbl"></div></div>';
							//
							asd += '<div role="tabpanel" class="tab-pane" id="emiFinal'+'-'+mainTabParId+'Tab">'+
							'<div class="box box-body box-primary content" id="emiFinal'+'-'+mainTabParId+'Tbl" style="overflow: scroll;">'+loadingHtml+'</div></div>';
							//
							asd += '</div>';
							$('#'+mainTabChild).empty().append(asd);$resize()
						}else if(mainTabChild == "qualitativeTab"){
							
								$qualitative_js(mainTabChild);
							
						}else if(mainTabChild == "snapshotTab"){
						//	$('#snapshotTab').empty();
						//	$('#snapshotTable').clone().show().appendTo('snapshotTab');
						//	$('#snapshotTable').addClass('m-loadingEngage');
								$snapshotCode(API_SS_GET);
							
						}else if(mainTabChild == "bankSummaryTab" || mainTabChild == "stressTestTab"){
							var asd = '<ul class="nav nav-tabs" role="tablist">';
							asd += '<li role="presentation" class="disAllTabCLs"><a href="#consolidated'+'-'+mainTabParId+'Tab" aria-controls="consolidated'+'-'+mainTabParId+'Tab" role="tab" data-toggle="tab">Consolidated</a></li>';
							$(bankList).each(function(k, v){
								asd += '<li role="presentation" class="disAllTabCLs disBnkCLs-'+v.bankId+'"><a href="#'+v.Name+'-'+mainTabParId+'Tab" id="'+v.bankId+'" aria-controls="'
									+v.Name+'-'+mainTabParId+'Tab" role="tab" data-toggle="tab">'+v.bankName+'</a></li>';
							});
							asd += '</ul><div class="tab-content">';
							asd += '<div role="tabpanel" class="tab-pane" id="consolidated'+'-'+mainTabParId+'Tab">'+
								'<div class="box box-body box-primary content" id="consolidated'+'-'+mainTabParId+'Tbl" style="overflow: scroll;">'+loadingHtml+'</div></div>';
							$(bankList).each(function(k, v){
								asd += '<div role="tabpanel" class="tab-pane" id="'+v.Name+'-'+mainTabParId+'Tab">'+
								'<div class="box box-body box-primary content" id="'+v.Name+'-'+mainTabParId+'Tbl" style="overflow: scroll;">'+loadingHtml+'</div></div>';
							});
							asd += '</div>';
							$('#'+mainTabChild).empty().append(asd);$resize()
						}
						
						$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {var _dropDownRemove,_ibtDisp;
							var tblParent = $(e.target).attr('aria-controls');
							var tblAppend = $('#'+tblParent).children('div').attr('id');
							// console.log('tblAppend-',tblAppend);
							if(tblAppend != undefined){
								var checkTab = tblAppend.split("-")[1];
								var checkSubTab = tblParent.split("-")[0];
							}
		/* BANK SUMMARY */	if(checkTab == "bankSummaryTbl"){srNoObsBsBankGb = 1,srNoClarBsBankGb = 1;
								$bankSum_js(e,tblParent,tblAppend,checkTab,checkSubTab,API_BS_CONSOLIDATE,API_BS_CONSOLIDATE_AN,API_BS_BANKDETAILS,API_BS_BANKDETAILS_AN);
								// console.log('checkkr-',srNoObsBsBankGb,srNoClarBsBankGb);
								}else if(checkTab == "emiSummaryTbl"){
								var currentTab = $(e.target).attr('aria-controls').split("-")[0];
								if(currentTab == "emiPd"){
									emiPdDynamic = 1;
									  $('#'+tblAppend).empty();
									  $('#emiPdTableToAppend').clone().show().appendTo('#'+tblAppend);
									//$('#'+tblAppend).append($('#emiPdTableToAppend').show());
									  if(localStorage.getItem("emiasperpd") == 0 || localStorage.getItem("emiasperpd") == 1){
											requestData(API_ES_EMIPD_GET+$('#ClientSessionId').val(), "GET", '').done(function (a) {
												requestData(API_OBSERVATION_GET+'/pd/'+$('#ClientSessionId').val()+'/0', "GET", '').done(function (obsPd) {
												requestData(API_CLARIFICATION_GET+'/pd/'+$('#ClientSessionId').val()+'/0', "GET", '').done(function (clarPd) {
													localStorage.setItem("emiasperpd",1);
													var emiPdDynamic1 = 0;
													$(a).each(function(k,v){++emiPdDynamic1;
													emiPdDynamic = emiPdDynamic1;
													
													if(emiPdDynamic1 == 1)
													{	
														$('#emi-1').prop('readonly', false);
														$('#emiIdHid-1').text(v.emiid);
														$('#nol-1').val(v.nameoflender);
														$('#slist-1').val(v.typeofloan);
														$('#lsda-1').val($commaPut(v.loansanctionamount));
														if(v.loansanctiondate == 'nodata'){
															$('#lsd-1').val('');
														}else{
															$('#lsd-1').val(v.loansanctiondate);
														}
														$('#slct-1').val(v.emitobeconsider);
														$('#emi-1').val($commaPut(v.emi));
														$('#ai-1').val(parseFloat(v.intrestrate).toFixed(2));
														$('#tenure-1').val($commaPut(v.tenure));
														$('#emipdCmnt-1').val(v.coldetails);
														$('#remarkEmiPd-1').val(v.remark);
													}
												else{
												//	// console.log('inElse-',v.emiid);
													var nol = v.nameoflender;
													var tableEmiPd1 = '<tr id="emiPdRowId-'+emiPdDynamic1+'" class="emiPdRowCls-'+emiPdDynamic1+'">'+  
													'<td style="display:none" id="emiIdHid-'+emiPdDynamic1+'">'+v.emiid+'</td>'+ 
													'<td><input type="text" value="'+nol+'" class="form-control"   id="nol-'+emiPdDynamic1+'"></td>'+
													'<td class="col-sm-1">'+ 
													'<select style="width:90px !important"  id="slist-'+emiPdDynamic1+'" class="form-control emiPdDropCls" >'+
												  	'<option></option><option>PL</option><option>BL</option><option>CC/OD</option>'+
												  	'<option>TL</option><option>D/L OD</option><option>LAP</option><option>HL</option><option>VL/AL</option>'+
												  	'<option>GL</option><option>OTH</option></select></td>'+
												  	'<td><input type="text" class="form-control addLsdaCls getEmiCalc a-right numberCls" id="lsda-'+emiPdDynamic1+'" value='+$commaPut(v.loansanctionamount)+'></td>'+
												  	'<td><input type="text" class="form-control"   placeholder="dd-mm-yy" id="lsd-'+emiPdDynamic1+'"></td>'+
												  	'<td><select id="slct-'+emiPdDynamic1+'" class="form-control addSlctCls">'+
												  	'<option>YES</option><option>NO</option></select></td>'+
												  	'<td><input type="text" class="form-control addEmiCls a-right numberCls" id="emi-'+emiPdDynamic1+'" value='+$commaPut(v.emi)+'></td>'+
												  	'<td class="input-group"><input type="text" class="form-control addAiCls getEmiCalc a-right" id="ai-'+emiPdDynamic1+'" value='+parseFloat(v.intrestrate).toFixed(2)+'>'+
												  	'<span class="input-group-addon">%</span></td>'+
												  	'<td><input type="text" class="form-control addTenureCls getEmiCalc a-right numberCls" id="tenure-'+emiPdDynamic1+'" value='+$commaPut(v.tenure)+'></td>'+
												  	'<td><textarea rows="1" class="form-control" id="emipdCmnt-'+emiPdDynamic1+'"></textarea></td>'+
													'<td><textarea rows="1" class="form-control" id="remarkEmiPd-'+emiPdDynamic1+'"></textarea></td>'+
												  	'<td><button type="button" class="btn btn-danger btn-sm emiPdDelCls" id="btnDelemiPd-'+emiPdDynamic1+'">'+
													'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
												}//emiPdDelCls
												$('#bodyEmiPdTable').append(tableEmiPd1);
													if(v.loansanctiondate == 'nodata'){
														$('#lsd-'+emiPdDynamic1).val('');
													}else{
														$('#lsd-'+emiPdDynamic1).val(v.loansanctiondate);
													}
													$('#loanSectionEmiPd').text($commaPut(v.totalloanamt));
													$('#emiConsideredEmiPd').text($commaPut(v.totalemitobeconsidered));
													$('#emiEmiPd').text($commaPut(v.totalemi));
													$('#annualIntRate').text($commaPut(parseFloat(v.totalintrest).toFixed(2)));
													$('#tenureEmiPd').text($commaPut(v.totaltenure));
														
													var i=1,j=0;
													while(i<=emiPdDynamic1){
														$(a).each(function(k,v){++j;
															
															if(j==1){	
																$('#emi-1').prop('readonly', false);
																$("#slist-1").val(v.typeofloan);
																$("#slct-1").val(v.emitobeconsider);
															}else{
																$("#emipdCmnt-"+i).val(v.coldetails);
																$("#remarkEmiPd-"+i).val(v.remark);
																$("#slist-"+i).val(v.typeofloan);
																$("#slct-"+i).val(v.emitobeconsider);
															}
															var _slistId = v.typeofloan;
															$_dropEmiPd(_slistId,'emipdCmnt',i);
															i++;
															$_emiPDNM(j);		
															/*if($('#slct-'+j).val() == "YES"){
																$('#nol-'+j).attr('required', 'required');
																$('#slist-'+j).attr('required', 'required');
																$('#lsd-'+j).attr('required', 'required');
																$('#slct-'+j).attr('required', 'required');
																$('#emi-'+j).attr('required', 'required');
															}else{
																$('#nol-'+j).removeAttr('required');
																$('#slist-'+j).removeAttr('required');
																$('#lsd-'+j).removeAttr('required');
																$('#slct-'+j).removeAttr('required');
																$('#emi-'+j).removeAttr('required');
															}*/
														});
													 }
												});
													
													var srNoLclObsPd = 0,tblDataObs = '',srNoLclClarPd = 0,tblDataClar='';
													$(obsPd).each(function(k,v){++srNoLclObsPd;// console.log('v-',v)
														if(srNoLclObsPd == 1){
															$('#pdObsHidId-1').text(v.id);
															$('#observationpdId-1').val(v.observation);
														}else{// console.log('mul-',v.id,v.observation)
															tblDataObs += '<tr id="observationPdRowId-'+srNoLclObsPd+'">'+
															'<td id="pdObsHidId-'+srNoLclObsPd+'" style="display:none;">'+v.id+'</td>'+
															'<td><input type="text" class="form-control"  id="observationpdId-'+srNoLclObsPd+'" value="'+v.observation+'"></td>'+
															'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm pdObsDelCls" id="btnPdObsDelId-'+srNoLclObsPd+'">'+
															'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
															srNoObsPdGb = srNoLclObsPd;
														}
													});
													
													$(clarPd).each(function(k,v){++srNoLclClarPd;// console.log('v-',v)
													if(srNoLclClarPd == 1){
														$('#pdClarHidId-1').text(v.id);
														$('#clarificationPdId-1').val(v.clarification);
													}else{// console.log('mul-',v.id,v.clarification)
														tblDataClar += '<tr id="clarificationPdRowId-'+srNoLclClarPd+'">'+
														'<td id="pdClarHidId-'+srNoLclClarPd+'" style="display:none;">'+v.id+'</td>'+
														'<td><input type="text" class="form-control"  id="clarificationPdId-'+srNoLclClarPd+'" value="'+v.clarification+'"></td>'+
														'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm pdClarDelCls" id="btnPdClarDelId-'+srNoLclClarPd+'">'+
														'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
														srNoClarPdGb = srNoLclClarPd;
													}
												});
													$('#observationPdBodyId').append(tblDataObs);
													$('#clarificationPdBodyId').append(tblDataClar);
													
													
													requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
														$(reply.accessList).each(function(k,v){
														if(v.EMIAsPerPD == "READ ONLY" || v.EMIAsPerPD == "READONLY" || v.EMIAsPerPD == "READ"){
															$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', true);
														}else if(v.EMIAsPerPD == "WRITE" || v.EMIAsPerPD == "VIEW ALL"){
															$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', false);
														}else{
															$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', false);
														}
														});
														$_disEmiPdFields();
													});
													 
												});});}); 
									  }else{
										  $_disEmiPdFields();
									  }
									}else if(currentTab == "emiCibil"){
										requestData(API_ES_EMICIBIL_GET+$("#ClientSessionId").val(), "GET", {}).done(function (tblData) {
										requestData(API_ES_EMICIBIL_GET1+$("#ClientSessionId").val(), "GET", {}).done(function (tblDataGet) {
										requestData(API_OBSERVATION_GET+'/cibil/'+$('#ClientSessionId').val()+'/0', "GET", '').done(function (obsPd) {
										requestData(API_CLARIFICATION_GET+'/cibil/'+$('#ClientSessionId').val()+'/0', "GET", '').done(function (clarPd) {
												
											
												var tblRenData = '<form id="emiCibilFormId"><table class="table table-bordered table-hover">'+
													'<thead class="leftbgcolor"><tr>'+
													'<td colspan="3" class="a-comCls">Obligations Of</td>'+
													'<td colspan="14" class="a-comCls" id="bankCompanyNameId"><span class="cmpnynameCls"></td></tr></thead>'+
													'<tr class="leftbgcolor"><td>No.</td><td>Name of CIBIL Holder</td><td>Type of Loan</td>'+
													'<td>Loan Sanction / Disbursal Amt. (Rs.)</td><td>Loan Sanction / Disbursal Date</td>'+
													'<td>EMI to be Considered</td>'+
													'<td>EMI</td><td>Annual Interest Rate</td><td>Tenure</td><td style="width:200px; text-align:center; padding-top:20px;">Collateral Details</td><td style="width:200px; text-align:center; padding-top:20px;">Remarks</td></tr><tbody>';
												var sNoEmiCibil=0,emiCibilTotalLoanAmount=0;
												$(tblData).each(function(ki,va){++sNoEmiCibil;
													tblRenData += '<tr><td style="display:none" id="emiCibilIdHid-'+sNoEmiCibil+'"></td><td>'+sNoEmiCibil+'</td>'+
													'<td id="noCibil-'+sNoEmiCibil+'">'+va.nameofcibilholder+'</td><td id="tolCibil-'+sNoEmiCibil+'">'+va.typeofLoan+'</td>'+
													'<td id="lsdaCibil-'+sNoEmiCibil+'" class="getCibilCalc a-right numberCls">'+$commaPut(va.loansactionAmount)+'</td><td id="lsdCibil-'+sNoEmiCibil+'">'+va.dateString+'</td>'+
													'<td style="width:95px;"><select id="slctCibil-'+sNoEmiCibil+'" class="form-control slctCibilCls"><option>YES</option><option>NO</option></select>'+
													'<td id="emiCibilId-'+sNoEmiCibil+'" class="addEmiCibilCls a-right">'+$commaPut(va.emi)+'</td>'+
													'<td class="input-group" style="width:130px;"><input type="text" class="form-control addAiCibilCls getCibilCalc a-right" id="aiCibil-'+sNoEmiCibil+'"/>'+
													'<span class="input-group-addon">%</span></td>'+
													'<td  style="width:95px;"><input type="text" class="form-control addTenureCibilCls getCibilCalc a-right" pattern="[0-9]+" id="tenureCibil-'+sNoEmiCibil+'"></td>'+
													'<td><textarea rows="1" class="form-control" id="cmntCibil-'+sNoEmiCibil+'"></textarea></td>'+
													'<td><textarea rows="1" class="form-control" id="remarkCibil-'+sNoEmiCibil+'"></textarea></td></tr>';
													//$("#slctCibil-"+sNoEmiCibil).val(va.emitobeconsider);
													emiCibilTotalLoanAmount += parseInt(va.loansactionAmount); 
												});
												
												sNoCibil = sNoEmiCibil;
												tblRenData += '</tbody><tfoot class="m-lightBlue numRightAlignCls"><tr><td>Total</td>'+
												'<td colspan="2"></td>'+
												'<td id="loanSectionEmiCibil">'+$commaPut(emiCibilTotalLoanAmount)+'</td>'+
												'<td></td>'+
												'<td id="emiConsideredEmiCibil"></td>'+
												'<td id="emiEmiCibil"></td>'+
												'<td id="annualIntRateCibil"><span>%</span></td>'+
												'<td id="tenureEmiCibil"></td><td></td><td></td>'+
												'</tr></tfoot></table>';
												 
												tblRenData += '<div class="container-fluid">'+
									  			'<div class="row"><div class="col-md-6">'+
									    		'<table class="table table-bordered">'+
												'<tbody id="observationCibilBodyId">'+
												'<tr class="a-itrText"><td colspan="2">Observations</td></tr>'+
												'<tr id="observationCibilRowId-1">'+
												'<td id="cibilObsHidId-1" style="display:none;"></td>'+
												'<td><input type="text" class="form-control"  id="observationCibilId-1"></td>'+
												'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm cibilObsDelCls" id="btnCibilObsDelId-1">'+
												'<span class="glyphicon glyphicon-trash"></span>'+
												'</button></td></tr></tbody><tfoot><tr><td></td>'+
												'<td><input type="button" class="btn btn-warning pull-right addObsCls" id="btnCibilObsAddRow" value="+">'+
												'</td></tr></tfoot></table></div>'+
									    		'<div class="col-md-6">'+
									   			'<table class="table table-bordered">'+	
												'<tbody id="clarificationCibilBodyId">'+		
												'<tr class="a-itrText"><td colspan="2">Clarification/Justification</td></tr>'+
												'<tr id="clarificationCibilRowId-1">'+				
												'<td id="cibilClarHidId-1" style="display:none;"></td>'+
												'<td><input type="text" class="form-control"  id="clarificationCibilId-1"></td>'+
												'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm cibilClarDelCls" id="btnCibilClarDelId-1">'+
												'<span class="glyphicon glyphicon-trash"></span>'+
												'</button></td></tr></tbody><tfoot><tr><td></td>'+
												'<td><input type="button" class="btn btn-warning pull-right addObsCls" id="btnCibilClarAddRow" value="+"></td></tr>'
												'</tfoot></table></div></div></div>';
												
												tblRenData += '<div align="center"><table><tr><td><input type="button" value="Submit" id="btnSubmitEmiCibilId" class="btn btn-success"></td></tr></table></div></div>'+
													'<input type="submit" value="" id="btnSubmitEmiCibil" style="display:none"></form>';
												$('#'+tblAppend).empty().append(tblRenData);

												var srNoLclObsCibil = 0,tblDataObs = '',srNoLclClarCibil = 0,tblDataClar='';
												$(obsPd).each(function(k,v){++srNoLclObsCibil;// console.log('v-',v)
													if(srNoLclObsCibil == 1){
														$('#cibilObsHidId-1').text(v.id);
														$('#observationCibilId-1').val(v.observation);
													}else{// console.log('mul-',v.id,v.observation)
														tblDataObs += '<tr id="observationCibilRowId-'+srNoLclObsCibil+'">'+
														'<td id="cibilObsHidId-'+srNoLclObsCibil+'" style="display:none;">'+v.id+'</td>'+
														'<td><input type="text" class="form-control"  id="observationCibilId-'+srNoLclObsCibil+'" value="'+v.observation+'"></td>'+
														'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm cibilObsDelCls" id="btnCibilObsDelId-'+srNoLclObsCibil+'">'+
														'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
														srNoObsCibilGb = srNoLclObsCibil;
													}
												});
												
												$(clarPd).each(function(k,v){++srNoLclClarCibil;// console.log('v-',v)
												if(srNoLclClarCibil == 1){
													$('#cibilClarHidId-1').text(v.id);
													$('#clarificationCibilId-1').val(v.clarification);
												}else{// console.log('mul-',v.id,v.clarification)
													tblDataClar += '<tr id="clarificationCibilRowId-'+srNoLclClarCibil+'">'+
													'<td id="cibilClarHidId-'+srNoLclClarCibil+'" style="display:none;">'+v.id+'</td>'+
													'<td><input type="text" class="form-control"  id="clarificationCibilId-'+srNoLclClarCibil+'" value="'+v.clarification+'"></td>'+
													'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm cibilClarDelCls" id="btnCibilClarDelId-'+srNoLclClarCibil+'">'+
													'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
													srNoClarCibilGb = srNoLclClarCibil;
												}
											});
												$('#observationCibilBodyId').append(tblDataObs);
												$('#clarificationCibilBodyId').append(tblDataClar);
												var cibilVar = '#'+tblAppend;
												// console.log('cibilVar-',cibilVar)
												requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
													$(reply.accessList).each(function(k,v){
													if(v.EMIAsPerCibil == "READ ONLY" || v.EMIAsPerCibil == "READONLY" || v.EMIAsPerCibil == "READ"){
														$('table input,table textarea, table button').prop('disabled', true);
														$('table select').prop('disabled', true);
													}else if(v.EMIAsPerCibil == "WRITE" || v.EMIAsPerCibil == "VIEW ALL"){
														$('table input,table textarea, table button').prop('disabled', false);
														$('table select').prop('disabled', false);
													}else{
														$('table input, table textarea, table button').prop('disabled', false);
														$('table select').prop('disabled', false);
													}
													});
													$_disEmiCibilFields();
												});
												for(i=1;i<=sNoCibil;i++){
													$_emiCibNM(i);
												}
												$('.cmpnynameCls').text(_companyName);
												
												var _tempEmiToCon = 1,sum = 0;
												$(tblData).each(function(k,v){
													if(_tempEmiToCon <= sNoEmiCibil){
														$('#slctCibil-'+_tempEmiToCon).val(v.emitobeconsidered);
															$_emiCibNM(_tempEmiToCon);
														
													}else{
														return false;
													}
													++_tempEmiToCon;
												});
											//	// console.log(sNoEmiCibil);
												
												var _temp_sNoEmiCibil = 1,sum = 0;
												$(tblDataGet).each(function(k,v){
												//	// console.log(v.emicibilid);
												//	// console.log('emi-',v.emicibilid);
													if(_temp_sNoEmiCibil <= sNoEmiCibil){
														$('#emiCibilId-'+_temp_sNoEmiCibil).text($commaPut(v.emi));
														$('#emiCibilIdHid-'+_temp_sNoEmiCibil).text(v.emicibilid);
														$('#slctCibil-'+_temp_sNoEmiCibil).val(v.emitobeconsider);
														$('#aiCibil-'+_temp_sNoEmiCibil).val(parseFloat(v.intrestrate).toFixed(2));
														$('#tenureCibil-'+_temp_sNoEmiCibil).val(v.tenure);
														$('#emiConsideredEmiCibil').text($commaPut(v.totalemitobeconsidered));
														$('#annualIntRateCibil').text(parseFloat(v.totalintrest).toFixed(2));
														$('#emiEmiCibil').text($commaPut(v.totalemi));
														$('#tenureEmiCibil').text($commaPut(v.totaltenure));
														$('#remarkCibil-'+_temp_sNoEmiCibil).val(v.remark);
														$('#cmntCibil-'+_temp_sNoEmiCibil).val(v.collateraldetail);
														
														
														if($('#aiCibil-'+_temp_sNoEmiCibil).val() == "undefined"){
															$('#aiCibil-'+_temp_sNoEmiCibil).val("");
														}else{
															$('#aiCibil-'+_temp_sNoEmiCibil).val(parseFloat(v.intrestrate).toFixed(2));
														}
														if($('#tenureCibil-'+_temp_sNoEmiCibil).val() == "undefined"){
															$('#tenureCibil-'+_temp_sNoEmiCibil).val("");
														}else{
															$('#tenureCibil-'+_temp_sNoEmiCibil).val(v.tenure);
														}
														$_emiCibNM(_temp_sNoEmiCibil);
															if($('#slctCibil-'+_temp_sNoEmiCibil).val() == "YES"){
																sum += parseFloat($comRem($('#emiCibilId-'+_temp_sNoEmiCibil).text()));
															}
															$('#emiConsideredEmiCibil').text($commaPut(sum));
													}else{
														return false;
													}												
													++_temp_sNoEmiCibil;
													
												});
											});
										});});});
								}else if(currentTab == "emiFinal"){
									requestData(API_ES_FINALOBG+$('#ClientSessionId').val(), "GET", {}).done(function (tblData) {
										var tblRenData = '<table class="table table-bordered table-hover numRightAlignCls2" id="finalOb">';
										
										tblRenData += '<thead><tr class="leftbgcolor"><td>Name of Lender</td><td>Type of Loan</td>'+
										'<td>Loan Sanction / Disbursal Amt. (Rs.)</td><td>Loan Sanction / Disbursal Date</td><td>EMI</td>'+
										'<td class="a-textareawidth">Collateral Details</td><td class="a-textareawidth">Remarks</td></tr></thead>';
										
										tblRenData += '<tfoot><tr class="leftbgcolor numRightAlignCls"><td>TOTAL</td><td></td>'+
										'<td id="finalLoanTotal"></td><td></td><td id="finalEmiTotal"></td><td></td><td></td></tr></tfoot></table>';
										
										var multiselect = '<div class="col-md-6">'+
								         '<select class="form-control select2" multiple="multiple" id="finalObFilter" data-placeholder="Filter" style="width: 100%;">';
										
										$(tblData.data2).each(function(k,v){
											 multiselect +='<option>'+v.LoanType+'</option>';
										});
								
								        multiselect += '</select></div>';
									 
										$('#'+tblAppend).empty().append(multiselect);
										$('.select2').select2();
										
										$('#'+tblAppend).append(tblRenData);																			
										$dataTable('finalOb',tblData.data1);
									});
								}else if(currentTab == "emiBank"){								
									var emiRepMainTabParId = "emiSummary";
									var emiBankCheckSubTab = "emiBankCheck";
									var asd = '<ul class="nav nav-tabs" role="tablist">';
									asd += '<li role="presentation"  class="disEmiConsCLs disAllTabCLs"><a href="#'+emiBankCheckSubTab+'consolidated'+'-'+emiRepMainTabParId+'Tab" aria-controls="'+emiBankCheckSubTab+'consolidated'+'-'+emiRepMainTabParId+'Tab" role="tab" data-toggle="tab">Consolidated</a></li>';
									$(bankList).each(function(k, v){
										asd += '<li role="presentation"  class="disEmiBanksCLs-'+v.bankId+' disAllTabCLs"><a href="#'+emiBankCheckSubTab+v.Name+'-'+emiRepMainTabParId+'Tab" id="'+v.bankId+'" aria-controls="'
										+emiBankCheckSubTab+v.Name+'-'+emiRepMainTabParId+'Tab" role="tab" data-toggle="tab">'+v.bankName+'</a></li>';
									});
									asd += '</ul><div class="tab-content">';
									asd += '<div role="tabpanel" class="tab-pane" id="'+emiBankCheckSubTab+'consolidated'+'-'+emiRepMainTabParId+'Tab">'+
										'<div class="box box-body box-primary content2" id="'+emiBankCheckSubTab+'consolidated'+'-'+emiRepMainTabParId+'Tbl" style="overflow: scroll;">'+loadingHtml+'</div></div>';
									$(bankList).each(function(k, v){
										asd += '<div role="tabpanel" class="tab-pane" id="'+emiBankCheckSubTab+v.Name+'-'+emiRepMainTabParId+'Tab">'+
										'<div class="box box-body box-primary content2" id="'+emiBankCheckSubTab+v.Name+'-'+emiRepMainTabParId+'Tbl" style="overflow: scroll;">'+loadingHtml+'</div></div>';
									});
									asd += '</div>';
									$('#'+tblAppend).empty().append(asd);
									//
									$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
										var submitWithBankId = $(this).attr("id");
										var emiRepTblParent = $(e.target).attr('aria-controls');
										var emiRepTtblAppend = $('#'+tblParent).children('div').attr('id');
										var emiRepCheckTab = emiRepTtblAppend.split("-")[1];
										var emiRepCheckSubTab = emiRepTblParent.split("-")[0];
										if(emiRepCheckSubTab == "emiBankCheckconsolidated"){
											requestData(API_ES_CONSOLIDATE_GET+$('#ClientSessionId').val(), "GET", {}).done(function (tblData) {
												var tblRenData = '<table class="table table-bordered table-hover">'+
														'<thead class="leftbgcolor">'+
														'<thead><tr>'+
														'<td colspan="3" class="a-comCls">Obligations Of</td>'+
														'<td colspan="15" class="a-comCls" id="bankCompanyNameId"><span style="text-align:center;" class="cmpnynameCls"></td></tr></thead>'+
														'<tr class="leftbgcolor"><td>Total Loan Sanction/Disbursal Amt. (Rs.)</td><td></td><td>EMI to be Considered</td>'+
														'<td>Total EMI Served</td>';									
												$(tblData.data).each(function(k,v){tblRenData += '<td>'+v.date+'</td>'});
												tblRenData += '<td>No. of EMIs</td></tr><tbody class="numRightAlignCls">';
												
												tblRenData += '<tr><td class="a-right">'+$commaPut(tblData.TotalLoanSantioned)+'</td>';
												tblRenData += '<td></td>';
												tblRenData += '<td>'+$commaPut(tblData.TotalEMIConsidered)+'</td>';
												tblRenData += '<td>'+$commaPut(tblData.EMIToTal)+'</td>';
												$(tblData.data).each(function(key,val){tblRenData += '<td>'+$commaPut(val.EMI)+'</td>'});
												tblRenData += '<td>'+$commaPut(tblData.TotalNoOfEmi)+'</td></tr></tbody></table>';
												$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl').empty().append(tblRenData);
												$('.cmpnynameCls').text(_companyName);
											});
										}else if(emiRepCheckSubTab.slice(0,12) == "emiBankCheck"){
											requestData(API_ES_BANKDETAILS_TOTAL_GET+$('#ClientSessionId').val()+"/"+$(e.target).attr('id'), "GET", {}).done(function (tblDataTot) {
												
												if(tblDataTot.data == "noData"){
													var tblRenData = '<form id="emiBankFormId-'+submitWithBankId+'">'+
														'<div align="center" style="margin-top:200px"><h3>NO DATA</h3></div></form>';
													$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl').empty().append(tblRenData);
												}else{
													requestData(API_ES_BANKDETAILS_GET+$('#ClientSessionId').val()+"/"+$(e.target).attr('id'), "GET", {}).done(function (tblData) {
													requestData(API_OBSERVATION_GET+'/emibank/'+$('#ClientSessionId').val()+'/'+$(e.target).attr('id'), "GET", '').done(function (obsPd) {
													requestData(API_CLARIFICATION_GET+'/emibank/'+$('#ClientSessionId').val()+'/'+$(e.target).attr('id'), "GET", '').done(function (clarPd) {
															console.log(clarPd);
														//requestData(API_ES_BANKDETAILS_GET1+$('#ClientSessionId').val()+"/"+$(e.target).attr('id'), "GET", {}).done(function (tblDataGet) {
														//var tblDataGet = tblData.property;
														localStorage.setItem("bankId",submitWithBankId);
														var tblRenData = '<form id="emiBankFormId-'+submitWithBankId+'"><table class="table table-bordered table-hover">'+
														'<thead><tr>'+
														'<td colspan="3" class="a-comCls">Obligations Of</td>'+
														'<td colspan="25" class="a-comCls" id="bankCompanyNameId"><span class="cmpnynameCls"></td></tr>'+
														'<tr class="leftbgcolor"><td>Sr. No</td><td style="width:100px !important">Name of the Lender</td><td>Type of Loan</td>'+
														'<td>Loan Sanction/Disbursal Amt. (Rs.)</td><td>Loan Sanction/Disbursal Date</td>'+
														'<td>EMI to be Considered </td><td>Average EMI</td>';
														 $(tblData[0].data).each(function(k,v){tblRenData += '<td>'+v.monthYear+'</td>'});
														tblRenData += '<td>No. of EMIs</td><td class="a-textareawidth">Collateral Details</td><td class="a-textareawidth">Remarks</td></tr></thead><tbody>';
														tblRenData += '<tr><td class="a-emiTot">Total</td><td class="a-emiTot"></td><td class="a-emiTot"></td><td class="a-emiTot a-right" id="emiBankListTotalLoanAmt'+'-'+submitWithBankId+'"></td><td class="a-emiTot"></td>';
														tblRenData += '<td class="a-emiTot a-right" id="emiBankListEmiConTot'+'-'+submitWithBankId+'"></td>';
														tblRenData += '<td class="a-emiTot a-right">'+$commaPut(tblDataTot.EMIToTal)+'</td>';
														$(tblDataTot.data).each(function(kk,vv){tblRenData += '<td class="a-emiTot a-right">'+$commaPut(vv.totalMonthEmi)+'</td>'});
														tblRenData += '<td class="a-emiTot a-right">'+$commaPut(tblDataTot.TotalNoOfEmi)+'</td></tr>';
														var sNoRepaymentTrackPerBank = 0,emiToBeConTotal = 0;
														$(tblData).each(function(ke,va){++sNoRepaymentTrackPerBank;
													//	alert('Date-',va.LoanSanctiondate,'Amount-',va.LoanSanctionamt);
															 tblRenData += '<tr><td>'+sNoRepaymentTrackPerBank+'</td>'+
															 	'<td style="display:none" id="emiBankHidId'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"></td>'+
																 '<td id="emiBankNol'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'" style="width:100px !important">'+va.financierName+'</td>'+
																 '<td><select style="width:86px !important" id="slistTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"  class="form-control emiBankDropCls emiBankCls">'+
																  	'<option></option><option>PL</option><option>BL</option><option>CC/OD</option>'+
																  	'<option>TL</option><option>D/L OD</option><option>LAP</option><option>HL</option><option>VL/AL</option>'+
																  	'<option>GL</option><option>OTH</option></select></td>'+
															 	//	$_emiBankRen(va.repayment,va.disbursaldata[0],submitWithBankId,sNoRepaymentTrackPerBank,va.disbursaldata[0].LoanSanctionamt,va.repayment[0].loanSanctionamt,tblRenData)
																	'<td><input type="text" class="form-control emiBankLoanAmtCls a-right numberCls emiBankCls" id="lsdaTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"></td>'+
																	'<td><input type="text" class="form-control emiBankCls" id="lsdTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"  placeholder="dd-mm-yy"></td>'+
																	'<td class="col-sm-1"><select style="width:86px !important" id="slctTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'" class="form-control emiBankEmiConCls emiBankCls">'+
																	'<option>YES</option><option>NO</option></select></td>'+
																	'<td class="a-right" id="avgEmi'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'">'+$commaPut(va.EMI)+'</td>';
																		
															 //		$_emiBnkNM(submitWithBankId,sNoRepaymentTrackPerBank);
															 $(va.data).each(function(k,v){tblRenData += '<td class="a-right">'+$commaPut(v.Day)+'</td>'});
															 tblRenData += '<td class="a-emiTot a-right">'+$commaPut(va.noOFEmi)+'</td>'+
															 '<td><textarea rows="1" style="width:200px;" class="form-control emiBankCls" id="emiBankCmnt'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'" readonly="readonly"></textarea></td>'+
															 '<td><textarea rows="1"  style="width:200px;" class="form-control emiBankCls" id="emiBankRemark'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"></textarea></td></tr>';
															 emiToBeConTotal = Math.ceil(va.EMI)+parseInt(emiToBeConTotal);
															 //$_emiBnkNM(submitWithBankId,sNoRepaymentTrackPerBank); 
														});
														tblRenData += '</tbody></table>';
														tblRenData += '<div class="container-fluid">'+
											  			'<div class="row"><div class="col-md-6">'+
											    		'<table class="table table-bordered">'+
														'<tbody id="observationBankBodyId-'+submitWithBankId+'">'+
														'<tr class="a-itrText"><td colspan="2">Observations</td></tr>'+
														'<tr id="observationBankRowId-'+submitWithBankId+'-1">'+
														'<td id="bankObsHidId-'+submitWithBankId+'-1" style="display:none;"></td>'+
														'<td><input type="text" class="form-control emiBankCls"  id="observationBankId-'+submitWithBankId+'-1"></td>'+
														'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankObsDelCls" id="btnBankObsDelId-'+submitWithBankId+'-1">'+
														'<span class="glyphicon glyphicon-trash"></span>'+
														'</button></td></tr></tbody><tfoot><tr><td></td>'+
														'<td><input type="button" class="btn btn-warning pull-right addObsCls" id="btnBankObsAddRow-'+submitWithBankId+'" value="+">'+
														'</td></tr></tfoot></table></div>'+
											    		'<div class="col-md-6">'+
											   			'<table class="table table-bordered">'+	
														'<tbody id="clarificationBankBodyId-'+submitWithBankId+'">'+		
														'<tr class="a-itrText"><td colspan="2">Clarification/Justification</td></tr>'+
														'<tr id="clarificationBankRowId-'+submitWithBankId+'-1">'+				
														'<td id="bankClarHidId-'+submitWithBankId+'-1" style="display:none;"></td>'+
														'<td><input type="text" class="form-control  emiBankCls"  id="clarificationBankId-'+submitWithBankId+'-1"></td>'+
														'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankClarDelCls" id="btnBankClarDelId-'+submitWithBankId+'-1">'+
														'<span class="glyphicon glyphicon-trash"></span>'+
														'</button></td></tr></tbody><tfoot><tr><td></td>'+
														'<td><input type="button" class="btn btn-warning pull-right addObsCls" id="btnBankClarAddRow-'+submitWithBankId+'" value="+"></td></tr>'+
														'</tfoot></table></div></div></div>';
														
														emiBankRowCount=sNoRepaymentTrackPerBank;
														emiBankBankId=submitWithBankId;
														
														tblRenData += '<div align="center"><input type="button" value="Submit" class="btn btn-success emiBankSubmitCls" id="btnSubmitEmiBankId-'+submitWithBankId+'"></div>'+
														'<input type="submit" style="display:none" id="btnSubmitEmiBank-'+submitWithBankId+'"></form>';
														$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl').empty().append(tblRenData);
														
														
														var srNoLclObsEmiBank = 0,tblDataObs = '',srNoLclClarEmiBank = 0,tblDataClar='';
														$(obsPd).each(function(k,v){++srNoLclObsEmiBank;
															if(srNoLclObsEmiBank == 1){
																$('#bankObsHidId-'+emiBankBankId+'-1').text(v.id);
																$('#observationBankId-'+emiBankBankId+'-1').val(v.observation);
															}else{
																tblDataObs += '<tr id="observationBankRowId-'+emiBankBankId+'-'+srNoLclObsEmiBank+'">'+
																'<td id="bankObsHidId-'+emiBankBankId+'-'+srNoLclObsEmiBank+'" style="display:none;">'+v.id+'</td>'+
																'<td><input type="text" class="form-control"  id="observationBankId-'+emiBankBankId+'-'+srNoLclObsEmiBank+'" value="'+v.observation+'"></td>'+
																'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankObsDelCls" id="btnBankObsDelId-'+emiBankBankId+'-'+srNoLclObsEmiBank+'">'+
																'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
																// srNoObsEmiBankGb = 1,srNoClarEmiBankGb = 1
																srNoObsEmiBankGb = srNoLclObsEmiBank;
															}
														});
														
														$(clarPd).each(function(k,v){++srNoLclClarEmiBank;// console.log('v-',v)
														if(srNoLclClarEmiBank == 1){
															$('#bankClarHidId-'+emiBankBankId+'-1').text(v.id);
															$('#clarificationBankId-'+emiBankBankId+'-1').val(v.clarification);
														}else{
															tblDataClar += '<tr id="clarificationBankRowId-'+emiBankBankId+'-'+srNoLclClarEmiBank+'">'+
															'<td id="bankClarHidId-'+emiBankBankId+'-'+srNoLclClarEmiBank+'" style="display:none;">'+v.id+'</td>'+
															'<td><input type="text" class="form-control"  id="clarificationBankId-'+emiBankBankId+'-'+srNoLclClarEmiBank+'" value="'+v.clarification+'"></td>'+
															'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankClarDelCls" id="btnBankClarDelId-'+emiBankBankId+'-'+srNoLclClarEmiBank+'">'+
															'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
															srNoClarEmiBankGb = srNoLclClarEmiBank;
														}
													});
														$('#observationBankBodyId-'+emiBankBankId).append(tblDataObs);
														$('#clarificationBankBodyId-'+emiBankBankId).append(tblDataClar);
														
														
														
														var bankVar = '#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl';
														// console.log(bankVar,'-bankVar');
														requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
															$(reply.accessList).each(function(k,v){
															if(v.EMIAsPerBanking == "READ ONLY" || v.EMIAsPerBanking == "READONLY" || v.EMIAsPerBanking == "READ"){
																$('table input,.emiBankSubmitCls,table textarea, table button, table select').prop('disabled',true);
																$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl select').prop('disabled',true);
															}else if(v.EMIAsPerBanking == "WRITE" || v.EMIAsPerBanking == "VIEW ALL"){
																$('table input,.emiBankSubmitCls,table textarea, table button, table select').prop('disabled',false);
																$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl textarea').prop('disabled',false);
															}else{
																$('table input,table textarea, .emiBankSubmitCls,table button, table select').prop('disabled',false);
																$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl textarea').prop('disabled',false);
															}
															});	
															$_disEmiBankFields(emiRepCheckSubTab,emiRepMainTabParId);
														});
														
														/*for(i=1;i<=sNoRepaymentTrackPerBank;i++){
															$_emiBnkNM(submitWithBankId,i);
														}*/
													//	$_emiBnkNM(submitWithBankId,sNoRepaymentTrackPerBank);
														$('#emiBankListEmiConTot-'+submitWithBankId).text($commaPut(emiToBeConTotal));
														$('.cmpnynameCls').text(_companyName);
														var _temp_sNoEmiRepBank = 0,_emiBnkEmiConTot=0;
														$(tblData).each(function(ke,va){ ++_temp_sNoEmiRepBank;
														// console.log("va-",va)
														//	$('#lsdaTtable-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank).val(va.loansanctionamount);
															if($('#lsdaTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val() == "undefined"){
																$('#lsdaTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("");
																}else if($('#lsdaTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val() == "nodata"){
																	$('#lsdaTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("");
																}else{
																	$('#lsdaTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val($commaPut(va.loansanctionamount));
																}
													//		$('#lsdTtable-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank).val(va.loansanctiondate);
															if($('#lsdTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val() == "undefined"){
																$('#lsdTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("");
																}else{
																	$('#lsdTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(va.loansanctiondate);
																}
															
															if($.isEmptyObject(va.repayment)){
																//if(va.repayment == {}){
																//lsdaTtable lsdTtable
																if($.isEmptyObject(va.disbursaldata[0])){
																	//if(va.disbursaldata[0] == {}){
																//	tblRenData += '<td><input type="text" class="form-control emiBankLoanAmtCls a-right numberCls" value="" id="lsdaTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"></td>'+
																//	'<td><input type="text" class="form-control" value="" id="lsdTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"  placeholder="dd-mm-yy"></td>';
																	$('#lsdaTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("");
																	$('#lsdTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("");
																}else{
																	//tblRenData += '<td><input type="text" class="form-control emiBankLoanAmtCls a-right numberCls" value="'+($_unCheck(va.disbursaldata[0].LoanSanctionamt))+'" id="lsdaTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"></td>'+
																//	'<td><input type="text" class="form-control" value="'+((va.disbursaldata[0].LoanSanctiondate))+'" id="lsdTtable'+'-'+submitWithBankId+'-'+sNoRepaymentTrackPerBank+'"  placeholder="dd-mm-yy"></td>';
																	 $('#lsdaTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val($commaPut(va.disbursaldata[0].LoanSanctionamt));
																	 $('#lsdTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val((va.disbursaldata[0].LoanSanctiondate)); 
																}
																 $('#slistTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("");
																 $('#slctTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val("YES");
																 $('#emiBankCmnt-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val('');
																 $('#emiBankRemark-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val('');
															 }else{ 
																 var _slist = ((va.repayment[0].emitobeconsider === undefined || va.repayment[0] == [])?"YES":va.repayment[0].emitobeconsider);
																 var drpDwn = va.repayment[0].typeofloan;
																 
																 $('#emiBankHidId'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).text((va.repayment[0].repaymenttrackid));
																 $('#lsdaTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val($commaPut(va.repayment[0].loansanctionamount));
																 $('#lsdTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val((va.repayment[0].loansanctiondate)); 
																 $('#slistTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val((va.repayment[0].typeofloan));
																 $('#slctTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(_slist); 
																 $('#emiBankCmnt-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(va.repayment[0].coldetails);
																 $('#emiBankRemark-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(va.repayment[0].remark);
																 ($('#slctTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val() == 'YES')?Math.ceil(parseFloat($comRem($('#avgEmi'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).text()))):0;
															 }
																$_emiBnkNM(submitWithBankId,_temp_sNoEmiRepBank);
																$_dropEmiBank(drpDwn,'emiBankCmnt',submitWithBankId,_temp_sNoEmiRepBank);
																_emiBnkEmiConTot += ($('#slctTtable'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val() == 'YES')?Math.ceil(parseFloat($comRem($('#avgEmi'+'-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).text()))):0;
																$('#emiBankListEmiConTot-'+submitWithBankId).text($commaPut(_emiBnkEmiConTot));
																$('#emiBankListEmiConTot-'+submitWithBankId).text($commaPut(va.totalemitobeconsidered));
																$('#emiBankListTotalLoanAmt-'+submitWithBankId).text($commaPut(va.totalloanamt));
														});
														
													/*	var _temp_sNoEmiRepBank = 1;
														$(tblData.disbursaldata).each(function(k,v){
															if(_temp_sNoEmiRepBank <= sNoRepaymentTrackPerBank){
																
															//	// console.log('repayment id-',v.repaymenttrackid);
															//	// console.log('loansanctionamount-',v.loansanctionamount);
																$('#emiBankHidId-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).text(v.repaymenttrackid);
																$('#slistTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(v.typeofloan);
																$('#lsdaTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val($commaPut(v.loansanctionamount));
																$('#slctTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(v.emitobeconsider);
																
																(v.loansanctiondate == "nodata")?$('#lsdTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(''):$('#lsdTtable-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(v.loansanctiondate);;
																(v.coldetails == undefined)?$('#emiBankCmnt-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(''):$('#emiBankCmnt-'+submitWithBankId+'-'+_temp_sNoEmiRepBank).val(v.coldetails);
																$('#emiBankListEmiConTot-'+submitWithBankId).text($commaPut(v.totalemitobeconsidered));
																$('#emiBankListTotalLoanAmt-'+submitWithBankId).text($commaPut(v.totalloanamt));
															
																
															}else{
																return false;
															}	
															var slistBank = v.typeofloan;
															$_dropEmiBank(slistBank,'emiBankCmnt',submitWithBankId,_temp_sNoEmiRepBank);
														//	$_emiBnkNM(submitWithBankId,_temp_sNoEmiRepBank);
															++_temp_sNoEmiRepBank;
														});*/
													//});
														var sum=0;
														for(i=1;i<=_temp_sNoEmiRepBank;i++){
															if($('#slctTtable-'+submitWithBankId+'-'+i).val() == "YES"){
																sum += parseFloat($comRem($('#avgEmi'+'-'+submitWithBankId+'-'+i).text()));
															}
														}
														$('#emiBankListEmiConTot-'+submitWithBankId).text($commaPut(sum));
													});});});
												}
											});
									
											//// console.log('left');
										}
									});
								}$resize()
	/* STRESS TEST */		}else if(checkTab == "stressTestTbl"){
								$stressTest(e,tblParent,tblAppend,checkTab,checkSubTab,API_ST_CONSOLIDATE,API_ST_BANKDETAILS);
							}
						});
					});
				}); // end for MAIN-TAB click
			}
		//});
}
function itrPostCall(){
	var formData = {
			'monthvatitr'   : itrMnthsList(),
			'quartervatitr' : itrQrtrsList(),
			'biannualvatitr': itrBianualList()
	}
	return formData;
}
function itrMnthsList(){
	var formData = {};
	var arr = [];
	
	for(i=1;i<=12;i++){
		if (i == 1) {
			var monthConcat = $('#monthsToasPerVatId'+i).val() + '-' + $('#yearToasPerVatId'+i).val();
		}else {
			var monthConcat = $('#monthsToasPerVatId'+i).text() + '-' + $('#yearToasPerVatId'+i).text();
		}
		formData = {
				  "monthwisevatid": isNaN(parseInt($('#monthwisevatidHid'+i).text()))?0:parseInt($('#monthwisevatidHid'+i).text()),
				  "monthvat": monthConcat,
				  "sales": parseFloat($_NaNCheck('salesToasPerVatItrTextId-'+i,'val')),
				  "vatcst": parseFloat($_NaNCheck('vatCstStToasPerVatItrId-'+i,'val')),
				  "salestotal": parseFloat($_NaNCheck('salesTtlsForToasPerVatItr','text')),
				  "vatcsttotal": parseFloat($_NaNCheck('vatCstStTtlsForToasPerVatItr','text')),
				  "maintotal": parseFloat($_NaNCheck('vatCstStTtlsForToasPerVatItrFinal','text'))
		}
		arr.push(formData)
	}
	return arr;
}
function itrQrtrsList(){
	var formData = {};
	var arr = [];
	
	for(i=1;i<=4;i++){
		formData = {
				  "quartervatid": isNaN(parseInt($('#quartervatidHid'+i).text()))?0:parseInt($('#quartervatidHid'+i).text()),
				  "quartervat": $('#quartersItrCol'+i).text(),
				  "sales": parseFloat($_NaNCheck('quartersSalesItrId-'+i,'text')),
				  "vatcst": parseFloat($_NaNCheck('quarterVatCstStItrId-'+i,'text')),
				  "salestotal": parseFloat($_NaNCheck('salesTtlsForQuartersItrId','text')),
				  "vatcsttotal": parseFloat($_NaNCheck('VatCstStTtlsForQuartersItrId','text')),
				  "maintotal": parseFloat($_NaNCheck('VatCstStTtlsForQuartersItrIdFinal','text'))
		}
		arr.push(formData)
	}
	return arr;
}
function itrBianualList(){
	var formData = {};
	var arr = [];
	
	for(i=1;i<=2;i++){
		formData = {
				  "biannualvatid": isNaN(parseInt($('#biannualvatidHid'+i).text()))?0:parseInt($('#biannualvatidHid'+i).text()),
				  "biannualvat": $('#biannualItrId'+i).text(),
				  "sales": parseFloat($_NaNCheck('salesBiannualItrId-'+i,'text')),
				  "vatcst": parseFloat($_NaNCheck('biannualVatCstStItrId-'+i,'text')),
				  "salestotal": parseFloat($_NaNCheck('salesTtlsForBiannualItrId','text')),
				  "vatcsttotal": parseFloat($_NaNCheck('VatCstStTtlsForBiannualId','text')),
				  "maintotal": parseFloat($_NaNCheck('VatCstStTtlsForBiannualIdFinal','text'))
		}
		arr.push(formData)
	}
	return arr;
}
function $_toastr() {
	toastr.options = {
			  "closeButton": false,
			  "debug": false,
			  "newestOnTop": true,
			  "progressBar": false,
			  "positionClass": "toast-top-right",
			  "preventDuplicates": true,
			  "onclick": null,
			  "showDuration": "0",
			  "hideDuration": "0",
			  "timeOut": "0",
			  "extendedTimeOut": "0",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut",
			  "tapToDismiss" : false
			}
}

function $_tabsChngeSave(_this) {
	
	/*if(_this.hash == "#itr") {
		localStorage.setItem("itr",1);
	}else if(_this.hash == "#emiPd-emiSummaryTab"){
		localStorage.setItem("emiasperpd",1);
	}else if(_this.hash == "#emiCibil-emiSummaryTab") {
		localStorage.setItem("emiaspercibil",1);
	}else if(_this.hash == "#emiFinal-emiSummaryTab") {
		localStorage.setItem("finalobligation",1);
	}else if(_this.hash == "#qualitativeTab") {
		localStorage.setItem("qualitative",1);
	}else if(_this.hash == "#snapshotTab") {
		
	}*/
}
function $_tabsChngeSaveToast(tabname) {
	Command: toastr["warning"]("You have to submit data for "+tabname+" <br/> <a class='close-toastr' onclick='$_closeToastr()' style='display:none;'> Ok </a>");
	if(tabname === "ITR") {
		localStorage.setItem("changedTab","ITR");
		$('.disAllTabCLs').removeClass('disabled');
	}else if(tabname == "Qualitative") {
		localStorage.setItem("changedTab","Qualitative");
		$('.disAllTabCLs').removeClass('disabled');
	}else if(tabname == "Snapshot") {
		localStorage.setItem("changedTab","Snapshot");
		$('.disAllTabCLs').removeClass('disabled');
	}else if(tabname == "Emi PD"){
		localStorage.setItem("changedTab","EmiPD");
		$('.disAllTabCLs').addClass('disabled');
		$('.disEmiPdCLs').removeClass('disabled');
	}else if(tabname == 'Emi Bank for Bank '+ $('#'+localStorage.getItem("bankId")).text()){
		localStorage.setItem("changedTab","Emi Bank "+ $('#'+localStorage.getItem("bankId")).text());
		$('.disAllTabCLs').addClass('disabled');
		$('.disEmiBanksCLs-'+$('#'+localStorage.getItem("bankId")).text()).removeClass('disabled');
	}else if(tabname == "Emi Cibil"){
		localStorage.setItem("changedTab","Emi Cibil");
		$('.disAllTabCLs').addClass('disabled');
		$('.disEmiCibilCLs').removeClass('disabled');
	}else if(tabname == 'Bank Summary for Bank '+$('#'+localStorage.getItem("bsBankId")).text()){
		localStorage.setItem("changedTab","Bank Summary"+ $('#'+localStorage.getItem("bsBankId")).text());
		$('.disAllTabCLs').addClass('disabled');
		$('.disBnkCLs-'+$('#'+localStorage.getItem("bsBankId")).text()).removeClass('disabled');
	}else{
		localStorage.setItem("changedTab","NOCHANGE");
		$('.disAllTabCLs').removeClass('disabled');
	}
}

function $_closeToastr(){
	$('#toast-container').hide();	
}
function $_disableAllItrFields() {
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', false);
	}else if(localStorage.getItem("changedTab") != "ITR") {
		$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', true);
	}else{
		$('#btnDummyItr,table input, table select, table textarea, table button').prop('disabled', false);
	}
}

function $_disEmiPdFields() {
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', false);
	}else if(localStorage.getItem("changedTab") != "EmiPD") {
		$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', true);
	}else{
		$('#btnEmiPdId, #btnEmiPdAddRow ,table input, table select, table textarea, table button').prop('disabled', false);
	}
}

function $_disEmiCibilFields() {
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('table input,table textarea, table button').prop('disabled', true);
		$('table select').prop('disabled', true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('table input,table textarea, table button').prop('disabled', false);
		$('table select').prop('disabled', false);
	}else if(localStorage.getItem("changedTab") != "Emi Cibil") {
		$('table input,table textarea, table button').prop('disabled', true);
		$('table select').prop('disabled', true);
	}else{
		$('table input,table textarea, table button').prop('disabled', false);
		$('table select').prop('disabled', false);
	}
}

function $_disEmiBankFields(emiRepCheckSubTab,emiRepMainTabParId) {
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('table input,.emiBankSubmitCls,table textarea, table button, table select').prop('disabled',true);
		$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl select').prop('disabled',true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('table input,.emiBankSubmitCls,table textarea, table button, table select').prop('disabled',false);
		$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl select').prop('disabled',false);
	}else if(localStorage.getItem("changedTab") != "Emi Bank "+$('#'+localStorage.getItem("bankId")).text()) {
		$('table input,.emiBankSubmitCls,table textarea, table button, table select').prop('disabled',true);
		$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl select').prop('disabled',true);
	}else{
		$('table input,.emiBankSubmitCls,table textarea, table button, table select').prop('disabled',false);
		$('#'+emiRepCheckSubTab+'-'+emiRepMainTabParId+'Tbl select').prop('disabled',false);
	}
}