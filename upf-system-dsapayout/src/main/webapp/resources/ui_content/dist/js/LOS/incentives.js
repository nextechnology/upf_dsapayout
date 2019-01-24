var 
	API_SBL_GET = '/upf-system-dsapayout/dsapayout/dsa/getsblincentive'
	,API_SBL_POST = '/upf-system-dsapayout/dsapayout/dsa/addsblincentive'
	,API_BL_GET = '/upf-system-dsapayout/dsapayout/dsa/getBLInsentive?id='
	,API_BL_POST = '/upf-system-dsapayout/dsapayout/dsa/addBlincentive'
	;
var api = {
		getPayout :function(){
			return `/upf-system-dsapayout/dsapayout/dsa/getPayout`
		},
		addPayout: function(){
			return `/upf-system-dsapayout/dsapayout/dsa/addPayout`
		}
}
	$(function(){
		
		if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
			$('#proTypIncId').html('<option selected value="BL">BL</option>');
			$('#proTypIncId').attr('disabled',true);
			$('#sblDivRowId').hide();
			$('#blDivRowId,#startEndDateRowId').show();
			$_blGet();
		}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
			$('#proTypIncId').html('<option selected value="SBL">SBL</option>');
			$('#proTypIncId').attr('disabled',true);
			$('#sblDivRowId').show();
			$('#blDivRowId,#startEndDateRowId').hide();
			$_sblGet();
		}
	    $(document).on('click','#doneMsgOkId',function(){
	    	window.location.reload();
	    });
