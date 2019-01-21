var 
	 API_ADDUSER_POST = '/upf-system/upf/authentication/addUser'
	,API_USERLIST_GET = '/upf-system/upf/authentication/getAllUser'
	,API_DSA_POST = '/upf-system/upf/dsa/addDsaInfo'
	,API_SM_POST = '/upf-system/upf/dsa/addEmpInfo'
	,API_DSA_GET = '/upf-system/upf/dsa/getDsaInfo?id='
	,API_SM_GET = '/upf-system/upf/dsa/getEmpInfo?id='
	,API_STATE_GET = '/upf-system-dsapayout/dsapayout/dsa/getliststate'
	,API_CITY_GET = '/upf-system/upf/dsa/getlistcity?state='
	,API_SM_LIST = '/upf-system/upf/dsa/empList?role='
    ,API_DSA_LIST = '/upf-system/upf/dsa/dsaList'
    ,API_EMAIL_GET = '/upf-system/upf/dsa/getemailstatus?emailid='
    ,API_EMPLOYEE_GET = '/upf-system/upf/dsa/getemployeeidstatus?employeeid='
    ,API_BANKNAME_GET = '/upf-system/upf/dsa/getlistbank'
    ,API_BANKACCCHECK_GET = '/upf-system/upf/dsa/getaccountstatus?accountno='
    ,API_STATECODE_GET = '/upf-system/upf/dsa/getstatecode?state='
    ,API_IMEI_CHECK = '/upf-system/upf/collection/imei_number?imei='
	;

var  srNoUser = 0
	,_getRowGlbl=0
	,_roleLst = ''
	,_getUpdRow = 0
	,smList = {}
	,smId = 0
	,dsaList = {}
	,dsaListArr = []
	,dsaId = 0
	,dsaExistEmail = ""
	,smExistEmail = ""
	,dsaExistEmpId = 0
	,dropDwn = ""
	,banckAccount = ""
	,filecountexist = 0
	,iMEINO1 =0
//	,iMEINO2 =0
	,dsa_created_date = ''
