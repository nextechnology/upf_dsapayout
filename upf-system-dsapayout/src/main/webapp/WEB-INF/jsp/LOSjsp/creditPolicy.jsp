<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Credit Policy</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="/upf-system/resources/ui_content/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/upf-system/resources/ui_content/plugins/datatables/dataTables.bootstrap.css">
  <link rel="stylesheet" href="/upf-system/resources/ui_content/dist/css/scrypt.css">
	<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
   
<style> 
.paddingCVRowId{
padding-top:20px;
}
/* #portfolio{
background-image:url("/upf-system/resources/img/wtrmrk.png");
} */
.table-bordered {
    border: 2px solid #000;
}
.modal-content{
	background-color:#e5e3e3;
}   
.modal-header {   
    border-bottom: 0px solid #e5e5e5;
}
td {
     border: 2px solid #000 !important;
     padding: 4px;
}
td, h4{
font-size:15px;
font-weight:700; 
text-transform: uppercase;
}
tr{
text-align:center;
}
.headClr{
background-color:#5B9BD5;
color:#fff !important;
}  
.sideClr{
background-color:#DEEAF6; 
}
/* td:nth-child(1) {
background-color:#E1BEDF;
} */
.a-dis {
display: none;
}
</style> 
</head>
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId" style="background-color:#ecf0f5 !important;">
<div class="wrapper">
<div id="headerId"></div>
<span id="userNameHeadId" class="a-dis"></span>
<!--   <header class="main-header m-layer">
    <a href="/upf-system/upf/debitCredit/welcome" class="logo">
      <span class="logo-lg">
      	<img src="/upf-system/resources/ui_content/dist/img/KTlogo.png" class="m-KTBrandCls" alt="KapitalTech">
      </span>
    </a>

    <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="" align="center">
        <ul class="nav navbar-nav">
          <li>
            <a href="javascript:void(0);"><b>Credit Policy</b></a>
          </li>
        </ul>
      </div>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li>
            <a href="#">Logout</a>
          </li>
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
 
<!--   <aside class="main-sidebar m-layer">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="header">Application List</li>
        <li><a href="#"><span>GK - Web</span></a></li>
        <li><a href="#"><span>GK - 2</span></a></li>
        <li><a href="#"><span>Dexter - 2</span></a></li>
        <li><a href="/upf-system/upf/debitCredit/camui"><span>Cam UI</span></a></li>
        <li class="treeview active">
        	<a href="#"><span>File Uploads</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
          	</a>
          <ul class="treeview-menu">
            <li><a href="/upf-system/upf/debitCredit/uploadex"><i class="fa fa-circle-o"></i> Upload Excel</a></li>
            <li class="active"><a href="/upf-system/upf/debitCredit/uploadst"><i class="fa fa-circle-o"></i> Upload Status</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside> --> 
	 
  <div class="content-wrapper">
    <section class="content">
                 <div class="modal-conten">
                 	<div class="modal-header" style="text-align:center;">
                 			<button type="button" id="btnCreditPolId" class="btn btn-success btnPolCls" onclick="credit();">BL</button>
                 			<button type="button" id="btnBlLight" class="btn btn-success btnPolCls" onclick="bl_light();">BL 15</button>
                 			<button type="button" id="btnBlHt" class="btn btn-success btnPolCls" onclick="bl_ht();">BL HT</button>
                 			<button type="button" id="btnLddPolId" class="btn btn-warning btnPolCls" onclick="ldd();">SBL</button>
                 			<button type="button" id="btnMdbbPolId" class="btn btn-info btnPolCls" onclick="mdbb();">Other Guidelines</button>
                 	</div>
                 	<div class="modal-body" id="portfolio">
                 		<section id="creditPolSecId" class="polCls">
                 			<table class="table" style="background-color:#E5E3E3;" id="creditPolTblId">
								<colgroup width="240"></colgroup>
								<colgroup width="143"></colgroup> 
								<colgroup width="130"></colgroup>
								<colgroup width="128"></colgroup>
								<colgroup width="144"></colgroup>
								<colgroup width="149"></colgroup>
								<colgroup width="159"></colgroup>
								<colgroup span="2" width="166"></colgroup>
		<tr class="headClr">
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="22" align="center" valign=bottom><b><font size=3>CATEGORY GUIDANCE</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom ><b><font size=3 >FAT 1</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom ><b><font size=3 >FAT 2</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom ><b><font size=3 >UAT</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >EMM</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >MDBB1</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >MDBB2</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >MDBB3</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >MDBB4</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >DOCTOR'S UAT</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><b><font size=3 >DOCTOR'S MDBB</font></b></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">CATEGORIZATION GUIDANCE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">OPEX</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">GM% / OPEX</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" valign=bottom><font color="#000000">TO / GM% / OPEX</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">TO / GM% / Opex</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">-</font></td>
		</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="22" align="center" valign=bottom><font color="#000000">SEGMENT</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=7 align="center" valign=bottom><font color="#000000">RETAIL /DISTRIBUTOR/WHOLESALE/SERVICE PROVIDER AND NON RETAIL</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">PETROL PUMP</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">Doctors with clinic set-up only(Not Hospitals)</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MIN ITO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">= &gt; INR 3.00 CR P.A.</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">= &gt; INR 36 LAC P.A.</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" valign=bottom><font color="#000000">&gt; 3 CR ANNUALISED BTO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt; 5 CR ANNUALISED BTO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt; 3 CR ANNUALISED BTO</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">= > INR 0.50 Cr p.a.</font></td>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MAX ITO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">INR 250 CR P.A.</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 50 CR P.A.</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 20 Cr p.a.</font></td>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">TM SALES</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt;= INR 3.0L / MTH</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">-</font></td>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">ANY 1 OWNERSHIP</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=8 align="center" valign=bottom><font color="#000000">MANDATORY</font></td>
				<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">mandatory</font></td>	
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">STANDARD OF LIVING</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=8 align="center" valign=bottom><font color="#000000">GOOD</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">good</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MARITAL STATUS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">MARRIED</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">IF SINGLE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">LIVING WITH PARENTS</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MIN VINT (NO TM)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" valign=bottom><font color="#000000">24 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">36 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">36 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">24 Months</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">36 Months</font></td>

	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MIN VINT (YES TM)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">12 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">36 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">24 Months</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">36 Months</font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MIN LA</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">INR 6.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 6.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 11.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 21.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 6.00 L</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 11.00 L</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MAX LA</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">INR 75.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 10.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 20.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 25.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 50.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 75.00 L</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INR 25.00 L</font></td>	

	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MIN LT</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">9 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
				<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">10 MONTHS</font></td>
		
