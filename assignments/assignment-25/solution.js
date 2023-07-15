// 1. Protocol

function isValidProtocol(url) {
    let urlParts = url.split("://");

    if (
        (urlParts.length === 2 && urlParts[0] === "https") ||
        urlParts[0] === "http"
    ) {
        return true;
    } else if (urlParts.length === 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(isValidProtocol("https://example.com"));
// console.log(isValidProtocol("http://example.com"));
// console.log(isValidProtocol("example.com"));

// 2. Subdomain

function isValidSubdomain(url) {
    let urlParts = url.split(".");
    if (urlParts.length === 3 && urlParts[0] === "www") {
        return true;
    } else if (urlParts.length === 2) {
        return true;
    } else {
        return false;
    }
}

// console.log(isValidSubdomain("www.example.com"));
// console.log(isValidSubdomain("www2.example.com"));
// console.log(isValidSubdomain("example.com"));
// console.log(isValidSubdomain("blog.example.com"));

// 3. Domain Name

function isAlphabetic(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (!alphabet.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(isAlphabetic("users"));

function isNumeric(str) {
    let numbers = "0123456789";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!numbers.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(isNumeric("1234"));

// 4. Top-Level Domain (TLD)

function isValidTDL(url) {
    let urlParts = url.split(".");
    let allowedTDLs = "com, io, app, dev, ai, tech, or co";

    return allowedTDLs.includes(urlParts[urlParts.length - 1]);
}

// console.log(isValidTDL("blog.example.ai"));

// 5. Path

function isValidPath(url) {
    let pathPart = url.slice(url.indexOf("/"));
    let pathPartWithoutSlash = pathPart.split("/").join("");

    return (
        isAlphabetic(queryStringsWithoutSymbols) ||
        isNumeric(queryStringsWithoutSymbols)
    );
}

// 6. Query Strings

function isValidQueryStrings(url) {
    let queryStrings = url.slice(url.indexOf("?") + 1);
    let queryStringsWithoutSymbols = queryStrings.split(/[=&]/).join("");

    return (
        isAlphabetic(queryStringsWithoutSymbols) ||
        isNumeric(queryStringsWithoutSymbols)
    );
}
