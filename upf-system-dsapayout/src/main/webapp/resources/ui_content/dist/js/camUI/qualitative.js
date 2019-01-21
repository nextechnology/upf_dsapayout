
function $qualitative_js(mainTabChild){
	//$('#'+mainTabChild).empty();
	//$('#qualitativeFormToCloneId').show();
	//qualitativeTab 
	if(localStorage.getItem("qualitative") == 0) {
		requestData(API_Q_GET+$('#ClientSessionId').val(), "GET", '').done(function (a) {
			localStorage.setItem("qualitative",1);
			// console.log('qualitaive-',a);
			$('#qualitativeHidid').text(a.qualitativeid);
			$('#residenceHidId').text(a.residenceId);
			$('#familyHidId').text(a.familyId);
			$('#officestatusHidId').text(a.officestatusId);
			$('#cibilstatusHidId').text(a.cibilstatusId);
			$('#duedeligenceHidId').text(a.duedeligenceId);
			$('#onlineverificationHidId').text(a.onlineverificationId);
			$('#fieldverificationHidId').text(a.fieldverificationId);
			$('#businessdetailHidId').text(a.businessdetailId);
			$('#businessvintageHidId').text(a.businessvintageId);
			$('#manufacturingdetailHidId').text(a.manufacturingdetailId);
			 	
			$('#custPro').val(a.customerProfile);
			$('#losSnapId').attr('disabled',true);
			$('#losSnapId').val($('#losSessionId').val());
			$('#custProfileCmmnt').val(a.customercpcomment);
			$('#resStat').val(a.residenceStatus);
			$('#typeOfRes').val(a.typeofResidence);
			$('#geoLocal').val(a.geoLocality3);
			$('#resStatCmmnt').val(a.reidencestatuscomment);
			$('#typeOfResdCmmnt').val(a.typeofresidencecomment);
			$('#geoLocalCmnt').val(a.geolocalitycomment);
	
			$('#marStat').val(a.maritalStatus);
			$('#age').val(a.age==0?'':a.age);
			$('#noOfChild').val(a.noofChildren);
			$('#marStatCmnt').val(a.maritalstatuscomment);
			$('#ageCmnt').val(a.agecomment);
			$('#noOfChildCmnt').val(a.noofchildrencomment);
	
			$('#offStat').val(a.officeStatus);
			$('#offQlty').val(a.officeQuality);
			$('#offType').val(a.officeType);
			$('#noOfEmp').val($commaPut(a.noofEmployees));
			$('#offStatCmnt').val(a.officestatuscomment);
			$('#offQltyCmnt').val(a.officequalitycomment);
			$('#offTypeCmnt').val(a.officetypecomment);
			$('#noOfEmpCmnt').val(a.noofempcommentofficestatus);
	
			$('#constOfApp').val(a.constitutionofApplicant);
			$('#constOfAppCmnt').val(a.constitutionofapplcomment);
			$('#Screapp1Cmnt').val((a.cibilscore1comment));
			$('#trackApp1Cmnt').val(a.cibiltrack1comment);
			$('#Screapp2Cmnt').val(a.cibilscore2comment);
			$('#trackApp2Cmnt').val(a.cibiltrack2comment);
			$('#Screapp1').val((a.cibilscoreapplicant1=="NO-MATCH"?"":a.cibilscoreapplicant1));
			$('#trackApp1').val(a.cibiltrackapplicant1);
			$('#Screapp2').val((a.cibilscoreapplicant2=="NO-MATCH"?"":a.cibilscoreapplicant2));
			$('#trackApp2').val(a.cibiltrackapplicant2);
			$('#cibilVintageId').val(a.cibilvintage);
		    $('#cibilVintageCmnt').val(a.cibilvintagecomment);

	
			$('#dueDilig').val(a.zaubaCheck);
			$('#gglchck').val(a.googleCheck);
			$('#invchck').val(a.watchoutInvestorCheck);
			$('#dialCheck').val(a.justDialCheck);
			$('#zomatoChck').val(a.zomatoCheck);
			$('#dueDiligCmnt').val(a.zaubackcheckcomment);
			$('#gglchckCmnt').val(a.googlecheckcomment);
			$('#invchckCmnt').val(a.watchoutcheckcomment);
			$('#dialCheckCmnt').val(a.justdialcheckcomment);
			$('#zomatoChckCmnt').val(a.zomatocheckcomment)
	
			$('#truCallChck').val(a.trueCallerCheck);
			$('#panChck').val(a.pancard);
			$('#ownerDocs').val(a.registrationDocs);
			$('#ownerShipDocs').val(a.ownershipDocs);
			$('#truCallChckCmnt').val(a.truecallercomment);
			$('#panChckCmnt').val(a.pancardcomment);
			$('#ownerShipDocsCmnt').val(a.ownershipdoccomment);
			$('#ownerDocsCmnt').val(a.registrationdoccomment);
	
			$('#fvResidence').val(a.fieldVerificationResidence);
			$('#fvOffice').val(a.fieldVerificationOffice);
			$('#fvFactory').val(a.fieldVerificationFactory);
			$('#reportStat').val(a.fcurrcuReportStatus);
			$('#fvResidenceCmnt').val(a.residencecomment);
			$('#fvOfficeCmnt').val(a.officecomment);
			$('#fvFactoryCmnt').val(a.factorycomment);
			$('#reportStatCmnt').val(a.reportstatuscomment);
	
			$('#vintOnSameLoc').val(a.vintageOnsameLocation);
			$('#businessVintage').val(a.businessVintage);
			$('#genInBusiness').val(a.generationInBusiness);
			$('#vintOnSameLocCmnt').val(a.vintageonloccomment);
			$('#businessVintageCmnt').val(a.businessvintagecomment);
			$('#genInBusinessCmnt').val(a.generationinbusscomment);
	
			$('#totalNoOfCust').val($commaPut(a.totalnoofCustomer));
			$('#totalNoOfSupp').val($commaPut(a.totalnoofSupplier));
			$('#inventPrice').val((a.inventoryattimeofPD));
			$('#totalNoOfCustCmnt').val(a.totalcustcomment);
			$('#totalNoOfSuppCmnt').val(a.totalsupplcomment);
			$('#inventPriceCmnt').val(a.inventorypdcomment);
			$('#standOfLvngId').val(a.standardofliving);
			$('#standOfLvngCmnt').val(a.standardoflivingcomment);
	
			$('#FactLocation').val(a.factoryLocatedat);
			$('#FactArea').val($commaPut(a.factoryArea));
			$('#noOfEmpAndWrkrs').val($commaPut(a.nooffactoryEmployeesWorker));
			$('#costOfMachineries').val($commaPut(a.costofMachineriesInstalled));
			$('#totalCapOfProd').val($commaPut(a.totalCapacityaOfProduction));
			$('#currentUtiOfProd').val(parseFloat(a.currentUtilizationOfProductionCapacity).toFixed(2));
			$('#FactLocationCmnt').val(a.factorylocatedcomment);
			$('#FactAreaCmnt').val(a.factoryareacomment);
			$('#noOfEmpAndWrkrsCmnt').val(a.noofempcomment);
			$('#costOfMachineriesCmnt').val(a.costofmccomment);
			$('#totalCapOfProdCmnt').val(a.totalcapprodcomment);
			$('#currentUtiOfProdCmnt').val(a.currentutilcomment);
			//// console.log(a.networth[0].totalnetworth);
			
	//			// console.log('-',(!(a.networth[0] == undefined)),'-');
			var netWrthId1 = 0,majorCustId1 = 0,majorTCustId1 = 0;
			if(!(a.networth[0] == undefined))
			{
			$('#netWorthId').text(a.networth[0].totalnetworth);
				$(a.networth).each(function(k,v){++netWrthId1;
				//// console.log('networth id-',v.networthid);
				//// console.log(a.networth);
					netWrthId = netWrthId1;
					if(netWrthId1 == 1){
						$('#propType1').val(v.propertyType);
						$('#area1').val($commaPut(v.area));
						$('#locality1').val(v.locality);
						$('#marketValueNet1').val($commaPut(v.marketValuenetworth));
						$('#networthHidId1').text(v.networthid);
					}else{
						var tableNetWorth = '<tr id="networthRowId-'+netWrthId1+'" class="networthRowCls-'+netWrthId1+'" value="'+v.networthid+'">'+
						'<td style="display:none" id="networthHidId'+netWrthId1+'">'+v.networthid+'</td>'+
						'<td><select class="form-control" id="propType'+netWrthId1+'">'+
						'<option></option><option>Flat</option><option>Bunglow</option>'+
						'<option>Row House</option><option>Shop</option><option>Office</option>'+
						'<option>Godown</option><option>Factory</option><option>Land</option></select></td>'+
						'<td><input type="text" class="form-control a-right numberCls" id="area'+netWrthId1+'" value='+$commaPut(v.area)+'></td>'+
						'<td><input type="text" class="form-control" id="locality'+netWrthId1+'" value='+v.locality+'></td>'+
						'<td><input type="text" class="form-control netWorthCls a-right numberCls" colspan="2" id="marketValueNet'+netWrthId1+'" value='+$commaPut(v.marketValuenetworth)+'></td>'+
						'<td><button type="button" class="btn btn-danger btn-sm networthDelCls" id="btnDelNetworth'+netWrthId1+'">'+
						'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
						//$('#propType'+netWrthId1).val(v.propertyType);
						
					}
						$('#bodyNetWorth').append(tableNetWorth);
						$('#losSnapId').attr('disabled',true);
						var temp2=0;
						for(j=1;j<=netWrthId1;j++){
							var temp = parseInt($comRem($("#marketValueNet"+j).val()));
							if(temp == "" || isNaN(temp)){
						 		temp=0;
							} 
							temp2 = parseInt(temp2)+parseInt(temp);
							
						}
						$("#netWorthId").text($commaPut(temp2));
						var i=1;
					//	// console.log('networth-',netWrthId);
						if(i<=netWrthId){
						$(a.networth).each(function(k,v){
							if(i==1){
								$("#propType1").val(v.propertyType);
								//// console.log('prop1-',v.propertyType);
								}
							else{
								$("#propType"+i).val(v.propertyType);
								//// console.log('prop-',v.propertyType);
								}
							i++;
							});
					}

				});
		}
			if(!(a.majorcustomer[0] == undefined)){
				$(a.majorcustomer).each(function(k,v){++majorCustId1;
				majorCustId = majorCustId1;
				if(majorCustId1 == 1){
					$('#perOfConcQual-1').val(parseFloat(v.pconcentration).toFixed(2));
					$('#cpnQual-1').val(v.contactperson);
					$('#CommentQual-1').val(v.comment);
					$('#desigQual-1').val(v.designation);
					$('#mobQual-1').val((v.mobileno == 0?'':v.mobileno));
					$('#custName-1').val(v.customername);
					$('#mjcustomerHidId1').text(v.majorcustomerid);
					
				}else{
					var tableMajorCust = '<tr id="MjCustRowId-'+majorCustId1+'" class="MjCustRowCls-'+majorCustId1+'">'+
					'<td id="mjcustomerHidId'+majorCustId1+'" class="a-hide">'+v.majorcustomerid+'</td>'+
					'<td><input type="text" class="form-control" id="custName-'+majorCustId1+'" value='+v.customername+'></td>'+
					'<td class="input-group"><input type="text" class="form-control a-right" id="perOfConcQual-'+majorCustId1+'" pattern="[0-9]+(\.[0-9]{0,2})?" value='+parseFloat(v.pconcentration).toFixed(2)+'>'+
					'<span class="input-group-addon">%</span></td>'+
					'<td><input type="text" class="form-control" id="cpnQual-'+majorCustId1+'"  value='+v.contactperson+'></td>'+
					'<td><input type="text" class="form-control" id="desigQual-'+majorCustId1+'"  value='+v.designation+'></td>'+
					'<td><input type="text" class="form-control a-right" id="mobQual-'+majorCustId1+'"  value="'+(v.mobileno == 0?'':v.mobileno)+'" pattern="[0-9]{10}"></td>'+
					'<td><textarea rows="1" class="form-control" id="CommentQual-'+majorCustId1+'"  value='+v.comment+'></textarea></td>'+
					'<td><button type="button" class="btn btn-danger btn-sm majorCustDelCls" id="btnDelMajCust-'+majorCustId1+'">'+
					'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
					}
				
				$('#bodyMajorCust').append(tableMajorCust);									
			});
		}
			console.log(a.majorsupplier[0]);
			if((a.majorsupplier[0] !== undefined)){
				$(a.majorsupplier).each(function(k,v){++majorTCustId1;
				majorTCustId = majorTCustId1;
				if(majorTCustId1 == 1){
					$('#perOfConcTQual-1').val(parseFloat(v.pconcentration).toFixed(2));
					$('#cpnTQual-1').val(v.contactperson);
					$('#CommentTQual-1').val(v.comment);
					$('#desigTQual-1').val(v.designation);
					$('#mobTQual-1').val((v.mobileno == 0?'':v.mobileno));
					$('#supTName-1').val(v.suppliername);
					$('#majorsupplierqtHidid1').text(v.majorsupplierid);
				}else{
					var tableMajorTCust = '<tr id="mjSupRowId-'+majorTCustId1+'" class="mjSupRowCls-'+majorTCustId1+'">'+
					'<td id="majorsupplierqtHidid'+majorTCustId1+'" class="a-hide">'+v.majorsupplierid+'</td>'+
					'<td><input type="text" class="form-control" id="supTName-'+majorTCustId1+'" value='+v.suppliername+'></td>'+
					'<td class="input-group"><input type="text" class="form-control a-right" pattern="[0-9]+(\.[0-9]{0,2})?" id="perOfConcTQual-'+majorTCustId1+'" value='+parseFloat(v.pconcentration).toFixed(2)+'>'+
					'<span class="input-group-addon">%</span></td>'+
					'<td><input type="text" class="form-control" id="cpnTQual-'+majorTCustId1+'" value='+v.contactperson+'></td>'+
					'<td><input type="text" class="form-control" id="desigTQual-'+majorTCustId1+'" value='+v.designation+'></td>'+
					'<td><input type="text" class="form-control a-right" id="mobTQual-'+majorTCustId1+'" value="'+(v.mobileno == 0?'':v.mobileno)+'" pattern="[0-9]{10}"></td>'+
					'<td><textarea rows="1" class="form-control" id="CommentTQual-'+majorTCustId1+'" value='+v.comment+'></textarea></td>'+
					'<td><button type="button" class="btn btn-danger btn-sm MajSupDelCls" id="btnDelMajSup-'+majorTCustId1+'">'+
					'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
					}
				
				$('#bodyMajorTCust').append(tableMajorTCust);	
			});
		}
			requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
				$(reply.accessList).each(function(k,v){
				if(v.QUALITATIVE == "READ ONLY" || v.QUALITATIVE == "READONLY" || v.QUALITATIVE == "READ"){
					$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select,#qualitativeTab textarea,#qualitativeTab button').prop('disabled', true);
					$('#losSnapId').attr('disabled',true);
				}else if(v.QUALITATIVE == "WRITE" || v.QUALITATIVE == "VIEW ALL"){
					$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select, #qualitativeTab textarea,#qualitativeTab button').prop('disabled', false);
					$('#losSnapId').attr('disabled',true);
				}else{
					$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select, #qualitativeTab textarea,#qualitativeTab button').prop('disabled', false);
					$('#losSnapId').attr('disabled',true);
				}
				});
				$_qualDisFields();
			});
});$_resizeStat();
	}else{
		$_qualDisFields();
	}
} // end for $qualitative_js();
function $_qualDisFields() {
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select,#qualitativeTab textarea,#qualitativeTab button').prop('disabled', true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select,#qualitativeTab textarea,#qualitativeTab button').prop('disabled', false);
		$('#losSnapId').attr('disabled',true);
	}else if(localStorage.getItem("changedTab") != "Qualitative") {
		$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select,#qualitativeTab textarea,#qualitativeTab button').prop('disabled', true);
	}else{
		$('#btnDummyQualitative,#qualitativeTab input, #qualitativeTab select,#qualitativeTab textarea,#qualitativeTab button').prop('disabled', false);
		$('#losSnapId').attr('disabled',true);
	}
}
$(document).ready(function(){
	$(document).on('click', '#btnAddNetworth', function(){++netWrthId;
		var tableNetWorth = '<tr id="networthRowId-'+netWrthId+'" class="networthRowCls-'+netWrthId+'">'+
			'<td><select class="form-control" id="propType'+netWrthId+'">'+
				'<option></option><option>Flat</option>'+
				'<option>Bunglow</option><option>Row House</option>'+
				'<option>Shop</option><option>Office</option>'+
				'<option>Godown</option><option>Factory</option>'+
				'<option>Land</option></select></td>'+
			'<td><input type="text" class="form-control a-right numberCls" id="area'+netWrthId+'"></td>'+
			'<td><input type="text" class="form-control" id="locality'+netWrthId+'"></td>'+
			'<td><input type="text" class="form-control netWorthCls a-right numberCls" id="marketValueNet'+netWrthId+'"></td>'+
			'<td><button type="button" class="btn btn-danger btn-sm networthDelCls" id="btnDelNetworth">'+
			'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
		$('#bodyNetWorth').append(tableNetWorth);
	});
	$(document).on('keyup','.netWorthCls', function(){
		var temp2=0;
		for(j=1;j<=netWrthId;j++){
			var temp = parseInt($comRem($("#marketValueNet"+j).val()));
			if(temp == "" || isNaN(temp)){
		 		temp=0;
			} 
			temp2 = parseInt(temp2)+parseInt(temp);
			
		}
		$("#netWorthId").text($commaPut(temp2));
	});
	$(document).on('click', '#btnAddMajorCust', function(){
	++majorCustId;
	var tableMajorCust = '<tr  id="MjCustRowId-'+majorCustId+'" class="MjCustRowCls-'+majorCustId+'">'+
	'<td><input type="text" class="form-control" id="custName-'+majorCustId+'"></td>'+
	'<td class="input-group"><input type="text" class="form-control a-right" pattern="[0-9]+(\.[0-9]{0,2})?" id="perOfConcQual-'+majorCustId+'">'+
	'<span class="input-group-addon">%</span></td>'+
	'<td><input type="text" class="form-control" id="cpnQual-'+majorCustId+'"></td>'+
	'<td><input type="text" class="form-control" id="desigQual-'+majorCustId+'"></td>'+
	'<td><input type="text" class="form-control a-right" id="mobQual-'+majorCustId+'" pattern="[0-9]{10}"></td>'+
	'<td><textarea rows="1" class="form-control" id="CommentQual-'+majorCustId+'"></textarea></td>'+
	'<td><button type="button" class="btn btn-danger btn-sm majorCustDelCls" id="btnDelMajCust-'+majorCustId+'">'+
	'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
	$('#bodyMajorCust').append(tableMajorCust);
	});
	
	$(document).on('click', '#btnAddMajorCustTQual', function(){
	++majorTCustId;
	var tableMajorTCust = '<tr id="mjSupRowId-'+majorTCustId+'" class="mjSupRowCls-'+majorTCustId+'">'+
	'<td><input type="text" class="form-control" id="supTName-'+majorTCustId+'"></td>'+
	'<td class="input-group"><input type="text" class="form-control a-right" pattern="[0-9]+(\.[0-9]{0,2})?" id="perOfConcTQual-'+majorTCustId+'">'+
	'<span class="input-group-addon">%</span></td>'+
	'<td><input type="text" class="form-control" id="cpnTQual-'+majorTCustId+'"></td>'+
	'<td><input type="text" class="form-control" id="desigTQual-'+majorTCustId+'"></td>'+
	'<td><input type="text" class="form-control a-right" id="mobTQual-'+majorTCustId+'" pattern="[0-9]{10}"></td>'+
	'<td><textarea rows="1" class="form-control" id="CommentTQual-'+majorTCustId+'"></textarea></td>'+
	'<td><button type="button" class="btn btn-danger btn-sm MajSupDelCls" id="btnDelMajSup-'+majorTCustId+'">'+
	'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
	
	$('#bodyMajorTCust').append(tableMajorTCust);
	});
	/*$(document).on('keyup', '.majorCustCls', function(){var temp2=0;
		for(j=1;j<=majorCustId;j++){
			var temp = parseInt($("#marketValueCust"+j).val());
			if(temp == "" || isNaN(temp)){
				temp=0;
			}
			temp2 = parseInt(temp2)+parseInt(temp);
		}
		$("#majorCustId").val(temp2);
	});
	*/


	$(document).on('click', '#btnDummyQualitative', function(){
		$('#btnDummyQualitative').unbind('click');
		var rowCountNetworth = $('#bodyNetWorth tr').length;
		var rowCountMajCust = $('#bodyMajorCust tr').length;
		var rowCountMajSup = $('#bodyMajorTCust tr').length;
	//	// console.log('rowCountNetworth-',rowCountNetworth);
	//	// console.log('rowCountMajCust-',rowCountMajCust);
	//	// console.log('rowCountMajSup-',rowCountMajSup);
		
		//if(rowCountNetworth == 1 || rowCountMajCust == 1 || rowCountMajSup == 1 ){
				//alert('You must have atleast one row');
		//}else{
			if($formValid("qualitativeTable") && qual_valid==0){
				//++qual_valid;
		//if(1 == 1){
			$('#btnDummyQualitative').prop('disabled',true);
				var formData = {
						"application_id" : $('#losSnapId').val(),
						"customerProfile": $('#custPro').val(),
						"clientid": parseInt($('#ClientSessionId').val()),
						"customercpcomment": $('#custProfileCmmnt').val(),
						"qualitativeid": isNaN(parseInt($('#qualitativeHidid').text()))?0:parseInt($('#qualitativeHidid').text()),
						"residencestatus": {
							"residenceId": isNaN(parseInt($('#residenceHidId').text()))?0:parseInt($('#residenceHidId').text()),
							"residenceStatus":$('#resStat').val(),
							"typeofResidence": $('#typeOfRes').val(),
							"geoLocality3": $('#geoLocal').val(),
							"reidencestatuscomment": $('#resStatCmmnt').val(),
							"typeofresidencecomment": $('#typeOfResdCmmnt').val(),
							"geolocalitycomment":$('#geoLocalCmnt').val()
						},
						"familystatus": {
							"familyId": isNaN(parseInt($('#familyHidId').text()))?0:parseInt($('#familyHidId').text()),
							"maritalStatus": $('#marStat').val(),
							"age": isNaN( parseInt($('#age').val()))?0: parseInt($('#age').val()),
							"noofChildren": $('#noOfChild').val(),
							"maritalstatuscomment":$('#marStatCmnt').val(),
							"agecomment":  $('#ageCmnt').val(),
							"noofchildrencomment": $('#noOfChildCmnt').val()
						},
						"officestatus": {
							"officestatusId": isNaN(parseInt($('#officestatusHidId').text()))?0:parseInt($('#officestatusHidId').text()),
							"officeStatus":  $('#offStat').val(),
							"officeQuality": $('#offQlty').val(),
							"officeType": $('#offType').val(),
							"noofEmployees":  isNaN(parseInt($comRem($('#noOfEmp').val())))?0:parseInt($comRem($('#noOfEmp').val())),
							"officestatuscomment":  $('#offStatCmnt').val(),
							"officequalitycomment": $('#offQltyCmnt').val(),
							"officetypecomment":$('#offTypeCmnt').val(),
							"noofempcomment": $('#noOfEmpCmnt').val()
						},
						"cibilstatus": {
							"cibilstatusId": isNaN(parseInt($('#cibilstatusHidId').text()))?0:parseInt($('#cibilstatusHidId').text()),
							"constitutionofApplicant": $('#constOfApp').val(),
							"constitutionofapplcomment": $('#constOfAppCmnt').val(),
							"cibilscore1comment": $('#Screapp1Cmnt').val(),                         
							"cibiltrack1comment": $('#trackApp1Cmnt').val(),
							"cibilscore2comment":  $('#Screapp2Cmnt').val(),
							"cibiltrack2comment": $('#trackApp2Cmnt').val(),
							"cibilscoreapplicant1": $('#Screapp1').val(),
							"cibiltrackapplicant1": $('#trackApp1').val(),
							"cibilscoreapplicant2": $('#Screapp2').val(),
							"cibiltrackapplicant2": $('#trackApp2').val(),
							"cibilvintage" : $('#cibilVintageId').val(),
							"cibilvintagecomment" : $('#cibilVintageCmnt').val()
						},
						"duedeligence": {
							"duedeligenceId": isNaN(parseInt($('#duedeligenceHidId').text()))?0:parseInt($('#duedeligenceHidId').text()),
							"zaubaCheck":$('#dueDilig').val(),
							"googleCheck":  $('#gglchck').val(),
							"watchoutInvestorCheck": $('#invchck').val(),
							"justDialCheck": $('#dialCheck').val(),
							"zomatoCheck": $('#zomatoChck').val(),
							"zaubackcheckcomment": $('#dueDiligCmnt').val(),
							"googlecheckcomment": $('#gglchckCmnt').val(),
							"watchoutcheckcomment": $('#invchckCmnt').val(),
							"justdialcheckcomment":$('#dialCheckCmnt').val(),
							"zomatocheckcomment": $('#zomatoChckCmnt').val()
						},
						"onlineverification": {
							"onlineverificationId": isNaN(parseInt($('#onlineverificationHidId').text()))?0:parseInt($('#onlineverificationHidId').text()),
							"trueCallerCheck": $('#truCallChck').val(),
							"pancard":  $('#panChck').val(),
							"ownershipDocs": $('#ownerShipDocs').val(),
							"registrationDocs": $('#ownerDocs').val(),
							"truecallercomment": $('#truCallChckCmnt').val(),
							"pancardcomment": $('#panChckCmnt').val(),
							"ownershipdoccomment": $('#ownerShipDocsCmnt').val(),
							"registrationdoccomment": $('#ownerDocsCmnt').val()
						},
						"fieldverification": {
							"fieldverificationId": isNaN(parseInt($('#fieldverificationHidId').text()))?0:parseInt($('#fieldverificationHidId').text()),
							"fieldVerificationResidence": $('#fvResidence').val(),
							"fieldVerificationOffice":  $('#fvOffice').val(),
							"fieldVerificationFactory":  $('#fvFactory').val(),
							"fcurrcuReportStatus": $('#reportStat').val(),
							"residencecomment": $('#fvResidenceCmnt').val(),
							"officecomment": $('#fvOfficeCmnt').val(),
							"factorycomment":$('#fvFactoryCmnt').val(),
							"reportstatuscomment":$('#reportStatCmnt').val()
						},
						"businessvintage": {
							"businessvintageId": isNaN(parseInt($('#businessvintageHidId').text()))?0:parseInt($('#businessvintageHidId').text()),
							"vintageOnsameLocation": $('#vintOnSameLoc').val(),
							"businessVintage":$('#businessVintage').val(),
							"generationInBusiness": $('#genInBusiness').val(),
							"vintageonloccomment": $('#vintOnSameLocCmnt').val(),
							"businessvintagecomment":  $('#businessVintageCmnt').val(),
							"generationinbusscomment": $('#genInBusinessCmnt').val()
						},
						"businessdetails": {
							"businessdetailId": isNaN(parseInt($('#businessdetailHidId').text()))?0:parseInt($('#businessdetailHidId').text()),
				 			"totalnoofCustomer":isNaN(parseInt($comRem($('#totalNoOfCust').val())))?0:parseInt($comRem($('#totalNoOfCust').val())),
							"totalnoofSupplier": isNaN(parseInt($comRem($('#totalNoOfSupp').val())))?0:parseInt($comRem($('#totalNoOfSupp').val())),
							"inventoryattimeofPD": $('#inventPrice').val(),
							"totalcustcomment": $('#totalNoOfCustCmnt').val(),
							"totalsupplcomment":$('#totalNoOfSuppCmnt').val(),
							"inventorypdcomment": $('#inventPriceCmnt').val(),
							"standardofliving" : $('#standOfLvngId').val(),
							"standardoflivingcomment" : $('#standOfLvngCmnt').val()
						},
						"manufacility": { 
							"manufacturingdetailId": isNaN(parseInt($('#manufacturingdetailHidId').text()))?0:parseInt($('#manufacturingdetailHidId').text()),
							"factoryLocatedat":  $('#FactLocation').val(),
							"factoryArea": isNaN(parseInt($comRem($('#FactArea').val())))?0:parseInt($comRem($('#FactArea').val())),
							"nooffactoryEmployeesWorker": isNaN(parseInt($comRem($('#noOfEmpAndWrkrs').val())))?0:parseInt($comRem($('#noOfEmpAndWrkrs').val())),
							"costofMachineriesInstalled": isNaN(parseInt($comRem($('#costOfMachineries').val())))?0:parseInt($comRem($('#costOfMachineries').val())),
							"totalCapacityaOfProduction": isNaN(parseInt($comRem($('#totalCapOfProd').val())))?0: parseInt($comRem($('#totalCapOfProd').val())),
							"currentUtilizationOfProductionCapacity":isNaN(parseFloat($('#currentUtiOfProd').val()).toFixed(2))?0:parseFloat($('#currentUtiOfProd').val()),
							"factorylocatedcomment":  $('#FactLocationCmnt').val(),
							"factoryareacomment":  $('#FactAreaCmnt').val(),
							"noofempcomment": $('#noOfEmpAndWrkrsCmnt').val(),
							"costofmccomment": $('#costOfMachineriesCmnt').val(),
							"totalcapprodcomment":$('#totalCapOfProdCmnt').val(),
							"currentutilcomment":  $('#currentUtiOfProdCmnt').val()
						},
							"majorsupplier": getRowData3(majorTCustId),
							"majorcustomer": getRowData2(majorCustId),
							"networth": getRowData(netWrthId)
					}// END FOR var formData = //
				//console.log('formData',formData);	
				//console.log('majorTCustId-',majorTCustId);
				//console.log('majorCustId-',majorCustId);
				//console.log('netWrthId-',netWrthId);
			requestData(API_Q_POST, "POST", JSON.stringify(formData)).done(function (reply) {
				if(reply.reply == 'successqualitative'){
					alert("Data Successfully saved.");
			window.location.reload(); 
				}else{
					$('#btnDummyQualitative').prop('disabled',false);
				}
			}); 
			
		}//} // END FOR IF CONDITION
	}); // END FOR btnSubmit qualitative
}); // end for $(document).ready();