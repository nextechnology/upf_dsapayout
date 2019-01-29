var
 API_COSTFORM_POST = '/upf-system-dsapayout/dsapayout/dsa/getmnthdsalist'
,API_STATE_GET = '/upf-system-dsapayout/dsapayout/dsa/getliststate'
,API_CITY_GET = '/upf-system-dsapayout/dsapayout/dsa/getlistcity?state='
,API_DSA_LIST = '/upf-system-dsapayout/dsapayout/dsa/dsaList'
,glblCnt = 0
,finalFormData = [];
;
var DSACODE = "";
var myBarChart = null;
$(function(){
	var finalpayoutamount  = [];
	var location = [];
/*	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data
	});*/
	/*$(listData).each(function(k,v){
		$(listData).each(function(k,v){
			
		});
	});*/
/*	finalpayoutamount.push(v.finalpayoutamount);
	location.push(v.location);
	var finalCityList = removeDuplicate(location);
	$_pieChart(finalpayoutamount,finalCityList);*/
	
/*	if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
		$('#proTypHisId').html('<option selected value="UBL">BL</option>');
		$('#proTypHisId').attr('disabled',true);
	}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
		$('#proTypHisId').html('<option selected value="SBL">SBL</option>');
		$('#proTypHisId').attr('disabled',true);
	}	*/
	
	$_yearList('<option value="">Select Year</option>','yearAdmin');
	stateList('stateAdmin');
	$(document).on('keyup','.subvntnCalCls',function(){
		var 
		 sancTtl = 0,
		 netPyRtTtl = 0,
		 fnlPyAmtTtl = 0,
		 rtOfIntTtl = 0,
		 intAmntTtl = 0,
		 pfTtl = 0,
		 pfAmtTtl = 0;
		var rowId = $(this).attr('id').split('-')[1];
		$('#netPayRteCstMngId-'+rowId).text((isNAN('defPyRtCstMngId-'+rowId,'t') - isNAN('subventCstMngId-'+rowId,'v')).toFixed(2));
		$('#fnlPayAmntCstMngId-'+rowId).text((isNAN('sancAmntCstMngId-'+rowId,'t') * (isNAN('netPayRteCstMngId-'+rowId,'t')/100)).toFixed(2));
		$('#intAmntCstMngId-'+rowId).text((isNAN('sancAmntCstMngId-'+rowId,'t') * (isNAN('rteOfIntCstMngId-'+rowId,'t')/100)).toFixed(2));
	
		for(i=1;i<=glblCnt;i++){
			 sancTtl += isNAN('sancAmntCstMngId-'+i,'t');
			 netPyRtTtl += isNAN('netPayRteCstMngId-'+i,'t');
			 fnlPyAmtTtl += isNAN('fnlPayAmntCstMngId-'+i,'t');
			 rtOfIntTtl += isNAN('rteOfIntCstMngId-'+i,'t');
			 intAmntTtl += isNAN('intAmntCstMngId-'+i,'t');
			 pfTtl += isNAN('pfCstMngId-'+i,'t');
			 pfAmtTtl +=isNAN('pfAmntCstMngId-'+i,'t');
			 
			 $('#sanctioned_amount_total').text(sancTtl);
			 $('#avgnetpayrate').text(netPyRtTtl);
			 $('#finalpayoutamount_total').text(fnlPyAmtTtl);
			 $('#avgroi').text(rtOfIntTtl);
			 $('#int_amount_total').text(intAmntTtl);
			 $('#avgpf').text(pfTtl);
			 $('#pfamounttotal').text(pfAmtTtl);  
		}
	});
	
	$(document).on('change','.slctIncCls',function(){
		var rowId = $(this).attr('id').split('-')[1];
		var value = $(this).val();
		if(value == "NO" && $('#paymentdoneId-'+rowId).text() == "NO"){
			 $('#sanctioned_amount_total').text((isNAN('sanctioned_amount_total','t') - isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#avgnetpayrate').text((isNAN('avgnetpayrate','t') - isNAN('netPayRteCstMngId-'+rowId,'t')).toFixed(2));
			 $('#finalpayoutamount_total').text((isNAN('finalpayoutamount_total','t') - isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#avgroi').text((isNAN('avgroi','t') - isNAN('rteOfIntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#int_amount_total').text((isNAN('int_amount_total','t') - isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#avgpf').text((isNAN('avgpf','t') - isNAN('pfCstMngId-'+rowId,'t')).toFixed(2));
			 $('#pfamounttotal').text((isNAN('pfamounttotal','t') - isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(2));
		}else if(value == "YES" && $('#paymentdoneId-'+rowId).text() == "NO"){
			 $('#sanctioned_amount_total').text((isNAN('sanctioned_amount_total','t') + isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#avgnetpayrate').text((isNAN('avgnetpayrate','t') + isNAN('netPayRteCstMngId-'+rowId,'t')).toFixed(2));
			 $('#finalpayoutamount_total').text((isNAN('finalpayoutamount_total','t') + isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#avgroi').text((isNAN('avgroi','t') + isNAN('rteOfIntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#int_amount_total').text((isNAN('int_amount_total','t') + isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#avgpf').text((isNAN('avgpf','t') + isNAN('pfCstMngId-'+rowId,'t')).toFixed(2));
			 $('#pfamounttotal').text((isNAN('pfamounttotal','t') + isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(2));
		}
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
	
	
	/*$(document).on('keypress','#searchBoxCstMntgId',function(){
		$('#searchBoxCstMntgId').autocomplete({
			source : function (request,response) {
				if($('#searchBoxCstMntgId').val() != " "){
					var _data = ($.map(dsaList,function (ke,val) {
						if(ke['state'].toUpperCase().includes(request.term.toUpperCase()) || ke['city'].toUpperCase().includes(request.term.toUpperCase()) ||ke['companyName'].toUpperCase().includes(request.term.toUpperCase()) || ke['dsacode'].toUpperCase().includes(request.term.toUpperCase()) || ke['pan'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.id,
								value : ['Company Name - ' + ke.companyName + ', DSA COde - ' +ke.dsacode+ ', Company PAN - '+ke.pan+ ', State - ' +ke.state+ ', City - ' + ke.city]
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
	 			}
			}
		});
	});*/
	
	
});

function $_cstMngSbmt(event){
	event.preventDefault();

	var formdata = 	[];
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
				  "applied_loan_amount" : isNaN(parseFloat($comRem($('#appliedloanamountId-'+i).text())))?0:(parseFloat($comRem($('#appliedloanamountId-'+i).text()))),
				  "location" : $('#lctnCstMngId-'+i).text(),
				  "month" : $('#mnthCstMngId-'+i).text(),
				  "companyname" : $('#cmpNmCstMngId-'+i).text(),
				  "salesmanager" : $('#slsMngrCstMngId-'+i).text(),
				  "dsa" : $('#dsaCstMngId-'+i).text(),
				  "status" : $('#stsCstMngId-'+i).text(),
				  "sanctionedamount" : parseFloat($comRem$('#sancAmntCstMngId-'+i).text()),
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
				  "finalpayoutamount_total" : parseFloat($('#finalpayoutamount_total').text()),
				  "avgroi" : parseFloat($('#avgroi').text()),
				  "int_amount_total" : parseFloat($('#int_amount_total').text()),
				  "avgpf" : parseFloat($('#avgpf').text()),
				  "dsacode" :DSACODE,
				  "year":$('#yearAdmin-'+i).text(),
				  "paymentFlag":$('#paymentdoneId-'+i).text(), 
				  "misFlag" : $('#includeCstMngId-'+i).val(),
				  "frequency" : $('#frequencyId-'+i).text(),
				  "gatekeeperid" : $('#gatekeeperId').text(),  
				  "pfamounttotal" : parseFloat($('#pfamounttotal').text())
				}
		formdata.push(arr);
	}
	console.log(JSON.stringify(formdata));
	for(i=0;i<formdata.length;i++){
		   	if(formdata[i].include == "YES" && formdata[i].paymentFlag == "NO"){
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
		    	if((finalCityArr[i] == formdata[j].location) && (formdata[j].include == "YES")){
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
	$('#finalSbmtId').attr('disabled',true);
	requestData(API_COST_POST,"POST",JSON.stringify(finalFormData)).done(function(reply){
		if(reply.reply == "success"){
			alert("Data saved successfully.");
			window.location.reload();
		}
	}).fail(function(e){
		$('#finalSbmtId').attr('disabled',false);
	});
}
function isNAN(a,b){
	if(b == "t"){
		return isNaN(parseFloat($('#'+a).text()))?0:(parseFloat($('#'+a).text()));
	}else{
		return isNaN(parseFloat($('#'+a).val()))?0:(parseFloat($('#'+a).val()));
	}
}
function $_searchSbmt(event){
	  
	event.preventDefault();
	$('#CstMtngFrmId')[0].reset();
	$('#CstMtngFrmId').show();
	$('#pieChartRowId').hide(); 
	$('nav').css({"width":"1700px"});
	var tblData = "";
	var city = [];
	var data = [];
	var rowCnt = 0;
	var formdata = [];
	var dataGet = 
			{
				  "dsacode" : $('#searchBoxCstMntgId').val(),//DSACODE==""?null:DSACODE,
				  "year":$('#yearAdmin').val()==""?null:$('#yearAdmin').val(),
				  "month":$('#monthAdmin').val()==""?null:$('#monthAdmin').val(),
				  "productname":$('#proTypHisId').val()
			};
	requestData(API_COSTFORM_POST,"POST",JSON.stringify(dataGet)).done(function(replyForm){
		if($.isEmptyObject(replyForm)){
			tblData += 
			'<tr><td colspan="21" style="text-align:center;">NO DATA FOUND</td></tr>';
			 $('#CstMtngTbBdyId').html(tblData);
			 $('#sanctioned_amount_total').text(0);
			 $('#sancamnavgId').text(0);
			 $('#defPyRtAvgId').text(0);
			 $('#subAvgId').text(0);
			 $('#avgnetpayrate').text(0);
			 $('#finalpayoutamount_total').text(0);
			 $('#finalPayAvgId').text(0);
			 $('#avgroi').text(0);    
			 $('#int_amount_total').text(0);
			 $('#intAmntAvgId').text(0);
			 $('#avgpf').text(0);
			 $('#pfamounttotal').text(0);
			 $('#pfAmntAvgId').text(0);
			 $('.cntAppMisCls').text(0);
		}else{
			var 
            sum1 = 0
           ,sum2 = 0
           ,sum3 = 0
           ,sum4 = 0
           ,sum5 = 0
           ,sum6 = 0
           ,sum7 = 0
           ,sum8 = 0
           ,sum9 = 0
           ,count= 0
           ,checkYes = 0;
			var arrSumAmount = [];
			  var arrSumRoi = [];
			  var arrSumPf = [];
			  var locationArr = [];
			  var finalPayoutArr = [];
		$(replyForm).each(function(k,v){++rowCnt;
		tblData += '<tr style="align:center;">'+
		'<td id="dsadetailsid-'+rowCnt+'" class="a-dis">'+v.dsadetailsid+'</td>'+
		'<td id="productnameid-'+rowCnt+'" class="a-dis">'+v.productname+'</td>'+
		'<td id="appliedloanamountId-'+rowCnt+'" class="a-dis">'+$comPut(v.applied_loan_amount)+'</td>'+
		'<td id="srNoCstMng-'+rowCnt+'">'+rowCnt+'</td>'+
		'<td id="lctnCstMngId-'+rowCnt+'">'+v.location+'</td>'+
		'<td id="yearAdmin-'+rowCnt+'" class="dsaYearDis">'+v.year+'</td>'+
		'<td id="mnthCstMngId-'+rowCnt+'" class="dsaMonthDis">'+v.month+'</td>'+
		'<td id="cmpNmCstMngId-'+rowCnt+'">'+v.companyname+'</td>'+
		'<td id="slsMngrCstMngId-'+rowCnt+'">'+(v.salesmanger===undefined ?"":v.salesmanger)+'</td>'+
		'<td id="dsaCodeid-'+rowCnt+'" class="dsaCodeDis">'+v.dsacode+'</td>'+
		'<td id="dsaCstMngId-'+rowCnt+'" class="dsaNameDis">'+v.dsa+'</td>'+
		//'<td id="stsCstMngId-'+rowCnt+'">'+v.status+'</td>'+
		'<td id="sancAmntCstMngId-'+rowCnt+'">'+$comPut(v.sanctionloanamount)+'</td>'+
		'<td id="defPyRtCstMngId-'+rowCnt+'">'+v.definedpayrate+'</td>'+
		'<td>'+
		'<input id="subventCstMngId-'+rowCnt+'" type="text" class="form-control subvntnCalCls" required value="'+v.subinvention+'">'+
		'</td>'+
		'<td id="netPayRteCstMngId-'+rowCnt+'">'+parseFloat(v.netpayrate).toFixed(2)+'</td>'+
		'<td>'+
		'<select  id="includeCstMngId-'+rowCnt+'" class="form-control slctIncCls" required>'+
		'<option selected>YES</option>'+
		'<option>NO</option>'+
		'</select>'+
		'</td>'+
		'<td id="fnlPayAmntCstMngId-'+rowCnt+'">'+$comPut(v.finalpayoutamount)+'</td>'+
		'<td id="rteOfIntCstMngId-'+rowCnt+'">'+parseFloat(v.roi).toFixed(2)+'</td>'+
		'<td id="intAmntCstMngId-'+rowCnt+'">'+$comPut(v.intamt)+'</td>'+
		'<td id="pfCstMngId-'+rowCnt+'">'+(v.pf).toFixed(2)+'</td>'+
		'<td id="pfAmntCstMngId-'+rowCnt+'">'+$comPut(v.processingamount)+'</td>'+
		'<td id="frequencyId-'+rowCnt+'">'+v.frequency+'</td>'+
		'<td id="losCstMngId-'+rowCnt+'">'+v.losid+'</td>'+
		'<td id="paymentdoneId-'+rowCnt+'">'+(v.paymentFlag=='YES'?'YES':'NO')+'</td>'+
		'<td id="gatekeeperId-'+rowCnt+'" class="a-dis">'+v.gatekeeperid+'</td>'+
		'</tr>';
			
			var arr = {
					"location" : v.location,
					"finalpayoutamount" : v.finalpayoutamount
			}
			formdata.push(arr);
			if(v.paymentFlag == "YES" && v.include == "YES"){++checkYes;
			sum1 = sum1 + v.sanctionloanamount;
            sum2 = sum2 + parseFloat(v.netpayrate);
            sum3 = sum3 + v.finalpayoutamount;
            sum4 = sum4 + parseFloat(v.roi);
            sum5 = sum5 + v.intamt;
            sum6 = sum6 + parseFloat(v.pf);
            sum7 = sum7 + v.processingamount;
            sum8 = sum8 + parseFloat(v.definedpayrate);
            sum9 = sum9 + parseFloat(v.subinvention);
            count = count + 1;
			}
			 glblCnt = rowCnt;
		});
		$('#CstMtngTbBdyId').html(tblData);
		 
		$('#sanctioned_amount_total').text($comPut(sum1));
		 $('#sancamnavgId').text($comPut(isNaN(sum1/checkYes)?0:(sum1/checkYes).toFixed(0)));
		 
		 $('#defPyRtAvgId').text(isNaN(sum8/checkYes)?0:(sum8/checkYes).toFixed(2));
		 
		 $('#subAvgId').text(isNaN(sum9/checkYes)?0:(sum9/checkYes).toFixed(2));
		 
		 $('#avgnetpayrate').text(isNaN(sum2/checkYes)?0:(sum2/checkYes).toFixed(2));
		 
		 $('#finalpayoutamount_total').text($comPut(sum3));
		 $('#finalPayAvgId').text($comPut(isNaN(sum3/checkYes)?0:(sum3/checkYes).toFixed(0)));
		 
		 $('#avgroi').text(isNaN(sum4/checkYes)?0:(sum4/checkYes).toFixed(2));    
		
		 $('#int_amount_total').text($comPut(sum5));
		 $('#intAmntAvgId').text($comPut(isNaN(sum5/checkYes)?0:(sum5/checkYes).toFixed(0)));
		 
		 $('#avgpf').text(isNaN(sum6/checkYes)?0:(sum6/checkYes).toFixed(2));
		
		 $('#pfamounttotal').text($comPut(sum7));
		 $('#pfAmntAvgId').text($comPut(isNaN(sum7/checkYes)?0:(sum7/checkYes).toFixed(0)));
		 
		 $('.cntAppMisCls').text(count);
		 
/*	*/
		 
		 requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(replyAccess) {
				$(replyAccess.accessList).each(function(k,v){
				if( v.ACCOUNT_HISTORIC_TAB == "READ ONLY" ||  v.ACCOUNT_HISTORIC_TAB == "READONLY" || v.ACCOUNT_HISTORIC_TAB == "READ" ){
					$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', true);
				}else if( v.ACCOUNT_HISTORIC_TAB == "WRITE" ||  v.ACCOUNT_HISTORIC_TAB == "VIEW ALL"){
					$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
				}else{
					$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
				}  
				});
				var slctCnt = 0;
				$(replyForm).each(function(k,v){++slctCnt;
				$('#includeCstMngId-'+slctCnt).val((v.include == undefined?"YES":v.include));
				if(v.misFlag == "YES"){
					$('#includeCstMngId-'+slctCnt).attr('disabled',true);
					$('#subventCstMngId-'+slctCnt).attr('disabled',true);
				}else{
					$('#includeCstMngId-'+slctCnt).attr('disabled',false);
					$('#subventCstMngId-'+slctCnt).attr('disabled',false);
				}
			});
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
				      }
				    }
				    arrSumAmount.push(sumAmnt);
				  }
				  $('#pieChartRowId').show();
				  $_pieChart(arrSumAmount,finalCityArr);
			});
	}
		
		if($('#monthAdmin').val()=='' && $('#searchBoxCstMntgId').val() == ""){
			DSACODE = null;
			$('.dsaMonthDis').show();
			$('.dsaNameDis').show();
			$('.dsaCodeDis').show();
		}
		else if($('#monthAdmin').val()=='' && $('#searchBoxCstMntgId').val() != ""){
			DSACODE = DSACODE;
			$('.dsaMonthDis').show();
			$('.dsaNameDis').hide();
			$('.dsaCodeDis').hide();
		}
		else if($('#monthAdmin').val()!='' && $('#searchBoxCstMntgId').val() == ""){
			DSACODE = null;
			$('.dsaMonthDis').hide();
			$('.dsaNameDis').show();
			$('.dsaCodeDis').show();
		}else{
			DSACODE = DSACODE;
			$('.dsaMonthDis').hide();
			$('.dsaNameDis').hide();
			$('.dsaCodeDis').hide();
		}
		
		
		if($('#yearAdmin').val()=='' && $('#searchBoxCstMntgId').val() == ""){
			DSACODE = null;
			$('.dsaYearDis').show();
			$('.dsaNameDis').show();
			$('.dsaCodeDis').show();
		}
		else if($('#yearAdmin').val()=='' && $('#searchBoxCstMntgId').val() != ""){
			DSACODE = DSACODE;
			$('.dsaYearDis').show();
			$('.dsaNameDis').hide();
			$('.dsaCodeDis').hide();
		}
		else if($('#yearAdmin').val()!='' && $('#searchBoxCstMntgId').val() == ""){
			DSACODE = null;
			$('.dsaYearDis').hide();
			$('.dsaNameDis').show();
			$('.dsaCodeDis').show();
		}else{
			DSACODE = DSACODE;
			$('.dsaYearDis').hide();
			$('.dsaNameDis').hide();
			$('.dsaCodeDis').hide();
		}
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
    for (i = 4; i < (rows.length -1); i++) {
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