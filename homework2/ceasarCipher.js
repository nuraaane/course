function ceasarCipher(word, key) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        result += String.fromCharCode(word.charCodeAt(i) + key);

    } return result;
}