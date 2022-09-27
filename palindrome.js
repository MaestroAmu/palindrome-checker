function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    var rts = str.split("").reverse().join("");
    if (str === rts) {
        return true;
    } else {
        return false;
    }

}