/*old code	
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
		});*/
		$_yearList('<option value="">Select Year</option>','yearAdmin');
		
		$(document).ajaxSend(function(e, xhr, opt){
			if(opt.method=='POST'){
				$('.loadingoverlay').html(`<h2>Please wait...</h2>`).fadeIn(250);
			}else{
				$('.loadingoverlay').html(`<h2>Loading...</h2>`).fadeIn(250);
			}
		});
		$(document).ajaxComplete(function(e, xhr, opt){
			setTimeout(function(){
				$('.loadingoverlay').fadeOut(250);
			},500)			
		});
		$('.startDateRangePicker,.endDateRangePicker').datepicker({
			format: 'dd/mm/yyyy',
			autoclose:true
		});
		//remove
		$('#yearAdmin').val('2018');
		$('#monthAdmin').val('01');
		renStartEnd();
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
		var postData = {
				"month": $('#monthAdmin option:selected').text(),
				"year": $('#yearAdmin').val(),
				"producttype": $('#proTypIncId').val()
		}
		requestData(api.getPayout(),"POST",JSON.stringify(postData)).done(function(blReply){
			var startDate = '10/'+$('#monthAdmin').val()+'/'+$('#yearAdmin').val()
			if(blReply.dateid == null){
				var new_options = {
						format: 'dd/mm/yyyy',
						autoclose: true,
						startDate: startDate
				}
				$(".startDateRangePicker,.endDateRangePicker").datepicker('remove');
				$(".startDateRangePicker,.endDateRangePicker").datepicker(new_options); 
				$('#startDateId').val(startDate);
				$('#endDateId').val('');

				$('#monthlyslabid-1').text(0); 
				$('#monthlyslabid-2').text(0); 
				$('#monthlyslabid-3').text(0);

				$('#disbursalincr-1').text(blReply[0].disbursalincr);
				$('#disbursalincr-2').text(blReply[1].disbursalincr);
				$('#disbursalincr-3').text(blReply[2].disbursalincr);

				$('#minFileDis-1').val(blReply[0].minfilesdisbursed);
				$('#minFileDis-2').val(blReply[1].minfilesdisbursed);
				$('#minFileDis-3').val(blReply[2].minfilesdisbursed);

				$('#mnthPayout-1').val(blReply[0].monthlypayout);
				$('#mnthPayout-2').val(blReply[1].monthlypayout);
				$('#mnthPayout-3').val(blReply[2].monthlypayout);
			}else{


//				$('#renewalsid').text(blReply.renewals.renewalsid);
//				$('#frstRenwId-1').val(blReply.renewals.instanceofrenewal);  
//				$('#frstRenwId-2').val(blReply.renewals.payoutpercentage);
				$('#blincentiveId').text(blReply.dateid);

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

				$('#startDateId').val(blReply.startdate);
				$('#endDateId').val(blReply.enddate);
//				$('#disbursalincr-4').text(blReply.quarterlyslab[0].disbursalincr);
//				$('#disbursalincr-5').text(blReply.quarterlyslab[1].disbursalincr);
//				$('#disbursalincr-6').text(blReply.quarterlyslab[2].disbursalincr);

//				$('#quarterlyslabid-1').text(blReply.quarterlyslab[0].quarterlyslabid)
//				$('#quarterlyslabid-2').text(blReply.quarterlyslab[1].quarterlyslabid)
//				$('#quarterlyslabid-3').text(blReply.quarterlyslab[2].quarterlyslabid)

//				$('#qtrlySlbId-1').val(blReply.quarterlyslab[0].quarterlyslab);
//				$('#qtrlySlbId-2').val(blReply.quarterlyslab[1].quarterlyslab);
//				$('#qtrlySlbId-3').val(blReply.quarterlyslab[2].quarterlyslab);

//				$('#qlfCritId-1').val(blReply.quarterlyslab[0].qualifyingcriteria);
//				$('#qlfCritId-2').val(blReply.quarterlyslab[1].qualifyingcriteria);
//				$('#qlfCritId-3').val(blReply.quarterlyslab[2].qualifyingcriteria);
			}
		});
		
	}
	function $_blPost(event){
		event.preventDefault();
		$('#btnBlSubmitId').attr('disabled',true);
/*old		var formData = {
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
		}*/
		var formData = {
				"dateid":isNaN(parseInt($('#blincentiveId').text()))?0:(parseInt($('#blincentiveId').text())),
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
						 }],
				"enddate":$('#endDateId').val(),
				"producttype": $('#proTypIncId').val(),
				"startdate": $('#startDateId').val(),
				"month": $('#monthAdmin option:selected').text(),
				"year": $('#yearAdmin').val()
		}
		requestData(api.addPayout(),"POST",JSON.stringify(formData)).done(function(blReply){
			if(blReply.reply == "success"){
				$('#btnBlSubmitId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>BL Incentives saved successfully.`);
				$('#sucModalWindId').click();
			}
		});
		/*old
		requestData(API_BL_POST,"POST",JSON.stringify(formData)).done(function(reply){
			if(reply.reply == "success"){
				$('#btnBlSubmitId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>BL Incentives saved successfully.`);
				$('#sucModalWindId').click();
			}
		});*/
	} 

	function $_yearList(initOpt,idToApp){
		var dateYrOptn = initOpt;
		for(i=(new Date()).getFullYear();i>=2000;i--){
			dateYrOptn += '<option>'+i+'</option>';
		}
		$('#'+idToApp).html(dateYrOptn);
	}
	function renStartEnd(){
		var prodType = $('#proTypIncId').val();
		var year = $('#yearAdmin').val();
		var month = $('#monthAdmin').val();
		var today =  new Date();
		var dd = today.getDate();
		var mm = parseInt(month);
		var y = year;
		
		if(prodType=='' || year=='' || month==''){
			$('#blDivRowId,#startEndDateRowId,#sblDivRowId').hide();
			
		}else{
			var new_options = {
				    format: 'dd/mm/yyyy',
				    autoclose: true,
				    startDate: '10/'+mm+'/'+y
				}
			$(".startDateRangePicker,.endDateRangePicker").datepicker('remove');
			$(".startDateRangePicker,.endDateRangePicker").datepicker(new_options); 
			if(prodType == "BL"){
				$('#sblDivRowId').hide();
				$('#blDivRowId,#startEndDateRowId').show();
				$_blGet();
			}else if(prodType == "SBL"){
				$('#sblDivRowId').show();
				$('#blDivRowId,#startEndDateRowId').hide();
				$_sblGet();
			}
		}
	}