;
var zip = new JSZip();
var img;
var fileContent;
var today =  new Date();
$(document).ready(function(){
	toasTr();
	$('#btnDsaSbmt').attr('disabled',false);
	$('#btnSmSbmt').attr('disabled',false);
	$('.dwnldIcnCls').hide();    
	$('#dsaCodeRowId').hide();
	
	 requestData(API_BANKNAME_GET,'GET').done(function(reply){
			var opt = '<option value="">Select Bank Name</option>';
			 $(reply.data).each(function(k,v){
				 opt += '<option>'+v.bankname+'</option>';
			 });
			 $('#bankNameDsaId').html(opt);
	 });
	
	 $(document).on('change','#slctRoleSrchId',function(){
		var $sel = $('#slctRoleSrchId');
		var value = $sel.val();
		var text = $("option:selected",$sel).text(); 
		$.getJSON(API_SM_LIST+text+'&product=none',"GET",function(data) {
			smList = data
		});
	});
	
	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data
	});
	
	 
	$(document).on('keypress','#searchBoxDsaId',function(){
		$('#searchBoxDsaId').autocomplete({
			source : function (request,response) {
				if($('#searchBoxDsaId').val() != " "){
					var _data = ($.map(dsaList,function (ke,val) {
						if(ke['state'].toUpperCase().includes(request.term.toUpperCase()) || ke['city'].toUpperCase().includes(request.term.toUpperCase()) ||ke['companyName'].toUpperCase().includes(request.term.toUpperCase()) || ke['dsacode'].toUpperCase().includes(request.term.toUpperCase()) || ke['pan'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.id,
								value : ['Company Name - ' + ke.companyName + ', DSA Code - ' +ke.dsacode+ ', Company PAN - '+ke.pan+ ', State - ' +ke.state+ ', City - ' + ke.city]
							};  	
						}
						}));
				}
						if($.ui.autocomplete.filter(_data,request.term).length != 0){
							response($.ui.autocomplete.filter(_data,request.term));
						}else{
							
							response([{value: 'No matches found'}]);
						}
			},
			select : function (event,ui) {
				if (ui.item.value == "No matches found") {
					$('#searchBoxDsaId').val("");
                    return false;
                }else{
                	dsaId = ui.item.label1;
	 			}
			}
		});
	});
	
		$(document).on('keypress','#searchBoxSmId',function(){
			$('#searchBoxSmId').autocomplete({
				source : function (request,response) {
					if($('#searchBoxSmId').val() != " "){
						var _data = ($.map(smList,function (ke,val) {
							if(ke['employeeid'].toUpperCase().includes(request.term.toUpperCase()) || ke['name'].toUpperCase().includes(request.term.toUpperCase())){
								return {
									label1 : ke.id,
									value : ["Employee Id - "+ke.employeeid+" " ,"Employee Name - "+ke.name]
								};
							}
							}));
					}
						if($.ui.autocomplete.filter(_data,request.term).length != 0){
							response($.ui.autocomplete.filter(_data,request.term));
						}else{
							response([{value: 'No matches found'}]);
						}
				},
				select : function (event,ui) {
					//console.log(ui.item.label1);
					if (ui.item.value == "No matches found") {
						$('#searchBoxSmId').val("");
	                    return false;
	                }else{
	                	smId = parseInt(ui.item.label1);
	                }
				}
			});
		});
	
		$('#addEmailSpanHidId').hide();
		$('#updEmailSpanHidId').hide();
	
		
		requestData(API_STATE_GET).done(function(getState){
			var stateList = "<option></option>";
			$(getState.data).each(function(k,v){
				stateList += '<option>'+v.state+'</option>';
			});
			$('#stateSlctDsaId').html(stateList);
			$('#stateSlctSmId').html(stateList);
		});
		
		$(document).on('change','#stateSlctDsaId',function(){
			var cityList = "<option></option>";
			requestData(API_CITY_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCity){
				$(getCity.data).each(function(k,v){
					cityList += '<option>'+v.city+'</option>';
				});
				$('#citySlctDsaId').html(cityList);
				requestData(API_STATECODE_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCode){
					$('#stateCodeId').val(getCode.statecode);
				});
			});
		}); 
		
		$(document).on('change','#stateSlctSmId',function(){
			var cityList = "<option></option>";
			requestData(API_CITY_GET+$('#stateSlctSmId').val(),'GET').done(function(getCity){
				$(getCity.data).each(function(k,v){
					cityList += '<option>'+v.city+'</option>';
				});
				$('#citySlctSmId').html(cityList);
			});
		}); 
		
		requestData('/upf-system/upf/authentication/getAllRole', "GET",'').done(function(a){
			var i=-1;_roleLst = '';
			++i;
			var _roleLst = '<option></option>';
			$(a).each(function(k,v){
				// console.log('v.role-',v.roleName);
			_roleLst += '<option value="'+v.roleId+'">'+v.roleName+'</option>';
	   		 $('#userRoleId').empty().append(_roleLst);
	   		 $('#userRoleUpdId').empty().append(_roleLst);
	   		 $('#slctRoleSrchId').html(_roleLst);
			});
		});
			 
	 	 requestData(API_USERLIST_GET, "GET",'').done(function (a) {  
	 		 // console.log('�-',a);
	 		var srNoGetUser = 0,i=-1;
			$(a).each(function(){++srNoGetUser;++i;
				var renData = '<tr id="rowUserId-'+srNoGetUser+'">'+
				'<td id="addUserHidId-'+srNoGetUser+'" style="display:none">'+a[i].id+'</td>'+
			    '<td id="srNoUserId-'+srNoGetUser+'">'+srNoGetUser+'</td><td id="userFNameId-'+srNoGetUser+'">'+(a[i].firstName==null?'':a[i].firstName)+'</td>'+
			    '<td id="userLnameId-'+srNoGetUser+'">'+(a[i].lastName==null?'':a[i].lastName)+'</td>'+
			    '<td id="userEmialId-'+srNoGetUser+'">'+a[i].emailId+'</td>'+
			    '<td id="userRoleId-'+srNoGetUser+'">'+(a[i].roleName==null?'':a[i].roleName)+'<span style="display:none" id="spanDrpId-'+srNoGetUser+'">'+a[i].roleId+'</span></td>'+
			    '<td id="userMobHidId-'+srNoGetUser+'" style="display:none">'+a[i].phoneNumber+'</td>'+
			    '<td id="userDesgnHidId-'+srNoGetUser+'" style="display:none">'+a[i].designation+'</td>'+
			    '<td>'+
			    '<span style="padding-left:5px;"></span><button type="button" class="btn btn-primary updateUserCls" id="btnEditRoleId-'+srNoGetUser+'">'+
			    '<span class="glyphicon glyphicon-pencil"></span></button><span style="padding-left:8px;"></span>'+
			    '<button type="button" class="btn btn-danger deleteUserCls" id="btnDelRoleId-'+srNoGetUser+'">'+
			    '<span class="glyphicon glyphicon-trash"></span></button>'+
			    '</td></tr>';
			    $('#userAddTable').append(renData);
			    srNoUser = srNoGetUser;
			});
	 });
	
	$(document).on('click','#btnAddUserId',function(){
		$('#btnModalAddUser').click();
		$('#userDateId').val($_datePick());
	});
	
	$(document).on('click','.updateUserCls',function(){
		var getRowId = $(this).attr('id').split('-')[1];
		$('#btnModalUpdateUser').click();
		$('#hidModalUpdId').text($('#addUserHidId-'+getRowId).text());
		$('#userFnameUpdId').val($('#userFNameId-'+getRowId).text());
	    $('#userLnameUpdId').val($('#userLnameId-'+getRowId).text());
	    $('#userEmailUpdId').val($('#userEmialId-'+getRowId).text());
	    $('#userRoleUpdId').val($('#spanDrpId-'+getRowId).text()); 
	    $('#userMobileUpdId').val($('#userMobHidId-'+getRowId).text());
	    $('#userDesgnUpdId').val($('#userDesgnHidId-'+getRowId).text()); 
	    $('#userDateUpdId').val($_datePick());
	    _getUpdRow = getRowId;
	});
	 
		$(document).on('click','#btnUpdUserTextId',function(){
		  var flag = 0;
		  var noChange = $('#userEmialId-'+_getUpdRow).text();
		  var _test = $('#userEmailUpdId').val();
			
			requestData(API_USERLIST_GET, "GET",'').done(function(a){
				$(a).each(function(k,v){
					if(_test == v.emailId && noChange !=_test){flag = 1;
					$('#updEmailSpanHidId').show();
					$('#updEmailSpanHidId').delay(2500).fadeOut();
					return false;
					}
				});
				if(flag==0 || noChange==_test){$('#updEmailSpanHidId').hide();
					if($formValidity("formUpdateUserId","btnUpdUserActualId")){
						var userData = {	
							  "id" : $_isNaNChck('hidModalUpdId','t'),
							  "userName" : "",
							  "password" : "",
							  "roleId" : $_pInt($('#userRoleUpdId').val()),
							  "roles" : "",
							  "password_ORG" : "",
							  "status" : "",
							  "emailId" : $('#userEmailUpdId').val(),
							  "firstName" : $('#userFnameUpdId').val(),
							  "lastName" : $('#userLnameUpdId').val(),
							  "phoneNumber" : $_isNaNChck('userMobileUpdId','v'),//isNaN(parseInt($('#userMobileId').val()))?0:parseInt($('#userMobileId').val()),				  "designation" :$('#userDesgnId').val(),
							  "designation" : $('#userDesgnUpdId').val(),
							  "currentDate" : $('#userDateUpdId').val()
						};
					 	 requestData(API_ADDUSER_POST, "POST", JSON.stringify((userData))).done(function (reply) {
					 		// console.log(reply,_getUpdRow);
					 		$('#addUserHidId-'+_getUpdRow).text(reply.id);
					    	$('#userFNameId-'+_getUpdRow).text(reply.firstName);
					    	$('#userLnameId-'+_getUpdRow).text(reply.lastName);
					    	$('#userEmialId-'+_getUpdRow).text(reply.emailId);
					    	$('#userRoleId-'+_getUpdRow).text(reply.roleName);
					    	$('#spanDrpId-'+_getUpdRow).text(reply.roleId);
					    	$('#userMobHidId-'+_getUpdRow).text(reply.phoneNumber);
					    	$('#userDesgnHidId-'+_getUpdRow).text(reply.designation);
					 	 });
					 	 $('#updCloseId').click();
					 	 location.href = "/upf-system/upf/debitCredit/users";
					  }
				}
			});
	    });
	$(document).on('click','.deleteUserCls',function(){
		var deleteRowId = $(this).closest('tr').attr('id');
		var getRowNo = deleteRowId.split("-")[1];
		var API_USER_DEL = '/upf-system/upf/authentication/removeUser/'+$('#addUserHidId-'+getRowNo).text();
		$_deleteLos(API_USER_DEL,'rowUserId',getRowNo,srNoUser,'srNoUserId','User');
		srNoUser--;	
	});
	
	$(document).on('change','#slctRoleSrchId',function(){
		var tblSrchData = "";
		var tblBtnData = "";
		var $sel = $('#slctRoleSrchId');
		var value = $sel.val();
		var text = $("option:selected",$sel).text(); 
		dropDwn = text;
		if(text == "DSA"){
			$('#dsaShowId').hide();
			$('#smShowiD').hide();
			tblSrchData += '<td><div class="input-group">'+
			'<div class="ui-widget">'+
		'<input type="text" class="form-control ui-autocomplete-input" id="searchBoxDsaId" placeholder="Search by Company Name, DSA Code, Company PAN, State, City" autocomplete="off">'+
	'</div>'+

	'<span class="input-group-btn">'+
	'<button type="button" id="btnSrchDsaId" class="btn btn-info">'+
			'<i class="glyphicon glyphicon-search"></i>'+
		'</button>'+
	'</span>'+
	'</div></td>';
	tblBtnData += '<td>'+
	'<button type="button" id="btnAddDsa" class="btn btn-primary" style="padding-left:20px;padding-right:20px;">Add DSA</button>'+
	'</td>';
		}else if($(this).val() == ""){
			
		}else{
			$('#dsaShowId').hide();
			$('#smShowiD').hide();
			if(text == "SM" || text == "SSM" || text == "CREDIT"){
				$('#stateSmTrId').show();  
				$('#stateSlctSmId').attr('required',true);
			}else{
				$('#stateSmTrId').hide();
				$('#stateSlctSmId').attr('required',false);
				$('#stateSlctSmId').val("none");
			}
			
			if(text == "SM" || text == "SSM" || text == "ASM" ||text == "RSM" ||text == "ZSM" ||text == "NSM"){
				$('#citySmTrId').hide();
				$('#proTypeTrId').show();
				$('#prodTypeSmId').attr('required',true);
				$('#citySlctSmId').attr('required',false);
				$('#citySlctSmId').val("");
			}else if(text == "CREDIT"){
				$('#proTypeTrId').hide();
				$('#citySmTrId').hide();
				$('#prodTypeSmId').attr('required',false);
				$('#citySlctSmId').attr('required',false);
				$('#prodTypeSmId').val("");
			}else{
				$('#citySmTrId').hide();
				$('#citySlctSmId').attr('required',false);
				$('#proTypeTrId').hide();
				$('#prodTypeSmId').attr('required',false);
				$('#citySlctSmId').val("");
				$('#prodTypeSmId').val("");
			}
			
			
			if(text == "CM" || text == "SCM" || text == "ACM" ||text == "RCM" ||text == "ZCM" ||text == "NCM"){
				$('#appLnAmntSmTrId').show();
				$('#appLoanAmntId').attr('required',true);
			}else{
				$('#appLnAmntSmTrId').hide();
				$('#appLoanAmntId').attr('required',false);
			}
			
			if(text == "COLE" || text == "COLS" || text == "COLM" || text == "ACOLM" ||text == "RCOLM" ||text == "ZCOLM" ||text == "NCOLM"){
				$('.coaTrCls').show();
				statusSlctSmId
				$('#iMEINO1_Id ,#statusSlctSmId').attr('required',true);
			}else{
				$('.coaTrCls').hide();
				$('#iMEINO1_Id ,#statusSlctSmId').attr('required',false);
			}
			
			tblSrchData += '<td><div class="input-group">'+
			'<div class="ui-widget">'+
		'<input type="text" class="form-control ui-autocomplete-input" id="searchBoxSmId" placeholder="Search by Employee Id,Employee Name" autocomplete="off">'+
	'</div>'+

	'<span class="input-group-btn">'+
	'<button type="button" id="btnSrchSmId" class="btn btn-info">'+
			'<i class="glyphicon glyphicon-search"></i>'+
		'</button>'+
	'</span>'+
	'</div></td>';
	tblBtnData += '<td>'+
	'<button type="button" id="btnAddSm" class="btn btn-primary" style="padding-left:15px;padding-right:15px;">Add '+text+'</button>'+
	'</td>';
		}
		$('#srchBxDispId').html(tblSrchData);
		$('#btnAddUsrDisId').html(tblBtnData); 
	});
	
	$(document).on('click','#btnSrchDsaId,#btnAddDsa',function(){
		if($(this).attr('id') == "btnSrchDsaId"){
			if($('#searchBoxDsaId').val() == ""){
				alert("Please enter valid DSA.")
			}else{
				$('#dsaShowId').show();
				$('#smShowiD').hide();
				$('#dsaCodeRowId').show();
				requestData(API_DSA_GET+dsaId,"GET").done(function(dsaReply){
					dsa_created_date = dsaReply.created_date;
					 $('#btnDsaSbmt').attr('disabled',false);
					 $('.dwnldIcnCls').show();
					 $('#dsaAppHidId').text(dsaReply.dsaid);
					 $('#dsaUserHidId').text(dsaReply.userid);
					 $('#cmpNameDsaId').val(dsaReply.companyname);
					 $('#comPanDsaId').val(dsaReply.companypan);
					 $('#contNameDsaId').val(dsaReply.contactname);
					 $('#mobNumDsaId').val(dsaReply.phoneNumber);
					 $('#busOpenDateDsaId').val(dsaReply.businesssince);
					 $('#constTypeDsaId').val(dsaReply.companytype);
					 $('#emailDsaId').val(dsaReply.emailid);
					 dsaExistEmail = dsaReply.emailid;
					 $('#compAddDsaId').val(dsaReply.address);
					 $('#bankNameDsaId').val(dsaReply.bankname);
					 $('#accNumDsaId').val(dsaReply.accountno); 
					 banckAccount = dsaReply.accountno;
					 $('#resdAddDsaId').val(dsaReply.residenceaddress); 
					 $('#stateSlctDsaId').val(dsaReply.state);
					 requestData(API_STATECODE_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCode){
							$('#stateCodeId').val(getCode.statecode);
						});
					 $('#dsaCodeHidId').val(dsaReply.dsacode);
					 var cityList = "<option></option>";
					requestData(API_CITY_GET+$('#stateSlctDsaId').val(),'GET').done(function(getCity){
								$(getCity.data).each(function(k,v){
									cityList += '<option>'+v.city+'</option>';
								});
								$('#citySlctDsaId').html(cityList);
								 $('#citySlctDsaId').val(dsaReply.city);
							});
					 $('#ifscCodeId').val(dsaReply.ifsccode);
					 if(dsaReply.gstdetails !== null){
						 $('#gstCodeId').val(dsaReply.gstdetails.gstcode);
						 $('#hsnCodeId').val(dsaReply.gstdetails.hsncode);
						 $('#bankAccNameDsaId').val(dsaReply.gstdetails.bankaccountname); 
					 }
			//		 $('#renewalsid').text(dsaReply.renewals.renewalsid);
			//		 $('#frstRenwId-1').val(dsaReply.renewals.instanceofrenewal);  
			//		 $('#frstRenwId-2').val(dsaReply.renewals.payoutpercentage);
					 
				/*	 $('#monthlyslabid-1').text(dsaReply.monthlyslab[0].monthlyslabid); 
					 $('#monthlyslabid-2').text(dsaReply.monthlyslab[1].monthlyslabid); 
					 $('#monthlyslabid-3').text(dsaReply.monthlyslab[2].monthlyslabid);
					 
					 $('#disbursalincr-1').text(dsaReply.monthlyslab[0].disbursalincr);
					 $('#disbursalincr-2').text(dsaReply.monthlyslab[1].disbursalincr);
					 $('#disbursalincr-3').text(dsaReply.monthlyslab[2].disbursalincr);
					 
					 $('#minFileDis-1').val(dsaReply.monthlyslab[0].minfilesdisbursed);
					 $('#minFileDis-2').val(dsaReply.monthlyslab[1].minfilesdisbursed);
					 $('#minFileDis-3').val(dsaReply.monthlyslab[2].minfilesdisbursed);
					 
					 $('#mnthPayout-1').val(dsaReply.monthlyslab[0].monthlypayout);
					 $('#mnthPayout-2').val(dsaReply.monthlyslab[1].monthlypayout);
					 $('#mnthPayout-3').val(dsaReply.monthlyslab[2].monthlypayout);
					 
					 $('#disbursalincr-4').text(dsaReply.quarterlyslab[0].disbursalincr);
					 $('#disbursalincr-5').text(dsaReply.quarterlyslab[1].disbursalincr);
					 $('#disbursalincr-6').text(dsaReply.quarterlyslab[2].disbursalincr);
					 
					 $('#quarterlyslabid-1').text(dsaReply.quarterlyslab[0].quarterlyslabid)
					 $('#quarterlyslabid-2').text(dsaReply.quarterlyslab[1].quarterlyslabid)
					 $('#quarterlyslabid-3').text(dsaReply.quarterlyslab[2].quarterlyslabid)
					 
					 $('#qtrlySlbId-1').val(dsaReply.quarterlyslab[0].quarterlyslab);
					 $('#qtrlySlbId-2').val(dsaReply.quarterlyslab[1].quarterlyslab);
					 $('#qtrlySlbId-3').val(dsaReply.quarterlyslab[2].quarterlyslab);
					 
					 $('#qlfCritId-1').val(dsaReply.quarterlyslab[0].qualifyingcriteria);
					 $('#qlfCritId-2').val(dsaReply.quarterlyslab[1].qualifyingcriteria);
					 $('#qlfCritId-3').val(dsaReply.quarterlyslab[2].qualifyingcriteria); */
					 
					 
					 $(dsaReply.dsaDocuments).each(function(k,v){
						 	if((v.documentname).split('.')[0] == "Pan"){
						 		$('#panTextHidId').text(v.documentId);
						 		$_filePlacHld('uploadPanDsaId', v.documentname);
						 		$_dwnldLink(v.documentpath,'pan','dwnldFilePan');
						 		$('#panNmHidId').text(v.documentname);
						 		$('#panPthHidId').text(v.documentpath);
						 		$('#panUptDtHidId').text(v.updateddate);
							}else if((v.documentname).split('.')[0] == "Aadhaar"){
								$('#aadhaarTextHidId').text(v.documentId);
								$_filePlacHld('uploadAdhDsaId', v.documentname);
								$_dwnldLink(v.documentpath,'aadhaar','dwnldFileAadhaar');
								$('#aadhaarNmHidId').text(v.documentname);
								$('#aadhaarPthHidId').text(v.documentpath);
						 		$('#aadhaarUptDtHidId').text(v.updateddate);
							}else if((v.documentname).split('.')[0] == "CancelledCheque"){
								$('#canChckTextHidId').text(v.documentId);
								$_filePlacHld('uploadCnclChckId', v.documentname);
								$_dwnldLink(v.documentpath,'canChq','dwnldFileCanCheq');
								$('#canChckNmHidId').text(v.documentname);
								$('#canChckPthHidId').text(v.documentpath);
						 		$('#canChckUptDtHidId').text(v.updateddate);
							}	
							else if((v.documentname).split('.')[0] == "ShopAct"){
								$('#shpActTextHidId').text(v.documentId);
								$_filePlacHld('uploadShopActId', v.documentname);
								$_dwnldLink(v.documentpath,'shopAct','dwnldFileShopAct');
								$('#shpActNmHidId').text(v.documentname);
								$('#shpActPthHidId').text(v.documentpath);
						 		$('#shpActUptDtHidId').text(v.updateddate);
							}
							else if((v.documentname).split('.')[0] == "Agreement"){
								$('#agrmntTextHidId').text(v.documentId);
								$_filePlacHld('uploadAgrmntId', v.documentname);
								$_dwnldLink(v.documentpath,'agreement','dwnldFileAgreement');
								$('#agrmntNmHidId').text(v.documentname);
								$('#agrmntPthHidId').text(v.documentpath);
						 		$('#agrmntUptDtHidId').text(v.updateddate);
							}
					 });
					 
					 $('#uploadPanDsaId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
					 $('#uploadShopActId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
					 $('#uploadAdhDsaId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
					 $('#uploadCnclChckId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
					 $('#uploadAgrmntId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
					 
					 $('#uploadPanDsaId').attr('required',false);
					 $('#uploadShopActId').attr('required',false);
					 $('#uploadAdhDsaId').attr('required',false);
					 $('#uploadCnclChckId').attr('required',false);
					 $('#uploadAgrmntId').attr('required',false);
				
				});
			}
		}else{
			dsa_created_date = '';
			 dsaExistEmail = "";	
			 smId = 0;   
			 dsaId = 0;    
			 $('.linkCls').hide();
			 $('#renewalsid').text(0);
			 $('#monthlyslabid-1').text(0); 
			 $('#monthlyslabid-2').text(0); 
			 $('#monthlyslabid-3').text(0); 	
			 $('#quarterlyslabid-1').text(0);
			 $('#quarterlyslabid-2').text(0);
			 $('#quarterlyslabid-3').text(0);
			 $('#panTextHidId').text(0);
			 $('#aadhaarTextHidId').text(0);
			 $('#canChckTextHidId').text(0);
			 $('#shpActTextHidId').text(0);
			 $('#agrmntTextHidId').text(0);
			 $('#searchBoxDsaId').val("");
			 $('#dsaFormId')[0].reset();
			 $('#dsaShowId').show();
			 $('#smShowiD').hide();
			 $('#dsaAppHidId').text(0);
			 $('#dsaUserHidId').text(0);
			 $('#gstCodeHidId').text("");
			 $('#hsnCodeHidId').text("");
			 $('#bankAccNameHidDsaId').val("");
			 $('#dsaCodeRowId').hide();   
			 $('#uploadPanDsaId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
			 $('#uploadShopActId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
			 $('#uploadAdhDsaId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
			 $('#uploadCnclChckId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
			 $('#uploadAgrmntId').siblings('.bootstrap-filestyle').find('label').attr('disabled',false);
			 
			 
			 $('#uploadPanDsaId').siblings('.bootstrap-filestyle').find(':text').attr('placeholder', '');
			 $('#uploadShopActId').siblings('.bootstrap-filestyle').find(':text').attr('placeholder', '');
			 $('#uploadAdhDsaId').siblings('.bootstrap-filestyle').find(':text').attr('placeholder', '');
			 $('#uploadCnclChckId').siblings('.bootstrap-filestyle').find(':text').attr('placeholder', '');
			 $('#uploadAgrmntId').siblings('.bootstrap-filestyle').find(':text').attr('placeholder', '');

			 
			 $('#uploadPanDsaId').attr('required',false);
			 $('#uploadShopActId').attr('required',false);
			 $('#uploadAdhDsaId').attr('required',false);
			 $('#uploadCnclChckId').attr('required',false);
			 $('#uploadAgrmntId').attr('required',false);
			 
		}
	});
	
	$(document).on('click','#btnSrchSmId,#btnAddSm',function(){
		var $sel = $('#slctRoleSrchId');
		var value = $sel.val();
		var text = $("option:selected",$sel).text(); 
		if($(this).attr('id') == "btnSrchSmId"){
			if($('#searchBoxSmId').val() == ""){
				alert('Please enter valid '+text+'.');  
			}else{  
				$('#dsaShowId').hide();
				$('#smShowiD').show();
				requestData(API_SM_GET+smId,"GET").done(function(smReply){
					$('#btnSmSbmt').attr('disabled',false);
					$('#smAppHidId').text(smReply.empid);
					$('#smUserHidId').text(smReply.userid);   
					$('#smNameId').val(smReply.name);
					$('#smEmailId').val(smReply.emailid); 
					smExistEmail = smReply.emailid;
					$('#stateSlctSmId').val(smReply.state);
					$('#empSmId').val(smReply.employeeid);
					dsaExistEmpId = smReply.employeeid;
					$('#smContctNumId').val(smReply.phoneno);
					$('#prodTypeSmId').val(smReply.productype);
					$('#appLoanAmntId').val(smReply.approvalamounts);
					
					$('#iMEINO1_Id').val(smReply.imeino1);
//					$('#iMEINO2_Id').val(smReply.imeino2);
					iMEINO1 = smReply.imeino1
//					iMEINO2 = smReply.imeino2
					$('#statusSlctSmId').val(smReply.collection_status);
					//$("option:selected",$sel).text();
					/*var cityList = "<option></option>";
					requestData(API_CITY_GET+$('#stateSlctSmId').val(),'GET').done(function(getCity){
						$(getCity.data).each(function(k,v){
							cityList += '<option>'+v.city+'</option>';
						});
						$('#citySlctSmId').html(cityList);    
						$('#citySlctSmId').val(smReply.city);
					});*/
				});
			}
		}else{       
			$('#dsaShowId').hide();
			$('#smShowiD').show();
			smExistEmail = "";	
			dsaExistEmpId = 0;
			smId = 0;
			dsaId = 0;
			iMEINO1 = 0;
//			iMEINO2 = 0;
			$('#smAppHidId').text(0);
			$('#smUserHidId').text(0); 
			$('#searchBoxSmId').val("");
			$('#smFormId')[0].reset();
		}
	});
	
	$('.dateRangePicker')
    .datepicker({
    	 format: 'dd/mm/yyyy',
         autoclose:true,
         endDate: today
    });
	
	$(document).on('keyup','#comPanDsaId',function(){
		$(this).val($(this).val().toUpperCase());
	});
	
	$(document).on('change','.fileCls',function(){
		var count = 0;
		var id = $(this).attr('id');
		var name = $(this).attr('name');
		img = zip.folder();
		fileContent = $('#'+id)[0].files[0];
		var ext = $('#'+id)[0].files[0].name.split('.')[1];
			if($('#'+id)[0].files.length==1){
				count++;
			}
			if(count != 0){
				for(i=count;i<=count;i++){
					img.file(name+'.'+ext, fileContent, { base64: true });
					if(name == "Pan"){
						$('#panNmHidId').text(name+'.'+ext);
					}else if(name == "Aadhaar"){
						$('#aadhaarNmHidId').text(name+'.'+ext);
					}else if(name == "CancelledCheque"){
						$('#canChckNmHidId').text(name+'.'+ext);
					}	
					else if(name == "ShopAct"){
						$('#shpActNmHidId').text(name+'.'+ext);
					}
					else if(name == "Agreement"){
						$('#agrmntNmHidId').text(name+'.'+ext);
					}
				}	
			}
			filecountexist = count;
	});
	
	var getId = ""; 
    $(document).on('click', '.linkCls', function(e){
		getId = $(this).attr('id'); 
	    e.preventDefault(); 
	    var url = $('#'+getId).attr('href'); 
	    //var hiddenUrl = $("#hiddenHref-"+getId).attr('href');
	    window.open(url, '_blank');
	   // window.location.href = hiddenUrl;
	});
    
    $(document).on('click','#doneMsgOkId',function(){
    	window.location.reload();
    });
    
    $(document).on('click','#btnAddUserId',function(){
		$('#btnModalAddUser').click();
		$('#userDateId').val($_datePick());
	});
});
//ready func
function $_fileZip(prop,zipName,dsacode){
	var img = zip.folder();
	zip.generateAsync({ type: "blob" })
    .then(function(content) {
	    	 var blob = new Blob([content], {type: "application/zip"});
			 var formData = new FormData();
			 formData.append(prop,blob,zipName+'.zip');
			// console.log(formData.get(prop));
			 $.ajax({
			        url: '/upf-system/upf/dsa/uploaddoc',
			        method: 'POST',
			        data: formData,
			        processData: false,
			        contentType: false
			    }).done(function(replyFile){
			    	$('#sucModalWindId').click();
			    	$('#dsaHtmlId').html('DSA Code is - <b id="dsaId"></b>');
			    	$('#sucMgsId').html('Your application for '+dropDwn+' has been successfully submitted.');
			    	$('#dsaId').html(dsacode);
			    	$('#appId').html(zipName);
			    	//alert("Data successfully saved.")
			    	//window.location.reload();
			    }).error(function (jqXHR, textStatus, errorThrown) {
			       $('#btnDsaSbmt').attr('disabled',false);
			    });
    	}); 
	
}
function getRowDataUserLos(){//alert(a); // $('#hidModalUpdId').text(
			var userData = {	
				  "id" : $_isNaNChck('hidModalAddId','t'),
				  "userName" : "",
				  "password" : "",
				  "roleId" : $_pInt($('#userRoleId').val()),
				  "roles" :  "",
				  "password_ORG" : "",
				  "status" : "",
				  "emailId" : $('#userEmailId').val(),
				  "firstName" : $('#userFnameId').val(),
				  "lastName" : $('#userLnameId').val(),
				  "phoneNumber" : $_isNaNChck('userMobileId','v'),//isNaN(parseInt($('#userMobileId').val()))?0:parseInt($('#userMobileId').val()),				  "designation" :$('#userDesgnId').val(),
				  "designation" : $('#userDesgnId').val(),
				  "currentDate" : $('#userDateId').val()
			};
	  
	return userData;
}

function $_addUser(){
	var flag = 0;
	var _test = $('#userEmailId').val();
	requestData(API_USERLIST_GET, "GET",'').done(function(a){
		$(a).each(function(k,v){
			if(_test == v.emailId){flag =1;
			$('#addEmailSpanHidId').show();
			$('#addEmailSpanHidId').delay(2500).fadeOut();
			return false;
			}
		});
		if(flag == 0){
			if($formValidity("formAddUserId","btnAddUserActualId")){
				++srNoUser; //glyphicon glyphicon-pencil
				$('#hidModalAddId').text($('addUserHidId-'+srNoUser).text());
				var renData = '<tr id="rowUserId-'+srNoUser+'">'+
				'<td id="addUserHidId-'+srNoUser+'" style="display:none"></td>'+
			    '<td id="srNoUserId-'+srNoUser+'">'+srNoUser+'</td><td id="userFNameId-'+srNoUser+'"></td>'+
			    '<td id="userLnameId-'+srNoUser+'"></td>'+
			    '<td id="userEmialId-'+srNoUser+'"></td>'+
			    '<td id="userRoleId-'+srNoUser+'"><span style="display:none;" id="spanDrpId-'+srNoUser+'"></span></td>'+
			    '<td id="userMobHidId-'+srNoUser+'" style="display:none"></td>'+
			    '<td id="userDesgnHidId-'+srNoUser+'" style="display:none"></td>'+
			    '<td>'+
			    '<span style="padding-left:5px;"></span><button type="button" class="btn btn-primary updateUserCls" id="btnEditRoleId-'+srNoUser+'">'+
			    '<span class="glyphicon glyphicon-pencil"></span></button><span style="padding-left:8px;"></span>'+
			    '<button type="button" class="btn btn-danger deleteUserCls" id="btnDelRoleId-'+srNoUser+'">'+
			    '<span class="glyphicon glyphicon-trash"></span></button>'+
			    '</td></tr>';
			    
			    requestData(API_ADDUSER_POST, "POST", JSON.stringify(getRowDataUserLos(srNoUser))).done(function (reply) {
			    	// console.log('add',reply);
			    	$('#addUserHidId-'+srNoUser).text(reply.id);
			    	$('#userFNameId-'+srNoUser).text(reply.firstName);
			    	$('#userLnameId-'+srNoUser).text(reply.lastName);
			    	$('#userEmialId-'+srNoUser).text(reply.emailId);
			    	$('#userRoleId-'+srNoUser).text(reply.roleName);
			    	$('#spanDrpId-'+srNoUser).text(reply.roleId);
			    	$('#userMobHidId-'+srNoUser).text(reply.phoneNumber);
			    	$('#userDesgnHidId-'+srNoUser).text(reply.designation);
			     });
			    $('#userAddTable').append(renData);
			    $('#btnAddUserCloseId').click();
			   	$('#userFnameId').val('');
			    $('#userLnameId').val('');
			    $('#userEmailId').val('');
			    $('#userMobileId').val('');
			    $('#userDesgnId').val('');
			    $('#userRoleId').val(''); 

			 	// alert(srNoRole);
				location.href = "/upf-system/upf/debitCredit/users";
				//window.location.reload();
				}
		}
	});	
}
function $_dsaPost(event){
	event.preventDefault();
	$('#btnDsaSbmt').unbind('click');
	var account_no; 
	var emailFlag = 0;
	$('#accNumDsaId').val()==""? account_no="0" : account_no=$('#accNumDsaId').val();
	if(100 == 101){
  		$('#btnDsaSbmt').attr('disabled',false);
  	}else{
  		requestData(API_EMAIL_GET+$('#emailDsaId').val(),'GET').done(function(reply){
			if(reply.status == "absent" || $('#emailDsaId').val() == dsaExistEmail){
				$('#btnDsaSbmt').attr('disabled',false);

				requestData(API_BANKACCCHECK_GET+account_no,'GET').done(function(reply){
					if(reply.status == "present" && banckAccount != $('#accNumDsaId').val()){
						 Command: toastr["error"]("Bank account you entered already exist.");
					}else{
						$('#btnDsaSbmt').attr('disabled', true);
						var userData = {
								"id" : isNaN(parseInt($('#dsaUserHidId').text()))?0:(parseInt($('#dsaUserHidId').text())),
						 		"roleId" : $_pInt($('#slctRoleSrchId').val()),
						 		"emailId" : $('#emailDsaId').val(),
								"firstName" : $('#contNameDsaId').val()
						}
						requestData(API_ADDUSER_POST, "POST", JSON.stringify((userData))).done(function (reply) {
							$('#dsaUserHidId').text(reply.id);
							var dsaFormData = {
									"created_date" : dsa_created_date,
									 "dsaid" :    isNaN(parseInt($('#dsaAppHidId').text()))?0:(parseInt($('#dsaAppHidId').text())),
									 "contactname" :	 $('#contNameDsaId').val(),
									 "phoneNumber" : 	 parseInt($('#mobNumDsaId').val()),
									 "businesssince" : 	 $('#busOpenDateDsaId').val(),
									 "companytype" : 	 $('#constTypeDsaId').val(),
									 "emailid" : 	 $('#emailDsaId').val(),
									 "residenceaddress" :	 $('#resdAddDsaId').val(),
									 "dsacode" : $('#dsaCodeHidId').val(),
									 "userid":isNaN(parseInt($('#dsaUserHidId').text()))?0:(parseInt($('#dsaUserHidId').text())), 
									 "companyname" : $('#cmpNameDsaId').val(),
									  "companypan" : $('#comPanDsaId').val(),
									  "address" : 	 $('#compAddDsaId').val(),
									  "state" :	 $('#stateSlctDsaId').val(),
									  "city" :	 $('#citySlctDsaId').val(),
									  "bankname" : 	 $('#bankNameDsaId').val(),
									  "accountno" :	 $('#accNumDsaId').val(),
									  "ifsccode" :    $('#ifscCodeId').val(),
										"gstdetails"	: {
										  "gstid" : isNaN(parseInt($('#gstHidid').text()))?0:(parseInt($('#gstHidid').text())),
										  "companyname" : $('#cmpNameDsaId').val(),
										  "companypan" : $('#comPanDsaId').val(),
										  "address" : 	 $('#compAddDsaId').val(),
										  "state" :	 $('#stateSlctDsaId').val(),
										  "city" :	 $('#citySlctDsaId').val(),
										  "bankname" : 	 $('#bankNameDsaId').val(),
										  "accountno" :	 $('#accNumDsaId').val(),
										  "ifsccode" :    $('#ifscCodeId').val(),
										  "gstcode" :  $('#gstCodeId').val(),
											"hsncode" :  $('#hsnCodeId').val(),
											"bankaccountname": $('#bankAccNameDsaId').val(),
											"statecode" :  $('#stateCodeId').val()
										},
									 "dsaDocuments" : $_fileArrList(filecountexist),
									 "renewals": {
										  "renewalsid": isNaN(parseInt($('#renewalsid').text()))?0:(parseInt($('#renewalsid').text())),
										  "instanceofrenewal": $('#frstRenwId-1').text(),
										  "payoutpercentage": $('#frstRenwId-2').val()
										 },
									"monthlyslab": [{
											  "monthlyslabid": isNaN(parseInt($('#monthlyslabid-1').text()))?0:(parseInt($('#monthlyslabid-1').text())),
											  "disbursalincr": $('#disbursalincr-1').text(),
											  "minfilesdisbursed": parseInt($('#minFileDis-1').val()),
											  "monthlypayout": parseFloat($('#mnthPayout-1').val())
											 }, {
											  "monthlyslabid": isNaN(parseInt($('#monthlyslabid-2').text()))?0:(parseInt($('#monthlyslabid-2').text())),
											  "disbursalincr": $('#disbursalincr-2').text(),
											  "minfilesdisbursed": parseInt($('#minFileDis-2').val()),
											  "monthlypayout": parseFloat($('#mnthPayout-2').val())
											},{
											  "monthlyslabid": isNaN(parseInt($('#monthlyslabid-3').text()))?0:(parseInt($('#monthlyslabid-3').text())),
											  "disbursalincr": $('#disbursalincr-3').text(),
											  "minfilesdisbursed": parseInt($('#minFileDis-3').val()),
											  "monthlypayout": parseFloat($('#mnthPayout-3').val())
											 }],"quarterlyslab": [{
												  "quarterlyslabid": isNaN(parseInt($('#quarterlyslabid-1').text()))?0:(parseInt($('#quarterlyslabid-1').text())),
												  "disbursalincr": $('#disbursalincr-4').text(),
												  "qualifyingcriteria" :$('#qlfCritId-1').val(),
												  "quarterlyslab": parseFloat($('#qtrlySlbId-1').val())
												 }, {
												  "quarterlyslabid": isNaN(parseInt($('#quarterlyslabid-2').text()))?0:(parseInt($('#quarterlyslabid-2').text())),
												  "disbursalincr": $('#disbursalincr-5').text(),
												  "qualifyingcriteria" :$('#qlfCritId-2').val(),
												  "quarterlyslab": parseFloat($('#qtrlySlbId-2').val())
												 },
												 {
												  "quarterlyslabid": isNaN(parseInt($('#quarterlyslabid-3').text()))?0:(parseInt($('#quarterlyslabid-3').text())),
												  "disbursalincr": $('#disbursalincr-6').text(),
												  "qualifyingcriteria" :$('#qlfCritId-3').val(),
												  "quarterlyslab": parseFloat($('#qtrlySlbId-3').val())
												}]
										}
							console.log(dsaFormData);
							requestData(API_DSA_POST,'POST',JSON.stringify(dsaFormData)).done(function(dsaReply){
								if(dsaReply.reply == "success"){
									if(filecountexist > 0){
										$_fileZip('file1',(dsaReply.id).toString(),(dsaReply.dsacode).toString());
									}else if(filecountexist == 0){
										$('#sucModalWindId').click();
								    	$('#dsaHtmlId').html('DSA Code is - <b id="dsaId"></b>');
								    	$('#sucMgsId').html('Your application for '+dropDwn+' has been successfully submitted.');
								    	$('#dsaId').html((dsaReply.dsacode).toString());
								    	$('#appId').html((dsaReply.id).toString());
									}
								}
							});
						});
					}
				});
			}else{
				emailFlag = 1;
				Command: toastr["error"]("Email you entered already exist.");
				$('#btnDsaSbmt').attr('disabled',false);
			}
		});
  	}
}
function $_smPost(event){
	event.preventDefault();
	$('#btnSmSbmt').unbind('click');
	$('#btnSmSbmt').attr('disabled',true);

	var userData = {
			"id" : isNaN(parseInt($('#smUserHidId').text()))?0:(parseInt($('#smUserHidId').text())),
	 		"roleId" : $_pInt($('#slctRoleSrchId').val()),
	 		"emailId" : $('#smEmailId').val(),
			"firstName" : $('#smNameId').val()
		}
			requestData(API_EMPLOYEE_GET+$('#empSmId').val(),'GET').done(function(replyEmp){
				if(replyEmp.status == "absent" || $('#empSmId').val() == dsaExistEmpId){
					
					requestData(API_EMAIL_GET+$('#smEmailId').val(),'GET').done(function(replyEmail){
						if(replyEmail.status == "absent" ||  $('#smEmailId').val() == smExistEmail){
							
							requestData(API_ADDUSER_POST, "POST", JSON.stringify((userData))).done(function (reply) {
								$('#smUserHidId').text(reply.id);
								var smFormData = {
										
										"empid":    isNaN(parseInt($('#smAppHidId').text()))?0:(parseInt($('#smAppHidId').text())),
										"name":	$('#smNameId').val(),
										"emailid":	$('#smEmailId').val(),
										"state":	$('#stateSlctSmId').val(),
										"employeeid": parseInt($('#empSmId').val()),
										"phoneno":	$('#smContctNumId').val(),
										"userid":isNaN(parseInt($('#smUserHidId').text()))?0:(parseInt($('#smUserHidId').text())),
										"city" :	$('#citySlctSmId').val(),
										"approvalamounts" : parseInt($('#appLoanAmntId').val()),
										"productype" : $('#prodTypeSmId').val(),
										"imeino1":$('#iMEINO1_Id').val(),
//										"imeino2":$('#iMEINO2_Id').val(),
										"collection_status":$('#statusSlctSmId').val()
									}
									postSM(smFormData);
							});
						}else{
							Command: toastr["error"]("Email Id you entered already exist.");
						$('#btnSmSbmt').attr('disabled',false);
						}
					});
				}else{
						Command: toastr["error"]("Employee Id you entered already exist.");
				$('#btnSmSbmt').attr('disabled',false);
				}
			});
}
function postSM(smFormData){

		requestData(API_SM_POST,'POST',JSON.stringify(smFormData)).done(function(smReply){
			if(smReply.reply == "success"){
				$('#dsaHtmlId').hide();
				$('#sucModalWindId').click();
				$('#sucMgsId').html('Your application for '+dropDwn+' has been successfully submitted.');
				$('#appId').html(smReply.id);
			}
		}).error(function (jqXHR, textStatus, errorThrown) {
		       $('#btnSmSbmt').attr('disabled',false);
	    });
	
}
function $_chkPlc(a){
	var place = $('#'+a).siblings('.bootstrap-filestyle').find(':text').attr('placeholder');
	return place;
}
function $_fileExt(a) {
    var file = $('#' + a)[0].files[0];
    return file.name.split('.')[1];
}
function $_pInt(a){ var z;
	return parseInt(a);
}
function $_isNaNChck(a,b){
	var x = $('#'+a);
	return ((b=="t")?isNaN($_pInt(x.text()))?0:$_pInt(x.text()):isNaN($_pInt(x.val()))?0:$_pInt(x.val()));
}
function $_filePlacHld(a, b) {
    //$('#'+a).attr("required",false);
    $('#' + a).siblings('.bootstrap-filestyle').find(':text').attr('placeholder', b);
}
function $_dwnldLink(path,id,cls){
	if(path === null){
		
	}
	else if(path.includes('/var/www/html/')){
		var pathToShow = path.replace('/var/www/html/','');
	}else{
		var pathToShow = path;
	}
	//var url = ("/home/dex/Project_Data/patient/"+appID+"/"+prop);
    var dwnldIcn = '<a class="linkCls" id="'+id+'" href="http://'+window.location.hostname+'/'+pathToShow+'" download>' +
        '<span class="glyphicon glyphicon-download-alt"></span></a>';
       // '<a id="hiddenHref-'+id+'" class="a-dis" href="/lending_kapitaltech/patient/download-pdf?appID='+appID+'&filename='+prop+'"></a>';
   // // console.log(dwnldIcn);
    $("."+cls).empty().append(dwnldIcn); 
}
function toasTr() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "100",
        "hideDuration": "100",
        "timeOut": "15000",
        "extendedTimeOut": "3500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
function $_fileArrList(filecountexist) {
	var arr = [];
	
	if(filecountexist > 0){
		if($('#uploadPanDsaId').val() != "") {
			arr.push(
					{
						  "documentId" : isNaN(parseInt($('#panTextHidId').text()))?0:(parseInt($('#panTextHidId').text())),
						  "documentname" : $('#panNmHidId').text(),
						  "documentpath" : $('#panPthHidId').text(),
						  "updateddate" : $('#panUptDtHidId').text()
						}		
			);
		}
		if($('#uploadAdhDsaId').val() != "") {
			arr.push(
					{
						"documentId" : isNaN(parseInt($('#aadhaarTextHidId').text()))?0:(parseInt($('#aadhaarTextHidId').text())),
						"documentname" : $('#aadhaarNmHidId').text(),
						 "documentpath" : $('#aadhaarPthHidId').text(),
						  "updateddate" : $('#aadhaarUptDtHidId').text()
					}	
			);
		}
		if($('#uploadShopActId').val() != "") {
			arr.push(
					{
						  "documentId" : isNaN(parseInt($('#shpActTextHidId').text()))?0:(parseInt($('#shpActTextHidId').text())),
						  "documentname" : $('#shpActNmHidId').text(),
						  "documentpath" : $('#shpActPthHidId').text(),
						  "updateddate" : $('#shpActUptDtHidId').text()
					}		
			);
		}
		if($('#uploadCnclChckId').val() != "") {
			arr.push(
					{
						  "documentId" : isNaN(parseInt($('#canChckTextHidId').text()))?0:(parseInt($('#canChckTextHidId').text())),
						  "documentname" : $('#canChckNmHidId').text(),
						  "documentpath" : $('#canChckPthHidId').text(),
						  "updateddate" : $('#canChckUptDtHidId').text()
					}	
			);
		}
		if($('#uploadAgrmntId').val() != "") {
			arr.push(
					{
						   "documentId" : isNaN(parseInt($('#agrmntTextHidId').text()))?0:(parseInt($('#agrmntTextHidId').text())),
						   "documentname" : $('#agrmntNmHidId').text(),
						   "documentpath" : $('#agrmntPthHidId').text(),
						   "updateddate" : $('#agrmntUptDtHidId').text()
					}		
			);
		}
	}
	
	if($.isEmptyObject(arr)) {
		return null;
	}else{
		return arr;
	}
}
 
function $_imeiCheck(e,_this){
	e = e || window.event;
    var key = e.which || e.keyCode; // keyCode detection
    var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection
    
    if( $(_this).val().length == 15 && ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || (e.keyCode >= 65 && e.keyCode <= 90) || (key == 86 && ctrl)) 
    ){	
    	var existIMEI = _this.id.split('_')[0]
    	if($.isNumeric($(_this).val())){
//    		if($('#iMEINO1_Id').val() != $('#iMEINO2_Id').val()){
    	  		requestData(API_IMEI_CHECK+$(_this).val(),'GET').done(function(reply){    	
    	  			if($(_this).val() != eval(existIMEI)){
    	  				if(reply.result=='success'){
    		    			Command: toastr["success"]("IMEI No. Available");
    		    		}else if(reply.result=='failure'){
    		    			Command: toastr["warning"]("IMEI No. <b>"+$(_this).val()+"</b> is already active for another user");
    		    			$(_this).val('');
    		    		}else{
    		    			Command: toastr["error"]("Some error occured");
    		    		}
    	  			}else{
    	  				Command: toastr["success"]("IMEI No. Available");
		    		}
    		    		
    	  		});
//        	}else{
//        		Command: toastr["error"]("Please enter different IMEI numbers!");
//        		$(_this).val('')
//        	}
    	}else{
    		Command: toastr["error"]("Please enter numbers only!");
		$(_this).val('')
	}
    	

    }
    
}