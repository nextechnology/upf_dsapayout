$(document).ready(function() {
	$(".secondQueryContainer").hide();
	$("#btnModelHidden").hide();
	
	$.getJSON("/upf-system/resources/reporting_tool/json/data.js", function(result) {
		$(result).each(function(v, k) {
			var _db = $("<option/>").attr("value", v).text(k.database);
			$("#selDataBase").append(_db);
		});
		
		var _database, _table, _table2, _column, _column2, $databaseValue,
			$tableValue, $columnValue, $operatorValue, $inputValue, $multSelColumnValue,
			$tableValue2, $columnValue2, $operatorValue2, $inputValue2, $multSelColumnValue2;
		//	DATABASE change
		$("#selDataBase").change(function(){  
			$("#selTable").empty().append($("<option/>").text("Select Table"));
			$("#selTable").prop( "selectedIndex", 0 );
			$("#selTable2").empty().append($("<option/>").text("Select Table"));
			$("#selTable2").prop( "selectedIndex", 0 );
			_database = $("#selDataBase").val();
			var $_database = result[_database].tables;
			$($_database).each(function(va, ke) {
				var _tableTemp = $("<option/>").attr("value", va).text(ke.tablename);
				$("#selTable").append(_tableTemp);
			});
			$($_database).each(function(va, ke) {
				var _tableTemp2 = $("<option/>").attr("value", va).text(ke.tablename);
				$("#selTable2").append(_tableTemp2);
			});
			
			//	FIRST row
			//	TABLE change
			$("#selTable").change(function(){
				$("#multSelColumn").empty();
				$("#selColumn").empty().append($("<option/>").text("Select Column"));
				$("#selColumn").prop( "selectedIndex", 0 );
				_table = $("#selTable").val();
				var $_table = result[_database].tables[_table].columns;
				$($_table).each(function(val, key) {
					var _columnTemp = $("<option/>").attr("value", key.type).text(key.name);
					$("#selColumn").append(_columnTemp);
				});
				$($_table).each(function(vall, keyy) {
					var $tableText = $("#selTable option:selected").text();
					var _columnMult = $("<option/>").attr("value", $tableText+"."+keyy.name).text(keyy.name);
					$("#multSelColumn").append(_columnMult);
				});
				//	COLUMN change
				$("#selColumn").change(function(){
					_column = $("#selColumn").val();
					$("#selOperator").empty().append($("<option/>").text("Select Operator"));
					$("#selOperator").prop( "selectedIndex", 0 );
					if(_column == "INTEGER"){
						$("#selOperator").append($("<option/>").attr("value", "=").text("="));
						$("#selOperator").append($("<option/>").attr("value", "!=").text("!="));
						$("#selOperator").append($("<option/>").attr("value", ">").text(">"));
						$("#selOperator").append($("<option/>").attr("value", ">=").text(">="));
						$("#selOperator").append($("<option/>").attr("value", "<").text("<"));
						$("#selOperator").append($("<option/>").attr("value", "<=").text("<="));
					}else if(_column == "STRING"){
						$("#selOperator").append($("<option/>").attr("value", "=").text("="));
						$("#selOperator").append($("<option/>").attr("value", "!=").text("!="));
					}
				});// end for CLUMN change
			});// end for TABLE change
			//ending FIRST row
					
			//SECOND row
				//	TABLE2 change
				$("#selTable2").change(function(){
					$("#multSelColumn2").empty();
					$("#selColumn2").empty().append($("<option/>").text("Select Column"));
					$("#selColumn2").prop( "selectedIndex", 0 );
					_table2 = $("#selTable2").val();
					var $_table2 = result[_database].tables[_table2].columns;
					$($_table2).each(function(val, key) {
						var _columnTemp2 = $("<option/>").attr("value", key.type).text(key.name);
						$("#selColumn2").append(_columnTemp2);
					});
					$($_table2).each(function(vall, keyy) {
						var $tableText2 = $("#selTable2 option:selected").text();
						var _columnMult2 = $("<option/>").attr("value", $tableText2+"."+keyy.name).text(keyy.name);
						$("#multSelColumn2").append(_columnMult2);
					});
					//	COLUMN2 change
					$("#selColumn2").change(function(){
						_column2 = $("#selColumn2").val();
						$("#selOperator2").empty().append($("<option/>").text("Select Operator"));
						$("#selOperator2").prop( "selectedIndex", 0 );
						if(_column2 == "INTEGER"){
							$("#selOperator2").append($("<option/>").attr("value", "=").text("="));
							$("#selOperator2").append($("<option/>").attr("value", "!=").text("!="));
							$("#selOperator2").append($("<option/>").attr("value", ">").text(">"));
							$("#selOperator2").append($("<option/>").attr("value", ">=").text(">="));
							$("#selOperator2").append($("<option/>").attr("value", "<").text("<"));
							$("#selOperator2").append($("<option/>").attr("value", "<=").text("<="));
						}else if(_column2 == "STRING"){
							$("#selOperator2").append($("<option/>").attr("value", "=").text("="));
							$("#selOperator2").append($("<option/>").attr("value", "!=").text("!="));
						}
					});// end for COLUMN2 change
				});// end for TABLE2 change
				// ending SECOND row
		});//end for DATABSE change
		
		// QUERY BUILING
		$("#btnSubmit").click(function(){
			$databaseValue 			= $("#selDataBase option:selected").text();
			$tableValue 			= $("#selTable option:selected").text();
			$columnValue 			= $("#selColumn option:selected").text();
			$operatorValue 			= $("#selOperator").val();
			$inputValue 			= $("#inputValue").val();
			$multSelColumnValue 	= $("#multSelColumn").val();
			
			$tableValue2			= $("#selTable2 option:selected").text();
			$columnValue2 			= $("#selColumn2 option:selected").text();
			$operatorValue2 		= $("#selOperator2").val();
			$inputValue2 			= $("#inputValue2").val();           
			$multSelColumnValue2 	= $("#multSelColumn2").val();	
			
			if($("#btnAdd").val() == "Add+"){
				if(_database){
					if(_table){
						if(_column){
							if(_column != "Select Column"){
								if($multSelColumnValue){
									if($operatorValue){
										if($operatorValue != "Select Operator"){
											if($inputValue){
												$("#selectQuery").text("SELECT "+$databaseValue+"."+$multSelColumnValue+"   FROM "+$databaseValue+"."+$tableValue+"   WHERE   "+$databaseValue+"."+$tableValue+"."+$columnValue+"  "+$operatorValue+"  "+$inputValue);
											}else{$("#alertMsg").text("Please enter a value or stirng");mv();}
										}else{$("#alertMsg").text("Please select operator");mv();}
									}else{$("#alertMsg").text("Please select an operator");mv();}
								}else{
									if($operatorValue){
										if($operatorValue != "Select Operator"){
											if($inputValue){
												if($("#btnAdd").val() == "Add+"){
													$("#selectQuery").text("SELECT   *   FROM "+$databaseValue+"."+$tableValue+"   WHERE   "+$databaseValue+"."+$tableValue+"."+$columnValue+"  "+$operatorValue+"  "+$inputValue);
												}else{$("#alertMsg").text("Please select all fields in second row");mv();}
											}else{$("#alertMsg").text("Please enter a value or stirng");mv();}
										}else{$("#alertMsg").text("Please select an operator");mv();}
									}else{$("#alertMsg").text("Please select an operator");mv();}}
							}else{$("#alertMsg").text("Pleasse select column");mv();}
						}else{
							if(_table != "Select Table"){
								if($multSelColumnValue){
									$("#selectQuery").text("SELECT "+$databaseValue+"."+$multSelColumnValue+"   FROM "+$databaseValue+"."+$tableValue);
								}else{$("#selectQuery").text("SELECT  *   FROM "+$databaseValue+"."+$tableValue);}
							}else{
								$("#selectQuery").text("");
								$("#alertMsg").text("Please select table");mv();}}
				}else{$("#alertMsg").text("Please select Table");mv();}
			}else{$("#alertMsg").text("Please select Database"); mv();}
			}else{
				if(!_column && !_column2){
					var _joinTemp = result[_database].tables[_table].joins;
					$(_joinTemp).each(function(val, key) {
						var _tableMatching = key.table;
						if(_tableMatching == $tableValue2){
							$("#selectQuery").text("SELECT *"+"	"+
									"FROM "+$databaseValue+"."+$tableValue+"	"+
									"INNER JOIN "+$databaseValue+"."+$tableValue2+"	"+
									"WHERE "+$databaseValue+"."+$tableValue+"."+key.leftkey+" = "+$databaseValue+"."+$tableValue2+"."+key.rightkey);
						}
					});
					if($tableValue == $tableValue2){
						$("#alertMsg").text("No Join allows on the same table"); mv();
					}
				}else if($tableValue && $columnValue && $operatorValue && $inputValue &&
						$tableValue2 && $columnValue2 && $operatorValue2 && $inputValue2){
					if($multSelColumnValue == null && $multSelColumnValue2 == null){
						$("#selectQuery").text("SELECT   *		"+
								"FROM "+$databaseValue+"."+$tableValue+"	"+
								"INNER JOIN "+$databaseValue+"."+$tableValue2+"	"+
								"WHERE "+$databaseValue+"."+$tableValue+"."+$columnValue+"	"+$operatorValue+"	"+$inputValue+"	"+
								"AND  "+$databaseValue+"."+$tableValue2+"."+$columnValue2+"	"+$operatorValue2+"	"+$inputValue2);
					}else if($multSelColumnValue != null && $multSelColumnValue2 == null){
						$("#selectQuery").text("SELECT "+$databaseValue+"."+$multSelColumnValue+"	"+
								"FROM "+$databaseValue+"."+$tableValue+"	"+
								"INNER JOIN "+$databaseValue+"."+$tableValue2+"	"+
								"WHERE "+$databaseValue+"."+$tableValue+"."+$columnValue+"	"+$operatorValue+"	"+$inputValue+"	"+
								"AND  "+$databaseValue+"."+$tableValue2+"."+$columnValue2+"	"+$operatorValue2+"	"+$inputValue2);
					}else if($multSelColumnValue == null && $multSelColumnValue2 != null){
						$("#selectQuery").text("SELECT "+$databaseValue+"."+$multSelColumnValue2+"   "+
								"FROM "+$databaseValue+"."+$tableValue+"	"+
								"INNER JOIN "+$databaseValue+"."+$tableValue2+"	"+
								"WHERE "+$databaseValue+"."+$tableValue+"."+$columnValue+"	"+$operatorValue+"	"+$inputValue+"	"+
								"AND  "+$databaseValue+"."+$tableValue2+"."+$columnValue2+"	"+$operatorValue2+"	"+$inputValue2);
					}else if($multSelColumnValue && $multSelColumnValue2){
						$("#selectQuery").text("SELECT "+$databaseValue+"."+$multSelColumnValue+","+$databaseValue+"."+$multSelColumnValue2+"	"+
								"FROM "+$databaseValue+"."+$tableValue+"	"+
								"INNER JOIN "+$databaseValue+"."+$tableValue2+"	"+
								"WHERE "+$databaseValue+"."+$tableValue+"."+$columnValue+"	"+$operatorValue+"	"+$inputValue+"	"+
								"AND  "+$databaseValue+"."+$tableValue2+"."+$columnValue2+"	"+$operatorValue2+"	"+$inputValue2);}
				}else{$("#alertMsg").text("Please fill all required fields.");mv();}}
			
			//==========================
			// QUERY PASSING TO BACKEND
			//==========================
			var finalQuery = $("#selectQuery").text();
			$.getJSON("/upf-system/upf/clientdetails/getQuery?searchString="+finalQuery,function(result){
				
			});
			
			//==========================
			
		});//	end for QUERY BUILDING
	}); // end for $getJSON
	
	// ADDING SECOND ROW and REMOVING
	$("#btnAdd").click(function(){
		$("#selectQuery").text("");
		if($(this).val() == "Add+"){
			$(".secondQueryContainer").show();
			$(this).val('Remove');
		}else{
			if(confirm("Do you want to remove second row?")){
				$(".secondQueryContainer").hide();
				$(this).val('Add+');
				return true;
			}else{return false;}	
		}
	});//end for SECOND ROW and REMOVING
	
});//	end for $(document).ready

function mv(){$("#btnModelHidden").click();}