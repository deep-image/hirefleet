// test2

var vichHref = ''; 

$('.card-button').click(function(){
 vichHref =$(this)[0].href; 
  $.ajax({}); 
}); 


 function addparam()
 {
 var string = "";
  string = '?' + $('#booking-form').find('input, select, textarea').map(function() {
	  if(this.name != 'both-date') {  
    var key = encodeURIComponent((this.name || this.id).trim());
    return key ? key + '=' + encodeURIComponent($(this).val()) : null;
	  }			  
  }).get().join('&');

string = string + '&' + $('#van-sort').map(function() {
    var key = encodeURIComponent((this.name || this.id).trim());
    var selval = $(this).val() == '' ? 0 : $(this).val()
    return key ? key + '=' + encodeURIComponent(selval) : null;
  }).get().join('&');	  
return string;
 }
$( document ).ready(function() {
             $("#Rental-Type").val('daily');
        $("#Customer-Type").val('individual');
        $("#Pick-Up-Location").val('hirefleet');
        });
        var start;
        var end;
        var firstdate;
        var lastdate;
        var age = '';
var picker;
var bothpicker;

$('.features-block').hide()
$('.price-amount').attr('data-id', '')
$('.days').hide()


setTimeout(function() {
postadditional();
$('#avail-sort-butt')[0].click();	
}, 500);

// auto populate form from url parameter
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
$('#both-date').length > 0 ?  $('#both-date').val($('#start-date').val() + " - " + $('#end-date').val()) : '';	
$('#van-sort').val( $('#van-sort').val()  );
$('#van-sort').change();	
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
 
	
 picker = new Litepicker({
				element: document.getElementById('start-date'),
  			elementEnd: document.getElementById('end-date'),
  			singleMode: false,
  			format: 'DD-MM-YYYY',
  			minDate: dayjs().format('MM/DD/YYYY'),
  			plugins: ['mobilefriendly'],
  			allowRepick: false,       
	startDate: today,
	endDate: tomorrow,
// shows one day less
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  },
        setup: (picker) => {
  picker.on('selected', (date1, date2) => {
    var strt = $('#start-time :selected').val();
  var endt = $('#end-time :selected').val();
  age = $('#age :selected').val() == '25' ? 'On' : 'off';
	  window.history.replaceState(null, null, addparam());
  });
},
});

   picker.on('selected', (date1, date2) => {
	  console.log("our vehicle seletcted") 
      var strt = $('#start-time :selected').val();
  var endt = $('#end-time :selected').val();
  age = $('#age :selected').val() == '25' ? 'On' : 'off'; 
 console.log("selection change"); 
if($('#start-time').val() != null && $('#end-time').val() != null) {
  setTimeout( function() {	
 makecall(date1.toDateString(),date2.toDateString(),strt,endt,age);  
   	   }, 300);
  }
});
	if($('#both-date').length > 0) { 
      bothpicker =  new Litepicker({
		element: document.getElementById('both-date'),
	      singleMode: false,
	      format: 'DD-MM-YYYY',
	      minDate: dayjs().format('MM/DD/YYYY'),
	      plugins: ['mobilefriendly'],
	     selectForward : true, 
      startDate: today,
	endDate: tomorrow,
	      tooltipNumber: (totalDays) => {
	      return totalDays - 1;
	      },
	  setup: (bothpicker) => {
	bothpicker.on('selected', (date1, date2) => {
      picker.setDateRange(date1,date2)
	})
	},	
lockDaysFilter: function(date1, date2, pickedDates){	      
	      if(pickedDates.length == 0) {
	      const allowedDates = disallowedarr
				return disallowedarr.includes(date1.format('YYYY-MM-DD'));
		}
	    }      
      });
   }	
//});

$('#start-time').change(function() {
	setTimeout(function() { 
  var strt = $('#start-time :selected').val();
  var endt = $('#end-time :selected').val();
  age = $('#age :selected').val() == '25' ? 'On' : 'off';
      console.log("thir make call");   
makecall(picker.getStartDate().toDateString(),picker.getEndDate().toDateString(),strt,endt,age);
	window.history.replaceState(null, null, addparam());
    }, 100);			
});

$('#end-time').change(function() {
  var strt = $('#start-time :selected').val();
  var endt = $('#end-time :selected').val();
  age = $('#age :selected').val() == '25' ? 'On' : 'off';
 var tod = new Date();
var tom = new Date(tod.getTime() + (24 * 60 * 60 * 1000));
var daytom = new Date(tom.getTime() + (24 * 60 * 60 * 1000)); 
makecall(picker.getStartDate().toDateString(),picker.getEndDate().toDateString(),strt,endt,age);	
window.history.replaceState(null, null, addparam());
});


