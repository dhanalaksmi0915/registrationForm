document.getElementById("canvasDiv").addEventListener("click", function(e){
     
      e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('e_mail').value;
    var age=document.getElementById('age').value;
    var gender=document.getElementById('gender');
    var quota=document.getElementById('quota').value;
    var from=document.getElementById('fromadd').value;
    var to=document.getElementById('toaddress').value;
    var amount=document.getElementById('amount',amount).value;
    var incAmount=document.getElementById('incAmount',incAmount).value;
    var insurence=document.getElementById('insurence');
    var address=document.getElementById('address').value;

   if(name!=="" && email!=="" && address!=="" && insurence!==""){
   console.log('name:',name);
   console.log('e_mail:',email);
   console.log('age:',age);
   console.log('quota:',quota);
   console.log('fromadd:',from);
   console.log('amount:',amount);
   console.log('incAmount:',incAmount);
   console.log('toaddress:',to);
   console.log('address:',address);
    var text = "";
       //insurence
       if(insurence.checked === true)
    {
      document.getElementById("insurence").value="Yes";
      console.log('insurence:',insurence.value);

    }
    else
    {
      document.getElementById("insurence").value="No";
      console.log('insurence:',insurence.value);

    }
//age
    if (age <= 12){
      document.getElementById("amount").value = "250";
    }else if(age <= 65){
      document.getElementById("amount").value = "500";
    }else{
      document.getElementById("amount").value = "150";

    }
    
//insurence
if(insurence.value=="Yes")
{
    if(age <= 12){
  document.getElementById("incAmount").value = "350";
}else if(age <= 65){
  document.getElementById("incAmount").value = "600";
}else{
  document.getElementById("incAmount").value = "250";
}
}
else{

if(age <= 12){
  document.getElementById("incAmount").value = "250";
}else if(age <= 65){
  document.getElementById("incAmount").value = "500";
}else{
  document.getElementById("incAmount").value = "150";
  }
}

    //gender
    if(gender.checked === true)
    {
      document.getElementById("gender").value="male";
      console.log('gender:',gender.value);

    }
    else
    {
      document.getElementById("gender").value="Female";
      console.log('gender:',gender.value);

    }
    if(name !==""){
  document.getElementById("namee_error").innerHTML = "";
 
}
if(address!==""){
  document.getElementById("email_error").innerHTML = "";
}
if(email !== ""){

  document.getElementById("address_error").innerHTML = "";
}
    //email
    let form = document.getElementById('form');
  let emails = document.getElementById('e_mail').value;
  let texts = document.getElementById('email_error');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emails.match(pattern)) {
    texts.innerHTML = "Your Email Address valid";
    texts.style.color = '#00ff00';
  } else {
    
    texts.innerHTML = "Please Enter Valid Email Address";
    texts.style.color = 'orange';
  }
  
}
 if(name ===""){
  document.getElementById("namee_error").innerHTML = "enter the name";
  document.getElementById("namee_error").style.color = "red";
}else{
  document.getElementById("namee_error").innerHTML = "";
}
 if(email === "" ){
  document.getElementById("email_error").innerHTML = "enter the email";
  document.getElementById("email_error").style.color = "red";
}else{
  document.getElementById("email_error").innerHTML = "";

}
 if( address===""){
  document.getElementById("address_error").innerHTML = "enter the address";
  document.getElementById("address_error").style.color = "red";
}else{
  document.getElementById("address_error").innerHTML = "";

}
  })