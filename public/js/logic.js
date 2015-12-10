$(document).ready(function (){
  var getter = $.ajax ({
    url: 'https://lit-fortress-6467.herokuapp.com/object',
    method: "GET",
    dataType:'json'
  })
  getter.done(function(payload){
    var arr = []
    for (var i = 0; i < 3; i++) {
    var rand = Math.floor(Math.random() * payload['results'].length)
    arr.push(payload['results'][rand]['cover_art'])[i];
    }
    console.log(arr);
  })
})
