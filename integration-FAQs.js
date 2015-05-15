/*
* This file is not included.
* This is a copy of the code on the Integration FAQ page, just as a backup.
* questions have IDs
* spans have classes
* when you hover over a span, 
* show the popup div that is hidden at the beginning of the question
* where the mouse is currently hovering
* when the mouse leaves the span, hide the popup div
*/

$(document).ready(function(){

  var q2info = $("#q2 .answer").html();
  var q3info = $("#q3 .answer").html();
  var q4info = $("#q4 .answer").html();
  var q11info = $("#q11 .answer").html();
  var q22info = $("#q22 .answer").html();

  var items = [
    {
      id: "#q2",
      className: ".q2info",
      info: popUpWrapper(q2info)
    },
    {
      id: "#q3",
      className: ".q3info",
      info: popUpWrapper(q3info)
    },
    {
      id: "#q4",
      className: ".q4info",
      info: popUpWrapper(q4info)
    },
    {
      id: "#q11",
      className: ".q11info",
      info: popUpWrapper(q11info)
    },
    {
      id: "#q22",
      className: ".q22info",
      info: popUpWrapper(q22info)
    }
  ];

	//when a question is clicked
  $(".question").click(function(){
        //show that question's answer
      	$(this).children(".answer").slideToggle();
      	//remove currentQuestion class from other questions
      	$(this).siblings().removeClass("currentQuestion");
      	//hide other question's answers
      	$(this).siblings().children(".answer").slideUp();

        if($(this).hasClass("currentQuestion")){
          //if it already has the class, remove it
          $(this).removeClass("currentQuestion");
        } else {
          //add currentQuestion class to this question
          $(this).addClass("currentQuestion");
        }
    });

  for(var i = 0; i < items.length; i++ ){
  	$(items[i].className).prepend(items[i].info);
  }
  
  $(".hoverLink").hover(function(){
    $(this).children(".questionPopup").fadeToggle();
  });
});

function popUpWrapper(item){
  return "<div class='questionPopup'>" + item + "</div>";
}





