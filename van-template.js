
function gtagaddtocart(data) {
var data = data.data;	
window.dataLayer = window.dataLayer || [];
var items = [];
items.push({ 
"item_name": data.selected_vehicle_class.vehicle_class.label,
"price" : data.selected_vehicle_class.price.base_price_with_taxes.amount,
"quantity" : data.selected_vehicle_class.price.total_days
})
data.selected_additional_charges.forEach((singval) => { 
	items.push({
	"item_name" : singval.label,
	"price" : singval.total_price_with_taxes.amount,
	"quantity" : singval.selected_quantity
	})	
})	
	window.dataLayer.push({
	'event': 'add_to_cart',
	'value' : data.total.total_price.amount,	
	'currency' : data.total.total_price.currency,	
	'items': items
	});
	
console.log({
	'event': 'add_to_cart',
	'value' : data.total.total_price.amount,	
	'currency' : data.total.total_price.currency,	
	'items': items
	})	
}

function gtagwishlist(data) {
var data = data.data;		
 window.dataLayer = window.dataLayer || [];
var items = [];
items.push({ 
"item_name": data.selected_vehicle_class.vehicle_class.label,
"price" : data.selected_vehicle_class.price.base_price_with_taxes.amount,
"quantity" : data.selected_vehicle_class.price.total_days
})	
data.selected_additional_charges.forEach((singval) => { 
	items.push({
	"item_name" : singval.label,
	"price" : singval.total_price_with_taxes.amount,
	"quantity" : singval.selected_quantity
	})	
})		
window.dataLayer.push({
'event': 'add_to_wishlist',
"value" : data.reservation.total_price.amount,
"currency" : data.reservation.total_price.currency,	
'items': items
});	

console.log({
'event': 'add_to_wishlist',
"value" : data.reservation.total_price.amount,
"currency" : data.reservation.total_price.currency,	
'items': items
})		
  }

function gtagpurchase(data,ORDER_ID) {
	var data = data.data;		
	window.dataLayer = window.dataLayer || [];
	var items = [];
	items.push({ 
	"item_name": data.selected_vehicle_class.vehicle_class.label,
	"price" : data.selected_vehicle_class.price.base_price_with_taxes.amount,
	"quantity" : data.selected_vehicle_class.price.total_days
	})	
	data.selected_additional_charges.forEach((singval) => { 
	items.push({
	"item_name" : singval.label,
	"price" : singval.total_price_with_taxes.amount,
	"quantity" : singval.selected_quantity
	})	
	})		
	window.dataLayer.push({
	'event': 'purchase',
	"transaction_id" : ORDER_ID,
	"value" : data.reservation.total_price.amount,
	"tax" : data.applicable_taxes.total_amount.amount,
	"currency" : data.reservation.total_price.currency,
	"coupon" : data.applicable_discounts.name == undefined ? '' : data.applicable_discounts.name
	});	
console.log({
	'event': 'purchase',
	"transaction_id" : ORDER_ID,
	"value" : data.reservation.total_price.amount,
	"tax" : data.applicable_taxes.total_amount.amount,
	"currency" : data.reservation.total_price.currency,
	"coupon" : data.applicable_discounts.name == undefined ? '' : data.applicable_discounts.name
	})	
}

	


$(document).ready(function () {
var extra = $('#Extra-Driver');
            if (extra.val() === '0') {
                alert("Please select an item from the list and then proceed!");
                return false;
            }
            else return;
});

$crisp.push(['do', 'chat:hide']);
//$crisp.push(["on", "session:loaded", function() {
$crisp.push(["on", "session:loaded", function() {
$('chat').on('click', function(){
window.$crisp.push(["do", "chat:open"]);
alert('red');
});
}])
$crisp.push(["on", "chat:closed", function() {
    window.$crisp.push(["do", "chat:hide"]);
    window.$crisp.push(["off", "session:loaded"]);
}])

window.onload = function() {
        var anchors = document.getElementsByTagName('*');
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            anchor.onclick = function() {
                code = this.getAttribute('whenClicked');
                eval(code);            }    }  }
// configures fetchify
window.cc_c2a = new clickToAddress({
    accessToken: 'a2263-bd8cf-4c581-0616f', // Replace this with your access token
    dom: {
        search:     'Address', // 'search_field' is the name of the search box element
        line_1:     'addr_line1',
        line_2:     'addr_line2',
        company:    'company',
        town:       'addr_town',
        postcode:   'addr_postcode',
        county:     'addr_county',
        country:    'addr_country'
    },
    domMode: 'name', // Use names to find form elements
    texts: {
        default_placeholder: 'Start with your post code or street name',
    },
    //gfxMode: 2,
    showlogo: false,
    countrySelector: false,
    getIpLocation: false,
    //configures search element to automatically update upon selection
		onResultSelected: function (c2a, elements, address) {
		var title = [address.postal_code, address.company_name, address.line_1, address.line_2, address.locality].filter(Boolean).join(', ');
		document.getElementById('Address').value = title;
		}
});

window.cc_c2a.attach({
        search:     'Primary-Driver-Address', // 'search_field' is the name of the search box element
        line_1:     'Primary-Driver-addr_line1',
        line_2:     'Primary-Driver-addr_line2',
        company:    'Primary-Driver-company',
        town:       'Primary-Driver-addr_town',
        postcode:   'Primary-Driver-addr_postcode',
        county:     'Primary-Driver-addr_county',
        country:    'Primary-Driver-addr_country'
},
{
	onResultSelected: function (c2a, elements, address) {
		var title = [address.postal_code, address.company_name, address.line_1, address.line_2, address.locality].filter(Boolean).join(', ');
		document.getElementById('Primary-Driver-Address').value = title;
		}  
});

