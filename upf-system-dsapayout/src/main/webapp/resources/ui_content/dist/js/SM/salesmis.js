var API_COST_POST = 'http://localhost:8080/upf-system-dsapayout/dsapayout/dsa/addadmindsa',
 API_COSTFORM_POST = 'http://localhost:8080/upf-system-dsapayout/dsapayout/dsa/getlistdsaadmin'
//API_COSTFORM_POST = '/upf-system/upf/dsa/getdsabasedlist'
,API_STATE_GET = '/upf-system/upf/dsa/getliststate'
,API_CITY_GET = '/upf-system/upf/dsa/getlistcity?state='
,API_INVOICE_GET= '/upf-system/upf/dsa/createinvoicepdf'
,API_DSA_LIST = '/upf-system-dsapayout/dsapayout/dsaList'
,API_BL_GET = '/upf-system-dsapayout/dsapayout/dsa/getBLInsentive?id=1'
,API_SBL_GET = '/upf-system/upf/dsa/getsblincentive'
,glblCnt = 0
,finalFormData = [];
var DSACODE = ""
,blGet  = {}
,sblGet ={}
;
var myBarChart = null;
$(function(){
	
	
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
	
	$(document).on('keypress keydown, keyup','#searchBoxCstMntgId',function(){
		$('#searchBoxCstMntgId').autocomplete({
			source : function (request,response) {
				if($('#searchBoxCstMntgId').val().replace(/\ /g,"").length != 0){
					var _data = ($.map(dsaList,function (ke,val) {
						if(ke['state'].toUpperCase().includes(request.term.toUpperCase()) || ke['city'].toUpperCase().includes(request.term.toUpperCase()) ||ke['companyName'].toUpperCase().includes(request.term.toUpperCase()) || ke['dsacode'].toUpperCase().includes(request.term.toUpperCase()) || ke['pan'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.dsacode,
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
	 			}
			}
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
	$('nav').css({"width":"2950px"});
	var tblData = "";
	var city = [];
	var data = [];
	var rowCnt = 0;
	if($('#searchBoxCstMntgId').val() == ""){
		DSACODE = null;
	}else{
		DSACODE = DSACODE;
	}
	var dataGet = 
			{
				  "dsa" : DSACODE==""?null:DSACODE,
				  "year":$('#yearAdmin').val(),
				  "month":$('#monthAdmin').val(),
				  "productcode":parseInt($('#proTypCostId').val())
			};
	requestData(API_COSTFORM_POST,"POST",JSON.stringify(dataGet)).done(function(replyForm){
		if($.isEmptyObject(replyForm)){
			tblData += 
				'<tr><td colspan="18" style="text-align:center;">NO DATA FOUND</td></tr>';
			   
			   $('#sanctioned_amount_total').text(0);
	           $('#finalpayoutamount_total').text(0);
	           $('#int_amount_total').text(0);
	           $('#pfamounttotal').text(0);
	         
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
			,count= 0
			,checkYes = 0;
		$(replyForm).each(function(k,v){
			if(v.dsacode !== undefined){
				++rowCnt;
				tblData += '<tr style="align:center;">'+
				'<td id="dsadetailsid-'+rowCnt+'" class="a-dis">'+v.dsadetailsid+'</td>'+
				'<td id="appliedloanamountId-'+rowCnt+'" class="a-dis">'+(v.applied_loan_amount===undefined ?"":v.applied_loan_amount)+'</td>'+
				'<td id="productnameid-'+rowCnt+'" class="a-dis">'+v.productname+'</td>'+
				
				'<td id="srNoCstMng-'+rowCnt+'">'+rowCnt+'</td>'+
				'<td id="lctnCstMngId-'+rowCnt+'">'+(v.location===undefined ?"":v.location)+'</td>'+
				'<td id="mnthCstMngId-'+rowCnt+'">'+(v.month===undefined ?"":v.month)+'</td>'+
				
				'<td id="cmpNmCstMngId-'+rowCnt+'">'+(v.companyname===undefined ?"":v.companyname)+'</td>'+
				'<td id="dsaCodeMngId-'+rowCnt+'">'+(v.dsacode===undefined ?"":v.dsacode)+'</td>'+
				'<td id="dsaCstMngId-'+rowCnt+'">'+(v.dsa===undefined ?"":v.dsa)+'</td>'+
				
				'<td id="stsCstMngId-'+rowCnt+'">'+(v.status===undefined ?"":v.status)+'</td>'+
				'<td id="sancAmntCstMngId-'+rowCnt+'">'+(v.sanctionloanamount===undefined ?"":$comPut(v.sanctionloanamount))+'</td>'+
				'<td id="netPayRteCstMngId-'+rowCnt+'">'+(v.netpayrate===undefined ?"":v.netpayrate)+'</td>'+
				
				'<td id="fnlPayAmntCstMngId-'+rowCnt+'">'+(v.finalpayoutamount===undefined ?"":$comPut(parseFloat(v.finalpayoutamount).toFixed(0)))+'</td>'+
				'<td id="rteOfIntCstMngId-'+rowCnt+'">'+(v.roi===undefined ?"":v.roi)+'</td>'+
				'<td id="pfCstMngId-'+rowCnt+'">'+(v.pf===undefined ?"":(v.pf).toFixed(2))+'</td>'+
				
				'<td id="frequencyId-'+rowCnt+'">'+(v.frequency===undefined ?"":v.frequency)+'</td>'+
				'<td id="losCstMngId-'+rowCnt+'">'+(v.losid===undefined ?"":v.losid)+'</td>'+
				'<td id="paymentdoneId-'+rowCnt+'">'+(v.paymentFlag=='YES'?'YES':'NO')+'</td>'+
				
				'<td id="gatekeeperId-'+rowCnt+'" class="a-dis">'+v.gatekeeperid+'</td>'+
				'</tr>';
				 glblCnt = rowCnt;
			}
		});
	}
		$('#CstMtngTbBdyId').html(tblData);
		requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(replyAccess) {
			$(replyAccess.accessList).each(function(k,v){
			if( v.SALES_APPLICATION_MIS_TAB == "READ ONLY" ||  v.SALES_APPLICATION_MIS_TAB == "READONLY" || v.SALES_APPLICATION_MIS_TAB == "READ" ){
				$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', true);
			}else if( v.SALES_APPLICATION_MIS_TAB == "WRITE" ||  v.SALES_APPLICATION_MIS_TAB == "VIEW ALL"){
				$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
			}else{
				$('#CstMtngFrmId input, #CstMtngFrmId select, #CstMtngFrmId textarea, #CstMtngFrmId button').prop('disabled', false);
			}  
			});
		});
		sumCntAvgCal(glblCnt);	
	});  
}
function sumCntAvgCal(ttlCnt){
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
	for(k=1;k<=ttlCnt;k++){
				sancTtlDef += isNAN('sancAmntCstMngId-'+k,'t');
                netPyRtTtlDef += isNAN('netPayRteCstMngId-'+k,'t');
                fnlPyAmtTtlDef += isNAN('fnlPayAmntCstMngId-'+k,'t');
                rtOfIntTtlDef += isNAN('rteOfIntCstMngId-'+k,'t');
                intAmntTtlDef += isNAN('intAmntCstMngId-'+k,'t');
                pfTtlDef += isNAN('pfCstMngId-'+k,'t');
                pfAmtTtlDef +=isNAN('pfAmntCstMngId-'+k,'t');
	   $('#sanctioned_amount_total').text($comPut(sancTtlDef));
       $('#avgnetpayrate').text(parseFloat(netPyRtTtlDef).toFixed(2));
       $('#finalpayoutamount_total').text($comPut(fnlPyAmtTtlDef));
       $('#avgroi').text(parseFloat(rtOfIntTtlDef).toFixed(2));
       $('#int_amount_total').text($comPut(intAmntTtlDef));
       $('#avgpf').text(pfTtlDef);   
       $('#pfamounttotal').text($comPut(pfAmtTtlDef));
       $('#avgnetpayrate').text(isNaN(parseFloat(netPyRtTtlDef/ttlCnt).toFixed(2))?0:(parseFloat(netPyRtTtlDef/ttlCnt).toFixed(2))); 
       $('#avgroi').text(isNaN(parseFloat(rtOfIntTtlDef/ttlCnt).toFixed(2))?0:(parseFloat(rtOfIntTtlDef/ttlCnt).toFixed(2)));
       $('#avgpf').text(isNaN(parseFloat(pfTtlDef/ttlCnt).toFixed(2))?0:(parseFloat(pfTtlDef/ttlCnt).toFixed(2)));
       $('#sancamnavgId').text($comPut(isNaN(parseFloat(sancTtlDef/ttlCnt).toFixed(0))?0:(parseFloat(sancTtlDef/ttlCnt).toFixed(0))));
       $('#defPyRtAvgId').text(isNaN(parseFloat(defPyRtTtlDef/ttlCnt).toFixed(2))?0:(parseFloat(defPyRtTtlDef/ttlCnt).toFixed(2)));
       $('#subAvgId').text(isNaN(parseFloat(subVentionTtlDef/ttlCnt).toFixed(2))?0:(parseFloat(subVentionTtlDef/ttlCnt).toFixed(2)));
       $('#finalPayAvgId').text($comPut(isNaN(parseFloat(fnlPyAmtTtlDef/ttlCnt).toFixed(0))?0:(parseFloat(fnlPyAmtTtlDef/ttlCnt).toFixed(0))));
       $('#intAmntAvgId').text($comPut(isNaN(parseFloat(intAmntTtlDef/ttlCnt).toFixed(0))?0:(parseFloat(intAmntTtlDef/ttlCnt).toFixed(0))));
       $('#pfAmntAvgId').text($comPut(isNaN(parseFloat(pfAmtTtlDef/ttlCnt).toFixed(0))?0:(parseFloat(pfAmtTtlDef/ttlCnt).toFixed(0))));
	}
	   $('.cntAppMisCls').text(ttlCnt);
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
	// Comma
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