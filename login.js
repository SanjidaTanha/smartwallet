function login_now(){ 
    var email = document.getElementById('email').value; 
    var pass = document.getElementById('password').value; 
 

    var rightEmail = "jr.dev101@gmail.com"; 
    var rightPassword = "123456#"; 
     
    if(email == rightEmail && pass == rightPassword){ 
        window.location.href = 'wallet.html'; 
    } 
    else{ 
        alert('Invalid email or password. Please try again.'); 
        document.getElementById('email').value = ''; 
        document.getElementById('password').value = ''; 
    } 
}