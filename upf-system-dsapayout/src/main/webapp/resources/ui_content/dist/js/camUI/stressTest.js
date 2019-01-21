function $stressTest(e,tblParent,tblAppend,checkTab,checkSubTab,API_ST_CONSOLIDATE,API_ST_BANKDETAILS){
	var flagAddBnkId;		
	if(checkSubTab == "consolidated"){
		flagAddBnkId='consID';
		var urll = API_ST_CONSOLIDATE+$("#ClientSessionId").val();		
	}else{
		flagAddBnkId=$(e.target).attr('id');
		var urll = API_ST_BANKDETAILS+"/"+$("#ClientSessionId").val()+"/"+flagAddBnkId;
	} 
	requestData(urll, "GET", {}).done(function (tblData) {
	// console.log(flagAddBnkId);
		var tblRenData = '<table class="table table-bordered table-hover" style="margin-bottom: 15px;"><thead>'+
		'<td colspan="2" class="a-comCls">Stress Test For</td>'+
		'<td colspan="15" class="a-comCls" id="bankCompanyNameId"><span class="cmpnynameCls"></td></tr></thead>';
		tblRenData += '<tr><td class="leftbgcolor">EDI</td><td class="a-emiTot a-right" colspan="2">'+$commaPut(tblData[0].edi)+'</td><td></td><td class="leftbgcolor">Per Month</td><td class="leftbgcolor">Total</td><td class="leftbgcolor">Average</td></tr>';
		tblRenData += '<tr><td colspan="3"></td><td></td><td class="a-emiTot"># days in Stress Test</td><td class="a-emiTot a-right" id="totalbankId-'+flagAddBnkId+'"></td><td class="a-emiTot a-right" id="avgStressTestId-'+flagAddBnkId+'"></td></tr>';
		tblRenData += '</table>';
		// 
		tblRenData += '<table class="table table-bordered table-hover"><thead style="background-color:#4BACC6 !important;color:#fff !important;">';
		// Day and Data
		tblRenData += '<tr><td style="width:150px;">Day</td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td>'+tblData[1].data[i].date+'</td>';}			
		tblRenData += '<td class="forSpace2"></td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td>'+tblData[1].data[i].date+'</td>';}
		tblRenData += '</td></thead>';
		// OD Limit
		tblRenData += '<tr><td style="width:150px;">ODLimit</td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td class="a-right">'+$commaPut(tblData[1].data[i].odlimit)+'</td>';}
		tblRenData += '<td class="forSpace2" style="width:150px;"></td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td></td>';}
		tblRenData += '</tr>';
		// Median
		tblRenData += '<tr><td class="a-emiTot">Median</td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td class="a-right a-emiTot">'+$commaPut(tblData[1].data[i].median)+'</td>';}
		tblRenData += '<td class="forSpace2"></td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td class="a-right a-emiTot"></td>';}
		tblRenData += '</tr>';
		// Average
		tblRenData += '<tr><td class="a-emiTot">Average</td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td class="a-right a-emiTot">'+$commaPut(tblData[1].data[i].average)+'</td>';}
		tblRenData += '<td class="forSpace2"></td>';
		for (i = 0; i < tblData[1].data.length; i++) {tblRenData += '<td class="a-right a-emiTot" id="avgStressId-'+flagAddBnkId+'-'+i+'"></td>';}[]
		tblRenData += '</tr>';
		//
		tblRenData += '';
		var stressId = -1;
		
		$(tblData).each(function(ke, va){++stressId;
			tblRenData += '<tbody class="numRightAlignCls"><tr><td>'+va.A+'</td>';
			$(va.data).each(function(kk, vv){tblRenData += '<td>'+$commaPut(vv.balance)+'</td>';});
			tblRenData += '<td class="forSpace2"></td>';
			var _loopVar=0;
			$(va.data).each(function(kk, vv){
				tblRenData += '<td id="totalStressId-'+flagAddBnkId+'-'+stressId+'-'+_loopVar+'">'+vv.value+'</td>';
				++_loopVar;
			});
			tblRenData += '</tr>';
		});tblRenData += '</tbody></table>';
		
		$('#'+tblAppend).empty().append(tblRenData);
		$('.cmpnynameCls').text(_companyName);
			for(i=0;i<12;i++){
				var sum = 0;
			for(j=0;j<31;j++){	
				sum = parseInt(sum) + parseInt($('#totalStressId-'+flagAddBnkId+'-'+j+'-'+i).text());
			}
			$('#avgStressId-'+flagAddBnkId+'-'+i).text(sum);
			}
			
			var sumTot = 0;	
			for(z=3;z<12;z++){
				sumTot = parseInt(sumTot) + parseInt($('#avgStressId-'+flagAddBnkId+'-'+z).text());
			}
			$('#totalbankId-'+flagAddBnkId).text(sumTot);
			$('#avgStressTestId-'+flagAddBnkId).text((parseFloat(sumTot)/9).toFixed(0));
	});	$resize()
}