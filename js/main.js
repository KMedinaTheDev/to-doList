//alert("Get Oragnized & Track Your Tasks!");
var itemId=0;
//var itemId="item" + $("ul").children().length; //trying to give li a class
//To Do List
//html:
//1 input field (inside a form)
//a button to Add to List
//A button to Clear List

//What can the user do?
  //user can enter a list item from the input put field(inside a form), input will display inside an unordred list
//function to add list item
function addListItem(e){
  e.preventDefault();  //prevent default event w/ form, submit event
  var newItem=$(".toDoItem").val(); //store the user's input
  itemId += 1;
  $(".toDo").append("<li class='item-"+itemId+"'>"+newItem+"</li>");
   //use append method to add user's input to the ul as an li
  clearInput();
  toDoCount();

};
//What does the user expect?
//keep list items after refresh******
function storeList(){
var todos = $('.toDo').html();
   localStorage.setItem('.toDoItem', todos);
   return false;
   {
$('.toDo').html(localStorage.getItem('.toDoItem'));
}
};

  //user can clear all list items
function clearAll(){
    $("ul li").remove();
  toDoCount();
};

  //a button to Clear Completed task
function clearCompleted(){
  $(".completedItem").remove();
  var count=("li").length;
  $("h4").text("You have: "+count+" to Complete!");
  toDoCount();
};
//What can the user see?
//how many tasks are left to do
function toDoCount(){
  var count=$("li").length;
  $("h4").text("You have: "+count+" thing to Do!");
  if (count > 1) {
      $("h4").text("You have: "+count+" things to Do!");
  }
  else if (count <= 0) {
      $("h4").text("You've Completed All Your Tasks!");
  }
}

  function clearInput(){ //clears user's input
    $(".toDoItem").val("");
  };

$(document).ready(function(){

//  $("body").on("submit", storeList);
  $(".submitItem").on("submit",addListItem);
  $(".addBtn").on("click",addListItem);
  $("#clearAllBtn").on("click", clearAll);
  $(".clearCompletedBtn").on("click",clearCompleted);

    //user can mark an item as Completed
  $("ul").on("click","li",function(){   //click on list item to mark item completed
    $(this).addClass("completedItem");
  });

  //when user hovers mouse edit and remove will pop up to the right of the li
  $("ul").on("mouseenter","li",function(){
    console.log($(this).attr("class"))
    // "show" / append edit & remove buttons
    $(this).append('<span id="edit" class="edit">'+' Edit '+'</span>');
    $(this).append('<span id="remove" class="remove">'+' Remove '+'</span>');

    $("ul").on("mouseleave", "li", function(){  //when user moves mouse away edit and remove dissapear
      // "hide" / remove edit & remove buttons
      $(this).find('#remove').remove()
      $(this).find('#edit').remove()
    })
  });
    //trying to make edits on li
//     $(".edit").on("click",function(){
//       $("#" + itemId).replaceWith('<li id=' +itemId+ 'input><input class="change" type="text" name="" value=""></li>');
//     });
// })



$("ul").on("click", ".edit",function(){
  //var newId= "item" + $("ul").children().length;
  //$(".edit").on("click",function(){
  var currentEditItem=$(this).parent().attr("class");
  $(this).parent().append('<input class="change" type="text" name="" value=""><button class="new">ok</button>');
  $(".new").on("click", function(){
    var edit= $(this).parent().find(".change").val();
    $("."+currentEditItem).text(edit);
    $("."+currentEditItem).removeClass("completedItem");
  });
  //$(this).parent().attr("contenteditable","true");
}); //.on( "change", handler )
//});
//delete when you click remove
$("ul").on("click","#remove", function(){
  $(this).parent().remove();
  toDoCount();
  });
}); //end of document.ready function
