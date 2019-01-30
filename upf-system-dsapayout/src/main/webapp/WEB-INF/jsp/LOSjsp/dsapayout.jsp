<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>DSA Payout</title>
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
<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/blitzer/jquery-ui.css" rel="stylesheet" type="text/css" />
	<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>	
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
 <style>
 
.a-tcenter{
text-align:center;
}
.a-dis,.canvasjs-chart-credit{
display:none; !important;
}
.a-color{
color:red;
}
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    border-top: 0px solid #f4f4f4;
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

</head>
<body class="hold-transition skin-blue sidebar-collapse" style="background-color:#ecf0f5 !important;">
	<span class="a-dis" id="dsaCodeId"></span>
	<div class="wrapper" >
	<div id="headerId"></div>
	<!-- <header class="main-header m-layer" id="headerId">
			<a href="/upf-system-dsapayout/upf/debitCredit/welcome" class="logo"> <span class="logo-lg">
					<img src="/upf-system-dsapayout/resources/ui_content/dist/img/KTlogo.png"
					class="m-KTBrandCls" alt="KapitalTech">
				</span>
			</a>

			<nav class="navbar navbar-static-top" role="navigation" style="width:1750px;"> 
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
					role="button"> <span class="sr-only">Toggle navigation</span>
				</a>
				<div class="" align="center">
					<ul class="nav navbar-nav">
						<li id="liIdHead"><a><b>DSA Payout</b></a></li>
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
	
	<div id="bodyId"></div>
		
   <div class="content-wrapper">
	<section class="content">
		<div class="containr">
					<div class="col-md-7 pull-right" style="padding-bottom:20px;">
						<div class="input-group">
							<input type="text" class="form-control" id="dsaCodePayot"
								placeholder="Search by Company Name, DSA Code, Company PAN, State, City" autocomplete="off"> <span class="input-group-btn">
								<button type="button" id="searchBtnId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
	 <div class="container" align="center" id="welcmMsgId">
    		<h1> Welcome !!! </h1>
    </div>
      <div class="row a-dis" id="payOutRowId">
        <div class="col-md-5">
          <div class="box box-primary">
        <!-- <div class="box-header with-border">
        
              <h3 class="box-title">Access Assign To Role</h3>
            </div> -->
           
              <div class="box-body">
				<div id="payoutId">
             		<div class="row">
             		<div class="col-md-4">
             		<select id="dsaProTypId" class="form-control payoutCls">
             		<option value="">Product Type</option>
             		<option value="UBL">BL</option>
             		<option value="SBL">SBL</option>
             		</select>
					</div>  
             		<div class="col-md-3">
					<label><input type="radio" class="qtrmntCls payoutCls" name="qtrmntrd" value="Month"><span style="padding-left:20px;">By Month</span></label>
             		</div>
             		<div class="col-md-3 a-dis"  id="qrtrlyRadColId">
             		<label><input type="radio" class="qtrmntCls payoutCls" name="qtrmntrd"  value="Quarter"><span style="padding-left:20px;">By Quarter</span></label>
             		</div>
             		<div class="col-md-2">
					</div>
             		</div>
          
             		<div class="row a-dis" style="padding-top:30px;"  id="mnthDivId">
             		<div class="col-md-2">
					<span>By Year<span class="a-color">*</span>:</span>
					</div>
             		<div class="col-md-4">
					<select class="form-control payoutCls" id="byYearMnth">
					
					</select>
             		</div>
             		<div class="col-md-2">
             		<span>By Month<span class="a-color">*</span>:</span>
             		</div>
             		<div class="col-md-4">
					<select class="form-control payoutCls" id="byMnthMnth">
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
             		</div>
             		
             		<div class="row a-dis" style="padding-top:30px;" id="qrtrDivId">
             		<div class="col-md-2">
					<span>By Year<span class="a-color">*</span>:</span>
					</div>
             		<div class="col-md-4">
					<select class="form-control payoutCls" id="byYearQrtr">
					
					
					</select>
             		</div>
             		<div class="col-md-2">
             		<span>By Quarter<span class="a-color">*</span>:</span>
             		</div>
             		<div class="col-md-4">
					<select class="form-control payoutCls" id="byQrtrQtr">
					<option value="">Select Quarter</option>
					<option value="Q1">Apr - Jun</option>
					<option value="Q2">Jul - Sep</option>
					<option value="Q3">Oct - Dec</option>
					<option value="Q4">Jan - Mar</option>
					</select>
             		</div>
             		</div>
             		<div id="fnlShwFpyAmntId" class="a-dis">
             		<div class="row" style="padding-top:20px;padding-left:150px;" align="center"> 
             			<div class="col-md-4">
             				<span>Final Payout Total</span>
             			</div>
             			<div class="col-md-4">
             			<input type="text" class="form-control" id="finlPyOtTtlAmnt" readonly>
             			</div>
             		</div>
             		</div>
             		<div id="finalShowQrtId" class="a-dis">
             		<div class="row" style="padding-top:20px;padding-left:150px;" align="center"> 
             			<div class="col-md-4">
             				<span>Sanction Amount Total</span>
             			</div>
             			<div class="col-md-4">
             			<input type="text" class="form-control" id="sancTtlAmnt" readonly>
             			</div>
             		</div>
             		<div class="row hideQrtrCls" style="padding-top:20px;"> 
             			<div class="col-md-3">
             				<span>Quarterly Slab</span>
             			</div>
             			<div class="col-md-3">
             			<input type="text" class="form-control" id="qrtrlySlbId" readonly>
             			</div>
             			<div class="col-md-2" align="center">
             				<span>X</span>
             			</div>
             			<div class="col-md-3">
             			<input type="text" class="form-control" id="snctnAmntTtl" readonly>
             			</div>
             		</div>
             		<div class="row" style="padding-top:20px;padding-left:150px;" align="center"> 
             			<div class="col-md-4">
             				<span>Quarterly Incentives</span>
             			</div>
             			<div class="col-md-4">
             			<input type="text" class="form-control" id="qrtrlyTtlPayout" readonly>
             			</div>
             		</div>
             		</div>
             </div>
          </div>
        </div>
      </div>
      
    <!--   <div class="col-md-6 a-dis" id="pieChartDivId">
          <div class="box box-primary">
        <div class="box-header with-border">
        
              <h3 class="box-title">Access Assign To Role</h3>
            </div>
           
              <div class="box-body a-dis" id="pieDivId" style="padding-top:25px;">
				<canvas id="pieChartId"></canvas>
          	</div>
          	<div class="box-body a-dis" id="barDivId" style="padding-top:25px;">
				<canvas id="barChartId"></canvas>
          	</div>
        </div>
      </div> -->
      
      
      
      </div>
      <div class="row a-dis" id="statAppRwId">
        <div class="col-md-12">
          <div class="bo box-primar">
        <!-- <div class="box-header with-border">
        
              <h3 class="box-title">Access Assign To Role</h3>
            </div> -->
              <div class="box-bod">
				<div id="statAppId">
             		
             	</div>
             </div>
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
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/dsapayout.js"></script>
<script type="text/javascript">



</script>
</body>
</html>