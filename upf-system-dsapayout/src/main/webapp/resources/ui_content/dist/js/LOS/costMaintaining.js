var loginEntity = JSON.parse(localStorage.getItem("loginEntity"));
var ip = '192.168.149.17'
var API_ALLLOGINDETAIL_GET = `http://${ip}:8080/upf-system/upf/authentication/getUserByUserId?id=${loginEntity==null?1:loginEntity.id}`;
var api = {
	getCount: function(){
		return `/upf-system-dsapayout/dsapayout/dsa/getDsaCount`
	},
	getPayoutdate: function(y,m,p){
		return 	`/upf-system-dsapayout/dsapayout/dsa/getPayoutdate?year=${y}&month=${m}&producttype=${p}`	
	},
	getDate: function(y,m,p){
		return `/upf-system-dsapayout/dsapayout/dsa/getDate?month=${m}&year=${y}&producttype=${p}`
	},
	getSblPayoutdate: function(y,m,p){
		return 	`/upf-system-dsapayout/dsapayout/dsa/getSblPayoutdate?year=${y}&month=${m}&producttype=${p}`	
	},
	sendemailDsaOnMis: function(){
		return `/upf-system-dsapayout/dsapayout/dsa/sendemailDsaOnMis`
	}
}


var API_COST_POST = '/upf-system-dsapayout/dsapayout/dsa/addadmindsa',
 API_COSTFORM_POST = '/upf-system-dsapayout/dsapayout/dsa/getlistdsaadmin'
//API_COSTFORM_POST = '/upf-system/upf/dsa/getdsabasedlist'
,API_STATE_GET = '/upf-system-dsapayout/dsapayout/dsa/getliststate'
,API_CITY_GET = '/upf-system-dsapayout/dsapayout/dsa/getlistcity?state='
,API_INVOICE_GET= '/upf-system-dsapayout/dsapayout/dsa/createinvoicepdf'
,API_DSA_LIST = '/upf-system-dsapayout/dsapayout/dsa/dsaList'
,API_BL_GET = '/upf-system-dsapayout/dsapayout/dsa/getBLInsentive?id=1'
,API_SBL_GET = '/upf-system-dsapayout/dsapayout/dsa/getsblincentive'
,API_EMAIL_DSA = '/upf-system-dsapayout/dsapayout/dsa/sendemailDsaOnMis?emailid='
,API_GET_COUNT = '/upf-system-dsapayout/dsapayout/dsa/getDsaCount'
,glblCnt = 0
,finalFormData = [];

var DSACODE = ""
,EMAILID = ""
,blGet  = {}
,sblGet ={}
,    page_count = 0;
;
var tblData = "";
var city = [];
var data = [];
var rowCnt = 0;
var myBarChart = null;

var sd
var ed
$(function(){
	    $(document).on('click','#doneMsgOkId',function(){
	    	window.location.reload();
	    });
	
//	requestData(API_BL_GET,"GET").done(function(blResponse){
//		blGet = blResponse;
//		console.log(JSON.stringify(blGet));
//	});
	
	requestData(API_SBL_GET,"GET").done(function(sblResponse){
		sblGet = sblResponse;
	});
	
	if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
		$('#proTypCostId').html('<option selected value="1">BL</option>');
		$('#proTypCostId').attr('disabled',true);
	}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
		$('#proTypCostId').html('<option selected value="4">SBL</option>');
		$('#proTypCostId').attr('disabled',true);
	}	

	var finalpayoutamount  = [];
	var location = [];
	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data
	});
/*autocomplete search	
	$(document).on('keypress keydown, keyup','#searchBoxCstMntgId',function(){
		if($('#searchBoxCstMntgId').val().replace(/\ /g,"").length == 0 || $('#searchBoxCstMntgId').val().includes("DSA Code") === false){
			$('#btnCstMtgSbtId').attr('disabled',true);
		}else if($('#searchBoxCstMntgId').val().includes("DSA Code")){
			$('#btnCstMtgSbtId').attr('disabled',false);
		}
		$('#searchBoxCstMntgId').autocomplete({
			source : function (request,response) {
				if($('#searchBoxCstMntgId').val() != " "){
					var _data = ($.map(dsaList,function (ke,val) {
						if(ke['state'].toUpperCase().includes(request.term.toUpperCase()) || ke['city'].toUpperCase().includes(request.term.toUpperCase()) ||ke['companyName'].toUpperCase().includes(request.term.toUpperCase()) || ke['dsacode'].toUpperCase().includes(request.term.toUpperCase()) || ke['pan'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.dsacode,
								label2 : ke.emailid,
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
					$('#searchBoxCstMntgId').val("");
                    return false;
                }else{
                	DSACODE = ui.item.label1;
                	EMAILID = ui.item.label2;
	 			}
			},minLength: 3
		});
	});*/
	/*$(listData).each(function(k,v){
		$(listData).each(function(k,v){
			
		});
	});*/