</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MAX LT</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">24 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">10/12 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">10/12/15 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">18 MONTHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">15 MONTHS</font></td>

	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MIN MONTHLY CREDIT(NOS/VALUE)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom sdval="18" sdnum="1033;"><font color="#000000">18</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt;15/&gt; 10 LAKHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt;20/&gt; 15 LAKHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt;30/&gt; 30 LAKHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&gt;15/&gt; 10 LAKHS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">> 12</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">-</font></td>

	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MMB( MINIMUM)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">60K</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">110K</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">210K</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">60K</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">-</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">ELIGIBILITY CALCULATION</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">-</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">10 * MDBB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">10 * MDBB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">8 * MDBB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">10 * MDBB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">AS PER UAT PROGRAM</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">10 * MDBB</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">REPAYMENT FREQUENCY</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=8 align="center" valign=bottom><font color="#000000">D / W</font></td>
		<td colspan="2" style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">D / W / F / M</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><b><font color="#000000">IWB GUIDANCE:</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">AS PER MDBB GUIDELINES</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">AS PER MDBB GUIDELINES</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">L3M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">&lt;= 2 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&lt;= 2 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">L6M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">&lt;= 4 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&lt;= 4 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">L12M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">&lt;= 8 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><b><font color="#000000">LTRACK GUIDANCE:</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">AS PER MDBB GUIDELINES</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">AS PER MDBB GUIDELINES</font></td>
		</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">L3M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">&lt;= 1 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&lt;= 1 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">L6M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">&lt;= 2 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">&lt;= 2 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">L12M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">&lt;= 3 BD</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><b><font color="#000000">UW TOOL APPLICABLE</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=8 align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">PBLO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">APPLICABLE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">APPLICABLE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.8" sdnum="1033;"><font color="#000000">0.8</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.7" sdnum="1033;"><font color="#000000">0.7</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.5" sdnum="1033;"><font color="#000000">0.5</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="1" sdnum="1033;0;0.0"><font color="#000000">1.0</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">NOT TO BE SEEN</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.3" sdnum="1033;"><font color="#000000">0.3</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.3" sdnum="1033;"><font color="#000000">0.3</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">NOT TO BE SEEN</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">0.5</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">NOT TO BE SEEN</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">FLOOR</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.7" sdnum="1033;"><font color="#000000">0.7</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.6" sdnum="1033;"><font color="#000000">0.6</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.5" sdnum="1033;"><font color="#000000">0.5</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.85" sdnum="1033;0;0.00"><font color="#000000">0.85</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">MBB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">APPLICABLE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">HUE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">GUIDANCE FACTOR</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>   
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">LOAN TO MONTHLY TO CAP</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000">APPLICABLE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><b><font color="#000000">APPLICABLE TO FOR UW</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">FOR PBLO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">BTO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">EMM TO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">FALL-BACK TO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">VAT</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">BTO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">FALL-BACK SITUATION</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 align="center" valign=bottom><font color="#000000">If VAT &gt; BTO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">If BTO &gt; EMM TO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><b><font color="#000000">PBLO - MBB COMBINATION GUIDANCE</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="61" align="center" valign=bottom><font color="#000000">SCENARIO 1: IF DIFFERENCE BETWEEN PBLO AND MBB IS &lt; 25%. FINAL LA = PBLO LA</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=middle sdnum="1033;0;0.0"><font color="#000000">PBLO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="62" align="center" valign=bottom><font color="#000000">SCENARIO 2: IF DIFFERENCE BETWEEN PBLO AND MBB IS &gt; 25% AND PBLO LA &lt; MBB LA</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LOWER OF - (70% OF MBB ELIGIBILITY, 0.7 PBLO)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=2 align="center" valign=middle><font color="#000000">LOWER OF - (70% OF MBB ELIGIBILITY, 0.6 PBLO)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LOWER OF - (70% OF MBB ELIGIBILITY, 0.5 PBLO)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="61" align="center" valign=bottom><font color="#000000">SCENARIO 3: IF DIFFERENCE BETWEEN PBLO AND MBB IS &gt; 25% AND PBLO LA &gt; MBB LA</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=4 align="center" valign=middle><font color="#000000">LOWER OF - (55% OF PBLO ELIGIBILITY, 2 MBB ELIGIBILITY)</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 height="21" align="center" valign=bottom><b><font color="#000000">ABBREVIATIONS:</font></b></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="1" sdnum="1033;"><font color="#000000">1</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">OPEX</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">OPERATING EXPANSES</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
	
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="2" sdnum="1033;"><font color="#000000">2</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">GM</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">GROSS MARGIN</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="3" sdnum="1033;"><font color="#000000">3</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">TO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">TURNOVER</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="4" sdnum="1033;"><font color="#000000">4</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">COGS</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">COST OF GOOD SOLD</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="5" sdnum="1033;"><font color="#000000">5</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">ITO</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">ITR TURNOVER</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="6" sdnum="1033;"><font color="#000000">6</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">TM</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">TERMINAL MACHINE (POS MACHINE)</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="7" sdnum="1033;"><font color="#000000">7</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LA</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LOAN AMOUNT</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="8" sdnum="1033;"><font color="#000000">8</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LT</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LOAN TENOR</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="9" sdnum="1033;"><font color="#000000">9</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">IWB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">INWARD BOUNCES</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="10" sdnum="1033;"><font color="#000000">10</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">L3M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LAST 3 MONTHS</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="11" sdnum="1033;"><font color="#000000">11</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">L6M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LAST 6 MONTHS</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="12" sdnum="1033;"><font color="#000000">12</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">L12M</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">LAST 12 MONTHS</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="13" sdnum="1033;"><font color="#000000">13</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">MMB</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">MEDIAN MONTHLY BALANCE</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="14" sdnum="1033;"><font color="#000000">14</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">HUE</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">HIGHEST UNSECURED EXPOSURE</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdval="15" sdnum="1033;"><font color="#000000">15</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">UW</font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000">UNDERWRITING</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
				<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		<td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom><font color="#000000"></font></td>
		
	</tr>
</table>
</section>
<section id="bl_light" class="polCls">
	<table class="table" style="background-color:#E5E3E3;" id="blLightTblId">
		
