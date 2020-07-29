$(document).ready(function () {
//     $(".mesgs .option").each(function () {
//         $(this).click(function(){
//             let right=$(this).css("right");
//             let top=$(this).css("top");
//             console.log(right+" "+top);
//         })
//     });
 $(".type_msg .input_msg_write input").keyup(function (e) { 
   if($(this).val()!=""){
       $(this).prev().removeClass("d-none");
       $(this).next().addClass("d-none");
   }
   else{
    $(this).prev().addClass("d-none");
    $(this).next().removeClass("d-none");
   }
 });
 $("#buttonWrite").click(function(){
     $(this).prev().focus();
 })
 $("#buttonSend").click(function(){
  let value =$(this).next().val().trim();
  if(value!=""){
     
     
  }
})
 });
