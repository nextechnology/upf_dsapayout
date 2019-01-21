var API_COST_POST = '/upf-system-dsapayout/dsapayout/dsa/addaccountadminlist',
 API_COSTFORM_POST = '/upf-system-dsapayout/dsapayout/dsa/getadminaccount'
,API_STATE_GET = '/upf-system-dsapayout/dsapayout/dsa/getliststate'
,API_CITY_GET = '/upf-system-dsapayout/dsapayout/dsa/getlistcity?state='
,API_DSA_LIST = '/upf-system-dsapayout/dsapayout/dsa/dsaList'
,API_DSA_EMAIL = '/upf-system-dsapayout/dsapayout/dsa/sendemaildsaOnPayDone?emailid='
,API_DSA1_EMAIL = '/upf-system-dsapayout/dsapayout/dsa/sendemaildsaOnDisagree?emailid='
,API_INVOICE_DEL = '/upf-system-dsapayout/dsapayout/dsa/deleteinvoice'
,glblCnt = 0
,finalFormData = []
,accPymtDates = []
;
var DSACODE = "";
var EMIALID = "";
var myBarChart = null;
$(function(){
	var finalpayoutamount  = [];
	var location = [];

	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data
	});
	
	
	$(document).on('click', '.linkCls', function(e){
		var getId = $(this).attr('id'); 
	    e.preventDefault(); 
	    var url = $("#"+getId).attr('href'); 
	    window.open(url, '_blank');
	});
	
	
	/*if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
		$('#proTypAccId').html('<option selected value="UBL">BL</option>');
		$('#proTypAccId').attr('disabled',true);
	}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
		$('#proTypAccId').html('<option selected value="SBL">SBL</option>');
		$('#proTypAccId').attr('disabled',true);
	}*/
    $(document).on('click','#doneMsgOkId',function(){
    	window.location.reload();
    });

	$(document).on('keypress','#searchBoxCstMntgId',function(){
		if($('#searchBoxCstMntgId').val().replace(/\ /g,"").length == 0 || $('#searchBoxCstMntgId').val().includes("DSA Code") === false){
			$('#finalSbmtId').attr('disabled',true);
		}else if($('#searchBoxCstMntgId').val().includes("DSA Code")){
			$('#finalSbmtId').attr('disabled',false);
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
	                	EMIALID = ui.item.label2;
		 			}
				},minLength: 3
			});
	});
	
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
		 netPyRtTtl = 0,
		 fnlPyAmtTtl = 0,
		 rtOfIntTtl = 0,
		 intAmntTtl = 0,
		 pfTtl = 0,
		 pfAmtTtl = 0,
		 invTtl = 0;
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
			 pfAmtTtl += isNAN('pfAmntCstMngId-'+i,'t');
			 invTtl += isNAN('invAmountId-'+i,'t');
			 $('#sanctioned_amount_total').text(sancTtl);
			 $('#avgnetpayrate').text(netPyRtTtl);
			 $('#finalpayoutamount_total').text(fnlPyAmtTtl);
			 $('#avgroi').text(rtOfIntTtl);
			 $('#int_amount_total').text(intAmntTtl);
			 $('#avgpf').text(pfTtl);
			 $('#pfamounttotal').text(pfAmtTtl);
