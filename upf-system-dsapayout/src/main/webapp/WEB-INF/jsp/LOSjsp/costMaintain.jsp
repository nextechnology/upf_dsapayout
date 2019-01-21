<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Application MIS</title>
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
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
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
.glyphicon-ok-circle{
color:green !important;
padding-right:10px;
}
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" style="background-color:#ecf0f5 !important;">
	<button type="button" class="btnSuccessCls" style="display:none;">Success</button>
	<span class="a-dis" id="dsaCodeId"></span>
	<div class="wrapper">
	<div id="headerId"></div>
	<!-- <header class="main-header m-layer" id="headerId">
			<a href="/upf-system-dsapayout/upf/debitCredit/welcome" class="logo"> <span class="logo-lg">
					<img src="/upf-system-dsapayout/resources/ui_content/dist/img/KTlogo.png"
					class="m-KTBrandCls" alt="KapitalTech">
				</span>
			</a>

			<nav class="navbar navbar-static-top" role="navigation" style="width:3000px;">
				<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
					role="button"  id="btntoggleClick"> <span class="sr-only">Toggle navigation</span>
				</a>
				<div class="" align="center">
					<ul class="nav navbar-nav">
						<li id="liIdHead"><a><b>Application MIS</b></a></li>
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
	 
	 	<div>
					<form onsubmit="$_searchSbmt(event);">
					<div class="row col-md-offset-2">
					<div class="col-md-2">
						<select id="proTypCostId" class="form-control" required>
					    	<option value="">Product Type</option>
					    	<option value="1">BL</option>
					    	<option value="4">SBL</option>
					    	</select> 
					</div>
					<div class="col-md-2"> 
						<select id="yearAdmin" class="form-control" required="required">
						
						</select>
					</div>
					<div class="col-md-2">
						<select id="monthAdmin" class="form-control" required="required">
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
					<div class="col-md-2">
						<select id="roleAdmin" class="form-control" disabled>
							<option>DSA</option>
						</select>
					</div>
					<div class="col-md-2">
						<!-- <select id="cityAdmin" class="form-control">
							<option value="">Select City</option>
						</select> -->
					</div>
					</div> 
					<div class="row" style="padding-top:10px;padding-left:50px;">  
						<div class="col-md-11">
						<div class="input-group">
							 <span class="input-group-btn">
							 <input type="text" class="form-control" id="searchBoxCstMntgId"
								placeholder="Search by Company Name, DSA Code, Company PAN, State, City" autocomplete="off">
								<button type="submit" id="searchBtnCstMntgId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"><span style="font-size: 16px;"></span></i>
								</button>
							</span>
						</div>
					</div>
					</div>
					</form>
				</div>
				
				<div>
					<div class="row" style="padding-top:20px;padding-left:20px;">   
						<div class="col-xs-12">
							<form id="CstMtngFrmId" class="a-dis">
								<table class="table table-bordered table-hover" id="costMainTblId" style="width:1900px; background:#fff;">
									<thead>
										<tr style="align:center;background-color:#ffb375;">
										<td>COUNT</td>
										<td></td>
										<td></td>
										
										<td></td>
										<td></td>
										<td class="dsaHideCls"></td>
										<td class="dsaHideCls"></td>
										
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
										<td></td>
										<td></td>
										<td></td>
										</tr>
										<tr style="align:center;background-color:#ffb375;">
										<td>SUM</td>
										<td></td>
										<td></td>
										
										<td></td>
										<td></td>
										<td class="dsaHideCls"></td>
										<td class="dsaHideCls"></td>
										
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
										<td></td>
										<td></td>
										<td></td>
										</tr>
										<tr style="align:center;background-color:#ffb375;">
										<td>AVERAGE</td>
										<td></td>
										<td></td>
										
										<td></td>
										<td></td>
										<td class="dsaHideCls"></td>
										<td class="dsaHideCls"></td>
										
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
										<td></td>
										<td></td>
										<td></td>
										</tr>
										<tr style="align:center;"  class="leftbgcolor">  
											<th onclick="sortTable(3);" class="sortCls">S NO<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(4);" class="sortCls" style="min-width: 85px">State<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(5);" class="sortCls" style="min-width: 85px">Location<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(6);" class="sortCls">Company Name<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(7);" class="sortCls">Sales Manager<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(8);" class="sortCls dsaHideCls">DSA Code<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(9);" class="sortCls dsaHideCls">DSA<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<!-- <th onclick="sortTable(9);" class="sortCls">Status<span  class="glyphicon glyphicon-sort pull-right"></span></th> -->
											<th onclick="sortTable(10);" class="sortCls">Sanctioned Amount<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(12);" class="sortCls">Defined Pay Rate<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(12);" class="sortCls">Subvention<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(13);" class="sortCls">Net Pay Rate<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(14);" class="sortCls"  style="min-width:88px">Include (Yes/No)<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(15);" class="sortCls">Final Payout Amount<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(16);" class="sortCls">ROI<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(17);" class="sortCls">Interest Amount<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(18);" class="sortCls">PF<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(19);" class="sortCls">PF Amount<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(20);" class="sortCls">Frequency<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(21);" class="sortCls">LOS Id<span  class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(22);" class="sortCls">Payment Done<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(23);" class="sortCls">DSA Confirmation<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(24);" class="sortCls">Payment Date<span class="glyphicon glyphicon-sort pull-right"></span></th>
											<th onclick="sortTable(25);" class="sortCls">Remark<span class="glyphicon glyphicon-sort pull-right"></span></th>
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
								<div align="center">
									<table>
										<tr>
											<td><button type="button" id="btnCstMtgSbtId"
												class="btn btn-primary" onclick="$_cstMngSbmt(event)">Update</button></td>
												<td class="a-dis"><button type="submit" id="btnCstMtgSbtDmId"
												class="btn btn-primary"></button></td>
										</tr>
									</table>
								</div>
							</form>
						</div>
					</div>
				</div>
				
				<div class="row a-dis" style="padding-top:30px;" id="pieChartRowId">
					    <div class="col-md-3">
         					 
      					</div>
      					<div class="col-md-6">
         					 <div class="box box-primary">
              					<div class="box-body">
									<canvas id="pieChartId"></canvas>
          						</div>
          						<div align="center" style="padding-top:20px; padding-bottom:20px;">
          						<button type="button" id="finalSbmtId" class="btn btn-success" onclick="$_actualSbmt();">Submit to DSA</button>
          						</div>
       						 </div>
      					</div>
      					<div class="col-md-3">
         					 
      					</div>
				</div>
				
				<!-- 	<div id="dialog-message" title="Success" id="diagMsgDivId" class="a-dis">
  						<p style="text-align:center;" style="padding-top:500px;">
   							 <span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
   							 Data Saved Successfully. 
  						</p>
					</div> -->
					


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
          <h4 style="text-align:center;"><span id="sucMgsId"><span class="glyphicon glyphicon-ok-circle"></span>Data Saved Successfully.</span></h4>
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
	<!-- <script
		src="/upf-system-dsapayout/resources/ui_content/plugins/jQueryUI/jquery-ui.min.js"></script> -->
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
	<script src="/upf-system-dsapayout/resources/ui_content/dist/js/LOS/costMaintaining.js"></script>
	<script src="/upf-system-dsapayout/resources/ui_content/plugins/bootstrapTable/sortable.js"></script>
	<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
	 <script src="/upf-system-dsapayout/resources/ui_content/plugins/bootstrapTable/salesmis.js"></script>
<script type="text/javascript">



</script>
</body>
</html>