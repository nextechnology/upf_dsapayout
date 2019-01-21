<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Hierarchy</title>
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
	<link rel="stylesheet"
	href="/upf-system/resources/ui_content/plugins/toastr/toastr.min.css">
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
.glyphicon-exclamation-sign{
color: #fca105 !important;
padding-right:10px;
}
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId">
	
	<div class="wrapper">
	<div id="headerId"></div>
	<!-- <header class="main-header m-layer" id="headerId">
			<a href="javascript:void(0);" class="logo"> <span class="logo-lg">
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
						<li id="liIdHead"><a><b>Hierarchy</b></a></li>
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
						<div class="row">
							<div class="col-md-3">
							</div>
							<div class="col-md-3">
							<select class="form-control" id="slctMapProdId">
							<option value="">Product Type</option>
							<option>BL</option>
							<option>SBL</option>
							</select>
							</div>
							<div class="col-md-3">
							<select class="form-control" id="slctMapId">
							<option value="">Select Mapping</option>
							<option>SM/SSM - ASM</option>
							<option>ASM - RSM</option>
							<option>RSM - ZSM</option>
							<option>ZSM - NSM</option>
							</select>
							</div>
							<div class="col-md-3">
							</div>
						</div>
						<div class="row">
						
						<div class="col-md-10 col-md-offset-1" id="searchColDivId" style="padding-top:25px; display:none;">
							<div class="input-group">
							<span class="input-group-btn" style="padding-right:20px;">
								<input type="button" class="btn btn-info" id="scndSrchMapId">
							</span>
							<div class="ui-widget">     
								<input type="text" class="form-control" id="searchBoxMapId"
									placeholder="Search by Employee Name,Employee Id">
							</div>
							<span class="input-group-btn">
								<button type="button" id="btnSearchMapId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
						</div>
						</div>
					</div>
             	<form id="smDsaFormId" onsubmit="$_smDsaPost(event);" autocomplete="off">
					<div style="padding-top:20px;">
					<div class="row" style="background-color: #fff;">
					<div class="col-md-10 col-md-offset-1" style="padding-top:10px;">
					<table class="table table-bordered table-condensed" id="smdsaMapTblId">
						<thead class="a-di" id="headHierId">
						<tr class="a-center leftbgcolor">
								<td class="hidStCls">Select State</td>
								<td>Select <span id="mapFirstId"></span></td>
								<td></td>
								</tr>
						</thead>
						<tbody id="tblSmDsaRwBdyId">
								
						</tbody>   
						<tfoot>
						<tr>
						<td id="btnAddColId" colspan="2"></td>
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
var  API_STATE_GET = '/upf-system/upf/dsa/getliststate'
	,API_CITY_GET = '/upf-system/upf/dsa/getlistcity?state='
	
	,API_SMLISTCITY_GET = '/upf-system/upf/dsa/empListonCity?city='
	
	,API_SMLISTPROD_GET = '/upf-system/upf/dsa/empListonCity?state='
			
	,API_SMMAP_POST = "/upf-system/upf/dsa/addmapsm"
	
	,API_FIRSTSEARCH_LIST = '/upf-system/upf/dsa/empList?role='
	
	,API_SMDSA_LIST = '/upf-system/upf/dsa/getmapList?dsaid='
	
	,API_SMDSA_DELETE = '/upf-system/upf/dsa/deletemap'
	
	,API_MAP_LIST = '/upf-system/upf/dsa/getmapsm?smid='
			
	,API_MAPPING_DELETE = '/upf-system/upf/dsa/deletemapsm'
	
	,secondList = {}
	,firstList = {}
	,reportingId = 0
	,glblRowCnt = 0
	,mapFirst = ""
	,mapSecond = ""
	,selectSm = [];
	; 
