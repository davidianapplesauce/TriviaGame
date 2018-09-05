function submitAnswers () {
    var total = 5;
    var score = 0;


    //User answer
    var q1 = document.forms["quizForm"]["question1"].value;
    var q2 = document.forms["quizForm"]["question2"].value;
    var q3 = document.forms["quizForm"]["question3"].value;
    var q4 = document.forms["quizForm"]["question4"].value;
    var q5 = document.forms["quizForm"]["question5"].value;


//question validation
    

    for (i = 1; i<=total; i++) {
        if(eval("q" + i) == null || eval("q" + i) == ""){
            alert("You missed Question " + i);
            return false;
        }
    }

//Answers
var answers = ["b","a","b","c","a"];
//correct answers
if (q1 == answers[0]){
    score++;
}
if (q2 == answers[1]){
    score++;
}
if (q3 == answers[2]){
    score++;
}
if (q4 == answers[3]){
    score++;
}
if (q5 == answers[4]){
    score++;
}

alert("You scored "+score+" out of "+total);
}
