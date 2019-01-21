$(function(){
	$(document).on('keyup','.totCalVATCls',function(event){
		if(event.currentTarget.id.split("-")[0] === "salesToasPerVatItrTextId"){
			totalItrVatCal(12,'salesToasPerVatItrTextId-','salesTtlsForToasPerVatItr','vatCstStTtlsForToasPerVatItr','vatCstStTtlsForToasPerVatItrFinal');
			$_qrtrBiCal();
		}else {
			totalItrVatCal(12,'vatCstStToasPerVatItrId-','vatCstStTtlsForToasPerVatItr','salesTtlsForToasPerVatItr','vatCstStTtlsForToasPerVatItrFinal');
			$_qrtrBiCal();
		}
	});
/*	$(document).on('keyup','.totCalQuarterVATCls',function(){
		totalItrVatCal(4,'quarterVatCstStItrId-','VatCstStTtlsForQuartersItrId','salesTtlsForQuartersItrId','VatCstStTtlsForQuartersItrIdFinal');
	});
	$(document).on('keyup','.totCalBiannualVATCls',function(){
		totalItrVatCal(2,'biannualVatCstStItrId-','VatCstStTtlsForBiannualId','salesTtlsForBiannualItrId','VatCstStTtlsForBiannualIdFinal');
	});*/
	
});
function totalItrVatCal(forLength,valId,totalValId,salesTtlId,finalTtlId){
	var totalMnths = 0;
	var count = 0;
	
	for(i=1;i<=forLength;i++){
		if($('#'+valId+i).val()!=0){
			count++;
		}
	}
	
	for(i=1;i<=forLength;i++){
		//totalMnths = parseFloat(totalMnths) + parseFloat($_NaNCheck(valId+i,'val'));
		totalMnths = (parseFloat((parseFloat(totalMnths) + parseFloat($_NaNCheck(valId+i,'val'))/count*forLength)).toFixed(0));
	}
	
	//console.log(count);
	$('#'+totalValId).text($commaPut(isNaN(parseInt(totalMnths))?0:totalMnths));
	
	if(valId == "salesToasPerVatItrTextId-" || valId == "vatCstStToasPerVatItrId-") {
		$('#'+finalTtlId).text($commaPut(parseFloat(parseFloat($_NaNCheck('salesTtlsForToasPerVatItr','text')) - parseFloat($_NaNCheck('vatCstStTtlsForToasPerVatItr','text'))).toFixed(0)));
	}else {
		$('#'+finalTtlId).text($commaPut(parseFloat(parseFloat($_NaNCheck(salesTtlId,'text')) - parseFloat($_NaNCheck(totalValId,'text'))).toFixed(0)));
	}
	
}
function $_puttingValues(monthsArr,yearArr) {
	$(monthsArr).each(function(k,v){
		if(k > 0) {
			$('#monthsToasPerVatId'+(k+1)).text(v);
		}
	});
	$(yearArr).each(function(k,v){
		if(k > 0) {
			$('#yearToasPerVatId'+(k+1)).text(v);
		}
	}); 
}
function $_mnthCal(_this) {
	
	var mnthLength = $('#monthsToasPerVatId1').val().length;
	var monthValue = $('#monthsToasPerVatId1').val().toUpperCase();
	var yearLength = $('#yearToasPerVatId1').val().length;
	var yearValue = $('#yearToasPerVatId1').val();
	var monthsArr= [];
	var yearArr =  [];
	if(yearLength == 2 && mnthLength ==3) {
		
		switch(monthValue) {
		case "JAN" : 
			monthsArr.push("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
			for(i=0;i<12;i++) {
				yearArr.push(yearValue);
			}
			$_puttingValues(monthsArr,yearArr);
			break;
			
		case "FEB" : 
			monthsArr.push("Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan");
			for(i=0;i<12;i++) {
				if(i <= 10) {
					yearArr.push(yearValue);
				}else{
					yearArr.push(parseInt(yearValue)+1);
				}
			}
			$_puttingValues(monthsArr,yearArr);
			break;
			
			case "MAR" : 
			monthsArr.push("Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb");
			for(i=0;i<12;i++) {
				if(i <= 9) {
					yearArr.push(yearValue);
				}else{
					yearArr.push(parseInt(yearValue)+1);
				}
			}
			$_puttingValues(monthsArr,yearArr);
			break;
			
			
			case "APR" : 
				monthsArr.push("Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar");
				for(i=0;i<12;i++) {
					if(i <= 8) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "MAY" : 
				monthsArr.push("May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr");
				for(i=0;i<12;i++) {
					if(i <= 7) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "JUN" : 
				monthsArr.push("Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May");
				for(i=0;i<12;i++) {
					if(i <= 6) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "JUL" : 
				monthsArr.push("Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun");
				for(i=0;i<12;i++) {
					if(i <= 5) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "AUG" : 
				monthsArr.push("Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul");
				for(i=0;i<12;i++) {
					if(i <= 4) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "SEP" : 
				monthsArr.push("Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug");
				for(i=0;i<12;i++) {
					if(i <= 3) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "OCT" : 
				monthsArr.push("Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep");
				for(i=0;i<12;i++) {
					if(i <= 2) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "NOV" : 
				monthsArr.push("Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct");
				for(i=0;i<12;i++) {
					if(i <= 1) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
				
			case "DEC" : 
				monthsArr.push("Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov");
				for(i=0;i<12;i++) {
					if(i <= 0) {
						yearArr.push(yearValue);
					}else{
						yearArr.push(parseInt(yearValue)+1);
					}
				}
				$_puttingValues(monthsArr,yearArr);
				break;
			default:
		        alert("Please enter valid month and year");
		} // end of switch
		$_qrtrBiCal();
	} // end of if
}

function $_qrtrBiCal() {
	
	var Q1Sales = 0,
	Q2Sales = 0,
	Q3Sales = 0,
	Q4Sales = 0,
	B1Sales = 0,
	B2Sales = 0;
	
	var Q1Paid = 0,
	Q2Paid = 0,
	Q3Paid = 0,
	Q4Paid = 0,
	B1Paid = 0,
	B2Paid = 0;
	
	var count = 0;
	for(i=1;i<=12;i++) {
		count++;
		if(i == 1) {
			var tblMnth = $('#monthsToasPerVatId'+i).val().toUpperCase();
		}else {
			var tblMnth = $('#monthsToasPerVatId'+i).text().toUpperCase();
		}
		var salesValue = $_NaNCheck('salesToasPerVatItrTextId-'+i,'val');
		var paidValue = $_NaNCheck('vatCstStToasPerVatItrId-'+i,'val');
		
		if(tblMnth == "APR" || tblMnth == "MAY" || tblMnth == "JUN")  {
			Q1Sales = Q1Sales +  parseInt(salesValue);
			B1Sales = B1Sales + parseInt(salesValue);
			
			Q1Paid = Q1Paid + parseInt(paidValue);
			B1Paid = B1Paid + parseInt(paidValue);
		}
		
		if(tblMnth == "JUL" || tblMnth == "AUG" || tblMnth == "SEP") {
			Q2Sales = Q2Sales + parseInt(salesValue);
			B1Sales = B1Sales + parseInt(salesValue);
			
			Q2Paid = Q2Paid + parseInt(paidValue);
			B1Paid = B1Paid + parseInt(paidValue);
		}
		
		if(tblMnth == "OCT" || tblMnth == "NOV" || tblMnth == "DEC") {
			Q3Sales = Q3Sales + parseInt(salesValue);
			B2Sales = B2Sales + parseInt(salesValue);
			
			Q3Paid = Q3Paid + parseInt(paidValue);
			B2Paid = B2Paid + parseInt(paidValue);
		} 

		if(tblMnth == "JAN" || tblMnth == "FEB" || tblMnth == "MAR") {
			Q4Sales = Q4Sales + parseInt(salesValue);
			B2Sales = B2Sales + parseInt(salesValue);
			
			Q4Paid = Q4Paid + parseInt(paidValue);
			B2Paid = B2Paid + parseInt(paidValue);
			
		}
}
	if(count == 12) {
		$('#quartersSalesItrId-1').text($commaPut(Q1Sales));
		$('#quartersSalesItrId-2').text($commaPut(Q2Sales));
		$('#quartersSalesItrId-3').text($commaPut(Q3Sales));
		$('#quartersSalesItrId-4').text($commaPut(Q4Sales));
		
		$('#salesBiannualItrId-1').text($commaPut(B1Sales));
		$('#salesBiannualItrId-2').text($commaPut(B2Sales));
		
		$('#quarterVatCstStItrId-1').text($commaPut(Q1Paid));
		$('#quarterVatCstStItrId-2').text($commaPut(Q2Paid));
		$('#quarterVatCstStItrId-3').text($commaPut(Q3Paid));
		$('#quarterVatCstStItrId-4').text($commaPut(Q4Paid));
		
		$('#biannualVatCstStItrId-1').text($commaPut(B1Paid));
		$('#biannualVatCstStItrId-2').text($commaPut(B2Paid));
		
		
		$('#salesTtlsForQuartersItrId').text(Q1Sales + Q2Sales + Q3Sales + Q4Sales);
		$('#VatCstStTtlsForQuartersItrId').text(Q1Paid + Q2Paid + Q3Paid + Q4Paid);
		$('#VatCstStTtlsForQuartersItrIdFinal').text($_NaNCheck('salesTtlsForQuartersItrId','tex') - $_NaNCheck('VatCstStTtlsForQuartersItrId','tex'));
		
		$('#salesTtlsForBiannualItrId').text(B1Sales + B2Sales);
		$('#VatCstStTtlsForBiannualId').text(B1Paid + B2Paid);
		$('#VatCstStTtlsForBiannualIdFinal').text($_NaNCheck('salesTtlsForBiannualItrId','tex') - $_NaNCheck('VatCstStTtlsForBiannualId','tex'));
	}
	
}
function $itr_js(API_IT_GET_2){
	//salesItrCol4Id
	// console.log('id-',$('#searchBoxId').val());
	requestData(API_IT_GET_2+$('#searchBoxId').val(), "GET", '').done(function(a){
		localStorage.setItem("itr",1);
		$('#itridHid').text(a.itrid);
		
		//particularitr
	//	$('#topdebtorsidHid').text(a.particularitr.topdebtorid.topdebtorsid);
	//	$('#statutaryidHid').text(a.particularitr.statuaryid.statutaryid);
	//	$('#solvencyratiosidHid').text(a.particularitr.solvencyid.solvencyratiosid);
	//	$('#turnoveridHid').text(a.particularitr.turnoverid.turnoverid);
		  
		// assetitr
	//	$('#assetidHid').text(a.assetitr.assetid);
	//	$('#currentassetidHid').text(a.assetitr.currentassetid.currentassetid);
	//	$('#fixedassetidHid').text(a.assetitr.fixedassetid.fixedassetid);
	//	$('#investmentidHid').text(a.assetitr.investmentitrid.investmentid);
		
		// balancesheetitr
	//	$('#balancesheetidHid').text(a.balancesheetitr.balancesheetid);
	//	$('#equityidHid').text(a.balancesheetitr.equityid.equityid);
	//	$('#noncurrentliabilityidHid').text(a.balancesheetitr.noncurrentliabilityid.noncurrentliabilityid);
	//	$('#currentlibilityidHid').text(a.balancesheetitr.currentliabilityid.currentlibilityid);
		
		// incomestmtitr
	//	$('#incomestatementidHid').text(a.incomestmtitr.incomestatementid);
	//	$('#intrestidHid').text(a.incomestmtitr.intrestid.intrestid);
	//	$('#grossmarginidHid').text(a.incomestmtitr.grossid.grossmarginid);
	//	$('#operatingmarginidHid').text(a.incomestmtitr.operatingmargin.operatingmarginid);
	//	$('#pbditidHidHid').text(a.incomestmtitr.pbditrid.pbditid);
	//	$('#depreciationidHid').text(a.incomestmtitr.depreciationid.depreciationid);
	//	$('#patidHid').text(a.incomestmtitr.patid.patid);
		
		// tospervatitr
		
			$('#quartervatidHid1').text(a.quartervatitr[0].quartervatid);
			$('#quartervatidHid2').text(a.quartervatitr[1].quartervatid);
			$('#quartervatidHid3').text(a.quartervatitr[2].quartervatid);
			$('#quartervatidHid4').text(a.quartervatitr[3].quartervatid);
		
		
		$('#biannualvatidHid1').text(a.biannualvatitr[0].biannualvatid);
		$('#biannualvatidHid2').text(a.biannualvatitr[1].biannualvatid);
			
		 $('#queriesItrId').text(a.queries),
		 $('#observationItrId').text(a.observation),
		 
		 $('#iplsSlctCol1Itr').text(a.select1);
		 $('#iplsSlctCol2Itr').text(a.select2);
		 $('#iplsSlctCol3Itr').text(a.select3);
		
		 $_pV('diffInBalSheetItrColId1','tex',a.diffauditedfirst);
		 $_pV('diffInBalSheetItrColId2','tex',a.diffauditedsecond);
		 $_pV('diffInBalSheetItrColId3','tex',a.diffcaprovisionalt);
		
		 $('#prtclrCol1Id').text(a.particularauditedfirstdate);
		 $('#prtclrCol2Id').text(a.particularauditedseconddate);
		 $('#prtclrCol3Id').text(a.particularauditedcaprovedate);
		 $('#prtclrCol4Id').text(a.particularauditedchangefirstyeardate);
		 $('#prtclrCol5Id').text(a.particularauditedchangesecondyeardate);
		 
		 $('#liabilitiesItrColId1').text( $('#prtclrCol1Id').text());
		 $('#liabilitiesItrColId2').text( $('#prtclrCol2Id').text());
		 $('#liabilitiesItrColId3').text( $('#prtclrCol3Id').text());
		 $('#liabilitiesItrColId4').text( $('#prtclrCol4Id').text());
		 $('#liabilitiesItrColId5').text( $('#prtclrCol5Id').text());
		 
		 $('#assetItrColId1').text( $('#prtclrCol1Id').text());
		 $('#assetItrColId2').text( $('#prtclrCol2Id').text());
		 $('#assetItrColId3').text( $('#prtclrCol3Id').text());
		 $('#assetItrColId4').text( $('#prtclrCol4Id').text());
		 $('#assetItrColId5').text( $('#prtclrCol5Id').text());
		 
		 $('#ratiosItrColId1').text( $('#prtclrCol1Id').text());
		 $('#ratiosItrColId2').text( $('#prtclrCol2Id').text());
		 $('#ratiosItrColId3').text( $('#prtclrCol3Id').text());
		 
		 $('#topdebtorsItrHead2').text( $('#prtclrCol1Id').text());
		 $('#topdebtorsItrHead3').text( $('#prtclrCol2Id').text());
		 $('#topdebtorsItrHead4').text( $('#prtclrCol3Id').text());
		 
		 $('#textYearItrId').text(a.toAsperVatYear);
		 
		 	// particularitr  
		 	$('#particularidHid').text(a.particularitr.particularid);
		 	$_pV('currentLiqRatioItrColId1','tex',$_fix2(a.particularitr.currentratioliquidutyfirst),'a');
			$_pV('currentLiqRatioItrColId2','tex',$_fix2(a.particularitr.currentratioliquidutysecond),'a');
			$_pV('currentLiqRatioItrColId3','tex',$_fix2(a.particularitr.currentratioliquidutythird),'a');
							
			$_pV('bankingTurnoverItrColId1','tex',a.particularitr.bankingturnoverfirst,'a');
			$_pV('bankingTurnoverItrColId2','tex',a.particularitr.bankingturnoversecond,'a');
			$_pV('bankingTurnoverItrColId3','tex',$_pIp(a.particularitr.bankingturnoverthird),'a');
			
			$_pV('workingCapitalsItrColId1','tex',a.particularitr.workingcapitalfirst);
			$_pV('workingCapitalsItrColId2','tex',a.particularitr.workingcapitalsecond);
			$_pV('workingCapitalsItrColId3','tex',a.particularitr.workingcapitalthird);
			
			 $_pV('tangibleNetWrthItrColId1','tex',a.particularitr.tangiblenetworthfirst);
			 $_pV('tangibleNetWrthItrColId2','tex',a.particularitr.tangiblenetworthsecond);
			 $_pV('tangibleNetWrthItrColId3','tex',a.particularitr.tangiblenetworththird);
			
			$_pV('securedLoansBankItrColId1','tex',a.particularitr.securedloanfirst);
			$_pV('securedLoansBankItrColId2','tex',a.particularitr.securedloansecond);
			$_pV('securedLoansBankItrColId3','tex',a.particularitr.securedloanthird);
			
			$_pV('unSecuredLoansBankItrColId1','tex',a.particularitr.unsecuredloanfirst);
			$_pV('unSecuredLoansBankItrColId2','tex',a.particularitr.unsecuredloansecond);
			$_pV('unSecuredLoansBankItrColId3','tex',a.particularitr.unsecuredloanthird);
			
			$_pV('unSecuredLoansFrmFrndsItrColId1','tex',a.particularitr.unsecuredloanfriendfirst);
			$_pV('unSecuredLoansFrmFrndsItrColId2','tex',a.particularitr.unsecuredloanfriendsecond);
			$_pV('unSecuredLoansFrmFrndsItrColId3','tex',a.particularitr.unsecuredloanfriendthird);
			// topdebtorid
				$_pV('topThreeDebtorsItrTextId1','tex',a.particularitr.topdebtorid.topthreedebtorsfirst);
				$_pV('topThreeDebtorsItrTextId2','tex',a.particularitr.topdebtorid.topthreedebtorssecond);
				$_pV('topThreeDebtorsItrTextId3','tex',a.particularitr.topdebtorid.topthreedebtorsthird);
				
				$_pV('topThreeDebtorsPerItrColId1','tex',$_pIp(a.particularitr.topdebtorid.topthreedebtorsosfirst),'a');
				$_pV('topThreeDebtorsPerItrColId2','tex',$_pIp(a.particularitr.topdebtorid.topthreedebtorsossecond),'a');
				$_pV('topThreeDebtorsPerItrColId3','tex',$_pIp(a.particularitr.topdebtorid.topthreedebtorsosthird),'a');
				
				$_pV('topThreeCreditorsItrTextId1','tex',a.particularitr.topdebtorid.topthreecreditorsfirst);
				$_pV('topThreeCreditorsItrTextId2','tex',a.particularitr.topdebtorid.topthreecreditorssecond);
				$_pV('topThreeCreditorsItrTextId3','tex',a.particularitr.topdebtorid.topthreecreditorsthird);
				
				$_pV('topThreeCreditorsPerItrColId1','tex',$_pIp(a.particularitr.topdebtorid.topthreecreditorpfirst),'a');
				$_pV('topThreeCreditorsPerItrColId2','tex',$_pIp(a.particularitr.topdebtorid.topthreecreditorpsecond),'a');
				$_pV('topThreeCreditorsPerItrColId3','tex',$_pIp(a.particularitr.topdebtorid.topthreecreditorpthird),'a');
		
			//	statuaryid
				 $_pV('serviceTaxPayableItrColId1','tex',$_pIp(a.particularitr.statuaryid.servicetaxfirst),'a');
				 $_pV('serviceTaxPayableItrColId2','tex',$_pIp(a.particularitr.statuaryid.servicetaxsecond),'a');
				 $_pV('serviceTaxPayableItrColId3','tex',$_pIp(a.particularitr.statuaryid.servicetaxthird),'a');
				
				 $_pV('vatPayablePerItrColId1','tex',$_pIp(a.particularitr.statuaryid.vatpayablefirst),'a');
				 $_pV('vatPayablePerItrColId2','tex',$_pIp(a.particularitr.statuaryid.vatpayablesecond),'a');
				 $_pV('vatPayablePerItrColId3','tex',$_pIp(a.particularitr.statuaryid.vatpayablethird),'a');
				
				 $_pV('ItrColId1','tex',$_pIp(a.particularitr.statuaryid.tdspayablefirst),'a');
				 $_pV('ItrColId2','tex',$_pIp(a.particularitr.statuaryid.tdspayablesecond),'a');
				 $_pV('ItrColId3','tex',$_pIp(a.particularitr.statuaryid.tdspayablethird),'a');
					
				 $_pV('otherStatuPayableItrColId1','tex',$_pIp(a.particularitr.statuaryid.statutaryfirst),'a');
				 $_pV('otherStatuPayableItrColId2','tex',$_pIp(a.particularitr.statuaryid.statutarysecond),'a');
				 $_pV('otherStatuPayableItrColId3','tex',$_pIp(a.particularitr.statuaryid.statutarythird),'a');
				
				 $_pV('totalsPerItrColId1','tex',$_pIp(a.particularitr.statuaryid.totalstatutoryfirst),'a');
				 $_pV('totalsPerItrColId2','tex',$_pIp(a.particularitr.statuaryid.totalstatutorysecond),'a');
				 $_pV('totalsPerItrColId3','tex',$_pIp(a.particularitr.statuaryid.totalstatutorythird),'a');
		
			//solvencyid
				 $_pV('longTermDebtQuasiItrColId1','tex',$_fix2(a.particularitr.solvencyid.longtermdebtfirst),'a');
				 $_pV('longTermDebtQuasiItrColId2','tex',$_fix2(a.particularitr.solvencyid.longtermdebtsecond),'a');
				 $_pV('longTermDebtQuasiItrColId3','tex',$_fix2(a.particularitr.solvencyid.longtermdebtthird),'a');
				
				 $_pV('ttlBorrowToNetQuasiItrColId1','tex',$_fix2(a.particularitr.solvencyid.totalborrownwfirst),'a');
				 $_pV('ttlBorrowToNetQuasiItrColId2','tex',$_fix2(a.particularitr.solvencyid.totalborrownwsecond),'a');
				 $_pV('ttlBorrowToNetQuasiItrColId3','tex',$_fix2(a.particularitr.solvencyid.totalborrownwthird),'a');
				
				 $_pV('ttlLiabToNetQuasiItrColId1','tex',$_fix2(a.particularitr.solvencyid.totalliabilitiesnwfirst),'a');
				 $_pV('ttlLiabToNetQuasiItrColId2','tex',$_fix2(a.particularitr.solvencyid.totalliabilitiesnwsecond),'a');
				 $_pV('ttlLiabToNetQuasiItrColId3','tex',$_fix2(a.particularitr.solvencyid.totalliabilitiesnwthird),'a');
				
				 $_pV('intCoverageratioItrColId1','tex',$_fix2(a.particularitr.solvencyid.intrestcovrageratiofirst),'a');
				 $_pV('intCoverageratioItrColId2','tex',$_fix2(a.particularitr.solvencyid.intrestcovrageratiosecond),'a');
				 $_pV('intCoverageratioItrColId3','tex',$_fix2(a.particularitr.solvencyid.intrestcovrageratiothird),'a');
	
		
			//turnoverid
				 $_pV('CllctnPeriodItrColId1','tex',a.particularitr.turnoverid.collectionperiodfirst);
				 $_pV('CllctnPeriodItrColId2','tex',a.particularitr.turnoverid.collectionperiodsecond);
				 $_pV('CllctnPeriodItrColId3','tex',a.particularitr.turnoverid.collectionperiodthird);
				
				 $_pV('accPayableDaysItrColId1','tex',a.particularitr.turnoverid.accountpayablefirst);
				 $_pV('accPayableDaysItrColId2','tex',a.particularitr.turnoverid.accountpayablesecond);
				 $_pV('accPayableDaysItrColId3','tex',a.particularitr.turnoverid.accountpayablethird);
				
				 $_pV('inventoryHldngItrColId1','tex',a.particularitr.turnoverid.inventoryholdingfirst);
				 $_pV('inventoryHldngItrColId2','tex',a.particularitr.turnoverid.inventoryholdingsecond);
				 $_pV('inventoryHldngItrColId3','tex',a.particularitr.turnoverid.inventoryholdingthird);
				
				 $_pV('stckReplmntDaysItrColId1','tex',a.particularitr.turnoverid.stockreplenishmentfirst);
				 $_pV('stckReplmntDaysItrColId2','tex',a.particularitr.turnoverid.stockreplenishmentsecond);
				 $_pV('stckReplmntDaysItrColId3','tex',a.particularitr.turnoverid.stockreplenishmentthird);
				
				 $_pV('wrkCapReqAmntItrColId1','tex',a.particularitr.turnoverid.workingcapitalreqfirst);
				 $_pV('wrkCapReqAmntItrColId2','tex',a.particularitr.turnoverid.workingcapitalreqsecond);
				 $_pV('wrkCapReqAmntItrColId3','tex',a.particularitr.turnoverid.workingcapitalreqthird);
				
				 $_pV('grossMarginItrColId1','tex',$_pIp(a.particularitr.turnoverid.grossmarginfirst),'a');
				 $_pV('grossMarginItrColId2','tex',$_pIp(a.particularitr.turnoverid.grossmarginsecond),'a');
				 $_pV('grossMarginItrColId3','tex',$_pIp(a.particularitr.turnoverid.grossmarginthird),'a');
				
				 $_pV('netProfitMarginPerItrColId1','tex',$_pIp(a.particularitr.turnoverid.netprofitmarginfirst),'a');
				 $_pV('netProfitMarginPerItrColId2','tex',$_pIp(a.particularitr.turnoverid.netprofitmarginsecond),'a');
				 $_pV('netProfitMarginPerItrColId3','tex',$_pIp(a.particularitr.turnoverid.netprofitmarginthird),'a');
				
				$_pV('ebitdaMarginPerItrColId1','tex',$_pIp(a.particularitr.turnoverid.ebittdaprofitmarginfirst),'a');
				$_pV('ebitdaMarginPerItrColId2','tex',$_pIp(a.particularitr.turnoverid.ebittdamarginsecond),'a');
				$_pV('ebitdaMarginPerItrColId3','tex',$_pIp(a.particularitr.turnoverid.ebittdamarginthird),'a');
				
				 $_pV('returnOnNetwrthPerItrColId1','tex',$_pIp(a.particularitr.turnoverid.returnnetworthfirst),'a');
				 $_pV('returnOnNetwrthPerItrColId2','tex',$_pIp(a.particularitr.turnoverid.returnnetworthsecond),'a');
				 $_pV('returnOnNetwrthPerItrColId3','tex',$_pIp(a.particularitr.turnoverid.returnnetworththird),'a');
				
				 $_pV('retOnCapEmpPerItrColId1','tex',$_pIp(a.particularitr.turnoverid.returncapitalfirst),'a');
				 $_pV('retOnCapEmpPerItrColId2','tex',$_pIp(a.particularitr.turnoverid.returncapitalsecond),'a');
				 $_pV('retOnCapEmpPerItrColId3','tex',$_pIp(a.particularitr.turnoverid.returncapitalthird),'a');
		
				//tospervatitr
				 $_pV('salesTtlsForToasPerVatItr','tex',$_fix0(a.monthvatitr[12].salestotal));
				 $_pV('vatCstStTtlsForToasPerVatItr','tex',$_fix0(a.monthvatitr[12].vatcsttotal));
				 $('#vatCstStTtlsForToasPerVatItrFinal').text($commaPut($_fix0(a.monthvatitr[12].salestotal)-$_fix0(a.monthvatitr[12].vatcsttotal)));
				 for(i=1;i<=12;i++){
					 if (i == 1) {
							var monthConcat = $('#monthsToasPerVatId'+i).val((a.monthvatitr[i-1].monthvat).split('-')[0]) + ' ' + $('#yearToasPerVatId'+i).val((a.monthvatitr[i-1].monthvat).split('-')[1]);
						}else {
							var monthConcat = $('#monthsToasPerVatId'+i).text((a.monthvatitr[i-1].monthvat).split('-')[0]) + ' ' + $('#yearToasPerVatId'+i).text((a.monthvatitr[i-1].monthvat).split('-')[1]);
						}
					 	 //$('#monthsToasPerVatId'+i).text(a.monthvatitr[i-1].monthvat);
						 $_pV('salesToasPerVatItrTextId-'+i,'value',a.monthvatitr[i-1].sales);
						 $_pV('vatCstStToasPerVatItrId-'+i,'value',a.monthvatitr[i-1].vatcst);
						// $_pV('vatCstStToasPerVatItrId-'+i,'value',a.monthvatitr[i-1].sales);
				 }
				 	$('#monthwisevatidHid1').text(a.monthvatitr[0].monthwisevatid);
				 	$('#monthwisevatidHid2').text(a.monthvatitr[1].monthwisevatid);
				 	$('#monthwisevatidHid3').text(a.monthvatitr[2].monthwisevatid);
				 	$('#monthwisevatidHid4').text(a.monthvatitr[3].monthwisevatid);
				 	$('#monthwisevatidHid5').text(a.monthvatitr[4].monthwisevatid);
				 	$('#monthwisevatidHid6').text(a.monthvatitr[5].monthwisevatid);
				 	$('#monthwisevatidHid7').text(a.monthvatitr[6].monthwisevatid);
				 	$('#monthwisevatidHid8').text(a.monthvatitr[7].monthwisevatid);
				 	$('#monthwisevatidHid9').text(a.monthvatitr[8].monthwisevatid);
				 	$('#monthwisevatidHid10').text(a.monthvatitr[9].monthwisevatid);
				 	$('#monthwisevatidHid11').text(a.monthvatitr[10].monthwisevatid);
				 	$('#monthwisevatidHid12').text(a.monthvatitr[11].monthwisevatid);
				 
				 // biaanualvat
			//	 $('#biannualItrId1').text(a.biannualvatitr[0].biannualvat);
				 $_pV('salesBiannualItrId-1','tex',a.biannualvatitr[0].sales);
				 $_pV('biannualVatCstStItrId-1','tex',a.biannualvatitr[0].vatcst);
				// $_pV('biannualVatCstStItrId-1','value',a.biannualvatitr[0].sales);
				
				 $_pV('salesTtlsForBiannualItrId','tex',$_fix0(a.biannualvatitr[1].salestotal));
				 $_pV('VatCstStTtlsForBiannualId','tex',$_fix0(a.biannualvatitr[1].vatcsttotal));
				 $('#VatCstStTtlsForBiannualIdFinal').text($commaPut($_fix0(a.biannualvatitr[1].salestotal)-$_fix0(a.biannualvatitr[1].vatcsttotal)));
				 
		//		 $('#biannualItrId2').text(a.biannualvatitr[1].biannualvat);
				 $_pV('salesBiannualItrId-2','tex',a.biannualvatitr[1].sales);   
				 $_pV('biannualVatCstStItrId-2','tex',a.biannualvatitr[1].vatcst);
				 //				 $_pV('biannualVatCstStItrId-2','value',a.biannualvatitr[1].sales);
							 
				 // quartervat
				// $('#quartersItrCol1').text(a.quartervatitr[0].quartervat);
				 $_pV('quartersSalesItrId-1','tex',a.quartervatitr[0].sales);
				 $_pV('quarterVatCstStItrId-1','tex',a.quartervatitr[0].vatcst);
				 //				 $_pV('quarterVatCstStItrId-1','value',a.quartervatitr[0].sales);
				 
			//	 $('#quartersItrCol2').text(a.quartervatitr[1].quartervat);
				 $_pV('quartersSalesItrId-2','tex',a.quartervatitr[1].sales);
				 $_pV('quarterVatCstStItrId-2','tex',a.quartervatitr[1].vatcst);
				 //				 $_pV('quarterVatCstStItrId-2','value',a.quartervatitr[1].sales);
				 
			//	 $('#quartersItrCol3').text(a.quartervatitr[2].quartervat);
				 $_pV('quartersSalesItrId-3','tex',a.quartervatitr[2].sales);
				 $_pV('quarterVatCstStItrId-3','tex',a.quartervatitr[2].vatcst);
			//					 $_pV('quarterVatCstStItrId-3','value',a.quartervatitr[2].sales);
				 
			//	 $('#quartersItrCol4').text(a.quartervatitr[3].quartervat);
				 $_pV('quartersSalesItrId-4','tex',a.quartervatitr[3].sales);
				 $_pV('quarterVatCstStItrId-4','tex',a.quartervatitr[3].vatcst);
				 //				 $_pV('quarterVatCstStItrId-4','value',a.quartervatitr[3].sales);
				 
				 $('#salesTtlsForQuartersItrId').text($commaPut($_fix0(a.quartervatitr[3].salestotal)));
				 $('#VatCstStTtlsForQuartersItrId').text($commaPut($_fix0(a.quartervatitr[3].vatcsttotal)));
				 $('#VatCstStTtlsForQuartersItrIdFinal').text($commaPut($_fix0(a.quartervatitr[3].salestotal)-$_fix0(a.quartervatitr[3].vatcsttotal)));
				
			// balancesheetitr	 
			 $('#iplsSlctCol1Itr').text(a.balancesheetitr.firstAuditStr);
			 $('#iplsSlctCol2Itr').text(a.balancesheetitr.secondAuditStr);
			 $('#iplsSlctCol3Itr').text(a.balancesheetitr.thirdAuditStr);
			 $_pV('TtlCurntLiabItrColId1','tex',a.balancesheetitr.totalliabilityauditedfirst);
			 $_pV('TtlCurntLiabItrColId2','tex',a.balancesheetitr.totalliabilityauditedsecond);
			 $_pV('TtlCurntLiabItrColId3','tex',a.balancesheetitr.totalliabilitycaprovisionalt);
			 $_pV('TtlCurntLiabItrColId4','tex',a.balancesheetitr.totalliabilityfirstyear);
			 $_pV('TtlCurntLiabItrColId5','tex',a.balancesheetitr.totalliabilitysecondyear);
			 $('#slctBalSheetItrColId1').text(a.balancesheetitr.select1);
			 $('#slctBalSheetItrColId2').text(a.balancesheetitr.select2);
			 $('#slctBalSheetItrColId3').text(a.balancesheetitr.select3);
			 
			 // equityid
				 $_pV('shareCapitalItrTextId1','tex',a.balancesheetitr.equityid.sharecapitalauditedfirst);
				 $_pV('shareCapitalItrTextId2','tex',a.balancesheetitr.equityid.sharecapitalauditedsecond);
				 $_pV('shareCapitalItrTextId3','tex',a.balancesheetitr.equityid.sharecapitalcaprovisionalt);
				 $_pV('shareCapitalItrColId4','tex',a.balancesheetitr.equityid.sharecapitalfundflowfirst);
				 $_pV('shareCapitalItrColId5','tex',a.balancesheetitr.equityid.sharecapitalfundflowsecond);
				
				 $_pV('resAndSurplusItrTextId1','tex',a.balancesheetitr.equityid.reservesauditedfirst);
				 $_pV('resAndSurplusItrTextId2','tex',a.balancesheetitr.equityid.reservesauditedsecond);
				 $_pV('resAndSurplusItrTextId3','tex',a.balancesheetitr.equityid.reservescaprovisionalt);
				 $_pV('resAndSurplusItrColId4','tex',a.balancesheetitr.equityid.reservesfundflowfirst);
				 $_pV('resAndSurplusItrColId5','tex',a.balancesheetitr.equityid.reservesfundflowsecond);
				
				 $_pV('othersFirstItrTextId1','tex',a.balancesheetitr.equityid.otherauditedfirst);
				 $_pV('othersFirstItrTextId2','tex',a.balancesheetitr.equityid.otherauditedsecond);
				 $_pV('othersFirstItrTextId3','tex',a.balancesheetitr.equityid.othercaprovisionalt);
				 $_pV('othersFirstItrColId4','tex',a.balancesheetitr.equityid.otherfundflowfirst);
				 $_pV('othersFirstItrColId5','tex',a.balancesheetitr.equityid.rotherfundflowsecond);
				
				 $_pV('totalEnquityItrCol1','tex',a.balancesheetitr.equityid.totalequityauditedfirst);
				 $_pV('totalEnquityItrCol2','tex',a.balancesheetitr.equityid.totalequityauditedsecond);
				 $_pV('totalEnquityItrCol3','tex',a.balancesheetitr.equityid.totalequitycaprovisionalt);
				 $_pV('totalEnquityItrCol4','tex',a.balancesheetitr.equityid.totalequityfundflowfirst);
				 $_pV('totalEnquityItrCol5','tex',a.balancesheetitr.equityid.totalequityfundflowsecond);
				 
		// currentliabilityid
				 $_pV('bankOdOcItrTextId1','tex',a.balancesheetitr.currentliabilityid.bankodauditedfirst);
				 $_pV('bankOdOcItrTextId2','tex',a.balancesheetitr.currentliabilityid.bankodauditedsecond);
				 $_pV('bankOdOcItrTextId3','tex',a.balancesheetitr.currentliabilityid.bankodcaprovisionalt);
				 $_pV('bankOdOcItrColId4','tex',a.balancesheetitr.currentliabilityid.bankodfundflowfirst);
				 $_pV('bankOdOcItrColId5','tex',a.balancesheetitr.currentliabilityid.bankodfundflowsecond);
				
				 $_pV('sCreatorItrTextId1','tex',a.balancesheetitr.currentliabilityid.screditorsauditedfirst);
				 $_pV('sCreatorItrTextId2','tex',a.balancesheetitr.currentliabilityid.screditorsauditedsecond);
				$_pV('sCreatorItrTextId3','tex',a.balancesheetitr.currentliabilityid.screditorscaprovisionalt);
				 $_pV('sCreatorItrTextId4','tex',a.balancesheetitr.currentliabilityid.screditorsfundflowfirst);
				 $_pV('sCreatorItrTextId5','tex',a.balancesheetitr.currentliabilityid.screditorsfundflowsecond);
				
				 $_pV('serTaxPayableItrTextId1','tex',a.balancesheetitr.currentliabilityid.servicetaxpayableauditedfirst);
				$_pV('serTaxPayableItrTextId2','tex',a.balancesheetitr.currentliabilityid.servicetaxpayableauditedsecond);
				 $_pV('serTaxPayableItrTextId3','tex ',a.balancesheetitr.currentliabilityid.servicetaxpayablecaprovisionalt);
				 $_pV('serTaxPayableItrColId4','tex',a.balancesheetitr.currentliabilityid.servicetaxpayablefundflowfirst);
				$_pV('serTaxPayableItrColId5','tex',a.balancesheetitr.currentliabilityid.servicetaxpayablefundflowsecond);
				
				 $_pV('vatPayableTextId1','tex',a.balancesheetitr.currentliabilityid.vatpayableauditedfirst);
				 $_pV('vatPayableTextId2','tex',a.balancesheetitr.currentliabilityid.vatpayableauditedsecond);
				 $_pV('vatPayableTextId3','tex',a.balancesheetitr.currentliabilityid.vatpayablecaprovisionalt);
				 $_pV('vatPayableTextId4','tex',a.balancesheetitr.currentliabilityid.vatpayablefundflowfirst);
				 $_pV('vatPayableTextId5','tex',a.balancesheetitr.currentliabilityid.vatpayablefundflowsecond);
				
				 $_pV('tdsPayableTextId1','tex',a.balancesheetitr.currentliabilityid.tdspayableauditedfirst);
				 $_pV('tdsPayableTextId2','tex',a.balancesheetitr.currentliabilityid.tdspayableauditedsecond);
				 $_pV('tdsPayableTextId3','tex',a.balancesheetitr.currentliabilityid.tdspayablecaprovisionalt);
				 $_pV('tdsPayableColId4','tex',a.balancesheetitr.currentliabilityid.tdspayablefundflowfirst);
				 $_pV('tdsPayableColId5','tex',a.balancesheetitr.currentliabilityid.tdspayablefundflowsecond);
				
				 $_pV('othStatPayTextId1','tex',a.balancesheetitr.currentliabilityid.otherstatutaryauditedfirst);
				 $_pV('othStatPayTextId2','tex',a.balancesheetitr.currentliabilityid.otherstatutaryauditedsecond);
				 $_pV('othStatPayTextId3','tex',a.balancesheetitr.currentliabilityid.otherstatutarycaprovisionalt);
				 $_pV('othStatPayColId4','tex',a.balancesheetitr.currentliabilityid.otherstatutaryfundflowfirst);
				 $_pV('othStatPayColId5','tex',a.balancesheetitr.currentliabilityid.otherstatutaryfundflowsecond);
				
				 $_pV('othLiabProvItrTextId1','tex',a.balancesheetitr.currentliabilityid.otherliabilitiesauditedfirst);
				 $_pV('othLiabProvItrTextId2','tex',a.balancesheetitr.currentliabilityid.otherliabilitiesauditedsecond);
				 $_pV('othLiabProvItrTextId3','tex',a.balancesheetitr.currentliabilityid.otherliabilitiescaprovisionalt);
				 $_pV('othLiabProvItrColId4','tex',a.balancesheetitr.currentliabilityid.otherliabilitiesfundflowfirst);
				 $_pV('othLiabProvItrColId5','tex',a.balancesheetitr.currentliabilityid.otherliabilitiesfundflowsecond);
				
				 $_pV('ttlCurntLiabItrColId1','tex',a.balancesheetitr.currentliabilityid.totalcurrntauditedfirst);
				 $_pV('ttlCurntLiabItrColId2','tex',a.balancesheetitr.currentliabilityid.totalcurrntauditedsecond);
				 $_pV('ttlCurntLiabItrColId3','tex',a.balancesheetitr.currentliabilityid.totalcurrntcaprovisionalt);
				 $_pV('ttlCurntLiabItrColId4','tex',a.balancesheetitr.currentliabilityid.totalcurrntfundflowfirst);
				 $_pV('ttlCurntLiabItrColId5','tex',a.balancesheetitr.currentliabilityid.totalcurrntfundflowsecond);
			
				 // noncurrentliabilityid
				 $_pV('secDebtsBnkItrTextId1','tex',a.balancesheetitr.noncurrentliabilityid.secureddebtsauditedfirst);
				 $_pV('secDebtsBnkItrTextId2','tex',a.balancesheetitr.noncurrentliabilityid.secureddebtsauditedsecond);
				 $_pV('secDebtsBnkItrTextId3','tex',a.balancesheetitr.noncurrentliabilityid.secureddebtscaprovisionalt);
				 $_pV('secDebtsBnkItrColId4','tex',a.balancesheetitr.noncurrentliabilityid.secureddebtsfundflowfirst);
				 $_pV('secDebtsBnkItrColId5','tex',a.balancesheetitr.noncurrentliabilityid.secureddebtsfundflowsecond);
				
				 $_pV('unsecDebtsBnkItrTextId1','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtsauditedfirst);
				 $_pV('unsecDebtsBnkItrTextId2','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtsauditedsecond);
				 $_pV('unsecDebtsBnkItrTextId3','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtscaprovisionalt);
				 $_pV('unsecDebtsBnkItrColId4','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtsfundflowfirst);
				 $_pV('unsecDebtsBnkItrColId5','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtsfundflowsecond);
				
				 $_pV('unsecDebtsFamItrTextId1','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtfriendsauditedfirst);
				 $_pV('unsecDebtsFamItrTextId2','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtfriendsauditedsecond);
				 $_pV('unsecDebtsFamItrTextId3','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtfriendscaprovisionalt);
				 $_pV('unsecDebtsFamItrColId4','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtfriendsfundflowfirst);
				 $_pV('unsecDebtsFamItrColId5','tex',a.balancesheetitr.noncurrentliabilityid.unsecureddebtfriendsfundflowsecond);
				
				 $_pV('othersSecondItrTextId1','tex',a.balancesheetitr.noncurrentliabilityid.otherauditedfirst);
				 $_pV('othersSecondItrTextId2','tex',a.balancesheetitr.noncurrentliabilityid.otherauditedsecond);
				 $_pV('othersSecondItrTextId3','tex',a.balancesheetitr.noncurrentliabilityid.othercaprovisionalt);
				 $_pV('othersSecondItrColId4','tex',a.balancesheetitr.noncurrentliabilityid.otherfundflowfirst);
				 $_pV('othersSecondItrColId5','tex',a.balancesheetitr.noncurrentliabilityid.otherfundflowsecond);
				
				 $_pV('ttlNonCurLiabItrColId1','tex',a.balancesheetitr.noncurrentliabilityid.totalnoncurrntauditedfirst);
				 $_pV('ttlNonCurLiabItrColId2','tex',a.balancesheetitr.noncurrentliabilityid.totalnoncurrntauditedsecond);
				 $_pV('ttlNonCurLiabItrColId3','tex',a.balancesheetitr.noncurrentliabilityid.totalnoncurrntcaprovisionalt);
				 $_pV('ttlNonCurLiabItrColId4','tex',a.balancesheetitr.noncurrentliabilityid.totalnoncurrntfundflowfirst);
				 $_pV('ttlNonCurLiabItrColId5','tex',a.balancesheetitr.noncurrentliabilityid.totalnoncurrntfundflowsecond);
		
				 // incomestmtitr
				 $('#slctBalSheetItrColId1').text(a.incomestmtitr.firstAuditStr);
				 $('#islctBalSheetItrColId2').text(a.incomestmtitr.secondAuditStr);
				 $('#slctBalSheetItrColId3').text(a.incomestmtitr.thirdAuditStr);
				 
				 //grossid
				 $_pV('salesItrText1Id','tex',a.incomestmtitr.grossid.salesauditedfirst);
				 $_pV('salesItrText2Id','tex',a.incomestmtitr.grossid.salesauditedsecond);
				 $_pV('salesItrText3Id','tex',a.incomestmtitr.grossid.salescaprovisionalt);
				 $_pV('salesItrCol4Id','tex',$_pIp(a.incomestmtitr.grossid.saleschangefirstyear),'a');
				 $_pV('salesItrCol5Id','tex',$_pIp(a.incomestmtitr.grossid.saleschangesecondyear),'a');
				
				 $_pV('costOfGoodsItrCol1','tex',a.incomestmtitr.grossid.costgoodsaleauditedfirst);
				 $_pV('costOfGoodsItrCol2','tex',a.incomestmtitr.grossid.costgoodsaleauditedsecond);
				 $_pV('costOfGoodsItrCol3','tex',a.incomestmtitr.grossid.costgoodsalecaprovisionalt);
				 $_pV('costOfGoodsItrCol4','tex',$_pIp(a.incomestmtitr.grossid.costgoodsalechangefirstyear),'a');
				 $_pV('costOfGoodsItrCol5','tex',$_pIp(a.incomestmtitr.grossid.costgoodsalechangesecondyear),'a');
				
				 $_pV('openingStockItrTextId1','tex',a.incomestmtitr.grossid.opningstockauditedfirst);
				 $_pV('openingStockItrTextId2','tex',a.incomestmtitr.grossid.opningstockauditedsecond);
				 $_pV('openingStockItrTextId3','tex',a.incomestmtitr.grossid.opningstockcaprovisionalt);
				 $_pV('openingStockItrColId4','tex',$_pIp(a.incomestmtitr.grossid.opningstockchangefirstyear),'a');
				 $_pV('openingStockItrColId5','tex',$_pIp(a.incomestmtitr.grossid.opningstockchangesecondyear),'a');
				
				 $_pV('closingSckItrTextId1','tex',a.incomestmtitr.grossid.closingstockauditedfirst);
				 $_pV('closingSckItrTextId2','tex',a.incomestmtitr.grossid.closingstockauditedsecond);
				 $_pV('closingSckItrTextId3','tex',a.incomestmtitr.grossid.closingtockcaprovisionalt);
				 $_pV('closingSckItrColId1','tex',$_pIp(a.incomestmtitr.grossid.closingstockchangefirstyear),'a');
				 $_pV('closingSckItrColId2','tex',$_pIp(a.incomestmtitr.grossid.closingstockchangesecondyear),'a');
				
				 $_pV('purchaseItrTextId1','tex',a.incomestmtitr.grossid.purchaseauditedfirst);
				 $_pV('purchaseItrTextId2','tex',a.incomestmtitr.grossid.purchaseauditedsecond);
				 $_pV('purchaseItrTextId3','tex',a.incomestmtitr.grossid.purchasecaprovisionalt);
				 $_pV('purchaseItrColId4','tex',$_pIp(a.incomestmtitr.grossid.purchasechangefirstyear),'a');
				 $_pV('purchaseItrColId5','tex',$_pIp(a.incomestmtitr.grossid.purchasechangesecondyear),'a');
				
				 $_pV('dirctOvrHdsItrTextId1','tex',a.incomestmtitr.grossid.directoverheadauditedfirst);
				 $_pV('dirctOvrHdsItrTextId2','tex',a.incomestmtitr.grossid.directoverheadauditedsecond);
				 $_pV('dirctOvrHdsItrTextId3','tex',a.incomestmtitr.grossid.directoverheadcaprovisionalt);
				 $_pV('dirctOvrHdsItrColId4','tex',$_pIp(a.incomestmtitr.grossid.directoverheadchangefirstyear),'a');						
				 $_pV('dirctOvrHdsItrColId5','tex',$_pIp(a.incomestmtitr.grossid.directoverheadchangesecondyear),'a');
				
				 $_pV('grssPrftItrColId1','tex',a.incomestmtitr.grossid.grossprofitauditedfirst);
				 $_pV('grssPrftItrColId2','tex',a.incomestmtitr.grossid.grossprofitauditedsecond);
				 $_pV('grssPrftItrColId3','tex',a.incomestmtitr.grossid.grossprofitcaprovisionalt);
				 $_pV('grssPrftItrColId4','tex',$_pIp(a.incomestmtitr.grossid.grossprofitchangefirstyear),'a');
				 $_pV('grssPrftItrColId5','tex',$_pIp(a.incomestmtitr.grossid.grossprofitchangesecondyear),'a');
				
				 $_pV('grssMrgnItrColId1','tex',$_pIp(a.incomestmtitr.grossid.grossmarginauditedfirst),'a');
				 $_pV('grssMrgnItrColId2','tex',$_pIp(a.incomestmtitr.grossid.grossmarginauditedsecond),'a');
				 $_pV('grssMrgnItrColId3','tex',$_pIp(a.incomestmtitr.grossid.grossmargincaprovisionalt),'a');
				 $_pV('grssMrgnItrColId4','tex',$_pIp(a.incomestmtitr.grossid.grossmarginchangefirstyear),'a');
				 $_pV('grssMrgnItrColId5','tex',$_pIp(a.incomestmtitr.grossid.grossmarginchangesecondyear),'a');
				 
				 // operatingmargin
				 $_pV('empCostItrTextId1','tex',a.incomestmtitr.operatingmargin.empcostauditedfirst);
				 $_pV('empCostItrTextId2','tex',a.incomestmtitr.operatingmargin.empcostauditedsecond);
				 $_pV('empCostItrTextId3','tex',a.incomestmtitr.operatingmargin.empcostcaprovisionalt);
				 $_pV('empCostItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.empcostchangefirstyear),'a');
				 $_pV('empCostItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.empcostchangesecondyear),'a');
				
				 $_pV('rentItrTextId1','tex',a.incomestmtitr.operatingmargin.rentauditedfirst);
				 $_pV('rentItrTextId2','tex',a.incomestmtitr.operatingmargin.rentauditedsecond);
				 $_pV('rentItrTextId3','tex',a.incomestmtitr.operatingmargin.rentcaprovisionalt);
				 $_pV('rentItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.rentchangefirstyear),'a');
				 $_pV('rentItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.rentchangesecondyear),'a');
				
				 $_pV('elecItrTextId1','tex',a.incomestmtitr.operatingmargin.electricityexpauditedfirst);
				 $_pV('elecItrTextId2','tex',a.incomestmtitr.operatingmargin.electricityexpauditedsecond);
				 $_pV('elecItrTextId3','tex',a.incomestmtitr.operatingmargin.electricityexpcaprovisionalt);
				 $_pV('elecItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.electricityexpchangefirstyear),'a');
				 $_pV('elecItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.electricityexpchangesecondyear),'a');
				
				 $_pV('othersItrTextId1','tex',a.incomestmtitr.operatingmargin.otherauditedfirst);
				 $_pV('othersItrTextId2','tex',a.incomestmtitr.operatingmargin.otherauditedsecond);
				 $_pV('othersItrTextId3','tex',a.incomestmtitr.operatingmargin.othercaprovisionalt);
				 $_pV('othersItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.otherchangefirstyear),'a');
				 $_pV('othersItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.otherchangesecondyear),'a');
				
				 $_pV('expExcPrtnrsItrColId1','tex',a.incomestmtitr.operatingmargin.expauditedfirst);
				 $_pV('expExcPrtnrsItrColId2','tex',a.incomestmtitr.operatingmargin.expauditedsecond);
				 $_pV('expExcPrtnrsItrColId3','tex',a.incomestmtitr.operatingmargin.expcaprovisionalt);
				 $_pV('expExcPrtnrsItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.expchangefirstyear),'a');
				 $_pV('expExcPrtnrsItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.expchangesecondyear),'a');
				
				 $_pV('prtnrsItrTextId1','tex',a.incomestmtitr.operatingmargin.partnerenumauditedfirst);
				 $_pV('prtnrsItrTextId2','tex',a.incomestmtitr.operatingmargin.partnerenumauditedsecond);
				 $_pV('prtnrsItrTextId3','tex',a.incomestmtitr.operatingmargin.partnerenumcaprovisionalt);
				 $_pV('prtnrsItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.partnerenumchangefirstyear),'a');
				 $_pV('prtnrsItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.partnerenumchangesecondyear),'a');
				
				 $_pV('intPrtnrsItrTextId1','tex',a.incomestmtitr.operatingmargin.intrestpartnerauditedfirst);
				 $_pV('intPrtnrsItrTextId2','tex',a.incomestmtitr.operatingmargin.intrestpartnerauditedsecond);
				 $_pV('intPrtnrsItrTextId3','tex',a.incomestmtitr.operatingmargin.intrestpartnercaprovisionalt);
				 $_pV('intPrtnrsItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.intrestpartnerchangefirstyear),'a');
				 $_pV('intPrtnrsItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.intrestpartnerchangesecondyear),'a');
				
				 $_pV('operatingPrftItrColId1','tex',a.incomestmtitr.operatingmargin.operatingprofitauditedfirst);
				 $_pV('operatingPrftItrColId2','tex',a.incomestmtitr.operatingmargin.operatingprofitauditedsecond);
				 $_pV('operatingPrftItrColId3','tex',a.incomestmtitr.operatingmargin.operatingprofitcaprovisionalt);
				 $_pV('operatingPrftItrColId4','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingprofitchangefirstyear),'a');
				 $_pV('operatingPrftItrColId5','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingprofitchangesecondyear),'a');
				
				 $_pV('operatingMarginItrCol1','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingmarginauditedfirst),'a');
				 $_pV('operatingMarginItrCol2','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingmarginauditedsecond),'a');
				 $_pV('operatingMarginItrCol3','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingmargincaprovisionalt),'a');
				 $_pV('operatingMarginItrCol4','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingmarginchangefirstyear),'a');
				 $_pV('operatingMarginItrCol5','tex',$_pIp(a.incomestmtitr.operatingmargin.operatingmarginchangesecondyear),'a')
			
				 // pbditrid
				 $_pV('otherIncmItrTextId1','tex',a.incomestmtitr.pbditrid.otherincomeauditedfirst);
				 $_pV('otherIncmItrTextId2','tex',a.incomestmtitr.pbditrid.otherincomeauditedsecond);
				 $_pV('otherIncmItrTextId3','tex',a.incomestmtitr.pbditrid.otherincomecaprovisionalt);
				 $_pV('otherIncmItrColId4','tex',$_pIp(a.incomestmtitr.pbditrid.otherincomechangefirstyear),'a');
				 $_pV('otherIncmItrColId5','tex',$_pIp(a.incomestmtitr.pbditrid.otherincomechangesecondyear),'a');
				
				 $_pV('pbditItrColId1','tex',a.incomestmtitr.pbditrid.pbditauditedfirst);
				 $_pV('pbditItrColId2','tex',a.incomestmtitr.pbditrid.pbditauditedsecond);
				 $_pV('pbditItrColId3','tex',a.incomestmtitr.pbditrid.pbditcaprovisionalt);
				 $_pV('pbditItrColId4','tex',$_pIp(a.incomestmtitr.pbditrid.pbditchangefirstyear),'a');
				 $_pV('pbditItrColId5','tex',$_pIp(a.incomestmtitr.pbditrid.pbditchangesecondyear),'a');
				
				 $_pV('pbditMarginsItrColId1','tex',$_pIp(a.incomestmtitr.pbditrid.pbditmarginauditedfirst),'a');
				 $_pV('pbditMarginsItrColId2','tex',$_pIp(a.incomestmtitr.pbditrid.pbditmarginauditedsecond),'a');
				 $_pV('pbditMarginsItrColId3','tex',$_pIp(a.incomestmtitr.pbditrid.pbditmargincaprovisionalt),'a');
				 $_pV('pbditMarginsItrColId4','tex',$_pIp(a.incomestmtitr.pbditrid.pbditmarginchangefirstyear),'a');
				 $_pV('pbditMarginsItrColId5','tex',$_pIp(a.incomestmtitr.pbditrid.pbditmarginchangesecondyear),'a');
		
				//intrestid
				 $_pV('intOdOcItrTextId1','tex',a.incomestmtitr.intrestid.intrestodauditedfirst);
				 $_pV('intOdOcItrTextId2','tex',a.incomestmtitr.intrestid.intrestodauditedsecond);
				 $_pV('intOdOcItrTextId3','tex',a.incomestmtitr.intrestid.intrestodcaprovisionalt);
				 $_pV('intOdOcItrColId4','tex',$_pIp(a.incomestmtitr.intrestid.intrestodchangefirstyear),'a');
				 $_pV('intOdOcItrColId5','tex',$_pIp(a.incomestmtitr.intrestid.intrestodchangesecondyear),'a');
				
				 $_pV('IntPaidItrTextId1','tex',a.incomestmtitr.intrestid.intrestpaidbankauditedfirst);
				 $_pV('IntPaidItrTextId2','tex',a.incomestmtitr.intrestid.intrestpaidbankauditedsecond);
				 $_pV('IntPaidItrTextId3','tex',a.incomestmtitr.intrestid.intrestpaidbankcaprovisionalt);
				 $_pV('IntPaidItrColId4','tex',$_pIp(a.incomestmtitr.intrestid.intrestpaidbankchangefirstyear),'a');
				 $_pV('IntPaidItrColId5','tex',$_pIp(a.incomestmtitr.intrestid.intrestpaidbankchangesecondyear),'a');
				
				 $_pV('IntToPvtPartiesItrTextId1','tex',a.incomestmtitr.intrestid.intrestfamilyauditedfirst);
				 $_pV('IntToPvtPartiesItrTextId2','tex',a.incomestmtitr.intrestid.intrestfamilyauditedsecond);
				 $_pV('IntToPvtPartiesItrTextId3','tex',a.incomestmtitr.intrestid.intrestfamilycaprovisionalt);
				 $_pV('IntToPvtPartiesItrColId4','tex',$_pIp(a.incomestmtitr.intrestid.intrestfamilychangefirstyear),'a');
				 $_pV('IntToPvtPartiesItrColId5','tex',$_pIp(a.incomestmtitr.intrestid.intrestfamilychangesecondyear),'a');
				
				 $_pV('OthrIntExpsTextId1','tex',a.incomestmtitr.intrestid.intrestexpauditedfirst);
				 $_pV('OthrIntExpsTextId2','tex',a.incomestmtitr.intrestid.intrestexpdauditedsecond);
				 $_pV('OthrIntExpsTextId3','tex',a.incomestmtitr.intrestid.intrestexpcaprovisionalt);
				 $_pV('OthrIntExpsColId4','tex',$_pIp(a.incomestmtitr.intrestid.intrestexpchangefirstyear),'a');
				 $_pV('OthrIntExpsColId5','tex',$_pIp(a.incomestmtitr.intrestid.intrestexpchangesecondyear),'a');
				
				 $_pV('totalIntPaidItrColId1','tex',a.incomestmtitr.intrestid.totalintpaidauditedfirst);
				 $_pV('totalIntPaidItrColId2','tex',a.incomestmtitr.intrestid.totalintpaidauditedsecond);
				 $_pV('totalIntPaidItrColId3','tex',a.incomestmtitr.intrestid.totalintpaidcaprovisionalt);
				 $_pV('totalIntPaidItrColId4','tex',$_pIp(a.incomestmtitr.intrestid.totalintpaidchangefirstyear),'a');
				 $_pV('totalIntPaidItrColId5','tex',$_pIp(a.incomestmtitr.intrestid.totalintpaidchangesecondyear),'a');
			
				//patid
				 $_pV('patItrColId1','tex',a.incomestmtitr.patid.patauditedfirst);
				 $_pV('patItrColId2','tex',a.incomestmtitr.patid.patauditedsecond);
				 $_pV('patItrColId3','tex',a.incomestmtitr.patid.patcaprovisionalt);
				 $_pV('patItrColId4','tex',$_pIp(a.incomestmtitr.patid.patchangefirstyear),'a');
				 $_pV('patItrColId5','tex',$_pIp(a.incomestmtitr.patid.patchangesecondyear),'a');
				
				 $_pV('netProfitMrgnItrColId1','tex',$_pIp(a.incomestmtitr.patid.netprofitauditedfirst),'a');
				 $_pV('netProfitMrgnItrColId2','tex',$_pIp(a.incomestmtitr.patid.netprofitauditedsecond),'a');
				 $_pV('netProfitMrgnItrColId3','tex',$_pIp(a.incomestmtitr.patid.netprofitcaprovisionalt),'a');
				 $_pV('netProfitMrgnItrColId4','tex',$_pIp(a.incomestmtitr.patid.netprofitchangefirstyear),'a');
				 $_pV('netProfitMrgnItrColId5','tex',$_pIp(a.incomestmtitr.patid.netprofitchangesecondyear),'a');
				
				 $_pV('ebtdaCashPrftItrCol1','tex',a.incomestmtitr.patid.ebtdacashauditedfirst);
				 $_pV('ebtdaCashPrftItrCol2','tex',a.incomestmtitr.patid.ebtdacashauditedsecond);
				 $_pV('ebtdaCashPrftItrCol3','tex',a.incomestmtitr.patid.ebtdacashcaprovisionalt);
				 $_pV('ebtdaCashPrftItrCol4','tex',$_pIp(a.incomestmtitr.patid.ebtdacashchangefirstyear),'a');
				 $_pV('ebtdaCashPrftItrCol5','tex',$_pIp(a.incomestmtitr.patid.ebtdacashchangesecondyear),'a');
				
				 $_pV('ebtdaCashPrftPerItrCol1','tex',$_pIp(a.incomestmtitr.patid.ebtdacashpauditedfirst),'a');
				 $_pV('ebtdaCashPrftPerItrCol2','tex',$_pIp(a.incomestmtitr.patid.ebtdacashpauditedsecond),'a');
				 $_pV('ebtdaCashPrftPerItrCol3','tex',$_pIp(a.incomestmtitr.patid.ebtdacashpcaprovisionalt),'a');
				 $_pV('ebtdaCashPrftPerItrCol4','tex',$_pIp(a.incomestmtitr.patid.ebtdacashpchangefirstyear),'a');
				 $_pV('ebtdaCashPrftPerItrCol5','tex',$_pIp(a.incomestmtitr.patid.ebtdacashpchangesecondyear),'a');
				
				 $_pV('ebitdaItrCol1','tex',a.incomestmtitr.patid.ebtdamauditedfirst);
				 $_pV('ebitdaItrCol2','tex',a.incomestmtitr.patid.eebtdamauditedsecond);
				 $_pV('ebitdaItrCol3','tex',a.incomestmtitr.patid.ebtdamcaprovisionalt);
				 $_pV('ebitdaItrCol4','tex',$_pIp(a.incomestmtitr.patid.ebtdamchangefirstyear),'a');
				 $_pV('ebitdaItrCol5','tex',$_pIp(a.incomestmtitr.patid.ebtdamchangesecondyear),'a');
				
				 $_pV('ebitdaPerItrCol1','tex',$_pIp(a.incomestmtitr.patid.ebtdamarginpauditedfirst),'a');
				 $_pV('ebitdaPerItrCol2','tex',$_pIp(a.incomestmtitr.patid.ebtdamarginpauditedsecond),'a');
				 $_pV('ebitdaPerItrCol3','tex',$_pIp(a.incomestmtitr.patid.ebtdamarginpcaprovisionalt),'a');
				 $_pV('ebitdaPerItrCol4','tex',$_pIp(a.incomestmtitr.patid.ebtdamarginpchangefirstyear),'a');
				 $_pV('ebitdaPerItrCol5','tex',$_pIp(a.incomestmtitr.patid.ebtdamarginpchangesecondyear),'a');
		
				 //depreciationid
				 $_pV('pbdtItrColId1','tex',a.incomestmtitr.depreciationid.pbdtauditedfirst);
				 $_pV('pbdtItrColId2','tex',a.incomestmtitr.depreciationid.pbdtauditedsecond);
				 $_pV('pbdtItrColId3','tex',a.incomestmtitr.depreciationid.pbdtcaprovisionalt);
				 $_pV('pbdtItrColId4','tex',$_pIp(a.incomestmtitr.depreciationid.pbdtchangefirstyear),'a');
				 $_pV('pbdtItrColId5','tex',$_pIp(a.incomestmtitr.depreciationid.pbdtchangesecondyear),'a');
				
				 $_pV('deprectnItrTextId1','tex',a.incomestmtitr.depreciationid.depreciationuditedfirst);
				 $_pV('deprectnItrTextId2','tex',a.incomestmtitr.depreciationid.depreciationauditedsecond);
				 $_pV('deprectnItrTextId3','tex',a.incomestmtitr.depreciationid.depreciationcaprovisionalt);
				 $_pV('deprectnItrColId4','tex',$_pIp(a.incomestmtitr.depreciationid.depreciationchangefirstyear),'a');
				 $_pV('deprectnItrColId5','tex',$_pIp(a.incomestmtitr.depreciationid.depreciationchangesecondyear),'a');
				
				 $_pV('pbtItrColId1','tex',a.incomestmtitr.depreciationid.pbtauditedfirst);
				 $_pV('pbtItrColId2','tex',a.incomestmtitr.depreciationid.pbtauditedsecond);
				 $_pV('pbtItrColId3','tex',a.incomestmtitr.depreciationid.pbtcaprovisionalt);
				 $_pV('pbtItrColId4','tex',$_pIp(a.incomestmtitr.depreciationid.pbtchangefirstyear),'a');
				 $_pV('pbtItrColId5','tex',$_pIp(a.incomestmtitr.depreciationid.pbtchangesecondyear),'a');
				
				 $_pV('pbtasperItrTextId1','val',a.incomestmtitr.depreciationid.pbtitrauditedfirst);
				 $_pV('pbtasperItrTextId2','val',a.incomestmtitr.depreciationid.pbtitrauditedsecond);
				 $_pV('pbtasperItrTextId3','val',a.incomestmtitr.depreciationid.pbtitrcaprovisionalt);
				 $_pV('pbtasperItrColId4','tex',$_pIp(a.incomestmtitr.depreciationid.pbtitrchangefirstyear),'a');
				 $_pV('pbtasperItrColId5','tex',$_pIp(a.incomestmtitr.depreciationid.pbtitrchangesecondyear),'a');
				
				 $_pV('diffInPLItrCol1','tex',a.incomestmtitr.depreciationid.diffplauditedfirst);
				 $_pV('diffInPLItrCol2','tex',a.incomestmtitr.depreciationid.diffplauditedsecond);
				 $_pV('diffInPLItrCol3','tex',a.incomestmtitr.depreciationid.diffplcaprovisionalt);
				 $_pV('diffInPLItrCol4','tex',$_pIp(a.incomestmtitr.depreciationid.diffplchangefirstyear),'a');
				 $_pV('diffInPLItrCol5','tex',$_pIp(a.incomestmtitr.depreciationid.diffplchangesecondyear),'a');
				
				 $_pV('IncmTaxItrTextId1','val',a.incomestmtitr.depreciationid.incometaxauditedfirst);
				 $_pV('IncmTaxItrTextId2','val',a.incomestmtitr.depreciationid.incometaxauditedsecond);
				 $_pV('IncmTaxItrTextId3','val',a.incomestmtitr.depreciationid.incometaxcaprovisionalt);
				 $_pV('IncmTaxItrColId4','tex',$_pIp(a.incomestmtitr.depreciationid.incometaxchangefirstyear),'a');
				 $_pV('IncmTaxItrColId5','tex',$_pIp(a.incomestmtitr.depreciationid.incometaxchangesecondyear),'a');
		
		//assetitr
			 $_pV('ttlAssetsItrColId1','tex',a.assetitr.totalassetauditedfirst);
			 $_pV('ttlAssetsItrColId2','tex',a.assetitr.totalassetauditedsecond);
			 $_pV('ttlAssetsItrColId3','tex',a.assetitr.totalassetcaprovisionalt);
			 $_pV('ttlAssetsItrColId4','tex',a.assetitr.totalassetfundflowfirst);
			 $_pV('ttlAssetsItrColId5','tex',a.assetitr.totalassetfundflowsecond);
			
				// currentassetid
			 	 $_pV('cashAndBankItrTextId1','val',a.assetitr.currentassetid.cashnbankauditedfirst);
				 $_pV('cashAndBankItrTextId2','val',a.assetitr.currentassetid.cashnbankauditedsecond);
				 $_pV('cashAndBankItrTextId3','val',a.assetitr.currentassetid.cashnbankcaprovisionalt);
				 $_pV('cashAndBankItrColId4','tex',a.assetitr.currentassetid.cashnbankfundflowfirst);
				 $_pV('cashAndBankItrColId5','tex',a.assetitr.currentassetid.cashnbankfundflowsecond);
				
				 $_pV('sDebtorTotalsItrTextId1','val',a.assetitr.currentassetid.sdebttotalauditedfirst);
				 $_pV('sDebtorTotalsItrTextId2','val',a.assetitr.currentassetid.sdebttotalauditedsecond);
				 $_pV('sDebtorTotalsItrTextId3','val',a.assetitr.currentassetid.sdebttotalcaprovisionalt);
				 $_pV('sDebtorTotalsItrColId4','tex',a.assetitr.currentassetid.sdebttotalfundflowfirst);
				 $_pV('sDebtorTotalsItrColId5','tex',a.assetitr.currentassetid.sdebttotalfundflowsecond);
				
				 $_pV('sDebtorsMre6MnthsItrTextId1','val',a.assetitr.currentassetid.sdebtmore6auditedfirst);
				 $_pV('sDebtorsMre6MnthsItrTextId2','val',a.assetitr.currentassetid.sdebtmore6auditedsecond);
				 $_pV('sDebtorsMre6MnthsItrTextId3','val',a.assetitr.currentassetid.sdebtmore6caprovisionalt);
				 $_pV('sDebtorsMre6MnthsItrColId4','tex',a.assetitr.currentassetid.sdebtmore6lfundflowfirst);
				 $_pV('sDebtorsMre6MnthsItrColId5','tex',a.assetitr.currentassetid.sdebtmore6fundflowsecond);
				
				 $_pV('sDebtorsMre6MnthsDbtItrTextId1','val',a.assetitr.currentassetid.sdebtconsider6auditedfirst);
				 $_pV('sDebtorsMre6MnthsDbtItrTextId2','val',a.assetitr.currentassetid.sdebtconsider6auditedsecond);
				 $_pV('sDebtorsMre6MnthsDbtItrTextId3','val',a.assetitr.currentassetid.sdebtconsider6caprovisionalt);
				 $_pV('sDebtorsMre6MnthsDbtItrColId4','tex',a.assetitr.currentassetid.sdebtconsider6lfundflowfirst);
				 $_pV('sDebtorsMre6MnthsDbtItrColId5','tex',a.assetitr.currentassetid.sdebtconsider6fundflowsecond);
				
				 $_pV('inventorItrTextId1','val',a.assetitr.currentassetid.inventoryassetauditedfirst);
				 $_pV('inventorItrTextId2','val',a.assetitr.currentassetid.inventoryauditedsecond);
				 $_pV('inventorItrTextId3','val',a.assetitr.currentassetid.inventorycaprovisionalt);
				 $_pV('inventorItrColId4','tex',a.assetitr.currentassetid.inventoryfundflowfirst);
				 $_pV('inventorItrColId5','tex',a.assetitr.currentassetid.inventoryfundflowsecond);
				
				 $_pV('advToFmlyItrTextId1','val',a.assetitr.currentassetid.advfamilyauditedfirst);
				 $_pV('advToFmlyItrTextId2','val',a.assetitr.currentassetid.advfamilyauditedsecond);
				 $_pV('advToFmlyItrTextId3','val',a.assetitr.currentassetid.advfamilycaprovisionalt);
				 $_pV('advToFmlyItrColId4','tex',a.assetitr.currentassetid.advfamilyfundflowfirst);
				 $_pV('advToFmlyItrColId5','tex',a.assetitr.currentassetid.advfamilyfundflowsecond);
				
				 $_pV('miscExpNotItrText1','val',a.assetitr.currentassetid.miscexptauditedfirst);
				 $_pV('miscExpNotItrText2','val',a.assetitr.currentassetid.miscexpauditedsecond);
				 $_pV('miscExpNotItrText3','val',a.assetitr.currentassetid.miscexpcaprovisionalt);
				 $_pV('miscExpNotItrCol4','tex',a.assetitr.currentassetid.miscexpfundflowfirst);
				 $_pV('miscExpNotItrCol5','tex',a.assetitr.currentassetid.miscexpfundflowsecond);
				
				 $_pV('othersThirdItrTextId1','val',a.assetitr.currentassetid.otherassetauditedfirst);
				 $_pV('othersThirdItrTextId2','val',a.assetitr.currentassetid.otherassetauditedsecond);
			 	 $_pV('othersThirdItrTextId3','val',a.assetitr.currentassetid.otherassetcaprovisionalt);
				 $_pV('othersThirdItrColId4','tex',a.assetitr.currentassetid.otherassetfundflowfirst);
				 $_pV('othersThirdItrColId5','tex',a.assetitr.currentassetid.otherassetfundflowsecond);
				
				 $_pV('ttlCrntAssetsItrColId1','tex',a.assetitr.currentassetid.totalcurrentassetauditedfirst);
				 $_pV('ttlCrntAssetsItrColId2','tex',a.assetitr.currentassetid.totalcurrentassetauditedsecond);
				 $_pV('ttlCrntAssetsItrColId3','tex',a.assetitr.currentassetid.totalcurrentassetcaprovisionalt);
				 $_pV('ttlCrntAssetsItrColId4','tex',a.assetitr.currentassetid.totalcurrentassetfundflowfirst);
				 $_pV('ttlCrntAssetsItrColId5','tex',a.assetitr.currentassetid.totalcurrentassetfundflowsecond);
			
	
				 // investmentitrid
				 $_pV('invInGrpId1','val',a.assetitr.investmentitrid.investmentgroupassetauditedfirst);
				 
				// // console.log('new1-',a.assetitr.investmentitrid.investmentgroupassetauditedfirst);
				 $_pV('invInGrpId2','val',a.assetitr.investmentitrid.investmentgroupassetauditedsecond);
				 $_pV('invInGrpId3','val',a.assetitr.investmentitrid.investmentgroupassetcaprovisionalt);
				 $_pV('invInGrpId4','tex',a.assetitr.investmentitrid.investmentgroupassetfundflowfirst);
				 $_pV('invInGrpId5','tex',a.assetitr.investmentitrid.investmentgroupassetfundflowsecond);
				
				 $_pV('othInvnsId1','val',a.assetitr.investmentitrid.otherinvestmentassetauditedfirst);
				 $_pV('othInvnsId2','val',a.assetitr.investmentitrid.otherinvestmentassetauditedsecond);
				 $_pV('othInvnsId3','val',a.assetitr.investmentitrid.otherinvestmentassetcaprovisionalt);
				 $_pV('othInvnsId4','tex',a.assetitr.investmentitrid.otherinvestmentassetfundflowfirst);
				 $_pV('othInvnsId5','tex',a.assetitr.investmentitrid.otherinvestmentassetfundflowsecond);
				
				$_pV('totInvId1','tex',a.assetitr.investmentitrid.totalinvestmentassetauditedfirst);
				$_pV('totInvId2','tex',a.assetitr.investmentitrid.totalinvestmentassetauditedsecond);
				$_pV('totInvId3','tex',a.assetitr.investmentitrid.totalinvestmentassetcaprovisionalt);
				$_pV('totInvId4','tex',a.assetitr.investmentitrid.totalinvestmentassetfundflowfirst);
				$_pV('totInvId5','tex',a.assetitr.investmentitrid.totalinvestmentassetfundflowsecond);
		
	
				// fixedassetid
				 $_pV('fixedAssetsItrTextId1','val',a.assetitr.fixedassetid.fixedassetauditedfirst);
				 $_pV('fixedAssetsItrTextId2','val',a.assetitr.fixedassetid.fixedassetauditedsecond);
				 $_pV('fixedAssetsItrTextId3','val',a.assetitr.fixedassetid.fixedassetcaprovisionalt);
				 $_pV('fixedAssetsItrColId4','tex',a.assetitr.fixedassetid.fixedassetfundflowfirst);
				 $_pV('fixedAssetsItrColId5','tex',a.assetitr.fixedassetid.fixedassetfundflowsecond);
				
				 $_pV('ttlFixedAssetsColId1','tex',a.assetitr.fixedassetid.totalfixedassetauditedfirst);
				 $_pV('ttlFixedAssetsColId2','tex',a.assetitr.fixedassetid.totalfixedassetauditedsecond);
				 $_pV('ttlFixedAssetsColId3','tex',a.assetitr.fixedassetid.totalfixedassetcaprovisionalt);
				 $_pV('ttlFixedAssetsColId4','tex',a.assetitr.fixedassetid.totalfixedassetfundflowfirst);
				 $_pV('ttlFixedAssetsColId5','tex',a.assetitr.fixedassetid.totalfixedassetfundflowsecond);
				 
				 totalItrVatCal(12,'salesToasPerVatItrTextId-','salesTtlsForToasPerVatItr','vatCstStTtlsForToasPerVatItr','vatCstStTtlsForToasPerVatItrFinal');
				 totalItrVatCal(12,'vatCstStToasPerVatItrId-','vatCstStTtlsForToasPerVatItr','salesTtlsForToasPerVatItr','vatCstStTtlsForToasPerVatItrFinal');
		
				 //		 totalItrVatCal(4,'quarterVatCstStItrId-','VatCstStTtlsForQuartersItrId','salesTtlsForQuartersItrId','VatCstStTtlsForQuartersItrIdFinal');
		//		 totalItrVatCal(2,'biannualVatCstStItrId-','VatCstStTtlsForBiannualId','salesTtlsForBiannualItrId','VatCstStTtlsForBiannualIdFinal');
				 //$('table').editableTableWidget();
	});$_resizeStat();//$('table').editableTableWidget();
} // end for $itr_js();