// ====== 📸 ပုံများ ======
const photos = [
  "images/pan1.jpg",
  "images/pan2.jpg",
  "images/pan3.jpg",
  "images/pan4.jpg",
  "images/pan5.jpg",
];
// ပုံမရှိသေးရင် placeholder:
// "https://picsum.photos/400/600?random=1" ... စသဖြင့်

// ====== အဖြေစာကြောင်းများ ======
const answerLines = [
  "ပန် ကို့ကို ပြောဖူးတယ်လေ",
  "ပန့် အဖေနဲ့အမေနဲ့က ၂ယောက်လုံး တစ်ယောက်နဲ့တစ်ယောက် အရမ်းချစ်ကြတာဆိုတာ",
  "အဲ့လိုပဲ ကိုလဲ ပန့်ကို အဲ့လိုချစ်ခြင်းမျိုးနဲ့ ချစ်တာ 💕",
  "ကိုက ပန့်ရဲ့ အဖေလိုလူမျိုးပေါ့ ပန်ကလဲ ပန့်ရဲ့အမေလိုပေါ့ ဟုတ်တယ်မလား 😁",
  "",
  "ပြောရရင်တော့ သစ္စာရှိရှိနဲ့ အချိန်တွေ အကြာကြီး...",
  "ဘယ်တော့မှ မခွဲပဲ အနားမှာ အမြဲအတူတူ ရှိပြီး ချစ်ပေးနေချင်တာ",
  "အဲ့တာကြောင့်လဲ ကြိုးစားနေတာပေါ့ဗျာ 💪",
  "",
  "ပန် ရောက်မလာခင်ကဆို ကြိုးစားချင်စိတ်လဲနဲပြီး ပုံမှန်လေးပဲနေနေခဲ့တာ...",
  "",
  "ဘာလို့ ပန့် အဖေနဲ့အမေကို ဥပမာပေးလဲဆို",
  "ကိုယ့် အဖေနဲ့အမေကကျ အဲ့လိုမဟုတ်ခဲ့လို့",
  "",
  "သူတို့လဲ ချစ်တော့ ချစ်ခဲ့ပါတယ်",
  "နောက်ပိုင်းကျ အဖေက အရက်တွေသောက်လာတော့ အမေက မကြိုက်ပြီး ကွဲသွားခဲ့ကြတာ",
  "အဖေဆုံးသွားတဲ့ထိ ပြန်မပေါင်းခဲ့ကြဘူးလေ",
  "",
  "ဒါမဲ့ အမေကတော့ ကို့ကို အရမ်းချစ်ပါတယ် ",
  "ကိုလဲ အမေ့လိုပေါ့ ပန့်ကိုချစ်တာ အဲ့လိုပါပဲဗျာ ဟဲဟဲ 👀",
  "",
  "အဲ့လိုတွေပြောတော့ အကိုက စကားတတ်တယ်လို့ ပန် ထင်ရင်ထင်မှာပေါ့",
  "ကိုလဲ ပန်မေးလို့သာ ဖြေတာပါ တကယ်တော့ လက်တွေ့နဲ့ပဲ သက်သေပြချင်တာပါ",
  "",
  "ကို ဘာလို့ ပန့်ဆီက အဖြေကို ဇွတ်မတောင်းပဲနေတာလဲလို့ ပန် တွေးရင်တွေးနေမှာပေါ့",
  "",
  "ဘာလို့ဆို လိုင်းပေါ်ကနေ ပန့်ဆီက အဖြေမလိုချင်လို့",
  "တကယ် အပြင်မှာတွေ့ပြီး ပန့်ဆီက ချစ်ပါတယ်ဆိုတဲ့ အဖြေပဲလိုချင်လို့ 💗",
  "",
  "ပြီးတော့ ပန်နဲ့ကိုယ်ကလဲ တွေ့ခဲ့တာ မကြာသေးဘူးလေ",
  "ပန့်ဆီကလဲ လွယ်လွယ်နဲ့ အဖြေမလိုချင်ပါဘူး",
  "အပြင်မှာ ပြန်တွေ့ရင်တော့ ပေးရမယ်နော် 😉",
  "",
  "လောလောဆယ်တော့ ကိုက ပန့်ကို အရမ်းချစ်တယ်ဆိုတာ ပန် ယုံထားရင် ရပီ",
  "ပန့်နှလုံးသားလေးထဲမှာလဲ ကို တစ်ယောက်ပဲရှိနေရင် ရပီ 💕",
];

