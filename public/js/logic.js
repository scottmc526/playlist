$(document).ready(function (){
  var getter = $.ajax ({
    url: 'https://lit-fortress-6467.herokuapp.com/object',
    method: "GET",
    dataType: 'json'
  })
  getter.done(function(payload){
    console.log(payload);
  })
})
