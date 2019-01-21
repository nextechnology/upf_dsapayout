var API_INVOICE_GET = '/upf-system-dsapayout/dsapayout/dsa/generateinvoice?dsacode='
	,API_INVOICEQRTR_GET = '/upf-system-dsapayout/dsapayout/dsa/quarterlyinvoice?dsacode='
	,API_INVOICE_POST = '/upf-system-dsapayout/dsapayout/dsa/getinvoicelist'
	,API_QRTR_POST = '/upf-system-dsapayout/dsapayout/dsa/quarterlyinvoice'
	,API_DSA_LIST = '/upf-system-dsapayout/dsapayout/dsa/dsaList'
	;
var fileName;
var DSACODE = "";
$(function(){
	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data
	});
	
	$(document).on('keypress','#searchBoxMnthId',function(){
		$('#searchBoxMnthId').autocomplete({
			source : function (request,response) {
				if($('#searchBoxMnthId').val() != " "){
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
					$('#searchBoxMnthId').val("");
                    return false;
                }else{
                	DSACODE = ui.item.label1;
	 			}
			}
		});
	});
	$(document).on('keypress','#searchBoxQrtrId',function(){
		$('#searchBoxQrtrId').autocomplete({
			source : function (request,response) {
				if($('#searchBoxQrtrId').val() != " "){
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
					$('#searchBoxQrtrId').val("");
                    return false;
                }else{
                	DSACODE = ui.item.label1;
	 			}
			}
		});
	});
	var dateYrOptn = '<option value="">Select Year</option>'
		for(i=(new Date()).getFullYear();i>=2000;i--){
			dateYrOptn += '<option>'+i+'</option>';
		}
		$('#slctInvYr').html(dateYrOptn);
		$('#slctInvQrtrYr').html(dateYrOptn);
		
		$(document).on('change','.qtrInvmntCls',function(){
			if($('input[name=invqtrmntrd]:checked').val() == "Month"){
				$('#invoiceQrtrRowId').hide();
				$('#invoiceInitRowId').show();
				$('#invoiceLstRowId').hide();
			}else if($('input[name=invqtrmntrd]:checked').val() == "Quarter"){
				$('#invoiceQrtrRowId').show();
				$('#invoiceInitRowId').hide();
				$('#invoiceLstRowId').hide();
			}
		});
		
		$(document).on('change','#prdctTypAccInvId,#prdctTypAccInvQrtrId',function(){
			if($(this).val() == "SBL"){
				$('input[name=invqtrmntrd][value=Quarter]').prop('disabled',true);
				$('input[name=invqtrmntrd][value=Month]').prop('checked',true);
			}else if($(this).val() == "UBL"){
				$('input[name=invqtrmntrd][value=Quarter]').prop('disabled',false);
			}else{
				$('input[name=invqtrmntrd]').prop('checked',false);
				$('#invoiceQrtrRowId').hide();
				$('#invoiceInitRowId').hide();
			}
			if($('input[name=invqtrmntrd]:checked').val() == "Month"){
				$('#invoiceQrtrRowId').hide();
				$('#invoiceInitRowId').show();
			}else if($('input[name=invqtrmntrd]:checked').val() == "Quarter"){
				$('#invoiceQrtrRowId').show();
				$('#invoiceInitRowId').hide();
			}
		});     
		
		$(document).on('click','.invLink',function(){
			 $('#srchMnthId').hide();
		     $('#srchQrtrId').hide();
			var id = $(this).attr('id').split('-')[1];
			var finalPath = ($('#pathId-'+id).text()).replace('/var/www/html/','');
		    fileName = 'http://'+window.location.hostname+'/'+finalPath; 
		    $("#dialog").dialog({
	            modal: true,
	            title: fileName.split('monthlyinvoice/')[1],  
	            width: 800,
	            height: 550,
	            resizable: false,
	            draggable: true,
	            open: function () {
	                var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"800px\" height=\"500px\">";
	                object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
	                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
	                object += "</object>";
	                object = object.replace(/{FileName}/g, fileName);
	                $("#dialog").html(object);
	                $('.ui-button-text').html('&times;');
	                $('button[role=button]').removeClass('ui-dialog-titlebar-close');
	                $('button[role=button]').addClass('ui-titlebar-close');
	                $('button[role=button]').addClass('pull-right');
	                $('div').removeClass('ui-widget-overlay');    
	            }
	        });
		});
		
		$(document).on('click','.ui-button',function(){
			$('#srchMnthId').show();
			$('#srchQrtrId').show();
		});
});

