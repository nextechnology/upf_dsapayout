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
		
		
   <div class="content-wrapper" id="mainRoleBodyId">
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
                <button type="button" class="btn btn-primary btn-sm pull-right" id="btnAddRoleId" data-toggle="tooltip" style="margin-right: 5px;">
                  <i class="fa fa-plus"></i><span style="padding-left:5px;">Add Roles</span></button>
              </div>
              <!-- /. tools -->
              <h3 class="box-title">Roles List</h3>
            </div>
              <div id="renderList">
             <table class="table table-bordered" id="roleTableId">
       		 <thead><tr>
       		 <td style="width:70px;" class="a-tcenter">Sr. No</td>
       		 <td class="a-tcenter">Role</td><td class="a-tcenter" style="width:115px;">Actions</td></tr></thead>
      		 <tbody id="roleAddTable">
      		 
      		 </tbody>
      		 </table>
              	<!-- ************************************* -->
              	<!-- ROLES WILL RENDER HERE -->		        
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
	
		<!-- ADD ROLES MODAL --> 
  <button type="button" data-toggle="modal" data-target="#myModal2" style="display:none" id="btnModalAddRole"></button>
  <div class="modal fade" id="myModal2" role="dialog">
    <div class="modal-dialog modal-lg">
      <!-- Modal content-->
      <form role="form" id="formAddRoleId">
      <div class="modal-content col-md-6 col-md-offset-3">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Role</h4>
        </div>
        <div class="modal-body">
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div>
           <input type="text" class="form-control" id="addRolesTextHidId" style="display:none">
           <input type="text" class="form-control" id="addRolesTextId" pattern="[a-zA-Z][a-zA-Z _]+" required="required">
           <span id="roleAddSpanHidId" style="color:red">Role already exist.</span>
          </div>
        </div>
      </div>
        </div>
        <div class="modal-footer">
        <!--   <button type="button" class="btn btn-danger pull-left" id="btnDelete" onclick="$DELETE_teachList()">Delete</button> -->
          <button type="button" class="btn btn-primary" id="btnAddId" onclick="$_addRoles()">Add</button>
          <input type="submit" style="display:none" id="submitAddId">
          <button type="button" class="btn btn-default" id="closeAddId" data-dismiss="modal">Close</button>
        </div>
      </div>
      </form>	
    </div>
  </div>


	<!-- UPDATE ROLES MODAL -->
  <button type="button" data-toggle="modal" data-target="#myModal3" style="display:none" id="btnModalUpdateRole"></button>
  <div class="modal fade" id="myModal3" role="dialog">
    <div class="modal-dialog modal-lg">
      <!-- Modal content-->
      <form role="form" id="formUpdateRoleId">
      <div class="modal-content col-md-6 col-md-offset-3">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Update Role</h4>
        </div>
        <div class="modal-body">
          <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div>
           <input type="text" class="form-control" id="updateRolesTextHIdId" style="display:none">
           <input type="text" class="form-control" id="updateRolesTextId" pattern="[a-zA-Z][a-zA-Z _]+" required="required">
           <span id="roleUpdateSpanHidId" style="color:red">Role already exist.</span>
          </div>
        </div>
      </div>
        </div>
        <div class="modal-footer">
        <!--   <button type="button" class="btn btn-danger pull-left" id="btnDelete" onclick="$DELETE_teachList()">Delete</button> -->
          <button type="button" class="btn btn-primary updRoleCls" id="btnUpdateId">Update</button>
          <input type="submit" style="display:none" id="submitUpdateId">
          <button type="button" class="btn btn-default" id="closeUpdId" data-dismiss="modal">Close</button>
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
 
API_ADDROLE_POST = '';
API_ROLESLIST_GET = '/upf-system/upf/authentication/getAllRole';
API_ADDROLE_POST = '/upf-system/upf/authentication/addRole';


var 
	srNoRole = 0
	,_getRowGlbl=0
	,_getUpdRow = 0
	;	
