const landing = document.getElementById("landing");
const mainSite = document.getElementById("main-site");
const bootSound = document.getElementById("bootSound");
const viewer = document.getElementById("viewer");
const info = document.getElementById("info");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const parts = {
  cpu: { 
    t: "AMD RYZEN 5 7600", 
    d: "6 Cores / 12 Threads • Zen 4 • AM5 Socket Architecture"
  },
  gpu: { 
    t: "AMD RADEON RX 9070 XT", 
    d: "Next‑Gen RDNA Architecture • 16GB VRAM • 4K Performance"
  },
  ram: { 
    t: "CORSAIR VENGEANCE DDR5", 
    d: "High‑Speed DDR5 Memory with Heatspreader"
  },
  mobo: { 
    t: "MSI GAMING PRO SERIES", 
    d: "Gaming Motherboard with PCIe 4.0 and RGB"
  }
};

function start(){
  bootSound.play().catch(() => console.log("Audio requires gesture."));
  landing.style.opacity = "0";
  setTimeout(() => {
    landing.style.display = "none";
    mainSite.style.display = "grid";
    setTimeout(() => mainSite.style.opacity="1", 50);
  }, 800);
}

function goBack(){
  mainSite.style.opacity = "0";
  setTimeout(() => {
    mainSite.style.display="none";
    landing.style.display="flex";
    setTimeout(()=>landing.style.opacity="1",50);
  }, 800);
}

function load(id, btn){
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  viewer.style.opacity="0";

  setTimeout(() => {
    const embeds = {
      cpu: "https://sketchfab.com/models/a05c2732e0b847c2967e2c9282abd5f9/embed",
      gpu: "https://sketchfab.com/models/40402684c3b74e7086169b5445319bfb/embed",
      ram: "https://sketchfab.com/models/f29a2aa8757f48f49a46d23e311ca459/embed",
      mobo: "https://sketchfab.com/models/e34058f4745a4170b21f716a53883361/embed"
    };
    viewer.src = embeds[id];

    viewer.addEventListener('load', () => {
      viewer.style.opacity="1";
    }, { once: true });
  }, 300);

  title.innerText = parts[id].t;
  desc.innerText = parts[id].d;
  info.style.display="block";
}

