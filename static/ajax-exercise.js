"use strict";


// PART 1: SHOW A FORTUNE
function callFortune(result){
  var fortune = result;
  $('#fortune-text').html(fortune);
}


function showFortune(evt) {

   $.get('/fortune', callFortune);// TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeatherResult(result){
  $('#weather-info').html("Temperature is " + result['temp'])

}

function showWeather(evt) {
    evt.preventDefault();


    var formInput = {
      "zipcode": $('#zipcode-field').val()};
      $.get("/weather.json",formInput, showWeatherResult);
    }
    // TODO: request weather with that URL and show the forecast in #weather-info


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function showOrder(result){
  if (result.code === 'ERROR') {
    $('#order-status').addClass('order-error');
  }
    $('#order-status').html(result['msg']);
} 


function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form

    var formInput = {
      "qty": $('#qty-field').val(),
      "melon_type": $('#melon-type-field').val()
    };
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    $.post('/order-melons.json',formInput, showOrder);
}

$("#order-form").on('submit', orderMelons);


