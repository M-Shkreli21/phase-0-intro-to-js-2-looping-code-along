// Code your solutions in this file
/*for(let age = 30; age < 40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i=0;
    while (i < gifts.length) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        i++;
    }

    return gifts;
}

wrapGifts(gifts);
*/
//const names = [];

function writeCards(names, event){
    const messages = []
    for (let i=0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(){
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--)};
};
