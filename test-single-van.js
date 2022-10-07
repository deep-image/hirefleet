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
	"tax" : data.applicable_taxes[0].total_amount.amount,
	"currency" : data.reservation.total_price.currency,
	"coupon" : data.applicable_discounts.name == undefined ? '' : data.applicable_discounts.name
	});	
console.log({
	'event': 'purchase',
	"transaction_id" : ORDER_ID,
	"value" : data.reservation.total_price.amount,
	"tax" : data.applicable_taxes[0].total_amount.amount,
	"currency" : data.reservation.total_price.currency,
	"coupon" : data.applicable_discounts.name == undefined ? '' : data.applicable_discounts.name
	})	
}




$(document).ready(function () {

 $('.sing-features-block .div-block-47').remove()
$('.sing-features-block .div-block-45').remove()   	

var extra = $('#Extra-Driver');
            if (extra.val() === '0') {
                alert("Please select an item from the list and then proceed!");
                return false;
            }
            else return;
});


$crisp.push(['do', 'chat:hide']);
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

	    ///////////////////////this needs sorting//////////////// 

	    /// add a function here that gets the selected extras & outputs a list that our api calls will accept

	    ///////////////////////this needs sorting//////////////// 

var additioncharge = [];
function getextras() {
additioncharge = [];
let additageval = false;
if(getParam('age') == '') {
 additageval = $('#age-range').val() == '25' ? false : true;
console.log(additageval)	
}
else {
additageval = getParam('age') == '25' ? false : true;
console.log(additageval)		
}		
var additsel = $('.addit-select');
for (var x=0; x<additsel.length; x++){
var elemval = $('#'+ additsel[x].id).find(":selected").val()
    if(elemval != '') {
    additioncharge.push(Number($('#'+ additsel[x].id).attr('idattr')) + "_" + elemval)
    }
}
var additcheck = $('.addit-check');
for (var x=0; x< additcheck.length; x++){
var elemval = $('#'+ additcheck[x].id).is(':checked')
	if(elemval) {
	 additioncharge.push($('#'+ additcheck[x].id).attr('idattr'))
	}
}
additageval ? additioncharge.push(1) : '';	
return additioncharge;
}


 function addparam()
 {	 
var string = "";
  string = '?' + $('#booking-form').find('input, select, textarea').map(function() {
	  if(this.name != 'both-date') {
    var key = encodeURIComponent((this.name || this.id).trim());
    return key ? key + '=' + encodeURIComponent($(this).val()) : null; 
	  }
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

$('.item-overlay, .card-button').click(function(e) {
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

function addageparam(x)
{
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
$('.item-overlay')[x].href = butturl + paramstr;
}






function appdisc(resdata) {
    if(resdata.length == 0 || resdata.applicable_discounts.length == 0) {
    $('#discount').css('color','red')
    }
        else {
	console.log('dic applied')	
		 $('#discount').css('color','#89d12b')
    $('#total-discount, #remov_disc').show()
   $('#discount_box').css('display','flex')
  $('#total-discount').text(resdata.applicable_discounts[0].discounted_amount.amount_for_display) 
    $("#apply-discount").hide();
   }
}
$("#remov_disc").click(function() {
$('#discount').val('')
    $('#total-discount, #discount_box, #remov_disc').hide()
    $('#discount').css('color','black')
    $("#apply-discount").show();
  addparam();	
});

$("#apply-discount").click(function() {
e.preventDefault();		
additionalpostcall();
});


$( document ).ready(function() {

var picker;	
var vanavailable = false;
var dobpicker;
var primdobpicker;	
var bothpicker;	


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
$('#Company-Name, #Website').css('display','none')
break; 
case 'Business': 
$('#Company-Name, #Website').css('display','block') 
break;
}
});


fieldschange("true",'not-allowed')
var emailcount = 0;


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
	$('#Additional-Info, #Submit, #Cardholder-Details').css('display','block') 
	}
	});
	}

	}
	else {
	$("#email").css("boxShadow", "none");
	$('#Additional-Info, #Submit, #Cardholder-Details').css('display','block') 
	$('#Primary-Driver-Checkbox, #Address, #phone').attr("disabled",false); 
	$('[for=Personal], [for=Business]').css('cursor','not-allowed') 
	$('#Personal-Business').css('display','flex')
	}
	});
	}

