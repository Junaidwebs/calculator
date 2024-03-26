let string = "";
let buttons = document.querySelectorAll(".number");
let ac = document.querySelector("#allclear");
let c = document.querySelector("#clear");

buttons.forEach((button) =>{
    button.addEventListener("click" ,(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            console.log(button)
            document.querySelector('input').value = string;

        }
        else{
            console.log("clicked");
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})
ac.addEventListener("click" , ()=>{
    string = ""
    document.querySelector('input').value = string;
})
c.addEventListener("click" , ()=>{
    string = string.substring (0,string.length-1);
    document.querySelector('input').value = string;
})