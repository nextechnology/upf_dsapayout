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
<link rel="stylesheet"
	href="/upf-system-dsapayout/resources/ui_content/plugins/jqueryConfirm/jquery-confirm.min.css">
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
.a-dis {
display:none; !important;
} 
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

select.slctDCCls:valid,
.remarkCls:valid {
	border: 1px solid #d2d6de !important;
}

select.slctDCCls:invalid,
.remarkCls:invalid{
	border: 2px solid #f21524 !important;
}
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" style="background-color:#ecf0f5 !important;">
	<button type="button" class="btnSuccessCls" style="display:none;">Success</button>
	<span class="a-dis" id="dsaCodeId"></span>
	<div class="wrapper" >
	<div id="headerId"></div>
	<!-- <header class="main-header m-layer" id="headerId">
			<a href="javascript:void(0);" class="logo"> <span class="logo-lg">
					<img src="/upf-system-dsapayout/resources/ui_content/dist/img/KTlogo.png"
					class="m-KTBrandCls" alt="KapitalTech">
				</span>
			</a>

			<nav class="navbar navbar-static-top" role="navigation">
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
					role="button"  id="btntoggleClick"> <span class="sr-only">Toggle navigation</span>
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
	 <div class="container" id="welcmMsgId" style="padding-top:65px;"> 
    		<div class="row">
    		<div class="col-md-3"></div>
    		<div class="col-md-6">
    		<h4 style="text-align:center; font-size:22px;"><b>Hello  <span id="userNameWcId"></span></b></h4>
			<h4 style="text-align:center;">Welcome to the DSA application.</h4><br>
			<h4 style="text-align:center;">In this application you can do the following:-</h4>
			<ul style="padding-left:129px;">
			<li><h5>Application Status tracker.</h5></li>
			<li><h5>Payouts for disbursed cases based on monthly and quarterly parameters.</h5></li>
			<li><h5>Update GST details for showing on invoice.</h5></li>
			<li><h5>Creation of invoice based on monthly or quarterly basis</h5></li>
			</ul><br>    
			<h4 style="text-align:center; padding-left:50px;">Please explore the left navigation panel for the above options.</h4>
    		</div>
    		<div class="col-md-3"></div>
    		</div>
    </div>
   					<div class="row a-dis" style="padding-left:80px;" id="invoiceQrMnSlctId">    
             		<div class="col-md-3">
					</div>
					<div class="col-md-2">
					<select id="prodTypInvId" class="form-control resetCls">
					<option value="">Product Type</option>
					<option value="UBL">BL</option>
					<option value="SBL">SBL</option>
					</select>
             		</div>
             		<div class="col-md-2">
					<label><input type="radio" class="qtrInvmntCls invPayoutCls" name="invqtrmntrd" value="Month"><span style="padding-left:20px;">By Month</span></label>
             		</div>
             		<!-- <div class="col-md-2 a-dis">
             		<label><input type="radio" class="qtrInvmntCls invPayoutCls" name="invqtrmntrd"  value="Quarter"><span style="padding-left:20px;">By Quarter</span></label>
             		</div> -->
             		<div class="col-md-3">
					</div>
             		</div>
    	<div class="row a-dis" id="invoiceInitRowId">
    	<div class="col-md-3"></div>
    	<div class="col-md-1"></div>
    	<div class="col-md-2"  style="padding-top:20px;">
    		<select class="form-control resetCls" id="slctInvYr">
    			
    		</select>
    	</div>  
    	<div class="col-md-2"  style="padding-top:20px;">
    	<select  class="form-control resetCls" id="slctInvMnth">
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
    	<div class="col-md-1"></div>
    	<div class="col-md-3"></div>
    </div>
    
    
    <div class="row a-dis" id="invoiceQrtrRowId" style="padding-top:20px;">
    	<div class="col-md-3"></div>
    	<div class="col-md-1"></div>
    	<div class="col-md-2">
    		<select class="form-control resetCls" id="slctInvQrtrYr">
    			
    		</select>
    	</div>  
    	<div class="col-md-2">
    	<select  class="form-control resetCls" id="slctInvQrtrMnth">
    		<option value="">Select Quarter</option>
    		<option value="Q1">Apr - Jun</option>
			<option value="Q2">Jul - Sep</option>
			<option value="Q3">Oct - Dec</option>
			<option value="Q4">Jan - Mar</option>
    	</select>
    	</div>
    	<div class="col-md-1"></div>
    	<div class="col-md-3"></div>
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
    
    
     <div class="row a-dis" id="gstRowId">
        <div class="col-md-8 col-md-offset-2">
          <div class="box box-primary">
        <!-- <div class="box-header with-border">
        
              <h3 class="box-title">Access Assign To Role</h3>
            </div> -->
           
              <div class="box-body">
				<div id="gstId">
             		<form id="gstFormId" onsubmit="$_gstSubmit(event);">
             		<table class="table">
             		<tbody>
             		
             		<tr>
             		<td colspan="8" style="text-align:center; font-size:17px;;"><b>Company Details</b></td>
             		</tr>
             		<tr>
             		<td>Company Name<span class="a-color">*</span> : </td>
					<td><input type="text" class="form-control resetCls" id="cmpNameDsId" required="required"></td>
					<td>Company PAN<span class="a-color">*</span>:</td>
             		<td><input type="text" maxlength="10" class="form-control resetCls" id="compPanDsId" required="required" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"></td>
             		</tr>
             		<tr> 
             		<td>Company Address<span class="a-color">*</span>:</td>
             		<td><input type="text" class="form-control resetCls" id="compAddId" required="required"></td>
             		<td>State<span class="a-color">*</span> : </td>
					<td>
						<select class="form-control resetCls" id="stateSlctDsaId" required="required">
									
						</select>
					</td>
             		</tr>
             		<tr>
             		<td>City<span class="a-color">*</span> :</td>
					<td>
						<select class="form-control resetCls" id="citySlctDsaId" required="required">
									
						</select>
					</td>
             		</tr>
             		<tr>
             		<td colspan="8" style="text-align:center; font-size:17px;;"><b>Bank Details</b></td>
             		</tr>
             		<tr>
             		<td>Bank Name<span class="a-color">*</span> : </td>
					<td>
							<select class="form-control resetCls" id="bankNameDsaId" required="required">
									
							</select>
					</td>
					<td>Bank Account Name<span class="a-color">*</span> : </td>
					<td>    
						<input type="text" class="form-control resetCls" id="bankAccNameDsaId" required="required"/>
					</td> 
             		</tr>
             		<tr>
             			<td>Account Number<span class="a-color">*</span> : </td>
						<td>
							<input type="text" class="form-control resetCls" id="accNumDsaId" required="required">
						</td>
						<td>IFSC Code<span class="a-color">*</span> : </td>
						<td>
							<input type="text" maxlength="11" class="form-control resetCls" id="ifscCodeId" required="required" pattern="[a-zA-Z]{4}[0-9]{7}">
						</td>
             		</tr>
             		<tr>
             		<td colspan="8" style="text-align:center; font-size:17px;;"><b>GST Details</b></td>
             		</tr>
             		<tr>
             		<td>GST CODE<span class="a-color">*</span>:</td>
             		<td><input type="text" minlength="14" maxlength="15" class="form-control resetCls" id="gstCodeId" required="required"></td>
             		<td>HSN CODE<span class="a-color">*</span>:</td>
             		<td><input type="text"  maxlength="8" class="form-control resetCls" id="hsnCodeId" required="required" pattern="[0-9]{4}|[0-9]{8}"></td>
             		</tr>
             		<tr style="align:center;">
             		<td>STATE CODE<span class="a-color">*</span>:</td>
             		<td><input type="text"  maxlength="10" class="form-control resetCls" id="stateCodeId" readonly required="required"></td>
             		</tr>
             		</tbody>
             		</table>
             		<div align="center">
             		<input type="submit" class="btn btn-success" value="Submit">
             		</div>
             		</form>
             	</div>
             </div>
          </div>
        </div>
      </div>
      
      <div class="row a-dis" id="payOutRowId">
        <div class="col-md-6">
          <div class="box box-primary">
        <!-- <div class="box-header with-border">
        
              <h3 class="box-title">Access Assign To Role</h3>
            </div> -->
           
              <div class="box-body">
				<div id="payoutId">
             		<div class="row">
             		<div class="col-md-1"></div>
             		<div class="col-md-3">
             		<select id="dsaProTypId" class="form-control resetCls payoutCls">
             		<option value="">Product Type</option>
             		<option value="UBL">BL</option>
             		<option value="SBL">SBL</option>
             		</select>
					</div>
             		<div class="col-md-3">
					<label><input type="radio" class="qtrmntCls payoutCls" name="qtrmntrd" value="Month"><span style="padding-left:20px;">By Month</span></label>
             		</div>
             		<!-- <div class="col-md-3 a-dis" id="qrtrlyRadColId">
             		<label><input type="radio" class="qtrmntCls payoutCls" name="qtrmntrd"  value="Quarter"><span style="padding-left:20px;">By Quarter</span></label>
             		</div> -->
             		<div class="col-md-2">
					</div>
             		</div>
          
             		<div class="row a-dis" style="padding-top:30px;"  id="mnthDivId">
             		<div class="col-md-2">
					<span>By Year<span class="a-color">*</span>:</span>
					</div>
             		<div class="col-md-4">
					<select class="form-control resetCls payoutCls" id="byYearMnth">
					
					</select>
             		</div>
             		<div class="col-md-2">
             		<span>By Month<span class="a-color">*</span>:</span>
             		</div>
             		<div class="col-md-4">
					<select class="form-control resetCls payoutCls" id="byMnthMnth">
					<option value="">Select Month</option>
					<option value="1">January</option>
					<option value="2">February</option>
					<option value="3">March</option>
					<option value="4">April</option>
					<option value="5">May</option>
					<option value="6">June</option>
					<option value="7">July</option>
					<option value="8">August</option>
					<option value="9">September</option>
					<option value="10">October</option>
					<option value="11">November</option>
					<option value="12">December</option>  
					</select>
             		</div>
             		</div>
             		
             		<div class="row a-dis" style="padding-top:30px;" id="qrtrDivId">
             		<div class="col-md-2">
					<span>By Year<span class="a-color">*</span>:</span>
					</div>
             		<div class="col-md-4">
					<select class="form-control resetCls payoutCls" id="byYearQrtr">
					
					
					</select>
             		</div>
             		<div class="col-md-2">
             		<span>By Quarter<span class="a-color">*</span>:</span>
             		</div>
             		<div class="col-md-4">
					<select class="form-control resetCls payoutCls" id="byQrtrQtr">
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
             			<input type="text" class="form-control resetCls" id="finlPyOtTtlAmnt" readonly>
             			</div>
             		</div>
             		</div>
             		<div id="finalShowQrtId" class="a-dis">
             		<div class="row" style="padding-top:20px;padding-left:150px;" align="center"> 
             			<div class="col-md-4">
             				<span>Sanction Amount Total</span>
             			</div>
             			<div class="col-md-4">
             			<input type="text" class="form-control resetCls" id="sancTtlAmnt" readonly>
             			</div>
             		</div>
             		<div class="row hideQrtrCls" style="padding-top:20px;"> 
             			<div class="col-md-3">
             				<span>Quarterly Slab</span>
             			</div>
             			<div class="col-md-3">
             			<input type="text" class="form-control resetCls" id="qrtrlySlbId" readonly>
             			</div>
             			<div class="col-md-2" align="center">
             				<span>X</span>
             			</div>
             			<div class="col-md-3">
             			<input type="text" class="form-control resetCls" id="snctnAmntTtl" readonly>
             			</div>
             		</div>
             		<div class="row" style="padding-top:20px;padding-left:150px;" align="center"> 
             			<div class="col-md-4">
             				<span>Quarterly Incentives</span>
             			</div>
             			<div class="col-md-4">
             			<input type="text" class="form-control resetCls" id="qrtrlyTtlPayout" readonly>
             			</div>
             		</div>
             		</div>
             </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-6 a-dis" id="pieChartDivId">
          <div class="box box-primary">
        <!-- <div class="box-header with-border">
        
              <h3 class="box-title">Access Assign To Role</h3>
            </div> -->
           
              <div class="box-body a-dis" id="pieDivId">
				<canvas id="pieChartId"></canvas>
          	</div>
          	<div class="box-body a-dis" id="barDivId">
				<canvas id="barChartId"></canvas>
          	</div>
        </div>
      </div>
      </div>
      <div class="row col-md-offset-3 a-dis" id="prodRowId">
      <div class="col-md-3">
      	<select class="form-control" id="prodTypDsaId">
	  	<option value="">Select Product Type</option>
	  	<option value="1">BL</option>
	  	<option value="4">SBL</option>   
	  	</select>      
	  </div>
	  <div class="col-md-2"> 
						<select id="yearDSA" class="form-control filterDSA" required="required" disabled>
						
						</select>
					</div>
					<div class="col-md-2">
						<select id="monthDSA" class="form-control filterDSA" required="required" disabled>
						<option value="">Select Month</option>
						
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
						</select>
					</div>
      </div>
    				 <div class="row" style="padding-top:20px;">
						<div class="col-md-12" style="float:none">
							<form id="statAppRwId" class="a-dis" onsubmit="$_payoutSbmt(event);">
								
								<!-- <div align="center">
									<table>
										<tr>
											<td><button type="button" id="btnCstMtgSbtId"
												class="btn btn-primary" onclick="$_cstMngSbmt(event)">Update</button></td>
												<td class="a-dis"><button type="submit" id="btnCstMtgSbtDmId"
												class="btn btn-primary"></button></td>
										</tr>
									</table>
								</div> -->
							</form> 	
						</div>
					</div>
					<div class="row a-dis" id="invoiceRowId">
						<div class="col-md-6 col-md-offset-3">
						<form onsubmit="$_postInvoice(event);">
						<table class="table table-bordered a-dis" id="invListTblId">
							<thead>
								<tr class="leftbgcolor">
									<td>Origination State</td>
									<td>Billing State</td>
									<td>GST No</td>
									<td>Invoice No</td>
									<td>View/Download</td>
									<td>Edit</td>
								</tr>
							</thead>
							<tbody id="invListTblBdyId" style="background-color: white;"> 
								
							</tbody>
						</table>
						<div align="center" >
						<input type="submit" id="invSbmtId" class="btn btn-success" value="Generate">
						</div>
						</form>
						</div>
					</div>
					<div align="center" style="padding-top:20px; padding-bottom:20px;">
					<b id="subMsgErr" style="color: red;" class="a-dis">Please submit before leaving the page !</b><br>
					<input type="button" id="dsaSbmtSecondId" class="btn btn-success a-dis" value="Submit" onclick="$_finalPost(event);">		
					</div>
					
      
    </section>
	</div>
	</div>
	
	<!-- Modal -->
  <button type="button" class="btn btn-info btn-lg a-dis" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" id="sucModalWindId"></button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog" style="height:350px;width:400px;">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" id="sucMwHdrId" style="background-color:#9ffc85; color:#000;padding:9px !important;">
          
        </div>
        <div class="modal-body">
          <h4 style="text-align:center;"><span id="sucMgsId"></span></h4>
          <span class="a-dis" id="delSpanId"></span>
        </div>
        <div class="modal-footer" id="sucMwFtrId" style="padding:7px !important;">
          
        </div>
      </div>
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
		src="/upf-system-dsapayout/resources/ui_content/plugins/jqueryConfirm/jquery-confirm.min.js"></script>
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
		src="/upf-system-dsapayout/resources/ui_content/plugins/toastr/toastr.min.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/bankSummary.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/stressTest.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/qualitative.js"></script>
	<script
		src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/snapShot.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/forAllLos.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/camUI/dsa.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/plugins/canvas/canvasjs.min.js"></script>
<script type="text/javascript">

 

</script>
</body>
</html>