var appStat = '<table class="table table-bordered" id="dsaPayoutTblId" style="width:1500px;">'+
		'<thead>'+
	'<tr style="align:center;background-color:#ffb375;" class="a-dis">'+
	'<td>COUNT</td>'+
	'<td></td>'+
	'<td class="dsaMonthDis"></td>'+
	
	'<td class="dsaHideCls"></td>'+
	'<td class="dsaHideCls"></td>'+
	'<td></td>'+
	'<td></td>'+
	
	'<td class="dsaPyCntCls"></td>'+
	'<td class="dsaPyCntCls"></td>'+
	'<td class="dsaPyCntCls"></td>'+
	'</tr>'+
	'<tr style="align:center;background-color:#ffb375;" class="a-dis">'+
	'<td>SUM</td>'+
	'<td></td>'+
	'<td class="dsaMonthDis"></td>'+
	
	'<td class="dsaHideCls"></td>'+
	'<td class="dsaHideCls"></td>'+
	'<td></td>'+
	'<td></td>'+
	
	'<td id="netPyRtSumId"></td>'+
	'<td id="sancSumId"></td>'+
	'<td id="finalPySumId"></td>'+
	'</tr>'+
	'<tr style="align:center;background-color:#ffb375;" class="a-dis">'+
	'<td>AVERAGE</td>'+
	'<td></td>'+
	'<td class="dsaMonthDis"></td>'+
	
	'<td class="dsaHideCls"></td>'+

	'<td class="dsaHideCls"></td>'+
	'<td></td>'+
	'<td></td>'+
	
	'<td id="netPyRtAvgId"></td>'+
	'<td id="sancAvgId"></td>'+
	'<td id="finalPyAvgId"></td>'+
	'</tr>'+
	'<tr style="align:center;"class="leftbgcolor">'+
		'<th onclick="sortTable(0);">SR NO<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(1);" style="min-width: 85px">LOCATION<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		//'<th onclick="sortTable(2);">YEAR<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(2);" class="dsaMonthDis">MONTH<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(3);" class="dsaHideCls">DSA CODE<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(4);" class="dsaHideCls">DSA NAME<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(5);">COMPANY NAME<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(6);">SALES MANAGER<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		//'<th onclick="sortTable(8);">STATUS<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(7);">NET PAYRATE<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th onclick="sortTable(8);">SANCTION LOAN AMOUNT<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
		'<th id="fpaTdId" class="a-dis" onclick="sortTable(9);">FINAL PAYOUT AMOUNT<span class="glyphicon glyphicon-sort pull-right"></span></th>'+
	'</tr>'+
'</thead>'+
'<tbody id="appStatBdyId"></tbody>'
'</table>';
var 
	API_PAYOUT_POST  = '/upf-system-dsapayout/dsapayout/dsa/getdsabasedlist'
	,API_QUARTERLY_POST = '/upf-system-dsapayout/dsapayout/dsa/getdsalistquarterly'
	,API_DSA_LIST = '/upf-system-dsapayout/dsapayout/dsa/dsaList'
	;
var myBarChart = null
,myPieChart = null
;
var DSACODE = "" ;

