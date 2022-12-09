var mensaje = document.getElementById('resultado');
var resultado;

/* First evaluation window
    Get the value 
*/
function evaluation(value) {
    resultado = value;  
    var button1 = document.querySelector('.btns .btn-1');
    var button2 = document.querySelector('.btns .btn-2');
    var button3 = document.querySelector('.btns .btn-3');
    var button4 = document.querySelector('.btns .btn-4');
    var button5 = document.querySelector('.btns .btn-5');
    var unmarkedButtons = [button1, button2, button3, button4, button5];

    // Change the style 

    function unmark() {
        unmarkedButtons.forEach(button => {
        
                button.style.backgroundColor = 'hsl(213, 17%, 27%, 40%)';
                button.style.color = 'hsl(216, 12%, 54%)';
        }); 
    };

    if (resultado == '1') {
        unmark();
        button1.style.backgroundColor = 'hsl(216, 12%, 54%)';
        button1.style.color = 'hsl(0, 0%, 100%)';
    } else if (resultado == '2') {
        unmark();
        button2.style.backgroundColor = 'hsl(216, 12%, 54%)';
        button2.style.color = 'hsl(0, 0%, 100%)';
    } else if (resultado == '3') {
        unmark();
        button3.style.backgroundColor = 'hsl(216, 12%, 54%)';
        button3.style.color = 'hsl(0, 0%, 100%)';
    } else if (resultado == '4') {
        unmark();
        button4.style.backgroundColor = 'hsl(216, 12%, 54%)';
        button4.style.color = 'hsl(0, 0%, 100%)';
    } else if (resultado == '5') {
        unmark();
        button5.style.backgroundColor = 'hsl(216, 12%, 54%)';
        button5.style.color = 'hsl(0, 0%, 100%)';
    }

    
};

/* After submiting

    Hide the first window and show the submitted result
*/

function submiting() {
    document.getElementById('evaluationScreen').classList.toggle("hide");
    const afterSubmiting = document.querySelector('.afterSubmiting');
    afterSubmiting.style.display="block";
    
    let mesage = document.getElementById('mesage');
    mesage.innerHTML = "You selected " + resultado + " out of 5";
};
