$(document).ready(function (){
  var getter = $.ajax ({
    url: 'https://lit-fortress-6467.herokuapp.com/post',
    method: "POST",
  })
  getter.done(function(payload){
    console.log(payload);
  })
})
