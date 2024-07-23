// To generate random passwords
function generatePassword() {
    //  Getting desired password length
    var length = document.getElementById('password-length').value;
    // Initializing the set
    var charset = "";
    // attach the characters to charset
    if (document.getElementById('uppercase').checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById('lowercase').checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById('numbers').checked) charset += "0123456789";
    if (document.getElementById('symbols').checked) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    // making sure one character is selected
    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }
    
    // generating password
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    // displaying password
    document.getElementById('generated-password').innerText = password;
    document.querySelector('.generated-password-display').style.display = 'block';
    document.getElementById('copy-clip').style.display = 'inline-block';
}

// To copy password to cipboard
function copyToClipboard() {
    var passwordText = document.getElementById('generated-password').innerText;
    navigator.clipboard.writeText(passwordText).then(function() {
        alert('Password copied to clipboard!');
    }, function() {
        alert('Failed to copy password.');
    });
}
