/*
* Goals:
* Remove dependencies upon hard-coded IDs.
* Dynamically gather question IDs.
* This will break if a question is removed, because Kentico will reassign IDs 
* based on what is actually in the file. IDs are not static to each question.
* 
* 6/4/15: Idea? When inputting an answer, I can assign a span a class ...
*	  Yeah, but, with dynamic ids on the questions, how can I know what class to assign to the span...
*	  hrm.
*/

$(document).ready(function(){

	//get the info from the answers that are already on the page.
  var q2info = $("#q2 .answer").html();
  var q3info = $("#q3 .answer").html();
  var q4info = $("#q4 .answer").html();
  var q11info = $("#q11 .answer").html();
  var q22info = $("#q22 .answer").html();

  var items = [
    {
    	// Do I really need the ids here? I don't think I've used them..
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
  	// For each instance of these classes, add a hidden div with the answer within it
  	$(items[i].className).prepend(items[i].info);
  }
  
  $(".hoverLink").hover(function(){
  	// when hovered over, show hidden div/fade in/out
    $(this).children(".questionPopup").fadeToggle();
  });
});

function popUpWrapper(item){
	//wrap it in a box!
  return "<div class='questionPopup'>" + item + "</div>";
}





