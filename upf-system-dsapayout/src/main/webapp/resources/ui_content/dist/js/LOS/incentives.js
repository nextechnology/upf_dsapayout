	var 
	API_SBL_GET = '/upf-system-dsapayout/dsapayout/dsa/getsblincentive'
	,API_SBL_POST = '/upf-system-dsapayout/dsapayout/dsa/addsblincentive'
	,API_BL_GET = '/upf-system-dsapayout/dsapayout/dsa/getBLInsentive?id='
	,API_BL_POST = '/upf-system-dsapayout/dsapayout/dsa/addBlincentive'
	; 
	$(function(){
		
		if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
			$('#proTypIncId').html('<option selected value="BL">BL</option>');
			$('#proTypIncId').attr('disabled',true);
			$('#sblDivRowId').hide();
			$('#blDivRowId').show();
			$_blGet();
		}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
			$('#proTypIncId').html('<option selected value="SBL">SBL</option>');
			$('#proTypIncId').attr('disabled',true);
			$('#sblDivRowId').show();
			$('#blDivRowId').hide();
			$_sblGet();
		}
	    $(document).on('click','#doneMsgOkId',function(){
	    	window.location.reload();
	    });
	
		$(document).on('change','#proTypIncId',function(){
			if($(this).val() == "BL"){
				$('#sblDivRowId').hide();
				$('#blDivRowId').show();
				$_blGet();
			}else if($(this).val() == ""){
				$('#sblDivRowId').hide();
				$('#blDivRowId').hide();
			}else if($(this).val() == "SBL"){
				$('#sblDivRowId').show();
				$('#blDivRowId').hide();
				$_sblGet();
			}
		});
	});
	
	function $_sblGet(){
		requestData(API_SBL_GET,"GET").done(function(reply){
			$(reply).each(function(k,v){
				$('#sblHidIncId-'+(k+1)).text(v.sblincentiveid);	
				$('#disbursementId-'+(k+1)).text(v.disbursementinlac);
				$('#monthSblId-'+(k+1)).val(v.monthlyslab);
			});
		});
	}
	function $_sblpost(event){
		event.preventDefault();
		$('#sblSbmtId').attr('disabled',true);
		var arr = [];
		var formData = {};
		for(i=1;i<=5;i++){
			formData = {
					"sblincentiveid": $('#sblHidIncId-'+i).text(),
			        "disbursementinlac": $('#disbursementId-'+i).text(),
			        "monthlyslab": parseFloat($('#monthSblId-'+i).val())
			};
			arr.push(formData);
		}
		requestData(API_SBL_POST,"POST",JSON.stringify(arr)).done(function(reply){
			if(reply.reply == "success"){
				$('#sblSbmtId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>SBL Incentives saved successfully.`);
				$('#sucModalWindId').click();
			/* 	alert("SBL Incentives saved successfully.");
				window.location.reload(); */
				//$_sblGet();
			}
		});
	}
	function $_blGet(){
		var id = $('#blincentiveId').text()==""?1:$('#blincentiveId').text();
		requestData(API_BL_GET+id,"GET").done(function(blReply){
			
		 $('#blincentiveId').text(blReply.blincentiveid);
		
		 $('#renewalsid').text(blReply.renewals.renewalsid);
		 $('#frstRenwId-1').val(blReply.renewals.instanceofrenewal);  
		 $('#frstRenwId-2').val(blReply.renewals.payoutpercentage);
		 
		 $('#monthlyslabid-1').text(blReply.monthlyslab[0].monthlyslabid); 
		 $('#monthlyslabid-2').text(blReply.monthlyslab[1].monthlyslabid); 
		 $('#monthlyslabid-3').text(blReply.monthlyslab[2].monthlyslabid);
		 
		 $('#disbursalincr-1').text(blReply.monthlyslab[0].disbursalincr);
		 $('#disbursalincr-2').text(blReply.monthlyslab[1].disbursalincr);
		 $('#disbursalincr-3').text(blReply.monthlyslab[2].disbursalincr);
		 
		 $('#minFileDis-1').val(blReply.monthlyslab[0].minfilesdisbursed);
		 $('#minFileDis-2').val(blReply.monthlyslab[1].minfilesdisbursed);
		 $('#minFileDis-3').val(blReply.monthlyslab[2].minfilesdisbursed);
		 
		 $('#mnthPayout-1').val(blReply.monthlyslab[0].monthlypayout);
		 $('#mnthPayout-2').val(blReply.monthlyslab[1].monthlypayout);
		 $('#mnthPayout-3').val(blReply.monthlyslab[2].monthlypayout);
		 
		 $('#disbursalincr-4').text(blReply.quarterlyslab[0].disbursalincr);
		 $('#disbursalincr-5').text(blReply.quarterlyslab[1].disbursalincr);
		 $('#disbursalincr-6').text(blReply.quarterlyslab[2].disbursalincr);
		 
		 $('#quarterlyslabid-1').text(blReply.quarterlyslab[0].quarterlyslabid)
		 $('#quarterlyslabid-2').text(blReply.quarterlyslab[1].quarterlyslabid)
		 $('#quarterlyslabid-3').text(blReply.quarterlyslab[2].quarterlyslabid)
		 
		 $('#qtrlySlbId-1').val(blReply.quarterlyslab[0].quarterlyslab);
		 $('#qtrlySlbId-2').val(blReply.quarterlyslab[1].quarterlyslab);
		 $('#qtrlySlbId-3').val(blReply.quarterlyslab[2].quarterlyslab);
		 
		 $('#qlfCritId-1').val(blReply.quarterlyslab[0].qualifyingcriteria);
		 $('#qlfCritId-2').val(blReply.quarterlyslab[1].qualifyingcriteria);
		 $('#qlfCritId-3').val(blReply.quarterlyslab[2].qualifyingcriteria);
		
		});
	}
	function $_blPost(event){
		event.preventDefault();
		$('#btnBlSubmitId').attr('disabled',true);
		var formData = {
				"blincentiveid":isNaN(parseInt($('#blincentiveId').text()))?0:(parseInt($('#blincentiveId').text())),
				"renewals": {
					  "renewalsid": isNaN(parseInt($('#renewalsid').text()))?0:(parseInt($('#renewalsid').text())),
					  "instanceofrenewal": $('#frstRenwId-1').text(),
					  "payoutpercentage": $('#frstRenwId-2').val()
					 },
				"monthlyslab": [{
						  "monthlyslabid": isNaN(parseInt($('#monthlyslabid-1').text()))?0:(parseInt($('#monthlyslabid-1').text())),
						  "disbursalincr": $('#disbursalincr-1').text(),
						  "minfilesdisbursed": parseInt($('#minFileDis-1').val()),
						  "monthlypayout": parseFloat($('#mnthPayout-1').val())
						 }, {
						  "monthlyslabid": isNaN(parseInt($('#monthlyslabid-2').text()))?0:(parseInt($('#monthlyslabid-2').text())),
						  "disbursalincr": $('#disbursalincr-2').text(),
						  "minfilesdisbursed": parseInt($('#minFileDis-2').val()),
						  "monthlypayout": parseFloat($('#mnthPayout-2').val())
						},{
						  "monthlyslabid": isNaN(parseInt($('#monthlyslabid-3').text()))?0:(parseInt($('#monthlyslabid-3').text())),
						  "disbursalincr": $('#disbursalincr-3').text(),
						  "minfilesdisbursed": parseInt($('#minFileDis-3').val()),
						  "monthlypayout": parseFloat($('#mnthPayout-3').val())
						 }],"quarterlyslab": [{
							  "quarterlyslabid": isNaN(parseInt($('#quarterlyslabid-1').text()))?0:(parseInt($('#quarterlyslabid-1').text())),
							  "disbursalincr": $('#disbursalincr-4').text(),
							  "qualifyingcriteria" : "",//$('#qlfCritId-1').val(),
							  "quarterlyslab": parseFloat($('#qtrlySlbId-1').val())
							 }, {
							  "quarterlyslabid": isNaN(parseInt($('#quarterlyslabid-2').text()))?0:(parseInt($('#quarterlyslabid-2').text())),
							  "disbursalincr": $('#disbursalincr-5').text(),
							  "qualifyingcriteria" : "", //$('#qlfCritId-2').val(),
							  "quarterlyslab": parseFloat($('#qtrlySlbId-2').val())
							 },
							 {
							  "quarterlyslabid": isNaN(parseInt($('#quarterlyslabid-3').text()))?0:(parseInt($('#quarterlyslabid-3').text())),
							  "disbursalincr": $('#disbursalincr-6').text(),
							  "qualifyingcriteria" :"",//$('#qlfCritId-3').val(),
							  "quarterlyslab": parseFloat($('#qtrlySlbId-3').val())
							}]
		}
		requestData(API_BL_POST,"POST",JSON.stringify(formData)).done(function(reply){
			if(reply.reply == "success"){
				$('#btnBlSubmitId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>BL Incentives saved successfully.`);
				$('#sucModalWindId').click();
		/* 		alert("BL Incentives saved successfully.");
				window.location.reload(); */
				//$_sblGet();
			}
		});
	} 