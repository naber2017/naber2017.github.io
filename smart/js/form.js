$(document).ready(function(){$("#form").validate({rules:{user_name:{required:!0,minlength:4,maxlength:20},user_email:{required:!0,minlength:7,maxlength:30},user_message:{required:!0,minlength:10,maxlength:100}},messages:{user_name:{required:"Enter Login!",minlength:"Minimum length  is 4 characters!",maxlength:"Maximum length is 20 characters!",remote:"Логін зайнято!!!"},user_email:{required:"Enter Email!",minlength:"Minimum length  is 7 characters!",maxlength:"Maximum length is 30 characters!"},user_message:{required:"Enter Message!",minlength:"Minimum length - 10 characters!",maxlength:"Maximum length - 100 characters!"}}})});