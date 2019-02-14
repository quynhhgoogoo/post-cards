$("#switch").on("click", function(){
  if($("#switch").prop("checked")){
      $(".wrapper").addClass("dark");
  }else{
    $(".wrapper").removeClass("dark");
  }
});