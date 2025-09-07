/* ---------- DATA: EXERCISES ---------- */
const EXERCISES = {
  cardio: [
    { level:1, name:"เดินเร็ว (Power Walk)", img:"Power Walk.jpg",
      steps:["อบอุ่นร่างกาย 3 นาที","เดินก้าวยาวและแกว่งแขน 10–15 นาที","หายใจสม่ำเสมอ ไม่กลั้นหายใจ"],
      result:"เพิ่มความฟิตพื้นฐาน เผาผลาญเบาๆ", pros:"ทำได้ทุกที่ แรงกระแทกต่ำ", cons:"เผาผลาญไม่สูงมาก",
      warning:"เลือกรองเท้าพื้นนุ่มและถนนไม่ลื่น"
    },
    { level:2, name:"วิ่งสลับเดิน (Run-Walk)", img:"Run-Walk.png",
      steps:["วิ่งเบา 1 นาที","เดิน 1 นาที","ทำสลับรวม 10–20 นาที"],
      result:"พัฒนาความทนทานหัวใจ-ปอด", pros:"ปรับตามฟิตร่างกายได้", cons:"อาจเมื่อยหน้าแข้งช่วงแรก",
      warning:"อย่าวิ่งทันทีหลังอาหาร 1–2 ชม."
    },
    { level:3, name:"กระโดดเชือก", img:"กระโดดเชือก.jpg",
      steps:["จับเชือกแนบลำตัว","กระโดดเบาๆที่ปลายเท้า 30–60 วิ x 3–5 รอบ","พักรอบละ 30 วิ"],
      result:"เผาผลาญสูง เพิ่มคล่องตัว", pros:"อุปกรณ์ถูก พื้นที่น้อย", cons:"แรงกระแทกต่อข้อเท้า",
      warning:"พื้นไม่แข็งเกินไป สวมรองเท้ากันกระแทก"
    },
    { level:4, name:"Mountain Climber", img:"Mountain Climber.jpg",
      steps:["เริ่มท่าแพลงก์ตรง","ดึงเข่าซ้าย-ขวาสลับเร็ว 20–40 วิ x 3–4 รอบ","รักษาลำตัวนิ่ง"],
      result:"หัวใจเต้นเร็ว เผาผลาญดีมาก", pros:"ไม่ใช้อุปกรณ์", cons:"ล้าไหล่/แกนกลางได้",
      warning:"หลังตรง อย่าให้สะโพกยกสูง"
    },
    { level:5, name:"Burpees", img:"Burpees.jpg",
      steps:["ยืน → ย่อตัวแตะพื้น","ถีบขาไปท่าแพลงก์ → กลับ → กระโดดขึ้น","10–12 ครั้ง x 3 เซ็ต"],
      result:"เผาผลาญสูงสุด ทั่วตัว", pros:"คุ้มเวลา สั้นแต่เข้ม", cons:"หนักสำหรับมือใหม่",
      warning:"ควบคุมท่าหลังตรง เข่าไม่พุ่งเกินปลายเท้า"
    }
  ],
  strength: [
    { level:1, name:"สควอทน้ำหนักตัว", img:"สควอท.jpg",
      steps:["ยืนกว้างเท่าไหล่","ย่อตัวเหมือนนั่งเก้าอี้ หลังตรง","12–15 ครั้ง x 3 เซ็ต"],
      result:"ต้นขา/ก้นแข็งแรง", pros:"พื้นฐานสำคัญ", cons:"ท่าผิดทำให้ปวดเข่า",
      warning:"อย่าให้เข่าเลยปลายเท้า น้ำหนักลงส้นเท้า"
    },
    { level:2, name:"วิดมือพิงโต๊ะ (Incline Push-up)", img:"Incline Push-up.jpg",
      steps:["มือวางบนโต๊ะ แขนตรง ตัวเป็นเส้นตรง","งอศอกลงช้าๆ แล้วดันขึ้น","10–15 ครั้ง x 3 เซ็ต"],
      result:"อก/ไหล่/แขน เริ่มต้นสบาย", pros:"เบากว่า push-up พื้น", cons:"ต้องมีโต๊ะมั่นคง",
      warning:"ตรวจความมั่นคงโต๊ะกันลื่น"
    },
    { level:3, name:"วิดพื้น (Push-up)", img:"Push-up.jpg",
      steps:["มือกว้างกว่าไหล่นิด","ลำตัวตรง เกร็งท้อง","8–12 ครั้ง x 3 เซ็ต"],
      result:"อก ไหล่ ไตรเซ็ปแข็งแรง", pros:"ทำได้ทุกที่", cons:"กดข้อมือ/ไหล่ได้",
      warning:"อย่าแอ่นหลัง ให้แกนกลางแข็ง"
    },
    { level:4, name:"ลันจ์สลับขา", img:"ลันจ์สลับขา.jpg",
      steps:["ก้าวยาวหนึ่งก้าว","ย่อตัวจนเข่าหลังเกือบแตะพื้น","ข้างละ 10–12 ครั้ง x 3 เซ็ต"],
      result:"ต้นขา/ก้น/สมดุล", pros:"โฟกัสขาเดี่ยว", cons:"ทรงตัวยากช่วงแรก",
      warning:"เข่าหน้าอย่าเกินปลายเท้า ลำตัวตั้งตรง"
    },
    { level:5, name:"แพลงก์ยกขา (Plank Leg Raise)", img:"Plank Leg Raise.jpg",
      steps:["ท่าแพลงก์ศอก","ยกขาสลับช้าๆ ข้างละ 8–10 ครั้ง","ทำ 3 เซ็ต"],
      result:"แกนกลาง เคอร์สเตบิลิตี้สูง", pros:"ไม่ใช้อุปกรณ์", cons:"ล้าไหล่/หลังล่างได้",
      warning:"สะโพกไม่ส่าย หลังเป็นเส้นตรง"
    }
  ],
  // stretch, yoga, core... เพิ่มได้เหมือนเดิม
};