$(function(){
	$_payouts();
	
	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data;
	});
	
	/*if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
		$('#dsaProTypId').html('<option selected value="UBL">BL</option>');
		$('#dsaProTypId').attr('disabled',true);
	}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
		$('#dsaProTypId').html('<option selected value="SBL">SBL</option>');
		$('#dsaProTypId').attr('disabled',true);
	}*/
	
	$(document).on('keypress keyup keydown','#dsaCodePayot',function(){
		if($('#dsaCodePayot').val().replace(/\ /g,"").length == 0 || $('#dsaCodePayot').val().includes("DSA Code") === false){
			DSACODE = "";
		}
		$('#dsaCodePayot').autocomplete({
			source : function (request,response) {
				if($('#dsaCodePayot').val() != " "){
					var _data = ($.map(dsaList,function (ke,val) {
						if(ke['state'].toUpperCase().includes(request.term.toUpperCase()) || ke['city'].toUpperCase().includes(request.term.toUpperCase()) ||ke['companyName'].toUpperCase().includes(request.term.toUpperCase()) || ke['dsacode'].toUpperCase().includes(request.term.toUpperCase()) || ke['pan'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.dsacode,
								value : ['Company Name - ' + ke.companyName + ', DSA Code - ' +ke.dsacode+ ', Company PAN - '+ke.pan+ ', State - ' +ke.state+ ', City - ' + ke.city]
							};  	
						}
						}));
				}	if($.ui.autocomplete.filter(_data,request.term).length != 0){
							response($.ui.autocomplete.filter(_data,request.term));
						}else{
							
							response([{value: 'No matches found'}]);
						}
			},
			select : function (event,ui) {
				if (ui.item.value == "No matches found") {
					$('#dsaCodePayot').val("");
                    return false;
                }else{
                	DSACODE = ui.item.label1;
                	$('.dsaHideCls').hide();
	 			}
			}
		});
	});
	
	
	$(document).on('click','#searchBtnId',function(){
		if($('input[name=qtrmntrd]:checked').val() == "Month"){
			$('#finalShowQrtId').hide();
			if($('input[name=qtrmntrd]:checked').val() == undefined || $('#byYearMnth').val() == "" || $('#byMnthMnth').val() == ""){
				
			}else{
				$_payMnth();
			}
		}else if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
			$('#fnlShwFpyAmntId').hide();
			if($('input[name=qtrmntrd]:checked').val() == undefined || $('#byYearQrtr').val() == "" || $('#byQrtrQtr').val() == ""){
				
			}else{
				$_payMnth();
			}
		}
/* dsaCodePayot*/

		if($('#dsaCodePayot').val() == ""){
				DSACODE = null;
				$('.dsaHideCls').show();
			}else{
				DSACODE = DSACODE;
				$('.dsaHideCls').hide();
			}
		
	});
	
	var dateYrOptn = '<option value="">Select Year</option>';
		for(i=(new Date()).getFullYear();i>=2000;i--){
			dateYrOptn += '<option>'+i+'</option>';
		}
		$('#byYearMnth').html(dateYrOptn);
		$('#byYearQrtr').html(dateYrOptn);
		$(document).on('change','.qtrmntCls',function(){
			if($('input[name=qtrmntrd]:checked').val() == "Month"){
					$('#qrtrDivId').hide();
					$('#mnthDivId').show();
					
					/*$('#byYearMnth').val("");
					$('#byMnthMnth').val("");*/
					
			}else if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
					$('#qrtrDivId').show();
					$('#mnthDivId').hide();
					
					/*$('#byYearQrtr').val("");
					$('#byQrtrQtr').val("");*/
			}
		});
		
		$(document).on('change','#dsaProTypId',function(){
			$('#pieChartDivId').hide();
			$('#statAppRwId').hide();
			if($('#dsaProTypId').val() == "SBL"){
				$('input[name=qtrmntrd]').prop('checked', true);
				$('#qrtrlyRadColId').hide();
				$('#finalShowQrtId').hide();
				$('#qrtrDivId').hide();
				$('#mnthDivId').show();
			}else if($('#dsaProTypId').val() == "UBL"){
//				$('#qrtrlyRadColId').show();
				$('#mnthDivId').show();
			}else{
				$('#mnthDivId').hide();
			}
		});
	$(document).on('change','.payoutCls',function(){
		$('#pieChartDivId').hide();
		$('#statAppRwId').hide();
		if($('input[name=qtrmntrd]:checked').val() == "Month"){
			$("input[name=qtrmntrd][value=Month]").prop("checked", true);
			$('#finalShowQrtId').hide();
			if($('input[name=qtrmntrd]:checked').val() == undefined || $('#byYearMnth').val() == "" || $('#byMnthMnth').val() == ""){
				
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
});


function $_payouts(){
	$('#welcmMsgId').hide();
	$('#gstRowId').hide();
	$('#payOutRowId').show();
	$('#statAppRwId').hide();
}
function $_payMnth(){
	$('#statAppRwId').show();
	$('#statAppId').html(appStat);
	$('#fpaTdId').show();
	$('nav').css({"width":"1650px"});
	var tblData = "";
	var rowNo = 0;
	if($('input[name=qtrmntrd]:checked').val() == "Month"){
		var jsonData = {
				  "dsacode" :  DSACODE==""?null:DSACODE,
				  "year":$('#byYearMnth').val(),
				  "month":$('#byMnthMnth').val(),
				  "productname" : $('#dsaProTypId').val()
				}
		requestData(API_PAYOUT_POST,"POST",JSON.stringify(jsonData)).done(function(reply){
			var netPayRate= 0.00;
			var sancLoanAmnt = 0;
			var finalPayOutAmntTtl = 0;
			if($.isEmptyObject(reply)){
				$('#pieChartDivId').hide();
				tblData += 
					'<tr><td colspan="12" style="text-align:center;">NO DATA FOUND</td></tr>';
				$('#fnlShwFpyAmntId').hide();
				$('#netPyRtAvgId').text(0);
				$('#sancAvgId').text(0);
				$('#finalPyAvgId').text(0);
			}else{
				$('#pieChartDivId').show();
				$(reply).each(function(k,v){++rowNo;
				tblData += 
					'<tr style="background-color:#fff;">'+
						'<td id="srNo-'+rowNo+'">'+rowNo+'</td>'+
						'<td id="location-'+rowNo+'">'+(v.location==undefined?'':v.location)+'</td>'+
			//			'<td id="year-'+rowNo+'">'+(v.year==undefined?'':v.year)+'</td>'+
						'<td id="month-'+rowNo+'" class="dsaMonthDis">'+(v.month==undefined?'':(v.month))+'</td>'+
						'<td id="dsaCode-'+rowNo+'" class="dsaHideCls">'+(v.dsacode==undefined?'':v.dsacode)+'</td>'+
						'<td id="dsaCode-'+rowNo+'" class="dsaHideCls">'+(v.dsaname==undefined?'':v.dsaname)+'</td>'+
						'<td id="compNme-'+rowNo+'">'+(v.companyname==undefined?'':v.companyname)+'</td>'+
						'<td id="slsMngr-'+rowNo+'">'+(v.salesmanger==undefined?'':v.salesmanger)+'</td>'+
			//			'<td id="sts-'+rowNo+'" style="background-color:#d6efff">'+(v.status==undefined?'':v.status)+'</td>'+
						'<td id="netPayRateId-'+rowNo+'">'+(v.netpayrate==undefined?'0':parseFloat(v.netpayrate).toFixed(2))+'</td>'+
						'<td id="sancLnAmnt-'+rowNo+'">'+(v.sanctionloanamount==undefined?'':$comPut(v.sanctionloanamount))+'</td>'+
						'<td id="finalpayoutamount-'+rowNo+'">'+(v.finalpayoutamount==undefined?'':$comPut(v.finalpayoutamount))+'</td>'+
						'</tr>';
				netPayRate = netPayRate + parseFloat(v.netpayrate);
				sancLoanAmnt = sancLoanAmnt + parseInt(v.sanctionloanamount);
				finalPayOutAmntTtl = finalPayOutAmntTtl + parseInt(v.finalpayoutamount);
				
			}); 
				if(DSACODE == ""){
					$('#fnlShwFpyAmntId').hide();
				}else{
					$('#fnlShwFpyAmntId').show();
				}
				
				$('#finlPyOtTtlAmnt').val($comPut(finalPayOutAmntTtl));
				$_totalPieChart(reply);
			}
			$('#appStatBdyId').html(tblData);
			$('.dsaMonthDis').hide();
			$('.dsaPyCntCls').text(rowNo);
			
			$('#netPyRtAvgId').text(isNaN(parseFloat(netPayRate/rowNo).toFixed(2))?0:parseFloat(netPayRate/rowNo).toFixed(2));
			$('#sancAvgId').text($comPut(isNaN(parseFloat(sancLoanAmnt/rowNo).toFixed(0))?0:parseFloat(sancLoanAmnt/rowNo).toFixed(0)));
			$('#finalPyAvgId').text($comPut(isNaN(parseFloat(finalPayOutAmntTtl/rowNo).toFixed(0))?0:parseFloat(finalPayOutAmntTtl/rowNo).toFixed(0)));
			
			$('#sancSumId').text($comPut(sancLoanAmnt));
			$('#finalPySumId').text($comPut(finalPayOutAmntTtl));
			
			if($('#dsaCodePayot').val() == ""){
				DSACODE = null;
				$('.dsaHideCls').show();
			}else{
				DSACODE = DSACODE;
				$('.dsaHideCls').hide();
			}
		});
	}else if($('input[name=qtrmntrd]:checked').val() == "Quarter"){
		var jsonData = {
				  "dsacode" :  DSACODE==""?null:DSACODE,
				  "year":$('#byYearQrtr').val(),
				  "month":$('#byQrtrQtr').val()
				}                  
		requestData(API_QUARTERLY_POST,"POST",JSON.stringify(jsonData)).done(function(reply){
			var sumSanc = 0;
			var qtrlySlab = 0;
			var qrtlyPayotTtl = 0;
			var netPayRate= 0.00;
			var finalPayOutAmntTtl = 0;
			if($.isEmptyObject(reply)){
				$('#pieChartDivId').hide();
				tblData += 
					'<tr><td colspan="12" style="text-align:center;">NO DATA FOUND</td></tr>';
				    $('#finalShowQrtId').hide();
				    $('#netPyRtAvgId').text(0);
					$('#sancAvgId').text(0);
					$('#finalPyAvgId').text(0);
			}else{
				$('#pieChartDivId').show();
				$(reply).each(function(k,v){++rowNo;
				tblData += 
					'<tr style="background-color:#fff;">'+
						'<td id="srNo-'+rowNo+'">'+rowNo+'</td>'+
						'<td id="location-'+rowNo+'">'+(v.location==undefined?'':v.location)+'</td>'+
				//		'<td id="year-'+rowNo+'">'+(v.year==undefined?'':v.year)+'</td>'+
						'<td id="month-'+rowNo+'" class="dsaMonthDis">'+(v.month==undefined?'':(v.month))+'</td>'+
						'<td id="dsaCode-'+rowNo+'" class="dsaHideCls">'+(v.dsacode==undefined?'':v.dsacode)+'</td>'+
						'<td id="dsaCode-'+rowNo+'" class="dsaHideCls">'+(v.dsaname==undefined?'':v.dsaname)+'</td>'+
						'<td id="compNme-'+rowNo+'">'+(v.companyname==undefined?'':v.companyname)+'</td>'+
						'<td id="slsMngr-'+rowNo+'">'+(v.salesmanger==undefined?'':v.salesmanger)+'</td>'+
				//		'<td id="sts-'+rowNo+'">'+(v.status==undefined?'':v.status)+'</td>'+
						'<td id="netPayRateId-'+rowNo+'">'+(v.netpayrate==undefined?'0':parseFloat(v.netpayrate).toFixed(2))+'</td>'+
						'<td id="sancLnAmnt-'+rowNo+'">'+(v.sanctionloanamount==undefined?'':$comPut(v.sanctionloanamount))+'</td>'+
						'<td id="finalpayoutamount-'+rowNo+'">'+(v.finalpayoutamount==undefined?'':$comPut(v.finalpayoutamount))+'</td>'+
						'</tr>';
				sumSanc = sumSanc + parseInt(v.sanctionloanamount);
				qtrlySlab = v.quarterlypayrate;
				qrtlyPayotTtl = v.quarterlytotalpayout;
				netPayRate = netPayRate + parseFloat(v.netpayrate);
				finalPayOutAmntTtl = finalPayOutAmntTtl + parseInt(v.finalpayoutamount);
			}); 
				if(DSACODE == ""){
					$('#finalShowQrtId').hide();
				}else{
					$('#finalShowQrtId').show();
				}
				$('#sancTtlAmnt').val($comPut(sumSanc));
				$('#qrtrlySlbId').val($comPut(qtrlySlab));
				$('#snctnAmntTtl').val($comPut(sumSanc));
				$('#qrtrlyTtlPayout').val($comPut(qrtlyPayotTtl.toFixed(0)));
				$_totalBarChart(reply);
				
				if(qtrlySlab == 0){
					$('.hideQrtrCls').hide();
				}else{
					$('.hideQrtrCls').show();
				}
				
			}
			$('#appStatBdyId').html(tblData);
			$('.dsaMonthDis').show();
			$('.dsaPyCntCls').text(rowNo);
			
			$('#netPyRtAvgId').text(isNaN(parseFloat(netPayRate/rowNo).toFixed(2))?0:parseFloat(netPayRate/rowNo).toFixed(2));
			$('#sancAvgId').text($comPut(isNaN(parseFloat(sumSanc/rowNo).toFixed(0))?0:parseFloat(sumSanc/rowNo).toFixed(0)));
			$('#finalPyAvgId').text($comPut(isNaN(parseFloat(finalPayOutAmntTtl/rowNo).toFixed(0))?0:parseFloat(finalPayOutAmntTtl/rowNo).toFixed(0)));

			$('#sancSumId').text($comPut(sumSanc));
			$('#finalPySumId').text($comPut(finalPayOutAmntTtl));
			if($('#dsaCodePayot').val() == ""){
				DSACODE = null;
				$('.dsaHideCls').show();
			}else{
				DSACODE = DSACODE;
				$('.dsaHideCls').hide();  
			}
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
	//  $_pieChart(arrSumAmount,finalCityArr);
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
			if((finalCityArr[i] == formdata[j].location) && (finalMonth[1] == formdata[j].month)){
				sum2 = sum1 + formdata[j].finalpayoutamount
			}
			if((finalCityArr[i] == formdata[j].location) && (finalMonth[2] == formdata[j].month)){
				sum3 = sum1 + formdata[j].finalpayoutamount
			}
		}     
		
		arr1.push(sum1);
		arr2.push(sum2);
		arr3.push(sum3);
	}      
	
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
	//$_barChrt(finalCityArr,finalMonth,arr1,arr2,arr3); 
}
function sortTable(n) {
	var table, rows, switching, i, x, y, a, b, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dsaPayoutTblId");
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