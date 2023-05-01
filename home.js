$( document ).ready(function() {
	function getParam(name) { 
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }
	//Webflow.push(function() {
	if (window.location.href.indexOf("start-date") > -1) {
	// Auto-populate form fields based on query string
	 $('input:text, input[type=plain], select[name=start-time]').each(function() {
	    /// take the param and make uppercase from (this.id);
	    var paramValue = getParam(this.id).replace(/\b[a-z]/g, function(txtVal) {
	    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
			});  // end make each word uppercase and remove %20
			if(this.value == "" && paramValue != "") this.value = paramValue;
	     start = getParam("start-time").replace(/\b[a-z]/g, function(txtVal) {
	    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
			}); 
	    // end make each word uppercase and remove %20
	    $("#start-time").val(start);
	     end = getParam("end-time").replace(/\b[a-z]/g, function(txtVal) {
	    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
			});  // end make each word uppercase and remove %20
	    $("#end-time").val(end);
	      firstdate = getParam("start-date").replace(/\b[a-z]/g, function(txtVal) {
	    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
			});
	      lastdate = getParam("end-date").replace(/\b[a-z]/g, function(txtVal) {
	    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
			});
	    age = getParam("age").replace(/\b[a-z]/g, function(txtVal) {
	    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
			});
	  });     	
	    if (age == 'On' || age == 25) {
	    $("#age").val("25");
		} 
	console.log($('#start-date').val())	
	$('#both-date').length > 0 ?  $('#both-date').val($('#start-date').val() + " - " + $('#end-date').val()) : '';	
	}

	    else{ var today = dayjs().format('DD/MM/YYYY'); 
	    var tomorrow = dayjs().add(1, 'day').format('DD/MM/YYYY');
	      var daytomorrow = dayjs().add(2, 'day').format('DD/MM/YYYY');
	 var tod = new Date();
	var tom = new Date(tod.getTime() + (24 * 60 * 60 * 1000));
	var daytom = new Date(tom.getTime() + (24 * 60 * 60 * 1000)); 
	var strt = $('#start-time :selected').val();
	  var endt = $('#end-time :selected').val();
	      $("#age").val("25");
	  age = $('#age :selected').val() == '25' ? 'On' : 'off';
	     console.log("sec make call");   
	    } 
});
	
	
