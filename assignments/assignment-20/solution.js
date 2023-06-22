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
    var emailparts = email.split("@");
    var username = emailparts[0];
    var domain = emailparts[1];

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var allowedChars = "._";

    // Checking if @ is only 1
    if (emailparts.length !== 2) {
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

        if (
            !alphabet.includes(charUsername.toLowerCase()) &&
            !numbers.includes(charUsername) &&
            !allowedChars.includes(charUsername)
        ) {
            return false;
        }
    }

    // Checking if underscore and dot are not immediately adjacent to each other.

    for (var i = 0; i < username.length - 1; i++) {
        var currentChar = username[i];
        var nextChar = username[i + 1];
        if (
            allowedChars.includes(currentChar) &&
            allowedChars.includes(nextChar)
        ) {
            return false;
        }
    }

    // Checking if domain part not starts or ends with "."
    if (domain[0] === "." || domain[domain.length - 1] === ".") {
        return false;
    }

    // Checking if there is exactly one dot "." after the "@" symbol (in domain part).
    var domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }

    // Checking the length of the domain name and the extension. The domain name must be at least one character long, and the extension must be between two and three characters long
    if (
        domainParts[0].length < 1 ||
        domainParts[1].length < 2 ||
        domainParts[1].length > 3
    ) {
        return false;
    }

    // Checking if other than the dot ".", all characters in the domain part must be from the alphabet (no numbers or underscores allowed)

    var domainPartWithoutDot = domainParts.join("");
    for (var i = 0; i < domainPartWithoutDot.length; i++) {
        var char = domainPartWithoutDot[i];
        if (!alphabet.includes(char.toLowerCase())) {
            return false;
        }
    }

    return true;
}

console.log(isValidEmail("apple.orange@fruit.com")); // Should return: true
console.log(isValidEmail("sun_rise@day.stt")); // Should return: true
console.log(isValidEmail("colorful_days@rainbow.net")); // Should return: true
console.log(isValidEmail("extra@dot@point.com")); // Should return: false
console.log(isValidEmail(".hidden@dot.start")); // Should return: false
console.log(isValidEmail("underscore_.next@to.each")); // Should return: false
console.log(isValidEmail("multi.dot@domain.co.uk")); // Should return: false
console.log(isValidEmail("numbered@address123.com")); // Should return: false
console.log(isValidEmail("exclaim!@shout.com")); // Should return: false
console.log(isValidEmail("exclaim!@.shout.com")); // Should return: false

// Regular and valid email
console.log(isValidEmail("john.doe@example.com") === true); // Should print: true

// Valid email with numbers in username
console.log(isValidEmail("john2.doe3@example.com") === true); // Should print: true

// Valid email with underscore in username
console.log(isValidEmail("john_doe@example.com") === true); // Should print: true

// Valid email with capital letters
console.log(isValidEmail("John.Doe@Example.com") === true); // Should print: true

// Test for an email with three-letter domain extension
console.log(isValidEmail("john.doe@example.net") === true); // Should print: true

// Test for an email with two-letter domain extension
console.log(isValidEmail("john.doe@example.co") === true); // Should print: true
// Test for an email with one letter domain name
console.log(isValidEmail("john@d.com") === true); // Should print: true

// Test for an email with no "@" symbol:
console.log(isValidEmail("johndoexample.com") === false); // Should print: true

// Test for an email with multiple "@" symbols:
console.log(isValidEmail("john@doe@example.com") === false); // Should print: true

// Test for an email where username starts or ends with a dot or an underscore:
console.log(isValidEmail(".john@doe.com") === false); // Should print: true
console.log(isValidEmail("john.@doe.com") === false); // Should print: true
console.log(isValidEmail("_john@doe.com") === false); // Should print: true
console.log(isValidEmail("john_@doe.com") === false); // Should print: true

// Test for an email where username has adjacent dots or underscores:
console.log(isValidEmail("john..doe@example.com") === false); // Should print: true
console.log(isValidEmail("john__doe@example.com") === false); // Should print: true
console.log(isValidEmail("john._doe@example.com") === false); // Should print: true
console.log(isValidEmail("john_.doe@example.com") === false); // Should print: true

// Test for an email where domain does not have exactly one "." character:
console.log(isValidEmail("john@doecom") === false); // Should print: true
console.log(isValidEmail("john@doe.com.com") === false); // Should print: true

// Test for an email where domain name or extension is not of valid length:
console.log(isValidEmail("john@doe.c") === false); // Should print: true
console.log(isValidEmail("john@doe.comm") === false); // Should print: true

// Test for an email where domain name or extension contains invalid characters:
console.log(isValidEmail("john@do3.com") === false); // Should print: true
console.log(isValidEmail("john@doe.c_m") === false); // Should print: true
