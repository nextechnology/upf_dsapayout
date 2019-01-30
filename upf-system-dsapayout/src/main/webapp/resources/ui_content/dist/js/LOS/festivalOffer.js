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
		},
		getSBLFestivalPayout :function(){
			return `/upf-system-dsapayout/dsapayout/dsa/getSBLFestivalPayout`
		},
		addSBLFestivalPayout: function(){
			return `/upf-system-dsapayout/dsapayout/dsa/addSBLFestivalPayout`
		}
};
var bReply = {},
	sReply = {};
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
//				$('.loadingoverlay').html(`<h2>Please wait...</h2>`).fadeIn(250);
			}else{
//				$('.loadingoverlay').html(`<h2>Loading...</h2>`).fadeIn(250);
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
	
	function setValues(a){
		var id = $('#blincentiveId').text()==""?1:$('#blincentiveId').text();
		var postData = {
				"month": $('#monthAdmin').val(),
				"year": $('#yearAdmin').val(),
				"producttype": $('#proTypIncId').val()
		}
		if(a=="BL"){
			requestData(api.getFestivalPayout(),"POST",JSON.stringify(postData)).done(function(blReply){
				var startDate = '10/'+$('#monthAdmin').val()+'/'+$('#yearAdmin').val();
				console.log(blReply)
				if(blReply.dateid == null){
					bReply = {};
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
					
					$('#blIncentTblId').find('input').removeAttr('disabled');
					$('#btnBlSubmitId').removeAttr('disabled');
				}else{
					bReply = blReply;
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

					$('#blIncentTblId').find('input').attr('disabled',true);
					$('#btnBlSubmitId').attr('disabled',true);
				}
			});
		}
		else{
			requestData(api.getSBLFestivalPayout(),"POST",JSON.stringify(postData)).done(function(reply){
				console.log(reply);
				if(reply.dateid==null){
					sReply = {};
					$(reply).each(function(k,v){
						$('#sblHidIncId-'+(k+1)).text(0);	
						$('#disbursementId-'+(k+1)).text(v.disbursementinlac);
						$('#monthSblId-'+(k+1)).val(v.monthlyslab);
					});
					$('#sblIncentTblId').find('input').removeAttr('disabled');
					$('#sblSbmtId').removeAttr('disabled');
				}else{
					sReply = reply;
					$(reply.sblmonthlyslab).each(function(k,v){
						$('#sblHidIncId-'+(k+1)).text(v.sblmonthlyslabid);	
						$('#disbursementId-'+(k+1)).text(v.disbursementinlac);
						$('#monthSblId-'+(k+1)).val(v.monthlyslab);
					});
					$('#sblIncentTblId').find('input').attr('disabled',true);
					$('#sblSbmtId').attr('disabled',true);
				}
				
			});
		}

		
	}
	function $_blPost(event){
		event.preventDefault();
		$('#btnBlSubmitId').attr('disabled',true);
		var formData = bReply;
		var monthlyslab = [];
		if($.isEmptyObject(bReply)){
			formData = {
					"dateid": 0,
					"producttype": $('#proTypIncId').val(),
					"month": $('#monthAdmin').val(),
					"year": $('#yearAdmin').val(),
					"monthlyslab": []
			};
		}
		for(i=1;i<=3;i++){
			monthlyslab.push({
		        "monthlyslabid": isNaN(parseInt($('#monthlyslabid-'+i).text()))?0:(parseInt($('#monthlyslabid-'+i).text())),
				"disbursalincr": $('#disbursalincr-'+i).text(),
				"minfilesdisbursed": parseInt($('#minFileDis-'+i).val()),
				"monthlypayout": parseFloat($('#mnthPayout-'+i).val())
			});
		}
		formData.monthlyslab = monthlyslab;
		requestData(api.addFestivalPayout(),"POST",JSON.stringify(formData)).done(function(blReply){
			if(blReply.reply == "success"){
				$('#btnBlSubmitId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>BL Incentives saved successfully.`);
				$('#sucModalWindId').click();
			}
		});
	} 
	function $_sblpost(event){
		event.preventDefault();
		$('#sblSbmtId').attr('disabled',true);
		var formData = sReply;
		var sblmonthlyslab = [];
		if($.isEmptyObject(sReply)){
			formData = {
					"dateid": 0,
					"producttype": $('#proTypIncId').val(),
					"month": $('#monthAdmin').val(),
					"year": $('#yearAdmin').val(),
					"sblmonthlyslab": []
			};
		}
		for(i=1;i<=5;i++){
			sblmonthlyslab.push({
				"sblmonthlyslabid": $('#sblHidIncId-'+i).text(),
		        "disbursementinlac": $('#disbursementId-'+i).text(),
		        "monthlyslab": parseFloat($('#monthSblId-'+i).val())
			});
		}
		formData.sblmonthlyslab = sblmonthlyslab;
		
		requestData(api.addSBLFestivalPayout(),"POST",JSON.stringify(formData)).done(function(reply){
			if(reply.reply == "success"){
				$('#sblSbmtId').attr('disabled',false);
				$('#diagMsgDivId').show();
				$('#sucMgsId').html(`<span class="glyphicon glyphicon-ok-circle"></span>SBL Incentives saved successfully.`);
				$('#sucModalWindId').click();
			}
		});
	}

	function $_yearList(initOpt,idToApp){
		var dateYrOptn = initOpt;
		for(i=(new Date()).getFullYear();i>=2018;i--){
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
				setValues('BL');
			}else if(prodType == "SBL"){
				$('#sblDivRowId').show();
				$('#blDivRowId,#startEndDateRowId').hide();
				setValues('SBL');
			}
		}
	}