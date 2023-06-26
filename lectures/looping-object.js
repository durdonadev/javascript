let hotel = {
    name: "Grand Hotel",
    city: "Paris",
    rooms: 100,
    hasPool: true,
    hasGym: false
};

let description = "";

for (let key in hotel) {
    description += `The hotel's ${key} is ${hotel[key]}. `;
}

console.log(description);
