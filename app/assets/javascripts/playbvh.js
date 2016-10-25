$(document).ready(function(){
  var v = document.getElementById("video");
  var a = document.getElementById("audio");
  $(document).on('click', '#av-sync-play', function(){
//    $(this).attr('id', 'sync-pause');
    v.currentTime = 0;
    a.currentTime = 0;
    v.play();
    a.play();
  });
  $(document).on('click', '#ag-sync-play', function() {
    a.currentTime = 0;
    a.play();
    $('#play_pause').trigger("click");
  });
  $(document).on('click', '#vg-sync-play', function(){
    v.currentTime = 0;
    v.play();
    $('#play_pause').trigger("click");
  });
  $(document).on('click', '#all-sync-play', function(){
    v.currentTime = 0;
    a.currentTime = 0;
    v.play();
    a.play();
    $('#play_pause').trigger("click");
  });
//  $(document).on('click', '#sync-pause', function() {
//    $(this).attr('id', 'sync-play');
//    v.pause();
//    a.pause();
//  });
});