<!-- 					<tr>
						<td style=min-width:50px>Loan Details</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>BL-15(Banking Light)</td>
						<td style=min-width:50px></td>
					</tr> -->
					<tr class="headClr">
						<td style=min-width:50px>Sr No</td>
						<td style=min-width:50px>Parameters</td>
						<td style=min-width:50px>Unit</td>
						<td style=min-width:50px>Description</td>
						<td style=min-width:50px>Remarks</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Minimum Loan Amount</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>8.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Maximum Loan Amount</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>15.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Minimum Loan Tenure</td>
						<td style=min-width:50px>Months</td>
						<td style=min-width:50px>12</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Maximum Loan Tenure</td>
						<td style=min-width:50px>Months</td>
						<td style=min-width:50px>24</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Repayment Frequency</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Fortnightly, Monthly</td>
						<td style=min-width:50px>60% Fortnightly and 40% Monthly of the portfolio</td>
					</tr>
					<tr>
						<td colspan="5">Business / Customer Related Profiles</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Legal Constitution</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Proprietorship Firm, Partnership Firm, Pvt Ltd Company, LLP, OPC</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Minimum Business Stability</td>
						<td style=min-width:50px>Yrs</td>
						<td style=min-width:50px>5.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Profit Stability</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Profitable as per the Latest 2 Yrs Audited Financials</td>
						<td style=min-width:50px>Cash Profit to be considered as Profitable</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Ownership</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Office / Residence Mandatory in Customer's Name</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Family Status</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Married / Single residing with Parents</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>Standard of Living</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Good</td>
						<td style=min-width:50px></td>
					</tr>
					<!-- <tr>
						<td style=min-width:50px>7</td>
						<td style=min-width:50px>Co Applicant</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Lady Co Applicant Mandatory with Relationship Status as Spouse / Mother / Daughter</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>8</td>
						<td style=min-width:50px>SPDC</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>SPDC from Savings A/C of Lady Co Applicant to be mandatorily taken for Initiation of Section 138, in event of default.</td>
						<td style=min-width:50px>This does not require Submission of the Concerned Savings Bank Statement, provided the Lady Co Applicant's name reflects properly on the Individual Cheque Leaf</td>
					</tr>
					<tr>
						<td style=min-width:50px>9</td>
						<td style=min-width:50px>Seasonality</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Seasonal Business Profiles to be avoided</td>
						<td style=min-width:50px></td>
					</tr> -->
					<tr>
						<td colspan="5">Financial / Eligibility Parameters</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Minimum Turnover</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>200.00</td>
						<td style=min-width:50px>No Dip in Turnover permitted</td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Maximum Turnover</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>2000.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Post Funding DSCR</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>1.00</td>
						<td style=min-width:50px>Upto 0.80 can be approved at NCM Level, DSCR to be computed on Consensus Turnover. If EBITDA margin growth is > 50%, then EBITDA margin to be taken as average of the latest 2 Yrs Audited Financials.</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Loan Pacing</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Not more than 2 Unsecured Loans availed in the last 4 Months, No daily lender On Board.</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Loan Capping</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Our Loan Eligibility to be capped at 3.25% of Consensus Turnover</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>HUE Guidance</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Loan Eligibility <= HUE + Rs 5.00 Lacs / 25% of Secured Mortgage Exposure (Higher of the Two to be considered)
						</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>7</td>
						<td style=min-width:50px>ITR Filing Norms</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Gap between 2 Consecutive ITRs to be more than 6 Months.</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td colspan="5">Banking Parameters</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Minimum Banking Credits</td>
						<td style=min-width:50px>Avg Nos / Month</td>
						<td style=min-width:50px>18</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Minimum Banking Debits</td>
						<td style=min-width:50px>Avg Nos / Month</td>
						<td style=min-width:50px>18</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Minimum ABB</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>> = 0.50 x of Proposed EMI</td>
						<td style=min-width:50px>Upto 0.25 x can be deviated at NCM Level, OD / CC Balances not permitted</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>EMI Returns</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>0 in the last 3 M</td>
						<td style=min-width:50px>Excluding Technical Bounces</td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Inward Bounces</td>
						<td style=min-width:50px>%</td>
						<td style=min-width:50px>< = 2.00%
						</td>
						<td style=min-width:50px>Avg over last 9 M excluding Technical Bounces</td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>CC Utilization</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Not to be overutilized / In TOD in the last 6 Months.</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>7</td>
						<td style=min-width:50px>BTO</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Annualized BTO should be > = 90% of ITR Turnover</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td colspan="5">Repayment Track Record</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Repayment Track Record</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Unsecured Business Loan Track of Minimum 12 M</td>
						<td style=min-width:50px>can be waived at NCM Level</td>
					</tr>
					<tr>
						<td colspan="5">Other Checks</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>CIBIL Score</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>> = 650</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Geography</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Exclude Following: Mumbai, Pune, NCR, Bangalore, Chennai, Hyderabad & Kolkata</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Geo Limits</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Within Municipal Limits of Operational Location</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>RCU</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Mandatory RCU of ITR, Audited Financials & Primary Bank Statement</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td colspan="3">Following Sectors to be excluded:</td>
					</tr>
					<tr>
						<td style=min-width:50px>No</td>
						<td style=min-width:50px>BL Industry Sector</td>
						<td style=min-width:50px>Sub Sector</td>
						
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Textiles</td>
						<td style=min-width:50px>This would include only Traders. Hence Profiles where any kind of Processing, Dyeing is involved can be looked into.</td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Agri Trader</td>
						<td style=min-width:50px>For APMC Traders, Commission Agents or Profiles whose Turnover is a Low Proportion of his Actual Inventory Held</td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Metal Trader</td>
						<td style=min-width:50px>Iron, Steel</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Jeweller (Retail, Trader)</td>
						<td style=min-width:50px>High Value Jewellery</td>
						
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Mobile Store</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>EDC / POS Retailer</td>
						<td style=min-width:50px>Card Sales > Rs 1.00 Lacs per Month to be Excluded</td>
					</tr>
	</table>
</section>

<section id="bl_ht" class="polCls">
	<table class="table" style="background-color:#E5E3E3;" id="blHtTblId">
	<!-- 	<tr>
						<td style=min-width:50px>Loan Details</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px>High Tenor-Policy</td>
						<td style=min-width:50px></td>
					</tr> -->
					<tr class="headClr">
						<td style=min-width:50px>Sr No</td>
						<td style=min-width:50px>Parameters</td>
						<td style=min-width:50px>Unit</td>
						<td style=min-width:50px>Description</td>
						<td style=min-width:50px>Remarks</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Minimum Loan Amount</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>20.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Maximum Loan Amount</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>75.00</td>
						<td style=min-width:50px>For Loan Tenure of 24 Months, Loan Amt capped at Rs 50 Lacs, Else Rs 75 Lacs </td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Minimum Loan Tenure</td>
						<td style=min-width:50px>Months</td>
						<td style=min-width:50px>12</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Maximum Loan Tenure</td>
						<td style=min-width:50px>Months</td>
						<td style=min-width:50px>24</td>
						<td style=min-width:50px>Permitted Loan Tenures would be 18 & 24 Months only</td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Repayment Frequency</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Daily,weekly,Fortnightly, Monthly</td>
						<td style=min-width:50px>Monthly cannot exceed 50% of portfolio sourced</td>
					</tr>
					<tr>
						<td style=min-width:50px>Business / Customer Related Profiles</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Legal Constitution</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Proprietorship Firm, Partnership Firm, Pvt Ltd Company, LLP, OPC</td>
						<td style=min-width:50px>Trust, Society allowed for Schools & Hospitals, subject to Borrowing Clause.</td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Minimum Business Stability</td>
						<td style=min-width:50px>Yrs</td>
						<td style=min-width:50px>4.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Profit Stability</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Profitable as per the Latest 2 Yrs Audited Financials</td>
						<td style=min-width:50px>Cash Profit to be considered as Profitable</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Ownership</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Office / Residence Mandatory in Customer's Name</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Family Status</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Married / Single residing with Parents</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>Standard of Living</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Good</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>Financial / Eligibility Parameters</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Minimum Turnover</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>500.00</td>
						<td style=min-width:50px>For Service Provider, Minimum Turnover of Rs 300 L</td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Maximum Debtors Days</td>
						<td style=min-width:50px>Days</td>
						<td style=min-width:50px>150</td>
						<td style=min-width:50px>Subject to No Negative Variance as compared to the Previous Financial Year, Maximum 60 Days for Trader Profile.</td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Maximum Creditors Days</td>
						<td style=min-width:50px>Days</td>
						<td style=min-width:50px>150</td>
						<td style=min-width:50px>Subject to No Negative Variance as compared to the Previous Financial Year, Maximum 60 Days for Trader Profile.</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Post Funding DSCR</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>0.80</td>
						<td style=min-width:50px>DSCR to be computed on Consensus Turnover. If EBITDA margin growth is > 50%, then EBITDA margin to be taken as average of the latest 2 Yrs Audited Financials.</td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>Loan / TO Cap</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>LAP + Unsecured Loans < = 30% of Consensus Turnover
						</td>
						<td style=min-width:50px>Cumulative Sanctioned Loan Value to be taken including our Loan Amount, CC / OD to be excluded</td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>HUE Guidance</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Loan Eligibility <= HUE + Rs 5.00 Lacs / 25% of Secured Mortgage Exposure (Higher of the Two to be considered)
						</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>Banking Parameters</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Minimum Banking Credits</td>
						<td style=min-width:50px>Avg Nos / Month</td>
						<td style=min-width:50px>40</td>
						<td style=min-width:50px>Deviation at NCM Level</td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Minimum Banking Debits</td>
						<td style=min-width:50px>Avg Nos / Month</td>
						<td style=min-width:50px>40</td>
						<td style=min-width:50px>Deviation at NCM Level</td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Minimum MDBB</td>
						<td style=min-width:50px>Rs Lacs</td>
						<td style=min-width:50px>2.00</td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>MDBB Multiplier</td>
						<td style=min-width:50px>x</td>
						<td style=min-width:50px>10.00</td>
						<td style=min-width:50px>Upto 15.00 x can be approved at NCM Level</td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>EMI Returns</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>0 in the last 3 M</td>
						<td style=min-width:50px>Excluding Technical Bounces</td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>Inward Bounces</td>
						<td style=min-width:50px>%</td>
						<td style=min-width:50px>< = 2.00%
						</td>
						<td style=min-width:50px>Avg over last 9 M excluding Technical Bounces</td>
					</tr>
					<tr>
						<td style=min-width:50px>Repayment Track Record</td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
						<td style=min-width:50px></td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Repayment Track Record</td>
						<td style=min-width:50px>-</td>
						<td style=min-width:50px>Unsecured Business Loan Track of Minimum 12 M for Loan Value of Rs 20.00 Lacs</td>
						<td style=min-width:50px>can be waived at NCM level with secured tracks</td>
					</tr>
					<tr>
						<td colspan="3">Following Sectors to be excluded from the Policy:</td>
					</tr>
					<tr>
						<td style=min-width:50px>No</td>
						<td style=min-width:50px>BL Industry Sector</td>
						<td style=min-width:50px>Sub Sector</td>
					</tr>
					<tr>
						<td style=min-width:50px>1</td>
						<td style=min-width:50px>Textiles</td>
						<td style=min-width:50px>This would include only Traders. Hence Profiles where any kind of Processing, Dyeing is involved can be looked into. Pure Traders will be excluded.</td>
					</tr>
					<tr>
						<td style=min-width:50px>2</td>
						<td style=min-width:50px>Agri Trader</td>
						<td style=min-width:50px>For APMC Traders, Commission Agents or Profiles whose Turnover is a Low Proportion of his Actual Inventory Held</td>
					</tr>
					<tr>
						<td style=min-width:50px>3</td>
						<td style=min-width:50px>Metal Trader</td>
						<td style=min-width:50px>Iron, Steel</td>
					</tr>
					<tr>
						<td style=min-width:50px>4</td>
						<td style=min-width:50px>Jeweller (Retail, Trader)</td>
						<td style=min-width:50px>High Value Jewellery</td>
					</tr>
					<tr>
						<td style=min-width:50px>5</td>
						<td style=min-width:50px>EDC / POS Retailer</td>
						<td style=min-width:50px>Card Sales > Rs 10.00 Lacs per Month to be Excluded</td>
					</tr>
					<tr>
						<td style=min-width:50px>6</td>
						<td style=min-width:50px>Food & Beverages</td>
						<td style=min-width:50px>Pubs & Restaurants</td>
					</tr>
	</table>
