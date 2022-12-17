// Created By.xZero
var audio = new Audio()
$(function() {
  window.addEventListener("message", function(event) {
    var item = event.data;
    if(event.data.action= "setImg"){

      $('.imgbox > img').attr('src', event.data.data);
    }
    if (item !== undefined) {
      if (item.type == "ui") {
        if (item.display == true) {
          $("#body").show();
          audio.pause();
          audio = new Audio("audio.mp3");
          audio.play();
        } else {
          $("#body").hide();
        }
      } else if (item.type == "update") {
        $("#my_id").html(item.my_id);
        $("#my_phonenumber").html(item.my_phonenmumber);
        $("#my_fullname").html(item.my_fullname);
        $("#my_job").html(item.my_job);
        $("#players").html(item.players);
        $("#pl").html(item.police);
        $("#ems").html(item.ems);
        $("#mc").html(item.mc);
        $("#ks").html(item.keisha);
        $("#cc").html(item.council);
      }
    }
  });
});