$('#age').change(function() {
  var strt = $('#start-time :selected').val();
  var endt = $('#end-time :selected').val();
  age = $('#age :selected').val() == '25' ? 'On' : 'off';
var pricearr = document.getElementsByClassName('price-amount');
if(($('#age :selected').val()) == '25') {
for(var x=0; x < pricearr.length; x++) {
var tot = Number(pricearr[x].innerText.slice(1).replaceAll(',','.')) - Number(young_driver_cost)
pricearr[x].innerText = '£' + tot.toFixed(2);	
}
}
else
{
for(var x=0; x < pricearr.length; x++) {
var tot =  Number(pricearr[x].innerText.slice(1).replaceAll(',','.')) + Number(young_driver_cost); 
pricearr[x].innerText = '£' +  tot.toFixed(2);
addageparam(x);
}
}

window.history.replaceState(null, null, addparam());
});

function addageparam(x)
{
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
$('.item-overlay')[x].href = butturl + paramstr;
}



var young_driver_cost = 35;	
function postadditional()
{
$.ajax({
    type: "POST",
    url: "https://hirefleet-328113.nw.r.appspot.com/api/additionalcharges-post",
    data: JSON.stringify({
pick_up_date: "2110-01-01",
pick_up_time: "08:00",
return_date : "2110-01-01",
return_time : "08:30",
pick_up_location : 2,
return_location : 2,
brand_id : 1,
vehicle_class_id : 6,
 additional_charges : [1]
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){
	   young_driver_cost = Number(data.data.selected_additional_charges[0].base_price_with_taxes.amount);  
    },
      error: function(error) {
     console.log(error);
  }
});
}	

var nexavailcount = 0;
function makecall(date1,date2,start,end,age) {
$('.price-amount').text('-----')
$('.price-amount').attr('data-id', '')
$('.days').hide()	
//$('.van-collection').hide();
$.ajax({
type: "POST",
url: "https://hirefleet-328113.nw.r.appspot.com/api",
data: JSON.stringify({
pick_up_date: date1,
pick_up_time: start == null ? '06:00' : $('#start-time').val(),
return_date : date2,
return_time : end == null ? '00:00' : $('#end-time').val(),
pick_up_location : 2,
return_location : 2,
brand_id : 1
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data){
        if(data.data.length == 0) {
       	    $('.error-wrapper-2').show()    
	nexavailcount < 2 ?  nextavailfunc() : '';   
	nexavailcount = nexavailcount + 1;
       } else {
nexavailcount = 0;	  	       
var res = data.data;
applypricing(res.applicable_classes);
//setting available sort if selected before	
	for(x=0; x<2; x++) {		
	$('#van-sort').val() == 'available' ? $('#avail-sort-butt')[0].click() : '';			
	$('#van-sort').val() == 'price-desc' ? $('#price-sort-butt')[0].click() : '';
	$('#van-sort').val() == 'price-asc' ? $('#price-sort-butt')[0].click() : '';	
	}
}
    },
    error: function(error) {
    //  $('.van-collection').toggle('300');
    }
});
}

function nextavailfunc() {
var lockdays = picker.options.lockDays		    
var loopcount = 0
var nextavail = dayjs();
 var tomnextavail = dayjs().add(1,'day')  
 var lckcount = picker.options.lockDays.length < 10 ? picker.options.lockDays.length : 10;
 if(lckcount > 0 ) {
	for(x=0; x< lckcount; x++) {
      if(dayjs(lockdays[x].toJSDate()).isSame(nextavail,'day') || disallowedarr.includes(  nextavail.format('YYYY-MM-DD') )  ) {
     nextavail = nextavail.add(1,'day')
        loopcount = loopcount +1
        }
        else {
            break;
    }  
}
    tomnextavail = tomnextavail.add(loopcount,'day')
for(x=loopcount; x< lckcount; x++) {
      if(dayjs(lockdays[x].toJSDate()).isSame(tomnextavail,'day')  || disallowedarr.includes(  tomnextavail.format('YYYY-MM-DD'))   ) {
     tomnextavail = tomnextavail.add(1,'day')
        }
        else {
            break;
    }  
} 
 }	  
	 
bothpicker.setDateRange(nextavail,tomnextavail)
	
$('#end-time').val() == null ? $('#end-time').val($('#end-time option:first').val()) : ''	
$('#start-time').val($('#start-time option:first').val()).change()
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
    else if(icclass == 'far fa-arrow-alt-down') {
      return ['&#xf063;' , false ]
   }
   else {
   return ['' , false ]
   }
}


function applypricing(data)
{
var vandat = $('.van-collection');
$('.div-block-47').remove()
$('.div-block-45').hide()	
$('.features-block').show()
$('.price-amount').attr('data-id', 'price')
$('.days').show()	

console.log('apply price')
	
data.forEach(singval => { 
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
	let loadheig = Number(singval.vehicle_class.f411).toFixed(0)
	$('.dimensions-block').eq(x).find('.dimension').eq(3).show()
	loadheig == 0 ? $('.dimensions-block').eq(x).find('.dimension').eq(3).hide() : $('.dimensions-block').eq(x).find('#F411').text(Number(singval.vehicle_class.f411).toFixed(0)) 
	loadheig == 0 ? $('.dimensions-block').eq(x).find('.load-height').eq(0).text('2200')  : ''
	$('.dimensions-block').eq(x).find('#F414').text(Number(singval.vehicle_class.f414).toFixed(0)) 
	$('.dimensions-block').eq(x).find('#F449').text(Number(singval.vehicle_class.f449).toFixed(0))

document.getElementsByClassName('limited')[x].style.display = 'none';
document.getElementsByClassName('available')[x].style.display = 'none';	
	
if(singval.availability.quantity > 0) {
var agecheck = age == 'On';
//$('.price-amount')[x].innerHTML = agecheck ? singval.price.base_price_with_taxes.amount_for_display :  '£' + (Number(singval.price.base_price_with_taxes.amount_for_display.slice(1).replace(/,/g, '.')) + young_driver_cost).toFixed(2);
$('.price-amount')[x].innerHTML = agecheck ?  Intl.NumberFormat('en-US', {  style: 'currency',  currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(singval.price.base_price_with_taxes.amount) :   Intl.NumberFormat('en-US', {  style: 'currency',  currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format((Number(singval.price.base_price_with_taxes.amount) + young_driver_cost));
var days = singval.price.total_days;
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0];
$('.item-overlay')[x].href = butturl + paramstr;
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
document.getElementsByClassName('available')[x].style.display = 'block';
days > 1 ? $('.days')[x].innerHTML = days + ' days' :  $('.days')[x].innerHTML = days + ' day'
//adding text for filter
 $('.filt-available').length > 0 ? $('.filt-available')[x].innerHTML = 'instock' : ''	
}
else
{
var days = singval.price.total_days;
days > 1 ? $('.days')[x].innerHTML = days + ' days' :  $('.days')[x].innerHTML = days + ' day'
var agecheck = age == 'On';
//$('.price-amount')[x].innerHTML = agecheck ? singval.price.base_price_with_taxes.amount_for_display :  '£' + (Number(singval.price.base_price_with_taxes.amount_for_display.slice(1).replace(/,/g, '.')) + young_driver_cost).toFixed(2);
$('.price-amount')[x].innerHTML = agecheck ?  Intl.NumberFormat('en-US', {  style: 'currency',  currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(singval.price.base_price_with_taxes.amount) :   Intl.NumberFormat('en-US', {  style: 'currency',  currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format((Number(singval.price.base_price_with_taxes.amount) + young_driver_cost));
var paramstr = addparam();
let butturl =document.getElementsByClassName('card-button')[x].href.split("?")[0]; 
$('.item-overlay')[x].href = butturl + paramstr;
document.getElementsByClassName('card-button')[x].href = butturl + paramstr;
document.getElementsByClassName('card-button')[x].style.color = '#3a78ae';
document.getElementsByClassName('card-button')[x].style.backgroundColor = 'white';
document.getElementsByClassName('card-button')[x].innerHTML = 'Enquire now';
document.getElementsByClassName('limited')[x].style.display = 'block';
 $('.filt-available').length > 0 ? $('.filt-available')[x].innerHTML = 'sold' : ''		
}
}
}
})
resetpriceslider();	
addparam();
}


function resetpriceslider() {
	var slidearr = []
	$('.price-amount').each((index) => {
	let singpr = $('.price-amount').eq(index).text()
	slidearr.push(Number(singpr.substring(1).replace(',','')))    
	})
	slidearr = slidearr.sort(function(a, b){return b - a})
	var prslide = $(".js-range-slider").data("ionRangeSlider")
	prslide.options.min = slidearr[slidearr.length - 1]
	prslide.options.max = slidearr[0]
	prslide.update({ from: (slidearr[slidearr.length - 1] ) , to: slidearr[0] })

  }


$('#booking-form').submit(function() {
  return false;
});
