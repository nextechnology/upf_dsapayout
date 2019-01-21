
								
function $bankSum_js(e,tblParent,tblAppend,checkTab,checkSubTab,API_BS_CONSOLIDATE,API_BS_CONSOLIDATE_AN,API_BS_BANKDETAILS,API_BS_BANKDETAILS_AN){
	if(checkSubTab == "consolidated"){_dropDownRemove = 'con';
	var urll   = API_BS_CONSOLIDATE+$("#ClientSessionId").val(); 
	var urllAn = API_BS_CONSOLIDATE_AN+$("#ClientSessionId").val();
}else{ _dropDownRemove = ''; 
	var urll   = API_BS_BANKDETAILS+$("#ClientSessionId").val()+"/"+$(e.target).attr('id');
	var urllAn = API_BS_BANKDETAILS_AN+$("#ClientSessionId").val()+"/"+$(e.target).attr('id');
} 
requestData(urll, "GET", {}).done(function (tblData) {
	requestData(urllAn,"GET", {}).done(function (anData) {
		if(_dropDownRemove != 'con'){
			var bankId = $(e.target).attr('id');
		}else{var bankId = 0;}
		requestData(API_OBSERVATION_GET+'/bsbank/'+$('#ClientSessionId').val()+'/'+bankId, "GET", '').done(function (obsPd) {
			requestData(API_CLARIFICATION_GET+'/bsbank/'+$('#ClientSessionId').val()+'/'+bankId, "GET", '').done(function (clarPd) {
		submitBankBsId = $(e.target).attr('id');
		localStorage.setItem("bsBankId",submitBankBsId);
		localStorage.setItem("bankObsClar",1);
		var tblRenData = '<form id="bsBankFormId-'+submitBankBsId+'"><table class="table table-bordered table-hover dataTable">'+
			'<thead class="leftbgcolor"><tr>'+
			'<td colspan="5" class="a-comCls">BANKING OF</td>'+
			'<td colspan="14" id="bankCompanyNameId" class="a-comCls"><span class="a-comCls cmpnynameCls"></td></tr>'+
			'<tr><td colspan="7" class="forSpace">Debits and Credits</td><td class="forSpace"></td><td colspan="5" class="forSpace">Balances</td><td class="forSpace"></td><td colspan="4" class="forSpace">Charges</td></tr>'+
			'<tr><td>Month</td><td>Card Credits</td><td>Credits</td>'+
			'<td>BTO</td><td>Debits</td><td>Credits (#)</td>'+
			'<td>Debits (#)</td>'+
			'<td class="forSpace"></td>'+ // space
			'<td>Skewness [MDB/OD/CC Amount+OD/CC Limit]</td><td>Unutilized MDB</td><td>Utilized OD/CC Amount</td><td>OD / CC Limit</td><td>Utilized OD/CC (%)</td>'+
			'<td class="forSpace"></td>';// space
		if(_dropDownRemove=='con')
			{
				tblRenData += '<td># I/w Return</td><td># O/w Return</td><td># ECS Bounces</td><td>Disbursals</td></tr></thead><tbody class="numRightAlignCls">';
			}
		else{
			tblRenData += '<td># I/w Return</td><td># O/w Return</td><td># ECS Bounces</td><td>Disbursals</td><td>IBT</td></tr></thead><tbody class="numRightAlignCls">';
		}
			
		if(_dropDownRemove != 'con'){
			tblRenData += '<tr><td colspan="12"></td><td colspan="4" style="text-align:right">BTO Considered</td><td colspan="2">'+
			'<select class="form-control bankBanksCls" id="annuConId'+tblAppend.split('-')[0]+'">'+
			'<option value="Yes">Yes (Annualized)</option><option value="No">No</option><option value="Actual">Yes (Actuals)</option></select></td></tr>';
		}
		
		$(tblData.data).each(function(ke, va){
			tblRenData += '<tr>';
			tblRenData += '<td>'+va.Month+'</td>'+
			 '<td>'+$commaPut(va.cardCredits)+'</td><td>'+$commaPut(va.credit)+'</td>'+
			 '<td>'+$commaPut(va.bto)+'</td><td>'+$commaPut(va.debits)+'</td>'+
			 '<td>'+$commaPut(va.creditCount)+'</td><td>'+$commaPut(va.debitCount)+'</td>'+
			 '<td class="forSpace"></td>'+ // space
			 '<td>'+parseFloat(va.skewNess).toFixed(2)+'</td>'+'<td>'+$commaPut(va.unUtilizedMDB)+'</td>'+
			 '<td>'+$commaPut(va.utilizedOD_CC)+'</td><td>'+$commaPut(va.OD_CC_Limit)+'</td>'+
			 '<td>'+parseFloat(va.utilizedRate*100).toFixed(2)+'<span>&#37;</span></td>'+
			 '<td class="forSpace"></td>'+ // space
			 '<td>'+$commaPut(va.I_w_count)+'</td><td>'+$commaPut(va.O_w_count)+'</td>'+
			 '<td>'+$commaPut(va.ECS_count)+'</td><td>'+$commaPut(va.disbursals)+'</td>';
			if(_dropDownRemove!='con')
			{
				tblRenData += '<td>'+$commaPut(va.ibt)+'</td></tr>';
			}
			 
		});
		// console.log('_dropDownRemove-',_dropDownRemove);
		tblRenData += bsRenderFun(tblData.data1[0].totals, "Total",'',_dropDownRemove);
		// 
		tblRenData += bsRenderFun(anData, "Annualised",tblAppend.split('-')[0],_dropDownRemove);
		//
		tblRenData += bsRenderFun(tblData.data1[0].averageSix, "Average 6m",'',_dropDownRemove);
		tblRenData += bsRenderFun(tblData.data1[0].averageTwelve, "Average 12m",'',_dropDownRemove);
		tblRenData += '</tbody></table>';
		
		if(_dropDownRemove != 'con'){
			tblRenData += '<div class="container-fluid">'+
  			'<div class="row"><div class="col-md-6">'+
    		'<table class="table table-bordered">'+
			'<tbody id="observationBankBsBodyId-'+submitBankBsId+'">'+
			'<tr class="a-itrText"><td colspan="2">Observations</td></tr>'+
			'<tr id="observationBankBsRowId-'+submitBankBsId+'-1">'+
			'<td id="bankBsObsHidId-'+submitBankBsId+'-1" style="display:none;"></td>'+
			'<td><input type="text" class="form-control  bankBanksCls"  id="observationBankBsId-'+submitBankBsId+'-1"></td>'+
			'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankBsObsDelCls" id="btnBankBsObsDelId-'+submitBankBsId+'-1">'+
			'<span class="glyphicon glyphicon-trash"></span>'+
			'</button></td></tr></tbody><tfoot><tr><td></td>'+
			'<td><input type="button" class="btn btn-warning pull-right addObsCls" id="btnBankBsObsAddRow-'+submitBankBsId+'" value="+">'+
			'</td></tr></tfoot></table></div>'+
    		'<div class="col-md-6">'+
   			'<table class="table table-bordered">'+	
			'<tbody id="clarificationBankBsBodyId-'+submitBankBsId+'">'+		
			'<tr class="a-itrText"><td colspan="2">Clarification/Justification</td></tr>'+
			'<tr id="clarificationBankBsRowId-'+submitBankBsId+'-1">'+				
			'<td id="bankBsClarHidId-'+submitBankBsId+'-1" style="display:none;"></td>'+
			'<td><input type="text" class="form-control  bankBanksCls"  id="clarificationBankBsId-'+submitBankBsId+'-1"></td>'+
			'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankBsClarDelCls" id="btnBankBsClarDelId-'+submitBankBsId+'-1">'+
			'<span class="glyphicon glyphicon-trash"></span>'+
			'</button></td></tr></tbody><tfoot><tr><td></td>'+
			'<td><input type="button" class="btn btn-warning pull-right addObsCls" id="btnBankBsClarAddRow-'+submitBankBsId+'" value="+"></td></tr>'+
			'</tfoot></table></div></div></div>'+
			'<div align="center"><input type="button" value="Submit" class="btn btn-success bsBankSubmitCls" id="btnSubmitBsBankId-'+submitBankBsId+'"></div></form>'+
			'<input type="submit" style="display:none" id="btnSubmitBsBank-'+submitBankBsId+'">';
		}
		$('#'+tblAppend).empty().append(tblRenData);
		requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(reply) {
			$(reply.accessList).each(function(k,v){
			if(v.BANKSUMMARY == "READ ONLY" ||v.BANKSUMMARY == "READONLY" || v.BANKSUMMARY == "READ"){
				$('#'+tblAppend+' input').prop('disabled', true);
				$('table input,table button, table select').prop('disabled', true);
			}else if(v.BANKSUMMARY == "WRITE" || v.BANKSUMMARY == "VIEW ALL"){
				$('#'+tblAppend+' input').prop('disabled', false);
				$('table input,table button, table select').prop('disabled', false);
			}else{
				$('#'+tblAppend+' input').prop('disabled', false);
				$('table input,table button, table select').prop('disabled', false);
			}
			});
			$_disBankDisFlds(tblAppend);
		});
		$('.cmpnynameCls').text(_companyName);
		
		
		if(_dropDownRemove != 'con'){
			$('#annuConId'+tblAppend.split('-')[0]).val(anData.status);
			if(anData.status == "Yes"){
				$('#anRowDataId'+tblAppend.split('-')[0]).empty();
				$('#anRowDataId'+tblAppend.split('-')[0]).append(bsRenderFunForAn(anData,tblAppend.split('-')[0],"Ann",_dropDownRemove));
			}else if(anData.status == "Actual"){
				$('#anRowDataId'+tblAppend.split('-')[0]).empty();
				$('#anRowDataId'+tblAppend.split('-')[0]).append(bsRenderFunForAn(tblData.data1[0].totals,tblAppend.split('-')[0]),'',_dropDownRemove);
			}else{
				$('.anRowColEmpty'+tblAppend.split('-')[0]).empty();
			}
		}
		
		if(_dropDownRemove == 'con'){
			if(anData.annual1 ==0 && anData.annual2 ==0 && anData.annual3 ==0 && anData.annual4 ==0){
				$('.anRowColEmpty'+tblAppend.split('-')[0]).empty();
			}
		}
		
	
			var srNoLclObsBSBank = 0,tblDataObs = '',srNoLclClarBsBank = 0,tblDataClar='';
				$(obsPd).each(function(k,v){++srNoLclObsBSBank;
					if(srNoLclObsBSBank == 1){
						$('#bankBsObsHidId-'+submitBankBsId+'-1').text(v.id);
						$('#observationBankBsId-'+submitBankBsId+'-1').val(v.observation);
					}else{
						tblDataObs += '<tr id="observationBankBsRowId-'+submitBankBsId+'-'+srNoLclObsBSBank+'">'+
						'<td id="bankBsObsHidId-'+submitBankBsId+'-'+srNoLclObsBSBank+'" style="display:none;">'+v.id+'</td>'+
						'<td><input type="text" class="form-control"  id="observationBankBsId-'+submitBankBsId+'-'+srNoLclObsBSBank+'" value="'+v.observation+'"></td>'+
						'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankBsObsDelCls" id="btnBankBsObsDelId-'+submitBankBsId+'-'+srNoLclObsBSBank+'">'+
						'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
						srNoObsBsBankGb = srNoLclObsBSBank;
					}
				});
				
				$(clarPd).each(function(k,v){++srNoLclClarBsBank;// console.log('v-',v)
				if(srNoLclClarBsBank == 1){
					$('#bankBsClarHidId-'+submitBankBsId+'-1').text(v.id);
					$('#clarificationBankBsId-'+submitBankBsId+'-1').val(v.clarification);
				}else{
					tblDataClar += '<tr id="clarificationBankBsRowId-'+submitBankBsId+'-'+srNoLclClarBsBank+'">'+
					'<td id="bankBsClarHidId-'+submitBankBsId+'-'+srNoLclClarBsBank+'" style="display:none;">'+v.id+'</td>'+
					'<td><input type="text" class="form-control"  id="clarificationBankBsId-'+submitBankBsId+'-'+srNoLclClarBsBank+'" value="'+v.clarification+'"></td>'+
					'<td style="width:30px;"><button type="button" class="btn btn-danger btn-sm bankBsClarDelCls" id="btnBankBsClarDelId-'+submitBankBsId+'-'+srNoLclClarBsBank+'">'+
					'<span class="glyphicon glyphicon-trash"></span></button></td></tr>';
					srNoClarBsBankGb = srNoLclClarBsBank;
				}
			});
				
					$('#observationBankBsBodyId-'+submitBankBsId).append(tblDataObs);
					$('#clarificationBankBsBodyId-'+submitBankBsId).append(tblDataClar);
				
	
		$(document).on('change', '#annuConId'+tblAppend.split('-')[0],function(){var _st;
			if($(this).val() == "Yes"){_st = 'Yes';
				$('#anRowDataId'+tblAppend.split('-')[0]).empty();
				$('#anRowDataId'+tblAppend.split('-')[0]).append(bsRenderFunForAn(anData,tblAppend.split('-')[0],"Ann",_dropDownRemove));
			}else if($(this).val() == "Actual"){_st = 'Actual';
				$('#anRowDataId'+tblAppend.split('-')[0]).empty();
				$('#anRowDataId'+tblAppend.split('-')[0]).append(bsRenderFunForAn(tblData.data1[0].totals,tblAppend.split('-')[0],'',_dropDownRemove));
			}else{_st = 'No';
				$('.anRowColEmpty'+tblAppend.split('-')[0]).empty();
			}
			var _anPost = {
					  "clientId" : parseInt($("#ClientSessionId").val()),
					  "bankId" : parseInt($(e.target).attr('id')),
					  "statusAnnualised" : _st
					};
			// console.log(_anPost);
			requestData(API_BS_BANKDETAILS_AN_POST, 'POST', JSON.stringify(_anPost)).done(function (anReply) {});
		});
	
				});
			});});
});$resize()
} // end for $bankSummary_js();

