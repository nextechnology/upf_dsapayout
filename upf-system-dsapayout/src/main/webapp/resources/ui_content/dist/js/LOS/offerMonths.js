var api = {
		getPayout :function(){
			return `/upf-system-dsapayout/dsapayout/dsa/getPayout`
		},
		getPayoutProductType :function(a){
			return `/upf-system-dsapayout/dsapayout/dsa/getPayout?producttype=${a}`
		},
		addPayout: function(){
			return `/upf-system-dsapayout/dsapayout/dsa/addPayout`
		}
}
var tempRangeObj = [];
	$(function(){
	    $(document).on('click','#doneMsgOkId',function(){
	    	window.location.reload();
	    });
	    $(document).on('input','#proTypIncId',function(){
	    	$('#startEndDateRowId').find('select,input').val('');
	    	$('#startEndDateRowId,#startEndDivId').hide();
			$('#blDivRowId').hide();
	    	var prodType = $('#proTypIncId').val();
	    	if(prodType==''){
	    		$('#startEndDateRowId,#startEndDivId').hide();
				$('#startEndDivId').hide();
	    	}else{
	    		requestData(api.getPayoutProductType(prodType),'GET').done(function(data){
					var tblData ='';
					tempRangeObj = data;
					if($.isEmptyObject(data)){
						tblData += `<tr class="a-center">
							<td colspan="3">NO DATA FOUND</td>
						</tr>	`;
					}else{
						$(data).each(function(k,v){
							tblData += `<tr class="a-center">
												<td>${v.month}-${v.year}</td>
												<td>${v.startdate}</td>
												<td>${v.enddate}</td>
											</tr>	`
						});
					}
					$('#monthYearTblId').html(tblData)
					$('#startEndDateRowId,#blDivRowId').show()
				}).fail(function(e){
					$('#startEndDateRowId,#startEndDivId').hide();
					$('#blDivRowId').hide();
				});;
	    	}
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
		$('.startDateRangePicker,.endDateRangePicker').datepicker({
			format: 'dd/mm/yyyy',
			autoclose:true
		});
//		renStartEnd();
	});
	

	function $_yearList(initOpt,idToApp){
		var dateYrOptn = initOpt;
		for(i=(new Date()).getFullYear();i>=2018;i--){
			dateYrOptn += '<option>'+i+'</option>';
		}
		$('#'+idToApp).html(dateYrOptn);
	}
	function renStartEnd(_this){
		var prodType = $('#proTypIncId').val();
		var year = $('#yearAdmin').val();
		var month = $('#monthAdmin').val();
		var today =  new Date();
		var dd = 10;
		var mm = parseInt(month==''?0:month);
		var y = year;
		
		var flag = true;
		var tempMM = 1;
		if((year=='' || month=='')){
			$('#startEndDivId').hide();
			return false;
		}else{
			$(tempRangeObj).each(function(k,v){
				if((year == v.year) && (v.month==$('#monthAdmin option:selected').text())){
					$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
					$('#sucMgsId').html(`<span class="glyphicon glyphicon-exclamation-sign"></span> You've already added this month defination!`);
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
					$('#myModal').modal('show')
					$(_this).val('');
					$('#startEndDivId').hide();
					flag = false;
					return false;
				}else{
					dd = v.startdate.split('/')[0];
					tempMM = parseInt(v.enddate.split('/')[1])
				}
			});
			if(flag){
				if(mm <= tempMM){
					var start_options = {
						    format: 'dd/mm/yyyy',
						    autoclose: true,
						    startDate:  mTD(dd)+'/'+mTD(mm)+'/'+y
						},end_options = {
							    format: 'dd/mm/yyyy',
							    autoclose: true,
							    startDate: mTD(parseInt(dd)+1)+'/'+mTD(mm)+'/'+y
							};
					$(".startDateRangePicker,.endDateRangePicker").datepicker('remove');
					$(".startDateRangePicker").datepicker(start_options); 
					$(".endDateRangePicker").datepicker(end_options);
					$(".startDateRangePicker").datepicker('setDate', mTD(dd)+'/'+mTD(mm)+'/'+y).find('span').hide();
//					$(".endDateRangePicker").datepicker('setDate', mTD(dd+1)+'/'+mTD(mm)+'/'+y);
					$('#startEndDateRowId').show();
					$('#startEndDivId').show();
				}else{
					$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
					$('#sucMgsId').html(`<span class="glyphicon glyphicon-exclamation-sign"></span> Please add previous month defination first!`);
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
					$('#myModal').modal('show')
					$(_this).val('');
					$('#startEndDivId').hide();
					return false;
				}
			}
		}
		if(flag){
			if((year=='' || month=='')){
//				$('#startEndDateRowId,#startEndDivId').hide();
				$('#startEndDivId').hide();
				return false;
			}else{}
		
		}
	}
	function addRange(e){
		e.preventDefault();
		var postData = {
				"dateid":0,
				"startdate": $('#startDateId').val(),
				"enddate": $('#endDateId').val(),
				"month": $('#monthAdmin').val(),
				"year": $('#yearAdmin').val(),
				"producttype":$('#proTypIncId').val()
				}
		if($('#startDateId').val() == '' || $('#endDateId').val() == ''){
			$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
			$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
			$('#sucMgsId').html(`<span class="glyphicon glyphicon-exclamation-sign"></span> Please select end date! `);
			$('#sucMwFtrId').html('<div align="center">'+
			          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
			         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
			          				'</div>');
			$('#myModal').modal('show')
		}else{
			requestData(api.addPayout(),'POST',JSON.stringify(postData)).done(function(reply){
				if(reply.reply=='success'){
					$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
					$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Data saved successfully.');
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal" onclick="$_reloadWindow();">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
					$('#myModal').modal('show')
//					window.location.reload()
				}else{
					
				}
			});
		}
	}
	function mTD(n) {
		return (n < 10 ? '0' : '') + n;
	}