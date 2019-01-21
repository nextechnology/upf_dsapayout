/*$(document).ready(function() {

	    var max = 5;
	    var x = 0,m,o,h,a,n,b;    
	    var el1 = $('#add_content_wrap1').detach();
	    var el2 = $('#add_content_wrap2').detach();
	    var el3 = $('#add_content_wrap3').detach();
	    var el4 = $('#add_content_wrap4').detach();
	    var el5 = $('#add_content_wrap5').detach();
	    $("#btnAdd").click(function(e){
	         e.preventDefault();
	        if(x < max){
	        	x++;
	            if(x == 1){
		    		m = 1; $("#add_content_wrap11").append($('#add_content_wrap1').detach()); 
		    		$("#add_content_wrap1").show();
		    	  }
	            else if(x == 2){
	            	if(m == 1 && $('#add_content_wrap1 input').val() != ""){
			    		o = 1;$("#add_content_wrap22").append(el2); 
			    		$("#add_content_wrap2").show();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }
	            else if(x == 3){
	            	if(o == 1 && $('#add_content_wrap2 input').val() != ""){
			    		 h = 1;$("#add_content_wrap33").append(el3);
			    		 $("#add_content_wrap3").show();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }
	            else if(x == 4){
	            	if(h == 1 && $('#add_content_wrap3 input').val() != ""){
			    		a = 1;$("#add_content_wrap44").append(el4); 
			    		$("#add_content_wrap4").show();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }
	            else if(x == 5){
	            	if(a == 1 && $('#add_content_wrap4 input').val() != ""){
			    		 n = 1;$("#add_content_wrap55").append(el5); 
			    		 $("#add_content_wrap5").show();
	            	}else{alert("Please fill applicant");--x;}
	            	
	            }			
	        }// end for  if(x < max)
	        else{alert("Sorry, you already added possible number of applicants.");}
	     return false;
	    });
	   

	    $("#add_content_wrap1").on("click","#btnRemove1", function(e){
	        if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
	            e.preventDefault(); $("#add_content_wrap1").remove();
	        }
	    })
	    $("#add_content_wrap2").on("click","#btnRemove2", function(e){
	        if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
	            e.preventDefault(); $("#add_content_wrap2").remove();
	        }
	    })
	    $("#add_content_wrap3").on("click","#btnRemove3", function(e){
	        if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
	            e.preventDefault(); $("#add_content_wrap3").remove();
	        }
	    })
	    $("#add_content_wrap4").on("click","#btnRemove4", function(e){
	        if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
	            e.preventDefault(); $("#add_content_wrap4").remove();
	        }
	    })
	    $("#add_content_wrap5").on("click","#btnRemove5", function(e){
	        if (confirm("Do you wish to remove this applicant? This cannot be undone.")){
	            e.preventDefault(); $("#add_content_wrap5").remove();
	        }
	    })

});*/