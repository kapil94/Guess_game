var guess,random;
var initial_score=Number(document.querySelector('span[class="score"]').textContent);
var highscore=Number(document.querySelector('span[class="HighScore"]').textContent);

document.addEventListener("DOMContentLoaded",function(){

    random=Math.floor(Math.random()*(20)+1);
    console.log(random);
});


document.querySelector('.check').addEventListener('click',function(){
    
    
    guess=document.querySelector('input[class="guess"]').value;
    
    if(Number(guess)==random)
    {
        var victory=document.querySelector("body");
        victory.classList.add("victory_color");
        
        if(highscore<initial_score)
        {
            highscore=initial_score;
            document.querySelector('span[class="HighScore"]').textContent=highscore;
        }
        document.querySelector("h2").textContent="🍻 Correct Guess!!";
        document.querySelector("div[class='answer']").textContent=document.getElementById("Guess").value;
        var elem=document.getElementById("Answer");
        elem.style.paddingTop="5%";
        
    
    }
    else if(guess==""){
        
        
        document.querySelector("h2").textContent="⛔ No Number!";
    }
    else{


        if(initial_score!=0)
        {
            var victory=document.querySelector("body");
            victory.classList.remove("victory_color");
            document.getElementById("Answer").innerHTML='<i class="fas fa-question fa-5x"></i>';

            initial_score=initial_score-1;
            document.querySelector('span[class="score"]').textContent=initial_score;
            document.querySelector("h2").textContent="Keep Guessing.. 🤔";
            var elem=document.getElementById("Answer");
            elem.style.paddingTop="0%";
        }
        else{
            
            document.getElementById("Guess").disabled=true;
            document.getElementById("Answer").innerHTML='<i class="fas fa-question fa-5x"></i>';
            var elem=document.getElementById("Answer");
            elem.style.paddingTop="0%";
            document.querySelector("h2").textContent="You lost the game   😢";

        }


    }
});

document.querySelector('.reset').addEventListener('click',function(){


    if(document.getElementById("Guess").disabled=true)
    {
        document.getElementById("Guess").disabled=false;
    }
    initial_score=20;
    var elem=document.getElementById("Answer");
    elem.style.paddingTop="0%";
    
    document.querySelector("span[class='score']").textContent=initial_score;
    highscore=0;
    document.querySelector("span[class='HighScore']").textContent=highscore;
    document.querySelector("h2[class='result']").textContent="Keep Guessing.. 🤔";
    document.getElementById("Guess").value="";
    var victory=document.querySelector("body");
    victory.classList.remove("victory_color");
    document.getElementById("Answer").innerHTML='<i class="fas fa-question fa-5x"></i>';
    location.reload();

});