window.cc_c2a.addEmailVerify({
	email: '#email',
	allow_high_risk: false
});

window.cc_c2a.addEmailVerify({
	email: '#primary-driver-email',
	allow_high_risk: false
});

// change background colour of dropdown
$('select').on('change', function(){
    var $this = $(this);
    if (!$this.val()) {
        $this.removeClass('noValue');
    } else {
        $this.addClass('noValue');
    }
});
// Configure the dates and times to dynamically update

//code removed
/*
var Webflow = Webflow || [];
Webflow.push(function () {
  new AWF.Logic({logicList: [{conditions: [{selector: '#Business_Checkbox', operator: 'equal', value: 'false'}], operator: 'and', actions: [{selector: '#Company-Name', action: 'hide', clear: false}, {selector: '#Website', action: 'hide', clear: false}]}, {conditions: [{selector: '#Business_Checkbox', operator: 'equal', value: 'true'}], operator: 'and', actions: [{selector: '#Website', action: 'show', clear: false}, {selector: '#Company-Name', action: 'show', clear: false}, {selector: '#Company-Name', action: 'require', clear: false}]}, {conditions: [{selector: '#First-Name', operator: 'filled'}, {selector: '#Last-Name', operator: 'filled'}], operator: 'and', actions: [{selector: '#Primary', action: 'show', clear: false}]}, {conditions: [{selector: '#Primary-Driver-Checkbox', operator: 'equal', value: 'false'}], operator: 'and', actions: [{selector: '#Primary-Driver', action: 'show', clear: false}]}, {conditions: [{selector: '#Primary-Driver-Checkbox', operator: 'equal', value: 'true'}], operator: 'and', actions: [{selector: '#Primary-Driver', action: 'hide', clear: false}]}], submitHiddenInputs: false, checkConditionsOnLoad: false});
});
*/

