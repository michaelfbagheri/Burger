// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  console.log('inside the burger.js of public folder')
 $('.burger button').click(function(event){
   event.preventDefault();

   if ($(this).attr('value')=='add'){
    var burger = $('#burger-name').val().trim();
    var burgerToAdd = {
      burger
    }
    console.log(burgerToAdd.burger + ' was added and now being sent to ajax post');
    $.ajax('/add/burger',{
      type: 'POST',
      data:burgerToAdd
      }).then(function(){
        console.log('new burger was added and were back at burger.js .then')
        location.reload();
      });

   }
   else {
     
     var burger = $('#burger-name').val().trim();
     var burgerToEat = {
       burger
     }
     $.ajax('/eat/burger',{
       type:"PUT",
       data: burgerToEat
     }).then(()=>{
      location.reload();
     });


   }


     
  });
});
