<!DOCTYPE html>
<html lang="en">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"  import="java.util.*" import="com.transportex.web.model.*" %>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>KapitalTech - Login</title>
<%String contextUrl=request.getContextPath() ;%>				
  <!-- Bootstrap Core CSS -->
    <link href="<%=contextUrl%>/login/bootstrap.min.css" rel="stylesheet">
    <link href="<%=contextUrl%>/login/sb-admin-2.css" rel="stylesheet">
       <script src="<%=contextUrl%>/login/jquery.min.js"></script>
    <script src="<%=contextUrl%>/login/bootstrap.min.js"></script>
 	<script src="<%=contextUrl%>/login/glimpse.js"></script>
	<script src="<%=contextUrl%>/login/glimpse.toastr.js"></script>
	<script src="<%=contextUrl%>/login/toastr.min.js"></script>
	<!-- <link rel="stylesheet" type="text/css" href="../login/toastr.min.css"> -->
	<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
	
	<!-- TEMP FILES -->
	<link href="<%=contextUrl%>/login/theme.min.css" rel="stylesheet">
<style>
.m-button {
    padding: .35em 1em;
    text-decoration: none;
    font-weight: 400;
    line-height: 1;
    color: #fff;
    line-height: 1.5;
    text-shadow: 0 -1px 1px rgba(0,0,0,.3);
    background-image: -webkit-linear-gradient(#52A8E8, #377AD0);
    background-image: -moz-linear-gradient(0% 100% 90deg,#377AD0, #52A8E8);
    background-color: #52A8E8;
    border-radius: 23px;
    border: 1px solid #20559A;
    box-shadow: 0 1px 2px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.3);
}

.m-button:hover, .m-button:focus {
    background-image: -webkit-linear-gradient(#54A1D8, #1967CA);
    background-image: -moz-linear-gradient(0% 100% 90deg,#1967CA, #54A1D8);
    background-color: #52A8E8;
    box-shadow: 0 1px 0 rgba(255,255,255,.6), inset 0 1px 0 rgba(255,255,255,.3);
    color: #fff;
}

.m-button:active {
    background-color: #2D7CD1;
    box-shadow: 0 1px 1px rgba(255,255,255,.5), inset 0 2px 5px rgba(0,0,100,.5);
    color: #fff;
}
</style>
</head>
<script type="application/javascript">
//-----------------------------Disable back and forward buttons in any of the browser for security reasons.
history.pushState({ page: 1 }, "Title 1", "#no-back");
window.onhashchange = function (event) {
  window.location.hash = "no-back";
};
//-----------------------------End------------------------------------------------------------------------.
var dynamicurl='<%=contextUrl%>'; 
var API_FORPSWD_POST = '/upf-system/upf/authentication/forgotPassword';
$(document).ready(function() {
	
	
	toastr.options = {
			  "closeButton": false,
			  "debug": false,
			  "newestOnTop": false,
			  "progressBar": false,
			  "positionClass": "toast-top-right",
			  "preventDuplicates": false,
			  "onclick": null,
			  "showDuration": "100",
			  "hideDuration": "1000",
			  "timeOut": "2500",
			  "extendedTimeOut": "500",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut"
			}
	$_commonModal();
	$('#fpEmailSpanId').hide();
	$('#alertSpanId').hide();
	$(document).on('click','#btnForgotPswdDummy',function(){
		if($formValidity("formForgotPswd", "btnForgotPswdSubmit")){
		//	console.log(API_FORPSWD_POST+'?email='+$('#fpEmailId').val());
			 requestData(API_FORPSWD_POST+'?email='+$('#fpEmailId').val(),"POST","").done(function (reply){
					//console.log(reply)
					if(reply.reply == "success"){
						$('#closeForgotPwdId').click();
						Command: toastr["success"]("Email has been successfully sent to your registered email id.")
					}else{
						$('#fpEmailSpanId').show();
						$('#fpEmailSpanId').delay(2500).fadeOut();
					}
				});	
		}
	});
	
	/* $(document).on('click','#btnCrossId',function(){
		window.location.reload();
	}); */
		
	//var employeePortalUrlAfterLogin = dynamicurl + "/";
	var adminPortalUrlAfterLogin = dynamicurl + "/upf/debitCredit/welcome";
	var dsaLogin = dynamicurl + "/upf/debitCredit/dsa";
	var authenticateUser=dynamicurl + "/upf/authentication/authenticate";
	$("#loginForm").submit(function(event) {
		event.preventDefault();
		var email = $("#email").val();
		var password = $("#password").val();
	//	alert('authenticateUser :: '+authenticateUser);
		$.ajax({
			type: 'GET',
			url: authenticateUser,
			data:{
			      email: email,
			      password:password,
			      version : "WEB-LOGIN-1.0.0"
				},
			contentType: "application/json",
			success: function(data1) {   
				if(data1.id != null)
					{	//	console.log('data1-',data1);
							if (data1.roleName != 'DSA' && data1.roleName != undefined) {
				     		window.location.href = adminPortalUrlAfterLogin;
							}
							else if(data1.roleName =='DSA' && data1.roleName != undefined)
							{
								window.location.href = dsaLogin;
							}
							else
							{
								Command: toastr["error"]("You are not authorized Or Invalid username/password,Please Try again.");
							}
							localStorage.setItem("role", data1.roleName);
							localStorage.setItem("userName", data1.userName);
							localStorage.setItem("flag", data1.flag);
							localStorage.setItem("userId", data1.id);	
							localStorage.setItem("smName", data1.firstName);	
							localStorage.setItem("localFlag","false");	
					}
				else  {
					Command: toastr["error"]("You are not authorized Or Invalid username/password,Please Try again.")
				}
			}
			
		});
	});

		$("#email" ).focus();	
		
		
		});
		
function $_commonModal(){
	var commonModal = '<button type="button" data-toggle="modal" data-target="#btnForgotPswd"' + 
	'style="display:none" id="btnForgotPswdId" data-backdrop="static" data-keyboard="false"></button>'+
	  '<div class="modal fade" id="btnForgotPswd" role="dialog">'+
	    '<div class="modal-dialog modal-lg">'+
	      '<form role="form" id="formForgotPswd">'+
	      ' <div class="modal-content col-md-6 col-md-offset-3">'+
	        '<div class="modal-header">'+
	          '<button type="button" class="close toClose" data-dismiss="modal">&times;</button>'+
	          '<h4 class="modal-title" style="text-align:center">Forgot Passowrd</h4>'+
	        '</div>'+
	        '<div class="modal-body">'+
	          '<div class="row">'+
	       	 '<div class="col-md-12">'+
	          '<div>'+
	          '<fieldset>'+
	                 '<div class="form-group" style="paadding-top:10px;" >'+
	                  '<input type="text" name="fpEmail" id="fpEmailId" class="form-control" required="required" placeholder="Enter your email id" autofocus>'+
	                  '<span id="fpEmailSpanId" style="color:red">Enter email does not exist.</span>'+
	                  '</div>'+
	          '</fieldset> </div></div></div></div>'+
	          '<div class="modal-footer">'+
	          '<button type="button" id="btnForgotPswdDummy" value="" class="btn btn-primary pull-left">Submit</button>'+
	          '<button type="submit" id="btnForgotPswdSubmit" style="display:none;"></button>'+
	          '<button type="button" class="btn btn-default toForgotClose" id="closeForgotPwdId" data-dismiss="modal">Close</button>'+
	        '</div></div></form></div></div>';
	$('body').append(commonModal);
}

function $_commonModalClick(a){
	$('#'+a).click();
	$('#fpEmailId').val('');
}

function $formValidity(a,b) {
	//return true;
	 if (!$("#" + a)[0].checkValidity()) {
	  $("#" + a + " input[required='required']").each(function() {
	   if (!$("#" + a)[0].checkValidity()) {
	    $("#"+b).click();
	   }
	  });return false;
	 } else {return true;}
}
function requestData(url, type, data) {
	 var request = $.ajax({
	     url: url,
	     method: type,
	     data: data,
	     headers: {"Content-Type": "application/json;charset=UTF-8"},
	     dataType: "json"
	 });
	 return request;
	}
</script>
<body class="hold-transition login-page">
    <div class="container">
     <div id="alertSpanId" class="alert alert-success col-md-7 col-md-offset-2">
    	<a href="#" class="close" data-dismiss="alert" aria-label="close" id="btnCrossId">&times;</a>
    	<span><strong>Success!</strong> Your password has been sent to your registered email id.</span>
  	</div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-body" style="box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);">
                    <div class="login-logo">
						<a href="#">KapitalTech</a>
					</div>
                        <form role="form" action="" id="loginForm">
                            <fieldset>
                                <div class="form-group" >
                                    <input type="text" name="email" id="email" class="form-control" placeholder="Email Id" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" id="password" value="">
                                </div>
                                <div class="form-group"> <input type="submit" value="Log In" class="btn btn-lg m-button btn-block btn-flat"></div>
                            </fieldset>
                        </form>
                         <div>
   						 <a href="#" onclick="$_commonModalClick('btnForgotPswdId');">Forgot your password? </a><br>
						 </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html> 