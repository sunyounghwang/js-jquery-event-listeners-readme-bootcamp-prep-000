function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').append('.tasty');
  })
}

$(document).ready(function(){

// call functions here

});
