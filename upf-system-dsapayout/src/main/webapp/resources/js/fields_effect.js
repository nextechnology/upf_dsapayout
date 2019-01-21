$(document).ready(function() {
	var id = 927;
	// PULL CIBIL BUTTON AND DOWNLOAD BUTTON
	$('.progress-button').progressInitialize();
	$("#cibilDown_div1").hide();
	$("#cibilDown_div2").hide();
	$("#cibilDown_div3").hide();
	$("#cibilDown_div4").hide();
	$("#cibilDown_div5").hide();
	$("#cibilDown_div6").hide();
	//0000000000000000000000000000000000000//103.59.212.246// server ip
	$('#btnPullCibil1').one('click', function(e) {
		e.preventDefault();
		var button = $(this);
		button.progressTimed(3, function() {
			window.location.href = "http://103.59.212.246:8080/upf-system/upf/clientdetails/getClientInfoId?id="+id;
//			alert('PDF file generated successfully!');
			$("#cibilDown_div1").show(500);
		});
	});
	////////////
	$('#btnPullCibil2').one('click', function(e) {
		e.preventDefault();
		var button = $(this);
		button.progressTimed(3, function() {
			window.location.href = "http://103.59.212.246:8080/upf-system/upf/clientdetails/getClientInfoId?id="+id;
	//		alert('PDF file generated successfully!');
			$("#cibilDown_div2").show(500);
		});
	});
////////////
	$('#btnPullCibil3').one('click', function(e) {
		e.preventDefault();
		var button = $(this);
		button.progressTimed(3, function() {
			window.location.href = "http://103.59.212.246:8080/upf-system/upf/clientdetails/getClientInfoId?id="+id;
			alert('PDF file generated successfully!');
			$("#cibilDown_div3").show(500);
		});
	});
////////////
	$('#btnPullCibil4').one('click', function(e) {
		e.preventDefault();
		var button = $(this);
		button.progressTimed(3, function() {
			window.location.href = "http://103.59.212.246:8080/upf-system/upf/clientdetails/getClientInfoId?id="+id;
			alert('PDF file generated successfully!');
			$("#cibilDown_div4").show(500);
		});
	});
////////////
	$('#btnPullCibil5').one('click', function(e) {
		e.preventDefault();
		var button = $(this);
		button.progressTimed(3, function() {
			window.location.href = "http://103.59.212.246:8080/upf-system/upf/clientdetails/getClientInfoId?id="+id;
			alert('PDF file generated successfully!');
			$("#cibilDown_div5").show(500);
		});
	});
////////////
	$('#btnPullCibil6').one('click', function(e) {
		e.preventDefault();
		var button = $(this);
		button.progressTimed(3, function() {
			window.location.href = "http://103.59.212.246:8080/upf-system/upf/clientdetails/submitCibil/927";
			alert('PDF file generated successfully!');
			$("#cibilDown_div6").show(500);
		});
	});
	//0000000000000000000000000000000000000

	// DEPENDENCY SELECT
	 var o1 = $('#option1').detach();
	 var o2 = $('#option2').detach();
	 var o3 = $('#option3').detach();
	$("#geo").change(function(){
		var _option = $(this).val();
		
	    if(_option == 1){
	      $("#option11").append(o1);$('#option2').detach();$('#option3').detach();
	      
	    }else if(_option == 2){
	    	  $("#option22").append(o2);$('#option1').detach();$('#option3').detach();
	      
	    }else if(_option == 3){
	    	  $("#option33").append(o3);$('#option1').detach();$('#option2').detach();
	    }
	});
	
	// DATE PICKER
	$(".datePicker").datepicker({
		dateFormat: 'yy-mm-dd',
		changeYear: true,
		changeMonth:true
	});
	
	// TEXT BOX DISABLE FUNCTION
    $(".text-disable").on("input",function() {
        if($(this).val() != '') {
            $(".text-disable").not(this).attr('disabled','disabled');
        } else {
            $(".text-disable").removeAttr('disabled');
        }
    });//end

    // GO TO SEARCH PAGE
    $("#btnGoToSearchPage").click(function(){
    	refreshPage();
    });
    

	$("#regPage").hide();
	$("#btnGoToSearchPage").hide();
	$("#cibilGrid").hide();
	$("#searchPage").show();
	var max = 5,x = 0;
	// REMOVE APPLICANT
	 $("#add_content_wrap1").on("click","#btnRemove1", function(e){
       if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
           e.preventDefault(); $('#add_content_wrap1 input').val(''); $("#add_content_wrap1").detach(); x = 0;
       }
   })
   $("#add_content_wrap2").on("click","#btnRemove2", function(e){
       if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
           e.preventDefault(); $('#add_content_wrap2 input').val('');$("#add_content_wrap2").detach(); x = 1;
       }
   })
   $("#add_content_wrap3").on("click","#btnRemove3", function(e){
       if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
           e.preventDefault(); $('#add_content_wrap3 input').val('');$("#add_content_wrap3").detach(); x = 2;
       }
   })
   $("#add_content_wrap4").on("click","#btnRemove4", function(e){
       if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
           e.preventDefault(); $('#add_content_wrap4 input').val('');$("#add_content_wrap4").detach(); x = 3;
       }
   })
   $("#add_content_wrap5").on("click","#btnRemove5", function(e){
       if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
           e.preventDefault(); $('#add_content_wrap5 input').val('');$("#add_content_wrap5").detach(); x = 4;
       }
   }) // end remove
   
    var el1 = $('#add_content_wrap1').detach();
    var el2 = $('#add_content_wrap2').detach();
    var el3 = $('#add_content_wrap3').detach();
    var el4 = $('#add_content_wrap4').detach();
    var el5 = $('#add_content_wrap5').detach();
  
    //103.59.212.246:8080
    // ****************  AUTO COMPLETE IN SEARCH WINDOW  *******************
	$("#btnSearch").click(function(){	
		var searchByID = $("#c_id").val()
		,searchByName = $("#c_n").val()
		,searchByAppName = $("#f_a_n").val();
		
		// COMPANY NAME DISABLE
		$('.companyNameCls').prop('readonly', true);
					
		//POPULATING THE VALUES BY ID
		if(searchByID || searchByName || searchByAppName != ""){
			$("#searchPage").remove();
			if(searchByID != ""){
				$.getJSON("http://103.59.212.246:8080/upf-system/upf/clientInformation/getClientId?searchString="+searchByID,function(result){
					// =======================================================================
					 $(".companyNameCls").val(result.companyName);
					 
					 //000000000000000000000000000000000
					 if(result.status != null){
						 if(result.status.charAt(0) == 'R'){
							 $(".nonCibilStatusClsRed").html(result.status);
						 }else if(result.status.charAt(0) == 'A'){
							 $(".nonCibilStatusClsGreen").html(result.status);
						 }
					 }else{$(".nonCibilStatusCls").text("null");}
					 //---------------------------------------------------------------
					 if(result.result != null){
						 if(result.result.charAt(0) == 'R'){
							 $(".cibilResultClsRed").html(result.result);
						 }else if(result.result.charAt(0) == 'A'){
							 $(".cibilresultClsGreen").html(result.result);
						 }
					 }else{$(".cibilResultCls").text("null");}
					 //000000000000000000000000000000000000000000
					
					 // primary details
					/* alert(result.applicantDetails[1].id);*/
					 $(".firstName1Cls").val(result.firstName1);
					 $(".lastName1Cls").val(result.lastName1);
					 $(".dateOfBirth1Cls").val(result.dateOfBirth1);
					 $(".gender1Cls").val(result.gender1);
					 
					 // residence address
					 $(".applicantAddress1Cls").val(result.applicantAddress1);
					 $(".applicantCity1Cls").val(result.applicantCity1);
					 $(".applicantState1Cls").val(result.applicantState1);
					 $(".applicantPinCode1Cls").val(result.applicantPinCode1);
					 $(".statesDropdown1").autocomplete({
		    				source: _states
		    			});
					 
					 // Office address
					 	$(".addressCls").val(result.address);
						$(".pinCodeCls").val(result.pinCode);
						$(".cityCls").val(result.city);
						$(".stateCls").val(result.state);
						 $(".statesDropdown1_1").autocomplete({
			    				source: _states
			    			});
					 
					 // phonetype
					 $(".phoneType1Cls").val(result.phoneType1);
					 $(".phoneNumber1Cls").val(result.phoneNumber1);
					 $(".applicantPanNumber1Cls").val(result.applicantPanNumber1);
					 
				//Addtional 111111111111111111111111111111
					 /*var el1 = $('#add_content_wrap1').detach();*/
					 if(result.firstName2 != null && result.firstName2 != ""){
						 $("#add_content_wrap11").append(el1);
						 $(".firstName2Cls").val(result.firstName2);
						 $(".lastName2Cls").val(result.lastName2);
						 $(".dateOfBirth2Cls").val(result.dateOfBirth2);
						 $(".dateOfBirth2Cls").datepicker({
								dateFormat: 'yy-mm-dd',
								changeYear: true,
								changeMonth:true
							});
						 $("#gender2Id").val(result.gender2);
						 
						 // residence address
						 $(".applicantAddress2Cls").val(result.applicantAddress2);
						 $(".applicantCity2Cls").val(result.applicantCity2);
						 $(".applicantState2Cls").val(result.applicantState2);
						 $(".statesDropdown2").autocomplete({
			    				source: _states
			    			});
						 $(".applicantPinCode2Cls").val(result.applicantPinCode2);
						 
						 // phonetype
						 $("#phoneType2Id").val(result.phoneType2);
						 $(".phoneNumber2Cls").val(result.phoneNumber2);
						 $(".applicantPanNumber2Cls").val(result.applicantPanNumber2);   x =1;
					 }
					 
				//111111111111111111111111111111111111111111111111111111111
					
				//additional 22222222222222222222222222222222222222222222222
					/* var el2 = $('#add_content_wrap2').detach();*/
					 if(result.firstName3 != null && result.firstName3 != ""){
						 $("#add_content_wrap22").append(el2);
						 $("#add_content_wrap2").show();
					 $(".firstName3Cls").val(result.firstName3);
					 $(".lastName3Cls").val(result.lastName3);
					 $(".dateOfBirth3Cls").val(result.dateOfBirth3);
					 $(".dateOfBirth3Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender3Id").val(result.gender3);
					 
					 // residence address
					 $(".applicantAddress3Cls").val(result.applicantAddress3);
					 $(".applicantCity3Cls").val(result.applicantCity3);
					 $(".applicantState3Cls").val(result.applicantState3);
					 $(".statesDropdown3").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode3Cls").val(result.applicantPinCode3);
					 
					 // phonetype
					 $("#phoneType3Id").val(result.phoneType3);
					 $(".phoneNumber3Cls").val(result.phoneNumber3);
					 $(".applicantPanNumber3Cls").val(result.applicantPanNumber3);  x = 2;
					 }
					//2222222222222222222222222222222222222222222222222222222
					 
					 //additional  333333333333333333333333333333333333333333333
					/* var el3 = $('#add_content_wrap3').detach();*/
					 if(result.firstName4 != null && result.firstName4 != ""){
						 $("#add_content_wrap33").append(el3);
						 $("#add_content_wrap3").show();
					 $(".firstName4Cls").val(result.firstName4);
					 $(".lastName4Cls").val(result.lastName4);
					 $(".dateOfBirth4Cls").val(result.dateOfBirth4);
					 $(".dateOfBirth4Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender4Id").val(result.gender4);
					 
					 // residence address
					 $(".applicantAddress4Cls").val(result.applicantAddress4);
					 $(".applicantCity4Cls").val(result.applicantCity4);
					 $(".applicantState4Cls").val(result.applicantState4);
					 $(".statesDropdown4").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode4Cls").val(result.applicantPinCode4);
					 
					 // phonetype
					 $("#phoneType4Id").val(result.phoneType4);
					 $(".phoneNumber4Cls").val(result.phoneNumber4);
					 $(".applicantPanNumber4Cls").val(result.applicantPanNumber4);  x = 3;
					 }
					 //333333333333333333333333333333333333333333333333333333
					 
					 //additional 4444444444444444444444444444444444444444444444
					 /*var el4 = $('#add_content_wrap4').detach();*/
					 if(result.firstName5 != null && result.firstName5 != ""){
						 $("#add_content_wrap44").append(el4);
						 $("#add_content_wrap4").show();
					 $(".firstName5Cls").val(result.firstName5);
					 $(".lastName5Cls").val(result.lastName5);
					 $(".dateOfBirth5Cls").val(result.dateOfBirth5);
					 $(".dateOfBirth5Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender5Id").val(result.gender5);
					 
					 // residence address
					 $(".applicantAddress5Cls").val(result.applicantAddress5);
					 $(".applicantCity5Cls").val(result.applicantCity5);
					 $(".applicantState5Cls").val(result.applicantState5);
					 $(".statesDropdown5").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode5Cls").val(result.applicantPinCode5);
					 
					 // phonetype
					 $("#phoneType5Id").val(result.phoneType5);
					 $(".phoneNumber5Cls").val(result.phoneNumber5);
					 $(".applicantPanNumber5Cls").val(result.applicantPanNumber5); x = 4;
					 }
					 //4444444444444444444444444444444444444444444444444444444
					 
					 //additional 55555555555555555555555555555555555555555555555
					/* var el5 = $('#add_content_wrap5').detach();*/
					 if(result.firstName6 != null && result.firstName6 != ""){
						 $("#add_content_wrap55").append(el5);
						 $("#add_content_wrap5").show();
					 $(".firstName6Cls").val(result.firstName6);
					 $(".lastName6Cls").val(result.lastName6);
					 $(".dateOfBirth6Cls").val(result.dateOfBirth6);
					 $(".dateOfBirth6Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender6Id").val(result.gender6);
					 
					 // residence address
					 $(".applicantAddress6Cls").val(result.applicantAddress6);
					 $(".applicantCity6Cls").val(result.applicantCity6);
					 $(".applicantState6Cls").val(result.applicantState6);
					 $(".statesDropdown6").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode6Cls").val(result.applicantPinCode6);
					 
					 // phonetype
					 $("#phoneType6Id").val(result.phoneType6);
					 $(".phoneNumber6Cls").val(result.phoneNumber6);
					 $(".applicantPanNumber6Cls").val(result.applicantPanNumber6);   x = 5;
					 }
					 //55555555555555555555555555555555555555555555555555555555
			 
						//bussiness details
						$("#n_o_b").val(result.clientDetails.natureOfBusiness);
						$("#a_t_o").val(result.clientDetails.annualTurnover);
						$("#r_o_s").val(result.clientDetails.residenceOwnershipStatus);
						$("#b_o_s").val(result.clientDetails.officeOwnershipStatus);
						$("#b_v").val(result.clientDetails.businessVintage);
						$("#geo").val(result.clientDetails.geographicalArea);
						// 111
						if(result.clientDetails.geographicalArea == 1){
							$("#option11").append(o1); 
							$("#g_l1").val(result.clientDetails.geographicalLimit);
						}
						// 222
						if(result.clientDetails.geographicalArea == 2){
							$("#option22").append(o2);
							$("#g_l2").val(result.clientDetails.geographicalLimit); 
						}
						// 333
						if(result.clientDetails.geographicalArea == 3){
							$("#option33").append(o3);
							$("#g_l3").val(result.clientDetails.geographicalLimit);
						}
						$("#e_b_d").val(result.clientDetails.emiBounceDays);
						$("#m_1").val(result.clientDetails.avergaeInwardBounceDaysMonth1);
						$("#m_2").val(result.clientDetails.avergaeInwardBounceDaysMonth2);
						$("#m_3").val(result.clientDetails.avergaeInwardBounceDaysMonth3);
						$("#a_f_a").val(result.clientDetails.auditedFileAvailable);
						$("#c_f").val(result.clientDetails.creditFrequency);
						$("#adbb").val(result.clientDetails.adbb);
						$("#c_s").val(result.clientDetails.adbb);
						// =======================================================================	
				});
			} else if (searchByName != ""){
				 $.getJSON("http://103.59.212.246:8080/upf-system/upf/clientInformation/getClientByCom?searchString="+searchByName,function(result){
						// =======================================================================
					 $(".companyNameCls").val(result.companyName);
					 
					 //000000000000000000000000000000000
					 if(result.status != null){
						 if(result.status.charAt(0) == 'R'){
							 $(".nonCibilStatusClsRed").html(result.status);
						 }else if(result.status.charAt(0) == 'A'){
							 $(".nonCibilStatusClsGreen").html(result.status);
						 }
					 }else{$(".nonCibilStatusCls").text("null");}
					 //---------------------------------------------------------------
					 if(result.result != null){
						 if(result.result.charAt(0) == 'R'){
							 $(".cibilResultClsRed").html(result.result);
						 }else if(result.result.charAt(0) == 'A'){
							 $(".cibilresultClsGreen").html(result.result);
						 }
					 }else{$(".cibilResultCls").text("null");}
					 //000000000000000000000000000000000000000000
					
					 // primary details
					/* alert(result.applicantDetails[1].id);*/
					 $(".firstName1Cls").val(result.firstName1);
					 $(".lastName1Cls").val(result.lastName1);
					 $(".dateOfBirth1Cls").val(result.dateOfBirth1);
					 $(".gender1Cls").val(result.gender1);
					 
					 // residence address
					 $(".applicantAddress1Cls").val(result.applicantAddress1);
					 $(".applicantCity1Cls").val(result.applicantCity1);
					 $(".applicantState1Cls").val(result.applicantState1);
					 $(".applicantPinCode1Cls").val(result.applicantPinCode1);
					 $(".statesDropdown1").autocomplete({
		    				source: _states
		    			});
					 
					 // Office address
					 	$(".addressCls").val(result.address);
						$(".pinCodeCls").val(result.pinCode);
						$(".cityCls").val(result.city);
						$(".stateCls").val(result.state);
						 $(".statesDropdown1_1").autocomplete({
			    				source: _states
			    			});
					 
					 // phonetype
					 $(".phoneType1Cls").val(result.phoneType1);
					 $(".phoneNumber1Cls").val(result.phoneNumber1);
					 $(".applicantPanNumber1Cls").val(result.applicantPanNumber1);
					 
				//Addtional 111111111111111111111111111111
					 /*var el1 = $('#add_content_wrap1').detach();*/
					 if(result.firstName2 != null && result.firstName2 != ""){
						 $("#add_content_wrap11").append(el1);
						 $(".firstName2Cls").val(result.firstName2);
						 $(".lastName2Cls").val(result.lastName2);
						 $(".dateOfBirth2Cls").val(result.dateOfBirth2);
						 $(".dateOfBirth2Cls").datepicker({
								dateFormat: 'yy-mm-dd',
								changeYear: true,
								changeMonth:true
							});
						 $("#gender2Id").val(result.gender2);
						 
						 // residence address
						 $(".applicantAddress2Cls").val(result.applicantAddress2);
						 $(".applicantCity2Cls").val(result.applicantCity2);
						 $(".applicantState2Cls").val(result.applicantState2);
						 $(".statesDropdown2").autocomplete({
			    				source: _states
			    			});
						 $(".applicantPinCode2Cls").val(result.applicantPinCode2);
						 
						 // phonetype
						 $("#phoneType2Id").val(result.phoneType2);
						 $(".phoneNumber2Cls").val(result.phoneNumber2);
						 $(".applicantPanNumber2Cls").val(result.applicantPanNumber2);   x =1;
					 }
					 
				//111111111111111111111111111111111111111111111111111111111
					
				//additional 22222222222222222222222222222222222222222222222
					/* var el2 = $('#add_content_wrap2').detach();*/
					 if(result.firstName3 != null && result.firstName3 != ""){
						 $("#add_content_wrap22").append(el2);
						 $("#add_content_wrap2").show();
					 $(".firstName3Cls").val(result.firstName3);
					 $(".lastName3Cls").val(result.lastName3);
					 $(".dateOfBirth3Cls").val(result.dateOfBirth3);
					 $(".dateOfBirth3Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender3Id").val(result.gender3);
					 
					 // residence address
					 $(".applicantAddress3Cls").val(result.applicantAddress3);
					 $(".applicantCity3Cls").val(result.applicantCity3);
					 $(".applicantState3Cls").val(result.applicantState3);
					 $(".statesDropdown3").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode3Cls").val(result.applicantPinCode3);
					 
					 // phonetype
					 $("#phoneType3Id").val(result.phoneType3);
					 $(".phoneNumber3Cls").val(result.phoneNumber3);
					 $(".applicantPanNumber3Cls").val(result.applicantPanNumber3);  x = 2;
					 }
					//2222222222222222222222222222222222222222222222222222222
					 
					 //additional  333333333333333333333333333333333333333333333
					/* var el3 = $('#add_content_wrap3').detach();*/
					 if(result.firstName4 != null && result.firstName4 != ""){
						 $("#add_content_wrap33").append(el3);
						 $("#add_content_wrap3").show();
					 $(".firstName4Cls").val(result.firstName4);
					 $(".lastName4Cls").val(result.lastName4);
					 $(".dateOfBirth4Cls").val(result.dateOfBirth4);
					 $(".dateOfBirth4Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender4Id").val(result.gender4);
					 
					 // residence address
					 $(".applicantAddress4Cls").val(result.applicantAddress4);
					 $(".applicantCity4Cls").val(result.applicantCity4);
					 $(".applicantState4Cls").val(result.applicantState4);
					 $(".statesDropdown4").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode4Cls").val(result.applicantPinCode4);
					 
					 // phonetype
					 $("#phoneType4Id").val(result.phoneType4);
					 $(".phoneNumber4Cls").val(result.phoneNumber4);
					 $(".applicantPanNumber4Cls").val(result.applicantPanNumber4);  x = 3;
					 }
					 //333333333333333333333333333333333333333333333333333333
					 
					 //additional 4444444444444444444444444444444444444444444444
					 /*var el4 = $('#add_content_wrap4').detach();*/
					 if(result.firstName5 != null && result.firstName5 != ""){
						 $("#add_content_wrap44").append(el4);
						 $("#add_content_wrap4").show();
					 $(".firstName5Cls").val(result.firstName5);
					 $(".lastName5Cls").val(result.lastName5);
					 $(".dateOfBirth5Cls").val(result.dateOfBirth5);
					 $(".dateOfBirth5Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender5Id").val(result.gender5);
					 
					 // residence address
					 $(".applicantAddress5Cls").val(result.applicantAddress5);
					 $(".applicantCity5Cls").val(result.applicantCity5);
					 $(".applicantState5Cls").val(result.applicantState5);
					 $(".statesDropdown5").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode5Cls").val(result.applicantPinCode5);
					 
					 // phonetype
					 $("#phoneType5Id").val(result.phoneType5);
					 $(".phoneNumber5Cls").val(result.phoneNumber5);
					 $(".applicantPanNumber5Cls").val(result.applicantPanNumber5); x = 4;
					 }
					 //4444444444444444444444444444444444444444444444444444444
					 
					 //additional 55555555555555555555555555555555555555555555555
					/* var el5 = $('#add_content_wrap5').detach();*/
					 if(result.firstName6 != null && result.firstName6 != ""){
						 $("#add_content_wrap55").append(el5);
						 $("#add_content_wrap5").show();
					 $(".firstName6Cls").val(result.firstName6);
					 $(".lastName6Cls").val(result.lastName6);
					 $(".dateOfBirth6Cls").val(result.dateOfBirth6);
					 $(".dateOfBirth6Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender6Id").val(result.gender6);
					 
					 // residence address
					 $(".applicantAddress6Cls").val(result.applicantAddress6);
					 $(".applicantCity6Cls").val(result.applicantCity6);
					 $(".applicantState6Cls").val(result.applicantState6);
					 $(".statesDropdown6").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode6Cls").val(result.applicantPinCode6);
					 
					 // phonetype
					 $("#phoneType6Id").val(result.phoneType6);
					 $(".phoneNumber6Cls").val(result.phoneNumber6);
					 $(".applicantPanNumber6Cls").val(result.applicantPanNumber6);   x = 5;
					 }
					 //55555555555555555555555555555555555555555555555555555555
			 
						//bussiness details
						$("#n_o_b").val(result.clientDetails.natureOfBusiness);
						$("#a_t_o").val(result.clientDetails.annualTurnover);
						$("#r_o_s").val(result.clientDetails.residenceOwnershipStatus);
						$("#b_o_s").val(result.clientDetails.officeOwnershipStatus);
						$("#b_v").val(result.clientDetails.businessVintage);
						$("#geo").val(result.clientDetails.geographicalArea);
						// 111
						if(result.clientDetails.geographicalArea == 1){
							$("#option11").append(o1); 
							$("#g_l1").val(result.clientDetails.geographicalLimit);
						}
						// 222
						if(result.clientDetails.geographicalArea == 2){
							$("#option22").append(o2);
							$("#g_l2").val(result.clientDetails.geographicalLimit); 
						}
						// 333
						if(result.clientDetails.geographicalArea == 3){
							$("#option33").append(o3);
							$("#g_l3").val(result.clientDetails.geographicalLimit);
						}
						$("#e_b_d").val(result.clientDetails.emiBounceDays);
						$("#m_1").val(result.clientDetails.avergaeInwardBounceDaysMonth1);
						$("#m_2").val(result.clientDetails.avergaeInwardBounceDaysMonth2);
						$("#m_3").val(result.clientDetails.avergaeInwardBounceDaysMonth3);
						$("#a_f_a").val(result.clientDetails.auditedFileAvailable);
						$("#c_f").val(result.clientDetails.creditFrequency);
						$("#adbb").val(result.clientDetails.adbb);
						$("#c_s").val(result.clientDetails.adbb);
						// =======================================================================	
				});
			}else if(searchByAppName != ""){
				$.getJSON("http://103.59.212.246:8080/upf-system/upf/clientInformation/getClientByPanNum?searchString="+searchByAppName,function(result){
					// =======================================================================
					 $(".companyNameCls").val(result.companyName);
					 
					 //000000000000000000000000000000000
					 if(result.status != null){
						 if(result.status.charAt(0) == 'R'){
							 $(".nonCibilStatusClsRed").html(result.status);
						 }else if(result.status.charAt(0) == 'A'){
							 $(".nonCibilStatusClsGreen").html(result.status);
						 }
					 }else{$(".nonCibilStatusCls").text("null");}
					 //---------------------------------------------------------------
					 if(result.result != null){
						 if(result.result.charAt(0) == 'R'){
							 $(".cibilResultClsRed").html(result.result);
						 }else if(result.result.charAt(0) == 'A'){
							 $(".cibilresultClsGreen").html(result.result);
						 }
					 }else{$(".cibilResultCls").text("null");}
					 //000000000000000000000000000000000000000000
					
					 // primary details
					/* alert(result.applicantDetails[1].id);*/
					 $(".firstName1Cls").val(result.firstName1);
					 $(".lastName1Cls").val(result.lastName1);
					 $(".dateOfBirth1Cls").val(result.dateOfBirth1);
					 $(".gender1Cls").val(result.gender1);
					 
					 // residence address
					 $(".applicantAddress1Cls").val(result.applicantAddress1);
					 $(".applicantCity1Cls").val(result.applicantCity1);
					 $(".applicantState1Cls").val(result.applicantState1);
					 $(".applicantPinCode1Cls").val(result.applicantPinCode1);
					 $(".statesDropdown1").autocomplete({
		    				source: _states
		    			});
					 
					 // Office address
					 	$(".addressCls").val(result.address);
						$(".pinCodeCls").val(result.pinCode);
						$(".cityCls").val(result.city);
						$(".stateCls").val(result.state);
						 $(".statesDropdown1_1").autocomplete({
			    				source: _states
			    			});
					 
					 // phonetype
					 $(".phoneType1Cls").val(result.phoneType1);
					 $(".phoneNumber1Cls").val(result.phoneNumber1);
					 $(".applicantPanNumber1Cls").val(result.applicantPanNumber1);
					 
				//Addtional 111111111111111111111111111111
					 /*var el1 = $('#add_content_wrap1').detach();*/
					 if(result.firstName2 != null && result.firstName2 != ""){
						 $("#add_content_wrap11").append(el1);
						 $(".firstName2Cls").val(result.firstName2);
						 $(".lastName2Cls").val(result.lastName2);
						 $(".dateOfBirth2Cls").val(result.dateOfBirth2);
						 $(".dateOfBirth2Cls").datepicker({
								dateFormat: 'yy-mm-dd',
								changeYear: true,
								changeMonth:true
							});
						 $("#gender2Id").val(result.gender2);
						 
						 // residence address
						 $(".applicantAddress2Cls").val(result.applicantAddress2);
						 $(".applicantCity2Cls").val(result.applicantCity2);
						 $(".applicantState2Cls").val(result.applicantState2);
						 $(".statesDropdown2").autocomplete({
			    				source: _states
			    			});
						 $(".applicantPinCode2Cls").val(result.applicantPinCode2);
						 
						 // phonetype
						 $("#phoneType2Id").val(result.phoneType2);
						 $(".phoneNumber2Cls").val(result.phoneNumber2);
						 $(".applicantPanNumber2Cls").val(result.applicantPanNumber2);   x =1;
					 }
					 
				//111111111111111111111111111111111111111111111111111111111
					
				//additional 22222222222222222222222222222222222222222222222
					/* var el2 = $('#add_content_wrap2').detach();*/
					 if(result.firstName3 != null && result.firstName3 != ""){
						 $("#add_content_wrap22").append(el2);
						 $("#add_content_wrap2").show();
					 $(".firstName3Cls").val(result.firstName3);
					 $(".lastName3Cls").val(result.lastName3);
					 $(".dateOfBirth3Cls").val(result.dateOfBirth3);
					 $(".dateOfBirth3Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender3Id").val(result.gender3);
					 
					 // residence address
					 $(".applicantAddress3Cls").val(result.applicantAddress3);
					 $(".applicantCity3Cls").val(result.applicantCity3);
					 $(".applicantState3Cls").val(result.applicantState3);
					 $(".statesDropdown3").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode3Cls").val(result.applicantPinCode3);
					 
					 // phonetype
					 $("#phoneType3Id").val(result.phoneType3);
					 $(".phoneNumber3Cls").val(result.phoneNumber3);
					 $(".applicantPanNumber3Cls").val(result.applicantPanNumber3);  x = 2;
					 }
					//2222222222222222222222222222222222222222222222222222222
					 
					 //additional  333333333333333333333333333333333333333333333
					/* var el3 = $('#add_content_wrap3').detach();*/
					 if(result.firstName4 != null && result.firstName4 != ""){
						 $("#add_content_wrap33").append(el3);
						 $("#add_content_wrap3").show();
					 $(".firstName4Cls").val(result.firstName4);
					 $(".lastName4Cls").val(result.lastName4);
					 $(".dateOfBirth4Cls").val(result.dateOfBirth4);
					 $(".dateOfBirth4Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender4Id").val(result.gender4);
					 
					 // residence address
					 $(".applicantAddress4Cls").val(result.applicantAddress4);
					 $(".applicantCity4Cls").val(result.applicantCity4);
					 $(".applicantState4Cls").val(result.applicantState4);
					 $(".statesDropdown4").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode4Cls").val(result.applicantPinCode4);
					 
					 // phonetype
					 $("#phoneType4Id").val(result.phoneType4);
					 $(".phoneNumber4Cls").val(result.phoneNumber4);
					 $(".applicantPanNumber4Cls").val(result.applicantPanNumber4);  x = 3;
					 }
					 //333333333333333333333333333333333333333333333333333333
					 
					 //additional 4444444444444444444444444444444444444444444444
					 /*var el4 = $('#add_content_wrap4').detach();*/
					 if(result.firstName5 != null && result.firstName5 != ""){
						 $("#add_content_wrap44").append(el4);
						 $("#add_content_wrap4").show();
					 $(".firstName5Cls").val(result.firstName5);
					 $(".lastName5Cls").val(result.lastName5);
					 $(".dateOfBirth5Cls").val(result.dateOfBirth5);
					 $(".dateOfBirth5Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender5Id").val(result.gender5);
					 
					 // residence address
					 $(".applicantAddress5Cls").val(result.applicantAddress5);
					 $(".applicantCity5Cls").val(result.applicantCity5);
					 $(".applicantState5Cls").val(result.applicantState5);
					 $(".statesDropdown5").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode5Cls").val(result.applicantPinCode5);
					 
					 // phonetype
					 $("#phoneType5Id").val(result.phoneType5);
					 $(".phoneNumber5Cls").val(result.phoneNumber5);
					 $(".applicantPanNumber5Cls").val(result.applicantPanNumber5); x = 4;
					 }
					 //4444444444444444444444444444444444444444444444444444444
					 
					 //additional 55555555555555555555555555555555555555555555555
					/* var el5 = $('#add_content_wrap5').detach();*/
					 if(result.firstName6 != null && result.firstName6 != ""){
						 $("#add_content_wrap55").append(el5);
						 $("#add_content_wrap5").show();
					 $(".firstName6Cls").val(result.firstName6);
					 $(".lastName6Cls").val(result.lastName6);
					 $(".dateOfBirth6Cls").val(result.dateOfBirth6);
					 $(".dateOfBirth6Cls").datepicker({
							dateFormat: 'yy-mm-dd',
							changeYear: true,
							changeMonth:true
						});
					 $("#gender6Id").val(result.gender6);
					 
					 // residence address
					 $(".applicantAddress6Cls").val(result.applicantAddress6);
					 $(".applicantCity6Cls").val(result.applicantCity6);
					 $(".applicantState6Cls").val(result.applicantState6);
					 $(".statesDropdown6").autocomplete({
		    				source: _states
		    			});
					 $(".applicantPinCode6Cls").val(result.applicantPinCode6);
					 
					 // phonetype
					 $("#phoneType6Id").val(result.phoneType6);
					 $(".phoneNumber6Cls").val(result.phoneNumber6);
					 $(".applicantPanNumber6Cls").val(result.applicantPanNumber6);   x = 5;
					 }
					 //55555555555555555555555555555555555555555555555555555555
			 
						//bussiness details
						$("#n_o_b").val(result.clientDetails.natureOfBusiness);
						$("#a_t_o").val(result.clientDetails.annualTurnover);
						$("#r_o_s").val(result.clientDetails.residenceOwnershipStatus);
						$("#b_o_s").val(result.clientDetails.officeOwnershipStatus);
						$("#b_v").val(result.clientDetails.businessVintage);
						$("#geo").val(result.clientDetails.geographicalArea);
						// 111
						if(result.clientDetails.geographicalArea == 1){
							$("#option11").append(o1); 
							$("#g_l1").val(result.clientDetails.geographicalLimit);
						}
						// 222
						if(result.clientDetails.geographicalArea == 2){
							$("#option22").append(o2);
							$("#g_l2").val(result.clientDetails.geographicalLimit); 
						}
						// 333
						if(result.clientDetails.geographicalArea == 3){
							$("#option33").append(o3);
							$("#g_l3").val(result.clientDetails.geographicalLimit);
						}
						$("#e_b_d").val(result.clientDetails.emiBounceDays);
						$("#m_1").val(result.clientDetails.avergaeInwardBounceDaysMonth1);
						$("#m_2").val(result.clientDetails.avergaeInwardBounceDaysMonth2);
						$("#m_3").val(result.clientDetails.avergaeInwardBounceDaysMonth3);
						$("#a_f_a").val(result.clientDetails.auditedFileAvailable);
						$("#c_f").val(result.clientDetails.creditFrequency);
						$("#adbb").val(result.clientDetails.adbb);
						$("#c_s").val(result.clientDetails.adbb);
						// =======================================================================	
				});
			}
			$("#regPage").show();
			$("#btnGoToSearchPage").show();
			$("#cibilGrid").show();
		}else {alert("Please enter search parameter!");}
	});
