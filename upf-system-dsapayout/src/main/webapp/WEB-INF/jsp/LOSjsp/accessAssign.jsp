<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Cam UI</title>
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
 </style>  

</head>
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId">
	
	<div class="wrapper">
		<div id="appenId"></div>
		<div id="headerId"></div>
<!-- 	<header class="main-header m-layer" id="headerId">
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
						<li id="liIdHead"><a><b>Permission</b></a></li>
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
		
		
   <div class="content-wrapper" id="mainAccAssignBodyId">
	<section class="content">
      <div class="row">
      <div class="">
        <!-- left column -->
        <div class="col-md-5 col-md-offset-3">
          <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
            <!-- tools box -->
              <div class="pull-right box-tools">
                <button type="button" class="btn btn-primary btn-sm pull-right" id="btnAddAccAssignId" data-toggle="tooltip" style="margin-right: 5px;">
                  <i class="fa fa-plus"></i><span style="padding-left:5px;">Add Permission</span></button>
              </div>
              <!-- /. tools -->
              <h3 class="box-title">Permission List</h3>
            </div>
              <div id="renderList">
             <table class="table table-bordered" id="accAssignTableId">
       		 <thead><tr>
       		 <td style="width:70px;" class="a-tcenter">Sr. No</td>
       		 <td class="a-tcenter">Add Permission</td><td class="a-tcenter" style="width:115px;">Actions</td></tr></thead>
      		 <tbody id="accAssignAddTable">
      		 
      		 </tbody>
      		 </table>
              	<!-- ************************************* -->
              	<!-- ACCESS WILL RENDER HERE -->		        
		        <!-- ************************************* -->
              </div>
              <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!--/.col (left) -->
      </div></div>
      <!-- /.row -->
    </section>
	</div>
	 <footer class="main-footer" id="footer"></footer>
	</div>
	
		<!-- ADD ACCESS MODAL --> 
  <button type="button" data-toggle="modal" data-target="#myModal2" style="display:none" id="btnModalAddAccAssign"></button>
  <div class="modal fade" id="myModal2" role="dialog">
    <div class="modal-dialog modal-lg">
      <!-- Modal content-->
      <form role="form" id="formAddAccAssignId">
      <div class="modal-content col-md-6 col-md-offset-3">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Permission</h4>
        </div>
        <div class="modal-body">
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div>
           <input type="text" class="form-control" id="addAccAssignTextHidId" style="display:none">
           <input type="text" class="form-control" id="addAccAssignTextId" pattern="[a-zA-Z][a-zA-Z ]+" required="required">
         <span id="accessAddSpanHidId" style="color:red">Permission you are trying to add already exist.</span>
          </div>
        </div>
      </div>
        </div>
        <div class="modal-footer">
        <!--   <button type="button" class="btn btn-danger pull-left" id="btnDelete" onclick="$DELETE_teachList()">Delete</button> -->
          <button type="button" class="btn btn-primary" id="btnAccAssignId" onclick="$_addAccAssign()">Add</button>
          <input type="submit" style="display:none" id="submitAddAccAssignId">
          <button type="button" class="btn btn-default" id="closeAddAccAssignId" data-dismiss="modal">Close</button>
        </div>
      </div>
      </form>	
    </div>
  </div>


	<!-- UPDATE ROLES MODAL -->
  <button type="button" data-toggle="modal" data-target="#myModal3" style="display:none" id="btnModalUpdateAccAssign"></button>
  <div class="modal fade" id="myModal3" role="dialog">
    <div class="modal-dialog modal-lg">
      <!-- Modal content-->
      <form role="form" id="formUpdateAccAssignId">
      <div class="modal-content col-md-6 col-md-offset-3">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Update Permission</h4>
        </div>
        <div class="modal-body">
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div>
           <input type="text" class="form-control" id="updateAccAssignTextHIdId" style="display:none">
           <input type="text" class="form-control" id="updateAccAssignTextId" required="required">
           <span id="accessUpdSpanHidId" style="color:red">Permission you are trying to update already exist.</span>
          </div>
        </div>
      </div>
        </div>
        <div class="modal-footer">
        <!--   <button type="button" class="btn btn-danger pull-left" id="btnDelete" onclick="$DELETE_teachList()">Delete</button> -->
          <button type="button" class="btn btn-primary updAccAssignCls" id="btnUpdateAccAssignId">Update</button>
          <input type="submit" style="display:none" id="submitUpdateAccAssignId">
          <button type="button" class="btn btn-default" id="closeUpdAccAssignId" data-dismiss="modal">Close</button>
        </div>
      </div>
      </form>	
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

<script type="text/javascript">
// API

var 
 

API_ACCESSASSIGN_GET = '/upf-system/upf/authentication/getAllAccessDetails';
API_ADDACCASSIGN_POST = '/upf-system/upf/authentication/addAccessDetails';
API_ACCASSIGN_DEL = '/upf-system/upf/authentication/deleteAccessDetails/';

var 
	srNoAccAssign = 0
	,_getRowGlbl=0
	,_getUpdRow = 0
	;	
