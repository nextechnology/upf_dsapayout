/* Author(s) : Ayjaz Sayed & Mohan Nukala*/
    
var _calTurnOverHead7 		= 	0
	,_temturnOverHead6		=	0
	,_tempgrossMarginHead4	=	0
	,_placeTurnOverHead7	=	0
	,_marginEbitdaHead2		=	0
	,_marginEbitdaHead3		=	0
	,_marginEbitdaHead4		=	0
	,_tempMarginEdit7		=	0
	,_tempMarginEdit8		=	0
	,escRowCount			=   0
	,ratnlRowCount			=   0
	,submittedEscalationData = ''
	,_snapEscGet = 0
	,_snapRatnGet = 0 
	,approvalAmnt = 0;
var API_D2D_POST = '/upf-system/upf/snapshot/getdexterdata/';
var API_BUSSEG_GET = "/upf-system/upf/dextershiny/getbusinesssegment";
function $snapshotCode(API_SS_GET){
	var _temp = 0
		,_itrCheck='';
$.getJSON(API_SS_CHECK+$("#ClientSessionId").val(),function(snapCheck) {
//	 $('#snapshotTab input, #snapshotTab select, #snapshotTab textarea').prop('disabled', true);
	requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
		$(reply.accessList).each(function(k,v){
		if(v.SNAPSHOT == "READ ONLY" || v.SNAPSHOT == "READONLY" || v.SNAPSHOT == "READ"){
			$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', true);
			$('#btnEscSubmitDummyId').attr('disabled',true);
		}else if(v.SNAPSHOT == "WRITE" || v.SNAPSHOT == "VIEW ALL"){
			$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', false);
		}else{
			$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', false);
		}
		});
		$_disableAllFields();
	});
	//// // // console.log(snapCheck.status);
	/*if(snapCheck.status == 'qualitative' || snapCheck.status == 'both' ){
		alert('Please fill the required details in Qualitative.');activaTab('qualitativeTab');
	}else{*/ 
		$('#snapshotTable').removeClass('m-loadingEngage');
		$('#snapLoading').hide();
		
		if(1 == 1){

			$.getJSON(API_SS_GET+$("#ClientSessionId").val(),function(a){
				if(localStorage.getItem("snapshot") == 0) {
						localStorage.setItem("cmSubmitForApproval",a.cmSubmitForApproval);
					//	$('#snapshotTable').addClass('m-loadingEngage');
						_marginEbitdaHead2=0,_tempgrossMarginHead4=0,_marginEbitdaHead3=0,_marginEbitdaHead4=0,_tempMarginEdit7=0,_tempMarginEdit8=0;
						_temturnOverHead6=0,_calTurnOverHead7 = 0,_placeTurnOverHead7=0;
						submittedEscalationData = a.submittedEscalationData;
						// Bank list 
				//		// // // console.log(a.bankNames);
						var _bnkLst = '<option></option>';
						$(a.bankNames).each(function(k,v){
							_bnkLst += '<option>'+v.bankName+'</option>'
							
						});
						localStorage.setItem("snapshot",1);
						$('#primaryAcSnapId').empty().append(_bnkLst);
						$('#primaryAcSnapId').val(a.primarybankacc1);
						/*---- 1 ------*/
						$("#businessType").val(a.Businesstype);
						//$("#companyNameSnap").text(a.businessName);
						$("#constitutionId").text(a.constitution);
						$("#offStatus").text(a.officeStatus);
						$("#serviceTaxOrVat").val(a.Servicetax);
						$("#businessSegment").val(a.Businesssegment);
						$("#ownershipstrucId").val($commaPut(a.Ownstructureno));
						$("#residenceStatus").text(a.residentStatus);
						$("#TDSId").val(a.Tds);
						$("#businessLocationsnap").val(a.Businesslocation);
						$("#relPartyId").val(a.Relatedparty);
						$("#familysnap").text(a.family);
						$("#custProfileSnap").text(a.customerProfile);
						$("#incomeTaxId").val(a.Incometax);
						$("#businessVintageSnap").text(a.businessVintage);
						$("#scoreAndTracksSnap").text(a.cibilScore);
						$("#networthSnap").text($commaPut(a.networth));
						$("#caseSummary").val(a.casesummary);
						$('#stressTestSnap').text(a.stresstest);
						$('#riskCategorySnap').val(a.Riskcategory);
						$('#hueVintgMnthsId').val(a.huevintagemonth);
						$('#freeCashHead8').text($commaPut(parseFloat(a.freecashvalue).toFixed(0)));
						/************************************/
						 
						$('#turnOverHead8').val($commaPut($_fix0(a.TurnoverG)));
						$('#grossMarginHead7').val(parseFloat(a.GrossmarginF).toFixed(2));
						$('#grossMarginHead8').val(parseFloat(a.GrossmarginG).toFixed(2));
						$('#salariesHead7').val($commaPut(a.SalariesF));
						$('#salariesHead8').val($commaPut(a.SalariesG));
						$('#rentalHead27').val($commaPut(a.RentalF));
						$('#rentalHead28').val($commaPut(a.setRentalG));
						$('#electricityHead7').val($commaPut(a.ElectricityF));
						$('#electricityHead8').val($commaPut(a.ElectricityG));
						$('#misOthersHead7').val($commaPut(a.MiscF));
						$('#misOthersHead8').val($commaPut(a.MiscG));
						$('#freeCashHead9').val((a.freecashselection));
					//	// // // console.log(a.OtherincomeG);
						$('#otherIncomeHead8').val($commaPut(a.OtherincomeG));
						$('#dscrMethodHead2').val(a.Dscrmethod);
						
						//$('#dscrMethodHead7').val(a.Edctomulitplier);
					//	// // console.log('a.Edctomulitplier-',a.Edctomulitplier);
						(a.Edctomulitplier == '')?$('#dscrMethodHead7').val(3):$('#dscrMethodHead7').val(a.Edctomulitplier);
						
						$('#consiAmntSnap2').val($commaPut(a.Considermddb));
						// console.log('existingHse',a.existingHse);
						$('#exixtingHseId').text($commaPut(a.existingHse));
						$('#apprvdLoanAmntSnap').val($commaPut(a.Finalloanamount));
						$('#loanApprvMethd').val((a.Loanfinalisedunder));
						var loanAmntDexter = parseInt(a.loanamtdexter) < 0 ? 0 :parseInt(a.loanamtdexter);  
						$('#loanAmountSnap4').text($commaPut(loanAmntDexter));
						$('#consiAmntSnap4').text($commaPut(a.dexterdscr));
						//$('#tenureSnap').val(a.Tenure);
					//	// // console.log('a.Tenure-',a.Tenure);
						(a.Tenure == '')?$('#tenureSnap').val(10):$('#tenureSnap').val(a.Tenure);
						
						//$('#repayFreqSnap').val(a.Repayfrequency);
					//	// // console.log('a.Repayfrequency-',a.Repayfrequency);
						(a.Repayfrequency == undefined)?$('#repayFreqSnap').val('Daily'):$('#repayFreqSnap').val(a.Repayfrequency);
					//	// // console.log('a.Intrestrate-',a.Intrestrate);
						(a.Intrestrate == 0)?$('#interstRateSnap').val(parseFloat(24).toFixed(2)):$('#interstRateSnap').val(parseFloat(a.Intrestrate).toFixed(2));
						
						//$('#interstRateSnap').val(parseFloat(a.Intrestrate).toFixed(2));
						$('#addRemarksSnap').val(a.Additionalremark);
//						$('#snapPdDoneById').val(a.Pddoneby);
						$('#snapPdDoneById').text(localStorage.getItem("smName"));
						/*---- *1* -----*/
						
						$('#otherIncomeHead2').text($commaPut(a.otherIncomeA));
						$('#otherIncomeHead3').text($commaPut(a.otherIncomeB));
						$('#otherIncomeHead4').text($commaPut(a.otherIncomeC));
						$('#itr2HeadSnap').text(a.lineItemsA);
						$('#itr1HeadSnap').text(a.lineItemsB);
						$('#latestHeadSnap').text(a.lineItemsC);
						$('#loanAmountSnap3').text($commaPut(a.highestloanAmount));
						
						$('#turnOverHead9').val(a.commentturn);
						$('#grossMarginHead9').val(a.commentgrossmargin);
						$('#salariesHead9').val(a.commentsalaries);
						$('#rentalHead29').val(a.commentrental);
						$('#electricityHead9').val(a.commentelectricity);
						$('#misOthersHead9').val(a.commentmisc);
						$('#otherIncomeHead9').val(a.commentotherincome);
						 
						if(a.itocriteriaA == "No Escalations" || a.itocriteriaA == "" || a.itocriteriaA == undefined){
							$('#escalationSnapRow1').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow1').text("No Escalations");
						}
						else{
							$('#escalationSnapRow1').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow1').text(a.itocriteriaA);
						}
						$('#decisionSnapRow1').val(a.itocriteriaB);
						$('#reasonSnapRow1').val(a.itocriteriaC);
						
						if(a.propertyowned=="No Escalations" || a.propertyowned=="" || a.propertyowned==undefined){
							$('#escalationSnapRow2').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow2').text("No Escalations");
						}
						else{
							$('#escalationSnapRow2').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow2').text(a.propertyowned);
						}
						$('#decisionSnapRow2').val(a.propertyownedB);
						$('#reasonSnapRow2').val(a.propertyownedC);
						
						if(a.minvintageminimumthree=="No Escalations" || a.minvintageminimumthree=="" || a.minvintageminimumthree == undefined){
							$('#escalationSnapRow3').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow3').text("No Escalations");
						}
						else{
							$('#escalationSnapRow3').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow3').text(a.minvintageminimumthree);
						}
						$('#decisionSnapRow3').val(a.minvintageminimumthreeB);
						$('#reasonSnapRow3').val(a.minvintageminimumthreeC);
						
						if(a.minvintagegreaterthree=="No Escalations" || a.minvintagegreaterthree=="" || a.minvintagegreaterthree==undefined){
							$('#escalationSnapRow4').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow4').text("No Escalations");
						}
						else{
							$('#escalationSnapRow4').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow4').text(a.minvintagegreaterthree);
						}
						$('#decisionSnapRow4').val(a.minvintagegreaterthreeB);
						$('#reasonSnapRow4').val(a.minvintagegreaterthreeC);
						
						if(a.cardsalesescaltion=="No Escalations" || a.cardsalesescaltion=="" || a.cardsalesescaltion==undefined){
							$('#escalationSnapRow5').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow5').text("No Escalations");
						}
						else{
							$('#escalationSnapRow5').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow5').text(a.cardsalesescaltion);
						}
						$('#decisionSnapRow5').val(a.cardsalesescaltionB);
						$('#reasonSnapRow5').val(a.cardsalesescaltionC);
						
						if(a.noofcredit=="No Escalations"){
							$('#escalationSnapRow6').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow6').text(a.noofcredit);
						}
						else{
							$('#escalationSnapRow6').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow6').text(a.noofcredit);
						}
						$('#decisionSnapRow6').val(a.noofcreditB);
						$('#reasonSnapRow6').val(a.noofcreditC);
						
						if(a.iwl3mescalation=="No Escalations"){
							$('#escalationSnapRow7').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow7').text(a.iwl3mescalation);
						}
						else{
							$('#escalationSnapRow7').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow7').text(a.iwl3mescalation);
						}
						$('#decisionSnapRow7').val(a.iwl3mescalationB);
						$('#reasonSnapRow7').val(a.iwl3mescalationC);
						
						if(a.iwl6mescalation=="No Escalations"){
							$('#escalationSnapRow8').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow8').text(a.iwl6mescalation);
						}
						else{
							$('#escalationSnapRow8').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow8').text(a.iwl6mescalation);
						}
						$('#decisionSnapRow8').val(a.iwl6mescalationB);
						$('#reasonSnapRow8').val(a.iwl6mescalationC);
						
						if(a.iwl9mescalation=="No Escalations"){
							$('#escalationSnapRow9').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow9').text(a.iwl9mescalation);
						}
						else{
							$('#escalationSnapRow9').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow9').text(a.iwl9mescalation);
						}
						$('#decisionSnapRow9').val(a.iwl9mescalationB);
						$('#reasonSnapRow9').val(a.iwl9mescalationC);
						
						if(a.ecl3mescalation=="No Escalations"){
							$('#escalationSnapRow10').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow10').text(a.ecl3mescalation);
						}
						else{
							$('#escalationSnapRow10').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow10').text(a.ecl3mescalation);
						}
						$('#decisionSnapRow10').val(a.ecl3mescalationB);
						$('#reasonSnapRow10').val(a.ecl3mescalationC);
						
						if(a.ecl6mescalation=="No Escalations"){
							$('#escalationSnapRow11').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow11').text(a.ecl6mescalation);
						}
						else{
							$('#escalationSnapRow11').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow11').text(a.ecl6mescalation);
						}
						$('#decisionSnapRow11').val(a.ecl6mescalationB);
						$('#reasonSnapRow11').val(a.ecl6mescalationC);
						
						if(a.ecl9mescalation=="No Escalations"){
							$('#escalationSnapRow12').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow12').text(a.ecl9mescalation);
						}
						else{
							$('#escalationSnapRow12').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow12').text(a.ecl9mescalation);
						}
						$('#decisionSnapRow12').val(a.ecl9mescalationB);
						$('#reasonSnapRow12').val(a.ecl9mescalationC);
					//	// // console.log('a.loanamountA-',a.loanamountA);
						if(a.loanamountA=="No Escalations" || a.loanamountA=="" || a.loanamountA==undefined){
							$('#escalationSnapRow13').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow13').text("No Escalations");
						}
						else{
							$('#escalationSnapRow13').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow13').text(a.loanamountA);
						}
						$('#decisionSnapRow13').val(a.loanamountB);
						$('#reasonSnapRow13').val(a.loanamountC);
						
						if(a.tenureescA=="No Escalations" || a.tenureescA=="" || a.tenureescA==undefined){
							$('#escalationSnapRow14').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow14').text("No Escalations");
						}
						else{
							$('#escalationSnapRow14').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow14').text(a.tenureescA);
						}
						$('#decisionSnapRow14').val(a.tenureescB);
						$('#reasonSnapRow14').val(a.tenureescC);
						
						if(a.huedeviationA=="No Escalations" || a.huedeviationA=="" || a.huedeviationA == undefined){
							$('#escalationSnapRow15').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow15').text("No Escalations");
						}
						else{
							$('#escalationSnapRow15').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow15').text(a.huedeviationA);
						}
						$('#decisionSnapRow15').val(a.huedeviationB);
						$('#reasonSnapRow15').val(a.huedeviationC);
						
						
				//		// // console.log('turnoverescalationA-',a.turnoverescalationA);
						if(a.turnoverescalationA=="No Escalations" || a.turnoverescalationA=="" || a.turnoverescalationA == undefined){
							$('#escalationSnapRow16').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow16').text("No Escalations");
						}
						else{
							$('#escalationSnapRow16').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow16').text(a.turnoverescalationA);
						}
						$('#decisionSnapRow16').val(a.turnoverescalationB);
						$('#reasonSnapRow16').val(a.turnoverescalationC);
						
						
						if(a.vatturnoverA=="No Escalations" || a.vatturnoverA=="" || a.vatturnoverA == undefined){
							$('#escalationSnapRow17').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow17').text("No Escalations");
						}
						else{
							$('#escalationSnapRow17').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
							$('#escalationSnapRow17').text(a.vatturnoverA);
						}
						$('#decisionSnapRow17').val(a.vatturnoverB);
						$('#reasonSnapRow17').val(a.vatturnoverC);
						
						/*------------ 2 Rendering --------------*/
						$('#turnOverHead5').text($commaPut($_fix0(a.turnOverD)));
						 _temturnOverHead6 = (a.turnOverE);
						 // // // console.log('turnOverE-',a.turnOverE);
						$('#turnOverHead6').text($commaPut(parseFloat(_temturnOverHead6).toFixed(0)));
					//	$('#turnOverHead7').text(parseInt(a.turnOverF)*3);
						_calTurnOverHead7 = parseInt(a.turnOverF);
						
						if(a.Edctomulitplier == 1){
							$('#turnOverHead7').text($commaPut(_calTurnOverHead7));
						}else if(a.Edctomulitplier == 1.5){
							$('#turnOverHead7').text($commaPut(parseFloat(_calTurnOverHead7 * 1.5).toFixed(0)));
						}else if(a.Edctomulitplier == 2){
							$('#turnOverHead7').text($commaPut(parseFloat(_calTurnOverHead7 * 2).toFixed(0)));
						}else if(a.Edctomulitplier == 2.5){
							$('#turnOverHead7').text($commaPut(parseFloat(_calTurnOverHead7 * 2.5).toFixed(0)));
						}else{
							$('#turnOverHead7').text($commaPut(parseFloat(_calTurnOverHead7 * 3).toFixed(0)));
						}
						//$('#turnOverHead7').text(parseInt(_calturnoverhead7)*3);
					//	$('#turnOverHead8').val();
													
						
						
						$("#salariesHead2").text($commaPut(parseFloat(a.salariesA)));
						$("#rentalHead22").text($commaPut(parseFloat(a.rentalA)));
						$("#electricityHead2").text($commaPut(parseFloat(a.electriCityA)));
						$("#misOthersHead2").text($commaPut(parseFloat(a.miscellaneousA)));
						
						$("#salariesHead3").text($commaPut(parseFloat(a.salariesB)));
						$("#rentalHead23").text($commaPut(parseFloat(a.rentalB)));
						$("#electricityHead3").text($commaPut(parseFloat(a.electriCityB))); 
						$("#misOthersHead3").text($commaPut(parseFloat(a.miscellaneousB)));
						
						$("#salariesHead4").text($commaPut(parseFloat(a.salariesC)));
						$("#rentalHead24").text($commaPut(parseFloat(a.rentalC)));
						$("#electricityHead4").text($commaPut(parseFloat(a.electriCityC)));
						$("#misOthersHead4").text($commaPut(parseFloat(a.miscellaneousC)));
						
						$('#loanObligHead8').text($commaPut(a.loanObligations));
						$('#loanObligHead2').text($('#loanObligHead8').text());
						$('#loanObligHead3').text($('#loanObligHead8').text());
						$('#loanObligHead4').text($('#loanObligHead8').text());
						$('#loanObligHead5').text($('#loanObligHead8').text());
						$('#loanObligHead6').text($('#loanObligHead8').text());
						$('#loanObligHead7').text($('#loanObligHead8').text());
						 
						
						$('#COGSHead7').text($commaPut(a.cogsF));
						$('#COGSHead8').text($commaPut(a.cogsG));
						
						$('#freeCashHead7').text($commaPut(parseFloat(a.freecashedc).toFixed(0)));
						$('#marginEbitdaHead7').text(parseFloat((a.marginF)).toFixed(2));
						$('#marginEbitdaHead8').text(parseFloat(a.marginG).toFixed(2));
						
						// PreFunding
						$('#preFundingHead2').text(a.prefundA);
					//	// // console.log('a.prefundA-',a.prefundA);
						$('#preFundingHead3').text(a.prefundB);
					//	// // console.log('a.prefundB-',a.prefundA);
						$('#preFundingHead4').text(a.prefundC);
					//	// // console.log('a.prefundC-',a.prefundA);
						$('#preFundingHead5').text(a.prefundD);
						$('#preFundingHead6').text(a.prefundE);
						$('#preFundingHead7').text(a.prefundF); 
						$('#preFundingHead8').text(a.prefundG);
					
			 			// Post Funding
						$('#postFundingHead2').text(a.postfundA);
						// // console.log('a.postfundA-',a.postfundA);
						$('#postFundingHead3').text(a.postfundB);
						$('#postFundingHead4').text(a.postfundC);
						$('#postFundingHead5').text(a.postfundD);
						$('#postFundingHead6').text(a.postfundE);
						$('#postFundingHead7').text(a.postfundF);
						$('#postFundingHead8').text(a.postfundG);
						
						
						// CeilingDSCR
						// // console.log(a.ceildscrA==''?'empty':'not empty');
						// // console.log(a.ceildscrA==undefined?'undefined':'defined');
						$('#ceilingDscrHead2').text($commaPut(a.ceildscrA));
						$('#ceilingDscrHead3').text($commaPut(a.ceildscrB));
						$('#ceilingDscrHead4').text($commaPut(a.ceildscrC));
						$('#ceilingDscrHead5').text($commaPut(a.ceildscrD));
						$('#ceilingDscrHead6').text($commaPut(a.ceildscrE));
						$('#ceilingDscrHead7').text($commaPut(a.ceildscrF));
						$('#ceilingDscrHead8').text($commaPut(a.ceildscrG));
						
						
						// FloorDscr
						$('#floorDscrHead2').text($commaPut(a.floordscrA));
						$('#floorDscrHead3').text($commaPut(a.floordscrB));
						$('#floorDscrHead4').text($commaPut(a.floordscrC));
						$('#floorDscrHead5').text($commaPut(a.floordscrD));
						$('#floorDscrHead6').text($commaPut(a.floordscrE));
						$('#floorDscrHead7').text($commaPut(a.floordscrF));
				//		// // console.log('floordscr-',a.floordscrF);
						$('#floorDscrHead8').text($commaPut(a.floordscrG));
						
						$('#turnOverHidId').text(a.turnoverid);
						$('#grossHidId').text(a.grossmarginid);
						$('#cogsHidId').text(a.cogsid);
						$('#salariesHidId').text(a.salariesid);
						$('#rentalHidId').text(a.rentalid);
						$('#electricityHidId').text(a.electricityid);
						$('#misOthersHidId').text(a.miscid);
						$('#freecashHidId').text(a.freecashid);
						$('#marginEbitdaHidId').text(a.ebitdamarginid);
						$('#otherIncomeHidId').text(a.otherincomeid);
				//		// // console.log('a.otherincomeid-',a.otherincomeid);
						$('#loanObligationHidId').text(a.loanobligationid);
						$('#prefundingHidId').text(a.predscrid);
					//	// // console.log($('#prefundingHidId').text());
					//	// // console.log('predscrid-',a.predscrid);
						$('#postFundingNHidId').text(a.postdscrid);
					//	// // console.log($('#postFundingNHidId').text());
					//	// // console.log('postdscrid-',a.postdscrid);
						$('#ceilingDscrHidId').text(a.ceildscrid);
						$('#floorDscrHidId').text(a.floordscrid);
					//	// // console.log('floordscrid-',a.floordscrid);
						$('#snapshotHidId').text(a.snapshotid);
						$('#pnlsnapshotHidId').text(a.pnlsnapshotid);
						$('#loaneligibilityHidId').text(a.loaneligibilityid);
						
						$('#escalationHidId').text(a.escalationid);
				//		// // console.log('escalationid-',a.escalationid);
						
						$('#escalationcriteriaHidId').text(a.escalationcriteriaid);
					//	// // console.log('escalationcriteriaid-',a.escalationcriteriaid);
						
						$('#escalationiwHidId').text(a.escalationiwid);
					//	// // console.log('escalationiwid-',a.escalationiwid);
						
						$('#scalationturnoverHidId').text(a.escalationturnoverid);
					//	// // console.log('escalationturnover-',a.escalationturnoverid);
						
						$('#loaneligibilityguideHidId').text(a.loaneligibilityguideid);
					//	// // console.log('loaneligibilityguideHidId-',a.loaneligibilityguideid);
						
						
						// Loan Eligibility
					
						$('#loanAmountSnap2').text($commaPut(a.loanamtmddb));
						$('#finalDscrSnapId').text($commaPut(parseFloat(a.finaldscr).toFixed(2)));
						$('#apprvdEDI3').text($commaPut(a.finalediloan));
						$('#emiSnap').text($commaPut(a.emloan));
						
						
						/*------------ *2* Rendering --------------*/

						/*---- 2 Calculation -----*/
						 // // console.log();
						
						$('#turnOverHead2').text($commaPut($_fix0((a.turnOverA))));
						var _grossMarginA = parseFloat(a.grossMarginA);
						// // console.log(1-parseFloat(_grossMarginA));
						$('#grossMarginHead2').text($commaPut(parseFloat(_grossMarginA*100).toFixed(2)));
						$('#COGSHead2').text($commaPut(parseFloat((parseFloat(a.turnOverA))*(1-parseFloat(_grossMarginA))).toFixed(0)));
						
						$('#turnOverHead3').text($commaPut($_fix0((a.turnOverB))));
						var _grossMarginB = parseFloat((a.grossMarginB));
						// // console.log(1-parseFloat(_grossMarginB));
						$('#grossMarginHead3').text($commaPut(parseFloat(_grossMarginB*100).toFixed(2)));
						$('#COGSHead3').text($commaPut(parseFloat((parseFloat(a.turnOverB))*(1-parseFloat(_grossMarginB))).toFixed(0)));
						// // console.log(parseFloat(a.turnOverB));
						$('#turnOverHead4').text($commaPut($_fix0((a.turnOverC))));
						var _grossMarginC = parseFloat(a.grossMarginC);
						_tempgrossMarginHead4 = parseFloat(a.grossMarginC);
						$('#grossMarginHead4').text($commaPut(parseFloat(_grossMarginC*100).toFixed(2)));
						$('#COGSHead4').text($commaPut(parseFloat((parseFloat(a.turnOverC))*(1-parseFloat(_grossMarginC))).toFixed(0)));
						
						/*$('#COGSHead4').text(parseFloat($('#turnOverHead7').text())*(1-parseFloat($('#grossMarginHead7').val())));
						$('#COGSHead4').text(parseFloat($('#turnOverHead8').val())*(1-parseFloat($('#grossMarginHead8').val())));*/
						 
						/*$('#turnOverHead4').text(a.turnOverC);
						$('#grossMarginHead4').text(a.grossMarginC);
						$('#COGSHead4').text(Math.ceil(parseFloat(a.turnOverC)*(1-parseFloat(a.grossMarginC)/100)));*/
						// console.log('a.turnOverA-',a.turnOverA);
						// console.log('a.cogsA-',$('#COGSHead2').text());
						// console.log('a.salariesA=',a.salariesA);
						// console.log('a.rentalA',a.rentalA);
						// console.log('a.electriCityA',a.electriCityA);
						// console.log('a.miscellaneousA',a.miscellaneousA);
						
					//	// // console.log((parseFloat(a.turnOverA)-parseFloat($('#COGSHead2').text()))-(parseFloat(a.salariesA)+ parseFloat(a.rentalA)+ parseFloat(a.electriCityA)+ parseFloat(a.miscellaneousA)));
						var _freeCashHead2 = (parseFloat(a.turnOverA)-parseFloat($comRem($('#COGSHead2').text())))-(parseFloat(a.salariesA)+ parseFloat(a.rentalA)+ parseFloat(a.electriCityA)+ parseFloat(a.miscellaneousA));
						$('#freeCashHead2').text($commaPut($_fix0(_freeCashHead2)));
						// // console.log('_freeCashHead2-',parseFloat(_freeCashHead2));
						// // console.log('turnOverA-',parseFloat(a.turnOverA));
					//	// // console.log((parseFloat(a.turnOverB)-parseFloat($('#COGSHead3').text()))-(parseFloat(a.salariesB)+ parseFloat(a.rentalB)+ parseFloat(a.electriCityB)+ parseFloat(a.miscellaneousB)));
						var _freeCashHead3 = (parseFloat(a.turnOverB)-parseFloat($comRem($('#COGSHead3').text())))-(parseFloat(a.salariesB)+ parseFloat(a.rentalB)+ parseFloat(a.electriCityB)+ parseFloat(a.miscellaneousB));
						$('#freeCashHead3').text($commaPut($_fix0(_freeCashHead3)));
					//	// // console.log($('#freeCashHead3').text());
						//	$('#freeCashHead3').text($_InF(_freeCashHead3));
						var _freeCashHead4 = (parseFloat(a.turnOverC)-parseFloat($comRem($('#COGSHead4').text())))-(parseFloat(a.salariesC)+ parseFloat(a.rentalC)+ parseFloat(a.electriCityC)+ parseFloat(a.miscellaneousC))
						$('#freeCashHead4').text($commaPut($_fix0(_freeCashHead4)));
					//	// // console.log($('#freeCashHead4').text());
						//	($_InF(_freecashHead4));
						/*$('#freeCashHead7').text((parseFloat($('#turnOverHead8').val())-parseFloat($('#COGSHead7').text()))-(parseFloat($("#salariesHead7").val())+ parseFloat($("#rentalHead27").val())+ parseFloat($("#electricityHead7").val())+ parseFloat($("#misOthersHead7").val())));
						$('#freeCashHead8').text((parseFloat($('#turnOverHead8').val())-parseFloat($('#COGSHead8').text()))-(parseFloat($("#salariesHead7").val())+ parseFloat($("#rentalHead28").val())+ parseFloat($("#electricityHead8").val())+ parseFloat($("#misOthersHead8").val())));*/
									
				//		// // console.log('_marginEbitdaHead3 = ',isNaN(parseFloat(parseFloat($('#freeCashHead3').text()/(parseFloat(a.turnOverB)))*100))?0:(parseFloat(parseFloat($('#freeCashHead3').text()/(parseFloat(a.turnOverB)))*100).toFixed(2)));
						 _marginEbitdaHead2 = (isNaN(parseFloat(parseFloat((_freeCashHead2)/(parseFloat(a.turnOverA)))*100))?0:(parseFloat(parseFloat((_freeCashHead2)/(parseFloat(a.turnOverA)))*100)));
						 $('#marginEbitdaHead2').text(parseFloat($_InF(_marginEbitdaHead2)).toFixed(2));
						 _marginEbitdaHead3 = (isNaN(parseFloat(parseFloat((_freeCashHead3)/(parseFloat(a.turnOverB)))*100))?0:(parseFloat(parseFloat((_freeCashHead3)/(parseFloat(a.turnOverB)))*100)));
						$('#marginEbitdaHead3').text(parseFloat($_InF(_marginEbitdaHead3)).toFixed(2));
						 _marginEbitdaHead4 = (isNaN(parseFloat(parseFloat((_freeCashHead4)/(parseFloat(a.turnOverC)))*100))?0:(parseFloat(parseFloat((_freeCashHead4)/(parseFloat(a.turnOverC)))*100)));
						$('#marginEbitdaHead4').text(parseFloat($_InF(_marginEbitdaHead4)).toFixed(2));;
						$('#marginEbitdaHead5').text($('#marginEbitdaHead4').text());
						$('#marginEbitdaHead6').text($('#marginEbitdaHead4').text());
					
						/*$('#marginEbitdaHead7').text(parseFloat($('#freeCashHead7').text()/(parseFloat($('#turnOverHead8').val()))).toFixed(2));
						$('#marginEbitdaHead8').text(parseFloat($('#freeCashHead8').text()/(parseFloat($('#turnOverHead8').val()))).toFixed(2));*/
						//// // console.log('marginEbitdaHead4-',_marginEbitdaHead4);
					//	// // console.log('f5-',isNaN(parseFloat($('#turnOverHead5').text())*(parseFloat($('#marginEbitdaHead5').text())/100))?0:parseFloat(parseFloat($('#turnOverHead5').text())*(parseFloat($('#marginEbitdaHead5').text())/100)));
						var _freeCashHead5 = (isNaN(parseFloat($('#turnOverHead5').text())*(parseFloat($('#marginEbitdaHead5').text())/100))?0:parseFloat(parseFloat((a.turnOverD))*(parseFloat((_marginEbitdaHead4))/100)));
						$('#freeCashHead5').text($commaPut(parseFloat($_InF(_freeCashHead5)).toFixed(0)));
						var _freeCashHead6 = (isNaN(parseFloat($('#turnOverHead6').text())*(parseFloat($('#marginEbitdaHead6').text())/100))?0:	parseFloat(parseFloat((_temturnOverHead6))*(parseFloat((_marginEbitdaHead4))/100)));
						$('#freeCashHead6').text($commaPut(parseFloat($_InF(_freeCashHead6)).toFixed(0)));
				
						//	var _preFundingHead2 = parseFloat(($('#freeCashHead2').text())/(parseFloat($('#loanObligHead2').text()))).toFixed(2);
						var _preFundingHead2 =/*($eNaN("freeCashHead2","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:*/(parseFloat(parseFloat(((_freeCashHead2))/(parseFloat((a.loanObligations))))).toFixed(2));
						$('#preFundingHead2').text(!isFinite(_preFundingHead2)?'':Math.abs(parseFloat(_preFundingHead2).toFixed(2)));
						
						var _preFundingHead3 = parseFloat(((_freeCashHead3))/(parseFloat((a.loanObligations)))).toFixed(2);
						$('#preFundingHead3').text(!isFinite(_preFundingHead3)?'':Math.abs(parseFloat(_preFundingHead3).toFixed(2)));
						 
						var _preFundingHead4 = parseFloat(((_freeCashHead4))/(parseFloat((a.loanObligations)))).toFixed(2);
						$('#preFundingHead4').text(!isFinite(_preFundingHead4)?'':Math.abs(parseFloat(_preFundingHead4).toFixed(2)));
						
						var _preFundingHead5 = parseFloat(((_freeCashHead5))/(parseFloat((a.loanObligations)))).toFixed(2);
						$('#preFundingHead5').text(!isFinite(_preFundingHead5)?'':parseFloat(_preFundingHead5).toFixed(2));
						
						var _preFundingHead6 = parseFloat(((_freeCashHead6))/(parseFloat((a.loanObligations)))).toFixed(2);
						$('#preFundingHead6').text(!isFinite(_preFundingHead6)?'':Math.abs(parseFloat(_preFundingHead6).toFixed(2)));
						
						$('#COGSHead7').text($commaPut(($eNaN("turnOverHead7", "TEXT")||$eNaN("grossMarginHead7", "VAL"))?0:( parseFloat((parseFloat($comRem($('#turnOverHead7').text())))*(1-(parseFloat($comRem($('#grossMarginHead7').val())/100)))).toFixed(0))));
					
						var _calcLoanAmountSnap2 =(($eNaN("consiAmntSnap2","VAL") || $eNaN("tenureSnap","VAL") || $eNaN("interstRateSnap","VAL"))?0:(parseFloat($comRem($('#consiAmntSnap2').val())) * (parseFloat($comRem($('#tenureSnap').val()))/(1+(parseFloat($comRem($('#interstRateSnap').val()))/1200)*(parseFloat($comRem($('#tenureSnap').val())))))));
						$('#loanAmountSnap2').text($commaPut(parseFloat(_calcLoanAmountSnap2).toFixed(0)));								
		
				}else{
					$_disableAllFields();
				}
				
				if(a.submittedSnapshotData == "true" && a.submittedEscalationData == "false"){
					//		if(1==1){
								$('#escTblId').show();
								requestData(API_SS_ESC_POST, "POST", JSON.stringify({"clientid": $('#ClientSessionId').val()})).done(function(b) {
									console.log('b-',b);
									var tblData = '';
									var tblRatnlData = '';
									escRowCount=0;
									ratnlRowCount = 0;
									if(b.escalation == "false"){
										
										$('#btnSnapSubmitDummyId').prop('disabled',false);
										$('#escTblId').hide();
										$('#ratnlTblId').hide();
										$('#btnEscSubmitDummyId').prop('disabled',true);
										$('#dexterErrId').show();
										if(localStorage.getItem('disbStatus') == "Executed"){
											$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
											$('#btnSnapSubmitDummyId').prop('disabled',true);
											$('#btnEscSubmitDummyId').prop('disabled',true);
										}
										$('#escMatrixId').attr('disabled',false);
										$('#escMatStatId').attr('disabled',false);
									}else{
										if(_snapEscGet == 0){++_snapEscGet;
										console.log('Escalation-',b.Escalationlist);
										$(b.Escalationlist).each(function(k,v){++escRowCount;
											if(v.escalation == "" || v.escalation == "data not available"|| v.escalation == "NA"){
												tblData += '<tr>'+
												'<td colspan="6" align="center"><span>NO DATA FOUND</span></td></tr>';
											}else{
												tblData += '<tr>'+
												'<td style="display:none;" id="escRowHidId-'+escRowCount+'">'+v.escalationid+'</td>'+
												'<td id="escalation-'+escRowCount+'" style="text-align: center; padding-top:8px; background-color:#ff0000; color:#FFFFFF;" colspan="4"><b style="text-align:center; padding-top:8px;">'+v.escalation+'</b></td>'+
												'<td><select id="decision-'+escRowCount+'" class="form-control" required="required">'+
												'<option></option><option>Accept</option><option>Reject</option></select></td>'+
												'<td><textarea rows="1" class="form-control" id="reason-'+escRowCount+'"></textarea></td></tr>';
											}
										});
										$('.a-escHide').show();
										$('#escMatrixId').attr('reqiured',true);
										$('#escalationBodyId').html(tblData);
										$_disableAllFields();
										}
										
										/***************************************************/
										if(_snapRatnGet == 0){++_snapRatnGet;
										console.log('Rationals-',b.Rationallist);
										if($.isEmptyObject(b.Rationallist)){
											$('#ratnlTblId').hide();
											tblRatnlData += '<tr>'+
											'<td colspan="4" align="center"><span>NO DATA FOUND</span></td></tr>';
										}else{
											$(b.Rationallist).each(function(k,v){++ratnlRowCount;
											if(v.rationals == "" || v.rationals == "data not available"){
												$('#ratnlTblId').hide();
												tblRatnlData += '<tr>'+
												'<td colspan="4" align="center"><span>NO DATA FOUND</span></td></tr>';
											}else{
												$('#ratnlTblId').show();
												tblRatnlData += '<tr>'+
												'<td style="display:none;" id="ratnRowHidId-'+ratnlRowCount+'">'+v.rid+'</td>'+
												'<td id="rational-'+ratnlRowCount+'" style="text-align: center; padding-top:8px; color:#8700ff;" colspan="4"><b style="text-align:center; padding-top:8px;">'+v.rationals+'</b></td>'+
												'</tr>';
											}
										});
										}
										$('#rationalesBodyId').html(tblRatnlData);
										$_disableAllFields();
										}
										/***************************************************/
										var loanAmntDexter = parseInt(b.FLA) < 0 ? 0 :parseInt(b.FLA);  
										$('#loanAmountSnap4').text($commaPut(loanAmntDexter));
									//	$('#loanAmountSnap4').text($commaPut(b.FLA));
										$('#consiAmntSnap4').text($commaPut($_fix2(b.DSCR_Post)));
										$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea').prop('disabled', true);
										$('#btnEscSubmitDummyId').prop('disabled',false);
										$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', false);
										$('#escMatrixId').attr('required',false);	
										$('#escMatStatId').attr('required',false);
										$('#escMatrixId').attr('disabled',false);
										$('#escMatStatId').attr('disabled',false);
										if(localStorage.getItem('disbStatus') == "Executed"){
											$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
											$('#btnSnapSubmitDummyId').prop('disabled',true);
											$('#btnEscSubmitDummyId').prop('disabled',true);
										}
										$_disableAllFields();
										requestData('/upf-system/upf/snapshot/getapprovalamount/'+localStorage.getItem('userId'),'GET').done(function(replyAmnt){

											if(replyAmnt.reply == "success"){
												approvalAmnt = parseInt(replyAmnt.amount); //apprvdLoanAmntSnap
												if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) > Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
													$('#escMatStatId').html("<option></option><option>On Hold</option>");
													$('#escMatStatId').val(a.escmatrixstatus);
													$('#buttonnameId').text('Submit For Approval');
													if($('#escMatStatId').val() == "On Hold"){
														if($('.a-escHide').is(':hidden')){
															$('#escMatrixId').attr('required',false);
														}else{
															$('#escMatrixId').attr('required',true);
														}
														$('#buttonnameId').text("OK");
													}else if($('#escMatStatId').val() == ""){
														if($('.a-escHide').is(':hidden')){
															$('#escMatrixId').attr('required',false);
														}else{
															$('#escMatrixId').attr('required',true);
														}
														$('#buttonnameId').text("Submit For Approval");
													}
												}else if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) <= Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
													$('#escMatStatId').html("<option></option><option>Approve</option><option>Reject</option><option>On Hold</option>");
													$('#escMatStatId').val(a.escmatrixstatus);
													$('#buttonnameId').text('OK');
												}
											}
											$('#escMatStatId').val(a.escmatrixstatus);
										});
									}
								});
				//			}
								requestData('/upf-system/upf/dsa/getmapcmrole?userid='+localStorage.getItem('userId'),'GET').done(function(getCmList){
									if($.isEmptyObject(getCmList.data)){
										$('#escMatrixId').attr('required',false);
									}else{
									
										var opt = '<option value=""></option>';
										$(getCmList.data).each(function(k,v){
											opt += '<option value='+v.emailid+'>'+v.name+' - '+v.role+'</option>'; 
										});
										$('#escMatrixId').html(opt);
										$('#escMatrixId').val(a.escmatrix);
									}
								});
							}else if(a.submittedSnapshotData == "true" && a.submittedEscalationData == "true"){
									$('#escTblId').show();$('#btnEscSubmitDummyId').prop('disabled',false);
									var tblData = '';
									var tblRatnlData = '';
									escRowCount=0;
									ratnlRowCount = 0;
									if(_snapEscGet == 0){++_snapEscGet;
									$(a.escalation).each(function(k,v){++escRowCount;
									if(v.escalation == "" || v.escalation == "data not available" || v.escalation == "NA"){
										tblData += '<tr>'+
										'<td colspan="6" align="center"><span>NO DATA FOUND</span></td></tr>';
									}else{
										tblData += '<tr>'+
										'<td style="display:none;" id="escRowHidId-'+escRowCount+'">'+v.escalationid+'</td>'+
										'<td id="escalation-'+escRowCount+'" style="text-align: center; padding-top:8px; background-color:#ff0000; color:#FFFFFF;" colspan="4"><b>'+v.escalation+'</b></td>'+
										'<td><select id="decision-'+escRowCount+'" class="form-control" required="required">'+
										'<option></option><option>Accept</option><option>Reject</option></select></td>'+
										'<td><textarea rows="1" class="form-control" id="reason-'+escRowCount+'"></textarea></td></tr>';
									}
									});
									$('.a-escHide').show();
									$('#escMatrixId').attr('reqiured',true);
									$('#escalationBodyId').html(tblData);
									$_disableAllFields();
									
								}
									/***************************************************/
									if(_snapRatnGet == 0){++_snapRatnGet;
									console.log('Rationals-',a.rational);
									if($.isEmptyObject(a.rational)){
										$('#ratnlTblId').hide();
										tblRatnlData += '<tr>'+
										'<td colspan="4" align="center"><span>NO DATA FOUND</span></td></tr>';
									}else{
										$(a.rational).each(function(k,v){++ratnlRowCount;
										if(v.rational == "" || v.rational == "data not available"){
											$('#ratnlTblId').hide();
											tblRatnlData += '<tr>'+
											'<td colspan="4" align="center"><span>NO DATA FOUND</span></td></tr>';
										}else{
											$('#ratnlTblId').show();
											tblRatnlData += '<tr>'+
											'<td style="display:none;" id="ratnRowHidId-'+ratnlRowCount+'">'+v.rid+'</td>'+
											'<td id="rational-'+ratnlRowCount+'" style="text-align: center; padding-top:8px;color:#8700ff;" colspan="4"><b style="text-align:center; padding-top:8px;">'+v.rational+'</b></td>'+
											'</tr>';
										}
									});
									}
									$('#rationalesBodyId').html(tblRatnlData);
									$_disableAllFields();
									}
									/***************************************************/
							var _temp=0;
							$(a.escalation).each(function(k,v){++_temp;
								if(_temp <= escRowCount){
									$('#decision-'+_temp).val(v.decision);
									$('#reason-'+_temp).val(v.reason);
									//$('#escalation'+_temp).text(v.escalation);
								}
							});
							$('#btnEscSubmitDummyId').prop('disabled',true);
							$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
							$('#escMatrixId').attr('disabled',true);
							$('#escMatStatId').attr('disabled',true);
							$('#escMatrixId').attr('required',false);
							$('#escMatStatId').attr('required',false);
							if(localStorage.getItem('disbStatus') == "Executed"){
								$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
								$('#btnSnapSubmitDummyId').prop('disabled',true);
								$('#btnEscSubmitDummyId').prop('disabled',true);
							}
							requestData('/upf-system/upf/dsa/getmapcmrole?userid='+localStorage.getItem('userId'),'GET').done(function(getCmList){
								if($.isEmptyObject(getCmList.data)){
									$('#escMatrixId').attr('required',false);
								}else{
									var opt = '<option value=""></option>';
									$(getCmList.data).each(function(k,v){
										opt += '<option value='+v.emailid+'>'+v.name+' - '+v.role+'</option>'; 
									});
									$('#escMatrixId').html(opt);
									$('#escMatrixId').val(a.escmatrix);
								}
							});
							requestData('/upf-system/upf/snapshot/getapprovalamount/'+localStorage.getItem('userId'),'GET').done(function(replyAmnt){

								if(replyAmnt.reply == "success"){
									approvalAmnt = parseInt(replyAmnt.amount); //apprvdLoanAmntSnap
									if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) > Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
										$('#escMatStatId').html("<option></option><option>On Hold</option>");
										$('#escMatStatId').val(a.escmatrixstatus);
										$('#buttonnameId').text('Submit For Approval');
										if($('#escMatStatId').val() == "On Hold"){
											if($('.a-escHide').is(':hidden')){
												$('#escMatrixId').attr('required',false);
											}else{
												$('#escMatrixId').attr('required',true);
											}
											$('#buttonnameId').text("OK");
										}else if($('#escMatStatId').val() == ""){
											if($('.a-escHide').is(':hidden')){
												$('#escMatrixId').attr('required',false);
											}else{
												$('#escMatrixId').attr('required',true);
											}
											$('#buttonnameId').text("Submit For Approval");
										}
									}else if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) <= Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
										$('#escMatStatId').html("<option></option><option>Approve</option><option>Reject</option><option>On Hold</option>");
										$('#escMatStatId').val(a.escmatrixstatus);
										$('#buttonnameId').text('OK');
									}
								}
								$('#escMatStatId').val(a.escmatrixstatus);
							});
							}else{
								$('.a-escHide').hide();
								$('#escMatrixId').attr('reqiured',false);
							$('#escTblId').hide();
							$('#btnEscSubmitDummyId').prop('disabled',true);
							if(localStorage.getItem('disbStatus') == "Executed"){
								$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
								$('#btnSnapSubmitDummyId').prop('disabled',true);
								$('#btnEscSubmitDummyId').prop('disabled',true);
							}
							$_disableAllFields();
							requestData('/upf-system/upf/dsa/getmapcmrole?userid='+localStorage.getItem('userId'),'GET').done(function(getCmList){
								if($.isEmptyObject(getCmList.data)){
									$('#escMatrixId').attr('required',false);
								}else{
									var opt = '<option value=""></option>';
									$(getCmList.data).each(function(k,v){
										opt += '<option value='+v.emailid+'>'+v.name+' - '+v.role+'</option>'; 
									});
									$('#escMatrixId').html(opt);
									$('#escMatrixId').val(a.escmatrix);
								}  
							});
						}
				requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
					$(reply.accessList).each(function(k,v){
					if(v.SNAPSHOT == "READ ONLY" || v.SNAPSHOT == "READONLY" || v.SNAPSHOT == "READ"){
						$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
						$('#btnSnapSubmitDummyId').prop('disabled',true);
						$('#btnEscSubmitDummyId').prop('disabled',true);
					}else if(v.SNAPSHOT == "WRITE" || v.SNAPSHOT == "VIEW ALL"){
						if(a.submittedSnapshotData == "true" && a.submittedEscalationData == "true"){
							$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
						}else{
							$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', false);
						}
					//	$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', false);
					}else{
						if($('#btnEscSubmitDummyId').is(':disabled')){
							$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
						}else{
							$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', false);
						}
					}
					});
					$_disableAllFields();
				});
				requestData('/upf-system/upf/snapshot/getapprovalamount/'+localStorage.getItem('userId'),'GET').done(function(replyAmnt){
					
					if(replyAmnt.reply == "success"){
						approvalAmnt = parseInt(replyAmnt.amount); //apprvdLoanAmntSnap
						if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) > Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
							$('#escMatStatId').html("<option></option><option>On Hold</option>");
							$('#escMatStatId').val(a.escmatrixstatus);
							$('#buttonnameId').text('Submit For Approval');
							if($('#escMatStatId').val() == "On Hold"){
								if($('.a-escHide').is(':hidden')){
									$('#escMatrixId').attr('required',false);
								}else{
									$('#escMatrixId').attr('required',true);
								}
								$('#buttonnameId').text("OK");
							}else if($('#escMatStatId').val() == ""){
								if($('.a-escHide').is(':hidden')){
									$('#escMatrixId').attr('required',false);
								}else{
									$('#escMatrixId').attr('required',true);
								}
								$('#buttonnameId').text("Submit For Approval");
							}
						}else if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) <= Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
							$('#escMatStatId').html("<option></option><option>Approve</option><option>Reject</option><option>On Hold</option>");
							$('#escMatStatId').val(a.escmatrixstatus);
							$('#buttonnameId').text('OK');
						}
						$_disableAllFields()
					}
					$('#escMatStatId').val(a.escmatrixstatus);
				});
			});
		}
		if(snapCheck.status == 'itr'){
		$('#dscrMethodHead2').empty().append('<option>EMM</option>');
		}
	// }
});	$_resizeStat();
}
function $_getEscRowData(a){
	//console.log(a);
	var arr = [];
	var rowData;
	for(i=1; i<=a; i++) {
			if($('#decision-'+i).val() !== undefined && $('#reason-'+i).val() !== undefined) {
				rowData = {		
						"escid" : isNaN(parseInt($('#escRowHidId-'+i).text()))?0:parseInt($('#escRowHidId-'+i).text()),
						"escalation" : $('#escalation-'+i).text(),
						"decision" : $('#decision-'+i).val(),
						"clientid" : $('#ClientSessionId').val(),
						"reason" : $('#reason-'+i).val()
					};
			}
	   arr.push(rowData);
	   console.log(arr);
	}return arr[0]===null || arr[0]===undefined ? [] : arr;
}
function $_getRatinalRowData(a){
	//console.log(a);
	var arr = [];
	for(i=1; i<=a; i++) {
			var rowData = {		
			"rid" : isNaN(parseInt($('#ratnRowHidId-'+i).text()))?0:parseInt($('#ratnRowHidId-'+i).text()),
			"rational" : $('#rational-'+i).text(),
			"clientid" : $('#ClientSessionId').val()
			};
			arr.push(rowData);
	   console.log(arr);
	}return arr;
}
function $_floorCal(y,x){var z = 0;
	if($('#dscrMethodHead2').val()=="EMM"){
		$('#'+y).text("N/A");}
	else if($('#dscrMethodHead2').val()=="EMM"){
		z = $_floorCal_2(x,0.85);
		$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));
	}else if($('#dscrMethodHead2').val()=="FAT 1"){
		z = $_floorCal_2(x,0.70);
		$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));
	}else if($('#dscrMethodHead2').val()=="FAT 2"){
		z = $_floorCal_2(x,0.60);
		$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));
	}
	else if($('#dscrMethodHead2').val()=="UAT"){
		z = $_floorCal_2(x,0.50);
		$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));
	}else{
		$('#'+y).text(0)
	}
}