</section>
<section id="mdbbPolSecId" class="polCls">
	<table class="table" style="background-color:#E5E3E3;" id="mdbbPolTblId">
	<colgroup width="469"></colgroup>
	<colgroup width="284"></colgroup>
	<colgroup width="270"></colgroup>
	<tr class="headClr">
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font>TABLE 2</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font>EMM MULTIPLIER (FOR EMM TO)</font></b></td>
		<td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom ><b><font>Comments</font></b></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">GENERAL</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="3" sdnum="1033;0;0.0\x"><font color="#000000">3.0x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TOURS &amp; TRAVELS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="1.5" sdnum="1033;0;0.0\x"><font color="#000000">1.5x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MOBILE STORE; PET PRODUCTS; PUB / LOUNGE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="2" sdnum="1033;0;0.0\x"><font color="#000000">2.0x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">AUTO SERVICING</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="2.5" sdnum="1033;0;0.0\x"><font color="#000000">2.5x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">NON-RETAIL REJECT TO</font></td>
	</tr>
	<tr>
		<td height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">3 DIGIT AND BELOW BALANCES</font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">LT (MONTHS)</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">MBB MULTIPLIER</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MINIMUM BALANCE REQUIRED</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">8</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="7" sdnum="1033;0;0.0\x"><font color="#000000">7.0x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">NO LOAN HISTORY</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">9</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="7.5" sdnum="1033;0;0.0\x"><font color="#000000">7.5x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">INDUSTRY MARGINS FOR EMM METHOD</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">10</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="8.5" sdnum="1033;0;0.0\x"><font color="#000000">8.5x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">11</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="9" sdnum="1033;0;0.0\x"><font color="#000000">9.0x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">12</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="10" sdnum="1033;0;0.0\x"><font color="#000000">10.0x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">15</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdval="12" sdnum="1033;0;0.0\x"><font color="#000000">12.0x</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">TRENDS GUIDANCE</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">MONTHLY FIGURE ESTIMATION METHOD</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">STABLE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">AVG L3M</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">FLUCTUATING</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">(AVG L9M DATA + AVG L9M TROUGHS) / 2 </font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">UPWARD</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">AVG L3M * 85%</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">OUTLIER FIGURES TO BE REMOVED</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">UPSWING STABLE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">AVG L3M</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">STABILIZATION OF 5 MONTHS</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">UPSWING FLUCTUATING</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">(AVG L5M DATA + AVG L5M TROUGHS) / 2 </font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">STABILIZATION OF 5 MONTHS</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DOWNWARD</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DOWNSWING STABLE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DOWNSWING FLUCTUATING</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">&lt;3CR IF BTO FIL ON EMM</font></td>
	</tr>
	<tr>
		<td height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" colspan=3 height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">FOR UAT, FAT 1 AND FAT 2 TURNOVER GUIDANCE</font></b></td>
		</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">ITR TO RANGE (CR.)</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">BTO IS &gt;=</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">ACTION</font></b></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">3 +</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">1.2 X ITR &quot;OR&quot; BY 4 CR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">SUBMIT VAT</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">ITR TO RANGE (CR.)</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">(BTO OR VAT) IS &gt;=</font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">ACTION</font></b></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">3 TO 7</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">2 X ITR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">7 TO 13</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">BY 7 CR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">13 TO 19</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"> BY 7 CR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">19 TO 26</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"> BY 7 CR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">26 TO 40</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"> BY 12 CR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">40+</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"> BY 16 CR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ESCALATE</font></td>
	</tr>
	<tr>
		<td height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">TO BE ESCALATED</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">HIGH CAUTION</font></b></td>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">STRICTLY NEGATIVE</font></b></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">BOTH RENTED</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">STEEL</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">COUNTRY LIQUOR</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">E-COMMERCE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TIMBER</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">REAL ESTATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PROJECT BUSINESSES</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TRUCK OPERATOR</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">CLOSELY LINKED TO REAL ESTATE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">SINGLE CLIENT DEPENDANT BUSINESS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">SLAUGHTER HOUSE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ORCHESTRA BARS</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ANY POLICY DEVIATION CASES</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">BULK CHEMICALS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DIAMOND TRADING</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TURNOVER DIP &gt;10%</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">FILM PERSONALITIES</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">FILM PRODUCTION</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">COMMUNITY DOMINATED LOCATION</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">CONSULTANCY BUSINESS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">GOLD TRADING</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">LOAN OF INR &lt;= 5.00 L TO NON-RETAIL CUTOMER</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MEDIA COMPANIES</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">EXCHANGE BASED TRADING</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">SAVINGS BANK A/C BASED CASES</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">WATER DISTRIBUTORS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">NON-RETAIL WITH ITR TO &lt; 3.00 CR</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TENURE &gt; 12.00 MONTHS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">COLLECTION / REPO AGENCY</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DEFENSE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TENURE&gt;10.00 MONTHS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">NRI PROMOTED BUSINESS</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MULTIPLE PAN</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">FOREIGNER PROMOTED BUSINESS</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">BOTH NEOGROWTH &amp; INTELLICASH</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">CYBER CAF�</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">STATUTORY DUES PENDING &gt; 3.0% OF TO</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MASSAGE PARLOUR</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DEBTOR DAYS &gt; 90 DAYS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ASTROLOGER</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">CIBIL -1 SCORE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PUBLIC LISTED COMPANIES</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ANY FI NEGATIVE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">VIDEO PARLOUR</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">LOAN EXCEEDING HUE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">LAWYER</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">GROUP EXPOSURE NOT TO EXCEED MAX PERMITTED EXPOSURE(ABOVE 70 LAKHS)</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">JOURNALIST</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PAGDI STYLE OWNERSHIP AND LOAN &gt; 5.0L TO BE ESCALATED</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">POLICE OFFICER</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">RETAIL TO BE DONE ON DAILY REPAYMENT FREQUENCY - SALES TO PROVIDE JUSTIFICATION FOR WEEKLY</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MLM</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ANY NON-DAILY / WEEKLY FREQUENCY TO BE AT HIGHEST LEVEL OF ESCALATION</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">DSA</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">RESTAURANT NOT LISTED ON ZOMATO</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">REAL ESTATE BROKER</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">HUF STRUCTURE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">RESIDENCE CUM OFFICE</font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">MORE THAN X NOS. OF UNRELATED DIRECTORS / PARTNERS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">ANY DSCR DEVIATION</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">LOSS MAKING BUSINESS UNLESS DUE TO CARRY FORWARD LOSS OR CARRY FORWARD DEPRECIATION OR DUE TO DEPRECIATION ALONE</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PEP</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">AGE RISK &gt; 60 YRS OF ANY BORROWER</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">AGE RISK &gt; 58 YRS SINGLE BORROWER</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">&gt; 6 NOS. UNSECURED LOANS</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom  sdnum="1033;0;0%"><b><font color="#000000">ALLOWED:</font></b></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PROPRIETORSHIP</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PARTNERSHIP</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">LLP</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">PRIVATE LIMITED</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">TRUST-(NON CHARITABLE AND WITH BORROWING CLAUSE</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000">HUF</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom ><b><font color="#000000">MDBB OTHER GUIDELINES</font></b></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">EBITA NEEDS TO BE POSITIVE</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">MIN ONE LOAN REQUIRED OF 6 MONTH VINTAGE(INCLUDING OD/CC)</font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
		<td align="center" valign=bottom sdnum="1033;0;0%"><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">NO BOUNCE IN LAST 3 MONTHS AND MAX OF 2% INWARD CHEQUE RETURNS IN LAST 9 MONTHS</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">NO EMI  RETURN IN LAST 3 MONTHS</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">NOT MORE THAN 4 MONTHS SHOULD HAVE LOAN DISBURSAL OUT OF 9 MONTHS OF BANKING AND MONTHS OF LOAN DISBURSAL IF SHOWING HIGHER MDBB TO BE RATIONALISED</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">FOR LOAN AMOUNT MORE THAN 20 LAKHS, MDBB NEEDS TO BE COMPUTED OF CURRENT ACCOUNT ONLY AND NOT OD/CC ACCOUNT</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">FOR LOAN AMOUNT MORE THAN 20 LAKHS, MAXIMUM EXISTING UNSECURED LOAN SHOULD NOT BE MORE THAN 3</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom><font color="#000000">DIP IN TURNOVER DUE TO BUSINESS DECLINE TO BE AVOIDED</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="21" align="center" valign=bottom><font color="#000000">IF THERE IS DISBURSAL AND BECAUSE OF IT THE BALANCE IS INFLATED WE NEED TO RATIONALISE THE SAME</font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
		<td align="center" valign=bottom><font color="#000000"><br></font></td>
	</tr>