var addit_resp;
var coup_amo = 0;
function additionalpostcall()
{
$('#extra-text').hide();
$.ajax({
    type: "POST",
    url: "https://hirefleet-328113.nw.r.appspot.com/api/additionalcharges-post",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({
	    pick_up_date: $('#start-date').val(),
pick_up_time: $('#start-time :selected').val(),
return_date : $('#end-date').val(),
return_time : $('#end-time :selected').val(),
pick_up_location : 2,
return_location : 2,
brand_id : 1,
vehicle_class_id : $('#class-id').text(),
additional_charges : 1,
coupon_code : ""	    
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){
	    console.log("additional-post-res")
		console.log(data);
	    var data = data.data;
addit_resp = data.data;	    
young_driver_cost = Number(data.selected_additional_charges[0].base_price_with_taxes.amount);   	    
 var totprice = data.selected_vehicle_class.price.base_price_with_taxes.amount;
 var totprice = data.selected_vehicle_class.price.details[0].total_price_with_taxes.amount
	    totprice = parseFloat(totprice).toFixed(2)	    
$('#subtotal').text("£"+totprice);
$('#subtotal-mobile').text("£"+totprice);
totprice = ($('#age-range').val() == '23') ? Number(totprice) + young_driver_cost : totprice;
//adding extras total if selected
var exttot = 0;
for(let x=0; x<addarr.length; x++)
  { 
     if(addarr[x].quan > 0) {
         exttot = exttot + addarr[x].quan * addarr[x].price
     } 
  }	
 exttot = exttot * 1.000001;	    	    
totprice = parseFloat(totprice) + parseFloat(exttot);
totprice = (totprice).toFixed(2)	    
$('#total-price').text("£"+totprice);
$('#total-price-mobile').text("£"+totprice);
$('#hidd-total-price').text("£"+totprice);
$('#inclusive-miles').text(data.selected_vehicle_class.distance_limits.distance_allowed);
$('#inclusive-miles-mobile').text(data.selected_vehicle_class.distance_limits.distance_allowed);
$('#security_deposit_excess').text(data.total.security_deposit_excess.amount_for_display);
$('#security_deposit').text(data.total.security_deposit.amount_for_display);
//$('#mileage-price').text("£" + parseFloat(data.selected_vehicle_class.distance_limits.distance_extra_price_with_tax.amount).toFixed(2));
//$('#mileage-price-mobile').text("£" + parseFloat(data.selected_vehicle_class.distance_limits.distance_extra_price_with_tax.amount).toFixed(2));
var dayscount = data.selected_vehicle_class.price.total_days;
dayscount = dayscount > 1  ? dayscount + " days hire" : dayscount + " day hire";	
$('#duration').text(dayscount);
$('#duration-mobile').text(dayscount);
	   $('#discount').val().length  > 0 ? appdisc(data) : '';
    },
});
}	

function appdisc(resdata) {
    if(resdata.length == 0 || resdata.applicable_discounts.length == 0) {
    $('#discount').css('color','red')
    }
        else {
	console.log('dic applied')	
		 $('#discount').css('color','#89d12b')
    $('#total-discount').show()
    //$('#discount_box').show()
   $('#discount_box').css('display','flex')		
    var discamo = (Number(resdata.applicable_discounts[0].discounted_amount.amount) *  1.2).toFixed(2);
  coup_amo = discamo;
  $('#total-discount').text('£'+ discamo) 
   var totpr = $('#total-price').text();
   totpr = (Number(totpr.slice(1)) - discamo).toFixed(2);
   $('#total-price').text('£' + totpr)
   $('#total-price-mobile').text('£' + totpr)
   $('#hidd-total-price').text('£' + totpr)
       $("#remov_disc").show(); 
    $("#apply-discount").hide();
   }
}
$("#remov_disc").click(function() {
$('#discount').val('')
    $('#total-discount').hide()
    $('#discount_box').hide()
    $('#discount').css('color','black')
    $("#remov_disc").hide(); 
    $("#apply-discount").show();
    var totpr = $('#total-price').text();
   totpr = Number(totpr.slice(1)) + Number(coup_amo);
   totpr = totpr.toFixed(2);
   $('#total-price').text('£' + totpr)
   $('#total-price-mobile').text('£' + totpr)
   $('#hidd-total-price').text('£' + totpr)
      coup_amo = 0;
  addparam();	
});

$("#apply-discount").click(function(e) {
    e.preventDefault();	
additionalpostcall();
});

	
$( document ).ready(function() {
	
var picker;	
var vanavailable = false;
var dobpicker;
var primdobpicker;	
	
        // after the page elements are all loaded, then run the script
        // Set each input field with unique ID # to a value
        $("#Rental-Type").val('daily');
        $("#Customer-Type").val('individual');
        $("#Pick-Up-Location").val('hirefleet');
        });


$('input[type=radio]').on('change', function() {
switch ($(this).val()) {
case 'New Driver':
$('#Primary-Driver').css('display','block')
break;
case 'As Above':
$('#Primary-Driver').css('display','none')
break;      
case 'Personal': 
//$('#Cardholder-Details').css('display','block')
//$('#Personal-Business').css('margin-bottom','-28px')
//$('#Additional-Info').css('display','block')
$('#Company-Name').css('display','none')
//$('#Submit').css('display','block')
$('#Website').css('display','none')
break; 
case 'Business': 
$('#Company-Name').css('display','block') 
$('#Website').css('display','block') 
//$('#Cardholder-Details').css('display','block')
//$('#Personal-Business').css('margin-bottom','-28px')
//$('#Submit').css('display','block')
//$('#Additional-Info').css('display','block') 
break;
}
});


var young_driver_cost = 35;
fieldschange("true",'not-allowed')
var emailcount = 0;
/*
setTimeout(function()  {  
    if (window.location.href.indexOf("age") > -1) {   
$('#age-range').val(getParam('age')).change();
    }	
}, 4000);
*/
function agechecked() {  
    if (window.location.href.indexOf("age") > -1) {   
$('#age-range').val(getParam('age')).change();
    }	
}

var observer;
function ccvalidation() {
	firebase.auth().onAuthStateChanged(user => {
	if(user == null)
	{

	fieldschange("true",'not-allowed')
	var emailcount = 0;
	var elemToObserve = document.getElementById('cc_validate_box');
	var prevClassState = elemToObserve.classList.contains('cc-validate-ok');
	 observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
	if(mutation.attributeName == "class"){
	var currentClassState = mutation.target.classList.contains('cc-validate-ok');
	if(prevClassState !== currentClassState) {
	prevClassState = currentClassState;
	if(currentClassState) {
	console.log("class added!");
	checkuserexist();
	var highlight = document.getElementById("email");
        highlight.classList.remove("highlight");
	}
	else {
	console.log("class removed!");
	$('#login-alert').css('display','none');
	fieldschange(true,'not-allowed');
	}
	}
	}
	});
	});
	observer.observe(elemToObserve, {attributes: true});

	function checkuserexist() {
	firebase.auth().signInWithEmailAndPassword($('#email').val(),'1111111').then(res => {
	}).catch(error => {
	console.log(error)
	if(error.message == 'The password is invalid or the user does not have a password.' || error.code == 'auth/too-many-requests') {
	$('#login-alert').css('display','flex');
	$('#username').val($('#email').val());
	fieldschange("true",'not-allowed')
	}
	else {
	fieldschange(false,'pointer');
        $('#Personal-Business').css('display','flex')
	$('#Cardholder-Details').css('display','block')
	$('#Submit').css('margin-top','20px')
	$('#Additional-Info').css('display','block') 
	}
	});
	}

	}
	else {
	//console.log("disconnect")
	$('#login-alert').css('display','none');
	$('#Cardholder-Details').css('display','block')
		$("#email").css("boxShadow", "none");
	$('#Submit').css('margin-top','20px')
	$('#Additional-Info').css('display','block') 
	$('#phone').attr("disabled",false);
	$('#Address').attr("disabled",false);
	$('#Primary-Driver-Checkbox').attr("disabled",false); 
	 $('[for=Personal]').css('cursor','not-allowed') 
 $('[for=Business]').css('cursor','not-allowed')
		$('#Personal-Business').css('display','flex')
	//observer.disconnect();
	}
	});
	}

function fieldschange(enable,cursor) {
$('#First-Name').attr("disabled",enable);    
$('#Last-Name').attr("disabled",enable);
$('#Date-Of-Birth').attr("disabled",enable);
$('#Date-Of-Birth').css('cursor',cursor);    
$('#age .w-checkbox-input').css('cursor', cursor)    
$('[for=Personal]').css('cursor',cursor) 
$('#Personal').attr("disabled",enable)
$('[for=Business]').css('cursor',cursor) 
$('#Business').attr("disabled",enable)	
}

