function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key === 71) {
      alert('You pressed the G key.');
    }
  })
}

$(document).ready(function(){

// call functions here

});