</table>
</section>
		<div class="row">
		<div class="col-md-12">
			<section id="lddPolSecId" class="polCls">
				<table style="width:2600px !important; background-color:#E5E3E3;" id="lddPolSecTblId">
								<tr class="headClr">
									<td>CATEGORY GUIDANCE</td>
									<td>LITE</td>
									<td>LITE+</td>
									<td>BOTH RENTED</td>
									<td> PHARMACY</td>
									<td>CIBIL PHARMACY</td>									
									<td>CIBIL PHARMACY (IF BOTH RENTED)</td>
									<td>CIBIL GENERAL METRO</td>
									<td>CIBIL GENERAL NON METRO</td>
									<td>LITE+Credit</td>
									<td>EMM</td>
									<td>DOCTOR'S SBL</td>
								</tr>
								<tr>
									<td  class="sideClr">CIBIL SCORE</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>700+</td>
									<td>750 +</td>
									<td>700+</td>
									<td>700+</td>
									<td>700+</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td  class="sideClr">CIBIL VINTAGE</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>6 MONTHS</td>
									<td>12 MONTHS</td>
									<td>6 MONTHS</td>
									<td>12 MONTHS</td>
									<td>12 Months</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td  class="sideClr">LOAN AMOUNT</td>
									<td>INR 2.00 TO 3.00 LACS</td>
									<td>INR 3.5 to 7.5 LACS</td>
									<td>INR 2.00 TO 5.00 LACS</td>
									<td>INR 2.00 to 7.5 lacs</td>
									<td colspan="2">INR 3 lacs</td>
									<td>INR 2 to 3 lacs</td>
									<td>INR 2 lacs</td>
									<td>INR 3.5 to 7.50 LACS</td>
									<td>INR 2.00 to INR 7.50 LACS</td>
									<td>INR 2 lacs to 10 lacs</td>
								</tr>
								<tr>
									<td  class="sideClr">LOAN TENOR</td>
									<td colspan="3">9 / 10 / 12 MONTHS</td>
									<td>9 / 10 / 12 / 15 MONTHS</td>
									<td colspan="2">10 / 12 MONTHS</td>
									<td>12 MONTHS</td>
									<td>12 MONTHS</td>
									<td>10 / 12 MONTHS</td>
									<td>9 / 10 / 12 MONTHS</td>
									<td>10 / 12 MONTHS</td>
								</tr>
								<tr>
									<td  class="sideClr">REPAYMENT FREQUENCY</td>
									<td colspan="2">DAILY / WEEKLY (MIN 60%) + FORTNIGHTLY (MAX 40%)</td>
									<td>DAILY / WEEKLY</td>
									<td>DAILY / WEEKLY / FORTNIGHTLY / MONTHLY</td>
									<td colspan="2">DAILY / WEEKLY / FORTNIGHTLY / MONTHLY</td>
									<td>MONTHLY</td>
									<td>MONTHLY</td>
									<td>DAILY / WEEKLY / FORTNIGHTLY / MONTHLY</td>
									<td>DAILY / WEEKLY</td>
									<td></td>
								</tr>
								<tr>
									<td  class="sideClr">PF</td>
									<td colspan="3">2.50%</td>
									<td>2.50%</td>
									<td colspan="2">2.50%</td>
									<td>2.50%</td>
									<td>2.50%</td>
									<td>2.50%</td>
									<td>2.50%</td>
									<td>2.50%</td>
								</tr>
								<tr>
									<td  class="sideClr">INTEREST RATE</td>
									<td colspan="3">24%</td>
									<td>24%</td>
									<td colspan="2">24%</td>
									<td>24%</td>
									<td>24%</td>
									<td>24%</td>
									<td>24%</td>
									<td>24%</td>
								</tr>
								<tr>
									<td  class="sideClr">CORE SEGMENT</td>
									<td colspan="3">RETAIL / DISTRIBUTOR / WHOLESALE / SERVICES</td>
									<td>RETAIL</td>
									<td colspan="2">RETAIL</td>
									<td>RETAIL / DISTRIBUTOR / WHOLESALE / SERVICES</td>
									<td>RETAIL</td>
									<td>RETAIL / DISTRIBUTOR / WHOLESALE / SERVICES</td>
									<td>RETAIL</td>
									<td>DOCTOR</td>
								</tr>
								<tr>
									<td  class="sideClr">TEST SEGMENT</td>
									<td colspan="3">MANUFACTURING</td>
									<td>NOT APPLICABLE</td>
									<td colspan="2">NOT APPLICABLE</td>
									<td colspan="2">MANUFACTURING</td>
									<td>MANUFACTURING</td>
									<td>NA</td>
									<td>NA</td>
								</tr>
								<tr>
									<td  class="sideClr">LEGAL ENTITY</td>
									<td colspan="3">Proprietorship/Partnership Firm/ Partnership LLP/ Private Limited</td>
									<td>Proprietorship/Partnership Firm (NON LPP)</td>
									<td colspan="2">Proprietorship/Partnership Firm (NON LPP)</td>
									<td colspan="2">Proprietorship/Partnership Firm (NON LPP)</td>
									<td>Proprietorship/Partnership Firm/ Partnership LLP/ Private Limited</td>
									<td>Proprietorship/Partnership Firm/ Partnership LLP/ Private Limited</td>
									<td>Proprietorship/Partnership Firm/ Partnership LLP/ Private Limited</td>
								</tr>
								<tr>
									<td class="sideClr">TURNOVER CRITERIA</td>
									<td>"IF metro city then
										INR 24.00 LAC <= BTO <= INR 3.00 CRORE, 
										OR INR 24.00 LACS <= ITO <= INR 3.00 CRORE, 
										
										Else if Non metro then
										INR 10.00 LAC <= BTO <= INR 2.00 CRORE, 
										OR INR 10.00 LACS <= ITO <= INR 2.00 CRORE, 
										
										AVERAGE MONTHLY EDC CREDIT < INR 5.00 LAC"
									</td>
									<td>"If metro city then 
										INR 36.00 LAC <= BTO <= INR 3.00 CRORE,
										 INR 36.00 LACS <= ITO <= INR 3.00 CRORE, 
										
										Else if non metro then 
										INR 36.00 LAC <= BTO <= INR 3.00 CRORE,
										
										AVERAGE MONTHLY EDC CREDIT < INR 5.00 LAC"
									</td>
									<td>"If metro then
										INR 50.00 LAC <= BTO <= INR 3.00 CRORE, INR 48.00 LACS <= ITO <= INR 3.00 CRORE, 
										
										Else if non metroc then
										INR 50.00 LAC <= BTO <= INR 2.00 CRORE, INR 48.00 LACS <= ITO <= INR 2.00 CRORE, 
										
										If business vintage is less than 3 years
										then INR 1.00 LACS <= AVERAGE MONTHLY EDC CREDIT < INR 5.00 LAC"
									</td>
									<td>INR 24.00 LAC <= BTO <= INR 3.00 CRORE, INR 24.00 LACS <= ITO <= INR 3.00 CRORE, AVERAGE MONTHLY EDC CREDIT < INR 3.00 LAC
									</td>
									<td colspan="2">NOT APPLICABLE	
									</td>
									<td>MINIMUM annualized BTO Rs. 8 Lakhs
									</td>
									<td>"MINIMUM annualized BTO Rs. 4 Lakhs Max 2 Cr"
									</td>
									<td>"INR 24.00 LACS <= ITO <= INR 3.00 CRORE ( for Metro Cities) and INR 10 lacs <=ITO <=2.00 crs for other cities, 
										AVERAGE MONTHLY EDC CREDIT < INR 5.00 LAC. "
									</td>
									<td>INR 12.00 Lac <= Annualized BTO <=3.00 Cr with AVERAGE MONTHLY EDC CREDIT >= INR 1.00 Lac.
									</td>
									<td>INR 10.00 Lac <= Annualized BTO <=49 Lacs with AVERAGE MONTHLY EDC CREDIT < INR 5.00 Lac.
									</td>
								</tr>
								<tr>
									<td class="sideClr">MINIMUM MONTHLY CREDIT (NO. / VALUE)</td>
									<td>"10 CREDITS / 
									If metro then INR 2.00 LACS
									Else non metro Rs 83333"
									</td>
									<td>15 CREDITS / INR 3.00 LACS
									</td>
									<td>15 CREDITS / INR 4.00 LACS</td>
									<td>10 CREDITS / INR 2.00 LACS</td>
									<td colspan="2">not applicable</td>
									<td>8 (DEBITS & CREDITS)
									</td>
									<td>Average 8 Nos. per Month (Credits + Debits) with Minimum 3 credits per month
									</td>
									<td>5 Credits with� Minimum of 15 ( Debits+ credit).</td>
									<td>15 CREDITS</td>
									<td>3 credits</td>
								</tr>
								<tr>
									<td class="sideClr">MDBB</td>
									<td>MINIMUM INR 16.5 K</td>
									<td>MINIMUM INR 24 K</td>
									<td>MINIMUM INR 24 K</td>
									<td>MINIMUM INR 20 K</td>
									<td colspan="2">not applicable</td>
									<td>MINIMUM INR 3 K</td>
									<td>MINIMUM INR 3 K</td>
									<td>MINIMUM INR 29 K</td>
									<td>MINIMUM INR 13.33 K</td>
									<td>MINIMUM INR 13340</td>
								</tr>
								<tr>
									<td class="sideClr">IWR</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
									<td colspan="2">not applicable
									</td>
									<td>2 in Last 6M
									</td>
									<td>2 in Last 6M
									</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
									<td>L6M <= 3BOUNCE DAYS
									</td>
								</tr>
								<tr>
									<td class="sideClr">EMIR</td>
									<td>L3M NIL; L6M <= 1BOUNCE DAY( NOT CROSSED 30 DPD)
									</td>
									<td>L3M NIL; L6M <= 1BOUNCE DAY( NOT CROSSED 30 DPD)
									</td>
									<td>L6M NIL</td>
									<td>L3M NIL; L6M <= 1BOUNCE DAY( NOT CROSSED 30 DPD)
									</td>
									<td colspan="2">not applicable</td>
									<td>No EMI Return in L3M
									</td>
									<td>No EMI Return in L6M</td>
									<td>L3M NIL; L6M <= 1BOUNCE DAY( NOT CROSSED 30 DPD)
									</td>
									<td>L3M NIL; L6M <= 1BOUNCE DAY( NOT CROSSED 30 DPD)
									</td>
									<td>No EMI Return in L3M
									</td>
								</tr>
								<tr>
									<td class="sideClr">LOAN ELIGIBILITY</td>
									<td>12X MDBB</td>
									<td>15X MDBB</td>
									<td>10X MDBB</td>
									<td>20X MDBB
									</td>
									<td colspan="2">not applicable</td>
									<td>"  Average 8 Nos. per Month (Credits + Debits) with Minimum 3 credits per month
										o   For average monthly credits up to 5 Nos. in L3M we will fund upto Rs.2 Lakhs
										o   For average monthly credits > 5 Nos. in L3M we will fund upto Rs.3 Lakhs"</td>
									<td>inr 2 lacs</td>
									<td>
									<table align="center">
										<thead>
											<tr>
												<td>Dr/Cr Ratio</td>
												<td>Multiplier</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>2X</td>
												<td>8X MDBB</td>
											</tr>
											<tr>
												<td>3X</td>
												<td>9X MDBB</td>
											</tr>
											<tr>
												<td>4X</td>
												<td>10X MDBB</td>
											</tr>
											<tr>
												<td>5X</td>
												<td>11X MDBB</td>
											</tr>
											<tr>
												<td>6X</td>
												<td>12X MDBB</td>
											</tr>
										</tbody>
									</table>
									</td>
									<td>
									<table align="center">
										<thead>
											<tr>
												<td>Card SALES (X)</td>
												<td>Multiplier</td>
												<td>EMM ELIGIBLITY</td>
												<td>MDBB ELIGIBLITY (Y)</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>>=1 LAC AND <2 LACS</td>
												<td>2 TIMES OF AVG MONTHLY CARD SALES</td>
												<td>X*2</td>
												<td>MDBB*15 MULTIPLIER</td>
											</tr>
											<tr>
												<td>>=2 LAC AND <5 LACS</td>
												<td>1.5 TIMES OF AVG MONTHLY CARD SALES</td>
												<td>X*1.5</td>
												<td>MDBB*15 MULTIPLIER</td>
											</tr>
											<tr>
												<td colspan="2">FINAL ELIGIBLITY</td>
											</tr>
											<tr>
												<td>X=Y</td>
												<td>X</td>
											</tr>
											<tr>
												<td>X>Y</td>
												<td>LOWER(X,1.5*Y)</td>
											</tr>
											<tr>
												<td>X>Y</td>
												<td>Y</td>
											</tr>
										</tbody>
									</table>
									</td>
									<td>15X MDBB</td>
								</tr>
								<tr>
									<td class="sideClr">UNSECURED LOAN EXPOSURE</td>
									<td>< = 3 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 15 LACS
									</td>
									<td>< = 4 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 20 LACS
									</td>
									<td>< = 3 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 15 LACS
									</td>
									<td>< = 4 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 20 LACS
									</td>
									<td colspan="2">NOT APPLICABLE</td>
									<td>< = 4 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 20 LACS
									</td>
									<td>< = 4 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 20 LACS
									</td>
									<td>< = 4 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 20 LACS
									</td>
									<td>< = 4 NOS.; CUMULATIVE SANCTIONED EXPOSURE <= INR 20 LACS
									</td>
									<td></td>
								</tr>
								<tr>
									<td class="sideClr">LOAN SEASONING</td>
									<td>CIBIL 0 / (-1) SCORE NOT PERMITTED; IF LOAN NIL BUT CIBIL SCORE 700+ DUE TO CREDIT CARD THEN MAX LOAN EXPOSURE OF INR 2.00 LACS</td>
									<td>MINIMUM 1 NON-CREDIT CARD LOAN WITH 6 M VINTAGE FOR LOAN UP TO INR 4.00 AND 12 MONTHS FOR LOAN UP TO INR 5.00 LACS</td>
									<td>MINIMUM 1 NON-CREDIT CARD LOAN WITH 12 M VINTAGE</td>
									<td>MINIMUM 1 NON-CREDIT CARD LOAN WITH 6 M VINTAGE FOR LOAN UP TO INR 4.00 AND 12 MONTHS FOR LOAN UP TO INR 5.00 LACS
									</td>
									<td>MINIMUM 1 NON-CREDIT CARD LOAN WITH 6 M VINTAGE</td>
									<td>Unsecured Loan Vintage of 12 M
									</td>
									<td>MINIMUM 1 UNSECURED LOAN WITH 6 M VINTAGE AND CUSTOMER SHOULD SERVICE MINIMUM UNSECURED LOAN OF RS.1 LAKHS
									</td>
									<td>Minimum 1 lac loan with 12 months vintage</td>
									<td>MINIMUM 1 NON-CREDIT CARD LOAN WITH 12 MONTHS VINTAGE FOR MINIMUM LOAN AMOUNT OF 2 LACS (CONSUMER/GOLD LOAN NOT TO CONSIDERED)
									</td>
									<td>CIBIL 0 / (-1) SCORE NOT PERMITTED; IF LOAN NIL BUT CIBIL SCORE 700+ DUE TO CREDIT CARD THEN MAX LOAN EXPOSURE OF INR 2.00 LACS, MINIMUM 1 NON-CREDIT CARD LOAN WITH 6 M VINTAGE FOR LOAN UP TO INR 4.00 AND 12 MONTHS FOR LOAN UP TO INR 7.50 LACS</td>
									<td>NOT APPLICABLE
									</td>
								</tr>
								<tr>
									<td class="sideClr">IF UNMARRIED PROFILE</td>
									<td colspan="3">SHOULD MANDATORILY RESIDE WITH PARENTS</td>
									<td>NOT APPLICABLE</td>
									<td colspan="2">NOT APPLICABLE</td>
									<td>SHOULD MANDATORILY RESIDE WITH PARENTS</td>
									<td>SHOULD MANDATORILY RESIDE WITH PARENTS</td>
									<td>SHOULD MANDATORILY RESIDE WITH PARENTS</td>
									<td></td>
									<td>NOT APPLICABLE
									</td>
								</tr>
								<tr>
									<td class="sideClr">INVENTORY / STOCK LEVEL</td>
									<td colspan="4">GOOD [AS VERIFIED BY PD / FI, PHOTOGRAPHS]; IF POOR DECLINE</td>
									<td colspan="2">GOOD [AS VERIFIED BY PD / FI, PHOTOGRAPHS]; IF POOR DECLINE</td>
									<td>GOOD [AS VERIFIED BY PD / FI, PHOTOGRAPHS]; IF POOR DECLINE</td></td>
									<td>GOOD [AS VERIFIED BY PD / FI, PHOTOGRAPHS]; IF POOR DECLINE</td>
									<td>GOOD [AS VERIFIED BY PD / FI, PHOTOGRAPHS]; IF POOR DECLINE</td>
									<td></td>
									<td>GOOD [AS VERIFIED BY PD / FI, PHOTOGRAPHS]; IF POOR DECLINE</td>
								</tr>
								<tr>
									<td class="sideClr">BUSINESS VINTAGE</td>
									<td colspan="2">2 YEARS CURRENT BUSINESS VINTAGE; 1 YEAR IF AVERAGE MONTHLY EDC CREDIT >= INR 50 K</td>
									<td>3 YEARS CURRENT BUSINESS VINTAGE;</td>
									<td>1 YEAR CURRENT BUSINESS VINTAGE</td>
									<td>1 YEAR CURRENT BUSINESS VINTAGE</td>
									<td>3 YEARS CURRENT BUSINESS VINTAGE</td>
									<td>"2 YEARS CURRENT BUSINESS VINTAGE; 
									1 YEAR IF AVERAGE MONTHLY EDC CREDIT >= INR 50 K"
									</td>
									<td>"2 YEARS CURRENT BUSINESS VINTAGE; 
									1 YEAR IF AVERAGE MONTHLY EDC CREDIT >= INR 50 K"
									</td>
									<td>"2 YEARS CURRENT BUSINESS VINTAGE; 
									1 YEAR IF AVERAGE MONTHLY EDC CREDIT >= INR 50 K"
									</td>
									<td></td>
									<td>"2 YEARS CURRENT BUSINESS VINTAGE; 
									1 YEAR IF AVERAGE MONTHLY EDC CREDIT >= INR 50 K"
									</td>
								</tr>
								<tr>
									<td class="sideClr">DEBTOR DAYS</td>
									<td colspan="4">NOT APPLICABLE</td>
									<td colspan="2">NOT APPLICABLE</td>
									<td>NOT APPLICABLE</td>
									<td>NOT APPLICABLE</td>
									<td>NOT APPLICABLE</td>
									<td></td>
									<td>NOT APPLICABLE</td>
								</tr>
								<tr>
									<td class="sideClr">OWNERSHIP</td>
									<td colspan="2">MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY)</td>
									<td>NOT APPLICABLE</td>
									<td>MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY); NOT APPLICABLE IF BUSINESS VINTAGE >= 3 YEARS,2 YEARS IF AVERAGE MONTHLY EDC CREDIT >= INR 1.00 LAC</td>
									<td>MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY)</td>
									<td>NOT APPLICABLE</td>
									<td>MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY) BUT NOT IN SITTING CHAWL									</td>
									<td>MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY) BUT NOT IN SITTING CHAWL	</td>
									<td>MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY) BUT NOT IN SITTING CHAWL</td>
									<td></td>
									<td>MANDATORY ANY 1 (RESIDENCE OR COMMERCIAL PROPERTY) BUT NOT IN SITTING CHAWL</td>
								</tr>
								
								<tr>
									<td class="sideClr">STANDARD OF LIVING</td>
									<td>AVERAGE [AS VERIFIED BY FI]; IF POOR DECLINE</td>
									<td colspan="2">GOOD [AS VERIFIED BY FI]; IF POOR DECLINE</td>
									<td>AVERAGE [AS VERIFIED BY FI]; IF POOR DECLINE</td>
									<td colspan="2">NOT APPLICABLE</td>
									<td>AVERAGE [AS VERIFIED BY FI]; IF POOR DECLINE</td>
									<td>AVERAGE [AS VERIFIED BY FI]; IF POOR DECLINE</td>
									<td>GOOD [AS VERIFIED BY FI]; IF POOR DECLINE</td>
									<td></td>
									<td>GOOD [AS VERIFIED BY FI]; IF POOR DECLINE</td>
								</tr>
								<tr>
									<td class="sideClr">ITR</td>
									<td colspan="4">COPY NOT REQUIRED</td>
									<td colspan="2">COPY NOT REQUIRED</td>
									<td>COPY NOT REQUIRED</td>
									<td>COPY NOT REQUIRED</td>
									<td>COPY NOT REQUIRED</td>
									<td>COPY NOT REQUIRED</td>
									<td>COPY NOT REQUIRED</td>
								</tr>
								<tr>
									<td class="sideClr">BANKING</td>
									<td colspan="3">L6M (MAXIMUM 2 BANK ACCOUNTS TO BE COLLECTED ONLY)</td>
									<td>L3M (MAXIMUM 2 BANK ACCOUNTS TO BE COLLECTED ONLY)</td>
									<td colspan="2">NOT APPLICABLE</td>
									<td>L6M (MAXIMUM 2 BANK ACCOUNTS TO BE COLLECTED ONLY)</td>
									<td></td>
									<td>L6M (MAXIMUM 2 BANK ACCOUNTS TO BE COLLECTED ONLY)</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td class="sideClr">BUSINESS SET-UP PHOTOGRAPHS</td>
									<td colspan="4">MANDATORY</td>
									<td colspan="2">MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
								</tr>
								<tr>
									<td class="sideClr">KYC:</td>
									<td colspan="4"></td>
									<td colspan="2"></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td class="sideClr">PAN CARD</td>
									<td colspan="4">MANDATORY</td>
									<td colspan="2">MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
								</tr>
								<tr>
									<td class="sideClr">AADHAAR CARD</td>
									<td colspan="4">MANDATORY</td>
									<td colspan="2">MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
									<td>MANDATORY</td>
								</tr>
								<tr>
									<td class="sideClr">CURRENT ADDRESS PROOF</td>
									<td colspan="4">MANDATORY(ANY ONE)</td>
									<td colspan="2">MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
								</tr>
								<tr>
									<td class="sideClr">BUSINESS ADDRESS PROOF</td>
									<td colspan="4">MANDATORY(ANY ONE)</td>
									<td colspan="2">MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
								</tr>
								<tr>
									<td class="sideClr">BUSINESS VINTAGE PROOF</td>
									<td colspan="3">MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)(DRUG LICENSE PREFERED)</td>
									<td colspan="2">MANDATORY(ANY ONE)(DRUG LICENSE PREFERED)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
								</tr>
								<tr>
									<td class="sideClr">OWNERSHIP PROOF</td>
									<td colspan="4">MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>not applicable</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
									<td>MANDATORY(ANY ONE)</td>
								</tr>
							</table>
			
	</section>
		</div>
			</div>
            	</div>         
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
	<script src="/upf-system/resources/ui_content/dist/js/LOS/forAllLos.js"></script>
