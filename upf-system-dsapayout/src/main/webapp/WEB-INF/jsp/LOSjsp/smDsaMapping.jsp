<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>DSA Mapping</title>
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
.glyphicon-exclamation-sign{
color: #fca105 !important;
padding-right:10px;
}
.modal-dialog{
padding-top:12px !important;
}
.input-group .form-control {
    position: relative;
    z-index: 0 !important;
    float: left;
    width: 100%;
    margin-bottom: 0;
}
/* .ui-autocomplete {
    overflow: auto !important;
    height: auto !important;
    width : auto !important;
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
						<li id="liIdHead"><a><b>SM DSA Mapping</b></a></li>
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
      <!-- <div class="row">
      <div class="">
        left column
        <div class="col-md-10 col-md-offset-1">
          general form elements
          <div class="box box-primary">
            <div class="box-header with-border" id="tblHeaderId">
           	<div class="row">
           	<div class="col-md-4">
           	<table class="table">
           	<tr>
           	<td colspan="1" class="a-center">Select User :</td>
           	<td colspan="2">
           	<select class="form-control" id="slctRoleSrchId" required>
           		
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
      </div></div> -->
      
      <div class="row">
      <div class="col-md-10 col-md-offset-1">
      <div id="smDsaForm">
      <div class="row" style="text-align: center;">
						<div class="col-md-10 col-md-offset-1">
							<div class="input-group">
							<div class="ui-widget">
								<input type="text" class="form-control" id="searchBoxDsaMapId"
									placeholder="Search by Company Name, DSA Code, Company PAN, State, City">
							</div>

							<span class="input-group-btn">
								<button type="button" id="btnSearchDsaMapId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
						</div>
					</div>
             	<form id="smDsaFormId" onsubmit="$_smDsaPost(event);" autocomplete="off">
					<div style="padding-top:20px;">
					<div class="row" style="background-color: #fff;">
					<div class="col-md-10 col-md-offset-1" style="padding-top:10px;">
					<table class="table table-bordered table-condensed" id="smdsaMapTblId">
						<thead>
						<tr class="a-center leftbgcolor">
								<td>Select State</td>
								<td>Select Product Type</td>
								<td>Select SM/SSM</td>
								<td></td>
								</tr>
						</thead>
						<tbody id="tblSmDsaRwBdyId">
								<!-- <tr id="rowId-1">
								<td class="a-dis" id="hidRowId-1"></td>
								<td class="a-dis" id="hidSmId-1"></td>
								<td>
									<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-1" required="required">
									
									</select>
								</td>
								<td>
									<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-1" required="required">
									</select> 
								</td>
								<td>
								<input type="text" class="form-control smSearchCls" id="smSrchTextId-1"
									placeholder="Search by Employee Id, Employee Name" required>
								</td>
								<td><button type="button" id="btnDelRowsId-1" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>
								</tr> -->
						</tbody>   
						<tfoot>
						<tr>
						<td colspan="3"></td>
						<td style="width:40px;"><button type="button" id="btnAddRowsId" class="btn btn-warning pull-right">+</button></td>
						</tr>
						</tfoot>
					</table>
					<div align="center" style="padding-bottom:10px;">
						<button type="submit" class="btn btn-success" id="btnDsaSmSbmt">Submit</button>
					</div>
				</div>
				</div>
				</div>
			</form>
           </div>
      </div>
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
var API_STATE_GET = '/upf-system/upf/dsa/getliststate'
	
	,API_CITY_GET = '/upf-system/upf/dsa/getlistcity?state='
	
	,API_SMLISTCITY_GET = '/upf-system/upf/dsa/empListonCity?city='
	
	,API_SMLISTPROD_GET = '/upf-system/upf/dsa/empListonCity?state='
			
	,API_SMDSA_POST = "/upf-system/upf/dsa/addsmdsa"
	
	,API_DSA_LIST = '/upf-system/upf/dsa/dsaList'
	
	,API_SMDSA_LIST = '/upf-system/upf/dsa/getmapList?dsaid='
	
	,API_SMDSA_DELETE = '/upf-system/upf/dsa/deletemap'
	
	,dsaList = {}
	,smList = {}
	,dsaId = 0
	,glblRowCnt = 0
	,selectSm = []
	;
$(function(){ 
	toasTr();
	$(document).on('click','#doneMsgOkId',function(){
	    window.location.reload();
	});
	$(document).on('change','.citySmDsaCls',function(){
		var id = $(this).attr('id').split('-')[1];
		$('#smSrchTextId-'+id).val("");
		$.getJSON(API_SMLISTCITY_GET+$(this).val()+"&role=SM","GET",function(data) {
			smList = data
		});
	});
	
	$(document).on('change','.proTypeSmDsaCls',function(){
		var id = $(this).attr('id').split('-')[1];
		$('#smSrchTextId-'+id).val("");
		$.getJSON(API_SMLISTPROD_GET+$('#stSlctSmDsaId-'+id).val()+"&role=SM&product="+$(this).val()+"&purpose=dsasmmap","GET",function(data) {
			smList = data
		});
	});
	
	$.getJSON(API_DSA_LIST,"GET",function(data) {
		dsaList = data
	});
	
	var stateList = "<option></option>";
	requestData(API_STATE_GET).done(function(getState){
		$(getState.data).each(function(k,v){
			stateList += '<option>'+v.state+'</option>';
		});
		$('#stSlctSmDsaId-1').html(stateList);
	});
	
	$(document).on('change','.stateSmDsaCls',function(){
		var value = $(this).val();
		var id = $(this).attr('id').split('-')[1];
		var cityList = "<option></option>";
		/* requestData(API_CITY_GET+value,'GET').done(function(getCity){
			$(getCity.data).each(function(k,v){
				cityList += '<option>'+v.city+'</option>';
			});
			$('#ciSlctSmDsaId-'+id).html(cityList);
		}); */
	}); 
	var tblRowData = "";
	$(document).on('click','#btnAddRowsId',function(){
		$('#ndfRwId').hide();	
		++glblRowCnt;
		tblRowData = '<tr id="rowId-'+glblRowCnt+'">'+
		'<td class="a-dis" id="hidRowId-'+glblRowCnt+'"></td>'+
		'<td class="a-dis" id="hidSmId-'+glblRowCnt+'"></td>'+
		'<td>'+
			'<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-'+glblRowCnt+'" required="required">'+
			
			'</select>'+
		'</td>'+
		/* '<td>'+
			'<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-'+glblRowCnt+'" required="required">'+
			'</select>'+
		'</td>'+ */
		'<td>'+
		'<select class="form-control proTypeSmDsaCls" id="proTypeSmDsaId-'+glblRowCnt+'" required="required">'+
		'<option></option>'+
		'<option value="BL">BL</option>'+
		'<option value="SBL">SBL</option>'+
		'</select>'+
		'</td>'+
		'<td>'+
		'<input type="text" class="form-control smSearchCls" id="smSrchTextId-'+glblRowCnt+'" required placeholder="Search by Employee Id, Employee Name">'+
		'</td>'+
		'<td><button type="button" id="btnDelRowsId-'+glblRowCnt+'" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>'+
		'</tr>';
		$('#tblSmDsaRwBdyId').append(tblRowData);
		$('#stSlctSmDsaId-'+glblRowCnt).html(stateList);
	});
	
	
	$(document).on('click','#btnSearchDsaMapId',function(){
		selectSm = [];
		glblRowCnt = 0;
		if($('#searchBoxDsaMapId').val() == ""){
			//alert("Please enter valid DSA.")
			//// $('#diagMsgDivId').show();
			$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
			$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
			$('#sucMgsId').html('<span class="glyphicon glyphicon-exclamation-sign"></span>Please enter valid DSA.');
			$('#sucMwFtrId').html('<div align="center">'+
			          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
			         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
			          				'</div>');
			$('#sucModalWindId').click();
		}else{
			$('#ndfRwId').hide();	
			var tblRowData = "";
			var getRowNo = 0;
			$('#smDsaFormId')[0].reset();
			for(i=2;i<=glblRowCnt;i++){
				$('#rowId-'+i).remove();
			}
			requestData(API_SMDSA_LIST+dsaId,"GET").done(function(reply){
				if(!$.isEmptyObject(reply)){
					$(reply).each(function(k,v){
						selectSm.push(v.sm_id);
						++getRowNo;
					if(getRowNo == 1){
						tblRowData += '<tr id="rowId-'+getRowNo+'">'+
						'<td class="a-dis" id="hidRowId-'+getRowNo+'">'+v.dsasmid+'</td>'+
						'<td class="a-dis" id="hidSmId-'+getRowNo+'">'+v.sm_id+'</td>'+
						'<td>'+
							'<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-'+getRowNo+'" required="required">'+
							
							'</select>'+
						'</td>'+
						/* '<td>'+
							'<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-'+getRowNo+'" required="required">'+
							'</select>'+
						'</td>'+ */
						'<td>'+
						'<select class="form-control proTypeSmDsaCls" id="proTypeSmDsaId-'+getRowNo+'" required="required">'+
						'<option></option>'+
						'<option value="BL">BL</option>'+
						'<option value="SBL">SBL</option>'+
						'</select>'+
						'</td>'+
						'<td>'+
						'<input type="text" class="form-control smSearchCls" id="smSrchTextId-'+getRowNo+'" required value="Employee id - '+v.employeeid+', Employee Name - '+v.employeename+'" placeholder="Search by Employee Id, Employee Name">'+
						'</td>'+
						'<td><button type="button" id="btnDelRowsId-'+getRowNo+'" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>'+
						'</tr>';
						glblRowCnt = getRowNo;
					}else{
						tblRowData += '<tr id="rowId-'+getRowNo+'">'+
						'<td class="a-dis" id="hidRowId-'+getRowNo+'">'+v.dsasmid+'</td>'+
						'<td class="a-dis" id="hidSmId-'+getRowNo+'">'+v.sm_id+'</td>'+
						'<td>'+
							'<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-'+getRowNo+'" required="required">'+
							
							'</select>'+
						'</td>'+
						/* '<td>'+
							'<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-'+getRowNo+'" required="required">'+
							'</select>'+
						'</td>'+ */
						'<td>'+
						'<select class="form-control proTypeSmDsaCls" id="proTypeSmDsaId-'+getRowNo+'" required="required">'+
						'<option></option>'+
						'<option value="BL">BL</option>'+
						'<option value="SBL">SBL</option>'+
						'</select>'+
						'</td>'+
						'<td>'+
						'<input type="text" class="form-control smSearchCls" id="smSrchTextId-'+getRowNo+'" required value="Employee id - '+v.employeeid+', Employee Name - '+v.employeename+'" placeholder="Search by Employee Id, Employee Name">'+
						'</td>'+
						'<td><button type="button" id="btnDelRowsId-'+getRowNo+'" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>'+
						'</tr>';
						glblRowCnt = getRowNo;
					}
				});
					$('#tblSmDsaRwBdyId').html(tblRowData);
					var hello = 0;
					$(reply).each(function(k,v){++hello;
					$('#stSlctSmDsaId-'+hello).html(stateList);
					$('#stSlctSmDsaId-'+hello).val(v.state);
					$('#proTypeSmDsaId-'+hello).val(v.product);
					});
					
					/* var hi = 1;
					$(reply).each(function(k,v){
						requestData(API_CITY_GET+$('#stSlctSmDsaId-'+(k+1)).val(),'GET').done(function(getCity){
							if($('#ciSlctSmDsaId-'+hi).val() == null || $('#ciSlctSmDsaId-'+hi).val() == ""){
								
							}else{
								hi++;
							}
							var cityList = '<option></option>';
							$(getCity.data).each(function(k,v){
								cityList += '<option>'+v.city+'</option>';
							});
							if(hi == 1){
								$('#ciSlctSmDsaId-1').html(cityList);
								$('#ciSlctSmDsaId-1').val(v.city);
							}else{
								$('#ciSlctSmDsaId-'+hi).html(cityList);
								$('#ciSlctSmDsaId-'+hi).val(v.city);
							}
						});
					}); */
				}else{
					$('#headHierId').show();
					tblRowData = '<tr id="ndfRwId"><td colspan="5" style="text-align:center;">NO DATA FOUND</td></tr>';
					$('#tblSmDsaRwBdyId').html(tblRowData);  
				}			
			});
		}
	}); 
	
	$(document).on('click','.delSmDsaRowCls',function(){
			// modal window open
			// $('#diagMsgDivId').show();
			$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
			$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Delete</b></h4>');
			$('#sucMgsId').html('<span class="glyphicon glyphicon-exclamation-sign" style="color:red !important;"></span>Do you really want to delete?.');
			$('#sucMwFtrId').html('<div align="center">'+
		          				'<button type="button" class="btn btn-danger" id="btnModlDelId"  data-dismiss="modal">Delete</button>'+
		         				'<button type="button" class="btn btn-default msgCLoseCls" data-dismiss="modal">Close</button>'+
		          				'</div>');
			$('#sucModalWindId').click();
			var getRowNo = $(this).attr('id').split('-')[1];
			$('#delSpanId').text(getRowNo)
	});
	
	$(document).on('click','#btnModlDelId',function(){
		var getRowNo = $('#delSpanId').text();
		var data = 
		{
				  "dsa_id" : parseInt(dsaId),
				  "sm_id" : isNaN(parseInt($('#hidSmId-'+getRowNo).text()))?0:(parseInt($('#hidSmId-'+getRowNo).text()))
		}
		
		if($('#hidRowId-'+getRowNo).text() != ""){
			requestData(API_SMDSA_DELETE,"POST",JSON.stringify(data)).done(function(reply){
				if(reply.reply == "success"){
					//alert("Mapping successfuly deleted.");
					// $('#diagMsgDivId').show();
					$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
					$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Mapping successfully deleted.');
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary"  data-dismiss="modal">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
				//	$('#sucModalWindId').click();
					selectSm = selectSm.filter(function(item) { 
					    return item != $('#hidSmId-'+getRowNo).text();
					});
					$('#rowId-'+getRowNo).remove();
					glblRowCnt--;
				}else{
					selectSm = selectSm.filter(function(item) { 
					    return item != $('#hidSmId-'+getRowNo).text();
					});
					$('#rowId-'+getRowNo).remove();
					glblRowCnt--;
				}
			});
		}else{
			$('#rowId-'+getRowNo).remove();
			glblRowCnt--;
		}
		for(i=getRowNo;i<=glblRowCnt;i++){
			var temp = parseInt(i)+1;
			$('#rowId-'+temp).attr('id','rowId-'+i);
			$('#hidRowId-'+temp).attr('id','hidRowId-'+i);
			$('#hidSmId-'+temp).attr('id','hidSmId-'+i);
			$('#stSlctSmDsaId-'+temp).attr('id','stSlctSmDsaId-'+i);
			$('#ciSlctSmDsaId-'+temp).attr('id','ciSlctSmDsaId-'+i);
			$('#smSrchTextId-'+temp).attr('id','smSrchTextId-'+i);
			$('#btnDelRowsId-'+temp).attr('id','btnDelRowsId-'+i);
			$('#proTypeSmDsaId-'+temp).attr('id','proTypeSmDsaId-'+i);
		}
	})
	$(document).on('keypress','.smSearchCls',function(){
		var id = $(this).attr('id').split('-')[1];
		var result;
		var flag = 0;
		$.getJSON(API_SMLISTPROD_GET+$('#stSlctSmDsaId-'+id).val()+"&role=SM&product="+$('#proTypeSmDsaId-'+id).val()+"&purpose=dsasmmap","GET",function(data) {
			smList = data
		});
		$(".smSearchCls").autocomplete({
			source : function (request,response) {
				if($('#smSrchTextId-'+id).val() != " "){
					var _data = ($.map(smList,function (ke,val) {
						if(ke['employeeid'].toUpperCase().includes(request.term.toUpperCase()) || ke['name'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.id,
								value : ["Employee Id - "+ke.employeeid+" " ,"Employee Name - "+ke.name]
							};
						}
						}));
				}	
					if($.ui.autocomplete.filter(_data,request.term).length != 0){
						response($.ui.autocomplete.filter(_data,request.term));
					}else{
						
						response([{value: 'No matches found'}]);
					}
					
					
					
			},
			select : function (event,ui) {
				if (ui.item.value == "No matches found") {
					$('#smSrchTextId-'+id).val("");
                    return false;
                }else{
                	if(selectSm.length > 0){
                		for(i=0;i<selectSm.length;i++){
                    		if(ui.item.label1 == selectSm[i]){
                    			flag = 1	
                    			break;
                    		}
                    	}
                	}
                	if(flag == 1){
                		Command: toastr["warning"]('This SM is already mapped.');
                		$('#rowId-'+id).remove();
                		glblRowCnt--;
                	}else{
                		$('#hidSmId-'+id).text(parseInt(ui.item.label1));
                	}  
                }
			}
		});
	});
	

	$(document).on('keypress','#searchBoxDsaMapId',function(){
		$("#searchBoxDsaMapId").autocomplete({
			source : function (request,response) {
				if($('#searchBoxDsaMapId').val() != " "){
					var _data = ($.map(dsaList,function (ke,val) {
						if(ke['state'].toUpperCase().includes(request.term.toUpperCase()) || ke['city'].toUpperCase().includes(request.term.toUpperCase()) ||ke['companyName'].toUpperCase().includes(request.term.toUpperCase()) || ke['dsacode'].toUpperCase().includes(request.term.toUpperCase()) || ke['pan'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.id,
								value : ['Company Name - ' + ke.companyName + ', DSA Code - ' +ke.dsacode+ ', Company PAN - '+ke.pan+ ', State - ' +ke.state+ ', City - ' + ke.city]
							};  	
						}
						}));
				}
					if($.ui.autocomplete.filter(_data,request.term).length != 0){
						response($.ui.autocomplete.filter(_data,request.term));
					}else{
						
						response([{value: 'No matches found'}]);
					}
			
			},
			select : function (event,ui) {
				//console.log(ui.item.label1);
				dsaId = ui.item.label1;
			}
		});
	});
});