function fieldschange(enable,cursor) {
$('[for=Business], [for=Personal], #age .w-checkbox-input, #Date-Of-Birth').css('cursor',cursor) 
$('#First-Name, #Last-Name, #Date-Of-Birth, #Personal, #Business').attr("disabled",enable);    
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
 });
$('#both-date').val($('#start-date').val() + " - " + $('#end-date').val())
    }
// if the time is after 10am then set the pickup day to tomorrow
   else if (time >= 10){
var today = dayjs().add(1, 'day').format('DD/MM/YYYY'); //set the start / end date to today
var tomorrow = dayjs().add(2, 'day').format('DD/MM/YYYY'); 
   } //set the start 
    else{ 
var today = dayjs().format('DD/MM/YYYY'); //set the start / end date to today
//var todays = dayjs().format('MM/DD/YYYY'); //set the start / end date to today
var tomorrow = dayjs().add(1, 'day').format('DD/MM/YYYY'); } //set the start / end date to today
	console.log("litepciker")
console.log(today)	
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
	console.log(date1) 
	  console.log(date2)
 if($('#start-time').val() != null && $('#end-time').val() != null) { 
console.log('make call without time')	 
	  setTimeout( function() {	  
additionalpostcall()
$('#total-price, #total-price-mobile, #subtotal, #subtotal-mobile').text("---")	  
makecall(date1.toDateString(),date2.toDateString());
window.history.replaceState(null, null, addparam());		  		  
	   }, 300);
 }	 
  });	
	},
})
	


  picker.on('hide', () => {
 console.log("clear")
precount = 0;	  
  });
	
bothpicker =  new Litepicker({
					element: document.getElementById('both-date'),
				singleMode: false,
				format: 'DD-MM-YYYY',
				minDate: dayjs().format('MM/DD/YYYY'),
				plugins: ['mobilefriendly'],
				//allowRepick: true,   
				maxDate: maxd,       startDate: today,
				endDate: tomorrow,
				tooltipNumber: (totalDays) => {
				return totalDays - 1;
				},
		setup: (bothpicker) => {
  bothpicker.on('selected', (date1, date2) => {
picker.setDateRange(date1,date2)
  })
	},		
})	

var precount = 0;	
   picker.on('preselect', (date1, date2) => {	   
precount = precount + 1;	   
	   if(precount == 2) {
	  setTimeout( function() {	 		   
console.log("git pre select"); 	  
//getsinglevan();
	   }, 300);			  
} 
precount = precount == 2 ? 0 : precount;	   
  });
	
	
	
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
$('#age-range').attr("disabled", true);		
dayjs.extend(dayjsPluginUTC.default)	
	let dob = new Date(date1.dateInstance);
	dob = dayjs(dob).format();	
let compyear = dayjs.utc().subtract(25, 'year').format();					
let primcheck = document.querySelector( 'input[name="Primary-Driver-Selection"]:checked').value == 'As Above'		
		if(dob >= compyear && $('#young').length != 1 && primcheck) {
$('#age-range').val('23').change(); 
$('#extra-text').show()				
}	
else if(dob < compyear && primcheck)
{
$('#age-range').val('25').change()
$('.summ-extras-div > .extras-text').length == 0 ? $('.summary-div').hide() : ''
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
if(dob >= compyear  && !primcheck) {
$('#age-range').val('23').change(); 
}	
else if(dob < compyear  && !primcheck)
{
$('#age-range').val('25').change()
$('.summ-extras-div > .extras-text').length == 0 ? $('.summary-div').hide() : ''	
}	
});
	},	

})


var additionalcount = 0;
$('#start-time, #end-time').change(function() {
	setTimeout(function() { 
	makecall('','');
	}, 200);	
});

$('#start-time, #end-time, #age-range').change(function() {
	setTimeout(function() { 
//	console.log($('#age-range').val() == '25' ? 1 : '')	
	subdetectchange()
	    }, 350);	
});



var coup_amo = 0;
var young_driver_cost =0;
	
