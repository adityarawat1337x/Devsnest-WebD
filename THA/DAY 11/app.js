let quizes = [
    {
        question:"He is known as ______ of the Sharingan.",
        solution:"Kakashi",
        options:["Itachi","Sasuke","Kakashi","Shisui"], 
    },
    {
        question:"What is the name of 9 Tails?",
        solution:"Kurama",
        options:["Shikaku","Son Goku","Gyuki","Kurama"],
    },
    {
        question:"Most powerful jutsu of Naruto?",
        solution:"Rasen-Shuriken",
        options:["Shadow Clone","Rasengan","Rasen-Shuriken","Gale Palm"],
    },
    {
        question:"Amaterasu is used by ________ ?",
        solution:"Sasuke",
        options:["Sasuke","Might Guy","Kakashi","Sarada"],
    },
    {
        question:"Killer Bee is jinjuriki of _______ ?",
        solution:"8 Tails",
        options:["2 Tails","8 Tails","3 Tails","6 Tails"],
    },

]

let i=0,score=0;
remake(i);
i+=1;

const next = document.getElementById("next");
    next.addEventListener("click",()=>{
        if(i==4){
            next.disabled = true;
        }
        remake(i);
        i+=1;
    });


function end(){
    const cont = document.querySelector(".container")
    cont.innerHTML = `<h1>Your Score is ${score}</h1>`;    
}

function remake(i){
    let quiz = quizes[i];
    
    const form = document.querySelector(".form")
    form.innerHTML = "";
    
    const que = document.createElement("h2");
    que.innerHTML = "Q. "+quiz.question;
    que.classList.add("que");
    form.appendChild(que)
    
    quiz.options.forEach(ans=>{
        
        const opt = document.createElement("span");
        opt.innerHTML = ans;
        form.appendChild(opt);
        
        const btn = document.createElement("button");
        btn.innerHTML = "SELECT ANSWER";
        btn.id = ans;
        btn.classList.add("select")
        form.appendChild(btn);
        
        btn.addEventListener("click",(e)=>{
            if(btn.id == quiz.solution){
                btn.classList.add("correct");
                btn.innerHTML = "RIGHT ANSWER";
                score+=1;
            }
            else{
                btn.classList.add("incorrect");
                btn.innerHTML = "WRONG ANSWER";
                
            }
            document.querySelectorAll(".select").forEach(bt=>bt.disabled = true);
            if(i==4){
                setTimeout(() => {
                    end();
                }, 1000); 
            }
        })
    })

    const which = document.createElement("span")
    which.innerHTML = `Question ${i+1} of 5`;
    form.appendChild(which)
}