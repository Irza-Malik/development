var first_name = "IRZA";
var last_name = "MALIK";
var year_of_birth = 2003;
var current_year= new Date().getFullYear();
var age= current_year - year_of_birth ;
document.getElementById("student_message").innerHTML="Hi, my name is " + first_name + " " + last_name + ", I'm " + age + "years old and I'm learning Javascript.";
var first_num= 101;
var second_num= 7;
var ans=101/7;
document.getElementById("division").innerHTML=first_num + "/" + second_num + "=" + ans.toFixed(2);
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
function isvalid(phone){
    return phone.toString().length === 9 ? "valid":"invalid";
}
document.getElementById("valid").innerHTML="Phone 1: " + isvalid(phone1) + "<br>" +
    "Phone 2: " + isvalid(phone2) + "<br>" +
    "Phone 3: " + isvalid(phone3);
