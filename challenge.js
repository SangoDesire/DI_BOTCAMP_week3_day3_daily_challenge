//Create an input type text that takes/shows only letters. 
//(ie.numbers and special characters won’t be accepted)
let inputvalue = document.getElementById("entertexte");

let regex = /[a-zA-Z]/

inputvalue.addEventListener("input", function(event) {

    let enter = event.target.value;

    let end = "" + enter.charAt(enter.length - 1)

    if (end.search(regex) == -1) {

        event.target.value = enter.replace(end,  "")

            
    } 
})