$(document).ready(function(){
	$('#accessAddSpanHidId').hide();
	$('#accessUpdSpanHidId').hide();
	
	 	requestData(API_ACCESSASSIGN_GET, "GET",'').done(function (a) { 
 		var srNoGetAccAssign = 0,i=-1;
		$(a).each(function(){++srNoGetAccAssign;++i;
		//glyphicon glyphicon-pencil
		var renData = '<tr id="rowAccAssignId-'+srNoGetAccAssign+'">'+
			'<td id="srNoAccAssignHidId-'+srNoGetAccAssign+'" style="display:none">'+a[i].accessId+'</td>'+
	        '<td id="srNoAccAssignId-'+srNoGetAccAssign+'">'+srNoGetAccAssign+'</td>'+
	        '<td id="accAssignNameId-'+srNoGetAccAssign+'">'+a[i].accessName+'</td>'+
	        '<td>'+
	        '<span style="padding-left:5px;"></span><button type="button" class="btn btn-primary updateAccAssignCls" id="btnEditAccAssignId-'+srNoGetAccAssign+'">'+
	        '<span class="glyphicon glyphicon-pencil"></span></button><span style="padding-left:8px;"></span>'+
	        '<button type="button" class="btn btn-danger deleteAccAssignCls" id="btnDelAccAssignId-'+srNoGetAccAssign+'">'+
	        '<span class="glyphicon glyphicon-trash"></span></button>'+
	        '</td></tr>';
	        
	        $('#accAssignAddTable').append(renData);
	        srNoAccAssign = srNoGetAccAssign;
		});
 });
	
	$(document).on('click','#btnAddAccAssignId', function(){ 
		$('#addAccAssignTextId').val('');
		$('#btnModalAddAccAssign').click();
	});
	
	$(document).on('click','.updateAccAssignCls', function(){
		var getRowId = $(this).attr('id').split('-')[1];
		$('#btnModalUpdateAccAssign').click();
		$('#updateAccAssignTextHIdId').text($('#srNoAccAssignHidId-'+getRowId).text());
		$('#updateAccAssignTextId').val($('#accAssignNameId-'+getRowId).text());
		_getUpdRow = getRowId;
	});
	
	$(document).on('click','#btnUpdateAccAssignId', function(){
		
		var flag = 0;
		var _test = $('#updateAccAssignTextId').val();
		requestData(API_ACCESSASSIGN_GET, "GET",'').done(function (a) {
			$(a).each(function(k,v){
				if(_test.toUpperCase() == v.accessName){ flag = 1;
					$('#accessUpdSpanHidId').show();
					$('#accessUpdSpanHidId').delay(2500).fadeOut();
					return false;
				}
			});   
			if(flag == 0){
				if($formValidity("formUpdateAccAssignId","submitUpdateAccAssignId")){ 
					var userData = {	
						  "accessId" : $_isNaNChck('updateAccAssignTextHIdId','t'),
						  "accessName" :  $('#updateAccAssignTextId').val()
					};		
				requestData(API_ADDACCASSIGN_POST, "POST", JSON.stringify((userData))).done(function (reply) {
					// console.log('reply-upd',reply);
		        	$('#srNoAccAssignHidId-'+_getUpdRow).text(reply.accessId);
		        	$('#accAssignNameId-'+_getUpdRow).text(reply.accessName);
		        });
				$('#closeUpdAccAssignId').click();
				}
			}
	});		
});
	
	$(document).on('click','.deleteAccAssignCls', function(){
		var deleteRowId = $(this).closest('tr').attr('id');
		var getRowNo = deleteRowId.split("-")[1];
		
		$_deleteLos(API_ACCASSIGN_DEL+$('#srNoAccAssignHidId-'+getRowNo).text(),'rowAccAssignId',getRowNo,srNoAccAssign,'srNoAccAssignId','Permission');
		srNoAccAssign--;
		// console.log('srNoAccAssign-',srNoAccAssign);
	});
});
function $_addAccAssign(){
	
	var flag = 0;
	var _test = $('#addAccAssignTextId').val();
	requestData(API_ACCESSASSIGN_GET, "GET",'').done(function (a) {
		$(a).each(function(k,v){
			if(_test.toUpperCase() == v.accessName){ flag = 1;
				$('#accessAddSpanHidId').show();
				$('#accessAddSpanHidId').delay(2500).fadeOut();
				return false;
			}
		});   
		if(flag == 0){
		if($formValidity("formAddAccAssignId","submitAddAccAssignId")){
		++srNoAccAssign; //glyphicon glyphicon-pencil
		var renData = '<tr id="rowAccAssignId-'+srNoAccAssign+'">'+
		'<td id="srNoAccAssignHidId-'+srNoAccAssign+'" style="display:none"></td>'+
        '<td id="srNoAccAssignId-'+srNoAccAssign+'">'+srNoAccAssign+'</td>'+
        '<td id="accAssignNameId-'+srNoAccAssign+'"></td>'+
        '<td>'+
        '<span style="padding-left:5px;"></span><button type="button" class="btn btn-primary updateAccAssignCls" id="btnEditAccAssignId-'+srNoAccAssign+'">'+
        '<span class="glyphicon glyphicon-pencil"></span></button><span style="padding-left:8px;"></span>'+
        '<button type="button" class="btn btn-danger deleteAccAssignCls" id="btnDelAccAssignId-'+srNoAccAssign+'">'+
        '<span class="glyphicon glyphicon-trash"></span></button>'+
        '</td></tr>';
        
       	requestData(API_ADDACCASSIGN_POST, "POST", JSON.stringify(getRowDataAccessAssignLos(srNoAccAssign))).done(function (reply) {
       		// console.log('srNoAccAssign-',srNoAccAssign);
       		$('#srNoAccAssignHidId-'+srNoAccAssign).text(reply.accessId);
        	$('#accAssignNameId-'+srNoAccAssign).text(reply.accessName);
        	$('#closeAddAccAssignId').click();
        	location.href = "/upf-system/upf/debitCredit/accessAssign";
        });
       	$('#accAssignAddTable').append(renData);
       }
	}
}); 
}

function getRowDataAccessAssignLos(){//alert(a); // $('#hidModalUpdId').text(
	var userData = {	
		  "accessId" : $_isNaNChck('addAccAssignTextHidId','t'),
		  "accessName" :  $('#addAccAssignTextId').val()
	};
return userData;
}

</script>

</body>
</html>