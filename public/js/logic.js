$(document).ready(function (){
  var getter = $.ajax ({
    url: 'https://lit-fortress-6467.herokuapp.com/object',
    method: "GET",
    dataType:'json'
  })
  getter.done(function(payload){
  var randomImages = function () {
    var arr = []
    for (var i = 0; i < 3; i++) {
    var rand = Math.floor(Math.random() * payload['results'].length)
    arr.push(payload['results'][rand]['cover_art'])[i];
    }
  return arr;
  }
  var allImages = function () {
    var arr = [];
    for (var i = 0; i < payload['results'].length; i++) {
      arr.push(payload['results'][i]['cover_art'])[i];
    }
    return arr;
  }


  // append random images to index.html
  for (var i = 0; i < randomImages().length; i++) {
    $('.pic').append('<img class="red"src="images/'+randomImages()[0]+'"/>')
  }

  //append all images to playlist.html
  for (var i = 0; i < allImages().length; i++) {
    var myId = i;
    var content = $('.scroll').append('<p id='+myId+'><img class="red" src="images/'+allImages()[i]+'"/></p>')
  }

  //Get title of album when it is clicked
    $(document).on('click', 'p', function(){
      var id = this.id
      var inside = $('.text').append(payload['results'][id]['title'] + '<br>');
    })
  })
})
