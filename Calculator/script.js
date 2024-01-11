const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['/','*','-','+','=','%'];

let output = '';
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (btnValue)=>{
        if(btnValue.target.innerHTML == '='){
          output = eval(output.replace('%', '/100'));
          display.value = output;
        }

        else if (btnValue.target.innerHTML == 'AC'){
            output = '';
            display.value = output;
        }
        else if(btnValue.target.innerHTML == 'DEL'){
            output = output.slice(0, -1);
            display.value = output;

        }

        else {
            output += btnValue.target.innerHTML;
            display.value = output;
        }
    })
})