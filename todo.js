//the input stuff

//line through when someone cliks any li
// we needed to select the entire ul 
$('ul').on("click", "li", function(){
    $(this).toggleClass('second')
});

//toggle the input with the + sign
$("em").click(function(){
   $("input").toggle("input");
});

//fade out when someone click on the span
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});
 
//keypress event & adding the Li after hiting enter
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
      //grab new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      //create a new li and add to ul
      $("ul").append('<li class="list-group-item"><span><i class="fa fa-trash" aria-hidden="true"></i></span>' +todoText+ '</>') 
    }
});

//fade in the trash can 
$("ul").on("hover", function(){
     ("li").fadeIn(1000, function(){
         console.log("faded In!!");
    });
});