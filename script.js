const app = document.getElementById("app");

app.innerHTML = `
<div class="login">

    <h1>❤️ Welcome Fatima ❤️</h1>

    <p>Enter our secret password</p>

    <input
        type="password"
        id="password"
        placeholder="Password">

    <button id="enter">
        Enter
    </button>

</div>
`;
const button = document.getElementById("enter");

button.addEventListener("click",()=>{

    const password = document.getElementById("password").value;

    if(password==="20051004"){

        app.innerHTML = `

    

    <div class="loading">

        <div class="heart">❤️</div>

        <h2>Loading...</h2>

    </div>

    `;
     setTimeout(showHome,3000);
    }else{

        alert("Wrong Password!");

    }

});
function showHome(){

    app.innerHTML = `

    <div class="home">
        <div id="petals"></div>
        <h1>Hi, Fatima ❤️</h1>

        <p>You are the best thing that ever happened to me.</p>

        <button id="startBtn">
            Touch To Start
        </button>

    </div>

    `;
    createPetals();
document
.getElementById("startBtn")
.addEventListener("click",startAnimation);
}
function createPetals(){

    const petals = document.getElementById("petals");

    for(let i=0;i<25;i++){

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random()*100 + "%";

        petal.style.animationDelay = Math.random()*8 + "s";

        petal.style.animationDuration = 6 + Math.random()*5 + "s";

        petals.appendChild(petal);

    }

}
function startAnimation(){

    app.classList.add("fade");

    setTimeout(()=>{

        app.innerHTML=`
        <div
      class="bigHeart"id="bigHeart">

            ❤️

        </div>

        `;
setTimeout(explodeHeart,1200);
    },800);

}
function explodeHeart(){

    const heart = document.getElementById("bigHeart");

    for(let i=0;i<60;i++){

        const h=document.createElement("div");

        h.className="miniHeart";

        h.innerHTML="💖";

        h.style.left="50%";

        h.style.top="50%";

        h.style.setProperty("--x",(Math.random()*600-300)+"px");

        h.style.setProperty("--y",(Math.random()*600-300)+"px");

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),2500);

    }
heart.remove();
setTimeout(showLetter,0);
    
   
}

function showLetter(){
app.classList.remove("fade");
    app.innerHTML=`

    <div class="letter">

        <h1>Dear Fatima ❤️</h1>

        <p id="typing"></p>

    </div>

    `;

    typeText();

}
const message="Every moment with you makes my life brighter. ❤️";

let index=0;

function typeText(){

    const text=document.getElementById("typing");

    index=0;

    const timer=setInterval(()=>{

        text.innerHTML+=message[index];

        index++;

        if(index>=message.length){

            clearInterval(timer);

        }

    },60);

}
function showGallery(){

    app.innerHTML=`

    <div class="gallery">

        <img src="images/fatima1.jpg">

        <h2>Our Memories ❤️</h2>

        <button id="next">
            Next
        </button>

    </div>

    `;

}