function $_invacnts(event){
	event.preventDefault();
	
	if($('input[name=invqtrmntrd]:checked').val() == "Quarter"){
		fileName = "";
			var tblData = '<table class="table table-bordered table-condensed">'+
			'<thead class="leftbgcolor">'+
			'<tr>'+
			'<td>Sr. No</td>'+
			'<td>Invoice</td>'+
			'<td>View</td>'+
			'</tr>'+
			'</thead>'+
			'<tbody id="invoiceListbdyId"></tbody>'+
			'</table>';
			$('#invoiceBoxId').html(tblData);
		var radVal = $('input[name=invqtrmntrd]:checked').val()
		var formData = {
				  "year" : radVal=="Month"?$('#slctInvYr').val():$('#slctInvQrtrYr').val(),
				  "month" : radVal=="Month"?$('#slctInvMnth').val():null,
				  "dsacode" : DSACODE==""?null:DSACODE,  
				  "productname" : $('#prdctTypAccInvQrtrId').val(),
				  "quarter":radVal=="Quarter"?$('#slctInvQrtrMnth').val():"none",
				}
		requestData(API_QRTR_POST, "POST" , JSON.stringify(formData)).done(function(invListRep){
			var count = 0;
			var tblRwData = "";
			if($.isEmptyObject(invListRep) || invListRep === null){
				tblRwData += '<tr align="center">'+
				'<td colspan="3">NO INVOICE FOUND</td>'+
				'</tr>';
			}else{
				$(invListRep).each(function(k,v){ ++count;
				tblRwData += '<tr>'+
					'<td>'+count+'</td>'+
					'<td>Invoice - '+count+'</td>'+
					'<td><a href='+v.invoicepath+' class="btn btn-primary invLink">Show</a></td>'+
					'</tr>';
				});
			}
			$('#invoiceLstRowId').show();
			$('#invoiceListbdyId').html(tblRwData);
		});
	
	}else if($('input[name=invqtrmntrd]:checked').val() == "Month"){
		fileName = "";
			var tblData = '<table class="table table-bordered">'+
			'<thead class="leftbgcolor">'+
			'<tr>'+
			'<td>Sr. No</td>'+
			'<td>Invoice No.</td>'+
//			'<td>Invoice</td>'+
			'<td>View</td>'+
			'</tr>'+
			'</thead>'+
			'<tbody id="invoiceListbdyId"></tbody>'+
			'</table>';
			$('#invoiceBoxId').html(tblData);
		var radVal = $('input[name=invqtrmntrd]:checked').val()
		var formData = {
				  "year" : radVal=="Month"?$('#slctInvYr').val():$('#slctInvQrtrYr').val(),
				  "month" : radVal=="Month"?$('#slctInvMnth').val():"none",
				  "dsacode" : DSACODE==""?null:DSACODE,
				  "productname" : $('#prdctTypAccInvId').val(),
				  "quarter":radVal=="Quarter"?$('#slctInvQrtrMnth').val():"none",
				}
		requestData(API_INVOICE_POST, "POST" , JSON.stringify(formData)).done(function(invListRep){
			var count = 0;
			var tblRwData = ""
			if($.isEmptyObject(invListRep) || invListRep === null){
					tblRwData += '<tr align="center">'+
					'<td colspan="3">NO INVOICE FOUND</td>'+
					'</tr>';
			}else{
			$(invListRep).each(function(k,v){++count;
				tblRwData += '<tr>'+
				'<td>'+count+'</td>'+
				'<td>'+v.invoiceno+'</td>'+
//				'<td>Invoice - '+count+'</td>'+
				'<td class="a-dis" id="pathId-'+count+'">'+v.invoicepath+'</td>'+
				'<td><button class="btn btn-primary invLink" id="btnIdPth-'+count+'">Show</button></td>'+
				'</tr>';  
			});
		}
			$('#invoiceLstRowId').show();
			$('#invoiceListbdyId').html(tblRwData);
		});
	
	}
}