// ====== Elements ======
const galleryScreen = document.getElementById("galleryScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const questionScreen = document.getElementById("questionScreen");
const answerScreen = document.getElementById("answerScreen");
const envelope = document.getElementById("envelope");
const readBtn = document.getElementById("readBtn");
const toEnvelopeBtn = document.getElementById("toEnvelopeBtn");
const answerLinesBox = document.getElementById("answerLines");
const finalHeart = document.getElementById("finalHeart");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const swiperWrapper = document.getElementById("swiperWrapper");

// ============================================
// ===== 1️⃣ SWIPER GALLERY =====
// ============================================
function initGallery() {
  photos.forEach((src) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${src}" alt="memory"
      onerror="this.src='https://picsum.photos/400/600?random=${Math.random()}'">`;
    swiperWrapper.appendChild(slide);
  });

  new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

initGallery();

// ============================================
// ===== 🎵 MUSIC =====
// ============================================
let musicPlaying = false;

function playMusic() {
  bgMusic.volume = 0.35;
  bgMusic
    .play()
    .then(() => {
      musicPlaying = true;
      musicIcon.textContent = "🎵";
      musicBtn.classList.add("playing");
    })
    .catch((err) => console.log("Music blocked:", err));
}

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicIcon.textContent = "🔇";
    musicBtn.classList.remove("playing");
  } else {
    playMusic();
  }
}

musicBtn.addEventListener("click", toggleMusic);

// ============================================
// ===== 1️⃣ → 2️⃣ Gallery → Envelope =====
// ============================================
toEnvelopeBtn.addEventListener("click", () => {
  // Music စ
  if (!musicPlaying) playMusic();

  gsap.to(galleryScreen, {
    opacity: 0,
    scale: 1.1,
    duration: 0.8,
    onComplete: () => {
      galleryScreen.classList.add("hidden");
      envelopeScreen.classList.remove("hidden");
      envelopeScreen.classList.add("flex");
      gsap.from(envelopeScreen, { opacity: 0, y: 30, duration: 0.8 });
    },
  });
});

// ============================================
// ===== 2️⃣ → 3️⃣ Envelope → Question =====
// ============================================
envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    gsap.to(envelopeScreen, {
      opacity: 0,
      y: -50,
      duration: 0.6,
      onComplete: () => {
        envelopeScreen.classList.add("hidden");
        envelopeScreen.classList.remove("flex");
        questionScreen.classList.remove("hidden");
        questionScreen.classList.add("flex");
        gsap.from(questionScreen, { opacity: 0, scale: 0.9, duration: 0.8 });
      },
    });
  }, 800);
});

// ============================================
// ===== 3️⃣ → 4️⃣ Question → Answer =====
// ============================================
readBtn.addEventListener("click", () => {
  gsap.to(questionScreen, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      questionScreen.classList.add("hidden");
      questionScreen.classList.remove("flex");
      answerScreen.classList.remove("hidden");
      answerScreen.classList.add("flex");
      gsap.from(answerScreen, { opacity: 0, y: 30, duration: 0.8 });
      renderAnswerLines();
    },
  });
});

// ============================================
// ===== ANSWER LINES =====
// ============================================
function renderAnswerLines() {
  answerLines.forEach((line, i) => {
    const p = document.createElement("p");
    p.className = "fade-line text-center";

    if (line === "") {
      p.innerHTML = '<div class="h-2"></div>';
    } else {
      p.innerHTML = line.replace(
        /(ချစ်|💕|💗|❤️|🥰|🌸|😊|💪|😉)/g,
        '<span class="text-pink-500 font-bold">$1</span>',
      );
    }

    answerLinesBox.appendChild(p);

    setTimeout(() => {
      p.classList.add("show");
      //   answerScreen.querySelector('.letter').scrollTop =
      //     answerScreen.querySelector('.letter').scrollHeight;

      if (i === answerLines.length - 1) {
        setTimeout(() => {
          finalHeart.classList.remove("hidden");
          gsap.from(finalHeart, {
            scale: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
          startHeartsRain();
        }, 800);
      }
    }, i * 700);
  });
}

// ============================================
// ===== HEART RAIN =====
// ============================================
function startHeartsRain() {
  const hearts = ["❤️", "💕", "💖", "💗", "🌸"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 400);
}