/* ---------- DATA: FOOD ---------- */
const FOOD = {
  protein: [
    {title:"อกไก่ย่างเกลือพริกไทย", desc:"หมักเกลือพริกไทย+น้ำมันมะกอก ย่าง/กะทะ 6–8 นาที/ด้าน", tip:"กินคู่สลัดผักหรือข้าวกล้อง"},
    {title:"ไข่ต้ม/ไข่ลวก 2 ฟอง", desc:"ต้ม 6–8 นาทีตามชอบ", tip:"โปรตีนเร็วหลังออกกำลัง"}
  ],
  carb: [
    {title:"ข้าวกล้องร้อนๆ", desc:"อุ่นทานคู่โปรตีน", tip:"คาร์บเชิงซ้อนอยู่ท้อง"},
    {title:"มันหวานอบ", desc:"ล้าง ห่อฟอยล์ อบ 200°C ~35–40 นาที", tip:"หวานธรรมชาติ ไฟเบอร์ดี"},
    {title:"ขนมปังโฮลวีตทูน่า", desc:"ทูน่าในน้ำเกลือ+โยเกิร์ต กดประกบ", tip:"ทำเร็ว อิ่มนาน"}
  ],
  vegfruit: [
    {title:"สลัดผักอกไก่", desc:"ผักรวม+อกไก่ย่าง+น้ำสลัดงาเบาๆ", tip:"ไฟเบอร์สูง แคลต่ำ"},
    {title:"ผัดบรอกโคลีเห็ดน้ำมันหอย", desc:"ผัดน้ำเล็กน้อย ลดน้ำมัน", tip:"วิตามินเพียบ"},
    {title:"ผลไม้ 1 กำมือ", desc:"กล้วย/แอปเปิล/ส้ม", tip:"พลังงานก่อนซ้อมเบาๆ"}
  ],
  smoothie: [
    {title:"โอ๊ตกล้วยนม", desc:"ข้าวโอ๊ต 3 ชต. + กล้วย + นม 200 ml ปั่น", tip:"ก่อนซ้อม 45–60 นาที"},
    {title:"กรีกโยเกิร์ตพาร์เฟต์", desc:"โยเกิร์ต+ผลไม้+กราโนลาเล็กน้อย", tip:"โปรตีน+โปรไบโอติก"}
  ]
};

/* ---------- HELPERS ---------- */
const $ = (q)=>document.querySelector(q);
const $$ = (q)=>document.querySelectorAll(q);

// จัด path รูปให้ถูก
function imgSrcOrPlaceholder(file){
  return file || "placeholder.jpg";  // ถ้าไม่มีไฟล์ ใช้ placeholder
}

// สร้าง card ของ exercise
function cardExercise(e){
  const img = imgSrcOrPlaceholder(e.img);
  return `
  <div class="card">
    <img class="thumb" src="${img}" alt="${e.name}" loading="lazy"
      onerror="this.onerror=null;this.src='https://via.placeholder.com/300?text=${encodeURIComponent(e.name)}'">
    <div>
      <h3 class="title"><span>${e.name}</span><span class="lvl">Level ${e.level}</span></h3>
      <div class="meta"><span class="good">ผลลัพธ์:</span> ${e.result}</div>
      <details>
        <summary>วิธีทำทีละขั้น</summary>
        <ul class="list">${e.steps.map(s=>`<li>${s}</li>`).join("")}</ul>
      </details>
      <div style="margin-top:8px">
        <span class="good">ข้อดี:</span> ${e.pros} &nbsp; • &nbsp; <span class="bad">ข้อเสีย:</span> ${e.cons}
      </div>
      <div class="warn">คำเตือน: ${e.warning}</div>
    </div>
  </div>`;
}

// render exercise ตาม category
function renderExercises(cat="cardio"){
  const grid = $("#exerciseGrid");
  grid.innerHTML = EXERCISES[cat].sort((a,b)=>a.level-b.level).map(cardExercise).join("");
}

// สร้าง card ของ food
function foodCard(item){
  return `
    <div class="food-card">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
      <p class="good">เคล็ดลับ: ${item.tip}</p>
    </div>
  `;
}

// render food
function renderFood(){
  $("#foodProtein").innerHTML   = FOOD.protein.map(foodCard).join("");
  $("#foodCarb").innerHTML      = FOOD.carb.map(foodCard).join("");
  $("#foodVegFruit").innerHTML  = FOOD.vegfruit.map(foodCard).join("");
  $("#foodSmoothie").innerHTML  = FOOD.smoothie.map(foodCard).join("");
}

/* ---------- NAV INTERACTION ---------- */
function switchMain(section){
  $$(".section").forEach(s=>s.classList.remove("show"));
  $("#"+section).classList.add("show");
  $$("#mainMenu button").forEach(b=>b.classList.remove("active"));
  $(`#mainMenu button[data-section="${section}"]`).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function switchExerciseTab(cat){
  $$("#exerciseTabs button").forEach(b=>b.classList.remove("active"));
  $(`#exerciseTabs button[data-cat="${cat}"]`).classList.add("active");
  renderExercises(cat);
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  // main nav
  $$("#mainMenu button").forEach(btn=>{
    btn.addEventListener("click", ()=>switchMain(btn.dataset.section));
  });
  // exercise tabs
  $$("#exerciseTabs button").forEach(btn=>{
    btn.addEventListener("click", ()=>switchExerciseTab(btn.dataset.cat));
  });
  // initial render
  renderExercises("cardio");
  renderFood();
});