// if the time is before 10am, then set the start time to the next 15 mins
var today = new Date().getHours();
if (today >= 8 && today <= 10) {
   function time_format(d) {
    hours = format_two_digits(d.getHours());
    minutes = format_two_digits(d.getMinutes());
    seconds = format_two_digits(d.getSeconds());
    return hours + ":" + minutes;
}

function format_two_digits(n) {
    return n < 10 ? '0' + n : n;
}
const roundTo = roundTo => x => Math.round(x / roundTo) * roundTo;
const roundUpTo = roundTo => x => Math.ceil(x / roundTo) * roundTo;
const roundUpTo15Minutes = roundUpTo(1000 * 60 * 15);
const now = new Date();
const msUp = roundUpTo15Minutes(now);
var bc = new Date(msUp);
var formatted_time = time_format(bc);
// Set current time rounded to 15 minutes
//$("#start-time").val(formatted_time);
} else {

}
// auto populate form from url parameter
function getParam(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }
Webflow.push(function() {

	if(window.location.href.indexOf("#age-range") == -1) {
	$('#age-range').val(25);
	}
var maxd = dayjs().add(90, 'day').format('MM/DD/YYYY'); //set the max date to 90 days	
var time = new Date().getHours();
if (window.location.href.indexOf("start-date") > -1) {
//if (time >= 10){
//var todays = dayjs().add(1, 'day').format('MM/DD/YYYY'); //set the start / end date to today
//}
//else{
//var todays = dayjs().format('MM/DD/YYYY'); //set the start / end date to today
//}
	console.log("param code works");
// Auto-populate form fields based on query string
 $('input:text, input[type=plain], select[name=start-time]').each(function() {
    /// take the param and make uppercase from (this.id);
    var paramValue = getParam(this.id).replace(/\b[a-z]/g, function(txtVal) {
    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
		});  // end make each word uppercase and remove %20
		if(this.value == "" && paramValue != "") this.value = paramValue;
    var start = getParam("start-time").replace(/\b[a-z]/g, function(txtVal) {
    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
		});  // end make each word uppercase and remove %20
    $("#start-time").val(start);
    var end = getParam("end-time").replace(/\b[a-z]/g, function(txtVal) {
    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
		});  // end make each word uppercase and remove %20
    $("#end-time").val(end);
    var agerange = getParam("age").replace(/\b[a-z]/g, function(txtVal) {
    return txtVal.toUpperCase().replace(/%20/g, " "); // replace %20 with real space
		});  // end make each word uppercase and remove %20
 //   if (window.location.href.indexOf("age") > -1) {    
//	    $("#age-range").val(agerange);
//	}       
 });
    }
// if the time is after 10am then set the pickup day to tomorrow
    else if (time >= 10){
var today = dayjs().add(1, 'day').format('DD/MM/YYYY'); //set the start / end date to today
//var todays = dayjs().add(1, 'day').format('MM/DD/YYYY'); //set the start / end date to today
var tomorrow = dayjs().add(2, 'day').format('DD/MM/YYYY'); } //set the start /
    else{ 
var today = dayjs().format('DD/MM/YYYY'); //set the start / end date to today
//var todays = dayjs().format('MM/DD/YYYY'); //set the start / end date to today
var tomorrow = dayjs().add(1, 'day').format('DD/MM/YYYY'); } //set the start / end date to today
picker = new Litepicker({
				element: document.getElementById('start-date'),
  			elementEnd: document.getElementById('end-date'),
  			singleMode: false,
  			format: 'DD-MM-YYYY',
  			minDate: dayjs().format('MM/DD/YYYY'),
  			plugins: ['mobilefriendly'],
  			//allowRepick: true,   
	                maxDate: maxd,
        startDate: today,
        endDate: tomorrow,
// shows one day less
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  },
setup: (picker) => {
  picker.on('selected', (date1, date2) => {
 if($('#start-time').val() != null && $('#end-time').val() != null) { 
console.log('make call without time')	 
	  setTimeout( function() {	  
additionalpostcall()
//$('.extra-js-accordion-body').empty();
$('#total-price').text("---")
$('#total-price-mobile').text("---")
$('#subtotal').text("---");	  
$('#subtotal-mobile').text("---");
makecall(date1.toDateString(),date2.toDateString());
window.history.replaceState(null, null, addparam());		  
//postadditional();
	   }, 300);
 }	 
  });	
	},
})



dobpicker = new Litepicker({
				element: document.getElementById('Date-Of-Birth'),
        dropdowns: {
		minYear: new Date().getFullYear() - 76,
    maxYear: new Date().getFullYear() - 23,
    months: true,
    years: true
  },
  			//singleMode: true,
  			format: 'DD-MM-YYYY',
  			maxDate: dayjs().subtract(23, 'year').format('MM/DD/YYYY'),
  			plugins: ['mobilefriendly'],
	setup: (dobpicker) => {
	dobpicker.on('selected', (date1) => {
console.log(date1)		
$('#age-range').attr("disabled", true);		
dayjs.extend(dayjsPluginUTC.default)	
	let dob = new Date(date1.dateInstance);
	dob = dayjs(dob).format();	
let compyear = dayjs.utc().subtract(25, 'year').format();					
//let primcheck = $('#Primary-Driver-Checkbox').is(":checked");	
let primcheck = document.querySelector( 'input[name="Primary-Driver-Selection"]:checked').value == 'As Above'		
		if(dob >= compyear && $('#young').length != 1 && primcheck) {
$('#age-range').val('23').change(); 
}	
else if(dob < compyear && $('#young').length != 0 && primcheck)
{
$('#age-range').val('25').change()	
}	
});
	},
})
	
	
primdobpicker = new Litepicker({
				element: document.getElementById('Primary-Driver-Date-Of-Birth'),
        dropdowns: {
		minYear: new Date().getFullYear() - 76,
    maxYear: new Date().getFullYear() - 23,
    months: true,
    years: true
  },
  			//singleMode: true,
  			format: 'DD-MM-YYYY',
  			maxDate: dayjs().subtract(23, 'year').format('MM/DD/YYYY'),
  			plugins: ['mobilefriendly'],
	setup: (primdobpicker) => {
	primdobpicker.on('selected', (date1) => {
$('#age-range').attr("disabled", true);			
dayjs.extend(dayjsPluginUTC.default);
	let dob = new Date(date1.dateInstance);
	dob = dayjs(dob).format();	
let compyear = dayjs.utc().subtract(25, 'year').format();						
//let primcheck = $('#Primary-Driver-Checkbox').is(":checked");
let primcheck = document.querySelector( 'input[name="Primary-Driver-Selection"]:checked').value == 'As Above'		
if(dob >= compyear && $('#young').length != 1 && !primcheck) {
$('#age-range').val('23').change(); 
}	
else if(dob < compyear && $('#young').length != 0 && !primcheck)
{
$('#age-range').val('25').change()	
}	
});
	},	
	
})

	
var additionalcount = 0;
$('#start-time').change(function() {
additionalpostcall()
console.log(additionalcount == 0 )	
additionalcount == 0 ?	getsinglevan() : ''
additionalcount = additionalcount + 1	
//$('.summ-div-child').empty();	
//$('.extra-js-accordion-body').empty();
$('#total-price').text("---")
$('#subtotal').text("---");
$('#total-price-mobile').text("---")
$('#subtotal-mobile').text("---");
makecall('','');	
});

$('#end-time').change(function() {
additionalpostcall()
//$('.summ-div-child').empty();
//$('.extra-js-accordion-body').empty();
$('#total-price').text("---")
$('#subtotal').text("---");
$('#total-price-mobile').text("---")
$('#subtotal-mobile').text("---");
makecall('','');
});

$('#age-range').on('change', function() {
//getsinglevan();
checkage();	
//$('.summ-div-child').empty();
//$('.extra-js-accordion-body').empty();
//$('#total-price').text("---")
//$('#subtotal').text("---");
//$('#total-price-mobile').text("---")
//$('#subtotal-mobile').text("---");
//makecall('','');
})

function checkage()
	{
agechangeonsimilar();		
if($('#age-range').val() == '23')
{
var tot = $('#total-price').text();
tot = tot.substring(1);
tot = Number(tot) + Number(young_driver_cost);
tot = '£' + tot.toFixed(2);
$('#total-price').text(tot);
$('#total-price-mobile').text(tot);
$('#hidd-total-price').text(tot);
$('#extra-text').show();	
 $('.summary-div').show() ;	
$('.summ-div-child').append('<div class="summ-extras-div" id="young"><div class="extras-text">Young driver surcharge<span class="extra-quant"> </span></div><div class="extras-pricing">£'+ young_driver_cost +'</div></div>');
$('#young').show();
}
else
{
$('#extra-text').hide();	
var tot = $('#total-price').text();
tot = tot.substring(1);	
tot = getParam('age') == '25' ? Number(tot) :  Number(tot) - Number(young_driver_cost);
tot = '£' + tot.toFixed(2);
$('#total-price').text(tot);
$('#total-price-mobile').text(tot);
$('#hidd-total-price').text(tot);	
$('#young').remove();
$('.summ-extras-div:visible').length == 0 ? $('.summary-div').hide() : '';	
}
	}
	
function agechangeonsimilar()
	{
	var pricearr = document.getElementsByClassName('price-amount');
if($('#age-range').val() == '25') {
for(var x=0; x < pricearr.length; x++) {
var tot = Number(pricearr[x].innerText) - Number(young_driver_cost);
tot = tot.toFixed(2);	
pricearr[x].innerText = tot;
addageparam(x);
}
}
else
{
for(var x=0; x < pricearr.length; x++) {
addageparam(x);
var tot =  Number(pricearr[x].innerText) + Number(young_driver_cost);	
pricearr[x].innerText = tot.toFixed(2);
}
}
	}
	
	
function addageparam(x)
{
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
$('.item-overlay')[x].href = butturl + paramstr;
}	
		
	
 function addparam()
 {	 
/*	 
 var string = "";
  string = '?' + $('#booking-form').find('input, select, textarea').map(function() {
    var key = encodeURIComponent((this.name || this.id).trim());
    return key ? key + '=' + encodeURIComponent($(this).val()) : null;
  }).get().join('&');
return string;
	*/ 
var string = "";
  string = '?' + $('#booking-form').find('input, select, textarea').map(function() {
    var key = encodeURIComponent((this.name || this.id).trim());
    return key ? key + '=' + encodeURIComponent($(this).val()) : null;
  }).get().join('&');

string = string + '&' + $('.addit-check').map(function() {
    var key = encodeURIComponent((this.name || this.id).trim());
    var checkval = $(this).prop( "checked" ) ? 1 : 0
    return key ? key + '=' + encodeURIComponent(checkval) : null;
  }).get().join('&');

string = string + '&' + $('.additional').map(function() {
    var key = encodeURIComponent((this.name || this.id).trim());
    var selval = $(this).val() == '' ? 0 : $(this).val()
    return key ? key + '=' + encodeURIComponent(selval) : null;
  }).get().join('&');

string = string + '&coupon=' + $('#discount').val()	 
	return string; 
 }
	
$('.item-overlay').click(function(e) {
//updateparam();
e.preventDefault();	
var paramstr = addparam();	
window.location.href = e.currentTarget.href.split('?')[0] + paramstr;

});
	$('.card-button').click(function(e) {
//updateparam();
e.preventDefault();		
var paramstr = addparam();
window.location.href = e.currentTarget.href.split('?')[0] + paramstr;
});
	
function updateparam() {
var vandat = $('.van-collection');
	for(var x=0;x< vandat.length; x++)
	{
	let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
	var paramstr = addparam();
	  document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
	$('.item-overlay')[x].href = butturl + paramstr;  
	}
}

	

	
//window.history.replaceState(null, null, addparam());
//post additional call
	
//postadditional();	
//	makecall('','');
function postadditional()
{
$('#extra-text').hide();
$.ajax({
    type: "POST",
    url: "https://hirefleet-328113.nw.r.appspot.com/api/additionalcharges-post",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({
pick_up_date: "2110-01-01",
pick_up_time: "08:00",
return_date : "2110-01-01",
return_time : "08:30",
pick_up_location : 2,
return_location : 2,
brand_id : 1,
vehicle_class_id : $('#class-id').text(),
	 additional_charges : 1,
coupon_code : ""	    
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){
	   young_driver_cost = Number(data.data.selected_additional_charges[0].total_price.amount);   
    },
});
}	

var nexavailcount = 0;
function makecall(date1,date2) {
$('.van-collection').hide();
$.ajax({
    type: "POST",
    url: "https://hirefleet-328113.nw.r.appspot.com/api",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({
pick_up_date: $('#start-date').val(),
pick_up_time: $('#start-time').val() == null ? '06:00' : $('#start-time').val(),
return_date : $('#end-date').val(),
return_time : $('#end-time').val() == null ? '00:00' : $('#end-time').val(),
pick_up_location : 2,
return_location : 2,
brand_id : 1
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data) {
	    if(data.data.length == 0) {
	    $('.error-wrapper-2').show()    
		    nexavailcount < 2 ?  nextavailfunc() : '';   
		    nexavailcount = nexavailcount + 1;
	    }
    else {
    nexavailcount = 0;	    
    var res = data.data;
    applypricing(res.applicable_classes);
    setupunavailable(res.applicable_classes);
      }
    },
          error: function(error) {
console.log("error" + error);	 
          }
});
}

function nextavailfunc() {
console.log("next run again ")	
var lockdays = picker.options.lockDays		    
var loopcount = 0
var nextavail = dayjs();
 var tomnextavail = dayjs().add(1,'day')  
 var lckcount = picker.options.lockDays.length < 10 ? picker.options.lockDays.length : 10;
 if(lckcount > 0 ) {
	for(x=0; x< lckcount; x++) {
      if(dayjs(lockdays[x].toJSDate()).isSame(nextavail,'day')) {
     nextavail = nextavail.add(1,'day')
        loopcount = loopcount +1
        }
        else {
            break;
    }  
}
    tomnextavail = tomnextavail.add(loopcount,'day')
for(x=loopcount; x< lckcount; x++) {
      if(dayjs(lockdays[x].toJSDate()).isSame(tomnextavail,'day')) {
     tomnextavail = tomnextavail.add(1,'day')
        }
        else {
            break;
    }  
}
  
 }	  
	 
	picker.setDateRange(nextavail,tomnextavail) 
 $('#end-time').val() == null ? $('#end-time').val($('#end-time option:first').val()) : ''	
$('#start-time').val($('#start-time option:first').val()).change()
getsinglevan()
 /*
    for(x=0; x<9; x++) {
    loopcount = x +1  
      if(dayjs(lockdays[x].toJSDate()).isSame(dayjs().add(x,'day'),'day')) {
      }
     else {
      nextavail = dayjs().add(x,'day')
        break;
      }
}
  for(x=loopcount; x<15; x++) {
  if(dayjs(lockdays[x].toJSDate()).isSame(dayjs().add(x,'day'),'day')) {
    }
     else {
      tomnextavail = dayjs().add(x,'day')
        break;
      }
}    
tomnextavail = dayjs(lockdays[0].toJSDate()).isSame(dayjs().add(1,'day'),'day') ? dayjs().add(2,'day') : tomnextavail 	
*/

}
	
//make button unavailable 
function setupunavailable(vehicledata)
	{
	vehicledata.forEach(singval => { 
if(singval.vehicle_class_id == $('#class-id').text()) {
vanavailable = singval.availability.quantity == 0;
vanavailable == true ? $('#booking-butt').val('Check Availability') : '' ;
	if(vanavailable == true){$('#Summary').text("Your enquiry summary");$('#Complete').text("Complete your enquiry");}
}
})
     }	


	
function applypricing(appdata)
{
var loopdata = appdata;	
$('.van-collection').toggle('300');
var vandat = $('.van-collection');
loopdata.forEach(singval => { 
for(var x=0;x< vandat.length; x++)
{
if(singval.vehicle_class_id == $('.van-class-id')[x].innerHTML)
{
if(singval.availability.quantity > 0) {
var agecheck = $('#age-range').val() == '25';
$('.price-amount')[x].innerHTML = agecheck ? singval.price.base_price_with_taxes.amount : Number(singval.price.base_price_with_taxes.amount) + young_driver_cost ;
var days = singval.price.total_days;
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
$('.item-overlay')[x].href = butturl + paramstr;
days > 1 ? $('.days')[x].innerHTML = days + ' days' :  $('.days')[x].innerHTML = days + ' day'
}
else
{
var days = singval.price.total_days;
var agecheck = $('#age-range').val() == '25';
days > 1 ? $('.days')[x].innerHTML = days + ' days' :  $('.days')[x].innerHTML = days + ' day'
$('.price-amount')[x].innerHTML = agecheck ? singval.price.base_price_with_taxes.amount : Number(singval.price.base_price_with_taxes.amount) + young_driver_cost;
//document.getElementsByClassName('card-button')[x].style.backgroundColor = '#a5a5a5';
//document.getElementsByClassName('card-button')[x].href = '#'
var paramstr = addparam();	
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
$('.item-overlay')[x].href = butturl + paramstr;	
document.getElementsByClassName('card-button')[x].style.color = '#3a78ae';
document.getElementsByClassName('card-button')[x].style.backgroundColor = 'white';
document.getElementsByClassName('card-button')[x].innerHTML = 'Enquire now';
document.getElementsByClassName('limited')[x+1].style.display = 'block';	
}
}
}
})
}	
//code for single van page
//additionalpostcall();


	
	
// code for single van page	
//	  setTimeout( function() {
//getsinglevan();
//   }, 1600);
	function getsinglevan()
{
$('#extra-text').hide();
$.ajax({
    type: "POST",
    url: "https://hirefleet-328113.nw.r.appspot.com/api/additionalcharges",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({
	    pick_up_date: $('#start-date').val(),
pick_up_time: $('#start-time :selected').val(),
return_date : $('#end-date').val(),
return_time : $('#end-time :selected').val(),
pick_up_location : 2,
return_location : 2,
brand_id : 1,
vehicle_class_id : $('#class-id').text()
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){ 
		console.log(data);
    changeprices(data.data);
    applyeve();
	agechecked();
	    ccvalidation();
	  applyextraparam();	
	    applyurlchange();
    },
});
}
	
var callcount = 0; 
addarr = [];	
function changeprices(data)
{	
var elemid = "extra";	
 callcount == 0 ? addarr = [] : '';			
data.additional_charges.forEach((singval,index) => { 
 callcount == 0 ? $('.summ-div-child').append('<div class="summ-extras-div"><div class="extras-text">'+singval.label+'<span class="extra-id" style="display:none">'+singval.id +'</span> <span class="extra-quant"> </span></div><div class="extras-pricing">£0</div></div>') : '';
callcount == 0 ? $('.summ-extras-div').hide() : '';	
if(singval.selection_type == "multiple") {
//var additelem = '<div class="extras-div"><div class="extras-detail"><div class="extras-text">'+singval.label+'</div><div class="extras-detail-text">'+singval.short_description+'</div></div><div class="checkbox-field-2"><select class="additional w-select addit-select" id='+ elemid + index + '><option value="">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><div class="radio-label"></div><div class="extras-dropdown-pricing">£'+Number(singval.base_price_with_taxes.amount)+'</div></div></div>'
var additelem = '<div class="extras-div"><div class="extras-detail"><div class="extras-text">'+singval.label+'</div><div class="extras-detail-text">'+singval.short_description+'</div></div><div class="checkbox-field-2"><select class="additional w-select addit-select" indexatt="'+ elemid + index + '" id='+ singval.label.replace(/\s+/g, '-') + '><option value="">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><div class="radio-label"></div><div class="extras-dropdown-pricing">£'+Number(singval.base_price_with_taxes.amount)+'</div></div></div>'
	$('.extra-js-accordion-body').append(additelem);
}
else {
//var additelem = '<div class="extras-div"><div class="extras-detail"><div class="extras-text">'+singval.label+'</div><div class="extras-detail-text">'+singval.short_description+'</div></div><label class="w-checkbox checkbox-field-2"><div class="w-checkbox-input w-checkbox-input--inputType-custom checkboxes"></div><input id='+ elemid + index + ' type="checkbox" class="addit-check"  style="opacity:0;position:absolute;z-index:-1"><span class="radio-label w-form-label">'+singval.label+'</span><div class="extras-button-pricing">&pound;'+Number(singval.base_price_with_taxes.amount)+'</div></label></div>'
var additelem = '<div class="extras-div"><div class="extras-detail"><div class="extras-text">'+singval.label+'</div><div class="extras-detail-text">'+singval.short_description+'</div></div><label class="w-checkbox checkbox-field-2"><div class="w-checkbox-input w-checkbox-input--inputType-custom checkboxes"></div><input indexatt="'+ elemid  + index + '" id='+ singval.label.replace(/\s+/g, '-') + ' type="checkbox" class="addit-check"  style="opacity:0;position:absolute;z-index:-1"><span class="radio-label w-form-label">'+singval.label+'</span><div class="extras-button-pricing">&pound;'+Number(singval.base_price_with_taxes.amount)+'</div></label></div>'
	$('.extra-js-accordion-body').append(additelem);
}
 callcount == 0 ? addarr.push({id: elemid + index , name: singval.label , price : singval.base_price_with_taxes.amount, currentprice: 0, quan : 0 , display : false, newid : singval.label.replace(/\s+/g, '-') }) :
 addarr[index].price = singval.base_price_with_taxes.amount;
})
callcount = callcount + 1;	
checkoldextras();	
}

function checkoldextras() {
//checkage();
for(let x=0; x<addarr.length; x++)
  { 
     if(addarr[x].quan > 0) {
     showsum(addarr[x].id,true,addarr[x].quan);
     $('#' + addarr[x].id).attr('type') == 'checkbox'	 ?  $('#'+addarr[x].id).click() : $('#'+addarr[x].id).val(addarr[x].quan);   
     }
   }   	
}	
	
 function applyeve() {
 $('.addit-check').change(function(ev) {
showsum(ev.currentTarget.getAttribute('indexatt'),$(this).is(':checked'), $(this).is(':checked') ? 1 : 0);	 
});
 $('.addit-select').change(function(ev) {
 if($(this).val()) {
$(this).css({'border-color': '#89d12b', 'background-color': '#89d12b'}) 
showsum(ev.currentTarget.getAttribute('indexatt'),true,$(this).val());
}
else {
$(this).css({'border-color': '#6b6b6b', 'background-color': '#6b6b6b' }) 
showsum(ev.currentTarget.getAttribute('indexatt'),false,$(this).val() == '' ? 0 : $(this).val());
console.log($(this).val())	 
}
});
}

function showsum(id,check,quan)
{	
$('#extra-text').show();
addarr.forEach((singval,index) => { 
if(singval.id == id && check) {
addarr[index].quan = quan;
var pric = $('#total-price').text();
var finpric = Number(pric.substring(1,pric.length)) + Number(addarr[index].price*quan);
$('#total-price').text("£"+finpric.toFixed(2));
$('#total-price-mobile').text("£"+finpric.toFixed(2));
$('#hidd-total-price').text("£"+finpric.toFixed(2));	
document.getElementsByClassName('extras-pricing')[index].textContent  = "£" +  Number(addarr[index].price * quan);
document.getElementsByClassName('extra-quant')[index].innerText = "x"+ quan;
 $('.summary-div').show();	
 document.getElementsByClassName('summ-extras-div')[index].style.display = 'flex';
}
else if(singval.id == id && !check) {	
var pric = $('#total-price').text();
var finpric = Number(pric.substring(1,pric.length)) - Number(addarr[index].price * addarr[index].quan);
$('#total-price').text("£"+finpric.toFixed(2));
$('#total-price-mobile').text("£"+finpric.toFixed(2));
$('#hidd-total-price').text("£"+finpric.toFixed(2));	
//document.getElementsByClassName('extras-pricing')[index].textContent ="£0";	
document.getElementsByClassName('summ-extras-div')[index].style.display = 'none';
$('.summ-extras-div:visible').length == 0 ? $('.summary-div').hide() : '';
addarr[index].quan = quan;
}
})
}

	
function applyextraparam() {
$('.addit-check').each(function(singelem) {
    if(getParam(this.id) == 1) {
    $('#'+this.id).click()
    }
});

$('.additional').each(function(singelem) {
 var paramval = getParam(this.id)
    if(paramval > 0) {
    $('#'+this.id).val(paramval).change()
    }
});
}

	function applyurlchange() {
	var elem1 = $('.addit-check');
var elem2 = $('#discount');
var elem3 = $('.additional');
var elem4 = $('#start-time');
var elem5 = $('#end-time');	
var elem6 = $('#age-range');		

$([elem1,elem2,elem3,elem4,elem5,elem6]).each(function() {

    $(this).bind("change", function() {    
window.history.replaceState(null, null, addparam());
    });
});	
	}
		
//end code here 	
});
///////////////////////////////////////////////////////////////////////
$('#booking-form').submit(function() {
  return false;
});
///////////////////////////////////////////////////////////////////////
let inputBox = document.querySelector('.selection');
let inputBox2 = document.querySelector('form');
$("#start-time").change(function(){
  addActivityItem();
});
//inputBox2.addEventListener("input", function () {
  //  addActivityItem();
//});

observeElement(inputBox, "value", function (oldValue, newValue) {
    addActivityItem();
});

function observeElement(element, property, callback, delay = 0) {
    let elementPrototype = Object.getPrototypeOf(element);
    if (elementPrototype.hasOwnProperty(property)) {
        let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, property);
        Object.defineProperty(element, property, {
            get: function() {
                return descriptor.get.apply(this, arguments);
            },
            set: function () {
                let oldValue = this[property];
                descriptor.set.apply(this, arguments);
                let newValue = this[property];
                if (typeof callback == "function") {
                    setTimeout(callback.bind(this, oldValue, newValue), delay);
                }
                return newValue;
            }
        });
    }
}

function addActivityItem() {
    // To set the date and time variables
var r = document.getElementById('start-date').value;
var s = document.getElementById('end-date').value;
var t = document.getElementById('start-time').value;
var u = document.getElementById('end-time').value;
var v = r + '08:01';
var w = s + u;

dayjs.extend(window.dayjs_plugin_customParseFormat)
var x = dayjs(v, 'DD-MM-YYYYHH-mm').subtract(1, 'day');
var y = dayjs(w, 'DD-MM-YYYYHH-mm');
var z = dayjs(v, 'DD-MM-YYYYHH-mm').format('ddd, DD MMM YYYY');
var z1 = dayjs(w, 'DD-MM-YYYYHH-mm').format('ddd, DD MMM YYYY');
//alert(z);
// To calculate the no. of days between the dates
var d = y.diff(x, 'day');
//To display the final no. of days (result)
var string = '1 day hire';
    var newstring = string.replace(/1/, d);
  //  document.getElementById('duration').innerHTML = newstring;
//To display the from date (result)
document.getElementById('from-date').textContent = z;
document.getElementById('from-time').textContent = t;
document.getElementById('to-date').textContent = z1;
document.getElementById('to-time').textContent = u;
};

// make login modal keyboard friendly

   $(document).ready(function() {
        var buttonThatOpenedModal;
        var findModal = function(elem) {
            var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

            var firstTabbable = tabbable.first();
            var lastTabbable = tabbable.last();
            firstTabbable.focus();

            /*redirect last tab to first input*/
            lastTabbable.on('keydown', function(e) {
                if ((e.which === 9 && !e.shiftKey)) {
                    e.preventDefault();
                    firstTabbable.focus();
                }
            });

            firstTabbable.on('keydown', function(e) {
                if ((e.which === 9 && e.shiftKey)) {
                    e.preventDefault();
                    lastTabbable.focus();
                }
            });

            elem.on('keydown', function(e) {
                if (e.keyCode === 27) {
                    $(elem).find('.modal-close_btn').click();
                };
            });
        };

        var modalOpenButton = $('.modal-open_btn');
        modalOpenButton.on('keydown', function(e) {
            // Only activate on spacebar and enter
            if (e.which !== 13 && e.which !== 32) {
                return;
            }
            e.preventDefault();
            // Simulate a mouseclick to trigger Webflow's IX2/Interactions
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            $(this).get(0).dispatchEvent(evt);
        });
        modalOpenButton.on('click', function() {
            $(this).next().show();
            findModal($(this).next());
            buttonThatOpenedModal = $(this);
        });

        var modalCloseButton = $('.modal-close_btn, .modal-close_area');
        modalCloseButton.on('keydown', function(e) {
            // Only activate on spacebar and enter
            if (e.which !== 13 && e.which !== 32) {
                return;
            }
            e.preventDefault();

            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            $(this).get(0).dispatchEvent(evt);
        });
        modalCloseButton.on('click', function() {
            $(this).closest('.modal-wrapper').hide();
            if (buttonThatOpenedModal) {
                buttonThatOpenedModal.focus();
                buttonThatOpenedModal = null;
            }
        });
    });
