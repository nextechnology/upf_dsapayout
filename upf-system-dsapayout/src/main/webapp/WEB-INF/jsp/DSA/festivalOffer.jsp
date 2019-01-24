<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Festival Offer</title>
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/plugins/datatables/dataTables.bootstrap.css">
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/plugins/select2/select2.min.css">
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/plugins/datepicker/datepicker3.css">
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/dist/css/scrypt.css">
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/plugins/jQuery/jquery.mCustomScrollbar.css">
	<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/plugins/toastr/toastr.min.css">
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
.loadingoverlay {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh; /* to make it responsive */
	width: 100vw; /* to make it responsive */
	overflow: hidden; /*to remove scrollbars */
	z-index: 99999; /*to make it appear on topmost part of the page */
	display: none; /*to make it visible only on fadeIn() function */
	text-align: center;
	background-color: black;
	opacity: 0.7;
	color: white;
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
				<div class="row col-md-offset-2">

					<div class="col-md-3">
						<select id="proTypIncId" class="form-control" oninput="renStartEnd();">
							<option value="">Select Product Type</option>
							<option value="BL">BL</option>
							<option value="SBL">SBL</option>
						</select>
					</div>
					<div class="col-md-3">
						<select id="yearAdmin" class="form-control" required="required" oninput="renStartEnd();">

						</select>
					</div>
					<div class="col-md-3">
						<select id="monthAdmin" class="form-control" required="required" oninput="renStartEnd();">
							<option value="">Select Month</option>

							<option value="01">January</option>
							<option value="02">February</option>
							<option value="03">March</option>
							<option value="04">April</option>

							<option value="05">May</option>
							<option value="06">June</option>
							<option value="07">July</option>
							<option value="08">August</option>

							<option value="09">September</option>
							<option value="10">October</option>
							<option value="11">November</option>
							<option value="12">December</option>
						</select>
					</div>
					<!-- <div class="col-sm-3">
						<button type="submit" id="searchBtnCstMntgId" class="btn btn-info">
							<i class="glyphicon glyphicon-search"><span style="font-size: 16px;"></span></i>
						</button>
					</div> -->
				</div>
				<!-- <div class="row  col-md-offset-4" id="startEndDateRowId" style="padding-top: 15px;display:none;">
					<div class="col-sm-3">
						<div class=" input-group input-append date startDateRangePicker">
							<input class="form-control readonly" type="text" id="startDateId" required
								placeholder="Start Date" disabled="disabled"
								pattern="[0-9]{2}[-|/]{1}[0-9]{2}[-|/]{1}[0-9]{4}"><span
								class="highlight"></span> <span class="input-group-addon add-on"><i
								class="fa fa-calendar"></i></span>
						</div>
					</div>
					<div class="col-sm-3">
						<div class=" input-group input-append date endDateRangePicker">
							<input class="form-control readonly" type="text" id="endDateId" required
								placeholder="End Date" disabled="disabled"
								pattern="[0-9]{2}[-|/]{1}[0-9]{2}[-|/]{1}[0-9]{4}"><span
								class="highlight"></span> <span class="input-group-addon add-on"><i
								class="fa fa-calendar"></i></span>
						</div>
					</div>
				</div> -->

				<div class="row" id="blDivRowId" style="padding-top:30px;display:none;">
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
<!--old 						<div class="row a-dis">
							<div class="col-md-2"></div>
						<div class="col-md-8">
							<table class="table table-bordered table-condensed">
							<thead>
								<tr  class="leftbgcolor">
								<td>Disbursal in Cr.</td>
								<td>Quaterly Slab (%)</td>
								<td>Qualifying Criteria</td>
								</tr>
							</thead>
							<tbody>
									<tr class="a-center">
									<td id="quarterlyslabid-1" class="a-dis"></td>
									<td id="disbursalincr-4">1.25 - 2.24</td>
									<td><input type="text" class="form-control" id="qtrlySlbId-1" required="required"  pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									<td><input type="text" class="form-control" id="qlfCritId-1" required="required"></td>
									</tr>	
									
									<tr class="a-center">
									<td id="quarterlyslabid-2" class="a-dis"></td>
									<td id="disbursalincr-5">2.25 - 3</td>
									<td><input type="text" class="form-control" id="qtrlySlbId-2" required="required"  pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									<td><input type="text" class="form-control" id="qlfCritId-2" required="required"></td>
									</tr>	
									
									<tr class="a-center">
									<td id="quarterlyslabid-3" class="a-dis"></td>
									<td id="disbursalincr-6">> 3</td>
									<td id="renewalsid" class="a-dis"></td>
									<td><input type="text" class="form-control" id="qtrlySlbId-3" required="required" pattern="[0-9]+(\.[0-9]{0,2})?"></td>
									<td><input type="text" class="form-control" id="qlfCritId-3" required="required"></td>
									</tr>			
							</tbody>
						</table>
						</div>
						<div class="col-md-2"></div>
						</div> -->
<!-- 	old							
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
						</div> -->
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
		src="/upf-system-dsapayout/resources/ui_content/plugins/jQuery/jquery-2.2.3.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/ajax/ajax-1.12.0.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/jQuery/jquery.mCustomScrollbar.concat.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/bootstrap/js/bootstrap.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/jQueryUI/jquery-ui.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/select2/select2.full.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/datepicker/bootstrap-datepicker.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/datatables/jquery.dataTables.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/datatables/dataTables.bootstrap.min.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/forAll.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/scrypt.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/boottag/boottag-1.0.7.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/forAll.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/itr.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/bankSummary.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/stressTest.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/qualitative.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/snapShot.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/forAllLos.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/festivalOffer.js"></script>
<script src="/upf-system-dsapayout/resources/ui_content/plugins/bootstrap.filestyle/js/bootstrap-filestyle.min.js"></script>
<script src="/upf-system-dsapayout/resources/ui_content/plugins/toastr/toastr.min.js"></script>
<script type="text/javascript">
	
</script>
<div class="loadingoverlay"></div>
</body>
</html>