function bsRenderFunForAn(a,c,d,e){
	var b = '<td class="m-lightBlue">Annualised</td>';
	if(d == "Ann"){
		b += '<td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a.annual1)+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a.annual2)+'</td><td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a.annual3)+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a.annual4)+'</td><td class="m-lightBlue anRowColEmpty'+c+'"></td><td class="m-lightBlue anRowColEmpty'+c+'"></td>'+
		'<td class="forSpace"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="forSpace"></td>'+
		'<td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td>';
		b += (e == "con")?'':'<td class="m-lightBlue"></td>';
	}else{
		b += '<td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a[0].total1)+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a[0].total2)+'</td><td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a[0].total3)+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+c+'">'+$commaPut(a[0].total4)+'</td><td class="m-lightBlue anRowColEmpty'+c+'"></td><td class="m-lightBlue anRowColEmpty'+c+'"></td>'+
		'<td class="forSpace"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="forSpace"></td>'+
		'<td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td>';
		b += (e == "con")?'':'<td class="m-lightBlue"></td>';
	} 
	return b;
}
function bsRenderFun(a, c, d, e){
	if(c == "Total"){
		var b = '<tr class="m-lightBlue"><td>'+c+'</td>';
		b += '<td>'+$commaPut(a[0].total1)+'</td>'+
		'<td>'+$commaPut(a[0].total2)+'</td><td>'+$commaPut(a[0].total3)+'</td>'+
		'<td>'+$commaPut(a[0].total4)+'</td><td></td>'+
		'<td></td><td class="forSpace"></td>'+ // space
		'<td></td><td></td>'+
		'<td></td><td></td>'+
		'<td></td><td class="forSpace"></td>'+ // space
		'<td>'+$commaPut(a[0].total12)+'</td><td>'+$commaPut(a[0].total13)+'</td>'+
		'<td>'+$commaPut(a[0].total14)+'</td><td>'+$commaPut(a[0].total15)+'</td>';
		b += (e != "con")?'<td>'+$commaPut(a[0].total16)+'</td>':'';
		
	}else if(c == "Average 6m"){
		var b = '<tr class="m-lightBlue"><td>'+c+'</td>';
		b += '<td>'+$commaPut(a[0].averageSix1)+'</td>'+
		'<td>'+$commaPut(a[0].averageSix2)+'</td><td>'+$commaPut(a[0].averageSix3)+'</td>'+
		'<td>'+$commaPut(a[0].averageSix4)+'</td><td>'+$commaPut(a[0].averageSix5)+'</td>'+
		'<td>'+$commaPut(a[0].averageSix6)+'</td><td class="forSpace"></td>'+ // space
		'<td>'+parseFloat(a[0].averageSix7).toFixed(2)+'</td><td>'+$commaPut(a[0].averageSix8)+'</td>'+
		'<td>'+$commaPut(a[0].averageSix9)+'</td><td>'+$commaPut(a[0].averageSix10)+'</td>'+
		'<td>'+($_fix2((a[0].averageSix11)*100))+'</td><td class="forSpace"></td>'+ // space
		'<td>'+$commaPut(a[0].averageSix12)+'</td><td>'+$commaPut(a[0].averageSix13)+'</td>'+
		'<td>'+$commaPut(a[0].averageSix14)+'</td><td>'+$commaPut(a[0].averageSix15)+'</td>';
		b += (e != "con")?'<td>'+$commaPut(a[0].averageSix16)+'</td>':'';
	
		
	}else if(c == "Average 12m"){
		var b = '<tr class="m-lightBlue"><td>'+c+'</td>';
		b += '<td>'+$commaPut(a[0].avg1)+'</td>'+
		'<td>'+$commaPut(a[0].avg2)+'</td><td>'+$commaPut(a[0].avg3)+'</td>'+
		'<td>'+$commaPut(a[0].avg4)+'</td><td>'+$commaPut(a[0].avg5)+'</td>'+
		'<td>'+$commaPut(a[0].avg6)+'</td><td class="forSpace"></td>'+ // space
		'<td>'+parseFloat(a[0].avg7).toFixed(2)+'</td><td>'+$commaPut(a[0].avg8)+'</td>'+
		'<td>'+$commaPut(a[0].avg9)+'</td><td>'+$commaPut(a[0].avg10)+'</td>'+
		'<td>'+($_fix2((a[0].avg11)*100))+'</td><td class="forSpace"></td>'+ // space
		'<td>'+$commaPut(a[0].avg12)+'</td><td>'+$commaPut(a[0].avg13)+'</td>'+
		'<td>'+$commaPut(a[0].avg14)+'</td><td>'+$commaPut(a[0].avg15)+'</td>';
		b += (e != "con")?'<td>'+$commaPut(a[0].avg16)+'</td>':'';
	}else{
		var b = '<tr id="anRowDataId'+d+'"><td class="m-lightBlue">'+c+'</td>';
		b += '<td class="m-lightBlue anRowColEmpty'+d+'">'+$commaPut(a.annual1)+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+d+'">'+$commaPut(a.annual2)+'</td><td class="m-lightBlue anRowColEmpty'+d+'">'+$commaPut(a.annual3)+'</td>'+
		'<td class="m-lightBlue anRowColEmpty'+d+'">'+$commaPut(a.annual4)+'</td><td class="m-lightBlue anRowColEmpty'+d+'"></td><td class="m-lightBlue anRowColEmpty'+d+'"></td>'+
		'<td class="forSpace"></td class="m-lightBlue"><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="forSpace"></td>'+
		'<td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td><td class="m-lightBlue"></td>';
		b += (e == "con")?'':'<td class="m-lightBlue"></td>';
	}
	b += '</tr>';return b;
	
}
function $_disBankDisFlds(tblAppend) {
	if(localStorage.getItem('disbStatus') == "Executed"){
		$('#'+tblAppend+' input').prop('disabled', true);
		$('table input,table button, table select').prop('disabled', true);
	}else if(localStorage.getItem("changedTab") == "NOCHANGE") {
		$('#'+tblAppend+' input').prop('disabled', false);
		$('table input,table button, table select').prop('disabled', false);
	}else if(localStorage.getItem("changedTab") != "Bank Summary"+$('#'+localStorage.getItem("bsBankId")).text()) {
		$('#'+tblAppend+' input').prop('disabled', true);
		$('table input,table button, table select').prop('disabled', true);
	}else{
		$('#'+tblAppend+' input').prop('disabled', false);
		$('table input,table button, table select').prop('disabled', false);
	}
}