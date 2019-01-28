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
		getFestivalPayout :function(){
			return `/upf-system-dsapayout/dsapayout/dsa/getFestivalPayout`
		},
		addPayout: function(){
			return `/upf-system-dsapayout/dsapayout/dsa/addPayout`
		},
		addFestivalPayout: function(){
			return `/upf-system-dsapayout/dsapayout/dsa/addFestivalPayout`
		}
}
	$(function(){
		
		if(localStorage.getItem('productType') == "BL" && localStorage.getItem("role").includes('SM')){
			$('#proTypIncId').html('<option selected value="BL">BL</option>');
			$('#proTypIncId').attr('disabled',true);
			$('#sblDivRowId').hide();
			$('#blDivRowId,#startEndDateRowId').show();
		}else if(localStorage.getItem('productType') == "SBL"  && localStorage.getItem("role").includes('SM')){
			$('#proTypIncId').html('<option selected value="SBL">SBL</option>');
			$('#proTypIncId').attr('disabled',true);
			$('#sblDivRowId').show();
			$('#blDivRowId,#startEndDateRowId').hide();
		}
	    $(document).on('click','#doneMsgOkId',function(){
	    	window.location.reload();
	    });
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
/*		$('.startDateRangePicker,.endDateRangePicker').datepicker({
			format: 'dd/mm/yyyy',
			autoclose:true
		});*/
		//remove
//		$('#yearAdmin').val('2018');
//		$('#monthAdmin').val('01');
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
			}
		});
	}
	function setValues(){
		var id = $('#blincentiveId').text()==""?1:$('#blincentiveId').text();
		var postData = {
				"month": $('#monthAdmin').val(),
				"year": $('#yearAdmin').val(),
				"producttype": $('#proTypIncId').val()
		}
		requestData(api.getFestivalPayout(),"POST",JSON.stringify(postData)).done(function(blReply){
			var startDate = '10/'+$('#monthAdmin').val()+'/'+$('#yearAdmin').val();
			console.log(blReply)
			if(blReply.dateid == null){

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

			}
		});
		
	}
	function $_blPost(event){
		event.preventDefault();
		$('#btnBlSubmitId').attr('disabled',true);
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
//				"enddate":$('#endDateId').val(),
//				"startdate": $('#startDateId').val(),
				"producttype": $('#proTypIncId').val(),
				"month": $('#monthAdmin').val(),
				"year": $('#yearAdmin').val()
		}
		requestData(api.addFestivalPayout(),"POST",JSON.stringify(formData)).done(function(blReply){
			if(blReply.reply == "success"){
				$('#btnBlSubmitId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>BL Incentives saved successfully.`);
				$('#sucModalWindId').click();
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
			/*no start & end date
			var new_options = {
				    format: 'dd/mm/yyyy',
				    autoclose: true,
				    startDate: '10/'+mm+'/'+y
				}
			$(".startDateRangePicker,.endDateRangePicker").datepicker('remove');
			$(".startDateRangePicker,.endDateRangePicker").datepicker(new_options); */
			if(prodType == "BL"){
				$('#sblDivRowId').hide();
				$('#blDivRowId,#startEndDateRowId').show();
				setValues();
			}else if(prodType == "SBL"){
				$('#sblDivRowId').show();
				$('#blDivRowId,#startEndDateRowId').hide();
				setValues();
			}
		}
	}