/*	finalpayoutamount.push(v.finalpayoutamount);
	location.push(v.location);
	var finalCityList = removeDuplicate(location);
	$_pieChart(finalpayoutamount,finalCityList);*/
	
	
	
	$_yearList('<option value="">Select Year</option>','yearAdmin');
	stateList('stateAdmin');
	$(document).on('keyup','.subvntnCalCls',function(){
		var 
        sancTtl = 0,
        netPyRtTtl = 0.00,
        defPyRtTtl = 0.00,
        fnlPyAmtTtl = 0,
        rtOfIntTtl = 0.00,
        intAmntTtl = 0,
        subVentionTtl = 0.00,
        pfTtl = 0,
        pfAmtTtl = 0;
		var rowId = $(this).attr('id').split('-')[1];
		if($('#includeCstMngId-'+rowId).val() == "YES"){
			$('#netPayRteCstMngId-'+rowId).text((isNAN('defPyRtCstMngId-'+rowId,'t') - isNAN('subventCstMngId-'+rowId,'v')).toFixed(2));
			$('#fnlPayAmntCstMngId-'+rowId).text($comPut((isNAN('sancAmntCstMngId-'+rowId,'t') * (isNAN('netPayRteCstMngId-'+rowId,'t')/100)).toFixed(0)));
			$('#intAmntCstMngId-'+rowId).text($comPut((isNAN('sancAmntCstMngId-'+rowId,'t') * (isNAN('rteOfIntCstMngId-'+rowId,'t')/100)).toFixed(0)));
		
			for(i=1;i<=glblCnt;i++){
				if($('#includeCstMngId-'+i).val() == "YES" && $('#paymentdoneId-'+i).text() == "NO"){
					sancTtl += isNAN('sancAmntCstMngId-'+i,'t');
                    netPyRtTtl += isNAN('netPayRteCstMngId-'+i,'t');
                    fnlPyAmtTtl += isNAN('fnlPayAmntCstMngId-'+i,'t');
                    rtOfIntTtl += isNAN('rteOfIntCstMngId-'+i,'t');
                    intAmntTtl += isNAN('intAmntCstMngId-'+i,'t');
                    pfTtl += isNAN('pfCstMngId-'+i,'t');
                    pfAmtTtl +=isNAN('pfAmntCstMngId-'+i,'t');
                    defPyRtTtl += isNAN('defPyRtCstMngId-'+i,'t');
                    subVentionTtl += isNAN('subventCstMngId-'+i,'val');
			}
				
				$('#sanctioned_amount_total').text($comPut(sancTtl));
                $('#avgnetpayrate').text(parseFloat(netPyRtTtl).toFixed(2));
                $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtl));
                $('#avgroi').text(parseFloat(rtOfIntTtl).toFixed(2));
                $('#int_amount_total').text($comPut(intAmntTtl));
                $('#avgpf').text(pfTtl);   
                $('#pfamounttotal').text($comPut(pfAmtTtl));
				
			}
			var checkYes = 0;  
			for(j=1;j<=glblCnt;j++){
				if($('#includeCstMngId-'+j).val() == "YES" && $('#paymentdoneId-'+j).text() == "NO"){
					++checkYes;
					 $('#sancamnavgId').text($comPut(parseFloat(sancTtl/checkYes).toFixed(0)));
                    $('#defPyRtAvgId').text(parseFloat(defPyRtTtl/checkYes).toFixed(2));
                    $('#subAvgId').text(parseFloat(subVentionTtl/checkYes).toFixed(2));
                    $('#finalPayAvgId').text($comPut(parseFloat(fnlPyAmtTtl/checkYes).toFixed(0)));
                    $('#intAmntAvgId').text($comPut(parseFloat(intAmntTtl/checkYes).toFixed(0)));
                    $('#pfAmntAvgId').text($comPut(parseFloat(pfAmtTtl/checkYes).toFixed(0)));
                    $('#avgnetpayrate').text(parseFloat(netPyRtTtl/checkYes).toFixed(2)); 
                    $('#avgroi').text(parseFloat(rtOfIntTtl/checkYes).toFixed(2));
                    $('#avgpf').text(parseFloat(pfTtl/checkYes).toFixed(2));
				}
			}
		}
	});
	
	$(document).on('change','.slctIncCls',function(){
		var 
		sancTtl = 0,
        netPyRtTtl = 0.00,
        defPyRtTtl = 0.00,
        fnlPyAmtTtl = 0,
        rtOfIntTtl = 0.00,
        intAmntTtl = 0,
        subVentionTtl = 0.00,
        pfTtl = 0,
        count = 0,
        pfAmtTtl = 0;
		var rowId = $(this).attr('id').split('-')[1];
		var value = $(this).val();
		if(value == "NO" && $('#paymentdoneId-'+rowId).text() == "NO"){
			if($('#sanctioned_amount_total').text() != 0){
				// SUM
				 $('#sanctioned_amount_total').text($comPut((isNAN('sanctioned_amount_total','t') - isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 
				 $('#finalpayoutamount_total').text($comPut((isNAN('finalpayoutamount_total','t') - isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 
				 $('#int_amount_total').text($comPut((isNAN('int_amount_total','t') - isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 
				 $('#pfamounttotal').text($comPut((isNAN('pfamounttotal','t') - isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(0)));
				
				// AVG 
				 $('#sancamnavgId').text($comPut((isNAN('sancamnavgId','t') - isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 $('#defPyRtAvgId').text((isNAN('defPyRtAvgId','t') - isNAN('defPyRtCstMngId-'+rowId,'t')).toFixed(2));
				 $('#subAvgId').text((isNAN('subAvgId','t') - isNAN('subventCstMngId-'+rowId,'val')).toFixed(2));
				 $('#avgnetpayrate').text((isNAN('avgnetpayrate','t') - isNAN('netPayRteCstMngId-'+rowId,'t')).toFixed(2));
				 $('#finalPayAvgId').text($comPut((isNAN('finalPayAvgId','t') - isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 $('#avgroi').text((isNAN('avgroi','t') - isNAN('rteOfIntCstMngId-'+rowId,'t')).toFixed(2));
				 $('#intAmntAvgId').text($comPut((isNAN('intAmntAvgId','t') - isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 $('#avgpf').text((isNAN('avgpf','t') - isNAN('pfCstMngId-'+rowId,'t')).toFixed(2));
				 $('#pfAmntAvgId').text($comPut((isNAN('pfAmntAvgId','t') - isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(0)));
				 
				 // COUNT
				 $('.cntAppMisCls').text(parseInt(count)-1);
				 
			}
			
			for(i=1;i<=glblCnt;i++){
				if($('#includeCstMngId-'+i).val() == "YES" && $('#paymentdoneId-'+i).text() == "NO"){
					sancTtl += isNAN('sancAmntCstMngId-'+i,'t');
                    netPyRtTtl += isNAN('netPayRteCstMngId-'+i,'t');
                    fnlPyAmtTtl += isNAN('fnlPayAmntCstMngId-'+i,'t');
                    rtOfIntTtl += isNAN('rteOfIntCstMngId-'+i,'t');
                    intAmntTtl += isNAN('intAmntCstMngId-'+i,'t');
                    pfTtl += isNAN('pfCstMngId-'+i,'t');
                    pfAmtTtl +=isNAN('pfAmntCstMngId-'+i,'t');
                    defPyRtTtl += isNAN('defPyRtCstMngId-'+i,'t');
                    subVentionTtl += isNAN('subventCstMngId-'+i,'val');
                    count = count + 1;
			}
				 $('#sanctioned_amount_total').text($comPut(sancTtl));
                 $('#avgnetpayrate').text(parseFloat(netPyRtTtl).toFixed(2));
                 $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtl));
                 $('#avgroi').text(parseFloat(rtOfIntTtl).toFixed(2));
                 $('#int_amount_total').text($comPut(intAmntTtl));
                 $('#avgpf').text(pfTtl);   
                 $('#pfamounttotal').text($comPut(pfAmtTtl));
                 $('.cntAppMisCls').text(count);
			}
			var checkYes = 0;
			for(j=1;j<=glblCnt;j++){
				if($('#includeCstMngId-'+j).val() == "YES" && $('#paymentdoneId-'+j).text() == "NO"){
					++checkYes;
				}
				$('#avgnetpayrate').text(isNaN(parseFloat(netPyRtTtl/checkYes).toFixed(2))?0:(parseFloat(netPyRtTtl/checkYes).toFixed(2))); 
				$('#avgroi').text(isNaN(parseFloat(rtOfIntTtl/checkYes).toFixed(2))?0:(parseFloat(rtOfIntTtl/checkYes).toFixed(2)));
				$('#avgpf').text(isNaN(parseFloat(pfTtl/checkYes).toFixed(2))?0:(parseFloat(pfTtl/checkYes).toFixed(2)));
				$('#sancamnavgId').text($comPut(isNaN(parseFloat(sancTtl/checkYes).toFixed(0))?0:(parseFloat(sancTtl/checkYes).toFixed(0))));
                $('#defPyRtAvgId').text(isNaN(parseFloat(defPyRtTtl/checkYes).toFixed(2))?0:(parseFloat(defPyRtTtl/checkYes).toFixed(2)));
                $('#subAvgId').text(isNaN(parseFloat(subVentionTtl/checkYes).toFixed(2))?0:(parseFloat(subVentionTtl/checkYes).toFixed(2)));
                $('#finalPayAvgId').text($comPut(isNaN(parseFloat(fnlPyAmtTtl/checkYes).toFixed(0))?0:(parseFloat(fnlPyAmtTtl/checkYes).toFixed(0))));
                $('#intAmntAvgId').text($comPut(isNaN(parseFloat(intAmntTtl/checkYes).toFixed(0))?0:(parseFloat(intAmntTtl/checkYes).toFixed(0))));
                $('#pfAmntAvgId').text($comPut(isNaN(parseFloat(pfAmtTtl/checkYes).toFixed(0))?0:(parseFloat(pfAmtTtl/checkYes).toFixed(0))));
                
			}
		}else if(value == "YES" && $('#paymentdoneId-'+rowId).text() == "NO"){
			$('#netPayRteCstMngId-'+rowId).text((isNAN('defPyRtCstMngId-'+rowId,'t') - isNAN('subventCstMngId-'+rowId,'v')).toFixed(2));
			$('#fnlPayAmntCstMngId-'+rowId).text($comPut((isNAN('sancAmntCstMngId-'+rowId,'t') * (isNAN('netPayRteCstMngId-'+rowId,'t')/100)).toFixed(0)));
			$('#intAmntCstMngId-'+rowId).text($comPut((isNAN('sancAmntCstMngId-'+rowId,'t') * (isNAN('rteOfIntCstMngId-'+rowId,'t')/100)).toFixed(0)));

			
			// SUM
			 $('#sanctioned_amount_total').text($comPut((isNAN('sanctioned_amount_total','t') + isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 
			 $('#finalpayoutamount_total').text($comPut((isNAN('finalpayoutamount_total','t') + isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 
			 $('#int_amount_total').text($comPut((isNAN('int_amount_total','t') + isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 
			 $('#pfamounttotal').text($comPut((isNAN('pfamounttotal','t') + isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(0)));

			 // AVG 
			 $('#sancamnavgId').text($comPut((isNAN('sancamnavgId','t') + isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#defPyRtAvgId').text((isNAN('defPyRtAvgId','t') + isNAN('defPyRtCstMngId-'+rowId,'t')).toFixed(2));
			 $('#subAvgId').text((isNAN('subAvgId','t') + isNAN('subventCstMngId-'+rowId,'val')).toFixed(2));
			 $('#avgnetpayrate').text((isNAN('avgnetpayrate','t') + isNAN('netPayRteCstMngId-'+rowId,'t')).toFixed(2));
			 $('#finalPayAvgId').text($comPut((isNAN('finalPayAvgId','t') + isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgroi').text((isNAN('avgroi','t') + isNAN('rteOfIntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#intAmntAvgId').text($comPut((isNAN('intAmntAvgId','t') + isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgpf').text((isNAN('avgpf','t') + isNAN('pfCstMngId-'+rowId,'t')).toFixed(2));
			 $('#pfAmntAvgId').text($comPut((isNAN('pfAmntAvgId','t') + isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 
			 // COUNT
			 $('.cntAppMisCls').text(parseInt(count)+1);
			
				for(i=1;i<=glblCnt;i++){
					if($('#includeCstMngId-'+i).val() == "YES" && $('#paymentdoneId-'+i).text() == "NO"){
						  	 sancTtl += isNAN('sancAmntCstMngId-'+i,'t');
	                         netPyRtTtl += isNAN('netPayRteCstMngId-'+i,'t');
	                         fnlPyAmtTtl += isNAN('fnlPayAmntCstMngId-'+i,'t');
	                         rtOfIntTtl += isNAN('rteOfIntCstMngId-'+i,'t');
	                         intAmntTtl += isNAN('intAmntCstMngId-'+i,'t');
	                         pfTtl += isNAN('pfCstMngId-'+i,'t');
	                         pfAmtTtl +=isNAN('pfAmntCstMngId-'+i,'t');
	                         defPyRtTtl += isNAN('defPyRtCstMngId-'+i,'t');
	                         subVentionTtl += isNAN('subventCstMngId-'+i,'val');
	                         count = count + 1;
				}
					
					$('#sanctioned_amount_total').text($comPut(sancTtl));
                    $('#avgnetpayrate').text(parseFloat(netPyRtTtl).toFixed(2));
                    $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtl));
                    $('#avgroi').text(parseFloat(rtOfIntTtl).toFixed(2));
                    $('#int_amount_total').text($comPut(intAmntTtl));
                    $('#avgpf').text(pfTtl);   
                    $('#pfamounttotal').text($comPut(pfAmtTtl));
                    $('.cntAppMisCls').text(count);
				}
		}

		var noOfIndFiles = 0;
		var sancIndTtl =0;
		var rowArr = ["",]; 
		
		for(j=1;j<=glblCnt;j++){
			if($('#dsaCodeMngId-'+j).text() === $('#dsaCodeMngId-'+rowId).text()){
				rowArr.push(j);
				if($('#includeCstMngId-'+j).val() === "YES" && $('#paymentdoneId-'+j).text() == "NO"){
					++noOfIndFiles;
					sancIndTtl += parseInt($comRem($('#sancAmntCstMngId-'+j).text()));	
				}
			}
		}
		  
		for(arr=1;arr<rowArr.length;arr++){
			if($('#proTypCostId').val() == "1"){
				if((parseInt(noOfIndFiles) >= blGet[2].minfilesdisbursed)) {
				     if((sancIndTtl > 10000000)) {
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[2].monthlypayout).toFixed(2));
				     }else if((sancIndTtl >= 5100000 && sancIndTtl <= 10000000)) {
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
				     }else if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
				     }else{
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[2].monthlypayout).toFixed(2));
				     }
				    }else if((parseInt(noOfIndFiles) >= blGet[1].minfilesdisbursed) && (parseInt(noOfIndFiles) < blGet[2].minfilesdisbursed)) {
				     if((sancIndTtl >= 5100000 && sancIndTtl <= 10000000)) {
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
				     }else if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
				     }else{
				    	 $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
				     }
				    }else if((parseInt(noOfIndFiles) >= blGet[0].minfilesdisbursed) && (parseInt(noOfIndFiles) < blGet[1].minfilesdisbursed)) {
				     if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
				      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
				     }else{
				    	 $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));  
				     }
				    }else{
				     $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(0).toFixed(2));
				    }
			}else if($('#proTypCostId').val() == "4"){
				if(sancIndTtl >= 200000 && sancIndTtl <=2000000){
					$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[0].monthlyslab).toFixed(2));
				}else if(sancIndTtl >= 2100000 && sancIndTtl <= 3000000){
					$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[1].monthlyslab).toFixed(2));
				}else if(sancIndTtl >= 3100000 && sancIndTtl <= 5000000){
					$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[2].monthlyslab).toFixed(2));
				}else if(sancIndTtl >= 5100000 && sancIndTtl <= 7400000){
					$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[3].monthlyslab).toFixed(2));
				}else if(sancIndTtl >= 7500000){
					$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[4].monthlyslab).toFixed(2));
				}else{
					$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(0).toFixed(2));
				}
			}
		}
		var 
		sancTtlDef = 0,
		netPyRtTtlDef = 0,
		fnlPyAmtTtlDef = 0,
		rtOfIntTtlDef = 0,
		intAmntTtlDef = 0,
		pfTtlDef = 0,
		pfAmtTtlDef = 0,
		defPyRtTtlDef = 0,
		subVentionTtlDef = 0;
		var checkYes = 0;
		for(k=1;k<=glblCnt;k++){
			 $('#netPayRteCstMngId-'+k).text((isNAN('defPyRtCstMngId-'+k,'t') - isNAN('subventCstMngId-'+k,'v')).toFixed(2));
			 $('#fnlPayAmntCstMngId-'+k).text($comPut((isNAN('sancAmntCstMngId-'+k,'t') * (isNAN('netPayRteCstMngId-'+k,'t')/100)).toFixed(0)));
			 $('#intAmntCstMngId-'+k).text($comPut((isNAN('sancAmntCstMngId-'+k,'t') * (isNAN('rteOfIntCstMngId-'+k,'t')/100)).toFixed(0)));

		if($('#includeCstMngId-'+k).val() == "YES" && $('#paymentdoneId-'+k).text() == "NO"){
			++checkYes;
				  	sancTtlDef += isNAN('sancAmntCstMngId-'+k,'t');
                    netPyRtTtlDef += isNAN('netPayRteCstMngId-'+k,'t');
                    fnlPyAmtTtlDef += isNAN('fnlPayAmntCstMngId-'+k,'t');
                    rtOfIntTtlDef += isNAN('rteOfIntCstMngId-'+k,'t');
                    intAmntTtlDef += isNAN('intAmntCstMngId-'+k,'t');
                    pfTtlDef += isNAN('pfCstMngId-'+k,'t');
                    pfAmtTtlDef +=isNAN('pfAmntCstMngId-'+k,'t');
                    defPyRtTtlDef += isNAN('defPyRtCstMngId-'+k,'t');
                    subVentionTtlDef += isNAN('subventCstMngId-'+k,'val'); 
		}
		   $('#sanctioned_amount_total').text($comPut(sancTtlDef));
           $('#avgnetpayrate').text(parseFloat(netPyRtTtlDef).toFixed(2));
           $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtlDef));
           $('#avgroi').text(parseFloat(rtOfIntTtlDef).toFixed(2));
           $('#int_amount_total').text($comPut(intAmntTtlDef));
           $('#avgpf').text(pfTtlDef);   
           $('#pfamounttotal').text($comPut(pfAmtTtlDef));
     }
	
	  	$('#avgnetpayrate').text(isNaN(parseFloat(netPyRtTtlDef/checkYes).toFixed(2))?0:(parseFloat(netPyRtTtlDef/checkYes).toFixed(2))); 
		$('#avgroi').text(isNaN(parseFloat(rtOfIntTtlDef/checkYes).toFixed(2))?0:(parseFloat(rtOfIntTtlDef/checkYes).toFixed(2)));
		$('#avgpf').text(isNaN(parseFloat(pfTtlDef/checkYes).toFixed(2))?0:(parseFloat(pfTtlDef/checkYes).toFixed(2)));
		$('#sancamnavgId').text($comPut(isNaN(parseFloat(sancTtlDef/checkYes).toFixed(0))?0:(parseFloat(sancTtlDef/checkYes).toFixed(0))));
        $('#defPyRtAvgId').text(isNaN(parseFloat(defPyRtTtlDef/checkYes).toFixed(2))?0:(parseFloat(defPyRtTtlDef/checkYes).toFixed(2)));
        $('#subAvgId').text(isNaN(parseFloat(subVentionTtlDef/checkYes).toFixed(2))?0:(parseFloat(subVentionTtlDef/checkYes).toFixed(2)));
        $('#finalPayAvgId').text($comPut(isNaN(parseFloat(fnlPyAmtTtlDef/checkYes).toFixed(0))?0:(parseFloat(fnlPyAmtTtlDef/checkYes).toFixed(0))));
        $('#intAmntAvgId').text($comPut(isNaN(parseFloat(intAmntTtlDef/checkYes).toFixed(0))?0:(parseFloat(intAmntTtlDef/checkYes).toFixed(0))));
        $('#pfAmntAvgId').text($comPut(isNaN(parseFloat(pfAmtTtlDef/checkYes).toFixed(0))?0:(parseFloat(pfAmtTtlDef/checkYes).toFixed(0))));
	
	});
	
	$(document).on('change','#stateAdmin',function(){   
		var cityList = "<option></option>";
		requestData(API_CITY_GET+$('#stateAdmin').val(),'GET').done(function(getCity){
			$(getCity.data).each(function(k,v){
				cityList += '<option>'+v.city+'</option>';
			});
			$('#cityAdmin').html(cityList);
		});
	}); 
	$(document).ajaxSend(function(e, xhr, opt){
//		$('.loadingoverlay').html(`<h2>Please wait...</h2>`).fadeIn(250);
		if(opt.method=='GET'){
			$('.loadingoverlay').html(`<h2>Loading...</h2>`).fadeIn(250);
		}else{
//			$('.loadingoverlay').html(`<h2>Please wait...</h2>`).fadeIn(250);
		}
	});
	$(document).ajaxComplete(function(e, xhr, opt){
		setTimeout(function(){
			$('.loadingoverlay').fadeOut(250);
		},100)
	});
	//remove this
//	$('#proTypCostId').val('1');
//	$('#yearAdmin').val('2018');
//	$('#monthAdmin').val('01');
});

function $_cstMngSbmt(event){
	event.preventDefault();

	var formdata = [];
	var arrSumAmount = [];
	  var arrSumRoi = [];
	  var arrSumPf = [];
	  var locationArr = [];
	 /*  formdata = [
		                {
		                	"location":"Mumbai",
		                	"finalpayoutamount":100,
		                	"roi":"12.00",
		                	"pf":2
		                },{
		                	"location":"Delhi",
		                	"finalpayoutamount":200,
		                	"roi":"5.00",
		                	"pf":3
		                },{
		                	"location":"Mumbai",
		                	"finalpayoutamount":100,
		                	"roi":"8.00",
		                	"pf":4
		                },{
		                	"location":"Delhi",
		                	"finalpayoutamount":200,
		                	"roi":"9.00",
		                	"pf":5
		                },{
		                	"location":"Mumbai",
		                	"finalpayoutamount":100,
		                	"roi":"12.00",
		                	"pf":2
		                },{
		                	"location":"Delhi",
		                	"finalpayoutamount":200,
		                	"roi":"5.00",
		                	"pf":3
		                },{
		                	"location":"Mumbai",
		                	"finalpayoutamount":100,
		                	"roi":"8.00",
		                	"pf":4
		                },{
		                	"location":"Delhi",
		                	"finalpayoutamount":200,
		                	"roi":"9.00",
		                	"pf":5
		                }
		                ]*/
	for(var i=1;i<=glblCnt;i++){
		arr = {
				  "dsadetailsid" : isNaN(parseInt($('#dsadetailsid-'+i).text()))?0:(parseInt($('#dsadetailsid-'+i).text())),
				  "productname" : $('#productnameid-'+i).text(),
				  "applied_loan_amount" : isNaN(parseFloat($comRem($('#appliedloanamountId-'+i).text())))?0:(parseFloat($comRem($('#appliedloanamountId-'+i).text()))),
				  "location" : $('#lctnCstMngId-'+i).text(),
				  "month" : $('#mnthCstMngId-'+i).text(),
				  "companyname" : $('#cmpNmCstMngId-'+i).text(),
				  "salesmanager" : $('#slsMngrCstMngId-'+i).text(),
				  "dsa" : $('#dsaCstMngId-'+i).text(),
				  "status" : $('#stsCstMngId-'+i).text(),
				  "sanctionedamount" : parseFloat($comRem($('#sancAmntCstMngId-'+i).text())),
				  "payrate" : parseFloat($('#defPyRtCstMngId-'+i).text()),
				  "subvention" : parseFloat($('#subventCstMngId-'+i).val()),
				  "netpayrate" : parseFloat($('#netPayRteCstMngId-'+i).text()),
				  "include" : $('#includeCstMngId-'+i).val(),
				  "finalpayoutamount" : parseFloat($comRem($('#fnlPayAmntCstMngId-'+i).text())),
				  "roi" : parseFloat($('#rteOfIntCstMngId-'+i).text()),
				  "interestamount" : parseFloat($comRem($('#intAmntCstMngId-'+i).text())),
				  "pf" : parseFloat($('#pfCstMngId-'+i).text()),
				  "pfamount" : parseFloat($comRem($('#pfAmntCstMngId-'+i).text())),
				  "losid" : $('#losCstMngId-'+i).text(),
				  "sanctioned_amount_total" : parseInt($comRem($('#sanctioned_amount_total').text())),
				  "avgnetpayrate" : parseFloat($('#avgnetpayrate').text()),
				  "finalpayoutamount_total" : parseFloat($comRem($('#finalpayoutamount_total').text())),
				  "avgroi" : parseFloat($('#avgroi').text()),
				  "int_amount_total" : parseFloat($comRem($('#int_amount_total').text())),
				  "avgpf" : parseFloat($('#avgpf').text()),
				  "dsacode" : $('#dsaCodeMngId-'+i).text(),//DSACODE,
				  "year":$('#yearAdmin').val(),
				  "month":$('#monthAdmin').val(),
				  "paymentFlag":$('#paymentdoneId-'+i).text(), 
				  "misFlag" : $('#includeCstMngId-'+i).val(),
				  "frequency" : $('#frequencyId-'+i).text(),
				  "gatekeeperid" : $('#gatekeeperId').text(),  
				  "pfamounttotal" : parseFloat($comRem($('#pfamounttotal').text())),
				  "remark" : $('#remarkId-'+i).text()=="N/A"?"":$('#remarkId-'+i).text(),
				  "paymentdate" : $('#paymentDateId-'+i).text()=="N/A"?null:$('#paymentDateId-'+i).text(),
				  "constatus" : $('#dsaConfirmId-'+i).text(),
				  "state" : $('#state-'+i).text()
				}
		
		formdata.push(arr);
	}
	//console.log(JSON.stringify(formdata));
	for(i=0;i<formdata.length;i++){
		   	if(formdata[i].include == "YES" && (formdata[i].paymentFlag == "NO" || formdata[i].paymentFlag == "YES")){
		   		locationArr.push(formdata[i].location);
		   	}
	}
		   var finalCityArr = removeDuplicate(locationArr);
		  for(i=0;i<finalCityArr.length;i++){
		  var sumAmnt = 0;
		  var sumRoi = 0;
		  var sumPf = 0;
		  var showLabel = [];
		  	for(var j=0;j<formdata.length;j++){
		    	if((finalCityArr[i] == formdata[j].location) && (formdata[j].include == "YES") && (formdata[j].paymentFlag == "NO" || formdata[j].paymentFlag == "YES")){
		      	sumAmnt = sumAmnt + formdata[j].finalpayoutamount;
		        sumRoi = sumRoi + parseInt(formdata[j].roi);
		        sumPf = sumPf + formdata[j].pf;
		      }
		    }
		    arrSumAmount.push(sumAmnt);
		    arrSumRoi.push(sumRoi);
		    arrSumPf.push(sumPf);
		  }
		  var form = $( "#CstMtngFrmId" );
		  form.validate();
		    if(form.valid() == true){
		    	finalFormData = formdata;
		    	$('#pieChartRowId').show();
		    	$_pieChart(arrSumAmount,finalCityArr);
		    }else{
		    	$('#btnCstMtgSbtDmId').click();
		    }
}
function $_actualSbmt(){
	var formdata = [];
	var emailData = {};
	var dsalist = [];
	var dsacodelist = [];
	$('#btnCstMtgSbtId').attr('disabled',true);
//	$('#finalSbmtId').attr('disabled',true);
	
	for(var i=1;i<=glblCnt;i++){
		arr = {
				  "dsadetailsid" : isNaN(parseInt($('#dsadetailsid-'+i).text()))?0:(parseInt($('#dsadetailsid-'+i).text())),
				  "productname" : $('#productnameid-'+i).text(),
				  "applied_loan_amount" : isNaN(parseFloat($comRem($('#appliedloanamountId-'+i).text())))?0:(parseFloat($comRem($('#appliedloanamountId-'+i).text()))),
				  "location" : $('#lctnCstMngId-'+i).text(),
				  "month" : $('#mnthCstMngId-'+i).text(),
				  "companyname" : $('#cmpNmCstMngId-'+i).text(),
				  "salesmanager" : $('#slsMngrCstMngId-'+i).text(),
				  "dsa" : $('#dsaCstMngId-'+i).text(),
				  "status" : $('#stsCstMngId-'+i).text(),
				  "sanctionedamount" : parseFloat($comRem($('#sancAmntCstMngId-'+i).text())),
				  "payrate" : parseFloat($('#defPyRtCstMngId-'+i).text()),
				  "subvention" : parseFloat($('#subventCstMngId-'+i).val()),
				  "netpayrate" : parseFloat($('#netPayRteCstMngId-'+i).text()),
				  "include" : $('#includeCstMngId-'+i).val(),
				  "finalpayoutamount" : parseFloat($comRem($('#fnlPayAmntCstMngId-'+i).text())),
				  "roi" : parseFloat($('#rteOfIntCstMngId-'+i).text()),
				  "interestamount" : parseFloat($comRem($('#intAmntCstMngId-'+i).text())),
				  "pf" : parseFloat($('#pfCstMngId-'+i).text()),
				  "pfamount" : parseFloat($comRem($('#pfAmntCstMngId-'+i).text())),
				  "losid" : $('#losCstMngId-'+i).text(),
				  "sanctioned_amount_total" : parseInt($comRem($('#sanctioned_amount_total').text())),
				  "avgnetpayrate" : parseFloat($('#avgnetpayrate').text()),
				  "finalpayoutamount_total" : parseFloat($comRem($('#finalpayoutamount_total').text())),
				  "avgroi" : parseFloat($('#avgroi').text()),
				  "int_amount_total" : parseFloat($comRem($('#int_amount_total').text())),
				  "avgpf" : parseFloat($('#avgpf').text()),
				  "dsacode" : $('#dsaCodeMngId-'+i).text(),//DSACODE,
				  "year":$('#yearAdmin').val(),
				  "month":$('#monthAdmin').val(),
				  "paymentFlag":$('#paymentdoneId-'+i).text(), 
				  "misFlag" : $('#includeCstMngId-'+i).val(),
				  "frequency" : $('#frequencyId-'+i).text(),
				  "gatekeeperid" : $('#gatekeeperId').text(),  
				  "pfamounttotal" : parseFloat($comRem($('#pfamounttotal').text())),
				  "remark" : $('#remarkId-'+i).text()=="N/A"?"":$('#remarkId-'+i).text(),
				  "paymentdate" : $('#paymentDateId-'+i).text()=="N/A"?null:$('#paymentDateId-'+i).text(),
				  "constatus" : $('#dsaConfirmId-'+i).text(),
				  "state" : $('#state-'+i).text()
				}
		
		formdata.push(arr);
		
		dsacodelist.push($('#dsaCodeMngId-'+i).text());
		dsalist.push({
				  "dsacode" : $('#dsaCodeMngId-'+i).text(),//DSACODE,
				  "dsa" : $('#dsaCstMngId-'+i).text(),
				  "month":$('#monthAdmin').val(),
				  "year":$('#yearAdmin').val(),
				  "companyname":$('#cmpNmCstMngId-'+i).text(),
				  "frequency" : $('#frequencyId-'+i).text(),
				  "state":$('#state-'+i).text(),
				  "finalpayoutamount" : parseFloat($comRem($('#fnlPayAmntCstMngId-'+i).text())),
				  "location":$('#lctnCstMngId-'+i).text()
			});
	}
	
	var set = new Set(dsacodelist);
	dsacodelist = Array.from(set);
	
	emailData = {
			dsalist : dsalist,
			dsacodelist : dsacodelist
	};
	
	requestData(API_COST_POST,"POST",JSON.stringify(formdata)).done(function(reply){
		if(reply.reply == "success"){
			requestData(api.sendemailDsaOnMis(),"POST",JSON.stringify(emailData)).done(function(reply){
				if(reply.reply=="success"){
					$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
					$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Data saved successfully.');
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal" onclick="$_reloadWindow();">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
					$('#myModal').modal('show')
				}
			}).fail(function(){
				window.location.reload();
			});
			
			
//			
//			requestData(API_EMAIL_DSA+EMAILID+'&month='+$("#monthAdmin :selected").text()+'&year='+$('#yearAdmin').val(),"POST",JSON.stringify(emailData)).done(function(emailReply){
//				if(reply.reply == "success"){
//					$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
//					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
//					$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Data saved successfully.');
//					$('#sucMwFtrId').html('<div align="center">'+
//					          				'<button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal" onclick="$_reloadWindow();">OK</button>'+
//					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
//					          				'</div>');
//					$('#myModal').modal('show')
//				}
//			}).fail(function(e){
//				window.location.reload();
//			});
		}
	}).fail(function(e){
//		$('#finalSbmtId').attr('disabled',false);
		$('#btnCstMtgSbtId').removeAttr('disabled');
	});
}
function isNAN(a,b){
	if(b == "t"){
		return isNaN(parseFloat($comRem($('#'+a).text())))?0:(parseFloat($comRem($('#'+a).text())));
	}else{
		return isNaN(parseFloat($comRem($('#'+a).val())))?0:(parseFloat($comRem($('#'+a).val())));
	}
}
function $_searchSbmt(event){
	event.preventDefault();
	$('#CstMtngFrmId')[0].reset();
	$('#CstMtngFrmId').show();
	$('#pieChartRowId').hide();           
	$('nav').css({"width":"1950px"});
	tblData = "";
	city = [];
	data = [];
	rowCnt = 0;
	var year = $('#yearAdmin').val()
	var month = $('#monthAdmin').val()
	var productcode = parseInt($('#proTypCostId').val())
	var producttype = $('#proTypCostId option:selected').text()
	
//	requestData(api.getPayoutdate(year,month),"POST").done(function(blResponse){
//		blGet = blResponse;
//	});
/*:p  Code for pagination
	var dataGet = 
			{
				  "dsa" : DSACODE==""?null:DSACODE,
				  "year": year,
				  "month": month,
				  "productcode": productcode
			};

	requestData(api.getCount(),"POST",JSON.stringify({
		"month": month,
		"year": year,
		"productcode": productcode
	})).done(function(count){
		 if(count==0)
	        {
			 tblData += 
					'<tr><td colspan="18" style="text-align:center;">NO DATA FOUND</td></tr>';
			 $('#CstMtngTbBdyId').html(tblData);
	        } else {
	            count = Math.ceil(count);
	            page_count = Math.ceil(count);
	            $_renderPages(page_count / 50);
	        }
	});*/
	var postData;
	requestData(api.getDate(year,month,producttype),"POST").done(function(getDateResponse){
		console.log(getDateResponse);
		if(getDateResponse.startdate==null){
			$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
			$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
			$('#sucMgsId').html(`<span class="glyphicon glyphicon-exclamation-sign"></span> Please define payouts for given month!! `);
			$('#sucMwFtrId').html('<div align="center">'+
			          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
			         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
			          				'</div>');
			$('#myModal').modal('show')
		}else{
			apiToCall = producttype=='BL'?api.getPayoutdate(year,month,producttype):api.getSblPayoutdate(year,month,producttype)
			requestData(apiToCall,"POST").done(function(blSblResponse){
				if(producttype=='BL'){
					if(blSblResponse[0].dateid==null){
						blGet = blSblResponse;
					}else{
						blGet = blSblResponse[0].monthlyslab;
					}
				}else{
					if(blSblResponse[0].dateid==null){
						sblGet = blSblResponse;
					}else{
						sblGet = blSblResponse[0].sblmonthlyslab;
					}
					
				}
				/*if(blResponse.startdate==null){
					blGet = blResponse[0];
					postData = {
							"year": $('#yearAdmin').val(),
							"month": $('#monthAdmin').val(),
							"productcode": parseInt($('#proTypCostId').val())
					}	
				}else{
					requestData(API_BL_GET,"GET").done(function(defaultRes){
						blGet = defaultRes;
					});
					postData = {
							"startdate":blGet.startdate,
							"enddate":blGet.enddate,
							"productcode": parseInt($('#proTypCostId').val())
					}
				}*/
				postData = {
						"startdate":getDateResponse.startdate,
						"enddate":getDateResponse.enddate,
						"productcode": parseInt($('#proTypCostId').val())
				}
				requestData(API_COSTFORM_POST, 'POST',JSON.stringify(postData)).done(function(data) {
					if ($.isEmptyObject(data)){
						$('#btnCstMtgSbtId').attr('disabled',true);
						tblData += 
							'<tr><td colspan="18" style="text-align:center;">NO DATA FOUND</td></tr>';
						$('#CstMtngTbBdyId').html(tblData);
					}else{
						$('#btnCstMtgSbtId').attr('disabled',false);
						console.log(data)

						var 
						sum1 = 0
						,sum2 = 0
						,sum3 = 0
						,sum4 = 0
						,sum5 = 0
						,sum6 = 0
						,sum7 = 0
						,count= 0
						,checkYes = 0;
						$(data).each(function(k,v){

							++rowCnt;
							tblData += '<tr style="align:center;">'+
							'<td id="dsadetailsid-'+rowCnt+'" class="a-dis">'+v.dsadetailsid+'</td>'+
							'<td id="appliedloanamountId-'+rowCnt+'" class="a-dis">'+(v.applied_loan_amount===undefined ?"":$comPut(v.applied_loan_amount))+'</td>'+
							'<td id="productnameid-'+rowCnt+'" class="a-dis">'+v.productname+'</td>'+
							'<td id="srNoCstMng-'+rowCnt+'">'+rowCnt+'</td>'+
							'<td id="state-'+rowCnt+'" class="stateCls">'+(v.state==undefined?'':v.state)+'</td>'+
							'<td id="lctnCstMngId-'+rowCnt+'">'+(v.location===undefined ?"":v.location)+'</td>'+
							'<td id="mnthCstMngId-'+rowCnt+'" class="a-dis">'+(v.month===undefined ?"":v.month)+'</td>'+
							'<td id="cmpNmCstMngId-'+rowCnt+'">'+(v.companyname===undefined ?"":v.companyname)+'</td>'+
							'<td id="slsMngrCstMngId-'+rowCnt+'">'+(v.salesmanger===undefined ?"":v.salesmanger)+'</td>'+
							'<td id="dsaCodeMngId-'+rowCnt+'" class="dsaHideCls">'+(v.dsacode===undefined ?"":v.dsacode)+'</td>'+
							'<td id="dsaCstMngId-'+rowCnt+'" class="dsaHideCls">'+(v.dsa===undefined ?"":v.dsa)+'</td>'+
							//	'<td id="stsCstMngId-'+rowCnt+'">'+(v.status===undefined ?"":v.status)+'</td>'+
							'<td id="sancAmntCstMngId-'+rowCnt+'">'+(v.sanctionloanamount===undefined ?"":$comPut(v.sanctionloanamount))+'</td>'+
							'<td id="defPyRtCstMngId-'+rowCnt+'" class="defPyRtCstMngCls">'+(v.definedpayrate===undefined ?"":parseFloat(v.definedpayrate).toFixed(2))+'</td>'+
							'<td>'+
							'<input id="subventCstMngId-'+rowCnt+'" type="text" class="form-control subvntnCalCls" required value="'+v.subinvention+'">'+
							'</td>'+
							'<td id="netPayRteCstMngId-'+rowCnt+'">'+(v.netpayrate===undefined ?"":v.netpayrate)+'</td>'+
							'<td>'+
							'<select  id="includeCstMngId-'+rowCnt+'" class="form-control slctIncCls" required>'+
							'<option selected>YES</option>'+
							'<option>NO</option>'+
							'</select>'+
							'</td>'+
							'<td id="fnlPayAmntCstMngId-'+rowCnt+'">'+(v.finalpayoutamount===undefined ?"":$comPut(v.finalpayoutamount))+'</td>'+
							'<td id="rteOfIntCstMngId-'+rowCnt+'">'+(v.roi===undefined ?"":v.roi)+'</td>'+
							'<td id="intAmntCstMngId-'+rowCnt+'">'+(v.intamt===undefined ?"":$comPut(v.intamt))+'</td>'+
							'<td id="pfCstMngId-'+rowCnt+'">'+(v.pf===undefined ?"":(v.pf).toFixed(2))+'</td>'+
							'<td id="pfAmntCstMngId-'+rowCnt+'">'+(v.processingamount===undefined ?"":$comPut(v.processingamount))+'</td>'+
							'<td id="frequencyId-'+rowCnt+'">'+(v.frequency===undefined ?"":v.frequency)+'</td>'+
							'<td id="losCstMngId-'+rowCnt+'">'+(v.losid===undefined ?"":v.losid)+'</td>'+
							'<td id="paymentdoneId-'+rowCnt+'">'+(v.paymentFlag=='YES'?'YES':'NO')+'</td>'+
							'<td id="gatekeeperId-'+rowCnt+'" class="a-dis">'+v.gatekeeperid+'</td>'+
							'<td id="dsaConfirmId-'+rowCnt+'">'+(v.constatus===undefined||v.constatus==="" ?"Yet To Confirm":v.constatus)+'</td>'+
							'<td id="paymentDateShwId-'+rowCnt+'">'+(v.paymentdate===undefined||v.paymentdate==="" ?"N/A":v.paymentdate.split(' ')[0])+'</td>'+
							'<td class="a-dis" id="paymentDateId-'+rowCnt+'">'+(v.paymentdate===undefined||v.paymentdate==="" ?"N/A":v.paymentdate)+'</td>'+
							'<td id="remarkId-'+rowCnt+'" style="min-width: 200px;">'+(v.remark===undefined||v.remark==="" ?"N/A":v.remark)+'</td>'+
							'</tr>';
							if(v.paymentFlag == "NO" && v.include == "YES"){++checkYes
								sum1 = sum1 + v.sanctionloanamount;
							sum2 = sum2 + parseFloat(v.netpayrate);
							sum3 = sum3 + v.finalpayoutamount;
							sum4 = sum4 + parseFloat(v.roi);
							sum5 = sum5 + v.intamt;
							sum6 = sum6 + parseFloat(v.pf);
							sum7 = sum7 + v.processingamount;
							count = count + 1;
							}
							glblCnt = rowCnt;
						});
						$('#sanctioned_amount_total').text(sum1);
						$('#avgnetpayrate').text(isNaN(sum2/checkYes)?0:(sum2/checkYes));
						$('#finalpayoutamount_total').text(sum3);
						$('#avgroi').text(isNaN(sum4/checkYes)?0:(sum4/checkYes));    
						$('#int_amount_total').text(sum5);
						$('#avgpf').text(isNaN(sum6/checkYes)?0:(sum6/checkYes));
						$('#pfamounttotal').text(sum7);
						$('.cntAppMisCls').text(count);
						$('#CstMtngTbBdyId').html(tblData);
//						:p					/////
						requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(replyAccess) {
						$(replyAccess.accessList).each(function(k,v){
						if( v.APPLICATION_MIS_TAB == "READ ONLY" ||  v.APPLICATION_MIS_TAB == "READONLY" || v.APPLICATION_MIS_TAB == "READ" ){
						$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', true);
						}else if( v.APPLICATION_MIS_TAB == "WRITE" ||  v.APPLICATION_MIS_TAB == "VIEW ALL"){
						$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
						}else{
						$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
						}  
						});
						var slctCnt = 0;
						$(data).each(function(k,v){++slctCnt;
						$('#includeCstMngId-'+slctCnt).val((v.include == undefined?"YES":v.include));
						if(v.misFlag == "YES"){
							$('#includeCstMngId-'+slctCnt).attr('disabled',true);
							$('#subventCstMngId-'+slctCnt).attr('disabled',true);
						}else if(v.misFlag == "NO"){
							$('#includeCstMngId-'+slctCnt).attr('disabled',true);
							$('#subventCstMngId-'+slctCnt).attr('disabled',true);
							//$('#includeCstMngId-'+slctCnt).attr('disabled',false);
							//$('#subventCstMngId-'+slctCnt).attr('disabled',false);
						}

						if(v.constatus == "DISAGREE"){
							$('#includeCstMngId-'+slctCnt).attr('disabled',false);
							$('#subventCstMngId-'+slctCnt).attr('disabled',false);
						}
						});
						var 
						sancTtl = 0,
						netPyRtTtl = 0.00,
						defPyRtTtl = 0.00,
						fnlPyAmtTtl = 0,
						rtOfIntTtl = 0.00,
						intAmntTtl = 0,
						subVentionTtl = 0.00,
						pfTtl = 0,
						count = 0,
						pfAmtTtl = 0;
						for(i=1;i<=glblCnt;i++){
							$('#netPayRteCstMngId-'+i).text((isNAN('defPyRtCstMngId-'+i,'t') - isNAN('subventCstMngId-'+i,'v')).toFixed(2));
							$('#fnlPayAmntCstMngId-'+i).text($comPut((isNAN('sancAmntCstMngId-'+i,'t') * (isNAN('netPayRteCstMngId-'+i,'t')/100)).toFixed(0)));
							$('#intAmntCstMngId-'+i).text($comPut((isNAN('sancAmntCstMngId-'+i,'t') * (isNAN('rteOfIntCstMngId-'+i,'t')/100)).toFixed(0)));

							if($('#includeCstMngId-'+i).val() == "YES" && ($('#paymentdoneId-'+i).text() == "NO" || $('#paymentdoneId-'+i).text() == "YES")){
								sancTtl += isNAN('sancAmntCstMngId-'+i,'t');
								netPyRtTtl += isNAN('netPayRteCstMngId-'+i,'t');
								fnlPyAmtTtl += isNAN('fnlPayAmntCstMngId-'+i,'t');
								rtOfIntTtl += isNAN('rteOfIntCstMngId-'+i,'t');
								intAmntTtl += isNAN('intAmntCstMngId-'+i,'t');
								pfTtl += isNAN('pfCstMngId-'+i,'t');
								pfAmtTtl +=isNAN('pfAmntCstMngId-'+i,'t');
								defPyRtTtl += isNAN('defPyRtCstMngId-'+i,'t');
								subVentionTtl += isNAN('subventCstMngId-'+i,'val');
								count = count + 1;
							}
							$('#sanctioned_amount_total').text($comPut(sancTtl));							
							$('#avgnetpayrate').text(parseFloat(netPyRtTtl).toFixed(2));
							$('#finalpayoutamount_total').text($comPut(fnlPyAmtTtl));
							$('#avgroi').text(parseFloat(rtOfIntTtl).toFixed(2));
							$('#int_amount_total').text($comPut(intAmntTtl));
							$('#avgpf').text(pfTtl);   
							$('#pfamounttotal').text($comPut(pfAmtTtl));
							$('.cntAppMisCls').text(count);
						}
						var checkYes = 0;
						for(j=1;j<=glblCnt;j++){
							if($('#includeCstMngId-'+j).val() == "YES" && ($('#paymentdoneId-'+j).text() == "NO" || $('#paymentdoneId-'+j).text() == "YES")){
								++checkYes;
								$('#sancamnavgId').text($comPut(parseFloat(sancTtl/checkYes).toFixed(0)));
								$('#defPyRtAvgId').text(parseFloat(defPyRtTtl/checkYes).toFixed(2));
								$('#subAvgId').text(parseFloat(subVentionTtl/checkYes).toFixed(2));
								$('#avgnetpayrate').text(parseFloat(netPyRtTtl/checkYes).toFixed(2)); 
								$('#finalPayAvgId').text($comPut(parseFloat(fnlPyAmtTtl/checkYes).toFixed(0)));
								$('#avgroi').text(parseFloat(rtOfIntTtl/checkYes).toFixed(2));
								$('#intAmntAvgId').text($comPut(parseFloat(intAmntTtl/checkYes).toFixed(0)));
								$('#avgpf').text(parseFloat(pfTtl/checkYes).toFixed(2));
								$('#pfAmntAvgId').text($comPut(parseFloat(pfAmtTtl/checkYes).toFixed(0)));
							}
						}
						var countInd = 0;
						while(glblCnt >= countInd){++countInd;
						var noOfIndFiles = 0;
						var sancIndTtl =0;
						var rowArr = ["",];
						for(j=1;j<=glblCnt;j++){
							if($('#dsaCodeMngId-'+j).text() === $('#dsaCodeMngId-'+countInd).text()){
								rowArr.push(j);
								if($('#includeCstMngId-'+j).val() === "YES" && ($('#paymentdoneId-'+j).text() == "NO" || $('#paymentdoneId-'+j).text() == "YES")){
									++noOfIndFiles;
									sancIndTtl += parseInt($comRem($('#sancAmntCstMngId-'+j).text()));
								}
							}
						}
						for(arr=1;arr<rowArr.length;arr++){
							if($('#proTypCostId').val() == "1"){
								if((parseInt(noOfIndFiles) >= blGet[2].minfilesdisbursed)) {
									if((sancIndTtl > 10000000)) {
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[2].monthlypayout).toFixed(2));
									}else if((sancIndTtl >= 5100000 && sancIndTtl <= 10000000)) {
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
									}else if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
									}else{
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[2].monthlypayout).toFixed(2));
									}
								}else if((parseInt(noOfIndFiles) >= blGet[1].minfilesdisbursed) && (parseInt(noOfIndFiles) < blGet[2].minfilesdisbursed)) {
									if((sancIndTtl >= 5100000 && sancIndTtl <= 10000000)) {
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
									}else if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
									}else{
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
									}
								}else if((parseInt(noOfIndFiles) >= blGet[0].minfilesdisbursed) && (parseInt(noOfIndFiles) < blGet[1].minfilesdisbursed)) {
									if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
									}else{
										$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));  
									}
								}else{
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(0).toFixed(2));
								}
							}else if($('#proTypCostId').val() == "4"){
								if(sancIndTtl >= 200000 && sancIndTtl <=2000000){
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[0].monthlyslab).toFixed(2));
								}else if(sancIndTtl >= 2100000 && sancIndTtl <= 3000000){
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[1].monthlyslab).toFixed(2));
								}else if(sancIndTtl >= 3100000 && sancIndTtl <= 5000000){
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[2].monthlyslab).toFixed(2));
								}else if(sancIndTtl >= 5100000 && sancIndTtl <= 7400000){
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[3].monthlyslab).toFixed(2));
								}else if(sancIndTtl >= 7500000){
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[4].monthlyslab).toFixed(2));
								}else{
									$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(0).toFixed(2));
								}
							}
						}
						}
						var 
						sancTtlDef = 0,
						netPyRtTtlDef = 0,
						fnlPyAmtTtlDef = 0,
						rtOfIntTtlDef = 0,
						intAmntTtlDef = 0,
						pfTtlDef = 0,
						pfAmtTtlDef = 0,     
						defPyRtTtlDef = 0,
						subVentionTtlDef = 0,
						checkDis = 0;
						for(k=1;k<=glblCnt;k++){
							$('#netPayRteCstMngId-'+k).text((isNAN('defPyRtCstMngId-'+k,'t') - isNAN('subventCstMngId-'+k,'v')).toFixed(2));
							$('#fnlPayAmntCstMngId-'+k).text($comPut((isNAN('sancAmntCstMngId-'+k,'t') * (isNAN('netPayRteCstMngId-'+k,'t')/100)).toFixed(0)));
							$('#intAmntCstMngId-'+k).text($comPut((isNAN('sancAmntCstMngId-'+k,'t') * (isNAN('rteOfIntCstMngId-'+k,'t')/100)).toFixed(0)));

							if($('#includeCstMngId-'+k).val() == "YES" && ($('#paymentdoneId-'+k).text() == "NO" || $('#paymentdoneId-'+k).text() == "YES")){
								sancTtlDef += isNAN('sancAmntCstMngId-'+k,'t');
								netPyRtTtlDef += isNAN('netPayRteCstMngId-'+k,'t');
								fnlPyAmtTtlDef += isNAN('fnlPayAmntCstMngId-'+k,'t');
								rtOfIntTtlDef += isNAN('rteOfIntCstMngId-'+k,'t');
								intAmntTtlDef += isNAN('intAmntCstMngId-'+k,'t');
								pfTtlDef += isNAN('pfCstMngId-'+k,'t');
								pfAmtTtlDef +=isNAN('pfAmntCstMngId-'+k,'t');
								defPyRtTtlDef += isNAN('defPyRtCstMngId-'+k,'t');
								subVentionTtlDef += isNAN('subventCstMngId-'+k,'val'); 
								/*  if($('#includeCstMngId-'+k).is(':disabled') === true){
					                    	++checkDis;
										 }  */
							}
							$('#sanctioned_amount_total').text($comPut(sancTtlDef));						
							$('#avgnetpayrate').text(parseFloat(netPyRtTtlDef).toFixed(2));
							$('#finalpayoutamount_total').text($comPut(fnlPyAmtTtlDef));
							$('#avgroi').text(parseFloat(rtOfIntTtlDef).toFixed(2));
							$('#int_amount_total').text($comPut(intAmntTtlDef));
							$('#avgpf').text(pfTtlDef);   
							$('#pfamounttotal').text($comPut(pfAmtTtlDef));
							$('#avgnetpayrate').text(isNaN(parseFloat(netPyRtTtlDef/checkYes).toFixed(2))?0:(parseFloat(netPyRtTtlDef/checkYes).toFixed(2))); 
							$('#avgroi').text(isNaN(parseFloat(rtOfIntTtlDef/checkYes).toFixed(2))?0:(parseFloat(rtOfIntTtlDef/checkYes).toFixed(2)));
							$('#avgpf').text(isNaN(parseFloat(pfTtlDef/checkYes).toFixed(2))?0:(parseFloat(pfTtlDef/checkYes).toFixed(2)));
							$('#sancamnavgId').text($comPut(isNaN(parseFloat(sancTtlDef/checkYes).toFixed(0))?0:(parseFloat(sancTtlDef/checkYes).toFixed(0))));
							$('#defPyRtAvgId').text(isNaN(parseFloat(defPyRtTtlDef/checkYes).toFixed(2))?0:(parseFloat(defPyRtTtlDef/checkYes).toFixed(2)));
							$('#subAvgId').text(isNaN(parseFloat(subVentionTtlDef/checkYes).toFixed(2))?0:(parseFloat(subVentionTtlDef/checkYes).toFixed(2)));
							$('#finalPayAvgId').text($comPut(isNaN(parseFloat(fnlPyAmtTtlDef/checkYes).toFixed(0))?0:(parseFloat(fnlPyAmtTtlDef/checkYes).toFixed(0))));
							$('#intAmntAvgId').text($comPut(isNaN(parseFloat(intAmntTtlDef/checkYes).toFixed(0))?0:(parseFloat(intAmntTtlDef/checkYes).toFixed(0))));
							$('#pfAmntAvgId').text($comPut(isNaN(parseFloat(pfAmtTtlDef/checkYes).toFixed(0))?0:(parseFloat(pfAmtTtlDef/checkYes).toFixed(0))));
						}

						if(DSACODE === null){
							$('#btnCstMtgSbtId').attr('disabled',true);
						}else if(DSACODE !== null){
							$('#btnCstMtgSbtId').attr('disabled',false);
						}

						for(z=1;z<=glblCnt;z++){
							if($('#includeCstMngId-'+z).is(':disabled') === true){
								++checkDis;
							}
						}
						if($('#searchBoxCstMntgId').val() == ""){
							DSACODE = null;
							//:p					$('.dsaHideCls').show();
//							$('nav').css({"width":"1950px"});
//							$('#costMainTblId').css({"width":"2100px"});
						}else{
							DSACODE = DSACODE;
							//:p					$('.dsaHideCls').hide();
//							$('nav').css({"width":"1650px"});
//							$('#costMainTblId').css({"width":"1830px"});
							if(glblCnt == checkDis){
								$('#btnCstMtgSbtId').attr('disabled',true);
//								$('#finalSbmtId').attr('disabled',true);
							}else{
								$('#btnCstMtgSbtId').attr('disabled',false);
//								$('#finalSbmtId').attr('disabled',false);
							}
						}
											});
					}
				}).fail(function(){
					$('#btnCstMtgSbtId').attr('disabled',true);
					tblData += 
							'<tr><td colspan="18" style="text-align:center;">NO DATA FOUND</td></tr>';
						$('#CstMtngTbBdyId').html(tblData);
				});
		});
		}
	}).fail(function(){
		$('#btnCstMtgSbtId').attr('disabled',true);
		tblData += 
				'<tr><td colspan="18" style="text-align:center;">NO DATA FOUND</td></tr>';
			$('#CstMtngTbBdyId').html(tblData);
		$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
		$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
		$('#sucMgsId').html(`<span class="glyphicon glyphicon-exclamation-sign"></span> Please add month defination for given month first! `);
		$('#sucMwFtrId').html('<div align="center">'+
		          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
		         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
		          				'</div>');
		$('#myModal').modal('show')
	});
	
}
function $_yearList(initOpt,idToApp){
	var dateYrOptn = initOpt;
		for(i=(new Date()).getFullYear();i>=2000;i--){
			dateYrOptn += '<option>'+i+'</option>';
	}
	$('#'+idToApp).html(dateYrOptn);
}
function stateList(idToApp){ 
	requestData(API_STATE_GET).done(function(getState){
		var stateList = '<option value="">Select State</option>';
		$(getState.data).each(function(k,v){
			stateList += '<option>'+v.state+'</option>';
		});
		$('#'+idToApp).html(stateList);
	});
}
function $_pieChart(dataAmnt,city){
	
	var canvas = document.getElementById("pieChartId");
	var ctx = canvas.getContext('2d');     
	ctx.clearRect(0, 0, 0, 0);                
	
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

	 if(myBarChart!=null){
		 myBarChart.destroy();
	 }
	// Chart declaration:
	myBarChart = new Chart(ctx, {
	    type: 'pie',
	    data: data,
	    options: options
	});

	// Fun Fact: I've lost exactly 3 of my favorite T-shirts and 2 hoodies this way :|

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
function sortTable(n) {
	  var table, rows, switching, i, x, y, a, b, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("costMainTblId");
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
	    for (i = 4 ; i < (rows.length - 1); i++) {
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
	    	  if ( a > b) {
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

	
	function $_renderPages(cnt){
		//not used function for now
		console.log(blGet)
		$('#pgntnPanel').twbsPagination('destroy');
		$('#pgntnPanel').twbsPagination({
			totalPages: Math.ceil(cnt),
			visiblePages: "10",
			onPageClick: function (event, page) {
				tblData = "";
				city = [];
				data = [];
				rowCnt = 0;
				// console.log(event);
				data_cl = (page * 50) - 50;
//				console.log(data_cl);
				$('#CstMtngTbBdyId').empty();
				//send start date ,if data is present in festival else month year
				requestData(API_COSTFORM_POST, 'POST',JSON.stringify({
//				  "dsa" : 'DSA0009',
				  "year": $('#yearAdmin').val(),
				  "month": $('#monthAdmin').val(),
				  "productcode":'1',//parseInt($('#proTypCostId').val())
//				  "offset": data_cl,
				  "startdate":blGet.startdate,
				  "enddate":blGet.enddate
				})).done(function(data) {
					if ($.isEmptyObject(data)){
						tblData += 
							'<tr><td colspan="18" style="text-align:center;">NO DATA FOUND</td></tr>';
						$('#CstMtngTbBdyId').html(tblData);
					}else{
						console.log(data)

						var 
						 sum1 = 0
						,sum2 = 0
						,sum3 = 0
						,sum4 = 0
						,sum5 = 0
						,sum6 = 0
						,sum7 = 0
						,count= 0
						,checkYes = 0;
					$(data).each(function(k,v){

						++rowCnt;
						tblData += '<tr style="align:center;">'+
						'<td id="dsadetailsid-'+rowCnt+'" class="a-dis">'+v.dsadetailsid+'</td>'+
						'<td id="appliedloanamountId-'+rowCnt+'" class="a-dis">'+(v.applied_loan_amount===undefined ?"":$comPut(v.applied_loan_amount))+'</td>'+
						'<td id="productnameid-'+rowCnt+'" class="a-dis">'+v.productname+'</td>'+
						'<td id="srNoCstMng-'+rowCnt+'">'+rowCnt+'</td>'+
						'<td id="state-'+rowCnt+'" class="stateCls">'+(v.state==undefined?'':v.state)+'</td>'+
						'<td id="lctnCstMngId-'+rowCnt+'">'+(v.location===undefined ?"":v.location)+'</td>'+
						'<td id="mnthCstMngId-'+rowCnt+'" class="a-dis">'+(v.month===undefined ?"":v.month)+'</td>'+
						'<td id="cmpNmCstMngId-'+rowCnt+'">'+(v.companyname===undefined ?"":v.companyname)+'</td>'+
						'<td id="slsMngrCstMngId-'+rowCnt+'">'+(v.salesmanger===undefined ?"":v.salesmanger)+'</td>'+
						'<td id="dsaCodeMngId-'+rowCnt+'" class="dsaHideCls">'+(v.dsacode===undefined ?"":v.dsacode)+'</td>'+
						'<td id="dsaCstMngId-'+rowCnt+'" class="dsaHideCls">'+(v.dsa===undefined ?"":v.dsa)+'</td>'+
					//	'<td id="stsCstMngId-'+rowCnt+'">'+(v.status===undefined ?"":v.status)+'</td>'+
						'<td id="sancAmntCstMngId-'+rowCnt+'">'+(v.sanctionloanamount===undefined ?"":$comPut(v.sanctionloanamount))+'</td>'+
						'<td id="defPyRtCstMngId-'+rowCnt+'" class="defPyRtCstMngCls">'+(v.definedpayrate===undefined ?"":parseFloat(v.definedpayrate).toFixed(2))+'</td>'+
						'<td>'+
						'<input id="subventCstMngId-'+rowCnt+'" type="text" class="form-control subvntnCalCls" required value="'+v.subinvention+'">'+
						'</td>'+
						'<td id="netPayRteCstMngId-'+rowCnt+'">'+(v.netpayrate===undefined ?"":v.netpayrate)+'</td>'+
						'<td>'+
						'<select  id="includeCstMngId-'+rowCnt+'" class="form-control slctIncCls" required>'+
						'<option selected>YES</option>'+
						'<option>NO</option>'+
						'</select>'+
						'</td>'+
						'<td id="fnlPayAmntCstMngId-'+rowCnt+'">'+(v.finalpayoutamount===undefined ?"":$comPut(v.finalpayoutamount))+'</td>'+
						'<td id="rteOfIntCstMngId-'+rowCnt+'">'+(v.roi===undefined ?"":v.roi)+'</td>'+
						'<td id="intAmntCstMngId-'+rowCnt+'">'+(v.intamt===undefined ?"":$comPut(v.intamt))+'</td>'+
						'<td id="pfCstMngId-'+rowCnt+'">'+(v.pf===undefined ?"":(v.pf).toFixed(2))+'</td>'+
						'<td id="pfAmntCstMngId-'+rowCnt+'">'+(v.processingamount===undefined ?"":$comPut(v.processingamount))+'</td>'+
						'<td id="frequencyId-'+rowCnt+'">'+(v.frequency===undefined ?"":v.frequency)+'</td>'+
						'<td id="losCstMngId-'+rowCnt+'">'+(v.losid===undefined ?"":v.losid)+'</td>'+
						'<td id="paymentdoneId-'+rowCnt+'">'+(v.paymentFlag=='YES'?'YES':'NO')+'</td>'+
						'<td id="gatekeeperId-'+rowCnt+'" class="a-dis">'+v.gatekeeperid+'</td>'+
						'<td id="dsaConfirmId-'+rowCnt+'">'+(v.constatus===undefined||v.constatus==="" ?"Yet To Confirm":v.constatus)+'</td>'+
						'<td id="paymentDateShwId-'+rowCnt+'">'+(v.paymentdate===undefined||v.paymentdate==="" ?"N/A":v.paymentdate.split(' ')[0])+'</td>'+
						'<td class="a-dis" id="paymentDateId-'+rowCnt+'">'+(v.paymentdate===undefined||v.paymentdate==="" ?"N/A":v.paymentdate)+'</td>'+
						'<td id="remarkId-'+rowCnt+'" style="min-width: 200px;">'+(v.remark===undefined||v.remark==="" ?"N/A":v.remark)+'</td>'+
						'</tr>';
						 if(v.paymentFlag == "NO" && v.include == "YES"){++checkYes
							 sum1 = sum1 + v.sanctionloanamount;
							 sum2 = sum2 + parseFloat(v.netpayrate);
							 sum3 = sum3 + v.finalpayoutamount;
							 sum4 = sum4 + parseFloat(v.roi);
							 sum5 = sum5 + v.intamt;
							 sum6 = sum6 + parseFloat(v.pf);
							 sum7 = sum7 + v.processingamount;
							 count = count + 1;
						}
						 glblCnt = rowCnt;
					});
					$('#sanctioned_amount_total').text(sum1);
					 $('#avgnetpayrate').text(isNaN(sum2/checkYes)?0:(sum2/checkYes));
					 $('#finalpayoutamount_total').text(sum3);
					 $('#avgroi').text(isNaN(sum4/checkYes)?0:(sum4/checkYes));    
					 $('#int_amount_total').text(sum5);
					 $('#avgpf').text(isNaN(sum6/checkYes)?0:(sum6/checkYes));
					 $('#pfamounttotal').text(sum7);
					 $('.cntAppMisCls').text(count);
					 $('#CstMtngTbBdyId').html(tblData);
//:p					/////
//					requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(replyAccess) {
//						$(replyAccess.accessList).each(function(k,v){
//						if( v.APPLICATION_MIS_TAB == "READ ONLY" ||  v.APPLICATION_MIS_TAB == "READONLY" || v.APPLICATION_MIS_TAB == "READ" ){
//							$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', true);
//						}else if( v.APPLICATION_MIS_TAB == "WRITE" ||  v.APPLICATION_MIS_TAB == "VIEW ALL"){
//							$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
//						}else{
//							$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
//						}  
//						});
						var slctCnt = 0;
						$(data).each(function(k,v){++slctCnt;
						$('#includeCstMngId-'+slctCnt).val((v.include == undefined?"YES":v.include));
						if(v.misFlag == "YES"){
							$('#includeCstMngId-'+slctCnt).attr('disabled',true);
							$('#subventCstMngId-'+slctCnt).attr('disabled',true);
						}else if(v.misFlag == "NO"){
							$('#includeCstMngId-'+slctCnt).attr('disabled',true);
							$('#subventCstMngId-'+slctCnt).attr('disabled',true);
							//$('#includeCstMngId-'+slctCnt).attr('disabled',false);
							//$('#subventCstMngId-'+slctCnt).attr('disabled',false);
						}
						
						if(v.constatus == "DISAGREE"){
							$('#includeCstMngId-'+slctCnt).attr('disabled',false);
							$('#subventCstMngId-'+slctCnt).attr('disabled',false);
						 }
					});
						var 
						 sancTtl = 0,
						 netPyRtTtl = 0.00,
						 defPyRtTtl = 0.00,
						 fnlPyAmtTtl = 0,
						 rtOfIntTtl = 0.00,
						 intAmntTtl = 0,
						 subVentionTtl = 0.00,
						 pfTtl = 0,
						 count = 0,
						 pfAmtTtl = 0;
								for(i=1;i<=glblCnt;i++){
									 $('#netPayRteCstMngId-'+i).text((isNAN('defPyRtCstMngId-'+i,'t') - isNAN('subventCstMngId-'+i,'v')).toFixed(2));
									 $('#fnlPayAmntCstMngId-'+i).text($comPut((isNAN('sancAmntCstMngId-'+i,'t') * (isNAN('netPayRteCstMngId-'+i,'t')/100)).toFixed(0)));
									 $('#intAmntCstMngId-'+i).text($comPut((isNAN('sancAmntCstMngId-'+i,'t') * (isNAN('rteOfIntCstMngId-'+i,'t')/100)).toFixed(0)));
								
								if($('#includeCstMngId-'+i).val() == "YES" && ($('#paymentdoneId-'+i).text() == "NO" || $('#paymentdoneId-'+i).text() == "YES")){
								 sancTtl += isNAN('sancAmntCstMngId-'+i,'t');
								 netPyRtTtl += isNAN('netPayRteCstMngId-'+i,'t');
								 fnlPyAmtTtl += isNAN('fnlPayAmntCstMngId-'+i,'t');
								 rtOfIntTtl += isNAN('rteOfIntCstMngId-'+i,'t');
								 intAmntTtl += isNAN('intAmntCstMngId-'+i,'t');
								 pfTtl += isNAN('pfCstMngId-'+i,'t');
								 pfAmtTtl +=isNAN('pfAmntCstMngId-'+i,'t');
								 defPyRtTtl += isNAN('defPyRtCstMngId-'+i,'t');
								 subVentionTtl += isNAN('subventCstMngId-'+i,'val');
								 count = count + 1;
								}
								 $('#sanctioned_amount_total').text($comPut(sancTtl));							
								 $('#avgnetpayrate').text(parseFloat(netPyRtTtl).toFixed(2));
								 $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtl));
								 $('#avgroi').text(parseFloat(rtOfIntTtl).toFixed(2));
								 $('#int_amount_total').text($comPut(intAmntTtl));
								 $('#avgpf').text(pfTtl);   
								 $('#pfamounttotal').text($comPut(pfAmtTtl));
								 $('.cntAppMisCls').text(count);
							}
							var checkYes = 0;
							for(j=1;j<=glblCnt;j++){
								if($('#includeCstMngId-'+j).val() == "YES" && ($('#paymentdoneId-'+j).text() == "NO" || $('#paymentdoneId-'+j).text() == "YES")){
									++checkYes;
									$('#sancamnavgId').text($comPut(parseFloat(sancTtl/checkYes).toFixed(0)));
									$('#defPyRtAvgId').text(parseFloat(defPyRtTtl/checkYes).toFixed(2));
									$('#subAvgId').text(parseFloat(subVentionTtl/checkYes).toFixed(2));
									$('#avgnetpayrate').text(parseFloat(netPyRtTtl/checkYes).toFixed(2)); 
									$('#finalPayAvgId').text($comPut(parseFloat(fnlPyAmtTtl/checkYes).toFixed(0)));
									$('#avgroi').text(parseFloat(rtOfIntTtl/checkYes).toFixed(2));
									$('#intAmntAvgId').text($comPut(parseFloat(intAmntTtl/checkYes).toFixed(0)));
									$('#avgpf').text(parseFloat(pfTtl/checkYes).toFixed(2));
									$('#pfAmntAvgId').text($comPut(parseFloat(pfAmtTtl/checkYes).toFixed(0)));
									}
							}
							var countInd = 0;
							while(glblCnt >= countInd){++countInd;
								var noOfIndFiles = 0;
								var sancIndTtl =0;
								var rowArr = ["",];
									for(j=1;j<=glblCnt;j++){
										if($('#dsaCodeMngId-'+j).text() === $('#dsaCodeMngId-'+countInd).text()){
											rowArr.push(j);
											if($('#includeCstMngId-'+j).val() === "YES" && ($('#paymentdoneId-'+j).text() == "NO" || $('#paymentdoneId-'+j).text() == "YES")){
												++noOfIndFiles;
												sancIndTtl += parseInt($comRem($('#sancAmntCstMngId-'+j).text()));
											}
										}
									}
								for(arr=1;arr<rowArr.length;arr++){
									if($('#proTypCostId').val() == "1"){
										if((parseInt(noOfIndFiles) >= blGet[2].minfilesdisbursed)) {
										     if((sancIndTtl > 10000000)) {
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[2].monthlypayout).toFixed(2));
										     }else if((sancIndTtl >= 5100000 && sancIndTtl <= 10000000)) {
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
										     }else if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
										     }else{
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[2].monthlypayout).toFixed(2));
										     }
										    }else if((parseInt(noOfIndFiles) >= blGet[1].minfilesdisbursed) && (parseInt(noOfIndFiles) < blGet[2].minfilesdisbursed)) {
										     if((sancIndTtl >= 5100000 && sancIndTtl <= 10000000)) {
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
										     }else if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
										     }else{
										    	 $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[1].monthlypayout).toFixed(2));
										     }
										    }else if((parseInt(noOfIndFiles) >= blGet[0].minfilesdisbursed) && (parseInt(noOfIndFiles) < blGet[1].minfilesdisbursed)) {
										     if((sancIndTtl >= 1000000 && sancIndTtl <= 5100000)) {
										      $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));
										     }else{
										    	 $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(blGet[0].monthlypayout).toFixed(2));  
										     }
										    }else{
										     $('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(0).toFixed(2));
										    }
									}else if($('#proTypCostId').val() == "4"){
										if(sancIndTtl >= 200000 && sancIndTtl <=2000000){
											$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[0].monthlyslab).toFixed(2));
										}else if(sancIndTtl >= 2100000 && sancIndTtl <= 3000000){
											$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[1].monthlyslab).toFixed(2));
										}else if(sancIndTtl >= 3100000 && sancIndTtl <= 5000000){
											$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[2].monthlyslab).toFixed(2));
										}else if(sancIndTtl >= 5100000 && sancIndTtl <= 7400000){
											$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[3].monthlyslab).toFixed(2));
										}else if(sancIndTtl >= 7500000){
											$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(sblGet[4].monthlyslab).toFixed(2));
										}else{
											$('#defPyRtCstMngId-'+rowArr[arr]).text(parseFloat(0).toFixed(2));
										}
									}
								}
							}
							var 
							sancTtlDef = 0,
							netPyRtTtlDef = 0,
							fnlPyAmtTtlDef = 0,
							rtOfIntTtlDef = 0,
							intAmntTtlDef = 0,
							pfTtlDef = 0,
							pfAmtTtlDef = 0,     
							defPyRtTtlDef = 0,
							subVentionTtlDef = 0,
							checkDis = 0;
							for(k=1;k<=glblCnt;k++){
								 $('#netPayRteCstMngId-'+k).text((isNAN('defPyRtCstMngId-'+k,'t') - isNAN('subventCstMngId-'+k,'v')).toFixed(2));
								 $('#fnlPayAmntCstMngId-'+k).text($comPut((isNAN('sancAmntCstMngId-'+k,'t') * (isNAN('netPayRteCstMngId-'+k,'t')/100)).toFixed(0)));
								 $('#intAmntCstMngId-'+k).text($comPut((isNAN('sancAmntCstMngId-'+k,'t') * (isNAN('rteOfIntCstMngId-'+k,'t')/100)).toFixed(0)));
							
							if($('#includeCstMngId-'+k).val() == "YES" && ($('#paymentdoneId-'+k).text() == "NO" || $('#paymentdoneId-'+k).text() == "YES")){
									  	sancTtlDef += isNAN('sancAmntCstMngId-'+k,'t');
					                    netPyRtTtlDef += isNAN('netPayRteCstMngId-'+k,'t');
					                    fnlPyAmtTtlDef += isNAN('fnlPayAmntCstMngId-'+k,'t');
					                    rtOfIntTtlDef += isNAN('rteOfIntCstMngId-'+k,'t');
					                    intAmntTtlDef += isNAN('intAmntCstMngId-'+k,'t');
					                    pfTtlDef += isNAN('pfCstMngId-'+k,'t');
					                    pfAmtTtlDef +=isNAN('pfAmntCstMngId-'+k,'t');
					                    defPyRtTtlDef += isNAN('defPyRtCstMngId-'+k,'t');
					                    subVentionTtlDef += isNAN('subventCstMngId-'+k,'val'); 
					                  /*  if($('#includeCstMngId-'+k).is(':disabled') === true){
					                    	++checkDis;
										 }  */
							}
							$('#sanctioned_amount_total').text($comPut(sancTtlDef));						
					           $('#avgnetpayrate').text(parseFloat(netPyRtTtlDef).toFixed(2));
					           $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtlDef));
					           $('#avgroi').text(parseFloat(rtOfIntTtlDef).toFixed(2));
					           $('#int_amount_total').text($comPut(intAmntTtlDef));
					           $('#avgpf').text(pfTtlDef);   
					           $('#pfamounttotal').text($comPut(pfAmtTtlDef));
					           $('#avgnetpayrate').text(isNaN(parseFloat(netPyRtTtlDef/checkYes).toFixed(2))?0:(parseFloat(netPyRtTtlDef/checkYes).toFixed(2))); 
					           $('#avgroi').text(isNaN(parseFloat(rtOfIntTtlDef/checkYes).toFixed(2))?0:(parseFloat(rtOfIntTtlDef/checkYes).toFixed(2)));
					           $('#avgpf').text(isNaN(parseFloat(pfTtlDef/checkYes).toFixed(2))?0:(parseFloat(pfTtlDef/checkYes).toFixed(2)));
					           $('#sancamnavgId').text($comPut(isNaN(parseFloat(sancTtlDef/checkYes).toFixed(0))?0:(parseFloat(sancTtlDef/checkYes).toFixed(0))));
					           $('#defPyRtAvgId').text(isNaN(parseFloat(defPyRtTtlDef/checkYes).toFixed(2))?0:(parseFloat(defPyRtTtlDef/checkYes).toFixed(2)));
					           $('#subAvgId').text(isNaN(parseFloat(subVentionTtlDef/checkYes).toFixed(2))?0:(parseFloat(subVentionTtlDef/checkYes).toFixed(2)));
					           $('#finalPayAvgId').text($comPut(isNaN(parseFloat(fnlPyAmtTtlDef/checkYes).toFixed(0))?0:(parseFloat(fnlPyAmtTtlDef/checkYes).toFixed(0))));
					           $('#intAmntAvgId').text($comPut(isNaN(parseFloat(intAmntTtlDef/checkYes).toFixed(0))?0:(parseFloat(intAmntTtlDef/checkYes).toFixed(0))));
					           $('#pfAmntAvgId').text($comPut(isNaN(parseFloat(pfAmtTtlDef/checkYes).toFixed(0))?0:(parseFloat(pfAmtTtlDef/checkYes).toFixed(0))));
						}
							
							if(DSACODE === null){
								$('#btnCstMtgSbtId').attr('disabled',true);
							}else if(DSACODE !== null){
								$('#btnCstMtgSbtId').attr('disabled',false);
							}
							
							for(z=1;z<=glblCnt;z++){
								if($('#includeCstMngId-'+z).is(':disabled') === true){
			                    	++checkDis;
								 }
							}
							if($('#searchBoxCstMntgId').val() == ""){
								DSACODE = null;
			//:p					$('.dsaHideCls').show();
//								$('nav').css({"width":"1950px"});
//								$('#costMainTblId').css({"width":"2100px"});
							}else{
								DSACODE = DSACODE;
			//:p					$('.dsaHideCls').hide();
//								$('nav').css({"width":"1650px"});
//								$('#costMainTblId').css({"width":"1830px"});
								if(glblCnt == checkDis){
									$('#btnCstMtgSbtId').attr('disabled',true);
//									$('#finalSbmtId').attr('disabled',true);
								}else{
									$('#btnCstMtgSbtId').attr('disabled',false);
//									$('#finalSbmtId').attr('disabled',false);
								}
							}
//"p					});
					}
				});
			}
		});
	}
	
	