function $_floorCalHead7(y,x){
	var z = 0;
	if($('#dscrMethodHead2').val()=="EMM")
	{if($('#dscrMethodHead2').val()=="EMM"){
		z = $_floorCal_2(x,0.85);$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));}
		else if($('#dscrMethodHead2').val()=="FAT 1"){
		z = $_floorCal_2(x,0.70);$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));}
		else if($('#dscrMethodHead2').val()=="FAT 2"){
		z = $_floorCal_2(x,0.60);$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));}
		else if($('#dscrMethodHead2').val()=="UAT"){
		z = $_floorCal_2(x,0.50);$('#'+y).text((z<=0)?"N/A":$commaPut(parseFloat(z).toFixed(0)));}
	}else{$('#'+y).text("N/A");}
}


function $_floorCalHead8(y,x){
	var z = 0;
	if($('#dscrMethodHead2').val()=="EMM"){
		z = $_floorCal_2(x,0.85);}
		else if($('#dscrMethodHead2').val()=="FAT 1"){
		z = $_floorCal_2(x,0.70);}
		else if($('#dscrMethodHead2').val()=="FAT 2"){
		z = $_floorCal_2(x,0.60);}
		else if($('#dscrMethodHead2').val()=="UAT"){
		z = $_floorCal_2(x,0.50);
		}else{$('#'+y).text("N/A");}
		$('#'+y).text((parseFloat(z)<=0 || isNaN(parseFloat(z)))?"N/A":$commaPut(parseFloat(z).toFixed(0)));
}
		