function additionalpostcall()
{
$('#extra-text').hide();
$('.summ-div-child').empty();	 	
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

	    ///////////////////////this needs sorting//////////////// 
	 //   additional_charges : additageval, // this needs to be the full lis of selected extras
	    ///////////////////////this needs sorting//////////////// 
additional_charges : getextras(),
coupon_code : ""	    
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){
	    console.log("additional-post-res")
		console.log(data);
	    var data = data.data;	 

	    ///////////////////////this needs sorting (updated)//////////////// 
$('.summ-div-child').empty();
	  

 data.selected_vehicle_class.vehicle_class.features.forEach((feature) => {
   let fabval = getunicode(feature.icon)[1] == true ? 'fab' : ''
   $('.sing-features-block').eq(0).append('</span></i><div class="div-block-47"><div class="similar fa ' + fabval + '">'+getunicode(feature.icon)[0] +'</div><div class="similar left">'+ feature.label +'</div></div>')
   })
$('.sing-dimensions-block').eq(0).find('#F405').text(Number(data.selected_vehicle_class.vehicle_class.f405).toFixed(0)) 
$('.sing-dimensions-block').eq(0).find('#F407').text(Number(data.selected_vehicle_class.vehicle_class.f407).toFixed(0)) 
$('.sing-dimensions-block').eq(0).find('#F409').text(Number(data.selected_vehicle_class.vehicle_class.f409).toFixed(0)) 
$('.sing-dimensions-block').eq(0).find('#F411').text(Number(data.selected_vehicle_class.vehicle_class.f411).toFixed(0)) 
$('.sing-dimensions-block').eq(0).find('#F448').text(Number(data.selected_vehicle_class.vehicle_class.f448).toFixed(0)) 

	    
	    
data.selected_additional_charges.forEach((singval,index) => { 
young_driver_cost = singval.id == 1  ? Number(singval.total_price_with_taxes.amount) : 0;  	
 $('.summ-div-child').append('<div class="summ-extras-div"><div class="extras-text">'+singval.label+'<span class="extra-id" style="display:none">'+singval.id +'</span> <span class="extra-quant">x'+  singval.selected_quantity+' </span></div><div class="extras-pricing">'+singval.total_price_with_taxes.amount_for_display+'</div></div>')
})	
data.selected_additional_charges.length > 0 ? $('.summary-div').show() : '';
$('.summ-extras-div > .extras-text').length == 0 ? $('.summary-div').hide() : '';	    
agechangeonsimilar();
	    //////////////////////this needs sorting/////////////////

$('#subtotal, #subtotal-mobile').text(data.selected_vehicle_class.price.base_price_with_taxes.amount_for_display);
$('#total-price, #total-price-mobile, #hidd-total-price').text(data.total.total_price.amount_for_display);
$('#hidd-total-price').text(data.total.total_price.amount);
$('#inclusive-miles, #inclusive-miles-mobile').text(data.selected_vehicle_class.distance_limits.distance_allowed);
$('#security_deposit_excess').text(data.total.security_deposit_excess.amount_for_display);
$('#security_deposit').text(data.total.security_deposit.amount_for_display);
$('#mileage-price, #mileage-price-mobile').text(data.selected_vehicle_class.distance_limits.distance_extra_price_with_tax.amount_for_display);
var dayscount = data.selected_vehicle_class.price.total_days;
dayscount = dayscount > 1  ? dayscount + " days hire" : dayscount + " day hire";	
$('#duration, #duration-mobile').text(dayscount);
$('#discount').val().length  > 0 ? appdisc(data) : '';
    },
});
}	

function agechangeonsimilar()
	{
	var pricearr = document.getElementsByClassName('price-amount');
if($('#age-range').val() == '25') {
for(var x=0; x < pricearr.length; x++) {
var tot = Number(pricearr[x].innerText.slice(1).replaceAll(',','.')) + Number(young_driver_cost)
pricearr[x].innerText = '£' + tot.toFixed(2);
addageparam(x);
}
}
else
{
for(var x=0; x < pricearr.length; x++) {
addageparam(x);
var tot = Number(pricearr[x].innerText.slice(1).replaceAll(',','.')) - Number(young_driver_cost)
pricearr[x].innerText = '£' + tot.toFixed(2);
}
}
	}	



function subdetectchange() {
console.log("change")	
additionalpostcall()
$('#total-price').text("---")
$('#subtotal').text("---");
$('#total-price-mobile').text("---")
$('#subtotal-mobile').text("---");	
}

