$(document).ready( function(){
  console.log(document.getElementById('input_audio'));
  document.getElementById('input_audio').addEventListener('change', function (event) {
    var URL = URL || webkitURL;
    var file = event.target.files[0];
    document.querySelector('audio').src = URL.createObjectURL(file);
    $("#a-result").css('display', 'inline');
    $('#g-result').show();
    $('#res-sync-play').show();
    bvhlabs.init($('#renderer'))
  }, false);
})
