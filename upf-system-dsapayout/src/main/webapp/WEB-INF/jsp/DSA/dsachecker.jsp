<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>DSA Checker</title>
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
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
<link rel="stylesheet"
	href="/upf-system/resources/ui_content/bootstrap/css/bootstrap.min.css">

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
    border-top: 0px solid #f4f4f4;
}
.box-header {
margin-top:10px !important;
padding : 0px !important;
}
.a-color{
color:red;
}
input::placeholder {
  color: #727272 !important;
}
#searchBoxDsaId::placeholder {
  color: #a09d9d !important;
}
#searchBoxSmId::placeholder {
  color: #a09d9d !important;
}
/* .ui-autocomplete {
    overflow: auto !important;
    height: 100% !important;
    width : 50% !important;
} */
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId" style="background-color:#ecf0f5 !important;">
	
	<div class="wrapper">
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
						<li id="liIdHead"><a><b>Users</b></a></li>
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
      <div class="">
        <!-- left column -->
        <div class="col-md-10 col-md-offset-1">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border" id="tblHeaderId">
           	<div class="row">
           	<div class="col-md-4">
           	<table class="table">
           	<tr>
           	<td colspan="1" class="a-center">Select User :</td>
           	<td colspan="2">
           	<select class="form-control" id="slctRoleSrchId"  disabled>
           		
           	</select>
           	</td>
           	</tr>
           	</table> 
           	</div>
           	<div class="col-md-6">
           	<table class="table">
           	<tr id="srchBxDispId">
           	
           	</tr>
           	</table> 
           	</div>
           	<div class="col-md-2">
           	<table class="table">
           	<tr id="btnAddUsrDisId">
           
           	</tr>
           	</table> 
           	</div>
           	</div>
           	</div>
          </div>
        </div>
      </div></div>
      
       			<div id="dsaShowId" style="display:none;">
             	<form id="dsaFormId" onsubmit="$_dsaPost(event);" autocomplete="off">
				<div class="row" id="dsaCodeRowId" style="background-color: #fff; padding-top:20px;padding-bottom:10px;">
					<div class="col-md-2">
					</div>
					<div class="col-md-2">
					</div>
					<div class="col-md-1">
					<span id="panTextHidId" class="a-dis"></span>
		            <span id="aadhaarTextHidId" class="a-dis"></span>
		            <span id="shpActTextHidId" class="a-dis"></span>
		            <span id="canChckTextHidId" class="a-dis"></span>
		            <span id="agrmntTextHidId" class="a-dis"></span>
		          
		            <span id="panNmHidId" class="a-dis"></span>
		            <span id="aadhaarNmHidId" class="a-dis"></span>
		            <span id="shpActNmHidId" class="a-dis"></span>
		            <span id="canChckNmHidId" class="a-dis"></span>
		            <span id="agrmntNmHidId" class="a-dis"></span>
		          
		            <span id="panPthHidId" class="a-dis"></span>
		            <span id="aadhaarPthHidId" class="a-dis"></span>
		            <span id="shpActPthHidId" class="a-dis"></span>
		            <span id="canChckPthHidId" class="a-dis"></span>
		            <span id="agrmntPthHidId" class="a-dis"></span>
		          
		            <span id="dsaUserHidId" class="a-dis"></span>
		            <span id="dsaAppHidId" class="a-dis"></span>
		          
		            <span id="gstHidid" class="a-dis"></span>
		            <span id="gstCodeHidId" class="a-dis"></span>
		            <span id="hsnCodeHidId" class="a-dis"></span>
		            <span id="bankAccNameHidDsaId" class="a-dis"></span>
					</div>
					<div class="col-md-1"style="padding-top:5px;">
					DSA Code : 	
					</div>
					<div class="col-md-2">
						<input type="text" id="dsaCodeHidId" class="form-control" readonly>
					</div> 
					<div class="col-md-2">
					</div>
					<div class="col-md-2">
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;">
				<div class="col-md-12" align="center"><b style="font-size:17px;">Company Details</b></div>
				</div>
				<div class="row" style="background-color: #fff;  padding-bottom:15px;" align="center">
					<div class="col-md-2">Company Name<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<input type="text" class="form-control" id="cmpNameDsaId" required="required">
					</div>
					<div class="col-md-2">Company PAN<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<input type="text" maxlength="10" class="form-control" id="comPanDsaId" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required="required">
					</div>
				</div>
				<div class="row" style="background-color: #fff;  padding-bottom:15px;" align="center">
					
					<div class="col-md-2">Type of Company<span class="a-color">*</span> : </div>
					<div class="col-md-4">
 						<select class="form-control" id="constTypeDsaId" required="required">
			            <option></option>
			            <option>Proprietorship</option>
			            <option>Partnership</option>
			            <option>Private Ltd.</option>
			            <option>LLP</option>
			            </select></div>
					<div class="col-md-2">Business Since<span class="a-color">*</span> : </div>
					<div class="col-md-4">
						 <div class="input-group input-append date dateRangePicker">
                  	 	 <input type="text" class="form-control" name="date" id="busOpenDateDsaId" required="required"/>
                   		 <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
                 		 </div></div>
				</div>
				<div class="row" style="background-color: #fff;   padding-bottom:15px;" align="center">
					
					<div class="col-md-2">State<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<select class="form-control" id="stateSlctDsaId" required="required">
				            
				     </select>
				    </div>
					<div class="col-md-2">City<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<select class="form-control" id="citySlctDsaId" required="required">
           			</select> 
					</div>
					
				</div>
				<div class="row" style="background-color: #fff;   padding-bottom:15px;" align="center">
					<div class="col-md-2">Company Address<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<textarea rows="3" cols="1" class="form-control" id="compAddDsaId" required="required"></textarea>
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;">
				<div class="col-md-12" align="center"><b style="font-size:17px;">Contact Details</b></div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Contact Name<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<input type="text" class="form-control" id="contNameDsaId" required="required">
					</div>
					<div class="col-md-2">Mobile No<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<input type="text" maxlength="10" class="form-control" id="mobNumDsaId" pattern="(7|8|9)\d{9}" required="required">
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Email Id<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<input type="email" class="form-control" id="emailDsaId" required="required"/>
					</div>
					<div class="col-md-2">Address<span class="a-color">*</span> : </div>
					<div class="col-md-4">
					<textarea rows="3" cols="1" style="resize:none;" class="form-control" id="resdAddDsaId" required="required"></textarea>
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;">
				<div class="col-md-12" align="center"><b style="font-size:17px;">Bank Details</b></div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Bank Name<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<select class="form-control" id="bankNameDsaId" >
		            
		            </select>
					</div>
					<div class="col-md-2">Bank Account Name<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<input type="text" class="form-control" id="bankAccNameDsaId">
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Account Number<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<input type="text" class="form-control" id="accNumDsaId" pattern="[0-9]+">
					</div>
					<div class="col-md-2">IFSC Code<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<input type="text"  maxlength="11" class="form-control" id="ifscCodeId" pattern="[a-zA-Z]{4}[A-Z0-9]{7}">
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;">
				<div class="col-md-12" align="center"><b style="font-size:17px;">GST Details</b></div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">GST CODE<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<input type="text" minlength="14" maxlength="15" class="form-control" id="gstCodeId" pattern="[A-Za-z0-9]+">
					</div>
					<div class="col-md-2">HSN Code<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<input type="text" minlength="4" maxlength="8" class="form-control" id="hsnCodeId" pattern="[0-9]{4}|[0-9]{5}|[0-9]{6}|[0-9]{7}|[0-9]{8}">
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">STATE CODE<span class="a-color"></span> : </div>
					<div class="col-md-4">
					<input type="text"  maxlength="10" class="form-control" id="stateCodeId" readonly>
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;">
				<div class="col-md-12" align="center"><b style="font-size:17px;">Uploads</b></div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Upload PAN<span class="a-color">*</span> : </div>
					<div class="col-md-3">
					<input type="file" id="uploadPanDsaId" name="Pan" class="filestyle fileCls" accept="image/jpeg, image/png, application/pdf, image/*" required data-buttonBefore="true">
					</div>
					<div class="col-md-1">  
					<span class="dwnldIcnCls"><span class="dwnldFilePan"></span></span>
					</div>
					<div class="col-md-2">Upload Aadhaar<span class="a-color">*</span> : </div>
					<div class="col-md-3">
					<input type="file" id="uploadAdhDsaId" name="Aadhaar" class="filestyle fileCls" accept="image/jpeg, image/png, application/pdf, image/*" required data-buttonBefore="true">
					</div>
					<div class="col-md-1">
					<span class="dwnldIcnCls"><span class="dwnldFileAadhaar"></span></span>
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Upload Shopact<span class="a-color">*</span> : </div>
					<div class="col-md-3">
					<input type="file" id="uploadShopActId" name="ShopAct" class="filestyle fileCls" accept="image/jpeg, image/png, application/pdf, image/*" required data-buttonBefore="true">
					</div>
					<div class="col-md-1">  
					<span class="dwnldIcnCls"><span class="dwnldFileShopAct"></span></span>
					</div>
					<div class="col-md-2">Upload Cancelled Cheque<span class="a-color">*</span> : </div>
					<div class="col-md-3">
					<input type="file" id="uploadCnclChckId" name="CancelledCheque" class="filestyle fileCls" accept="image/jpeg, image/png, application/pdf, image/*" required data-buttonBefore="true">
					</div>
					<div class="col-md-1">
					<span class="dwnldIcnCls"><span class="dwnldFileCanCheq"></span></span>
					</div>
				</div>
				<div class="row" style="background-color: #fff; padding-bottom:15px;" align="center">
					<div class="col-md-2">Upload Agreement<span class="a-color">*</span> : </div>
					<div class="col-md-3">
					<input type="file" id="uploadAgrmntId" name="Agreement" class="filestyle fileCls" accept="image/jpeg, image/png, application/pdf, image/*" required data-buttonBefore="true">
					</div>
					<div class="col-md-1">  
					<span class="dwnldIcnCls"><span class="dwnldFileAgreement"></span></span>
					</div>
				</div>
				<!-- <div class="row" style="background-color: #fff; padding-bottom:15px;">
					<div class="col-md-12">
						<table class="table table-bordered table-condensed">
							<thead>
								<tr  class="leftbgcolor">
								<td>Disbursal in Cr.</td>
								<td>Min Files Disbursed</td>
								<td>Monthly Payout (%)</td>
								</tr>
							</thead>
							<tbody>
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
					</div>
				</div> -->
				<!-- <div class="row"  align="center" style="background-color: #fff;">
					<div class="col-md-12">
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
				</div> -->
				<!-- <div class="row"  align="center" style="background-color: #fff;">
					<div class="col-md-3">
							
					</div>
					<div class="col-md-6">
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
					<div class="col-md-3">
							
					</div>
				</div> -->
					<div style="padding-top:20px; padding-bottom:10px;" align="center">
						<button type="submit" class="btn btn-success" id="btnDsaSbmt">Submit</button>
					</div>
			</form>
			</div>
       
 
      
      <div class="row" id="smShowiD" style="display:none;">
      <div class="col-md-12"> 
      <div id="smForm">
      <form id="smFormId" onsubmit="$_smPost(event)" autocomplete="off">
      <div class="row" style="background-color: #fff;">
      	<div class="col-md-6">
      		<table class="table">
      			<tr>
      			<td id="smAppHidId" class="a-dis"></td>
      			<td id="smUserHidId" class="a-dis"></td>
      			<td>Name<span class="a-color">*</span>:</td>
      			<td><input type="text" class="form-control" id="smNameId" required="required"></td>
      			</tr>
      			<tr>
      			<td>Email Id<span class="a-color">*</span>:</td>
      			<td><input type="email" class="form-control" id="smEmailId" required="required"></td>
      			</tr>
      			<tr id="proTypeTrId">
				<td>Product Type<span class="a-color">*</span> : </td>
				<td>
				<select class="form-control" id="prodTypeSmId" required="required">
					<option value=""></option>
					<option value="BL">BL</option>
					<option value="SBL">SBL</option>
				</select>
				</td>
				</tr>
				<tr id="stateSmTrId">
				<td>State<span class="a-color">*</span> : </td>
				<td>
				<select class="form-control" id="stateSlctSmId" required="required">
									
				</select>
				</td>
				</tr>
				<tr  id="appLnAmntSmTrId">
      			<td>Approval Loan Amount<span class="a-color">*</span>:</td>
      			<td><input type="text" class="form-control" id="appLoanAmntId" required="required" pattern="[0-9]+"></td>
      			</tr>
      		</table>
      	</div>
      	<div class="col-md-6">
      		<table class="table">
      			<tr>
      			<td>Employee Id<span class="a-color">*</span>:</td>
      			<td><input type="text" class="form-control" id="empSmId" required="required"></td>
      			</tr>
      			<tr>
      			<td>Contact Number<span class="a-color">*</span>:</td>
      			<td><input type="text" maxlength="10" class="form-control" id="smContctNumId" pattern="(7|8|9)\d{9}" required="required"></td>
      			</tr>
      			<tr id="citySmTrId">
				<td>City<span class="a-color">*</span> :</td>
				<td>
				<select class="form-control" id="citySlctSmId" required="required">
									
				</select>
				</td>
				</tr>
      		</table>
      	</div>
      	<div style="padding-top:150px; padding-bottom:10px; padding-left:550px; padding-right:550px;" align="center">
			<button type="submit" class="btn btn-success" id="btnSmSbmt">Submit</button>
	  </div>
      </div>
      </form>
      </div></div></div>
    </section>
	</div>
	 <footer class="main-footer" id="footer" style="background:#ECF0F5;border-top: 0px solid #ECF0F5;"></footer>
	</div>
	
	
	<button type="button" class="btn btn-info btn-lg a-dis" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" id="sucModalWindId">Open Modal</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"></button>
          <h4 class="modal-title">Success</h4>
        </div>
        <div class="modal-body">
          <h4 style="text-align:center;"><span id="sucMgsId"></span></h4>
          <h4 style="text-align:center;" id="dsaHtmlId"></h4>
          <h4 style="text-align:center;">Application Id is - <b id="appId"></b></h4>
        </div>
        <div class="modal-footer">
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

	<script src="/upf-system/resources/ui_content/dist/js/LOS/forAllLos.js"></script>
	<script src="/upf-system/resources/ui_content/dist/js/LOS/user.js"></script>
<script src="/upf-system/resources/ui_content/plugins/bootstrap.filestyle/js/bootstrap-filestyle.min.js"></script>
 <script src="/upf-system/resources/ui_content/plugins/toastr/toastr.min.js"></script>
<script type="text/javascript">

</script>
</body>
</html>