function $_floorCal_2(x,y){
	var a = (parseFloat($comRem($('#'+x).text())/12))- (y * (parseFloat($comRem($('#loanObligHead8').text())/12)));
	return (a/y) * ($('#tenureSnap').val())/(1+(($('#interstRateSnap').val()/1200))* $('#tenureSnap').val());
}


function $_ceilingCal(y,x){
	var z = 0;
	if($('#dscrMethodHead2').val()=="EMM"){
		$('#'+y).text("N/A");
	}else if($('#dscrMethodHead2').val()=="EMM"){
		z = $_ceilingCal_2(x,1.00);
		$('#'+y).text((z<=0)?"N/A":$commaPut(z));
	}else if($('#dscrMethodHead2').val()=="FAT 1"){
		z = $_ceilingCal_2(x,0.80);
		$('#'+y).text((z<=0)?"N/A":$commaPut(z));
	}else if($('#dscrMethodHead2').val()=="FAT 2"){
		z = $_ceilingCal_2(x,0.70);
		$('#'+y).text((z<=0)?"N/A":$commaPut(z));
	}else if($('#dscrMethodHead2').val()=="UAT"){
		z = $_ceilingCal_2(x,0.60);
		$('#'+y).text((z<=0)?"N/A":$commaPut(z));
	}else{$('#'+y).text(0)}
}

