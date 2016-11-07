$(window).load(function(){
  console.log(document.getElementById("datum_video"));
  document.getElementById("datum_video").addEventListener('change', function (event) {
    var URL = URL || webkitURL;
    var file = event.target.files[0];
    document.querySelector('video').src = URL.createObjectURL(file); // inputで選択した動画を再生する
    $("#v-preview").show();
  }, false);
  document.getElementById("datum_audio").addEventListener('change', function (event) {
    var URL = URL || webkitURL;
    var file = event.target.files[0];
    document.querySelector('audio').src = URL.createObjectURL(file);
    $("#a-preview").css('display', 'inline');
  }, false);
  document.getElementById("datum_gesture").addEventListener('change', function (event) {
    var URL = URL || webkitURL;
    var file = event.target.files[0];
    $('#renderer').attr('data-src', URL.createObjectURL(file));
    $("#g-preview").show();
  }, false);
})
