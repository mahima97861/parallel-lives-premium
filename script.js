const panel = document.getElementById("panel");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const img = document.getElementById("panelImg");

const stat1 = document.getElementById("stat1");
const stat2 = document.getElementById("stat2");
const stat3 = document.getElementById("stat3");

const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 200;

const data = {
 artist:{title:"Artist Life",img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",journey:"Creative freedom & expression.",salary:"Unstable but passionate income.",growth:"High creativity growth.",stats:[90,50,80],graph:[10,30,60,90,100]},
 corporate:{title:"Corporate Life",img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",journey:"Structured professional journey.",salary:"Stable income.",growth:"Moderate growth.",stats:[60,90,50],graph:[20,40,60,80,100]},
 entrepreneur:{title:"Entrepreneur Life",img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",journey:"Risk & innovation.",salary:"High variable income.",growth:"Unlimited scaling.",stats:[95,85,90],graph:[10,40,70,100,120]},
 traveler:{title:"Traveler Life",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",journey:"Freedom & exploration.",salary:"Remote income.",growth:"Experience based growth.",stats:[80,60,95],graph:[10,20,50,80,100]},
 scientist:{title:"Scientist Life",img:"https://visionachievement.uk/wp-content/uploads/2025/01/female-researcher-laboratory-with-test-tubes-male-colleague.webp",journey:"Discovery & innovation.",salary:"Research based income.",growth:"Knowledge expansion.",stats:[85,75,70],graph:[10,30,50,70,100]}
};

let current;

document.querySelectorAll(".content").forEach(el=>{
  el.addEventListener("click",()=>{
    const type = el.dataset.type;
    current = data[type];

    // 🚀 Smooth panel open
    gsap.to(panel, {
      right: "0%",
      duration: 0.6,
      ease: "power3.out"
    });

    title.innerText = current.title;
    img.src = current.img;

    showTab("journey");

    stat1.innerText = current.stats[0];
    stat2.innerText = current.stats[1];
    stat3.innerText = current.stats[2];

    drawGraph(current.graph);
  });
});

function showTab(tab){
  desc.innerText = current[tab];
}

// ❌ Close panel animation
document.getElementById("close").onclick = () => {
  gsap.to(panel, {
    right: "-100%",
    duration: 0.5,
    ease: "power3.in"
  });
};

function drawGraph(values){
  ctx.clearRect(0,0,400,200);
  ctx.beginPath();

  values.forEach((v,i)=>{
    let x = i * 80;
    let y = 200 - v;

    if(i === 0) ctx.moveTo(x,y);
    else ctx.lineTo(x,y);
  });

  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function go(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