function $_ceilingCalHead7(y,x){var z = 0;
	if($('#dscrMethodHead2').val()=="EMM"){
		if($('#dscrMethodHead2').val()=="EMM"){
			z = $_ceilingCal_2(x,1.00);$('#'+y).text((z<=0)?"N/A":$commaPut(z));
		}else if($('#dscrMethodHead2').val()=="FAT 1"){
			z = $_ceilingCal_2(x,0.80);$('#'+y).text((z<=0)?"N/A":$commaPut(z));
		}else if($('#dscrMethodHead2').val()=="FAT 2"){
			z = $_ceilingCal_2(x,0.70);$('#'+y).text((z<=0)?"N/A":$commaPut(z));
		}else if($('#dscrMethodHead2').val()=="UAT"){
			z = $_ceilingCal_2(x,0.60);$('#'+y).text((z<=0)?"N/A":$commaPut(z));
		}}else{$('#'+y).text("N/A")}
}


function $_ceilingCalHead8(y,x){var z = 0;
	
		if($('#dscrMethodHead2').val()=="EMM"){
			z = $_ceilingCal_2(x,1.00);}
			else if($('#dscrMethodHead2').val()=="FAT 1"){
			z = $_ceilingCal_2(x,0.80);
			}else if($('#dscrMethodHead2').val()=="FAT 2"){
			z = $_ceilingCal_2(x,0.70);
			}
			else if($('#dscrMethodHead2').val()=="UAT"){
			z = $_ceilingCal_2(x,0.60);
			}else{$('#'+y).text("N/A")}
		//	// // console.log('ceil-',z);
		//	// // console.log(parseFloat(z), parseFloat(z)<=0);
			$('#'+y).text((parseFloat(z)<=0 || isNaN(parseFloat(z)))?"N/A":$commaPut(parseFloat(z).toFixed(0)));
}

function $_ceilingCal_2(x,y){
	var a = ((parseFloat($comRem($('#'+x).text())/12))- (y * (parseFloat($comRem($('#loanObligHead8').text())/12))));
	return parseFloat((a/y) * ($('#tenureSnap').val())/(1+(($('#interstRateSnap').val()/1200))* $('#tenureSnap').val())).toFixed(0);
}

function $eNaN(a,b){
	return (b == "TEXT")?((($comRem($("#"+a).text())) == "" || isNaN($pI($comRem($("#"+a).text()))))?true:false):((($comRem($("#"+a).val())) == "" || isNaN($pI($comRem($("#"+a).val()))))?true:false);
}
function $_InF(a){
	var z;
	(!isFinite(parseFloat((a))) || isNaN(parseFloat((a)))?z='':z=a);
	return z;	
}

function $_null(a){ 
	return (($('#'+a).text())=="")?0:($('#'+a).text());
}
		
