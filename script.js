/* ==========================
   INTRO CINEMATOGRÁFICA
========================== */

const introTitle = document.getElementById("introTitle");
const introText = document.getElementById("introText");

const titleText = "Oi, Gabi.";
const bodyText =
"Existe uma história que eu sempre quis guardar. E ela começa com você.";

let titleIndex = 0;
let bodyIndex = 0;

function typeTitle() {

  if (!introTitle) return;

  if (titleIndex < titleText.length) {
    introTitle.textContent += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 100);
  } else {
    setTimeout(typeBody, 500);
  }
}

function typeBody() {

  if (!introText) return;

  if (bodyIndex < bodyText.length) {
    introText.textContent += bodyText.charAt(bodyIndex);
    bodyIndex++;
    setTimeout(typeBody, 35);
  }
}

typeTitle();

/* ==========================
   PLAYLIST
========================== */

const playlist = [
{
name:"Join Me In Death",
file:"music/Join Me In Death.mp3"
},
{
name:"Song For Isabelle",
file:"music/Pierce The Veil - Song For Isabelle.mp3"
},
{
name:"Floral & Fading",
file:"music/Floral & Fading.mp3"
},
{
name:"Even When I'm Not With You",
file:"music/Pierce The Veil - Even When I'm Not With You.mp3"
},
{
name:"Safe In Your Arms",
file:"music/safe in your arms.mp3"
},
{
name:"The Only Exception",
file:"music/Paramore - The Only Exception.mp3"
},
{
name:"Always",
file:"music/Daniel Caesar - Always.mp3"
},
{
name:"I Love You",
file:"music/Fontaines D.C. - I Love You.mp3"
},
{
name:"Você É Meu Lar",
file:"music/Você é Meu Lar.mp3"
}
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progress = document.getElementById("progress");
const songTitle = document.getElementById("song-title");
const playlistElement = document.getElementById("playlist");
const timeDisplay = document.getElementById("time-display");
const minimizeBtn = document.getElementById("minimizeBtn");
const musicPlayer = document.getElementById("music-player");

function formatTime(secs){
const m = Math.floor(secs/60);
const s = Math.floor(secs%60);
return m+":"+String(s).padStart(2,"0");
}

let currentSong = 0;

function loadSong(index){

audio.src = playlist[index].file;
songTitle.textContent = playlist[index].name;

highlightPlaylist();

}

function playSong(){

audio.play();
playBtn.textContent = "⏸";

}

function pauseSong(){

audio.pause();
playBtn.textContent = "▶";

}

function highlightPlaylist(){

if(!playlistElement) return;

playlistElement
.querySelectorAll("li")
.forEach((item,i)=>{

item.style.background =
i === currentSong
? "#5f2fa3"
: "transparent";

});

}

if(playlistElement){

playlist.forEach((song,index)=>{

const li =
document.createElement("li");

li.textContent = "🎵 " + song.name;

li.addEventListener("click",()=>{

currentSong = index;

loadSong(currentSong);
playSong();

});

playlistElement.appendChild(li);

});

}

loadSong(currentSong);

playBtn.addEventListener("click",()=>{

if(audio.paused){

playSong();

}else{

pauseSong();

}

});

nextBtn.addEventListener("click",()=>{

currentSong++;

if(currentSong >= playlist.length){

currentSong = 0;

}

loadSong(currentSong);
playSong();

});

prevBtn.addEventListener("click",()=>{

currentSong--;

if(currentSong < 0){

currentSong = playlist.length - 1;

}

loadSong(currentSong);
playSong();

});

audio.addEventListener("ended",()=>{

currentSong++;

if(currentSong >= playlist.length){

currentSong = 0;

}

loadSong(currentSong);
playSong();

});

audio.addEventListener("timeupdate",()=>{

if(audio.duration){

progress.value =
(audio.currentTime/audio.duration)*100;

if(timeDisplay){
timeDisplay.textContent =
formatTime(audio.currentTime)+" / "+formatTime(audio.duration);
}

}

});

progress.addEventListener("input",()=>{

if(audio.duration){

audio.currentTime =
(progress.value/100)*audio.duration;

}

});

if(minimizeBtn && musicPlayer){

minimizeBtn.addEventListener("click",()=>{

musicPlayer.classList.toggle("minimized");

minimizeBtn.textContent =
musicPlayer.classList.contains("minimized")
? "+"
: "−";

});

}

/* ==========================
   BOTÃO ENTRAR
========================== */

const startExperience =
document.getElementById("startExperience");

if(startExperience){

startExperience.addEventListener("click",()=>{

document.querySelector(".hero")
.scrollIntoView({
behavior:"smooth"
});

playSong();

});

}

/* ==========================
   CONTADORES
========================== */

const conheceu =
new Date("2024-07-15");

const declaracao =
new Date("2025-12-10");

function updateCounters(){

const now = new Date();

const known =
Math.floor(
(now-conheceu)/(1000*60*60*24)
);

const declaration =
Math.floor(
(now-declaracao)/(1000*60*60*24)
);

const knownDays =
document.getElementById("knownDays");

const loveDays =
document.getElementById("loveDays");

if(knownDays){

knownDays.textContent =
known + " dias";

}

if(loveDays){

loveDays.textContent =
declaration + " dias";

}

}

updateCounters();

/* ==========================
   ENVELOPES
========================== */

document
.querySelectorAll(".envelope")
.forEach(envelope=>{

const content =
envelope.querySelector(".letter-content");

if(content){

content.style.display = "none";

}

envelope.addEventListener("click",()=>{

if(content.style.display === "none"){

content.style.display = "block";

}else{

content.style.display = "none";

}

});

});

/* ==========================
   CONSTELAÇÃO
========================== */

const messages = [

"Reze me lembra uma parte única de você.",
"Valorant me faz lembrar das horas jogando.",
"Romeu sempre me lembra das histórias que você conta.",
"Amora é impossível não associar a você.",
"Pierce The Veil virou parte das lembranças.",
"Stardew Valley sempre parece ter um pouco de você."

];

document
.querySelectorAll(".star-card")
.forEach((card,index)=>{

card.addEventListener("click",()=>{

alert(messages[index]);

});

});

/* ==========================
   CORAÇÕES
========================== */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "💜";

heart.style.position = "fixed";

heart.style.left =
Math.random()*window.innerWidth+"px";

heart.style.bottom = "-50px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity = ".5";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

let pos = -50;

const interval = setInterval(()=>{

pos += 2;

heart.style.bottom =
pos + "px";

if(pos > window.innerHeight){

heart.remove();
clearInterval(interval);

}

},30);

}