$(function(){ 
	
	toasTr();
    $(document).on('click','#doneMsgOkId',function(){
    	window.location.reload();
    });

	$(document).on('change','#slctMapId',function(){
		if($(this).val() != ""){   
			mapFirst = $(this).val().split(' - ')[0];
			mapSecond = $(this).val().split(' - ')[1];
			if(mapFirst == "SM/SSM" || mapFirst == "SM"){
				$('.hidStCls').show();
				$('#btnAddColId').attr('colspan',2);
			}else{
				$('.hidStCls').hide();
				$('#btnAddColId').attr('colspan',1);
			}
			if($('#slctMapProdId').val() != "" && $('#slctMapId').val() != ""){
				$('#searchColDivId').show();
			}else{
				$('#searchColDivId').hide();
			}
			$('#scndSrchMapId').val('Search '+mapSecond);
			$('#mapFirstId').text(mapFirst);
		}else{
			$('#searchColDivId').hide();
		}
		
		$('#smDsaFormId')[0].reset();
		$('#searchBoxMapId').val("");
		$('#ndfRwId').hide(); 
		$('.smSearchCls').val('');
		for(i=1;i<=glblRowCnt;i++){
			$('#rowId-'+i).remove();
		}
		secondList = {}
		firstList = {}
		reportingId = 0
		glblRowCnt = 0
		; 
		reportingId = 0;
		$.getJSON(API_FIRSTSEARCH_LIST+mapSecond+'&product='+$('#slctMapProdId').val(),"GET",function(data) {
			secondList = data
		});
	});
	
	$(document).on('change','#slctMapProdId',function(){
		
		if($('#slctMapProdId').val() != "" && $('#slctMapId').val() != ""){
			$('#smDsaFormId')[0].reset();
			$('#searchBoxMapId').val("");
			$('#ndfRwId').hide(); 
			$('.smSearchCls').val('');
			for(i=1;i<=glblRowCnt;i++){
				$('#rowId-'+i).remove();
			}
			secondList = {}
			firstList = {}
			reportingId = 0
			glblRowCnt = 0
			; 
			reportingId = 0;
			$.getJSON(API_FIRSTSEARCH_LIST+mapSecond+'&product='+$('#slctMapProdId').val(),"GET",function(data) {
				secondList = data
			});
			$('#searchColDivId').show();
		}else{
			$('#searchColDivId').hide();
		}
	});
	
	$(document).on('change','.citySmDsaCls',function(){
		var id = $(this).attr('id').split('-')[1];
		$('#smSrchTextId-'+id).val("");
		$.getJSON(API_SMLISTCITY_GET+$(this).val()+'&role='+mapFirst,"GET",function(data) {
			firstList = data;
		});
	});
	
	$(document).on('change','.proTypeSmDsaCls',function(){
		var id = $(this).attr('id').split('-')[1];
		$('#smSrchTextId-'+id).val("");
		if(mapFirst.indexOf('/') > -1){
			mapFirst = mapFirst.split('/')[0];
		}else{
			mapFirst = mapFirst
		}
		$.getJSON(API_SMLISTPROD_GET+$('#stSlctSmDsaId-'+id).val()+'&role='+mapFirst+'&product='+$('#slctMapProdId-'+id).val()+"&purpose=none","GET",function(data) {
			firstList = data
		}); 
	});
	
	var stateList = "<option></option>";
	requestData(API_STATE_GET).done(function(getState){
		$(getState.data).each(function(k,v){
			stateList += '<option>'+v.state+'</option>';
		});
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
	$(document).on('click','#btnAddRowsId',function(){++glblRowCnt;
	$('#ndfRwId').hide();	
	tblRowData = '<tr id="rowId-'+glblRowCnt+'">'+
		'<td class="a-dis" id="hidSmId-'+glblRowCnt+'"></td>'+
		'<td class="hidStCls">'+
			'<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-'+glblRowCnt+'" required="required">'+
			
			'</select>'+
		'</td>'+
		/* '<td>'+
			'<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-'+glblRowCnt+'" required="required">'+
			'</select>'+
		'</td>'+ */
		/* '<td>'+
		'<select class="form-control proTypeSmDsaCls" id="proTypeSmDsaId-'+glblRowCnt+'" required="required">'+
		'<option></option>'+
		'<option value="BL">BL</option>'+
		'<option value="SBL">SBL</option>'+
		'</select>'+
		'</td>'+ */
		'<td>'+
		'<input type="text" class="form-control smSearchCls" id="smSrchTextId-'+glblRowCnt+'" required placeholder="Search by Employee Id, Employee Name">'+
		'</td>'+
		'<td><button type="button" id="btnDelRowsId-'+glblRowCnt+'" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>'+
		'</tr>';
		$('#tblSmDsaRwBdyId').append(tblRowData);
		if(mapFirst == "SM/SSM" || mapFirst == "SM"){
			$('#stSlctSmDsaId-'+glblRowCnt).html(stateList);
		}else{
			$('#stSlctSmDsaId-'+glblRowCnt).html('<option value="none" selected>NONE</option>');		
			$('#stSlctSmDsaId-'+glblRowCnt).attr('disabled',true);
		}
		if(mapFirst == "SM/SSM" || mapFirst == "SM"){
			$('.hidStCls').show();
			$('#btnAddColId').attr('colspan',2);
		}else{
			$('.hidStCls').hide();
			$('#btnAddColId').attr('colspan',1);
		}
	});
	
	$(document).on('click','#btnSearchMapId',function(){
		glblRowCnt = 0;
		selectSm = [];
		if($('#searchBoxMapId').val() == ""){
			//alert('Please enter valid '+mapSecond+'.');
			$('#diagMsgDivId').show();
			$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
			$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
			$('#sucMgsId').html('<span class="glyphicon glyphicon-exclamation-sign"></span>Please enter valid '+mapSecond+'.');
			$('#sucMwFtrId').html('<div align="center">'+
			          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
			         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
			          				'</div>');
			$('#sucModalWindId').click();
		}else{
			var tblRowData = "";
			var getRowNo = 0;
			$('#smDsaFormId')[0].reset();
			for(i=2;i<=glblRowCnt;i++){
				$('#rowId-'+i).remove();
			}
			requestData(API_MAP_LIST+reportingId+'&product='+$('#slctMapProdId').val(),"GET").done(function(reply){
				if(!$.isEmptyObject(reply)){
					$(reply).each(function(k,v){++getRowNo;
					selectSm.push(v.reporter_id);
					if(getRowNo == 1){
						tblRowData += '<tr id="rowId-1">'+
						'<td class="a-dis" id="hidSmId-1">'+v.reporter_id+'</td>'+
						'<td class="hidStCls">'+
							'<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-1" required="required">'+
							
							'</select>'+
						'</td>'+
						/* '<td>'+
							'<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-1" required="required">'+
							'</select>'+
						'</td>'+ */
						/* '<td>'+
						'<select class="form-control proTypeSmDsaCls" id="proTypeSmDsaId-1" required="required">'+
						'<option></option>'+
						'<option value="BL">BL</option>'+
						'<option value="SBL">SBL</option>'+
						'</select>'+
						'</td>'+ */
						'<td>'+
						'<input type="text" class="form-control smSearchCls" id="smSrchTextId-1" required value="Employee id - '+v.employeeid+', Employee Name - '+v.sm_name+'" placeholder="Search by Employee Id, Employee Name">'+
						'</td>'+
						'<td><button type="button" id="btnDelRowsId-1" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>'+
						'</tr>';
						glblRowCnt = getRowNo;
					}else{
						tblRowData += '<tr id="rowId-'+getRowNo+'">'+
						'<td class="a-dis" id="hidSmId-'+getRowNo+'">'+v.reporter_id+'</td>'+
						'<td class="hidStCls">'+
							'<select class="form-control stateSmDsaCls" id="stSlctSmDsaId-'+getRowNo+'" required="required">'+
							
							'</select>'+
						'</td>'+
						/* '<td>'+
							'<select class="form-control citySmDsaCls" id="ciSlctSmDsaId-'+getRowNo+'" required="required">'+
							'</select>'+
						'</td>'+ */
						/* '<td>'+
						'<select class="form-control proTypeSmDsaCls" id="proTypeSmDsaId-'+getRowNo+'" required="required">'+
						'<option></option>'+
						'<option value="BL">BL</option>'+
						'<option value="SBL">SBL</option>'+
						'</select>'+
						'</td>'+ */
						'<td>'+
						'<input type="text" class="form-control smSearchCls" id="smSrchTextId-'+getRowNo+'" required value="Employee id - '+v.employeeid+', Employee Name - '+v.sm_name+'" placeholder="Search by Employee Id, Employee Name">'+
						'</td>'+
						'<td><button type="button" id="btnDelRowsId-'+getRowNo+'" class="btn btn-danger delSmDsaRowCls"><span class="glyphicon glyphicon-trash"></span></button></td>'+
						'</tr>';
						glblRowCnt = getRowNo;
					}
				});
					$('#tblSmDsaRwBdyId').html(tblRowData);
					requestData(API_ALLLOGINDETAIL_GET, "GET",{}).done(function(replylog) {
						$(replylog.accessList).each(function(k,v){
						if( v.HIERARCHY_TAB == "READ ONLY" ||  v.HIERARCHY_TAB == "READONLY" || v.HIERARCHY_TAB == "READ" ){
							$('#tblSmDsaRwBdyId input, #tblSmDsaRwBdyId select, #tblSmDsaRwBdyId textarea, #tblSmDsaRwBdyId button').prop('disabled', true);
							$('#btnDsaSmSbmt, #btnAddRowsId').attr('disabled',true);
						}else if( v.HIERARCHY_TAB == "WRITE" ||  v.HIERARCHY_TAB == "VIEW ALL"){
							$('#tblSmDsaRwBdyId input, #tblSmDsaRwBdyId select, #tblSmDsaRwBdyId textarea, #tblSmDsaRwBdyId button').prop('disabled', false);
							$('#btnDsaSmSbmt, #btnAddRowsId').attr('disabled',false);
						}else{
							$('#tblSmDsaRwBdyId input, #tblSmDsaRwBdyId select, #tblSmDsaRwBdyId textarea, #tblSmDsaRwBdyId button').prop('disabled', false);
							$('#btnDsaSmSbmt, #btnAddRowsId').attr('disabled',false);
						}  
						});   
						var hello = 0;
						$(reply).each(function(k,v){++hello;
						if(mapFirst == "SM/SSM" || mapFirst == "SM"){
							$('#stSlctSmDsaId-'+hello).html(stateList);
							$('#stSlctSmDsaId-'+hello).val(v.sm_state);
						}else{
							$('#stSlctSmDsaId-'+hello).html('<option value="none" selected>NONE</option>');		
							$('#stSlctSmDsaId-'+hello).attr('disabled',true);
						}
						$('#proTypeSmDsaId-'+hello).val(v.product);
						});
						if(mapFirst == "SM/SSM" || mapFirst == "SM"){
							$('.hidStCls').show();
							$('#btnAddColId').attr('colspan',2);
						}else{
							$('.hidStCls').hide();
							$('#btnAddColId').attr('colspan',1);
						}
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
								$('#ciSlctSmDsaId-1').val(v.sm_city);
							}else{
								$('#ciSlctSmDsaId-'+hi).html(cityList);
								$('#ciSlctSmDsaId-'+hi).val(v.sm_city);
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
		$('#diagMsgDivId').show();
		$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
		$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Delete</b></h4>');
		$('#sucMgsId').html('<span class="glyphicon glyphicon-exclamation-sign" style="color:red !important;"></span>Do you really want to delete?.');
		$('#sucMwFtrId').html('<div align="center">'+
	          				'<button type="button" class="btn btn-danger" id="btnModlDelId" data-dismiss="modal">Delete</button>'+
	         				'<button type="button" class="btn btn-default msgCLoseCls" data-dismiss="modal">Close</button>'+
	          				'</div>');
		$('#sucModalWindId').click();
		var getRowNo = $(this).attr('id').split('-')[1];
		$('#delSpanId').text(getRowNo);

	});
	$(document).on('click','#btnModlDelId',function(){
		
		var getRowNo = $('#delSpanId').text();
		var data = 
			{
				  "reporting_id" : parseInt(reportingId),
				  "reporter_id" : parseInt($('#hidSmId-'+getRowNo).text())
			}
		
		if($('#hidSmId-'+getRowNo).text() != ""){
			requestData(API_MAPPING_DELETE,"POST",JSON.stringify(data)).done(function(reply){
				if(reply.reply == "success"){
					//alert("Mapping successfuly deleted.");
					$('#diagMsgDivId').show();
					$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
					$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Mapping successfully deleted.');
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
					$('#sucModalWindId').click();
					
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
			$('#hidSmId-'+temp).attr('id','hidSmId-'+i);
			$('#stSlctSmDsaId-'+temp).attr('id','stSlctSmDsaId-'+i);
			$('#ciSlctSmDsaId-'+temp).attr('id','ciSlctSmDsaId-'+i);
			$('#smSrchTextId-'+temp).attr('id','smSrchTextId-'+i);
			$('#btnDelRowsId-'+temp).attr('id','btnDelRowsId-'+i);
		}
	});
	
	
	$(document).on('keypress','.smSearchCls',function(){
		var id = $(this).attr('id').split('-')[1];
		var result;
		var flag = 0;
		if(mapFirst.indexOf('/') > -1){
			mapFirst = mapFirst.split('/')[0];
		}else{
			mapFirst = mapFirst
		}
		$.getJSON(API_SMLISTPROD_GET+$('#stSlctSmDsaId-'+id).val()+'&role='+mapFirst+'&product='+$('#slctMapProdId').val()+"&purpose=none","GET",function(data) {
			firstList = data;
		}); 
		$(".smSearchCls").autocomplete({
			source : function (request,response) {
				if($('#smSrchTextId-'+id).val() != " "){	
				var _data = ($.map(firstList,function (ke,val) {
						 
						if(ke['employeeid'].toUpperCase().includes(request.term.toUpperCase()) || ke['name'].toUpperCase().includes(request.term.toUpperCase())){
							return {
								label1 : ke.id,
								value : ["Employee Id - "+ke.employeeid+" " ,"Employee Name - "+ke.name]
							};
						}
						}));}
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
                		Command: toastr["warning"]('This '+mapFirst+' is already mapped.');
                		$('#rowId-'+id).remove();
                		glblRowCnt--;
                	}else{
                		$('#hidSmId-'+id).text(parseInt(ui.item.label1));
                	}  
                }
			}
		});
	});

	$(document).on('keypress','#searchBoxMapId',function(){
		$("#searchBoxMapId").autocomplete({
			source : function (request,response) {
					if($('#searchBoxMapId').val() != " "){
						var _data = ($.map(secondList,function (ke,val) {
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
				//console.log(ui.item.label1);
				reportingId = ui.item.label1;
			}
		});
	});
});

function $_smDsaPost(event){
	event.preventDefault();

	if($('#searchBoxMapId').val() == ""){
		//alert('Please select '+mapSecond+' to map.')
		
		$('#diagMsgDivId').show();
		$('#sucMwHdrId').css({"background-color":"#F29D02", "color":"#000","padding":"9px"});
		$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Warning</b></h4>');
		$('#sucMgsId').html('<span class="glyphicon glyphicon-exclamation-sign"></span>Please select '+mapSecond+' to map.');
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
						  "reporting_id" : parseInt(reportingId),
						  "reporter_id" : parseInt($('#hidSmId-'+i).text())
					}
			arr.push(data);
		}
		var finalArr = removeDuplicates(arr,'reporter_id');
		console.log(finalArr);
		if(finalArr.length == 0){
			$('#btnDsaSmSbmt').attr('disabled',false);
		}else{
			$('#btnDsaSmSbmt').attr('disabled',true);        
			requestData(API_SMMAP_POST,"POST",JSON.stringify(finalArr)).done(function(reply){
				if(reply.reply == "success"){
					//alert("Mapping completed.");
					$('#diagMsgDivId').show();
					$('#sucMwHdrId').css({"background-color":"#9ffc85", "color":"#000","padding":"9px"});
					$('#sucMwHdrId').html('<button type="button" class="close" data-dismiss="modal"></button><h4 class="modal-title"><b>Success</b></h4>');
					$('#sucMgsId').html('<span class="glyphicon glyphicon-ok-circle"></span>Mapping completed.');
					$('#sucMwFtrId').html('<div align="center">'+
					          				'<button type="button" class="btn btn-primary" id="doneMsgOkId" data-dismiss="modal">OK</button>'+
					         				'<button type="button" class="btn btn-default msgCLoseCls a-dis" data-dismiss="modal">Close</button>'+
					          				'</div>');
					$('#sucModalWindId').click();
				
					$('#searchBoxMapId').val("");
					$('.smSearchCls').val("");
					$('#btnDsaSmSbmt').attr('disabled',false);
					//window.location.reload();
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