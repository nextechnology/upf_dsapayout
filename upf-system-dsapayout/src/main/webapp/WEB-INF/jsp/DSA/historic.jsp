<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Historical Data</title>
<%@ page isELIgnored="false"%>
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
	href="/upf-system-dsapayout/resources/ui_content/plugins/bootstrapTable/bootstrap-table.css">
		<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
 <![endif]-->
</head>
<style>
.a-snaplft {
	text-align: left !important;
}
.a-dis{
display:none;
}
th, th:HOVER{
text-align: center !important;
cursor: pointer;
}
tr{
text-align: center !important;
}
tr > th{
vertical-align: middle !important;
}
.glyphicon-sort{
padding-top: 3px;
opacity:0.5;
font-size: 12px;
}
</style>
<body class="hold-transition skin-blue sidebar-collapse" style="background-color: #ECF0F5" id="bodyId">
	<div class="wrapper">
		<div id="appenId"></div>
		<div id="headerId"></div>
		<!-- <header class="main-header m-layer" id="headerId">
			<a href="/upf-system-dsapayout/upf/debitCredit/welcome" class="logo"> <span class="logo-lg">
					<img src="/upf-system-dsapayout/resources/ui_content/dist/img/KTlogo.png"
					class="m-KTBrandCls" alt="KapitalTech">
			</span>
			</a>
			<nav class="navbar navbar-static-top" role="navigation">
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
					role="button"> <span class="sr-only">Toggle navigation</span>
				</a>
				<div class="" align="center">
					<ul class="nav navbar-nav">
						<li id="liIdHead"><a><b>Historical Data</b></a></li>
					</ul>
				</div>
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<li><a href="javascript:void(0);" id="userNameHeadId"></a></li>
						<li><a href="javascript:void(0);"><span id="chngPassId">Change Password</span></a></li>
						<li><a href="#">Logout</a></li>
						<li class="dropdown user user-menu"><a href="#"
							class="dropdown-toggle" data-toggle="dropdown"> <span
								id="userNameHeadId" class="hidden-xs"></span> <span
								id="loginRoleNameId" class="hidden-xs"
								style="padding-left: 5px;"></span>
						</a>
							<ul class="dropdown-menu">
								User image
								Menu Body
								Menu Footer
								<li class="user-footer">
									<div class="pull-left">
										<a href="javascript:void(0);"
											onclick="$_modalCall('btnModalChngPswd');"
											class="btn btn-default">Change Password</a>
									</div>

									<div class="pull-right">
										<a href="#" class="btn btn-danger" onclick="$_logout();">Log
											out</a>
									</div>
								</li>
							</ul></li>
					</ul>
				</div>
			</nav>
		</header> -->

		<aside class="main-sidebar m-layer">
			<section class="sidebar">
				<ul class="sidebar-menu">
					<li class="header">Application List</li>
					<li><a href="#"><span>GK - Web</span></a></li>
					<li><a href="#"><span>GK - 2</span></a></li>
					<li><a href="#"><span>Dexter - 2</span></a></li>
					<li class="active"><a href="/upf-system-dsapayout/upf/debitCredit/camui"><span>Cam
								UI</span></a></li>
					<li class="treeview"><a href="#"><span>File Uploads</span>
							<span class="pull-right-container"> <i
								class="fa fa-angle-left pull-right"></i>
						</span> </a>
						<ul class="treeview-menu">
							<li><a href="/upf-system-dsapayout/upf/debitCredit/uploadex"><i
									class="fa fa-circle-o"></i> Upload Excel</a></li>
							<li><a href="/upf-system-dsapayout/upf/debitCredit/uploadst"><i
									class="fa fa-circle-o"></i> Upload Status</a></li>
						</ul></li>
				</ul>
			</section>
		</aside>
		<div class="content-wrapper" id="mainBodyId">
			<section class="content">
				<div class="container">
					<form onsubmit="$_searchSbmt(event);">
					<div class="row col-md-offset-1">
					<div class="col-md-2">
						<select id="proTypHisId" class="form-control" required>
					    	<option value="">Product Type</option>
					    	<option value="UBL">BL</option>
					    	<option value="SBL">SBL</option>
					    	</select>  
					</div>
					<div class="col-md-2"> 
						<select id="yearAdmin" class="form-control">
						
						</select>
					</div>
					<div class="col-md-2">
						<select id="monthAdmin" class="form-control">
						<option value="">Select Month</option>
						
						<option value="January">January</option>
						<option value="February">February</option>
						<option value="March">March</option>
						<option value="April">April</option>
						
						<option value="May">May</option>
						<option value="June">June</option>
						<option value="July">July</option>
						<option value="August">August</option>
						
						<option value="September">September</option>
						<option value="October">October</option>
						<option value="November">November</option>
						<option value="December">December</option>
						</select>
					</div>
					<div class="col-md-2">
						<select id="roleAdmin" class="form-control" disabled>
							<option>DSA</option>
						</select>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" class="form-control" id="searchBoxCstMntgId"
								placeholder="DSA Code"> <span class="input-group-btn">
								<button type="submit" id="searchBtnCstMntgId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
					<div class="col-md-2">
						
					</div>
					</div> 
					</form>
				</div>
				<div class="row a-dis" style="padding-top:30px;" id="pieChartRowId">
					    <div class="col-md-3">
         					 
      					</div>
      					<div class="col-md-6">
         					 <div class="box box-primary">
              					<div class="box-body">
									<canvas id="pieChartId"></canvas>
          						</div>
       						 </div>
      					</div>
      					<div class="col-md-3">
         					 
      					</div>
				</div>
				<div>
					<div class="row" style="padding-top:20px;">
						<div class="col-xs-12">
							<form id="CstMtngFrmId" class="a-dis">
								<table class="sortable table table-striped table-bordered" id="costMainTblId" style="width:1850px; background:#fff;">
									<thead>
										<tr style="align:center;background-color:#ffb375;" class="a-dis">
										<td>COUNT</td>
										<td></td>
										<td class="dsaYearDis"></td>
										<td class="dsaMonthDis"></td>
										<td></td>
										<td></td>
										<td class="dsaCodeDis"></td>
										<td class="dsaNameDis"></td>
										
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td></td>
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td class="cntAppMisCls"></td>
										<td></td>
										<td></td>
										<td></td>
										</tr>
										<tr style="align:center;background-color:#ffb375;" class="a-dis">
										<td>SUM</td>
										<td></td>
										<td class="dsaYearDis"></td>
										<td class="dsaMonthDis"></td>
										<td></td>
										<td></td>
										<td class="dsaCodeDis"></td>
										<td class="dsaNameDis"></td>
										
										<td id="sanctioned_amount_total"></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td id="finalpayoutamount_total"></td>
										<td></td>
										<td id="int_amount_total"></td>
										<td></td>
										<td id="pfamounttotal"></td>
										<td></td>
										<td></td>
										<td></td>
										</tr>
										<tr style="align:center;background-color:#ffb375;" class="a-dis">
										<td>AVERAGE</td>
										<td></td>
										<td class="dsaYearDis"></td>
										<td class="dsaMonthDis"></td>
										<td></td>
										<td></td>
										<td class="dsaCodeDis"></td>
										<td class="dsaNameDis"></td>
										
										<td id="sancamnavgId"></td>
										<td id="defPyRtAvgId"></td>
										<td id="subAvgId"></td>
										<td id="avgnetpayrate"></td>
										<td></td>
										<td id="finalPayAvgId"></td>
										<td id="avgroi"></td>
										<td id="intAmntAvgId"></td>
										<td id="avgpf"></td>
										<td id="pfAmntAvgId"></td>
										<td></td>
										<td></td>
										<td></td>
										</tr>
										<tr class="leftbgcolor">
											<th onclick="sortTable(3);">S NO<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(4);" style="min-width: 85px">Location<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(5);" class="dsaYearDis">Year<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(6);" class="dsaMonthDis">Month<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(7);">Company Name<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(8);">Sales Manager<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(9);" class="dsaCodeDis">DSA Code<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(10);" class="dsaNameDis">DSA<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<!-- <th onclick="sortTable(9);">Status</th> -->
											<th onclick="sortTable(11);">Sanctioned Amount<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(12);">Defined Pay Rate<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(13);">Subvention<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(14);">Net Pay Rate<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(15);">Include (Yes/No)<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(16);">Final Payout Amount<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(17);">ROI<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(18);">Interest Amount<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(19);">PF<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(20);">PF Amount<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(21);">Frequency<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(22);">LOS Id<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(23);">Payment Done<span class="glyphicon glyphicon-sort pull-right"></span></th>
										</tr>
									</thead>
									<tbody id="CstMtngTbBdyId">
											<!-- <tr>
											<td id="dsadetailsid" class="a-dis"></td>
											<td id="srNoCstMng-1"></td>
											<td id="lctnCstMngId-1"></td>
											<td id="mnthCstMngId-1"></td>
											<td id="cmpNmCstMngId-1"></td>
											<td id="slsMngrCstMngId-1"></td>
											<td id="dsaCstMngId-1"></td>
											<td id="stsCstMngId-1"></td>
											<td id="sancAmntCstMngId-1"></td>
											<td id="defPyRtCstMngId-1"></td>
											<td>
											<input id="subventCstMngId-1" type="text" class="form-control subvntnCalCls" required>
											</td>
											<td id="netPayRteCstMngId-1"></td>
											<td>
											<select id="includeCstMngId-1" class="form-control slctIncCls" required>
											<option></option>
											<option>YES</option>
											<option>NO</option>
											</select>
											</td>
											<td id="fnlPayAmntCstMngId-1"></td>
											<td id="rteOfIntCstMngId-1"></td>
											<td id="intAmntCstMngId-1"></td>
											<td id="pfCstMngId-1"></td>
											<td id="pfAmntCstMngId-1"></td>
											<td id="losCstMngId-1"></td>
											</tr>
											<tr>
											<td id="dsadetailsid" class="a-dis"></td>
											<td id="srNoCstMng-2"></td>
											<td id="lctnCstMngId-2"></td>
											<td id="mnthCstMngId-2"></td>
											<td id="cmpNmCstMngId-2"></td>
											<td id="slsMngrCstMngId-2"></td>
											<td id="dsaCstMngId-2"></td>
											<td id="stsCstMngId-2"></td>
											<td id="sancAmntCstMngId-2"></td>
											<td id="defPyRtCstMngId-2"></td>
											<td>
											<input id="subventCstMngId-2" type="text" class="form-control subvntnCalCls" required>
											</td>
											<td id="netPayRteCstMngId-2"></td>
											<td>
											<select  id="includeCstMngId-2" class="form-control slctIncCls" required>
											<option></option>
											<option>YES</option>
											<option>NO</option>
											</select>
											</td>
											<td id="fnlPayAmntCstMngId-2"></td>
											<td id="rteOfIntCstMngId-2">21.00</td>
											<td id="intAmntCstMngId-2"></td>
											<td id="pfCstMngId-2"></td>
											<td id="pfAmntCstMngId-2"></td>
											<td id="losCstMngId-2"></td>
											</tr> -->
									</tbody>
								</table>
								<!-- <div align="center">
									<table>
										<tr>
											<td><button type="button" id="finalSbmtId" class="btn btn-success" onclick="$_actualSbmt();">Submit</button></td>
										</tr>
									</table>
								</div> -->
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>          
	</div>
	
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
	<script src="/upf-system-dsapayout/resources/ui_content/plugins/canvas/canvasjs.min.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/historic.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/plugins/bootstrapTable/sortable.js"></script>
	<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script> 
</body>
</html> 