<script>
$(function(){
	$('.polCls').hide();
	$("#userNameHeadId").text(localStorage.getItem('userName'));
	$('#creditPolSecId').show(); 
	 /* 	$(document).on("contextmenu",function(){
	       return false;
	    });  */
	 	/* $(document).on('keydown',function(e) { 
	 	    if(e.ctrlKey && (e.key == "p" || e.key== "c" || e.key == "s" || e.charCode == 67 || e.charCode == 83 || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
	 	    	e.cancelBubble = true;
	 	        e.preventDefault();
	 	        e.stopImmediatePropagation();
	 	    }  
	 	});  */
	 	requestData(API_CREDITPOLICY_POST+" "+$("#userNameHeadId").text(), "POST").done(function (reply) {
			if(reply.reply=="success"){

				$('.sideClr').css('background-color', '#DEEAF6');
			 	$('.sideClr').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');
			 	
			 	$('.headClr').css({'background-color' : '#5B9BD5', 'color' : '#fff !important;'});
			 	$('.headClr').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');
			 	
			 	//SBL 
			 	
			 	$('#lddPolSecTblId').css('background-color', '#e0dbdb');
			 	$('#lddPolSecTblId').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');
			 	
			 	// BL
			 	$('#creditPolTblId').css('background-color', '#e0dbdb');
			 	$('#creditPolTblId').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');
			 	
			 // BL Light
			 	$('#blLightTblId').css('background-color', '#e0dbdb');
			 	$('#blLightTblId').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');
			 	
			 // BL HT
			 	$('#blHtTblId').css('background-color', '#e0dbdb');
			 	$('#blHtTblId').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');
			 	
			 	// Other Guidlines
			 	$('#mdbbPolTblId').css('background-color', '#e0dbdb');
			 	$('#mdbbPolTblId').css('background-image', 'url(http://'+window.location.hostname+'/userNameWM/%20'+(reply.filepath).trim()+')');	
			  
			}
		}); 
});

