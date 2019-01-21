<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Payout Master</title>
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/datatables/dataTables.bootstrap.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/select2/select2.min.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/datepicker/datepicker3.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/dist/css/scrypt.css">
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/jQuery/jquery.mCustomScrollbar.css">
	<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/toastr/toastr.min.css">
		<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
 <style>
.a-dis{
display:none !important;
} 
.a-tcenter{
text-align:center;
}
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    border-top: 1px solid #f4f4f4;
}
.box-header {
margin-top:10px !important;
padding : 0px !important;
}
.a-color{
color:red;
}
input::placeholder {
  color: #a09d9d !important;
}
.glyphicon-ok-circle{
color:green !important;
padding-right:10px;
}
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId" style="background-color:#ecf0f5 !important;">
	
	<div class="wrapper">
	<div id="headerId"></div>
<!-- 	<header class="main-header m-layer" id="headerId">
			<a href="/upf-system/upf/debitCredit/welcome" class="logo"> <span class="logo-lg">
					<img src="/upf-system/resources/ui_content/dist/img/KTlogo.png"
					class="m-KTBrandCls" alt="KapitalTech">
				</span>
			</a>

			<nav class="navbar navbar-static-top" role="navigation">
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
					role="button"> <span class="sr-only">Toggle navigation</span>
				</a>
				<div class="" align="center">
					<ul class="nav navbar-nav">
						<li id="liIdHead"><a><b>Payout Master</b></a></li>
					</ul>
				</div> 
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<li><a href="javascript:void(0);" id="userNameHeadId"></a></li>
						<li><a href="javascript:void(0);"><span id="chngPassId">Change Password</span></a></li>
						<li><a href="#">Logout</a></li>
						<li class="dropdown user user-menu">
           		 <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              
              <span id="userNameHeadId" class="hidden-xs"></span>
              <span id="loginRoleNameId" class="hidden-xs" style="padding-left:5px;"></span>
            </a>
            <ul class="dropdown-menu">
              User image
              
              Menu Body
             
              Menu Footer
              <li class="user-footer">
                <div class="pull-left">
                  <a href="javascript:void(0);" onclick="$_modalCall('btnModalChngPswd');" class="btn btn-default">Change Password</a>
                </div>
                
                <div class="pull-right">
                  <a href="#" class="btn btn-danger" onclick="$_logout();">Log out</a>
                </div>
              </li>
            </ul>
          </li>
					</ul>
				</div>
			</nav>
		</header> -->
		
		
   <div class="content-wrapper" id="mainUserBodyId">
	<section class="content">
    	<div class="row">
    	<div class="col-md-5"></div>
    	<div class="col-md-2">
    	<select id="proTypIncId" class="form-control">
    	<option value="">Select Product Type</option>
    	<option value="BL">BL</option>
    	<option value="SBL">SBL</option>
    	</select>  
    	</div>
    	<div class="col-md-5"></div>
    	</div>
    	
    	<div class="row" id="blDivRowId"style="padding-top:30px;display:none;">
    	<form onsubmit="$_blPost(event)">
    		<div class="col-md-2"></div>   
    		<div class="col-md-8" style="background-color:#fff;padding-top:20px;">
    		<div align=center style="padding-bottom:15px;"><b style="font-size:18px;">BUSINESS LOAN</b></div>
    			<table class="table table-bordered table-condensed">
							<thead>
								<tr  class="leftbgcolor">
								<td>Disbursal in Cr.</td>
								<td>Min Files Disbursed</td>
								<td>Monthly Payout (%)</td>
								</tr>
							</thead>
							<tbody>
									<tr>
									<td id="blincentiveId" class="a-dis"></td>
									</tr>
									<tr class="a-center">
									<td id="monthlyslabid-1" class="a-dis"></td>
									<td id="disbursalincr-1">0.1 to 0.50</td>
									<td><input type="text" class="form-control" id="minFileDis-1" required="required" pattern="[0-9]+"></td>
									<td><input type="text" class="form-control" id="mnthPayout-1" required="required" pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									</tr>	
									
									<tr class="a-center">
									<td id="monthlyslabid-2" class="a-dis"></td>
									<td  id="disbursalincr-2">0.51 to 1</td>
									<td><input type="text" class="form-control" id="minFileDis-2" required="required" pattern="[0-9]+"></td>
									<td><input type="text" class="form-control" id="mnthPayout-2" required="required" pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									</tr>	
									
									<tr class="a-center">
									<td id="monthlyslabid-3" class="a-dis"></td>
									<td id="disbursalincr-3">> 1</td>
									<td><input type="text" class="form-control" id="minFileDis-3" required="required" pattern="[0-9]+"></td>
									<td><input type="text" class="form-control" id="mnthPayout-3" required="required" pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									</tr>			
							</tbody>
						</table>
						<div class="row a-dis">
							<div class="col-md-2"></div>
						<div class="col-md-8">
							<table class="table table-bordered table-condensed">
							<thead>
								<tr  class="leftbgcolor">
								<td>Disbursal in Cr.</td>
								<td>Quaterly Slab (%)</td>
							<!-- 	<td>Qualifying Criteria</td> -->
								</tr>
							</thead>
							<tbody>
									<tr class="a-center">
									<td id="quarterlyslabid-1" class="a-dis"></td>
									<td id="disbursalincr-4">1.25 - 2.24</td>
									<td><input type="text" class="form-control" id="qtrlySlbId-1" required="required"  pattern="[0-9]+(\.[0-9]{0,2})?"></td>
								<!-- 	<td><input type="text" class="form-control" id="qlfCritId-1" required="required"></td> -->
									</tr>	
									
									<tr class="a-center">
									<td id="quarterlyslabid-2" class="a-dis"></td>
									<td id="disbursalincr-5">2.25 - 3</td>
									<td><input type="text" class="form-control" id="qtrlySlbId-2" required="required"  pattern="[0-9]+(\.[0-9]{0,2})?"></td>
								<!-- 	<td><input type="text" class="form-control" id="qlfCritId-2" required="required"></td> -->
									</tr>	
									
									<tr class="a-center">
									<td id="quarterlyslabid-3" class="a-dis"></td>
									<td id="disbursalincr-6">> 3</td>
									<td id="renewalsid" class="a-dis"></td>
									<td><input type="text" class="form-control" id="qtrlySlbId-3" required="required" pattern="[0-9]+(\.[0-9]{0,2})?"></td>
								<!-- 	<td><input type="text" class="form-control" id="qlfCritId-3" required="required"></td> -->
									</tr>			
							</tbody>
						</table>
						</div>
						<div class="col-md-2"></div>
						</div>
								
						<div class="row a-dis">
							<div class="col-md-2"></div>
						<div class="col-md-8">
						<table class="table table-bordered table-condensed">
							<thead>
								<tr class="leftbgcolor">
								<td>Instance Of Renewal</td>
								<td>Payout Percentage (%)</td>
								</tr>
							</thead>
							<tbody>
									<tr class="a-center">
									<td id="renewalsid" class="a-dis"></td>
									<td id="frstRenwId-1">1st Renewal</td>
									<td><input type="text" class="form-control" id="frstRenwId-2" required="required"  pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									</tr>	
							</tbody>
						</table>
						</div>
						<div class="col-md-2"></div>
						</div>
						<div align="center" style="padding-bottom:15px;">
						<button type="submit" class="btn btn-success" id="btnBlSubmitId">Submit</button>
						</div>
    		</div>
    		<div class="col-md-2"></div>
    		</form>
    	</div>
    	<div class="row" id="sblDivRowId" style="padding-top:25px;display:none;">
    		<div class="col-md-3"></div>
    		<div class="col-md-6" style="background-color:#fff;padding-top:20px;">
    		<div align=center style="padding-bottom:15px;"><b style="font-size:18px;">SMALL BUSINESS LOAN</b></div>
    			<form onsubmit="$_sblpost(event);">
    			<table class="table table-bordered table-condensed">
    				<thead align="center">
    				<tr class="leftbgcolor">
    					<td>Disbursements in Lacs</td>
    					<td>Monthly Slab (%)</td>
       				</tr>
    				</thead>
    				<tbody align="center">
    				<tr>
    					<td id="sblHidIncId-1" class="a-dis"></td>
    					<td id="disbursementId-1"></td>
    					<td><input type="text" class="form-control" id="monthSblId-1" required pattern="[0-9]+(\.[0-9]{0,2})?"></td>
    				</tr>
    				<tr>
    				<td id="sblHidIncId-2" class="a-dis"></td>
    					<td id="disbursementId-2"></td>
    					<td><input type="text" class="form-control" id="monthSblId-2" required pattern="[0-9]+(\.[0-9]{0,2})?"></td>
    				</tr>
    				<tr>
    				<td id="sblHidIncId-3" class="a-dis"></td>
    				<td id="disbursementId-3"></td>
    				<td><input type="text" class="form-control" id="monthSblId-3" required pattern="[0-9]+(\.[0-9]{0,2})?"></td>
    				</tr>	
       				<tr>
       				<td id="sblHidIncId-4" class="a-dis"></td>
       				<td id="disbursementId-4"></td>
       				<td><input type="text" class="form-control" id="monthSblId-4" required pattern="[0-9]+(\.[0-9]{0,2})?"></td>
       				</tr>
    				<tr>
    				<td id="sblHidIncId-5" class="a-dis"></td>
       				<td id="disbursementId-5"></td>
       				<td><input type="text" class="form-control" id="monthSblId-5" required pattern="[0-9]+(\.[0-9]{0,2})?"></td>
       				</tr>
    				</tbody>
    			</table>
    			<div align="center" style="padding-bottom:15px;">
						<button type="submit" class="btn btn-success" id="sblSbmtId">Submit</button>
						</div>
    			</form>
    		</div>
    		<div class="col-md-3"></div>
    	</div>
    </section>
	</div>
	 <footer class="main-footer" id="footer" style="background:#ECF0F5;border-top: 0px solid #ECF0F5;"></footer>
	</div>
	
	  <!-- Modal -->
  <button type="button" class="btn btn-info btn-lg a-dis" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" id="sucModalWindId"></button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog" style="height:350px;width:400px;">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" style="background-color:#9ffc85; color:#000;padding:9px !important;">
          <button type="button" class="close" data-dismiss="modal"></button>
          <h4 class="modal-title"><b>Success</b></h4>
        </div>
        <div class="modal-body">
          <h4 style="text-align:center;"><span id="sucMgsId"></span></h4>
        </div>
        <div class="modal-footer" style="padding:7px !important;">
          <div align="center">
          <button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal">OK</button>
          <button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
      
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
<script
		src="/upf-system/resources/ui_content/plugins/jQuery/jquery-2.2.3.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/ajax/ajax-1.12.0.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/jQuery/jquery.mCustomScrollbar.concat.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/bootstrap/js/bootstrap.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/jQueryUI/jquery-ui.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/select2/select2.full.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/datepicker/bootstrap-datepicker.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/datatables/jquery.dataTables.min.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/datatables/dataTables.bootstrap.min.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/forAll.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/scrypt.js"></script>
	<script
		src="/upf-system/resources/ui_content/plugins/boottag/boottag-1.0.7.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/camUI/forAll.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/camUI/itr.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/bankSummary.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/stressTest.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/qualitative.js"></script>
	<script
		src="/upf-system/resources/ui_content/dist/js/camUI/snapShot.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/LOS/forAllLos.js"></script>
<script src="/upf-system/resources/ui_content/plugins/bootstrap.filestyle/js/bootstrap-filestyle.min.js"></script>
<script src="/upf-system/resources/ui_content/plugins/toastr/toastr.min.js"></script>
<script type="text/javascript">
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
</script>
</body>
</html>