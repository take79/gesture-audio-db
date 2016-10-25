$(document).ready(function(){
  var v = document.getElementById("video");
  var a = document.getElementById("audio");
  $(document).on('click', '#sync-play', function(){
//    $(this).attr('id', 'sync-pause');
    v.currentTime = 0;
    a.currentTime = 0;
    v.play();
    a.play();
  });
//  $(document).on('click', '#sync-pause', function() {
//    $(this).attr('id', 'sync-play');
//    v.pause();
//    a.pause();
//  });
});

