function generatePassword(passwordLength) {
    let nums = '';
    let lettersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let lettersUpperCase = lettersLowerCase.toUpperCase();
    let allElements = nums + lettersLowerCase + lettersUpperCase;

    let password = null;
    for (let i = 0; i < passwordLength; i++) {
        password += allElements[Math.floor(Math.random() * allElements.length)];
    }
    return password;
}