function mdbb(){
	$('#bl_light').hide();
	$('#bl_ht').hide();
	$('#lddPolSecId').hide();
	$('#creditPolSecId').hide();
	$('#mdbbPolSecId').show();
    $('nav').css({'width':'1119px'});  
}
function ldd(){
	$('#bl_light').hide();
	$('#bl_ht').hide();
	$('#lddPolSecId').show();  
	$('#creditPolSecId').hide();
	$('#mdbbPolSecId').hide();
	$('nav').css({'width':'2425px'});     
}
function credit(){
	$('#bl_light').hide();
	$('#bl_ht').hide();
	$('#lddPolSecId').hide();
	$('#creditPolSecId').show();
	$('#mdbbPolSecId').hide();
	$('nav').css({'width':'1119px'});         
}
function bl_light(){
	$('#lddPolSecId').hide();
	$('#creditPolSecId').hide();
	$('#mdbbPolSecId').hide();
	$('#bl_ht').hide();
	$('#bl_light').show();
	$('nav').css({'width':'1119px'});         
}
function bl_ht(){
	$('#lddPolSecId').hide();
	$('#creditPolSecId').hide();
	$('#mdbbPolSecId').hide();
	$('#bl_light').hide();
	$('#bl_ht').show();
	$('nav').css({'width':'1119px'});         
}
</script>

</body>
</html>