$(document).ready(function(){
	requestData(API_BUSSEG_GET,'GET').done(function(reply){
		var busSeg = "<option></option>";
		$(reply.segment).each(function(k,v){
			busSeg += '<option>'+v+'</option>'
		});
		$('#businessSegment').html(busSeg);
	});
	$(document).on('keyup change' ,'#freeCashHead8,#salariesHead7,#freeCashHead7,#dscrMethodHead2,#turnOverHead7,#loanApprvMethd,#dscrMethodHead7,#otherIncomeHead8,#apprvdLoanAmntSnap,#repayFreqSnap,#turnOverHead8,#consiAmntSnap3,#consiAmntSnap2,#loanAmountSnap2,#emiSnap,#tenureSnap,#interstRateSnap,#grossMarginHead7,#grossMarginHead8,#rentalHead27,#rentalHead28,#electricityHead7,#electricityHead8,#salariesHead8,#misOthersHead7,#misOthersHead8',function(){
		//$('#turnOverHead7').text(parseFloat(parseFloat(_calTurnOverHead7)*($('#dscrMethodHead7').val())).toFixed(0));
		if($('#dscrMethodHead7').val() == 1){
			$('#turnOverHead7').text($commaPut(_calTurnOverHead7));
		}else if($('#dscrMethodHead7').val() == 1.5){
			$('#turnOverHead7').text($commaPut((parseFloat(_calTurnOverHead7 * 1.5)).toFixed(0)));
		}else if($('#dscrMethodHead7').val() == 2){
			$('#turnOverHead7').text($commaPut((parseFloat(_calTurnOverHead7 * 2)).toFixed(0)));
		}else if($('#dscrMethodHead7').val() == 2.5){
			$('#turnOverHead7').text($commaPut((parseFloat(_calTurnOverHead7 * 2.5)).toFixed(0)));
		}else{
			$('#turnOverHead7').text($commaPut((parseFloat(_calTurnOverHead7 * 3)).toFixed(0)));
		}
		$('#COGSHead7').text($commaPut(($eNaN("turnOverHead7", "TEXT")||$eNaN("grossMarginHead7", "VAL"))?0:( parseFloat((parseFloat($comRem($('#turnOverHead7').text())))*(1-(parseFloat($comRem($('#grossMarginHead7').val())/100)))).toFixed(0))));
		//
		
		//'#grossMarginHead7','#salariesHead7','#rentalHead27','#electricityHead7','#misOthersHead7',
	//	$('#COGSHead8').text(parseFloat($('#turnOverHead8').val())*(1-parseFloat($('#grossMarginHead8').val())));
	//	$('#COGSHead8').text(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($('#turnOverHead8').val())*(1-parseFloat($('#grossMarginHead8').val()/100)))).toFixed(0));
		//
		
	//	$('#freeCashHead7').text(($eNaN("turnOverHead7", "TEXT")||$eNaN("COGSHead7", "TEXT")||$eNaN("salariesHead7", "VAL")||$eNaN("rentalHead27", "VAL")||$eNaN("electricityHead7", "VAL")||$eNaN("misOthersHead7", "VAL"))?0:(parseFloat(parseFloat($('#turnOverHead7').text())-parseFloat($('#COGSHead7').text()))-(parseFloat($("#salariesHead7").val()/100)+ parseFloat($("#rentalHead27").val()/100)+ parseFloat($("#electricityHead7").val()/100)+ parseFloat($("#misOthersHead7").val()/100))).toFixed(0));
		//
		if(($eNaN("turnOverHead7", "TEXT") || $eNaN("COGSHead7", "TEXT")||$eNaN("salariesHead7", "VAL")||$eNaN("rentalHead27", "VAL")||$eNaN("electricityHead7", "VAL")||$eNaN("misOthersHead7", "VAL"))){
			$('#freeCashHead7').text(0);
			}else{var _calFreeHead7 = 0;
			_calFreeHead7 = ((parseFloat($comRem($('#turnOverHead7').text()))-parseFloat($comRem($('#COGSHead7').text())))-(parseFloat($comRem($("#salariesHead7").val()))+ parseFloat($comRem($("#rentalHead27").val()))+ parseFloat($comRem($("#electricityHead7").val()))+ parseFloat($comRem($("#misOthersHead7").val()))));
			$('#freeCashHead7').text($commaPut(parseFloat(_calFreeHead7).toFixed(0)));
			}
		
		
			//$('#freeCashHead8').text((parseFloat($('#turnOverHead8').val())-parseFloat($('#COGSHead8').text()))-(parseFloat($("#salariesHead7").val())+ parseFloat($("#rentalHead28").val())+ parseFloat($("#electricityHead8").val())+ parseFloat($("#misOthersHead8").val())));
		//
			//$('#marginEbitdaHead7').text(parseFloat($('#freeCashHead7').text()/(parseFloat($('#turnOverHead7').text()))).toFixed(2));
		 _tempMarginEdit7 = ($eNaN("freeCashHead7","TEXT") || $eNaN("turnOverHead7","TEXT"))?0:(((($comRem($('#freeCashHead7').text())/(parseFloat($comRem($('#turnOverHead7').text()))))*100)));
		$('#marginEbitdaHead7').text((isNaN(_tempMarginEdit7) || !isFinite(_tempMarginEdit7))?'':($commaPut(parseFloat(_tempMarginEdit7).toFixed(2))));
			//$('#marginEbitdaHead8').text(parseFloat($('#freeCashHead8').text()/(parseFloat($('#turnOverHead8').val()))).toFixed(2));
		
	//	_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","TEXT"))?0:(((($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').text()))))*100)));
	//	$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':($commaPut(parseFloat(_tempMarginEdit8).toFixed(2))));
		//if(($('#marginEbitdaHead8').text()=="Infinity")?"":$('#marginEbitdaHead8').text(($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($('#freeCashHead8').text()/(parseFloat($('#turnOverHead8').val())))*100).toFixed(2)))));
		//
			//$('#preFundingHead7').text(parseFloat(($('#freeCashHead7').text())/(parseFloat($('#loanObligHead7').text()))).toFixed(2));
		var _preFundingHead7 = ($eNaN("freeCashHead7","TEXT") || $eNaN("loanObligHead7","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead7').text()))/(parseFloat($comRem($('#loanObligHead7').text()))))).toFixed(2));
		$('#preFundingHead7').text((!isFinite(_preFundingHead7) || isNaN(_preFundingHead7))?'':Math.abs($commaPut(parseFloat(_preFundingHead7).toFixed(2))));
			//$('#preFundingHead8').text(parseFloat(($('#freeCashHead8').text())/(parseFloat($('#loanObligHead8').text()))).toFixed(2));
		
		var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
		$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
		
		var _calcLoanAmountSnap2 =(($eNaN("consiAmntSnap2","VAL") || $eNaN("tenureSnap","VAL") || $eNaN("interstRateSnap","VAL"))?0:(parseFloat($comRem($('#consiAmntSnap2').val())) * (parseFloat($comRem($('#tenureSnap').val()))/(1+(parseFloat($comRem($('#interstRateSnap').val()))/1200)*(parseFloat($comRem($('#tenureSnap').val())))))));
		$('#loanAmountSnap2').text($commaPut(parseFloat(_calcLoanAmountSnap2).toFixed(0)));								
		
		var _calEmiSnap = (($eNaN("apprvdLoanAmntSnap","VAL") || $eNaN("tenureSnap","VAL") || $eNaN("interstRateSnap","VAL"))?0:((parseFloat($comRem($('#apprvdLoanAmntSnap').val())) + (parseFloat($comRem($('#apprvdLoanAmntSnap').val()))*(parseFloat($comRem($('#interstRateSnap').val()))/1200)*(parseFloat($comRem($('#tenureSnap').val())))))/parseFloat($comRem($('#tenureSnap').val()))));
		$('#emiSnap').text($commaPut(parseFloat(_calEmiSnap).toFixed(0)));
		
		
		var a = parseFloat($comRem($('#freeCashHead8').text()))/12;
		var b = parseFloat($comRem($('#loanObligHead8').text()))/12;
		var c = parseFloat($comRem($('#emiSnap').text()));
		var _postFundingHead8 = (a/(b+c));
		$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':($commaPut(parseFloat(_postFundingHead8).toFixed(2))));
		
		 /* var a = parseFloat($('#freeCashHead2').text())/12;
		  var b = (parseFloat($('#loanObligHead2').text())/12)+ parseFloat($('#emiSnap').text());
		  var _postFundingHead2 = a/b;
		  $('#postFundingHead2').text(_postFundingHead2);*/
		  
		var _postFundingHead2 = (parseFloat(parseFloat($comRem($('#freeCashHead2').text()))/12)/((parseFloat($comRem($('#loanObligHead2').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead2').text((!isFinite(_postFundingHead2) || isNaN(_postFundingHead2))?'':($commaPut(parseFloat(_postFundingHead2).toFixed(2))));
		
		var _postFundingHead3 = (parseFloat(parseFloat($comRem($('#freeCashHead3').text()))/12)/((parseFloat($comRem($('#loanObligHead3').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead3').text((!isFinite(_postFundingHead3) || isNaN(_postFundingHead3))?'':($commaPut(parseFloat(_postFundingHead3).toFixed(2))));
		
		var _postFundingHead4 = (parseFloat(parseFloat($comRem($('#freeCashHead4').text()))/12)/((parseFloat($comRem($('#loanObligHead4').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead4').text((!isFinite(_postFundingHead4) || isNaN(_postFundingHead4))?'':($commaPut(parseFloat(_postFundingHead4).toFixed(2))));
		
		var _postFundingHead5 = (parseFloat(parseFloat($comRem($('#freeCashHead5').text()))/12)/((parseFloat($comRem($('#loanObligHead5').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead5').text((!isFinite(_postFundingHead5) || isNaN(_postFundingHead5))?'':($commaPut(parseFloat(_postFundingHead5).toFixed(2))));
		
		var _postFundingHead6 = (parseFloat(parseFloat($comRem($('#freeCashHead6').text()))/12)/((parseFloat($comRem($('#loanObligHead6').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead6').text((!isFinite(_postFundingHead6) || isNaN(_postFundingHead6))?'':($commaPut(parseFloat(_postFundingHead6).toFixed(2))));
		
		var _postFundingHead7 = (parseFloat(parseFloat($comRem($('#freeCashHead7').text()))/12)/((parseFloat($comRem($('#loanObligHead7').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead7').text((!isFinite(_postFundingHead7) || isNaN(_postFundingHead7))?'':($commaPut(parseFloat(_postFundingHead7).toFixed(2))));
		
		var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
		$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':($commaPut(parseFloat(_finalDscrSnapId).toFixed(2))));
		
		// Repay Frequency
		if($('#repayFreqSnap').val() == "Fortnight"){
			$('#apprvdEDI3').text($commaPut(($eNaN("emiSnap","TEXT"))?0:(parseFloat((parseFloat($comRem($('#emiSnap').text())))/2)).toFixed(0)));
		}else if($('#repayFreqSnap').val() == "Daily"){
			$('#apprvdEDI3').text($commaPut(($eNaN("apprvdLoanAmntSnap", "VAL")||$eNaN("tenureSnap", "VAL") || $eNaN("interstRateSnap", "VAL"))?0:(parseFloat(((parseFloat($comRem($('#apprvdLoanAmntSnap').val())))*(1+(parseFloat($comRem($('#tenureSnap').val())))*(parseFloat($comRem($('#interstRateSnap').val())))/1200))/((22*parseFloat($comRem($('#tenureSnap').val())))-((22*parseFloat($comRem($('#tenureSnap').val())))%5)))).toFixed(0)));
		}else if($('#repayFreqSnap').val() == "Weekly"){
			//$('#apprvdEDI3').text((Math.ceil(((parseFloat($('#loanAmountSnap2').val()))*(1+(parseFloat($('#tenureSnap').val()))*(parseFloat($('#interstRateSnap').val()))/1200))/(((parseFloat($('#tenureSnap').val()))*30)/7))));
			$('#apprvdEDI3').text($commaPut((($eNaN("apprvdLoanAmntSnap", "VAL")||$eNaN("tenureSnap", "VAL") || $eNaN("interstRateSnap", "VAL"))?0:(parseFloat((((parseFloat($comRem($('#apprvdLoanAmntSnap').val())))*(1+(parseFloat($comRem($('#tenureSnap').val())))*(parseFloat($comRem($('#interstRateSnap').val())))/1200))/Math.ceil((parseFloat($comRem($('#tenureSnap').val()))*(29/7))))))).toFixed(0)));
		}else{
			$('#apprvdEDI3').text(0);
		}
		
		$_floorCalHead7('floorDscrHead7','freeCashHead7');
		$_ceilingCalHead7('ceilingDscrHead7','freeCashHead7');
		
		// Messages
		
		//ITO Criteria
	//	// // console.log((parseInt($comRem($('#turnOverHead4').text()))<3600000));
		if($('#loanApprvMethd').val()=="EMM" && parseInt($comRem($('#turnOverHead4').text()))<3600000){
			$('#escalationSnapRow1').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow1').text("Escalate the case for failing Min TO of 36 Lac for EMM Method");
		}
		else if(($('#loanApprvMethd').val()=="FAT1" || $('#loanApprvMethd').val()=="FAT2" || $('#loanApprvMethd').val()=="UAT") && parseInt($comRem($('#turnOverHead4').text()))<30000000){
			$('#escalationSnapRow1').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow1').text("Escalate the case for failing Min TO of 3 Cr for DSCR Method");
		}
		else if($('#loanApprvMethd').val()=="EMM" && parseInt($comRem($('#turnOverHead4').text()))>500000000){
			$('#escalationSnapRow1').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow1').text("Escalate the case for failing Max TO of 50 Cr for EMM Method");
		}
		else if(($('#loanApprvMethd').val()=="FAT1" || $('#loanApprvMethd').val()=="FAT2" || $('#loanApprvMethd').val()=="UAT") && parseInt($comRem($('#turnOverHead4').text()))>100000000){
			$('#escalationSnapRow1').text("Escalate the case for failing Max TO of 10 Cr for DSCR Method");
			$('#escalationSnapRow1').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
		}
		else{	
			$('#escalationSnapRow1').text("No Escalations");
			$('#escalationSnapRow1').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
		}
		
		//Min Vint Less 3
		
		if(($('#loanApprvMethd').val()=="FAT1" || $('#loanApprvMethd').val()=="FAT2") && a.snapbanksummary < 300000 && a.snapqualitative < 24){
			$('#escalationSnapRow3').text("Escalate for Failing Minimum Vintage of 24 Months for FAT 1 & FAT 2 Method");
			$('#escalationSnapRow3').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
		}else if($('#loanApprvMethd').val()=="UAT" && a.snapbanksummary < 300000 && a.snapqualitative < 36 ){
			$('#escalationSnapRow3').text("Escalate for Failing Minimum Vintage of 36 Months for UAT Method");
			$('#escalationSnapRow3').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
		}else{
			$('#escalationSnapRow3').text("No Escalations");
			$('#escalationSnapRow3').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
		}
		
		// Card Sales
		
		if($('#loanApprvMethd').val()=="EMM" && a.snapbanksummary < 300000){
			$('#escalationSnapRow5').text("Escalate for Failing Min Card sales of 3Lac/Month for EMM Method");
			$('#escalationSnapRow5').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
		}else{
			$('#escalationSnapRow5').text("No Escalations");
			$('#escalationSnapRow5').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
		}
		//Loan Amount
		if(( $('#loanApprvMethd').val()=="EMM" || $('#loanApprvMethd').val()=="FAT1" || $('#loanApprvMethd').val()=="FAT2") && parseInt($comRem($('#apprvdLoanAmntSnap').val()))>5000000){
			$('#escalationSnapRow13').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow13').text("Escalate for LA above Max Amount of Rs. 50 Lacs for EMM, FAT1 & FAT2 Method");
		}
		else if($('#loanApprvMethd').val()=="UAT" && parseInt($comRem($('#apprvdLoanAmntSnap').val()))>3500000){
			$('#escalationSnapRow13').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow13').text("Escalate for LA above Max Amount of Rs. 35 Lacs for UAT Method");
		}
		else if(($('#loanApprvMethd').val()=="UAT" || $('#loanApprvMethd').val()=="FAT1" || $('#loanApprvMethd').val()=="FAT2" || $('#loanApprvMethd').val()=="EMM") && parseInt($comRem($('#apprvdLoanAmntSnap').val()))<500000){
			$('#escalationSnapRow13').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow13').text("Escalate for LA below Min Amount of Rs. 5 Lacs for EMM, FAT 1, FAT 2 & UAT Method");
		}
		else if($('#loanApprvMethd').val()=="LITE" && (parseInt($comRem($('#finalDscrSnapId').text()))<200000 || (parseInt($comRem($('#finalDscrSnapId').text()))>300000))){
			$('#escalationSnapRow13').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow13').text("Escalate for LA not in Range of Rs. 2 to 3 Lacs for LITE Method");
		}
		else if($('#loanApprvMethd').val()=="LITE+" && (parseInt($comRem($('#finalDscrSnapId').text()))<300001 || (parseInt($comRem($('#finalDscrSnapId').text()))>500000))){
			$('#escalationSnapRow13').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow13').text("Escalate for LA not in Range of Rs. 3 to 5 Lacs for LITE+ Method");
		}
		else{
			$('#escalationSnapRow13').text("No Escalations");
			$('#escalationSnapRow13').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
		}
		
		//Tenure
		if(($('#loanApprvMethd').val()=="EMM" || $('#loanApprvMethd').val()=="FAT1") && ($('#tenureSnap').val()<9 || $('#tenureSnap').val()>15)){
			$('#escalationSnapRow14').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow14').text("Escalate the Case for Tenure falling out of Range of 9 to 15 Months");
		}
		else if(($('#loanApprvMethd').val()=="FAT2" || $('#loanApprvMethd').val()=="UAT") && ($('#tenureSnap').val()<9 || $('#tenureSnap').val()>12)){
			$('#escalationSnapRow14').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow14').text("Escalate the case for Tenure falling out of Range of 9 to 12 Months");
		}
		else{
			$('#escalationSnapRow14').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow14').text("No Escalations");
		}
		
		// HUE Deviation
		if(parseInt($comRem($('#loanAmountSnap3').text())>0) && (parseInt($comRem($('#apprvdLoanAmntSnap').val())-parseInt($comRem($('#loanAmountSnap3').text())))>500000)){
			$('#escalationSnapRow15').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow15').text("Escalate the case for HUE Deviation of more than 5 Lacs");
		}
		else{
			$('#escalationSnapRow15').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow15').text("No Escalations");
		}
		
		// TurnOver Escalation
		if(parseInt($comRem($('#turnOverHead4').text())) > 1.1*(parseInt($comRem($('#turnOverHead5').text())))){
			$('#escalationSnapRow16').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow16').text("Escalation for ITR TO exceeding BTO by more than 10%");
		}
		else{
			$('#escalationSnapRow16').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow16').text("No Escalations");
		}
		
		// VAT Turnover
		if((parseInt($comRem($('#turnOverHead6').text())) > 1.3*(parseInt($comRem($('#turnOverHead5').text())))) || ((parseInt($comRem($('#turnOverHead6').text())) - (parseInt($comRem($('#turnOverHead5').text())))>50000000))){
			$('#escalationSnapRow17').css({"background-color": "#ff0000 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow17').text("Escalate for VAT Turnover not in Line with Banking Turnover");
		}
		else{
			$('#escalationSnapRow17').css({"background-color": "#92d050 !important" ,"color" : "#000 !important"});
			$('#escalationSnapRow17').text("No Escalations");
		}					
	});
	
	$(document).on('keyup change','#dscrMethodHead2,#freeCashHead2,#freeCashHead3,#freeCashHead4,#freeCashHead5,#freeCashHead6,freeCashHead7,freeCashHead8,#loanObligHead8,#tenureSnap,#interstRateSnap',function(){
		$_floorCal('floorDscrHead2','freeCashHead2');
		$_floorCal('floorDscrHead3','freeCashHead3');
		$_floorCal('floorDscrHead4','freeCashHead4');
		$_floorCal('floorDscrHead5','freeCashHead5');
		$_floorCal('floorDscrHead6','freeCashHead6');
		$_floorCalHead7('floorDscrHead7','freeCashHead7');
		$_floorCalHead8('floorDscrHead8','freeCashHead8');
		
		$_ceilingCal('ceilingDscrHead2','freeCashHead2');
		$_ceilingCal('ceilingDscrHead3','freeCashHead3');
		$_ceilingCal('ceilingDscrHead4','freeCashHead4');
		$_ceilingCal('ceilingDscrHead5','freeCashHead5');
		$_ceilingCal('ceilingDscrHead6','freeCashHead6');
		$_ceilingCalHead7('ceilingDscrHead7','freeCashHead7');
		$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
	});
	
	$(document).on('change','#freeCashHead9,#emiSnap',function(){
		if($('#freeCashHead9').val()=="BTO"){
		$('#turnOverHead8').val($_null('turnOverHead5'));
		$('#grossMarginHead8').val($_null('grossMarginHead5'));
		$('#COGSHead8').text($_null('COGSHead5'));
		$('#salariesHead8').val($_null('salariesHead5'));
		$('#rentalHead28').val($_null('rentalHead25'));
		$('#electricityHead8').val($_null('electricityHead5'));
		$('#misOthersHead8').val($_null('misOthersHead5'));
		
		$('#freeCashHead8').text($_null('freeCashHead5'));
		
		 _tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
		$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
		 
		 var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
			$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
			
		var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
		$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
		
		var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
		$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

		$_floorCalHead8('floorDscrHead8','freeCashHead8');
		$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
		
		}else{
		if($('#freeCashHead9').val()=="VAT"){
			
			$('#turnOverHead8').val($('#turnOverHead6').text());
			$('#grossMarginHead8').val($_null('grossMarginHead6'));
			$('#COGSHead8').text($_null('COGSHead6'));
			$('#salariesHead8').val($_null('salariesHead6'));
			$('#rentalHead28').val($_null('rentalHead26'));
			$('#electricityHead8').val($_null('electricityHead6'));
			$('#misOthersHead8').val($_null('misOthersHead6'));
			$('#freeCashHead8').text($_null('freeCashHead6'));
			
		}
					_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
					$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
					 
					 var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
					$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
						
					var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
					$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
					
					var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
					$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

		$_floorCalHead8('floorDscrHead8','freeCashHead8');
		$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
		}
	});
	
	$(document).on('change','#freeCashHead9,#dscrMethodHead7,#emiSnap',function(){
		if($('#freeCashHead9').val()=="ITR"){
			$('#turnOverHead8').val($('#turnOverHead4').text());
			$('#grossMarginHead8').val($('#grossMarginHead4').text());
			$('#COGSHead8').text($('#COGSHead4').text());
			$('#salariesHead8').val($('#salariesHead4').text());
			$('#rentalHead28').val($('#rentalHead24').text());
			$('#electricityHead8').val($('#electricityHead4').text());
			$('#misOthersHead8').val($('#misOthersHead4').text());
		
			if(($eNaN("turnOverHead8", "VAL")||$eNaN("COGSHead8", "TEXT")||$eNaN("salariesHead8", "VAL")||$eNaN("rentalHead28", "VAL")||$eNaN("electricityHead8", "VAL")||$eNaN("misOthersHead8", "VAL")||$eNaN("otherIncomeHead8", "VAL"))){
				$('#freeCashHead8').text(0);
			}else{var _calFreeHead8 = 0;
			_calFreeHead8 = ((parseFloat($comRem($('#turnOverHead8').val()))-parseFloat($comRem($('#COGSHead8').text())))-(parseFloat($comRem($("#salariesHead8").val()))+ parseFloat($comRem($("#rentalHead28").val()))+ parseFloat($comRem($("#electricityHead8").val()))+ parseFloat($comRem($("#misOthersHead8").val()))))+ parseFloat($comRem($("#otherIncomeHead8").val()));
			$('#freeCashHead8').text($commaPut(parseFloat(_calFreeHead8).toFixed(0)));
			}
			
			_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
			$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
					 
			$_floorCalHead8('floorDscrHead8','freeCashHead8');
			$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
		//	$('#COGSHead8').text(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($('#turnOverHead8').val())*(1-parseFloat($('#grossMarginHead8').val()/100)))).toFixed(0));
			
		}else{
				if($('#freeCashHead9').val()=="EDC"){
					
					$('#turnOverHead8').val($('#turnOverHead7').text());
					$('#grossMarginHead8').val($('#grossMarginHead7').val());
					$('#COGSHead8').text($('#COGSHead7').text());
					$('#salariesHead8').val($('#salariesHead7').val());
					$('#rentalHead28').val($('#rentalHead27').val());
					$('#electricityHead8').val($('#electricityHead7').val());
					$('#misOthersHead8').val($('#misOthersHead7').val());
					
					if(($eNaN("turnOverHead8", "VAL")||$eNaN("COGSHead8", "TEXT")||$eNaN("salariesHead8", "VAL")||$eNaN("rentalHead28", "VAL")||$eNaN("electricityHead8", "VAL")||$eNaN("misOthersHead8", "VAL")||$eNaN("otherIncomeHead8", "VAL"))){
						$('#freeCashHead8').text(0);
					}else{var _calFreeHead8 = 0;
					_calFreeHead8 = ((parseFloat($comRem($('#turnOverHead8').val()))-parseFloat($comRem($('#COGSHead8').text())))-(parseFloat($comRem($("#salariesHead8").val()))+ parseFloat($comRem($("#rentalHead28").val()))+ parseFloat($comRem($("#electricityHead8").val()))+ parseFloat($comRem($("#misOthersHead8").val()))))+ parseFloat($comRem($("#otherIncomeHead8").val()));
					$('#freeCashHead8').text($commaPut(parseFloat(_calFreeHead8).toFixed(0)));
					}
					
					_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
					$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
							 
					$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat($comRem($('#grossMarginHead8').val())/100)))).toFixed(0)));
				
					$_floorCalHead8('floorDscrHead8','freeCashHead8');
					$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
				}
			}
			var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
			$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
				
			var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
			$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
			
			var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
			$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

	});
	
	$(document).on('keyup change','#otherIncomeHead8,#freeCashHead9',function(){
		if($('#freeCashHead9').val()=="BTO"){
			
					$('#freeCashHead8').text($commaPut((($eNaN("freeCashHead5", "TEXT")||$eNaN("otherIncomeHead8", "VAL"))?0:((parseFloat($comRem($('#freeCashHead5').text()))+parseFloat($comRem($('#otherIncomeHead8').val())))))));
			
					$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat($comRem($('#grossMarginHead8').val())/100)))).toFixed(0)));
			
					_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
					$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
					 
					 var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
					$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
						
					var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
					$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
					
					var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
					$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

			$_floorCalHead8('floorDscrHead8','freeCashHead8');
			$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
			
		} else{
			if($('#freeCashHead9').val()=="VAT"){
				
				$('#freeCashHead8').text($commaPut((($eNaN("freeCashHead6", "TEXT")||$eNaN("otherIncomeHead8", "VAL"))?0:((parseFloat($comRem($('#freeCashHead6').text()))+parseFloat($comRem($('#otherIncomeHead8').val())))))));
				
				$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat($comRem($('#grossMarginHead8').val())/100)))).toFixed(0)));
				
				_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
				$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
				 
				 var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
				$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
					
				var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
				$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
				
				var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
				$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

					$_floorCalHead8('floorDscrHead8','freeCashHead8');
					$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
			}
		}
	});
	
	
	$(document).on('keyup','#turnOverHead8,#grossMarginHead8',function(){
		
		if($('#freeCashHead9').val()=="BTO" || $('#freeCashHead9').val()=="VAT"){
			$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat($comRem($('#grossMarginHead8').val())/100)))).toFixed(0)));
		}
	});
	
	$(document).on('keyup change','#otherIncomeHead8,#turnOverHead8,#grossMarginHead7,#salariesHead7,#rentalHead27,#electricityHead7,#misOthersHead7,#grossMarginHead8,#salariesHead8,#rentalHead28,#electricityHead8,#misOthersHead8' ,function(){
		//I20
		if($('#freeCashHead9').val()=="EDC"){
			var _e = $(this).attr('id');
			if(_e!='otherIncomeHead8'&&_e!='turnOverHead8'&&_e!='grossMarginHead8'&&_e!='salariesHead8'&&_e!='rentalHead28'&&_e!='electricityHead8'&&_e!='misOthersHead8'&&_e!='grossMarginHead7'&&_e!='salariesHead7'&&_e!='rentalHead27'&&_e!='electricityHead7'&&_e!='misOthersHead7'){
				$('#turnOverHead8').val($('#turnOverHead7').text());
				$('#grossMarginHead8').val($('#grossMarginHead7').val());
				$('#COGSHead8').text($('#COGSHead7').text());
				$('#salariesHead8').val($('#salariesHead7').val());
				$('#rentalHead28').val($('#rentalHead27').val());
				$('#electricityHead8').val($('#electricityHead7').val());
				$('#misOthersHead8').val($('#misOthersHead7').val());
			}
			if(_e=='grossMarginHead7'){
				$('#grossMarginHead8').val($('#grossMarginHead7').val());
			}else if(_e=='turnOverHead7'){
				$('#turnOverHead8').val($('#turnOverHead7').text());
			}else if(_e=='COGSHead7'){
				$('#COGSHead8').val($('#COGSHead7').val());
			}else if(_e=='salariesHead7'){
				$('#salariesHead8').val($('#salariesHead7').val());
			}else if(_e=='rentalHead27'){
				$('#rentalHead28').val($('#rentalHead27').val());
			}else if(_e=='electricityHead7'){
				$('#electricityHead8').val($('#electricityHead7').val());
			}else if(_e=='misOthersHead7'){
				$('#misOthersHead8').val($('#misOthersHead7').val());
			}
			
			if(($eNaN("turnOverHead8", "VAL")||$eNaN("COGSHead8", "TEXT")||$eNaN("salariesHead8", "VAL")||$eNaN("rentalHead28", "VAL")||$eNaN("electricityHead8", "VAL")||$eNaN("misOthersHead8", "VAL")||$eNaN("otherIncomeHead8", "VAL"))){
				$('#freeCashHead8').text(0);
			}else{var _calFreeHead8 = 0;
			_calFreeHead8 = ((parseFloat($comRem($('#turnOverHead8').val()))-parseFloat($comRem($('#COGSHead8').text())))-(parseFloat($comRem($("#salariesHead8").val()))+ parseFloat($comRem($("#rentalHead28").val()))+ parseFloat($comRem($("#electricityHead8").val()))+ parseFloat($comRem($("#misOthersHead8").val()))))+ parseFloat($comRem($("#otherIncomeHead8").val()));
			$('#freeCashHead8').text($commaPut(parseFloat(_calFreeHead8).toFixed(0)));
			}
			
			$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat($comRem($('#grossMarginHead8').val())/100)))).toFixed(0)));
			
			_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
			$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
			 
			 var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
			$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
				
			var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
			$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
			
			var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
			$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

			$_floorCalHead8('floorDscrHead8','freeCashHead8');
			$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
		
		}else{
			if($('#freeCashHead9').val()=="ITR"){
				
				if(($eNaN("turnOverHead8", "VAL")||$eNaN("COGSHead8", "TEXT")||$eNaN("salariesHead8", "VAL")||$eNaN("rentalHead28", "VAL")||$eNaN("electricityHead8", "VAL")||$eNaN("misOthersHead8", "VAL")||$eNaN("otherIncomeHead8", "VAL"))){
					$('#freeCashHead8').text(0);
				}else{var _calFreeHead8 = 0;
				_calFreeHead8 = ((parseFloat($comRem($('#turnOverHead8').val()))-parseFloat($comRem($('#COGSHead8').text())))-(parseFloat($comRem($("#salariesHead8").val()))+ parseFloat($comRem($("#rentalHead28").val()))+ parseFloat($comRem($("#electricityHead8").val()))+ parseFloat($comRem($("#misOthersHead8").val()))))+ parseFloat($comRem($("#otherIncomeHead8").val()));
				$('#freeCashHead8').text($commaPut(parseFloat(_calFreeHead8).toFixed(0)));
				}
				
				_tempMarginEdit8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("turnOverHead8","VAL"))?0:(((parseFloat($comRem($('#freeCashHead8').text())/(parseFloat($comRem($('#turnOverHead8').val()))))*100)))
				$('#marginEbitdaHead8').text((!isFinite(_tempMarginEdit8) || isNaN(_tempMarginEdit8))?'':$commaPut(parseFloat(_tempMarginEdit8).toFixed(2)));
						 		
				// // console.log('a-',$('#grossMarginHead8').val());
				var a = parseFloat(_tempgrossMarginHead4*100);
				
				if($('#grossMarginHead8').val() == parseFloat(_tempgrossMarginHead4*100).toFixed(2)){
					$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat((a)/100)))).toFixed(0)));
				}else{
					$('#COGSHead8').text($commaPut(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($comRem($('#turnOverHead8').val()))*(1-parseFloat($comRem($('#grossMarginHead8').val())/100)))).toFixed(0)));
				}
				//	 $('#COGSHead8').text(($eNaN("turnOverHead8", "VAL")||$eNaN("grossMarginHead8", "VAL"))?0:(parseFloat(parseFloat($('#turnOverHead8').val())*(1-parseFloat($('#grossMarginHead8').val()/100)))).toFixed(0));
				 
					var _preFundingHead8 = ($eNaN("freeCashHead8","TEXT") || $eNaN("loanObligHead8","TEXT"))?0:(parseFloat(parseFloat(($comRem($('#freeCashHead8').text()))/(parseFloat($comRem($('#loanObligHead8').text()))))).toFixed(2));
					$('#preFundingHead8').text((!isFinite(_preFundingHead8) || isNaN(_preFundingHead8))?'':Math.abs($commaPut(parseFloat(_preFundingHead8).toFixed(2))));
						
					var _postFundingHead8 = (parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2);
					$('#postFundingHead8').text((!isFinite(_postFundingHead8) || isNaN(_postFundingHead8))?'':$commaPut(parseFloat(_postFundingHead8).toFixed(2)));
					
					var _finalDscrSnapId = (($eNaN("freeCashHead8", "TEXT")||$eNaN("emiSnap", "TEXT"||$eNaN("emiSnap", "TEXT"))?0:(parseFloat(parseFloat($comRem($('#freeCashHead8').text()))/12)/((parseFloat($comRem($('#loanObligHead8').text()))/12) + parseFloat($comRem($('#emiSnap').text())))).toFixed(2)));
					$('#finalDscrSnapId').text((!isFinite(_finalDscrSnapId) || isNaN(_finalDscrSnapId))?'':$commaPut(parseFloat(_finalDscrSnapId).toFixed(2)));

				$_floorCalHead8('floorDscrHead8','freeCashHead8');
				$_ceilingCalHead8('ceilingDscrHead8','freeCashHead8');
			}
		}
	});
	
	$(document).on('click', '#btnSnapSubmitDummyId,#btnEscSubmitDummyId', function(){
		console.log($(this).attr('id'));
		$('#btnSnapSubmitDummyId').unbind('click');
		$('#btnEscSubmitDummyId').unbind('click');
		if($formValidity("snapshotFormId","btnSnapSubmitId")){
				if(confirm("Do you want to Submit form?") == true && snapSubmit == 0){
					++snapSubmit;
					$('#btnSnapSubmitDummyId').prop('disabled',true);
					$('#btnEscSubmitDummyId').prop('disabled',true);
					var escMatrixStatus = '';
					if($('#buttonnameId').text() == "OK"){
						escMatrixStatus = $('#escMatStatId').val();
					}else if($('#buttonnameId').text() == "Submit For Approval"){
						if($('#escMatStatId').val() == "On Hold" ){   
							escMatrixStatus = "On Hold";
						}else{
							escMatrixStatus = "Submit For Approval";
						}
					}
					
					if($('#escMatStatId').val() == "Submit For Approval") {
						cmSubmitForApproval = "Yes";
					}else{
						cmSubmitForApproval = "No";
					}
						var formDataa =  {
								"snapshotid" : 		isNaN(parseInt($('#snapshotHidId').text()))?0:parseInt($('#snapshotHidId').text()),
								"clientid":	 		parseInt($('#ClientSessionId').val()),
								"businesstype": 	$('#businessType').val(),
								"businesssegment": 	$('#businessSegment').val(),
								"businesslocation": $('#businessLocationsnap').val(),
								"businessvintage":	$('#businessVintageSnap').text(),
								"constitution": 	$('#constitutionId').text(),
								"officestatus": 	$('#offStatus').text(),
								"residencestatus": 	$('#residenceStatus').text(),
								"family": 			$('#familysnap').text(),
								"networth":			parseFloat($('#networthSnap').text()),
								"ownstructureno":  	parseFloat($('#ownershipstrucId').val()),
								"relatedparty":  	$('#relPartyId').val(),
								"servicetax": 		$('#serviceTaxOrVat').val(),
								"tds": 				$('#TDSId').val(),
								"incometax": 		$('#incomeTaxId').val(),
								"casesummary":  	$('#caseSummary').val(),
								"cibilscorentrack": $('#scoreAndTracksSnap').text(),
								"riskcategory": 	$('#riskCategorySnap').val(),
								"customerprofile": 	$('#custProfileSnap').text(),
								"primarybankacc": 	$('#primaryAcSnapId').val(),
								"additionalremark": $('#addRemarksSnap').val(),
								"pddoneby":			$('#snapPdDoneById').text(),
								"huevintagemonth" : $('#hueVintgMnthsId').val(),
								"escmatrixstatus" : escMatrixStatus,
								"escmatrix" : $('#escMatrixId').val(),
								"cmSubmitForApproval" : cmSubmitForApproval,
								"pnlsnapshot": {
									"pnlsnapshotid" : isNaN(parseInt($('#pnlsnapshotHidId').text()))?0:parseInt($('#pnlsnapshotHidId').text()),
									"dscrmethod": 			$('#dscrMethodHead2').val(),
									"edcmultiplier": 		parseFloat($('#dscrMethodHead7').val()),
									"otherincomeconsider": 	parseFloat($_NaNCheck('otherIncomeHead8','val')),
									"yearfirst":			$('#itr2HeadSnap').text(),
									"yearsecond":  			$('#itr1HeadSnap').text(),
									"yearthird": 			$('#latestHeadSnap').text(),
									"freecashvalue": 		parseFloat($_NaNCheck('freeCashHead8')),
									"turnover": {
										"turnoverid": isNaN(parseInt($('#turnOverHidId').text()))?0:parseInt($('#turnOverHidId').text()),
										"turnoveritrfyyearr2": 	parseFloat($comRem($('#turnOverHead2').text())),
										"turnoveritrfyyearr1": 	parseFloat($comRem($('#turnOverHead3').text())),
										"turnoveritrfyyearr": 	parseFloat($comRem($('#turnOverHead4').text())),
										"turnoverasperbto": 	parseFloat($comRem($('#turnOverHead5').text())),
										"turnoveraspervat": 	parseFloat($comRem($('#turnOverHead6').text())),
										"turnoverasperedc": 	parseFloat($comRem($('#turnOverHead7').text())),
										"turnoverconsensus": 	parseFloat($comRem($('#turnOverHead8').val())),
										"comment":$('#turnOverHead9').val()
									},


									"rental": {
										"rentalid" : isNaN(parseInt($('#rentalHidId').text()))?0:parseInt($('#rentalHidId').text()),
										"rentalitrfyyearr2": 	parseFloat($comRem($('#rentalHead22').text())),
										"rentalitrfyyearr1": 	parseFloat($comRem($('#rentalHead23').text())),
										"rentalitrfyyearr":  	parseFloat($comRem($('#rentalHead24').text())),
										"rentalasperedc":  		parseFloat($_NaNCheck('rentalHead27','val')),
										"rentalconsensus":  	parseFloat($_NaNCheck('rentalHead28','val')),
										"comment":$('#rentalHead29').val()
									},

									"grossmargin": {
										"grossmarginid" : isNaN(parseInt($('#grossHidId').text()))?0:parseInt($('#grossHidId').text()),
										"grossmarginitrfyyearr2": parseFloat($comRem($('#grossMarginHead2').text())),
										"grossmarginitrfyyearr1": parseFloat($comRem($('#grossMarginHead3').text())),
										"grossmarginitrfyyearr": parseFloat($comRem($('#grossMarginHead4').text())),
										"grossmarginasperedc": parseFloat($_NaNCheck('grossMarginHead7','val')),
										"grossmarginconsensus": parseFloat($_NaNCheck('grossMarginHead8','val')),
										"comment":$('#grossMarginHead9').val()
									},


									"cogsss": {
										"cogsid" : isNaN(parseInt($('#cogsHidId').text()))?0:parseInt($('#cogsHidId').text()),
										"cogsitrfyyearr2": 	parseFloat($comRem($('#COGSHead2').text())),
										"cogsitrfyyearr1": 	parseFloat($comRem($('#COGSHead3').text())),
										"cogsitrfyyearr":  	parseFloat($comRem($('#COGSHead4').text())),
										"cogsasperedc":		parseFloat($comRem($('#COGSHead7').text())),
										"cogsconsensus": 	parseFloat($comRem($('#COGSHead8').text()))
									},
									"ebitssmargin": {
										"ebitdamarginid" : isNaN(parseInt($('#marginEbitdaHidId').text()))?0:parseInt($('#marginEbitdaHidId').text()),
										"ebitdamarginitrfyyearr2": 	parseFloat($comRem($('#marginEbitdaHead2').text())),
										"ebitdamarginitrfyyearr1": 	parseFloat($comRem($('#marginEbitdaHead3').text())),
										"ebitdamarginitrfyyearr": 	parseFloat($comRem($('#marginEbitdaHead4').text())),
										"ebitdamarginasperbto": 	parseFloat($comRem($('#marginEbitdaHead5').text())),
										"ebitdamarginaspervat": 	parseFloat($comRem($('#marginEbitdaHead6').text())),
										"ebitdamarginasperemm": 	parseFloat($_NaNCheck('marginEbitdaHead7')),
										"ebitdamarginconsensus": 	parseFloat($_NaNCheck('marginEbitdaHead8')),
									},

									"freecash": {
										"freecashid" : isNaN(parseInt($('#freecashHidId').text()))?0:parseInt($('#freecashHidId').text()),
										"freecashitrfyyearr2": 	parseFloat($comRem($('#freeCashHead2').text())),
										"freecashitrfyyearr1": 	parseFloat($comRem($('#freeCashHead3').text())),
										"freecashitrfyyearr": 	parseFloat($comRem($('#freeCashHead4').text())),
										"freecashasperbto": 	parseFloat($comRem($('#freeCashHead5').text())),
										"freecashaspervat": 	parseFloat($comRem($('#freeCashHead6').text())),
										"freecashasperedc":		parseFloat($_NaNCheck('freeCashHead7')),
										"freecashselection": 	$('#freeCashHead9').val()
									},

									"loanobligation": {
										"loanobligationid" : isNaN(parseInt($('#loanObligationHidId').text()))?0:parseInt($('#loanObligationHidId').text()),
										"loanobligationitrfyyearr2": 	parseFloat($comRem($('#loanObligHead2').text())),
										"loanobligationitrfyyearr1": 	parseFloat($comRem($('#loanObligHead3').text())),
										"loanobligationitrfyyearr": 	parseFloat($comRem($('#loanObligHead4').text())),
										"loanobligationasperbto": 		parseFloat($comRem($('#loanObligHead5').text())),
										"loanobligationaspervat": 		parseFloat($comRem($('#loanObligHead6').text())),
										"loanobligationasperemm": 		parseFloat($comRem($('#loanObligHead7').text())),
										"loanobligationconsensus": 		parseFloat($comRem($('#loanObligHead8').text()))
									},

									"salaries": {
										"salariesid" : isNaN(parseInt($('#salariesHidId').text()))?0:parseInt($('#salariesHidId').text()),
										"salariesitrfyyearr2":  parseFloat($comRem($('#salariesHead2').text())),
										"salariesitrfyyearr1": 	parseFloat($comRem($('#salariesHead3').text())),
										"salariesitrfyyearr": 	parseFloat($comRem($('#salariesHead4').text())),
										"salariesedc": 			parseFloat($_NaNCheck('salariesHead7','val')),
										"salariesconsensus":	parseFloat($_NaNCheck('salariesHead8','val')),
										"comment":$('#salariesHead9').val()
								
									},
									"electricity": {
										"electricityid": isNaN(parseInt($('#electricityHidId').text()))?0:parseInt($('#electricityHidId').text()),
										"electricityitrfyyearr2": 	parseFloat($comRem($('#electricityHead2').text())),
										"electricityitrfyyearr1":	parseFloat($comRem($('#electricityHead3').text())),
										"electricityitrfyyearr": 	parseFloat($comRem($('#electricityHead4').text())),
										"electricityasperedc": 		parseFloat($_NaNCheck('electricityHead7','val')),
										"electricityconsensus": 	parseFloat($_NaNCheck('electricityHead8','val')),
										"comment":$('#electricityHead9').val()
									},
									"prefunddscrr": {
										"predscrid" : isNaN(parseInt($('#prefundingHidId').text()))?0:parseInt($('#prefundingHidId').text()),
										"predscritrfyyearr2": 	parseFloat($_NaNCheck('preFundingHead2')),
										"predscritrfyyearr1": 	parseFloat($_NaNCheck('preFundingHead3')),
										"predscritrfyyearr":  	parseFloat($_NaNCheck('preFundingHead4')),
										"predscrasperbto": 		parseFloat($_NaNCheck('preFundingHead5')),
										"predscraspervat": 		parseFloat($_NaNCheck('preFundingHead6')),
										"predscrasperemm":  	parseFloat($_NaNCheck('preFundingHead7')),
										"predscrconsensus":  	parseFloat($_NaNCheck('preFundingHead8'))
									},


									"postfunddscrr": {
										"postdscrid" : isNaN(parseInt($('#postFundingNHidId').text()))?0:parseInt($('#postFundingNHidId').text()),
										"postdscritrfyyearr2": 	parseFloat($_NaNCheck('postFundingHead2')),
										"postdscritrfyyearr1":	parseFloat($_NaNCheck('postFundingHead3')),
										"postdscritrfyyearr": 	parseFloat($_NaNCheck('postFundingHead4')),
										"postdscrasperbto":		parseFloat($_NaNCheck('postFundingHead5')),
										"postdscraspervat":		parseFloat($_NaNCheck('postFundingHead6')),
										"postdscrasperemm": 	parseFloat($_NaNCheck('postFundingHead7')),
										"postdscrconsensus": 	parseFloat($_NaNCheck('postFundingHead8'))
									},


									"otherincome": {
										"otherincomeid" : isNaN(parseInt($('#otherIncomeHidId').text()))?0:parseInt($('#otherIncomeHidId').text()),
										"otherincomeitrfyyearr2": parseFloat($_NaNCheck('otherIncomeHead2')),
										"otherincomeitrfyyearr1": parseFloat($_NaNCheck('otherIncomeHead3')),
										"otherincomeitrfyyearr":  parseFloat($_NaNCheck('otherIncomeHead4')),
										"comment":$('#otherIncomeHead9').val()
									},
									"floordscr": {
									"floordscrid" : isNaN(parseInt($('#floorDscrHidId').text()))?0:parseInt($('#floorDscrHidId').text()),
									"floordscritrfyyearr2": 	$_NaNCheck('floorDscrHead2'),
									"floordscritrfyyearr1":		$_NaNCheck('floorDscrHead3'),
									"floordscritrfyyearr":		$_NaNCheck('floorDscrHead4'),
									"floordscrasperbto": 		$_NaNCheck('floorDscrHead5'),
									"floordscraspervat": 		$_NaNCheck('floorDscrHead6'),
									"floordscrasperedc": 		$_NaNCheck('floorDscrHead7'),
									"floordscrconsensus": 		$_NaNCheck('floorDscrHead8')
									},
									"ceilingdscr": {
									"ceildscrid" : isNaN(parseInt($('#ceilingDscrHidId').text()))?0:parseInt($('#ceilingDscrHidId').text()),
									"ceildscitrfyyearr2": 	$_NaNCheck('ceilingDscrHead2'),
									"ceildscitrfyyearr1": 	$_NaNCheck('ceilingDscrHead3'),
									"ceildscitrfyyearr": 	$_NaNCheck('ceilingDscrHead4'),
									"ceildscasperbto": 		$_NaNCheck('ceilingDscrHead5'),
									"ceildscaspervat": 		$_NaNCheck('ceilingDscrHead6'),
									"ceildscrasperedc": 	$_NaNCheck('ceilingDscrHead7'),
									"ceildscrconsensus": 	$_NaNCheck('ceilingDscrHead8')
									},

									"misc": {
									"miscid" : isNaN(parseInt($('#misOthersHidId').text()))?0:parseInt($('#misOthersHidId').text()),
									"miscitrfyyearr2": 	parseFloat($comRem($('#misOthersHead2').text())),
									"miscitrfyyearr1": 	parseFloat($comRem($('#misOthersHead3').text())),
									"miscitrfyyearr": 	parseFloat($comRem($('#misOthersHead4').text())),
									"miscasperedc": 	parseFloat($_NaNCheck('misOthersHead7','val')),
									"miscconsensus": 	parseFloat($_NaNCheck('misOthersHead8','val')),
									"comment":$('#misOthersHead9').val()
									}
								},

								"loaneligibility": {
									"loaneligibilityid" : isNaN(parseInt($('#loaneligibilityHidId').text()))?0:parseInt($('#loaneligibilityHidId').text()),
									"finalloanamt": 		parseFloat($_NaNCheck('apprvdLoanAmntSnap','val')),
									"finaledi": 			parseFloat($_NaNCheck('apprvdEDI3')),
									"finaldscr": 			parseFloat($_NaNCheck('finalDscrSnapId')),
									"loanfinalisedunder": 	$('#loanApprvMethd').val(),
									"emi": 					parseFloat($_NaNCheck('emiSnap')),
									"stresstest": 			parseFloat($comRem($('#stressTestSnap').text())),
									"tenure": 				parseFloat($_NaNCheck('tenureSnap','val')),
									"repayfrequency": 		$('#repayFreqSnap').val(),
									"intrestrate": 			parseFloat($_NaNCheck('interstRateSnap','val'))
								},
								"escalation": $_getEscRowData(escRowCount),
								"rational" : $_getRatinalRowData(_snapRatnGet),
								"loaneligibilityguide": {
									"loaneligibilityguideid" :isNaN(parseInt($('#loaneligibilityguideHidId').text()))?0:parseInt($('#loaneligibilityguideHidId').text()),
									"loanamtmddb": 		parseFloat($_NaNCheck('loanAmountSnap2')),
									"loanamthue":		parseFloat($_NaNCheck('loanAmountSnap3')),
									"loanamtdexter":	parseFloat($_NaNCheck('loanAmountSnap4')),
									"considermddb": 	parseFloat($_NaNCheck('consiAmntSnap2','val')),
									"existingHse":      parseFloat($_NaNCheck('exixtingHseId')),
									"dexterdscr":		parseFloat($_NaNCheck('consiAmntSnap4'))
								}
							}

						if($(this).attr('id')=='btnSnapSubmitDummyId'){
							var API_SS_ESC_DEL = '/upf-system/upf/snapshot/delete/';
							var API_SS_RATNL_DEL = '/upf-system/upf/snapshot/deleteRational/';
									requestData(API_SS_ESC_DEL+$('#ClientSessionId').val(), "GET",{}).done(function(replyESC){
										if(replyESC.reply == 'entityremovedsuccessfully'){
											requestData(API_SS_RATNL_DEL+$('#ClientSessionId').val(), "GET",{}).done(function(replyRATNL){
											if(replyRATNL.reply == 'entityremovedsuccessfully'){
												requestData(API_SS_POST, "POST", JSON.stringify(formDataa)).done(function(reply){
													if(reply.reply == 'success'){
														requestData(API_D2D_POST+$('#ClientSessionId').val(), "GET",{}).done(function(replyD2D){
															if(replyD2D.reply == "data_fetched_successfully"){
																requestData(API_SS_ESC_DEL+$('#ClientSessionId').val(), "GET",{}).done(function(replyESC){
																	if(replyESC.reply == 'entityremovedsuccessfully'){	
																		requestData(API_SS_RATNL_DEL+$('#ClientSessionId').val(), "GET",{}).done(function(replyRATNL){
																			if(replyRATNL.reply == 'entityremovedsuccessfully'){
																				alert("Data successfully saved.");
																				window.location.reload();															}
																		});
																	}
																});
															}										
														});
													}										
												});
												}else{
													$('#btnSnapSubmitDummyId').prop('disabled',false);
													$('#btnEscSubmitDummyId').prop('disabled',false);
											}
										});
						 			}
						 		});
						}else{console.log('formDataa-',formDataa);
			 				requestData(API_SS_POST, "POST", JSON.stringify(formDataa)).done(function(reply){
			 					if(reply.reply == 'success'){
			 						alert("Data successfully saved.");
			 				//		window.location.reload();
			 						if($('#buttonnameId').text() == "Submit For Approval") {
			 							var emailData = {
					 							 "gkid" : parseInt($('#ClientSessionId').val()),
												 "losid" : isNaN(parseInt($('#losSessionId').val()))?0:parseInt($('#losSessionId').val()),
												 "emailid" : $('#escMatrixId').val(),
												 "approvalby" : localStorage.getItem("smName")
										}
					 					requestData('/upf-system/upf/snapshot/getsnapshotpdf/'+$('#ClientSessionId').val(), "GET").done(function(replyPdf){
					 						if(replyPdf.reply == 'success'){
					 							requestData('/upf-system/upf/snapshot/sendemail', "POST", JSON.stringify(emailData)).done(function(replyEmail){
													if(replyEmail.reply == "success"){
														window.location.reload();
													}
												});
					 						}
					 					});
			 						}else {
			 							window.location.reload();
			 						}
				 				}
			 				});
			 			}
				} // end for confirm
			}// END FOR IF CONDITION

	}); // END FOR btnSubmit snap
	
	
	$(document).on('change','#escMatStatId',function(){
		if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) > Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
	//		$('#escMatStatId').html("<option></option><option>On Hold</option>");
	//		$('#escMatStatId').val(a.escmatrixstatus);
			$('#buttonnameId').text('Submit For Approval');
			if($('#escMatStatId').val() == "On Hold"){
				if($('.a-escHide').is(':hidden')){
					$('#escMatrixId').attr('required',false);
				}else{
					$('#escMatrixId').attr('required',true);
				}
				$('#buttonnameId').text("OK");
			}else if($('#escMatStatId').val() == ""){
				if($('.a-escHide').is(':hidden')){
					$('#escMatrixId').attr('required',false);
				}else{
					$('#escMatrixId').attr('required',true);
				}
				$('#buttonnameId').text("Submit For Approval");
			}
		}else if(parseInt($comRem($('#apprvdLoanAmntSnap').val())) <= Math.min(parseInt($comRem($('#loanAmountSnap4').text())),approvalAmnt)){
	//		$('#escMatStatId').html("<option></option><option>Approve</option><option>Reject</option><option>On Hold</option>");
	//		$('#escMatStatId').val(a.escmatrixstatus);
			$('#buttonnameId').text('OK');
		}
		/* if(parseInt(approvalAmnt) < parseInt($comRem($('#loanAmountSnap4').text()))){
			if($('#escMatStatId').val() == "On Hold"){
				$('#escMatrixId').attr('required',false);
				$('#buttonnameId').text("OK");
			}else if($('#escMatStatId').val() == ""){
				$('#escMatrixId').attr('required',true);
				$('#buttonnameId').text("Submit For Approval");
			}
		}*/
	});
	
	
	/*$(document).on('click', '#btnD2dSubmitDummyId', function(){
		$('#btnD2dSubmitDummyId').unbind('click');
		if($formValidity("snapshotFormId","btnD2dSubmitId")){
				if(confirm("Do you want to Submit form?") == true && d2DId == 0){
					++d2DId;
					$('#btnD2dSubmitDummyId').prop('disabled',true);
						requestData(API_D2D_POST+$('#ClientSessionId').val(), "GET",{}).done(function(reply){
						if(reply.reply == "data_fetched_successfully"){
							alert("Data successfully saved.");
							window.location.reload();
						}else{
							$('#btnD2dSubmitDummyId').prop('disabled',false);
						}
					});
				} 
				}// END FOR IF CONDITION
	});*/
	
	
	
});// end for $snapshotCode()

function $_disableAllFields() {
	var cmSubmitForApproval =  localStorage.getItem("cmSubmitForApproval");
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', true);
		$('#btnEscSubmitDummyId').attr('disabled',true);
		$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', false);
		$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', false);
		if(cmSubmitForApproval == "Yes") {
			$('#btnSnapSubmitDummyId').attr('disabled',false);
		}else{
			$('#btnSnapSubmitDummyId').attr('disabled',false);
		}
	}else if(localStorage.getItem("changedTab") != "Snapshot") {
		$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', true);
		$('#btnEscSubmitDummyId').attr('disabled',true);
		$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', true);
	}else{
		$('#btnSnapSubmitDummyId,#snapshotTab input, #snapshotTab select, #snapshotTab textarea,#snapshotTab button').prop('disabled', false);
		$('#escalationBodyId select, #escalationBodyId textarea').prop('disabled', false);
		if(cmSubmitForApproval == "Yes") {
			$('#btnSnapSubmitDummyId').attr('disabled',false);
		}else{
			$('#btnSnapSubmitDummyId').attr('disabled',false);
		}
	}
} 