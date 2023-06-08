// Generate a random number of seconds between 0 and 86400.
var randomNumber = Math.floor(Math.random() * 86400);
console.log("Random seconds:", randomNumber);

// Calculate hours, minutes, and seconds.
var totalSeconds = randomNumber;
var hours = Math.floor(totalSeconds / 3600);
var remainingSeconds = totalSeconds % 3600;
var minutes = Math.floor(remainingSeconds / 60);
seconds = remainingSeconds % 60;

// Format hours, minutes, and seconds to have two digits.
var formattedHours = hours,
    formattedMinutes = minutes,
    formattedSeconds = seconds;
if (hours < 10) {
    formattedHours = "0" + hours;
}

if (minutes < 10) {
    formattedMinutes = "0" + minutes;
}

if (seconds < 10) {
    formattedSeconds = "0" + seconds;
}
console.log(
    `Time in 24 hours: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`
);

// Convert hours to AM/PM.
var amPmHours;
if (hours > 12) {
    amPmHours = hours - 12;
    if (amPmHours < 10) {
        amPmHours = "0" + amPmHours;
    }
    console.log(
        `Time in AM/PM: ${amPmHours}:${formattedMinutes}:${formattedSeconds} PM`
    );
} else if (hours === 12) {
    console.log(
        `Time in AM/PM: ${formattedHours}:${formattedMinutes}:${formattedSeconds} PM`
    );
} else {
    console.log(
        `Time in AM/PM: ${formattedHours}:${formattedMinutes}:${formattedSeconds} AM`
    );
}

// Print a greeting based on the hour.
if (hours >= 5 && hours < 12) {
    console.log("Good Morning!");
} else if (hours >= 12 && hours < 17) {
    console.log("Good Afternoon!");
} else if (hours >= 17 && hours < 20) {
    console.log("Good Evening!");
} else {
    console.log("Good Night!");
}
