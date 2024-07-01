function addInDisplay(num){
    let text = document.getElementById("display").innerHTML;
    if (text === undefined){
        text ="";
    }
    text = text + num;
    document.getElementById("display").innerHTML = text;
}

function Clear(){
    document.getElementById("display").innerHTML = "";
}

const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
};


function myfunction(){
    let operators = [] , Numbers = [], count_number=0;
    Numbers.push("");
    operators.push("");
    let text = document.getElementById("display").innerHTML;
    for(let i = 0 ; i < text.length ;i++){
        if(text[i] === "+" || text[i] === "-" || text[i] === "*" || text[i] === "/" || text[i]=== "%"){
            operators[(operators.length)-1] = text[i];
            operators.push("");
            Numbers.push("");
        }
        else if(text[i] === "."){
            Numbers[(Numbers.length)-1] += text[i];
        }
        else{
            Numbers[(Numbers.length)-1] += text[i];
            Numbers[(Numbers.length)-1] = Number(Numbers[(Numbers.length)-1]);
        }
    }

    for(let i = 0; i < Numbers.length ;i++){
        if(Numbers[i] != "" || Numbers[i] === 0){
            count_number++;
        }
    }
    console.log(Numbers);
    console.log(operators);
    if(count_number == 1)
    {
        answer = Numbers[0];
    }
    if(count_number === ((operators.length)-1) || (((operators.length)-1)==1 && count_number==0))
    {
        alert("Error");
    }
    else{
        let firstNumber,secondNumber,op;
        for (let i = 0; i < operators.length ; i++){
            if((precedence[operators[i]] > precedence[operators[i+1]]) || (operators[i+1] == "" && precedence[operators[i]]==2))
            {
                op = String(operators.splice(i,1));
                firstNumber = Number(Numbers.splice(i,1));
                secondNumber = Number(Numbers.splice(i,1));
                if(op === "+"){
                    answer = firstNumber + secondNumber;
                    Numbers.splice(i,0,answer);
                }
                else if(op === "*"){
                    answer = firstNumber * secondNumber;
                    Numbers.splice(i,0,answer);
                }
                else if(op === "/"){
                    answer = firstNumber / secondNumber;
                    Numbers.splice(i,0,answer);
                }
                else if(op === "-"){
                    answer = firstNumber - secondNumber;
                    Numbers.splice(i,0,answer);
                }
                else if(op === "%"){
                    if(firstNumber === 0){
                        answer = secondNumber;
                    }
                    else{
                        answer = firstNumber % secondNumber;
                    }
                    Numbers.unshift(answer);
                }
                i=0;
            }
        }
        for (let i = 0 ; i < Numbers.length ; i++)
        {
            op = String(operators.shift());
            firstNumber = Number(Numbers.shift());
            secondNumber = Number(Numbers.shift());
            if(op === "+"){
                answer = firstNumber + secondNumber;
                Numbers.unshift(answer);
            }
            else if(op === "*"){
                answer = firstNumber * secondNumber;
                Numbers.unshift(answer);
            }
            else if(op === "/"){
                answer = firstNumber / secondNumber;
                Numbers.unshift(answer);
            }
            else if(op === "-"){
                answer = firstNumber - secondNumber;
                Numbers.unshift(answer);
            }
            else if(op === "%"){
                if(firstNumber === 0){
                    answer = secondNumber;
                }
                else{
                    answer = firstNumber % secondNumber;
                }
                Numbers.unshift(answer);
            }
        }
        document.getElementById("display").innerText = answer;
    }
}

function hasHigherPrecedence(operators) {
    const result = [];
    for (let i = 0; i < operators.length - 1; i++) {
        const currentOp = operators[i];
        const nextOp = operators[i + 1];
        if (precedence[nextOp] > precedence[currentOp]) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
}

function back(){
    let tempText = "";
    let text = document.getElementById("display").innerText;
    for ( let i =0 ;i < text.length-1 ;i++)
    {
        tempText += text[i];
    }
    document.getElementById("display").innerText = tempText;
}