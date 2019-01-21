<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>DSA</title>
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
	<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/blitzer/jquery-ui.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/jqueryConfirm/jquery-confirm.min.css">
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
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" style="background-color:#ecf0f5 !important;">
	<button type="button" class="btnSuccessCls" style="display:none;">Success</button>
	<span class="a-dis" id="dsaCodeId"></span>
	<div class="wrapper" >
	<div id="headerId"></div>
	<!-- <header class="main-header m-layer" id="headerId">
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
						<li id="liIdHead"><a><b>DSA</b></a></li>
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
   		<div class="row" style="padding-left:80px;" id="invoiceQrMnSlctId">    
             <div class="col-md-4"></div>
          		<div class="col-md-2">
					<label><input type="radio" class="qtrInvmntCls invPayoutCls" name="invqtrmntrd" value="Month"><span style="padding-left:20px;">By Month</span></label>
          		</div>
          		<!-- <div class="col-md-2 a-dis">
          			<label><input type="radio" class="qtrInvmntCls invPayoutCls" name="invqtrmntrd"  value="Quarter"><span style="padding-left:20px;">By Quarter</span></label>
          		</div> -->
          		<div class="col-md-4"></div>
        </div>
    	
    	<form onsubmit='$_invacnts(event);'>
    	<div class="row a-dis" id="invoiceInitRowId">
    	<div class="col-md-2" style="padding-top:20px;">
    		<select class="form-control" id="prdctTypAccInvId" required>
    			<option value="">Product Type</option>
    			<option value="UBL">BL</option>
				<option value="SBL">SBL</option>
    		</select>
    	</div>
    	<div class="col-md-2"  style="padding-top:20px;">
    		<select class="form-control" id="slctInvYr" required>
    			
    		</select>
    	</div>  
    	<div class="col-md-2"  style="padding-top:20px;">
    	<select  class="form-control" id="slctInvMnth" required>
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
    	<div class="col-md-6" style="padding-top:20px;" id="srchMnthId">
   			
    			<div class="input-group">
							<input type="text" class="form-control" id="searchBoxMnthId"
								placeholder="Search by Company Name, DSA Code, Company PAN, State, City" autocomplete="off"> <span class="input-group-btn">
								<button type="submit" id="searchBtnMnthId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
			</div>
    	
    	</div>
   	 </div>
    </form>
    
    <div class="row a-dis  col-md-offset-3" id="invoiceQrtrRowId" style="padding-top:20px;">
    	<form onsubmit='$_invacnts(event);'>
    	<div class="col-md-2">
    	<select class="form-control" id="prdctTypAccInvQrtrId" required>
    			<option value="">Product Type</option>
    			<option value="BL">BL</option>
    			<option value="SBL">SBL</option>
    		</select>
    	</div>
    	
    	<div class="col-md-2">
    		<select class="form-control" id="slctInvQrtrYr" required>
    			
    		</select>
    	</div>  
    	<div class="col-md-2">
    	<select  class="form-control" id="slctInvQrtrMnth" required>
    		<option value="">Select Quarter</option>
    		<option value="Q1">Apr - Jun</option>
			<option value="Q2">Jul - Sep</option>
			<option value="Q3">Oct - Dec</option>
			<option value="Q4">Jan - Mar</option>
    	</select>
    	</div>
    	<div class="col-md-2" id="srchQrtrId">
    	<div class="input-group">
							<input type="text" class="form-control" id="searchBoxQrtrId"
								placeholder="DSA Code"  required="required"> <span class="input-group-btn">
								<button type="submit" id="searchBtnQrtrId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
			</div>
    	</div>
    	</form>
    </div>

   <div class="row a-dis" style="padding-top:30px;" id="invoiceLstRowId">
    	<div class="col-md-4"></div>
    	<div class="col-md-4">
		<div class="box box-primary">
			<div class="box-body" id="invoiceBoxId" style="text-align:center;">
				
				<!-- <input id="btnShow" type="button" value="Show PDF" /> -->
			</div>
		 </div>   	
    	</div>
    	<div class="col-md-4"></div>
    	<div id="dialog" style="display:none;"></div> 
    </div>
    </section>
	</div>
	</div>

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
		src="/upf-system/resources/ui_content/plugins/jqueryConfirm/jquery-confirm.min.js"></script>
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
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/accinvoice.js"></script>
	<script src="/upf-system/resources/ui_content/plugins/canvas/canvasjs.min.js"></script>
<script type="text/javascript">



</script>
</body>
</html>