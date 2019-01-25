<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Offer Months</title>
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
<link
	href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css"
	rel="stylesheet" />
<script
	src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
<style>
.a-dis {
	display: none !important;
}

.a-tcenter {
	text-align: center;
}

.table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td,
	.table>tbody>tr>td, .table>tfoot>tr>td {
	border-top: 1px solid #f4f4f4;
}

.box-header {
	margin-top: 10px !important;
	padding: 0px !important;
}

.a-color {
	color: red;
}

input::placeholder {
	color: #a09d9d !important;
}

.glyphicon-ok-circle {
	color: green !important;
	padding-right: 10px;
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
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId"
	style="background-color: #ecf0f5 !important;">

	<div class="wrapper">
		<div id="headerId"></div>

		<div class="content-wrapper" id="mainUserBodyId">
			<section class="content">
				<form onsubmit="addRange(event);">
					<div class="row">
						<div class="col-md-5"></div>
						<div class="col-md-2">
							<select id="proTypIncId" class="form-control">
								<option value="">Select Product Type</option>
								<option value="BL">BL</option>
								<option value="SBL">SBL</option>
							</select>
						</div>
					</div>
					<div id="startEndDateRowId" class="row col-md-offset-2"
						style="padding-top: 15px; display: none;">
						<div class="col-md-2">
							<select id="yearAdmin" class="form-control" required="required"
								oninput="renStartEnd(this);">

							</select>
						</div>
						<div class="col-md-2">
							<select id="monthAdmin" class="form-control" required="required"
								oninput="renStartEnd(this);">
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
						<div id = "startEndDivId" style="display: none;">
							<div class="col-sm-2">
								<div class=" input-group input-append date startDateRangePicker">
									<input class="form-control readonly" type="text"
										id="startDateId" required placeholder="Start Date"
										disabled="disabled"
										pattern="[0-9]{2}[-|/]{1}[0-9]{2}[-|/]{1}[0-9]{4}"><span
										class="highlight"></span> <span
										class="input-group-addon add-on"><i
										class="fa fa-calendar"></i></span>
								</div>
							</div>
							<div class="col-sm-2">
								<div class=" input-group input-append date endDateRangePicker">
									<input class="form-control readonly" type="text" id="endDateId"
										required placeholder="End Date" disabled="disabled"
										pattern="[0-9]{2}[-|/]{1}[0-9]{2}[-|/]{1}[0-9]{4}"><span
										class="highlight"></span> <span
										class="input-group-addon add-on"><i
										class="fa fa-calendar"></i></span>
								</div>
							</div>
							<div class="col-sm-2">
								<button type="submit" id="addBtnId" class="btn btn-success">
									<span style="font-size: 16px;">Add Month</span>
								</button>
							</div>
						</div>
						
					</div>

				</form>

				<div class="row" id="blDivRowId"
					style="padding-top: 30px; display: none;">
					<div class="col-md-2"></div>
					<div class="col-md-8"
						style="background-color: #fff; padding-top: 20px;">
						<div align=center style="padding-bottom: 15px;">
							<b style="font-size: 18px;">OFFER MONTHS DETAILS</b>
						</div>
						<table class="table table-bordered table-condensed">
							<thead>
								<tr class="leftbgcolor">
									<td>Month-Year</td>
									<td>Start Date</td>
									<td>End Date</td>
								</tr>
							</thead>
							<tbody id="monthYearTblId">

							</tbody>
						</table>
					</div>
					<div class="col-md-2"></div>
				</div>
			</section>
		</div>
		<footer class="main-footer" id="footer"
			style="background: #ECF0F5; border-top: 0px solid #ECF0F5;"></footer>
	</div>

	<!-- Modal -->
	<button type="button" class="btn btn-info btn-lg a-dis"
		data-toggle="modal" data-target="#myModal" data-backdrop="static"
		data-keyboard="false" id="sucModalWindId"></button>
	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog" style="height: 350px; width: 400px;">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header"
					style="background-color: #9ffc85; color: #000; padding: 9px !important;">
					<button type="button" class="close" data-dismiss="modal"></button>
					<h4 class="modal-title">
						<b>Success</b>
					</h4>
				</div>
				<div class="modal-body">
					<h4 style="text-align: center;">
						<span id="sucMgsId"></span>
					</h4>
				</div>
				<div class="modal-footer" style="padding: 7px !important;">
					<div align="center">
						<button type="button" class="btn btn-primary" id="doneMsgOkId"
							data-dismiss="modal">OK</button>
						<button type="button" class="btn btn-default msgCLoseCls a-dis"
							data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"></script>
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
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/forAll.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/scrypt.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/boottag/boottag-1.0.7.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/forAll.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/itr.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/bankSummary.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/stressTest.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/qualitative.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/snapShot.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/forAllLos.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/offerMonths.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/bootstrap.filestyle/js/bootstrap-filestyle.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/plugins/toastr/toastr.min.js"></script>
	<script type="text/javascript">
	
</script>
	<div class="loadingoverlay"></div>
</body>
</html>