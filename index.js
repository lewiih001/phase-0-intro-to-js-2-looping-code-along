// Code your solutions in this 
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
function writeCards(names,ceremony){
let message = []
for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${ceremony} gift!`);
  }
  return message;

}

function countDown(number){
    let i = number;
    while(i>-1){
        console.log(i--);
    }
}countDown(10);