//0000000000000000000000000000000000000000000000000000
	// ADD ADDITIONAL APPLICANT
	
	    $("#btnAdd").click(function(e){
	         e.preventDefault();
	        if(x < max){
	        	x++;
	            if(x == 1){
		    		$("#add_content_wrap11").append(el1); 
		    		$("#add_content_wrap1").show();
		    		window.location.href = '#add_content_wrap1';
		    		$(".dateOfBirth2Cls").datepicker({
		    			dateFormat: 'yy-mm-dd',
		    			changeYear: true,
		    			changeMonth:true
		    		});$(".statesDropdown2").autocomplete({
	    				source: _states
	    			});
		    		$("#cibilBtn_div2").detach();
		    		$("#cibilDown_div2").detach();
	            }
	            else if(x == 2){
	            	if($('#add_content_wrap1 input').val() != ""){
			    		$("#add_content_wrap22").append(el2); 
			    		$("#add_content_wrap2").show();
			    		window.location.href = '#add_content_wrap2';
			    		$(".dateOfBirth3Cls").datepicker({
			    			dateFormat: 'yy-mm-dd',
			    			changeYear: true,
			    			changeMonth:true
			    		});$(".statesDropdown3").autocomplete({
		    				source: _states
		    			});$("#cibilBtn_div3").detach();
			    		$("#cibilDown_div3").detach();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }
	            else if(x == 3){
	            	if($('#add_content_wrap2 input').val() != ""){
			    		$("#add_content_wrap33").append(el3);
			    		 $("#add_content_wrap3").show();
			    		 window.location.href = '#add_content_wrap3';
			    		 $(".dateOfBirth4Cls").datepicker({
			    				dateFormat: 'yy-mm-dd',
			    				changeYear: true,
			    				changeMonth:true
			    			});$(".statesDropdown4").autocomplete({
			    				source: _states
			    			});$("#cibilBtn_div4").detach();
				    		$("#cibilDown_div4").detach();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }
	            else if(x == 4){
	            	if($('#add_content_wrap3 input').val() != ""){
			    		$("#add_content_wrap44").append(el4); 
			    		$("#add_content_wrap4").show();
			    		window.location.href = '#add_content_wrap4';
			    		$(".dateOfBirth5Cls").datepicker({
			    			dateFormat: 'yy-mm-dd',
			    			changeYear: true,
			    			changeMonth:true
			    		});$(".statesDropdown5").autocomplete({
		    				source: _states
		    			});$("#cibilBtn_div5").detach();
			    		$("#cibilDown_div5").detach();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }
	            else if(x == 5){
	            	if($('#add_content_wrap4 input').val() != ""){
			    		$("#add_content_wrap55").append(el5); 
			    		 $("#add_content_wrap5").show();
			    		 window.location.href = '#add_content_wrap5';
			    		 $(".dateOfBirth6Cls").datepicker({
			    				dateFormat: 'yy-mm-dd',
			    				changeYear: true,
			    				changeMonth:true
			    			});$(".statesDropdown6").autocomplete({
			    				source: _states
			    			});$("#cibilBtn_div6").detach();
				    		$("#cibilDown_div6").detach();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }			
	        }// end for  if(x < max)
	        else{alert("Sorry, you already added possible number of applicants.");}
	     return false;
	    });

//0000000000000000000000000000000000000000000000000000	
// SEARCH BY ID DROPDOWN 
$('#c_id').autocomplete({
	    source: function (request, response) {
	    	var searchById = $("#c_id").val();
	        $.getJSON("http://103.59.212.246:8080/upf-system/upf/clientInformation/searchId?searchString="+searchById, function (data) {
	            response($.map(data, function (value, key) {
	                return {
	                	label: value.id,
	                    value: value.id
	                };
	            }));
	        });
	    },
	    minLength: 2
	});

//SEARCH BY CLIENT NAME DROPDOWN
$('#c_n').autocomplete({
	    source: function (request, response) {
	    	var searchByName = $("#c_n").val();
	        $.getJSON("http://103.59.212.246:8080/upf-system/upf/clientInformation/searchCom?searchString="+searchByName, function (data) {
	            response($.map(data, function (value, key) {
	                return {
	                	label: value.companyName,
	                    value: value.companyName
	                };
	            }));
	        });
	    },
	    minLength: 3
	});

//SEARCH BY FIRST APLLICANT NAME DROPDOWN
$('#f_a_n').autocomplete({
	    source: function (request, response) {
	    	var	searchByAppName = $("#f_a_n").val();
	        $.getJSON("http://103.59.212.246:8080/upf-system/upf/clientInformation/searchAppName?searchString="+searchByAppName, function (data) {
	            response($.map(data, function (value, key) {
	                return {
	                	label: value.panNumber ,
	                    value: value.panNumber 
	                };
	            }));
	        });
	    },
	    minLength: 3
	});

	//STATE DROPDOWN
var _states = [ "Andra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
       "Chhattisgarh",
       "Goa",
       "Gujarat",
       "Haryana",
       "Himachal Pradesh",
       "Jammu and Kashmir",
       "Jharkhand",
       "Karnataka",
       "Kerala",
       "Madya Pradesh",
       "Maharashtra",
       "Manipur",
       "Meghalaya",
       "Mizoram",
       "Nagaland",
       "Bihar",
       "Orissa",
       "Punjab",
       "Rajasthan",
       "Sikkim",
       "Tamil Nadu",
       "Tripura",
       "Uttaranchal",
       "Uttar Pradesh",
       "West Bengal",
       "Andaman and Nicobar Islands",
       "Chandigarh",
       "Dadar and Nagar Haveli",
       "Daman and Diu",
       "Delhi",
       "Lakshadeep",
       "Pondicherry" ] ;
	$(".statesDropdown1").autocomplete({
		source: _states
	});$(".statesDropdown1_1").autocomplete({
		source: _states
	});

}); //$ end

(function($) {
	$.fn.progressInitialize = function() {
		return this
				.each(function() {
					var button = $(this), progress = 0;
					var options = $.extend({
						type : 'background-horizontal',
						loading : 'Loading..',
						finished : 'Done!'
					}, button.data());
					button.attr({
						'data-loading' : options.loading,
						'data-finished' : options.finished
					});

					var bar = $(
							'<span class="tz-bar ' + options.type + '">')
							.appendTo(button);

					button.on('progress',
							function(e, val, absolute, finish) {

								if (!button.hasClass('in-progress')) {

									bar.show();
									progress = 0;
									button.removeClass('finished')
											.addClass('in-progress')
								}

								if (absolute) {
									progress = val;
								} else {
									progress += val;
								}

								if (progress >= 100) {
									progress = 100;
								}

								if (finish) {

									button.removeClass('in-progress')
											.addClass('finished');

									bar.delay(500).fadeOut(function() {

										button.trigger('progress-finish');
										setProgress(0);
									});

								}

								setProgress(progress);
							});

					function setProgress(percentage) {
						bar
								.filter(
										'.background-horizontal,.background-bar')
								.width(percentage + '%');
						bar.filter('.background-vertical').height(
								percentage + '%');
					}

				});

	};

	$.fn.progressFinish = function() {
		return this.first().progressSet(100);
	};

	$.fn.progressIncrement = function(val) {

		val = val || 10;

		var button = this.first();

		button.trigger('progress', [ val ])

		return this;
	};

	$.fn.progressSet = function(val) {
		val = val || 10;

		var finish = false;
		if (val >= 100) {
			finish = true;
		}

		return this.first().trigger('progress', [ val, true, finish ]);
	};

	$.fn.progressTimed = function(seconds, cb) {

		var button = this.first(), bar = button.find('.tz-bar');

		if (button.is('.in-progress')) {
			return this;
		}

		bar.css('transition', seconds + 's linear');
		button.progressSet(99);

		window.setTimeout(function() {
			bar.css('transition', '');
			button.progressFinish();

			if ($.isFunction(cb)) {
				cb();
			}

		}, seconds * 1000);
	};
})(jQuery);

//GO TO SEARCH PAGE
function refreshPage() {
  /*  location.reload();*/
window.location.href = '/upf-system/upf/clientInformation/view';
}//end


// ************* end **************
