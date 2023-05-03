function getParam(name) { 
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }

function nextavailfunc() {
   var lockdays = picker.options.lockDays
   var loopcount = 0
   var nextavail = dayjs();
   var tomnextavail = dayjs().add(1, 'day')
   var lckcount = picker.options.lockDays.length < 10 ? picker.options.lockDays.length : 10;
   if (lckcount > 0) {
      for (x = 0; x < lckcount; x++) {
         if (dayjs(lockdays[x].toJSDate()).isSame(nextavail, 'day') || disallowedarr.includes(nextavail.format('YYYY-MM-DD'))) {
            nextavail = nextavail.add(1, 'day')
            loopcount = loopcount + 1
         } else {
            break;
         }
      }
      tomnextavail = tomnextavail.add(loopcount, 'day')
      for (x = loopcount; x < lckcount; x++) {
         if (dayjs(lockdays[x].toJSDate()).isSame(tomnextavail, 'day') || disallowedarr.includes(tomnextavail.format('YYYY-MM-DD'))) {
            tomnextavail = tomnextavail.add(1, 'day')
         } else {
            break;
         }
      }
   }

   bothpicker.setDateRange(nextavail, tomnextavail)

   $('#end-time').val() == null ? $('#end-time').val($('#end-time option:first').val()) : ''
   $('#start-time').val($('#start-time option:first').val()).change()
}

function addparam() {
   var string = "";
   string = '?' + $('#booking-form').find('input,select, textarea').map(function () {
      if (this.id != 'both-date') {
         var key = encodeURIComponent((this.name || this.id).trim());
         if (key == 'age') {
            selval = document.getElementById("age-check").checked ? 25 : 23;
         } else {
            var selval = encodeURIComponent($(this).val());
         }
         return key ? key + '=' + selval : null;
      }
   }).get().join('&');
   return string;
}

function getunicode(icclass) { 
if(icclass == 'fad fa-chess-pawn') {  return ['&#xf443;' , false]  }
else if(icclass == 'far fa-level-up-alt') {  return ['&#xf3bf;' , false ]  }
else if(icclass == 'fab fa-autoprefixer') {  return ['&#xf41c;' , true ]   }
else if(icclass == 'fab fa-linux') {   return ['&#xf17c;' , true ]         }
else if(icclass == 'fas fa-radio') {    return ['&#xf8d7;' , false ]       }
else if(icclass == 'fas fa-steering-wheel') { return ['&#xf622;' , false ] }
else if(icclass == 'far fa-arrow-alt-from-left') { return ['&#xf347;' , false ] }
else if(icclass == 'far fa-arrow-alt-down') { return ['&#xf063;' , false ] }
else {   return ['' , false ]  }  
}

$( document ).ready(function() {
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
	    //$("#age").val("25");
		}
	else {
	$('#age-check').click()
	}
	console.log($('#start-date').val())	
	bothpicker.setDateRange( firstdate , lastdate  )
	//$('#both-date').length > 0 ?  $('#both-date').val( firstdate + " - " + lastdate ) : '';	
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
	
	