setInterval(createHeart,2500);

/* ==========================
   PÉTALAS
========================== */

function createPetal(){

const petal =
document.createElement("div");

petal.innerHTML = "🌹";

petal.style.position="fixed";

petal.style.left=
Math.random()*window.innerWidth+"px";

petal.style.top="-40px";

petal.style.fontSize=
(Math.random()*12+14)+"px";

petal.style.opacity=".4";

document.body.appendChild(petal);

let y = -40;

const interval = setInterval(()=>{

y += 2;

petal.style.top = y + "px";

if(y > window.innerHeight){

petal.remove();
clearInterval(interval);

}

},25);

}

setInterval(createPetal,1800);

/* ==========================
   ESTRELAS CADENTES
========================== */

function createShootingStar(){

const star =
document.createElement("div");

star.style.position="fixed";

star.style.width="3px";
star.style.height="3px";

star.style.background="white";

star.style.boxShadow=
"0 0 10px white";

star.style.left=
window.innerWidth+"px";

star.style.top=
Math.random()*250+"px";

document.body.appendChild(star);

let x = window.innerWidth;
let y = parseFloat(star.style.top);

const interval = setInterval(()=>{

x -= 15;
y += 5;

star.style.left = x + "px";
star.style.top = y + "px";

if(x < -50){

star.remove();
clearInterval(interval);

}

},16);

}

setInterval(createShootingStar,10000);

/* ==========================
   ANIMAÇÃO DAS SEÇÕES
========================== */

const sections =
document.querySelectorAll(".section");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(
[
{
opacity:0,
transform:"translateY(50px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],
{
duration:1000,
fill:"forwards"
}
);

}

});

});

sections.forEach(section=>{

section.style.opacity = "0";
observer.observe(section);

});