$(document).ready(function(){
	
		$('#roleAddSpanHidId').hide();
		$('#roleUpdateSpanHidId').hide();
	 	requestData(API_ROLESLIST_GET, "GET",'').done(function (a) { 
 		var srNoGetRole = 0,i=-1;
		$(a).each(function(){++srNoGetRole;++i;
		//glyphicon glyphicon-pencil
		var renData = '<tr id="rowRoleId-'+srNoGetRole+'">'+
			'<td id="srNoHidId-'+srNoGetRole+'" style="display:none">'+a[i].roleId+'</td>'+
	        '<td id="srNoId-'+srNoGetRole+'">'+srNoGetRole+'</td><td id="roleNameId-'+srNoGetRole+'">'+a[i].roleName+'</td>'+
	        '<td>'+
	        '<span style="padding-left:5px;"></span><button type="button" class="btn btn-primary updateRoleCls" id="btnEditRoleId-'+srNoGetRole+'">'+
	        '<span class="glyphicon glyphicon-pencil"></span></button><span style="padding-left:8px;"></span>'+
	        '<button type="button" class="btn btn-danger deleteRoleCls" id="btnDelRoleId-'+srNoGetRole+'">'+
	        '<span class="glyphicon glyphicon-trash"></span></button>'+
	        '</td></tr>';
	        
	        $('#roleAddTable').append(renData);
	        srNoRole = srNoGetRole;
		});
 });
	
	$(document).on('click','#btnAddRoleId', function(){
		$('#addRolesTextId').val('');
		$('#btnModalAddRole').click();
	});
	
	$(document).on('click','.updateRoleCls', function(){
		var getRowId = $(this).attr('id').split('-')[1];
		$('#btnModalUpdateRole').click();
		$('#updateRolesTextHIdId').text($('#srNoHidId-'+getRowId).text());
		$('#updateRolesTextId').val($('#roleNameId-'+getRowId).text());
		_getUpdRow = getRowId;
	});
	
	$(document).on('click','#btnUpdateId', function(){var flag=0;
		var _test = $('#updateRolesTextId').val();
		requestData(API_ROLESLIST_GET, "GET",'').done(function (a) {
			$(a).each(function(k,v){
				if(_test.toUpperCase() == v.roleName){ flag = 1;
					$('#roleUpdateSpanHidId').show();
					$('#roleUpdateSpanHidId').delay(2500).fadeOut();
					return false;
				}
			});
			
					if(flag == 0){
						if($formValidity("formUpdateRoleId","submitUpdateId")){ 
							var userData = {	
									  "roleId" : $_isNaNChck('updateRolesTextHIdId','t'),
									  "roleName" :  $('#updateRolesTextId').val()
								};		
							// console.log('userdataUpd-',userData);
							requestData(API_ADDROLE_POST, "POST", JSON.stringify((userData))).done(function (reply) {
								// console.log('reply-upd',reply);
					        	$('#srNoHidId-'+_getUpdRow).text(reply.roleId);
					        	$('#roleNameId-'+_getUpdRow).text(reply.roleName);
					        });
							$('#closeUpdId').click();
						}
					}
		});
	});
	
	$(document).on('click','.deleteRoleCls', function(){
		var deleteRowId = $(this).closest('tr').attr('id');
		var getRowNo = deleteRowId.split("-")[1];
		var API_ROLE_DEL = '/upf-system/upf/authentication/deleteRole/'+$('#srNoHidId-'+getRowNo).text();
		$_deleteLos(API_ROLE_DEL,'rowRoleId',getRowNo,srNoRole,'srNoId','Role');
		srNoRole--;
		// console.log('srNoRoleDel-',srNoRole);
	});
});
function $_addRoles(){
	var flag = 0;
	var _test = $('#addRolesTextId').val();
	requestData(API_ROLESLIST_GET, "GET",'').done(function (a) {
		$(a).each(function(k,v){
			if(_test.toUpperCase() == v.roleName){ flag = 1;
				$('#roleAddSpanHidId').show();
				$('#roleAddSpanHidId').delay(2500).fadeOut();
				return false;
			}
		});   
	
					if(flag == 0){
					if($formValidity("formAddRoleId","submitAddId")){
						++srNoRole; //glyphicon glyphicon-pencil
						var renData = '<tr id="rowRoleId-'+srNoRole+'">'+
						'<td id="srNoHidId-'+srNoRole+'" style="display:none"></td>'+
				        '<td id="srNoId-'+srNoRole+'">'+srNoRole+'</td><td id="roleNameId-'+srNoRole+'"></td>'+
				        '<td>'+
				        '<span style="padding-left:5px;"></span><button type="button" class="btn btn-primary updateRoleCls" id="btnEditRoleId-'+srNoRole+'">'+
				        '<span class="glyphicon glyphicon-pencil"></span></button><span style="padding-left:8px;"></span>'+
				        '<button type="button" class="btn btn-danger deleteRoleCls" id="btnDelRoleId-'+srNoRole+'">'+
				        '<span class="glyphicon glyphicon-trash"></span></button>'+
				        '</td></tr>';
				        
				        requestData(API_ADDROLE_POST, "POST", JSON.stringify(getRowDataRoleLos(srNoRole))).done(function (reply) {
				        	// console.log('srNoRoleADD-',srNoRole);
				        	$('#srNoHidId-'+srNoRole).text(reply.roleId);
				        	$('#roleNameId-'+srNoRole).text(reply.roleName);
				        });
				        $('#roleAddTable').append(renData);
				        $('#addRolesTextId').val('');
				        $('#closeAddId').click();
				        location.href = "/upf-system/upf/debitCredit/roles";
				     	// alert(srNoRole);
					}
				}
	});
}

function getRowDataRoleLos(){//alert(a); // $('#hidModalUpdId').text(
	var userData = {	
		  "roleId" : $_isNaNChck('addRolesTextHidId','t'),
		  "roleName" :  $('#addRolesTextId').val()
	};
return userData;
}

</script>

</body>
</html>