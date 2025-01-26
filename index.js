const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let answer1 = document.querySelector("#answer-1")
let answer2 = document.querySelector("#answer-2")

let answer = [answer1, answer2]
let password_length = 0
let random_char = 0

function generatePassword() {
    answer1.textContent = ""
    answer2.textContent = ""
    
    for (let i = 0; i < answer.length; i++){
        password_length = Math.floor(Math.random() * 5 + 15)
        for (let j = 0; j < password_length; j++) {
            random_char = Math.floor(Math.random() * 91)
            answer[i].textContent += characters[random_char]
        }
    }
}




