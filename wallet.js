function deposit(){ 
    var dp = parseInt(document.getElementById('deposit').value);  
    if (document.getElementById('deposit').value.trim() == '' || dp<0){  
        alert('Please enter a valid in the input field.'); 
        document.getElementById('deposit').value = '';
        return; 
    } 
    var currentAmount = parseInt(document.getElementById('currentWallet').innerText); 
 
    var totalDiposite = parseInt(document.getElementById('totalDiposit').innerText); 
 
    currentAmount += dp; 
    totalDiposite += dp;  
 
    document.getElementById('currentWallet').innerText = currentAmount; 
    document.getElementById('totalDiposit').innerText = totalDiposite; 
    document.getElementById('deposit').value = '';  
} 
 
function withdraw(){ 
    var wt = parseInt(document.getElementById('withdraw').value);  
 
    if (document.getElementById('withdraw').value.trim() == '' || wt<0){   
        alert('Please enter a valid in the input field.');
        document.getElementById('withdraw').value = ''; 
        return; 
    } 
 
    var currentAmount = parseInt(document.getElementById('currentWallet').innerText); 
 
    var totalWithdraw = parseInt(document.getElementById('totalWithdraw').innerText); 
    if(wt > currentAmount){ 
            alert('You have not enough money in your Wallet.') 
            document.getElementById('withdraw').value = ''; 
        } 
    else{ 
        currentAmount -= wt;  
        totalWithdraw += wt;  
        document.getElementById('withdraw').value = '';  
        } 
     
    document.getElementById('currentWallet').innerText = currentAmount; 
    document.getElementById('totalWithdraw').innerText = totalWithdraw; 
 
}