function $_smDsaPost(event){
	event.preventDefault();

	if($('#searchBoxDsaMapId').val() == ""){
		//alert("Please select DSA.")
		// $('#diagMsgDivId').show();
		$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
		$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
		$('#sucMgsId').html('<span class="glyphicon glyphicon-exclamation-sign"></span>Please select DSA.');
		$('#sucMwFtrId').html('<div align="center">'+
		          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
		         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
		          				'</div>');
		$('#sucModalWindId').click();
	}else{
		$('#btnDsaSmSbmt').unbind('click');
		$('#btnDsaSmSbmt').attr('disabled',true);

		var arr = [];
		var columArr = [];
		var columArr = []; 
		/* for(i=1;i<=glblRowCnt;i++){
			if($.inArray($('#smSrchTextId-'+i).val(), columArr) > -1){
				
			}else{
				columArr.push($('#smSrchTextId-'+i).val());
			}
		} */
		for(i=1;i<=glblRowCnt;i++){
			var data = 
					{
						  "dsa_id" : parseInt(dsaId),
						  "sm_id" : parseInt($('#hidSmId-'+i).text())
					}
			arr.push(data);
		}
		var finalArr = removeDuplicates(arr,'sm_id');
		console.log(finalArr);
		if(finalArr.length == 0){
			$('#btnDsaSmSbmt').attr('disabled',false);
		}else{
			requestData(API_SMDSA_POST,"POST",JSON.stringify(finalArr)).done(function(reply){
				if(reply.reply == "success"){
					//alert("Mapping for DSA completed.");
						// $('#diagMsgDivId').show();
						$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
						$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
						$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Mapping for DSA completed.');
						$('#sucMwFtrId').html('<div align="center">'+
						          				'<button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal">OK</button>'+
						         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
						          				'</div>');
						$('#sucModalWindId').click();
					
					$('#searchBoxDsaMapId').val("");
					//window.location.reload();
					$('#btnDsaSmSbmt').attr('disabled',false);
				}
			}).error(function (jqXHR, textStatus, errorThrown) {
			       $('#btnDsaSmSbmt').attr('disabled',false);
		    }); 
		}
	}
}

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}
function toasTr() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "100",
        "hideDuration": "100",
        "timeOut": "15000",
        "extendedTimeOut": "3500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
</script>
</body>
</html>