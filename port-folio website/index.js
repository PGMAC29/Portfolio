$(".menu").click(function(){

    $(".menu>img").css({"display":"none"});
    $(".drop-down").css({"display":"flex"});
    $(".drop>ul").css({"background-color":"#9F6E49","padding":"10px","margin":"5px"});

  });

  $(".intro").click(function(){
    $(".drop-down").css({
        "display":"none"
    });
  });
