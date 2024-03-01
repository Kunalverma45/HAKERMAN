// let hacker1 = prompt("what is the driver's name?");
// console.log(`The driver's name is ${hacker1}`);
// let hacker2 = prompt("what is the navigator's name?");
// console.log(`The navigator's name is ${hacker2}`);
// if (hacker1.length > hacker2.length) {
//   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
// } else if (hacker1.length < hacker2.length) {
//   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
// } else {
//   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
// }







let naam = prompt("Enter your name.");
let Number = prompt("Enter your Contact Number.");
let a = ["Initializing The Hacking Technology......","Name Fetched -"+ naam," Contact no. Fetched - "+ Number, 
          "Connecting to GMail......","Fetching All Passwords from Mail_Id", "Connecting to server 1", "Connection failed.......!!!"," ", "Retrying Fetching.........", "Connecting to server 2", "Connected successfully..........", "Users INSTAGRAM-ID Fetched."," ", "Trying brute force......", "200k passwords tried...", "Match not found!!!"," ", "Another 200k passwords tried...", "MATCH FOUNDED......", "Accessing account","Done Target xxxxxx0001 ","Done Target xxxxxx0002 ", "Done Target xxxxxx0003 ","Utilization Done Target. ","Task setting Fetching....... ","Task retriving....... ","FETCHING ALL DETAILS DONE - All done dana done....... "," ","HACKING Done Successfully of user :"+naam+ "- Be Aware TASK COMPLETED."];


let sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 300)
  })
}
const showHack = async (message) => {
  await sleep(2)
  // console.log(message)
  text.innerHTML = text.innerHTML + message + "<br>"
}
(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i])
  }
})()
