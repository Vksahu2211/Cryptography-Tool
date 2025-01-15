function displayModal(result) {
    const modal = document.getElementById("resultModal");
    const modalResult = document.getElementById("modalResult");
    modalResult.innerHTML = `${result}`; 

    // Show the modal
    modal.style.display = "block";
}

// Close the modal
document.querySelector(".close").addEventListener("click", function () {
    const modal = document.getElementById("resultModal");
    modal.style.display = "none";  
});

function displayOutput(result) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Result: ${result}`;
    outputDiv.style.display = "block";
    alert(result);
}

document.getElementById("encryptBtn").addEventListener("click", function () {
    const message = document.getElementById("inputMessage").value;
    const cipher = document.getElementById("cipher").value;
    const key = document.getElementById("key").value;
    let encryptedMessage = "";

    switch (cipher) {
        case "DES":
            encryptedMessage = desEncrypt(message, key);
            break;
        case "3DES":
            encryptedMessage = tripleDesEncrypt(message, key);
            break;
        case "AES":
            encryptedMessage = aesEncrypt(message, key);
            break;
        case "RC4":
            encryptedMessage = rc4Encrypt(message, key);
            break;
        default:
            encryptedMessage = "Invalid cipher!";
    }

    displayModal(encryptedMessage);
});

document.getElementById("decryptBtn").addEventListener("click", function () {
    const message = document.getElementById("inputMessage").value;
    const cipher = document.getElementById("cipher").value;
    const key = document.getElementById("key").value;
    let decryptedMessage = "";

    switch (cipher) {
        case "DES":
            decryptedMessage = desDecrypt(message, key);
            break;
        case "3DES":
            decryptedMessage = tripleDesDecrypt(message, key);
            break;
        case "AES":
            decryptedMessage = aesDecrypt(message, key);
            break;
        case "RC4":
            decryptedMessage = rc4Decrypt(message, key);
            break;
        default:
            decryptedMessage = "Invalid cipher!";
    }

    displayModal(decryptedMessage);
});

function desEncrypt(message, key) {
    return CryptoJS.DES.encrypt(message, key).toString();
}

function desDecrypt(message, key) {
    const bytes = CryptoJS.DES.decrypt(message, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}


function tripleDesEncrypt(message, key) {
    return CryptoJS.TripleDES.encrypt(message, key).toString();
}

function tripleDesDecrypt(message, key) {
    const bytes = CryptoJS.TripleDES.decrypt(message, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}


function aesEncrypt(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function aesDecrypt(message, key) {
    const bytes = CryptoJS.AES.decrypt(message, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}


function rc4Encrypt(message, key) {
    return CryptoJS.RC4.encrypt(message, key).toString();
}

function rc4Decrypt(message, key) {
    const bytes = CryptoJS.RC4.decrypt(message, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}


window.onclick = function (event) {
    const modal = document.getElementById("resultModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
