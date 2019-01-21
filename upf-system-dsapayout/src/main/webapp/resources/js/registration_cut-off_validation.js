$(document).ready(function() {

	// HTML5 validation, Cut-Off Validation & POP-UP

	////////////////////////////////////////////////////////////
	//VALIDATION CHECK INSIDE ACCORDION PANELS
	$("#btnSubmit").click(function(event) {
		if (!$('#clientInfoForm')[0].checkValidity()) {
			$("#clientInfoForm input[required='required']").each(function() {
				if ($(this).val() == "") {
					$(".panel-collapse.in").removeClass("in");
					$(this).closest(".panel-collapse").addClass("in").css("height","auto");
					return true;
				}
			});
        }/*else{
        	window.location.href = "#pop_up";
        	alert("validation checked!")
        	nonCibil_validation();
    		
    		
        	if (confirm("Do you wish to submit this details?")) {
        		alert("selected yes!");
        		return true;
        	} else {alert("selected no!");
    		return false;
        	}
        	}*/
	});
}); //end

function nonCibil_validation() {

	//______________________ variables

	var _dummy, _ato, _afa, _ebd, _aibd, _m1, _m2, _m3, _nob, _ros, _bos, _bv, _gl, _cf, _adbb, _cs, _rejected = "Sorry, Application cannot be processed. ", _accepted = "Congratulations, Application submitted successfully.";

	// _______________________ getting and storing values

	_ato = document.getElementById("a_t_o").value; // Annual Turnover
	_afa = document.getElementById("a_f_a").value; // Audited File Available?
	_ebd = document.getElementById("e_b_d").value; // EMI Bounce Days
	_m1 = document.getElementById("m_1").value; // month-1
	_m2 = document.getElementById("m_2").value; // month-2
	_m3 = document.getElementById("m_3").value; // month-3
	_aibd = parseInt(_m1) + parseInt(_m2) + parseInt(_m3); // Average Inward Bounce days
	_nob = document.getElementById("n_o_b").value; // Nature of Business
	_ros = document.getElementById("r_o_s").value; // Residence Ownership Status
	_bos = document.getElementById("b_o_s").value; // Business Ownership Status
	_bv = document.getElementById("b_v").value; // Business Vintage
	_gl = document.getElementById("g_l").value; // Geography Limit
	_cf = document.getElementById("c_f").value; // Credit Frequency
	_adbb = document.getElementById("adbb").value; // ADBB
	_cs = document.getElementById("c_s").value; // Card Sales

	//________________________ CIBIL RULES

	if (_ato < 2000000) {
		_dummy = _rejected;
	} // Turn Over < 20Lakhs
	else if (_ebd > 1) {
		_dummy = _rejected;
	} // EMI Bounce Days > 1
	else if (_aibd > 3) {
		_dummy = _rejected;
	} // Average Inward Bounce Days (3 Months) > 3
	else if (_nob == 4 && _ato < 50000000) {
		_dummy = _rejected;
	} // Non-Retail   &   T.O. < 5 Cr
	else if (_nob == 4 && _ato < 50000000 && _afa == 2) {
		_dummy = _rejected;
	} // Non-Retail   &   T.O. > 5 Cr     &   Audited File Available? No
	else if (_ros == 2 && _bos == 2 && _gl == 2) {
		_dummy = _rejected;
	} // Both Rented  &   OGL
	else if (_nob == 6 && _gl == 1 && _ros == 2 && _bos == 2 && _bv != 3) {
		_dummy = _rejected;
	} // Retail & GL & Both Rented & Business Vintage < 3 Yrs
	else if (_nob == 6 && _gl == 1 && _bv == 1) {
		_dummy = _rejected;
	} // Retail & GL &  Business Vintage < 8 months
	else if (_nob == 6 && _gl == 2 && _bv != 3) {
		_dummy = _rejected;
	} // Retail & OGL &  Business Vintage < 2 Yrs
	else if (_nob == 6 && _cf < 13) {
		_dummy = _rejected;
	} // Retail & Credit Frequency <= 13 Credit Days
	else if (_adbb < 10000 && _cs < 100000) {
		_dummy = _rejected;
	} // ADBB < 10k   &   Card Sales < 1L
	else {
		_dummy = _accepted;
	}

	//________________________ output (result)

	if (_dummy == _rejected) {
		document.getElementById("confirmation_red").innerHTML = _dummy;
	} else {
		document.getElementById("confirmation_green").innerHTML = _dummy;
	}
} // end