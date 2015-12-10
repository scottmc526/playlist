$('#clear').click(function (){
  $('.text').empty();
})
$('#submit').click(function () {
  var send = $.ajax ({
    url: 'https://lit-fortress-6467.herokuapp.com/post',
    method: 'POST'
  })
  send.done(function(send){
    console.log(send);
  })
})
