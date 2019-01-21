var filterList;
$(document).ready(function(){
	/*	var cmdata={
			        "gkid": null,
			        "gklogindate": null,
			        "losid": 1001001000001,
			        "cmname": null,
			        "location": "Mumbai",
			        "loanamt": 2000000,
			        "allocated": null
	    		}
	*/

	http_call("/upf-system/upf/snapshot/getcamlist", 'GET').done(function(obj){
		if($.isEmptyObject(obj)){
			$('#camsTableBody').html('<tr align="center"><td colspan="8">NO DATA FOUND</td></tr>')
		}else{
			var count=0;
			var tblData = "";
			filterList = obj;
			$(obj).each(function(ke,va){
				if(va.loanamt != null){
					++count;
					tblData+=		`
						<tr id='row_${count}'>
						<td id='gkid_${count}'>${va.gkid}</td>
						<td id='gklogindate_${count}'>${va.gklogindate===null?'':va.gklogindate}</td>
						<td id='losid_${count}'>${va.losid===null?'':va.losid}</td>
						<td id='cmname_${count}'>${va.cmname===null?'':va.cmname}</td>
						<td id='location_${count}'>${va.location===null?'':va.location}</td>
						<td id='loanamt_${count}'>${va.loanamt===null?'':va.loanamt}</td>
						<td id='allocated_${count}'>${va.allocated===null?'unallocated':va.allocated}</td>
						<td id='status_${count}'>${va.status===null?'':va.status}</td>
					</tr>`
							;
				}
			});
			if(count == 0){
				$('#camsTableBody').html('<tr align="center"><td colspan="8">NO DATA FOUND</td></tr>')
			}else{
				$('#camsTableBody').html(tblData);
			}
		}
	});
});

function http_call(url,type,data){
	return $.ajax({
		url: url,
		type: type,
		data: data,
		dataType: 'json',
		contentType: "application/json; charset=utf-8"
	});
}
function sortTable(n) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("camsTableBody");
	  switching = true;
	  //Set the sorting direction to ascending:
	  dir = "asc"; 
	  /*Make a loop that will continue until
	  no switching has been done:*/
	  while (switching) {
	    //start by saying: no switching is done:
	    switching = false;
	    rows = table.getElementsByTagName("TR");
	    /*Loop through all table rows (except the
	    first, which contains table headers):*/
	    for (i = 0; i < (rows.length - 1); i++) {
	      //start by saying there should be no switching:
	      shouldSwitch = false;
	      /*Get the two elements you want to compare,
	      one from current row and one from the next:*/
	      x = rows[i].getElementsByTagName("TD")[n];
	      y = rows[i + 1].getElementsByTagName("TD")[n];
	      /*check if the two rows should switch place,
	      based on the direction, asc or desc:*/
	      if (dir == "asc") {
	        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
	          //if so, mark as a switch and break the loop:
	          shouldSwitch= true;
	          break;
	        }
	      } else if (dir == "desc") {
	        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
	          //if so, mark as a switch and break the loop:
	          shouldSwitch= true;
	          break;
	        }
	      }
	    }
	    if (shouldSwitch) {
	      /*If a switch has been marked, make the switch
	      and mark that a switch has been done:*/
	      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	      switching = true;
	      //Each time a switch is done, increase this count by 1:
	      switchcount ++;      
	    } else {
	      /*If no switching has been done AND the direction is "asc",
	      set the direction to "desc" and run the while loop again.*/
	      if (switchcount == 0 && dir == "asc") {
	        dir = "desc";
	        switching = true;
	      }
	    }
	  }
	}
function $_filter() {
	var count=0;
	var tblData = "";
	var i = 0;
	if($('#aloUnSlctId').val() == ""){
		$(filterList).each(function(ke,va){++i;
		if(va.loanamt != null){
			++count;
			tblData+=	`
					<tr id='row_${count}'>
						<td id='gkid_${count}'>${va.gkid}</td>
						<td id='gklogindate_${count}'>${va.gklogindate===null?'':va.gklogindate}</td>
						<td id='losid_${count}'>${va.losid===null?'':va.losid}</td>
						<td id='cmname_${count}'>${va.cmname===null?'':va.cmname}</td>
						<td id='location_${count}'>${va.location===null?'':va.location}</td>
						<td id='loanamt_${count}'>${va.loanamt===null?'':va.loanamt}</td>
						<td id='allocated_${count}'>${va.allocated===null?'unallocated':va.allocated}</td>
						<td id='status_${count}'>${va.status===null?'':va.status}</td>
					</tr>`
					;
		}
	});
	}else if($('#aloUnSlctId').val().toLowerCase() == "allocated" || $('#aloUnSlctId').val().toLowerCase() == "unallocated"){
		$(filterList).each(function(ke,va){++i;
		if(va.loanamt != null && va.allocated.toUpperCase() === $('#aloUnSlctId').val().toUpperCase()){
			++count;
			tblData+=	`
					<tr id='row_${count}'>
						<td id='gkid_${count}'>${va.gkid}</td>
						<td id='gklogindate_${count}'>${va.gklogindate===null?'':va.gklogindate}</td>
						<td id='losid_${count}'>${va.losid===null?'':va.losid}</td>
						<td id='cmname_${count}'>${va.cmname===null?'':va.cmname}</td>
						<td id='location_${count}'>${va.location===null?'':va.location}</td>
						<td id='loanamt_${count}'>${va.loanamt===null?'':va.loanamt}</td>
						<td id='allocated_${count}'>${va.allocated===null?'unallocated':va.allocated}</td>
						<td id='status_${count}'>${va.status===null?'':va.status}</td>
					</tr>`
					;
		}
	});
	}else {
		$(filterList).each(function(ke,va){++i;
		if(va.loanamt != null && va.status.toUpperCase() === $('#aloUnSlctId').val().toUpperCase()){
			++count;
			tblData+=	`
					<tr id='row_${count}'>
						<td id='gkid_${count}'>${va.gkid}</td>
						<td id='gklogindate_${count}'>${va.gklogindate===null?'':va.gklogindate}</td>
						<td id='losid_${count}'>${va.losid===null?'':va.losid}</td>
						<td id='cmname_${count}'>${va.cmname===null?'':va.cmname}</td>
						<td id='location_${count}'>${va.location===null?'':va.location}</td>
						<td id='loanamt_${count}'>${va.loanamt===null?'':va.loanamt}</td>
						<td id='allocated_${count}'>${va.allocated===null?'unallocated':va.allocated}</td>
						<td id='status_${count}'>${va.status===null?'':va.status}</td>
					</tr>`
					;
		}
	});
	}	
	if(count == 0){
		$('#camsTableBody').html('<tr align="center"><td colspan="8">NO DATA FOUND</td></tr>')
	}else{
		$('#camsTableBody').html(tblData);
	}
}