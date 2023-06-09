// Comparison Operators

console.log(5 == "5"); // true, because after type coercion, 2 and "2" are equivalent ==> true.
console.log(5 === "5"); // false, because the number 5 is strictly equal to the string "5" ==> false.
console.log(5 != "5"); // false, because because after type coercion, 5 and "5" are not equivalent ==> false.
console.log(5 !== "5"); // true, because number 5 and string "5" are not strictly equivalent ==> true.
console.log(5 > 3); // true, because 5 is greater than 3 ==> true.
console.log(5 < 3); // false, because 5 is less than 3 ==> false.
console.log(5 >= 5); // true, because 5 is greater than or equal to 5 ==> true.
console.log(5 <= 6); // true, because 5 is less than or equal to 6 ==> true.

// Logical Operators

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log((true && false) || true); // true
console.log((!false && true) || false); // true

// Combining Logical and Comparison Operators

console.log(5 > 3 && 2 == "2"); // true, because (5 is greater than 3 ==> true) and (after type coercion, 2 and "2" are equivalent ==> true).
console.log(5 !== "5" && 6 <= 10); //  true, because ( number 5 and string "5" are not strictly equivalent==> true) and (6 is less than or equal to 10 ==> true).
console.log(3 === "3" || 7 > 10); // false, because (the number 3 is strictly equal to the string "3" ==> false) or (7 is greater than 10 ==> false).
console.log(4 < 2 || 3 !== "3"); // true, because (4 is less than 2 ==> false) or (number 3 and string "3" are not strictly equivalent ==> true).
console.log(!(5 > 3 && 2 == "2")); // false, because not true (!(5 is greater than 3 ==> true) and (after type coercion, 2 and "2" are equivalent ==> true)).
console.log(!(3 === "3" || 7 > 10)); // true, because not false (!(the number 3 is strictly equal to the string "3" ==> false) or (7 is greater than 10 ==> false)).
console.log((5 > 3 && !(2 === "2")) || 4 !== "4"); // true, because true and true or true (5 is greater than 3 ==> true) and (!the number 2 is strictly equal to the string "2" ==> !false ==> true) or (number 4 and string "4" are not strictly equivalent ==> true).
console.log(7 >= "7" || (!(9 < 11) && 2 !== "2")); // true, because true or false (after type coercion 7 is greater than or equal to 7 ==> true) OR ((!9 is less than 11 ==> !true ==> false) and (number 2 and string "2" are not strictly equivalent ==> true) ==> false and true ==> false).

// More Complex Examples

console.log(5 > 3 && 2 == "2" && 7 < 10); // true, because true and true and true (5 is greater than 3 ==> true) and (after type coercion 2 and "2" are equivalent ==> true) and (7 is less than 10 ==> true).
console.log(5 !== "5" && 6 <= 10 && 2 === 2); // true, because true and true and true ( number 5 and string "5" are not strictly equivalent ==> true) and ( 6 is les than or equal to 10 ==> true) and (2 is strictly equal to 2 ==> true).
console.log(3 === "3" || 7 > 10 || 4 !== 4); // false, because false or false or false (the number 3 is strictly equal to the string "3" ==> false) or (7 is greater than 10 ==> false) or (4 is not strictly equal to 4 ==> false).
console.log(4 < 2 || 3 !== "3" || 5 == "5"); // true, because false or true or true (4 is less than 2 ==> false) or (number 3 and string "3" are not strictly equivalent ==> true) or (after type coercion, 5 and "5" are equivalent ==> true).
console.log(!((5 > 3 && 2 == "2") || 9 === "9")); // false, because not true !((5 is greater than 3 ==> true) and (after type coercion, 2 and "2" are equivalent ==> true) ==> true) or (the number 9 is strictly equal to the string "9" ==> false).
console.log(!(3 === "3" || (7 > 10 && 5 !== 5))); // true, because not false !(the number 3 is strictly equal to the string "3" ==> false) or ((7 is greater than 10 ==> true) and (5 is not strictly equal to 5 ==> false) ==> false).
console.log((5 > 3 && !(2 === "2")) || (4 !== "4" && 7 < 8)); // true, because false OR true ((5 is greater than 3 ==> true) and (! after type coercion 2 and "2" are equivalent ==> !true ==> false) ==> true and false ==> false) OR ((number 4 and string "4" are not strictly equivalent ==> true) and (7 is less than 8 ==> true) ==> true and true ==> true).
console.log(7 >= "7" || (!(9 < 11) && 2 !== "2") || 3 == "3"); // true, because true or false or true (7 is greater than or equal to 7 ==> true) OR ((! 9 is less than 11 ==> !true ==> false) and (number 2 and string "2" are not strictly equivalent ==> true) ==> false and true ==> false) or (after type coercion, 3 and "3" are equivalent ==> true).