//			 $('#invTotal').text(invTtl)
			 invTotalshw()
		}
	});
	
	$(document).on('change','.slctIncCls',function(){
		var rowId = $(this).attr('id').split('-')[1];
		var value = $(this).val();
		if(value == "NO"){
			 $('#sanctioned_amount_total').text($comPut((isNAN('sanctioned_amount_total','t') - isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgnetpayrate').text((isNAN('avgnetpayrate','t') - isNAN('netPayRteCstMngId-'+rowId,'t')).toFixed(2));
			 $('#finalpayoutamount_total').text($comPut((isNAN('finalpayoutamount_total','t') - isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(2)));
			 $('#avgroi').text((isNAN('avgroi','t') - isNAN('rteOfIntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#int_amount_total').text($comPut((isNAN('int_amount_total','t') - isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgpf').text((isNAN('avgpf','t') - isNAN('pfCstMngId-'+rowId,'t')).toFixed(2));
			 $('#pfamounttotal').text($comPut((isNAN('pfamounttotal','t') - isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(0)));
//			 $('#invTotal').text($comPut((isNAN('invTotal','t') - isNAN('invAmountId-'+rowId,'t')).toFixed(0)));
		}else if(value == "YES"){
			 $('#sanctioned_amount_total').text($comPut((isNAN('sanctioned_amount_total','t') + isNAN('sancAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgnetpayrate').text((isNAN('avgnetpayrate','t') + isNAN('netPayRteCstMngId-'+rowId,'t')).toFixed(2));
			 $('#finalpayoutamount_total').text($comPut((isNAN('finalpayoutamount_total','t') + isNAN('fnlPayAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgroi').text((isNAN('avgroi','t') + isNAN('rteOfIntCstMngId-'+rowId,'t')).toFixed(2));
			 $('#int_amount_total').text($comPut((isNAN('int_amount_total','t') + isNAN('intAmntCstMngId-'+rowId,'t')).toFixed(0)));
			 $('#avgpf').text((isNAN('avgpf','t') + isNAN('pfCstMngId-'+rowId,'t')).toFixed(2));
			 $('#pfamounttotal').text($comPut((isNAN('pfamounttotal','t') + isNAN('pfAmntCstMngId-'+rowId,'t')).toFixed(0)));
//			 $('#invTotal').text($comPut((isNAN('invTotal','t') + isNAN('invAmountId-'+rowId,'t')).toFixed(0)));
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
});
  
function $_cstMngSbmt(event){
	
}
function $_actualSbmt(event){
	
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
				  "productname" : $('#productnameId-'+i).text(),
				  "applied_loan_amount" : isNaN(parseFloat($comRem($('#appliedloanamountId-'+i).text())))?0:(parseFloat($comRem($('#appliedloanamountId-'+i).text()))),
				  "state" : $('#state-'+i).text(),
				  "location" : $('#lctnCstMngId-'+i).text(),
				  "month" : $('#mnthCstMngId-'+i).text(),
				  "dsacode" : $('#dsaCodeid-'+i).text(),
				  "companyname" : $('#cmpNmCstMngId-'+i).text(),
				  "salesmanager" : $('#slsMngrCstMngId-'+i).text(),
				  "dsa" : $('#dsaCstMngId-'+i).text(),
				  "status" : $('#stsCstMngId-'+i).text(),
				  "sanctionedamount" : parseFloat($comRem($('#sancAmntCstMngId-'+i).text())),
				  "payrate" : parseFloat($('#defPyRtCstMngId-'+i).text()),
				  "subvention" : parseFloat($('#subventCstMngId-'+i).text()),
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
				  "paymentFlag":$("#paymentdoneId-"+i).is(":checked")?"YES":"NO",
				  "misFlag" : $('#includeCstMngId-'+i).val(),
				  "frequency" : $('#frequencyId-'+i).text(),
				  "gatekeeperid" : $('#gatekeeperId-'+i).text(), 
				  "year":$('#yearAdmin-'+i).text(),
				  "constatus" : $('#cnfrmStatus-'+i).val(),
				  "acc_constatus" : $('#cnfrmStatus-'+i).val(),
				  "remark" : $('#remarks-'+i).val(),
				  "paymentdate" : $('#pymtDateId-'+i).val()==""?null:$('#pymtDateId-'+i).val(),
				  "acc_remark" : $('#remarks-'+i).val(),
				//  "invoiceamount" : isNaN(parseInt($comRem($('#invAmountId-'+i).text())))?0:(parseInt($comRem($('#invAmountId-'+i).text()))),
				  "pfamounttotal" : parseFloat($comRem($('#pfamounttotal').text()))
				}
		formdata.push(arr);
	}
	
	for(i=0;i<formdata.length;i++){
		   	if(formdata[i].include == "YES"){
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
	
	requestData(API_COST_POST,"POST",JSON.stringify(formdata)).done(function(reply){
		var formDataInvoice = {
				  "year" : $('#yearAdmin').val(),
				  "month" : $("#monthAdmin :selected").text(),
				  "dsacode" : DSACODE,
				  "productname" : $('#proTypAccId').val(),
				  "quarter":"none"
				}
		requestData(API_DSA_EMAIL+EMIALID,"POST",JSON.stringify(formDataInvoice)).done(function(replyEmail) {
			requestData(API_DSA1_EMAIL+EMIALID+'&month='+$("#monthAdmin :selected").text()+'&year='+$('#yearAdmin').val(),"POST",JSON.stringify(formdata)).done(function(replyEmail) {
				var arrDel = [];
				var formData = {}
				for(i=1;i<=$('#CstMtngTbBdyId tr').length;i++) {
					if($('#cnfrmStatus-'+i).val() == "DISAGREE") {
						formData = {
								"invoiceid" :  parseInt($('#invoiceid-'+(i)).text())
						}
					}
					if(formData !== undefined){
						arrDel.push(formData);
					}
				}
				arrDel = removeDuplicates(arrDel, 'invoiceid');
				requestData(API_INVOICE_DEL,"POST",JSON.stringify(arrDel)).done(function(replyDel) {
					if(reply.reply == "success"){
						$('#diagMsgDivId').show();
						$('#sucModalWindId').click();
					}
				}).fail(function(e){
					$('#finalSbmtId').attr('disabled',false);
				});
			}).fail(function(e){
				$('#finalSbmtId').attr('disabled',false);
			});
		}).fail(function(e){
			$('#finalSbmtId').attr('disabled',false);
		});
	}).fail(function(e){
		$('#finalSbmtId').attr('disabled',false);
	});
}
function isNAN(a,b){
	if(b == "t"){
		return isNaN(parseFloat($comRem($('#'+a).text())))?0:(parseFloat($comRem($('#'+a).text())));
	}else{
		return isNaN(parseFloat($comRem($('#'+a).val())))?0:(parseFloat($comRem($('#'+a).val())));
	}
}
function $_cnfrmStChck(_this) {
	var value = _this.value;  
	var rowNo = _this.id.split('-')[1]; 
	var state = $('#state-'+rowNo).text();
	
	$('.'+remSpc(state)+'DrpCLs ').val(value);
	
	if(value == "AGREE") {
		$('.'+remSpc(state)+'RemCLs').attr('required',false);
	}else if(value == "DISAGREE") {
		$('.'+remSpc(state)+'RemCLs').attr('required',true);
	}
}
function $_searchSbmt(event){
	event.preventDefault();

	$('#CstMtngFrmId')[0].reset();
	$('#CstMtngFrmId').show();
	$('#pieChartRowId').hide();      
	$('nav').css({"width":"2900px"});
	var tblData = "";
	var city = [];
	var data = [];
	var rowCnt = 0;
	var dataGet = 
			{
				  "dsacode" : DSACODE==""?null:DSACODE,
				  "year":$('#yearAdmin').val()==""?null:$('#yearAdmin').val(),
				  "month":$('#monthAdmin').val()==""?null:$('#monthAdmin').val(),
				  "productname":($('#proTypAccId').val())
			};
	requestData(API_COSTFORM_POST,"POST",JSON.stringify(dataGet)).done(function(replyForm){
		console.log('AccountGet-',replyForm);
		if($.isEmptyObject(replyForm)){
			tblData = 
			'<tr><td colspan="21" style="text-align:center;">NO DATA FOUND</td></tr>';
			   $('#CstMtngTbBdyId').html(tblData);
			   $('#sanctioned_amount_total').text(0);
	           $('#finalpayoutamount_total').text(0);
	           $('#int_amount_total').text(0);
	           $('#pfamounttotal').text(0);
	           $('#invTotal').text(0)
	           $('#avgpf').text(0);   
	           $('#avgnetpayrate').text(0); 
	           $('#avgroi').text(0);
	           $('#sancamnavgId').text(0);
	           $('#defPyRtAvgId').text(0);
	           $('#subAvgId').text(0);
	           $('#finalPayAvgId').text(0);
	           $('#intAmntAvgId').text(0);
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
           ,sum10 = 0
           ,count= 0
           ,checkYes = 0
           ;
		$(replyForm).each(function(k,v){
			if(v.misFlag == "YES" && v.pdfpath !== undefined){
				++rowCnt;
				tblData += '<tr align="center">'+
				'<td id="dsadetailsid-'+rowCnt+'" class="a-dis">'+v.dsadetailsid+'</td>'+
				'<td id="productnameId-'+rowCnt+'" class="a-dis">'+v.productname+'</td>'+
				'<td id="appliedloanamountId-'+rowCnt+'" class="a-dis">'+$comPut(v.applied_loan_amount)+'</td>'+
				'<td id="srNoCstMng-'+rowCnt+'">'+rowCnt+'</td>'+
				'<td id="state-'+rowCnt+'">'+v.state+'</td>'+
				'<td id="lctnCstMngId-'+rowCnt+'">'+v.location+'</td>'+
				'<td id="yearAdmin-'+rowCnt+'" class="dsaYearDis">'+v.year+'</td>'+
				'<td id="mnthCstMngId-'+rowCnt+'" class="dsaMonthDis">'+v.month+'</td>'+
				'<td id="cmpNmCstMngId-'+rowCnt+'">'+v.companyname+'</td>'+
				'<td id="slsMngrCstMngId-'+rowCnt+'">'+(v.salesmanger===undefined ?"":v.salesmanger)+'</td>'+
				'<td id="dsaCodeid-'+rowCnt+'" class="dsaCodeDis">'+v.dsacode+'</td>'+
				'<td id="dsaCstMngId-'+rowCnt+'" class="dsaNameDis">'+(v.dsa===undefined ?"":v.dsa)+'</td>'+
				//'<td id="stsCstMngId-'+rowCnt+'">'+v.status+'</td>'+  
				'<td id="sancAmntCstMngId-'+rowCnt+'">'+$comPut(v.sanctionloanamount)+'</td>'+
				'<td id="defPyRtCstMngId-'+rowCnt+'">'+v.definedpayrate+'</td>'+
				'<td id="subventCstMngId-'+rowCnt+'">'+v.subinvention+'</td>'+
				'<td id="netPayRteCstMngId-'+rowCnt+'">'+(v.netpayrate).toFixed(2)+'</td>'+
				'<td>'+
				'<select id="includeCstMngId-'+rowCnt+'" class="form-control slctIncCls" disabled>'+
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
				'<td id="selectDrpTdId-'+rowCnt+'">'+
				'<select id="cnfrmStatus-'+rowCnt+'" class="form-control slctCnfrmCls '+remSpc(v.state)+'DrpCLs a-dis" required onchange="$_cnfrmStChck(this);">'+
				'<option value="">Status</option><option>AGREE</option><option>DISAGREE</option></select>'+
				'</td>'+
				'<td id="invAmountId-'+rowCnt+'" class="invCls a-dis"></td>'+
				'<td id="linkAppId-'+rowCnt+'"></td>'+
				`<td class="a-dis" id="pymtDateId-${rowCnt}">${v.paymentdate==null?'':v.paymentdate}</td>`+
				'<td id="paymntTdId"><label><input type="checkbox" id="paymentdoneId-'+rowCnt+'" class="'+remSpc(v.state)+'ChckCLs a-dis" onclick="$_checkboxAll(this);"></label></td>'+
				'<td id="remarkTdId"><textarea rows="1" id="remarks-'+rowCnt+'" class="form-control remarkCls '+remSpc(v.state)+'RemCLs a-dis" onkeyup="$_remarksEdit(this);"></textarea></td>'+
				'<td id="gatekeeperId-'+rowCnt+'" class="a-dis">'+v.gatekeeperid+'</td>'+
				'</tr>';
				if(v.paymentFlag == "NO" && v.include == "YES" && v.pdfpath !== undefined){++checkYes;
					sum1 = sum1 + v.sanctionloanamount;
	                sum2 = sum2 + parseFloat(v.netpayrate);
	                sum3 = sum3 + v.finalpayoutamount;
	                sum4 = sum4 + parseFloat(v.roi);
	                sum5 = sum5 + v.intamt;
	                sum6 = sum6 + parseFloat(v.pf);
	                sum7 = sum7 + v.processingamount;
	                sum8 = sum8 + parseFloat(v.definedpayrate);
	                sum9 = sum9 + parseFloat(v.subinvention);
	                sum10 = sum10 + parseFloat(v.invoiceamount);
	                count = count + 1;
				}
				 glblCnt = rowCnt;
			}else if(v.misFlag === undefined){
				tblData = 
				'<tr><td colspan="19" style="text-align:center;">NO DATA FOUND</td></tr>';
				   $('#sanctioned_amount_total').text(0);
		           $('#finalpayoutamount_total').text(0);
		           $('#int_amount_total').text(0);
		           $('#pfamounttotal').text(0);
		           $('#invTotal').text(0);
		           $('#avgpf').text(0);   
		           $('#avgnetpayrate').text(0); 
		           $('#avgroi').text(0);
		           $('#sancamnavgId').text(0);
		           $('#defPyRtAvgId').text(0);
		           $('#subAvgId').text(0);
		           $('#finalPayAvgId').text(0);
		           $('#intAmntAvgId').text(0);
		           $('#pfAmntAvgId').text(0);
		           $('.cntAppMisCls').text(0);
				 $('#CstMtngTbBdyId').html(tblData);
			}
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
//		 $('#invTotal').text($comPut(sum10));

		 $('.cntAppMisCls').text(count);
		 
		 requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
				$(reply.accessList).each(function(k,v){
				if( v.ACCOUNT_APPLICATION_MIS_TAB == "READ ONLY" ||  v.ACCOUNT_APPLICATION_MIS_TAB == "READONLY" || v.ACCOUNT_APPLICATION_MIS_TAB == "READ" ){
					$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', true);
				}else if( v.ACCOUNT_APPLICATION_MIS_TAB == "WRITE" ||  v.ACCOUNT_APPLICATION_MIS_TAB == "VIEW ALL"){
					$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
				}else{
					$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
				}  
				});
				
				
				var slctCnt = 0;
				var checkDis = 0;
				$(replyForm).each(function(k,v){
					if(v.misFlag == "YES" && v.pdfpath !== undefined){++slctCnt;
						$('#includeCstMngId-'+slctCnt).val((v.include == undefined?"YES":v.include));
						$('#includeCstMngId-'+slctCnt).attr('disabled',true); 
						$('#cnfrmStatus-'+slctCnt).val(v.acc_constatus);
//						$('#remarks-'+slctCnt).val(v.remark);
						$('#remarks-'+slctCnt).val(v.acc_remark);
						if(v.paymentFlag == "YES"){++checkDis;
							$('#paymentdoneId-'+slctCnt).prop('checked',true);
							$('#paymentdoneId-'+slctCnt).attr('disabled',true);
						}else{
							$('#paymentdoneId-'+slctCnt).prop('checked',false);
							$('#paymentdoneId-'+slctCnt).attr('disabled',false);
						}
						if(v.acc_constatus == "AGREE"){
							$('#cnfrmStatus-'+slctCnt).attr('disabled',true);
						}else if(v.acc_constatus == "DISAGREE"){
							$('#cnfrmStatus-'+slctCnt).attr('disabled',false);
						}
				}
				});
				if(checkDis == glblCnt){
						$('#finalSbmtId').attr('disabled',true);
				}else{
						$('#finalSbmtId').attr('disabled',false);
				}
				
				if(DSACODE === null){
					$('#finalSbmtId').attr('disabled',true);
				}else if(DSACODE !== null){
					$('#finalSbmtId').attr('disabled',false);
				}
				
				if($('#searchBoxCstMntgId').val() == ""){
					DSACODE = null;
					$('.dsaHideCls').show();
					$('nav').css({"width":"2750px"});
					$('#costMainTblId').css({"width":"2900px"});
				}else{
					DSACODE = DSACODE;
					$('.dsaHideCls').hide();
					$('nav').css({"width":"2500px"});
					$('#costMainTblId').css({"width":"2800px"});
					if(glblCnt == checkDis){
					//	$('#btnCstMtgSbtId').attr('disabled',false);
						$('#finalSbmtId').attr('disabled',true);
					}else{
					//	$('#btnCstMtgSbtId').attr('disabled',false);
						$('#finalSbmtId').attr('disabled',false);
					}
				}
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
		var m=0;
		var stateHavngPdf = [""];
		$(replyForm).each(function(k,v){
			if(v.include === "YES" && v.pdfpath !== undefined) {++m
				stateHavngPdf.push({"state" : v.state});
				$('#cnfrmStatus-'+(m)).val(v.status);
				if(v.pdfpath === undefined) {
					$('#linkAppId-'+(m)).html('');
				}else{
				 	var filepath = (v.pdfpath).replace("/var/www/html/","");
				 	var finalPath = 'http://'+window.location.hostname+'/'+filepath;
					$('#linkAppId-'+(m)).html('<a href="'+finalPath+'" class="linkCls a-dis" id="dwnldId-'+m+'" target="_blank">'+v.state+' Invoice</a>');
					$('#invAmountId-'+(m)).html('<span id="invoiceid-'+m+'">'+v.invoiceid+'</span>'+$comPut(v.invoiceamount));
					$('#invoiceid-'+m).hide();
				}
			}
		});
		
		stateHavngPdf = removeDuplicates(stateHavngPdf, 'state');
	
		var stateIdArr = [];
		for(i=1;i<stateHavngPdf.length;i++) {
			for(j=1;j<=$('#CstMtngTbBdyId tr').length;j++) {
				if(stateHavngPdf[i]['state'].toUpperCase() === $('#state-'+j).text().toUpperCase()) {
					stateIdArr.push({
						"state" : stateHavngPdf[i]['state'],
						"rowId" : [] 
					});
				}
			}
		}
		
		stateIdArr = removeDuplicates(stateIdArr, 'state');
	//	console.log("stateIdArrAf",stateIdArr);
		
		for(i=0;i<stateIdArr.length;i++) {
			for(j=1;j<=$('#CstMtngTbBdyId tr').length;j++) {
				if(stateIdArr[i]['state'].toUpperCase() === $('#state-'+j).text().toUpperCase()) {
					stateIdArr[i]['rowId'].push(j);
				}
			}
		}
		
	//	console.log("FinalstateIdArr",stateIdArr);
		
		for(i=0;i<stateIdArr.length;i++) {
			for(j=1;j<=$('#CstMtngTbBdyId tr').length;j++) {
				if(stateIdArr[i]['state'].toUpperCase() === $('#state-'+j).text().toUpperCase()) {
					var add = stateIdArr[i]['rowId'][0];
					$('#dwnldId-'+(add)).show();
					$('#cnfrmStatus-'+(add)).show();
					$('#paymentdoneId-'+(add)).show();
					$('#remarks-'+(add)).show();
					$('#invAmountId-'+(add)).show();
					
		//			$('#dwnldId-'+(add)).closest('td').attr("rowspan",stateIdArr[i]['rowId'].length);
		//			$('#cnfrmStatus-'+(add)).closest('td').attr("rowspan",stateIdArr[i]['rowId'].length);
		//			$('#paymentdoneId-'+(add)).closest('td').attr("rowspan",stateIdArr[i]['rowId'].length);
		//			$('#remarks-'+(add)).closest('td').attr("rowspan",stateIdArr[i]['rowId'].length);
					
				}
			}
		}
		 invTotalshw();
		
		/*for(j=1;j<=$('#CstMtngTbBdyId tr').length;j++) {
			for(i=0;i<stateIdArr.length;i++) {
				if(stateIdArr[i]['rowid'] === j) {
					
				}else{
					$('#dwnldId-'+(j)).hide();
					$('#cnfrmStatus-'+(j)).hide();
					$('#paymentdoneId-'+(j)).hide();
					$('#remarks-'+(j)).hide();
				}
			}
		}*/
		
	});  
}  
function $_checkboxAll(_this) {

	var rowNo = _this.id.split('-')[1]; 
	var state = $('#state-'+rowNo).text();
	var value = $("#paymentdoneId-"+rowNo).is(":checked");
	
	$('.'+remSpc(state)+'ChckCLs ').prop('checked',value);
}

function $_remarksEdit(_this) {
	
	var value = _this.value;  
	var rowNo = _this.id.split('-')[1]; 
	var state = $('#state-'+rowNo).text();
	
	$('.'+remSpc(state)+'RemCLs').val(value);
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
	
	
	function invTotalshw(){
		var InvAmtTotal = 0;
		$('.invCls:visible').each(function(k,v){
			InvAmtTotal += parseInt($comRem($(v).html().split('</span>')[1]))
			$('#invTotal').text($comPut(InvAmtTotal))
		})
	}