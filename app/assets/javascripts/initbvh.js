$(document).on('turbolinks:load', function () {
  if(!$('.container').is('.dynamic')) {
    bvhlabs.init($('#renderer'));
//    console.log("initfrominitbvh");
  }
});

