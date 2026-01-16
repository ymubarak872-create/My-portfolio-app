// Hero Button
document.getElementById("hireBtn"). addEventListener ("click", () => {
alert ("Thank you for your interest. I will reach out soon!");

}) ;
// Contact Form Validation
document. getElementById ("contactForm"). addEventListener ("submit", function(e){
e. preventDefault ();

let name = document.getElementById ("contactName"). Value;
let email = document.getElementById ("contactEmail"). Value;
let msg = document.getElementById ("message");
let feedback = document-getElementById ("feedback" ) ;

if (name ==="" || email === "" || msg === ""){
feedback. textContent = "All fields are required!";
feedback. style.color = "red";
return;
}

feedback.textContent = "Message sent sucessfully!";
});