const observer2 = new MutationObserver((mutations, obs) => {
  //const hello = document.getElementById('Extra-Driver');
  if ($('.extras-div').length > 1) {
    obs.disconnect();
    return addit();
  }
});

observer2.observe(document, {
  childList: true,
  subtree: true
});

	function addit(){
	$('.addit-check, .addit-select').change(function() {
additionalpostcall()
$('#total-price').text("---")
$('#subtotal').text("---");
$('#total-price-mobile').text("---")
$('#subtotal-mobile').text("---");
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
brand_id : 1,
coupon_code : "",


	    ///////////////////////this needs sorting//////////////// 

	    additional_charges : $('#age-range').val() == '25' ? 1 : '', // this needs to be the full lis of selected extras

	    ///////////////////////this needs sorting//////////////// 
additional_charges : getextras()
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
bothpicker.setDateRange(nextavail,tomnextavail) 
picker.setDateRange(nextavail,tomnextavail) 
$('#end-time').val() == null ? $('#end-time').val($('#end-time option:first').val()) : ''	
$('#start-time').val($('#start-time option:first').val()).change()
getsinglevan();		
}


function setupunavailable(vehicledata)
	{
	vehicledata.forEach(singval => { 
if(singval.vehicle_class_id == $('#class-id').text()) {
vanavailable = singval.availability.quantity == 0;
vanavailable == true ? $('#booking-butt').val('Check Availability') :  $('#booking-butt').val('confirm & pay');document.getElementsByClassName('available')[x+1].style.display = 'block';
	if(vanavailable == true){$('#Summary').text("Your enquiry summary");$('#Complete').text("Complete your enquiry");document.getElementsByClassName('limited')[x+1].style.display = 'block';}
}
})
     }	

function getunicode(icclass) { 
   if(icclass == 'fad fa-chess-pawn') {
      return ['&#xf443;' , false]
   }
	  else if(icclass == 'far fa-level-up-alt') {
      return ['&#xf3bf;' , false ]
   }
     else if(icclass == 'fab fa-autoprefixer') {
      return ['&#xf41c;' , true ]
   }
      else if(icclass == 'fab fa-linux') {
      return ['&#xf17c;' , true ]
   }
   else if(icclass == 'fas fa-radio') {
      return ['&#xf8d7;' , false ]
   }
    else if(icclass == 'fas fa-steering-wheel') {
      return ['&#xf622;' , false ]
   }
    else if(icclass == 'far fa-arrow-alt-from-left') {
      return ['&#xf347;' , false ]
   }
}	
	
function applypricing(appdata)
{
var loopdata = appdata;	
$('.van-collection').toggle('300');
var vandat = $('.van-collection');
$('.features-block .div-block-47').remove()
$('.features-block .div-block-45').remove()	
loopdata.forEach(singval => { 
for(var x=0;x< vandat.length; x++)
{
if(singval.vehicle_class_id == $('.van-class-id')[x].innerHTML)
{
	singval.vehicle_class.features.forEach((feature) => {
	let fabval = getunicode(feature.icon)[1] == true ? 'fab' : ''
	$('.features-block').eq(x).append('</span></i><div class="div-block-47"><div class="similar fa ' + fabval + '">'+getunicode(feature.icon)[0] +'</div><div class="similar left">'+ feature.label +'</div></div>')
	})
	$('.dimensions-block').eq(x).find('#F405').text(Number(singval.vehicle_class.f405).toFixed(0)) 
	$('.dimensions-block').eq(x).find('#F407').text(Number(singval.vehicle_class.f407).toFixed(0)) 
	$('.dimensions-block').eq(x).find('#F409').text(Number(singval.vehicle_class.f409).toFixed(0)) 
	$('.dimensions-block').eq(x).find('#F411').text(Number(singval.vehicle_class.f411).toFixed(0)) 
	$('.dimensions-block').eq(x).find('#F448').text(Number(singval.vehicle_class.f448).toFixed(0)) 
	
if(singval.availability.quantity > 0) {
var agecheck = $('#age-range').val() == '25';
$('.price-amount')[x].innerHTML = agecheck ? singval.price.base_price_with_taxes.amount_for_display : Number(singval.price.base_price_with_taxes.amount_for_display.slice(1).replace(/,/g, '.')) + young_driver_cost ;
//$('.price-amount')[x].innerHTML =  singval.price.base_price_with_taxes.amount ;
var days = singval.price.total_days;
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
$('.item-overlay')[x].href = butturl + paramstr;
document.getElementsByClassName('available')[x+1].style.display = 'block';
days > 1 ? $('.days')[x].innerHTML = days + ' days' :  $('.days')[x].innerHTML = days + ' day'
}
else
{
var days = singval.price.total_days;
var agecheck = $('#age-range').val() == '25';
$('.price-amount')[x].innerHTML = agecheck ? singval.price.base_price_with_taxes.amount_for_display : Number(singval.price.base_price_with_taxes.amount_for_display.slice(1).replace(/,/g, '.')) + young_driver_cost ;	
days > 1 ? $('.days')[x].innerHTML = days + ' days' :  $('.days')[x].innerHTML = days + ' day'
//$('.price-amount')[x].innerHTML =  singval.price.base_price_with_taxes.amount;
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


var callcount = 0; 	
function getsinglevan() {
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
vehicle_class_id : $('#class-id').text(),


	    ///////////////////////this needs sorting//////////////// 

//	    additional_charges : $('#age-range').val() == '25' ? 1 : '', // this needs to be the full lis of selected extras

	    ///////////////////////this needs sorting//////////////// 
//          additional_charges : getextras()		    
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){
$('.extra-js-accordion-body').empty();	
setTimeout(function()  {  	    
   changeprices(data.data);
applyeve();	
applyextraparam();	
applyurlchange();
agechecked();	
	}, 200);
	    ccvalidation();
    },
});
}

$( "#start-time" ).one( "change", function() {
getsinglevan();	
});
	/*
setTimeout(function() {
        getsinglevan();
          }, 1200);
	  */

addarr = [];		
function changeprices(data)
{	
var elemid = "extra";			
data.additional_charges.forEach((singval,index) => { 
if(singval.selection_type == "multiple") {
var additelem = '<div class="extras-div"><div class="extras-detail"><div class="extras-text">'+singval.label+'</div><div class="extras-detail-text">'+singval.short_description+'</div></div><div class="checkbox-field-2"><select class="additional w-select addit-select" idattr='+ singval.id +'  indexatt="'+ elemid + index + '" id='+ singval.label.replace(/\s+/g, '-') + '><option value="">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><div class="radio-label"></div><div class="extras-dropdown-pricing">£'+Number(singval.base_price_with_taxes.amount)+'</div></div></div>'
	$('.extra-js-accordion-body').append(additelem);
}
else {
var additelem = '<div class="extras-div"><div class="extras-detail"><div class="extras-text">'+singval.label+'</div><div class="extras-detail-text">'+singval.short_description+'</div></div><label class="w-checkbox checkbox-field-2"><div class="w-checkbox-input w-checkbox-input--inputType-custom checkboxes"></div><input idattr='+ singval.id +'  indexatt="'+ elemid  + index + '" id='+ singval.label.replace(/\s+/g, '-') + ' type="checkbox" class="addit-check"  style="opacity:0;position:absolute;z-index:-1"><span class="radio-label w-form-label">'+singval.label+'</span><div class="extras-button-pricing">&pound;'+Number(singval.base_price_with_taxes.amount)+'</div></label></div>'
	$('.extra-js-accordion-body').append(additelem);
}
})	
}	

	 function applyeve() {
		 /*
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
*/
$('.addit-select').change(function() {
	 if($(this).val()) {
	$(this).css({'border-color': '#89d12b', 'background-color': '#89d12b'}) 	
	 }
	else {
	$(this).css({'border-color': '#418fd3', 'background-color': '#3a78ae' }) 	
	}
	subdetectchange()
})
$('.addit-check').change(function() {
subdetectchange()
})		 		 
}


function agechecked() {  
    if (window.location.href.indexOf("age") > -1) {   
$('#age-range').val(getParam('age'));
    }	
}	




function applyextraparam() {
$('.addit-check').each(function(singelem) {
    if(getParam(this.id) == 1) {
    $('#'+this.id).click()
    }
});

$('.addit-select').each(function(singelem) {
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
