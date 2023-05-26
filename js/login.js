// step-1:add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // step-2 value added
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    // step-3 get password
    const passwordcollect = document.getElementById("user-password")
     const password =passwordcollect.value;
     console.log(password);
     window.location.href = "bank.html"
     

})