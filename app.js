// function generatePassword() {
//     const length = document.getElementById('length').value;
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset.charAt(randomIndex);
//     }
//     document.getElementById('inputField').textContent = password;
// }

// function copyToClipboard() {
//     const passwordElement = document.getElementById('inputField');
//     const passwordText = passwordElement.textContent;

//     const textarea = document.createElement('textarea');
//     textarea.value = passwordText;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);

//     document.write('Password copied to clipboard!');
// }



// function generatePassword() {
//     const length = document.getElementById('length').value;
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_`-+=<>?'";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset.charAt(randomIndex);
//     }
//     document.getElementById('inputField').value = password;
// }

// function copyToClipboard() {
//     const passwordElement = document.getElementById('inputField');
//     passwordElement.select();
//     document.execCommand('copy');
//     alert('Password copied to clipboard!');
// }


function generatePassword() {
    const length = document.getElementById("length").value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_`-+=<>?'";
    let password = ""

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    document.getElementById("inputField").value = password;
}

function copyToClipboard() {
    const passwordElement = document.getElementById("inputField");
    passwordElement.select();
    document.execCommand("copy");
    alert(`Password copied to clipboard!`);

}