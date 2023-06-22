/* isValidEmail("apple.orange@fruit.com"); // Should return: true
isValidEmail("sun_rise@day.start"); // Should return: true
isValidEmail("colorful_days@rainbow.net"); // Should return: true
isValidEmail("extra@dot@point.com"); // Should return: false
isValidEmail(".hidden@dot.start"); // Should return: false
isValidEmail("underscore_.next@to.each"); // Should return: false
isValidEmail("multi.dot@domain.co.uk"); // Should return: false
isValidEmail("numbered@address123.com"); // Should return: false
isValidEmail("exclaim!@shout.com"); // Should return: false */

function isValidEmail(email) {
    var parts = email.split("@");
    var username = parts[0];
    var domain = parts[1];

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var allowedChars = "._";
    var allValidChars = alphabet + numbers + allowedChars;

    // Checking if @ is only 1
    if (parts.length !== 2) {
        return false;
    }
    // Checking if username starts or ends with an underscore or dot.
    if (
        username[0] === "." ||
        username[0] === "_" ||
        username[username.length - 1] === "." ||
        username[username.length - 1] === "_"
    ) {
        return false;
    }

    // Checking if all characters before the "@" symbol (the username) should be alphanumeric, underscores, or dots ".".
    for (var i = 0; i < username.length; i++) {
        var charUsername = username[i];

        if (!allValidChars.includes(charUsername.toLowerCase())) {
            return false;
        }

        /* if (
            !alphabet.includes(charUsername.tolowercase()) &&
            !numbers.includes(CharUsername) &&
            !allowedChars.includes(charUsername)
        ) {
            return false;
        } */

        // Checking if underscore and dot are not immediately adjacent to each other.
        if (
            (username[i] === "." && username[i + 1] === "_") ||
            (username[i] === "_" && username[i + 1] === ".")
        ) {
            return false;
        }
    }

    /* if (username.includes("._") || username.includes("_.")) {
        return false;
    } */

    // Checking if domain part not starts with "."
    if (domain[domain.length - 1] === ".") {
        return false;
    }

    // Checking if there is exactly one dot "." after the "@" symbol (in domain part).
    if (domain.split(".").length !== 2) {
        return false;
    }

    // Checking if other than the dot ".", all characters in the domain part must be from the alphabet (no numbers or underscores allowed).
    for (i = 0; i < domain.length; i++) {
        var charDomain = domain[i];

        if (
            (!alphabet.includes(charDomain) && !domain.includes(".")) ||
            numbers.includes(charDomain)
        ) {
            return false;
        }
    }

    return true;
}

console.log(isValidEmail("apple.orange@fruit.com")); // Should return: true
console.log(isValidEmail("sun_rise@day.start")); // Should return: true
console.log(isValidEmail("colorful_days@rainbow.net")); // Should return: true
console.log(isValidEmail("extra@dot@point.com")); // Should return: false
console.log(isValidEmail(".hidden@dot.start")); // Should return: false
console.log(isValidEmail("underscore_.next@to.each")); // Should return: false
console.log(isValidEmail("multi.dot@domain.co.uk")); // Should return: false
console.log(isValidEmail("numbered@address123.com")); // Should return: false
console.log(isValidEmail("exclaim!@shout.com")); // Should return: false
