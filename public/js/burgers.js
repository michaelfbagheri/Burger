// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  console.log('inside the burger.js of public folder')
 $('.add-burger').on('submit',function(event){
   event.preventDefault();
   var newBurger = $('#burger-name').val().trim();
   var burgerToBeAdded = {
     burger:newBurger
   }
   console.log(burgerToBeAdded.burger + ' was added and now being sent to ajax post');

   $.ajax('/add/burger',{
     type: 'POST',
     data:burgerToBeAdded
     }).then(function(){
       console.log('new burger was added and were back at burger.js .then')
       location.reload();
     });
 });

  
  });
  