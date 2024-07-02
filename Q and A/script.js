const database = {
    1 : {
        Question : "What is the capital city of France?",
        Options : ["London ","Paris","Rome", "Berlin"],
        Answer : "Paris"
    },
    2 : {
        Question : "Which planet is known as the Red Planet?",
        Options : ["Venus" , "Mars", "Jupiter", "Saturn"],
        Answer : "Mars"
    },
    3 : {
        Question : "What is the chemical symbol for water?",
        Options : ["Wo","H2O","Wa","Hy"],
        Answer : "H2O"
    },
    4 : {
        Question : "How many sides does a triangle have?",
        Options : ["3","4","5","6"],
        Answer : "3"
    },
    5 : {
        Question : "Who is known as the father of modern physics?",
        Options : ["Isaac Newton","Galileo Galilei","Albert Einstein","Nikola Tesla"],
        Answer : "Albert Einstein"
    },
    6 : {
        Question : "What is the closest star to Earth?",
        Options : ["Sirius","Proxima Centauri","Betelgeuse","Alpha Centauri"],
        Answer : "Proxima Centauri"
    },
    7 : {
        Question : "How many continents are there on Earth?",
        Options : ["4","5","6","7"],
        Answer : "7"
    },
    8 : {
        Question : "What is the chemical symbol for gold?",
        Options : ["Go","Ag","Au","G"],
        Answer : "Au"
    },
    9 : {
        Question : "What is the square root of 64?",
        Options : ["6","7","8","9"],
        Answer : "8"
    },
    10 : {
        Question : "Which planet is the largest in our solar system?",
        Options : ["Earth","Jupiter","Saturn","Mars"],
        Answer : "Jupiter"
    }
}

const emojis = ["Good.png","sad.png","okay.png"];
let questionNo = 1;
let correct = 0;
let totalQuestions = Object.keys(database).length;
let timeLeft = 10;
let timerId;
let check = false;

function startgame(){
    let element = document.getElementById("start-btn");
    if (element) {
        element.remove();
    }
    Timer();
    Display();
}

function Timer() {
    timeLeft = 10;
    let elem = document.getElementById("Timer");
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearInterval(timerId);
            submit();
        } else if(timeLeft == 6 && check == true){
            let elem2 = document.getElementById("msg");
            elem2.innerHTML = "";
            check = false;
        } else{
            elem.innerHTML = 'Timer: <span id="time">'+timeLeft + '</span> seconds remaining';
            timeLeft--;
        }
    }
}

function Display(){
    if(questionNo <= totalQuestions){
        let Q = database[questionNo].Question;
        let Opts = database[questionNo].Options;
        
        let qNo = document.createElement("h4");
        qNo.textContent = "Question No is: " + questionNo;
        document.getElementById("questions").appendChild(qNo);
        let h4 = document.createElement("h4");
        h4.textContent = Q;
        document.getElementById("questions").appendChild(h4);
        for (let i = 0; i < Opts.length ; i++)
        {
            let list = document.createElement("li");
            list.innerHTML = "<label><input type="+"radio" +" name="+"question"+ questionNo +" value="+(i)+" id='radio-"+(i)+"'/><span>"+Opts[i]+"</span></label>";
            document.getElementById("questions").appendChild(list);
        }

        let btn =  document.createElement("button");
        btn.id = "submit-btn";
        btn.textContent = "Submit";
        btn.onclick = submit;
        document.getElementById("questions").appendChild(btn);
    }
    else{
        var element = document.getElementById("questions"); 
        element.innerHTML = "";
        let total_questions = Object.keys(database).length;
        let _percentage = (correct/total_questions) * 100;
        let image = document.createElement("img");
        if(_percentage < 50){
            image.src = emojis[1];
        }else if(_percentage >=50 && _percentage < 80){
            image.src = emojis[2];
        }else{
            image.src = emojis[0];
        }
        document.getElementById("questions").appendChild(image);

        let list = document.createElement("li");
        list.id = "result";
        list.innerHTML = "<span id='Qs'>Total Questions : "+totalQuestions+"</span><br><span id='percent'> Your Progress : "+_percentage+"%</span><br><span id='correct'> Correct Answers : "+correct+"</span><br><span id='wrong'> Wrong Answers : "+(totalQuestions-correct)+"</span>";
        document.getElementById("questions").appendChild(list);

        timeLeft = 0;
        let elem = document.getElementById("Timer");
        elem.innerHTML = "";
    }
    
}

function submit(){
    check = false;
    for (let i = 0 ; i < 4 ;i++)
    {
        let radio = document.getElementById("radio-"+i);
        if(radio.checked){
            Timer();
            
            var element = document.getElementById("questions"); 
            element.innerHTML = "";
            let A = database[questionNo].Answer;
            let Opts = database[questionNo].Options;
            console.log(A);
            console.log(Opts[i]);
            if( A === Opts[i])
            {
                correct++;
                console.log(correct);
            }
            questionNo = questionNo + 1;
            i=4;
            Display();
        }
        else if(timeLeft == 0)
        {
            Timer();
            var element = document.getElementById("questions"); 
            element.innerHTML = "";

            check = true;
            let message = document.createElement("h5");
            message.id = "msg";
            message.textContent = "Time Over, Next Question!!";
            document.getElementById("questions").appendChild(message);
            
            
            questionNo = questionNo + 1;
            i=4;
            Display();
        }
    }
}