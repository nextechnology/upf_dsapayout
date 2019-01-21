<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Bureau Analyzer</title>
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
</style> 
</head>
<body class="hold-transition skin-blue sidebar-collapse" id="bodyId">
<div class="wrapper">
<div id="appenId"></div>
<div id="headerId"></div>
 <!--  <header class="main-header m-layer">
    <a href="javascript:void(0);" class="logo">
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
            <a href="javascript:void(0);"><b>Bureau Analyzer</b></a>
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
    	<div class="container">
					<div class="col-md-3 pull-right">
						<div class="input-group">
							<input type="text" class="form-control" id="searchBoxId"
								placeholder="GK ID"> <span class="input-group-btn">
								<button type="button" id="searchBtnCvId" class="btn btn-info">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
		</div>
		
	<div class="row">
      <div class="paddingCVRowId">
        <!-- left column -->
        <div class="col-md-10 col-md-offset-1">
          <!-- general form elements -->
          <div id="hideShowDivId" style="display:none;">
          <div class="box box-primary">
            <div class="box-header with-border">
            <!-- tools box -->
              
              <!-- /. tools -->
              <h3 class="box-title">Applicants List</h3>
            </div>
              <div id="renderList">
             <table class="table table-bordered" id="roleTableId">
       		 <thead><tr>
       		 <td style="width:70px;" class="a-tcenter">Sr. No</td>
       		 <td class="a-tcenter">Applicant Name</td><td class="a-tcenter">PAN Number</td>
       		 <td class="a-tcenter">Bureau Analyzer Link</td>
       		 </tr></thead>
      		 <tbody id="creditVidyaTable">
      		 
      		 </tbody>
      		 </table>
              	<!-- ************************************* -->
              	<!-- ROLES WILL RENDER HERE -->		        
		        <!-- ************************************* -->
              </div>
              <!-- /.box-body -->
          </div>
          </div>
          <!-- /.box -->
        </div>
        <!--/.col (left) -->
      </div></div>
	</section>
	<button type="button" id="btnMwId" class="btn" style="display: none"
			data-toggle="modal" data-target="#myModal">Open Modal</button>
		<div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header" id="modalHeaderId"></div>
					<div class="modal-body" id="modalBodyId"></div>
					<div class="modal-footer" id="modalFooterId"></div>
				</div>
			</div>
		</div>
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
<script>
var API_CREDITVIDYA_GET = "/upf-system/upf/creditvidya/getlist/";
//var API_DOWNLOADS_EXL_GET = '/upf-system/upf/clientdetails/download-file?filePath=E:\upf_files\1159\1159_NTBANK_NTBank%201.xlsx';
		
$(document).ready(function(){
	
	$(document).on('click', '.linkCls', function(e){
		var getId = $(this).attr('id'); 
	    e.preventDefault(); 
	    var url = $("#"+getId).attr('href'); 
	    window.open(url, '_blank');
	});
	
	
	$("#searchBoxId").autocomplete({
		source : function (request,response) {
			$.getJSON(API_AUTOCOMPLETE,function(data) {
				var _data = ($.map(data,function (ke,val) {
						return {
							label : ke.id, 
							value : ke.id
						};
					}));
				response($.ui.autocomplete.filter(_data,request.term));
			});
		}
	});
	
	$(document).on('click','#searchBtnCvId',function(){		
		if($("#searchBoxId").val() == ""){
			mW('cID');
		}
		else{
			var tblData = '',srNoCv = 0;
			requestData(API_CREDITVIDYA_GET+$("#searchBoxId").val(), "GET", '').done(function(reply){
				if($.isEmptyObject(reply)){
					mW('nodata');
					$('#hideShowDivId').hide();
				}else{
					$(reply).each(function(k,v){
						$('#hideShowDivId').show();
						++srNoCv;
						tblData += '<tr style="text-align:center">'+
						'<td id="hidCvId'+srNoCv+'" style="display:none"></td>'+
						'<td>'+srNoCv+'</td>'+
						'<td>'+v.name+'</td>'+
						'<td>'+v.pan+'</td>';
						if(v.url === undefined){
							tblData +=	'<td>Errors in CIBIL for the applicant, Credit Vidya link unavailable.</td>';
						}else{
							tblData +=	'<td><button class="btn btn-link"><a class="linkCls" id="linkId'+srNoCv+'" href="'+v.url+'"><u>Click here</ul></a></button></td>';
						}
						tblData +=	'</tr>';
						$('#creditVidyaTable').empty().append(tblData);
					});
				}
			});			
		}
	});
	
});
</script>

</body>
</html>