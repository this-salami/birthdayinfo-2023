const r = document.querySelector(':root');

const light = document.getElementById("light");
const dark = document.getElementById("dark");
const brown = document.getElementById("brown");

const dateIn = document.getElementById("dateIn");
const dateSubmit = document.getElementById("submit");

const infoTitle = document.getElementById("infoTitle");
const X = document.getElementById("X");

const horoscopeTitle = document.getElementById("horoscopeTitle");
const horoscopeImg = document.getElementById("horoscopeImg");

const chineseZodiacTitle = document.getElementById("chineseZodiacTitle");
const chineseZodiacImg = document.getElementById("chineseZodiacImg");

const rotateElems = document.querySelectorAll(".rotateOuter");

const themes = ["light", "dark", "brown"];

const themeColors = {
  light: ["rgb(250,250,250)", "rgb(180, 180, 180)", "black"], 
  dark: ["rgb(25, 25, 25)", "rgb(60, 60, 60)", "rgb(250, 250, 250)"], 
  brown: ["#B8894A", "rgb(250, 250, 250)", "rgb(250, 250, 250)"]
};

const horoscopes = [
  ["https://th.bing.com/th/id/OIP.xeu1p3yS7J5E9hWEWojSQAHaHA?pid=ImgDet&rs=1", "Aries"],
  ["https://www.tattoomenow.com/tattoo-designs/wp-content/uploads/2019/08/Taurus-Symbol.jpg", "Taurus"],
  ["https://img1.etsystatic.com/207/0/14214188/il_570xN.1282838293_dwr7.jpg", "Gemini"],
  ["https://th.bing.com/th/id/R.db7b15f184e1e1630a045cbe27feb335?rik=ndGds3oK3IJa0Q&pid=ImgRaw&r=0", "Cancer"],
  ["https://i.pinimg.com/originals/f8/f5/f8/f8f5f89d87756890b2d54ef73cfe7928.jpg", "Leo"],
  ["https://i.pinimg.com/236x/36/01/32/360132d466eefdf2cd5ccc4cee62f743--zodiac-signs-virgo-virgo-horoscope.jpg", "Virgo"],
  ["https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-libra-bold-400w.png", "Libra"],
  ["https://i.pinimg.com/236x/c9/dc/b3/c9dcb33f996f0a1185d02a5af8f92e63--maiden-yahoo.jpg", "Scorpio"],
  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHSPSOcHxDH2EKfx0RElXVWw_z_TOTbZRIVTrj0Hq-g&s", "Sagittarius"],
  ["https://pngimg.com/uploads/capricorn/capricorn_PNG37.png", "Capricorn"],
  ["https://i.pinimg.com/originals/b9/b8/78/b9b878fef131fc8d0dbceba9cbd5c9a4.jpg", "Aquarius"],
  ["https://www.kindpng.com/picc/m/241-2412601_pisces-astrological-sign-astrology-zodiac-symbol-pisces-symbol.png", "Pisces"]
]


const chineseZodiacs = [
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OMBRE_CHINOISE_RAT.jpg/250px-OMBRE_CHINOISE_RAT.jpg", "Rat"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/OMBRE_CHINOISE_BUFFLE.jpg/250px-OMBRE_CHINOISE_BUFFLE.jpg ", "Ox"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/OMBRE_CHINOISE_TIGRE.jpg/250px-OMBRE_CHINOISE_TIGRE.jpg", "Tiger"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/OMBRE_CHINOISE_LIEVRE_2.jpg/250px-OMBRE_CHINOISE_LIEVRE_2.jpg", "Rabbit"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chinese_black_dragon.svg/250px-Chinese_black_dragon.svg.png", "Dragon"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OMBRE_CHINOISE_SERPENT.jpg/250px-OMBRE_CHINOISE_SERPENT.jpg", "Snake"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/OMBRE_CHINOISE_CHEVAL.jpg/250px-OMBRE_CHINOISE_CHEVAL.jpg", "Horse"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/OMBRE_CHINOISE_CHEVRE.jpg/250px-OMBRE_CHINOISE_CHEVRE.jpg", "Goat"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/OMBRE_CHINOISE_SINGE.jpg/250px-OMBRE_CHINOISE_SINGE.jpg", "Monkey"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/OMBRE_CHINOISE_COQ.jpg/250px-OMBRE_CHINOISE_COQ.jpg", "Rooster"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/OMBRE_CHINOISE_CHIEN.jpg/250px-OMBRE_CHINOISE_CHIEN.jpg", "Dog"], 
  ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/OMBRE_CHINOISE_SANGLIER.jpg/250px-OMBRE_CHINOISE_SANGLIER.jpg", "Pig"]
];

const birthStones = [
  ["./stones/garnet.jpg", "Garnet"], 
  ["./stones/amethyste.jpg", "Amethyst"], 
  ["./stones/aquamarine.jpg", "./stones/bloodstone.jpg", "Aquamarine", "Bloodstone"], 
  ["./stones/diamond.jpg", "Diamond"], 
  ["./stones/emerald.jpg", "Emerald"], 
  ["./stones/pearl.png", "./stones/alexandrite.png", "./stones/moonstone.png", "Pearl", "Alexandrite", "Moonstone"], 
  ["./stones/ruby.jpg", "Ruby"], 
  ["./stones/peridot.jpg", "./stones/spinel.jpg", "./stones/sardonyx.png", "Peridot", "Spinel", "Sardonyx"], 
  ["./stones/sapphire.png", "Sapphire"], 
  ["./stones/opal.jpg", "./stones/tourmaline.jpeg", "Opal", "Tourmaline"], 
  ["./stones/topaz.jpg", "./stones/citrine.jpg", "Topaz", "Citrine"], 
  ["./stones/turquoise.webp", "./stones/zircon.jpg", "./stones/tanzanite.jpg", "Turquoise", "Zircon", "Tanzanite"]
];

const birthFlowers = [
  ["./flowers/carnation.jpg", "./flowers/snowdrop.jpg", "Carnation", "Snowdrop"], 
  ["./flowers/violet.png", "./flowers/primrose.png", "Violet", "Primrose"], 
  ["./flowers/daffodil.png", "./flowers/jonquil.png", "Daffodil", "Jonquil"], 
  ["./flowers/daisy.png", "./flowers/sweetpea.png", "Daisy", "Sweet pea"], 
  ["./flowers/lilyofthevalley.png", "./flowers/hawthorn.png", "Lily of the valley", "Hawthorn"], 
  ["./flowers/rose.png", "./flowers/honeysuckle.png", "Rose", "Honeysuckle"], 
  ["./flowers/larkspur.png", "./flowers/waterlily.png", "Larkspur", "Water lily"], 
  ["./flowers/gladiolus.png", "./flowers/poppy.png", "Gladiolus", "Poppy"], 
  ["./flowers/aster.png", "./flowers/morningglory.png", "Aster", "Morning glory"], 
  ["./flowers/marigold.png", "./flowers/cosmos.png", "Marigold", "Cosmos"], 
  ["./flowers/chrysanthemum.png", "./flowers/peony.png", "Chrysanthemum", "Peony"], 
  ["./flowers/narcissus.png", "./flowers/holly.png", "Narcissus", "Holly"]
];

let canContinue = false;
let date = "";

function changeTheme(newThemeIndex, shouldSave){
  if (themes[newThemeIndex] == undefined) {return false;}
  
  if (themes[newThemeIndex] == "light" || themes[newThemeIndex] == undefined){
    localStorage.removeItem('theme');
    r.style.setProperty('--primary-color', themeColors[themes[newThemeIndex]][0]);
    r.style.setProperty('--secondary-color', themeColors[themes[newThemeIndex]][1]);
    r.style.setProperty('--tertiary-color', themeColors[themes[newThemeIndex]][2]);
    //document.body.className = "";
    return;
  }
  
  r.style.setProperty('--primary-color', themeColors[themes[newThemeIndex]][0]);
  r.style.setProperty('--secondary-color', themeColors[themes[newThemeIndex]][1]);
  r.style.setProperty('--tertiary-color', themeColors[themes[newThemeIndex]][2]);
  
  localStorage.setItem('theme', `${newThemeIndex}`);
  //document.body.className  = themes[newThemeIndex];
}

function getHoroscopeInfo(month, day){
  let horoscope_info;
  if((month == 3 && day >= 21) || (month == 4 && day <= 19)){
    // Aries
    horoscope_info = horoscopes[0];
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)){
    // Taurus
    horoscope_info = horoscopes[1];
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)){
    // Gemini
    horoscope_info = horoscopes[2];
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)){
    // Cancer
    horoscope_info = horoscopes[3];
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)){
    // Leo
    horoscope_info = horoscopes[4];
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)){
    // Virgo
    horoscope_info = horoscopes[5];
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)){
    // Libra
    horoscope_info = horoscopes[6];
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)){
    // Scorpio
    horoscope_info = horoscopes[7];
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)){
    // Sagittarius
    horoscope_info = horoscopes[8];
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)){
    // Capricorn
    horoscope_info = horoscopes[9];
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)){
    // Aquarius 
    horoscope_info = horoscopes[10];
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)){
    // Pisces  
    horoscope_info = horoscopes[11];
  }
  
  return horoscope_info;
}

function isValidUrl(urlString){
  try { 
    return Boolean(new URL(urlString)); 
  }
  catch(e){ 
    return false; 
  }
}

function createRotateSlide(){
  const slide = document.createElement("div");

  const header = document.createElement("h3");
  header.innerText = "test";
  slide.appendChild(header);

  const img = document.createElement("img");
  img.src = "";
  img.draggable = false;
  img.ondragstart = () => {return false};
  slide.appendChild(img);

  return slide;
}

const rotateData = {};

function setRotate(id, data){
  const elem = document.getElementById(id).querySelector(".rotateOuter");

  rotateData[id] = [0, data];

  if (data.length / 2 === 1){
    elem.classList.add("single");
  } else {
    elem.classList.remove("single");
  }

  if (elem.getAttribute("data-set-up") == "true"){
    let slide1 = elem.querySelector(".rotate div")

    slide1.getElementsByTagName("h3")[0].innerText = data[0 + data.length/2];
    slide1.getElementsByTagName("img")[0].src = data[0];

    let count = elem.querySelector("#count");
    count.innerText = `1/${data.length/2}`;

    return;
  }

  if (elem.getAttribute("data-set-up") == null){
    elem.setAttribute("data-set-up", "false");
  } else { return; }
  
  const rotateArrow1 = document.createElement("h2");
  rotateArrow1.className = "rotateArrow1";
  rotateArrow1.innerText = " < ";
  elem.appendChild(rotateArrow1);

  const rotateDiv = document.createElement("div");
  rotateDiv.className = "rotate";
  rotateDiv.setAttribute("data-current", "0");
  rotateDiv.setAttribute("data-shift", "100");
  rotateDiv.setAttribute("data-group-count", "2");
  elem.appendChild(rotateDiv);

  let slide1 = createRotateSlide();

  slide1.getElementsByTagName("h3")[0].innerText = data[0 + data.length/2];
  slide1.getElementsByTagName("img")[0].src = data[0];
  slide1.style.left = "0px";

  rotateDiv.appendChild(slide1);

  const rotateArrow2 = document.createElement("h2");
  rotateArrow2.className = "rotateArrow2";
  rotateArrow2.innerText = " > ";
  elem.appendChild(rotateArrow2);

  const count = document.createElement("p");
  count.id = "count";
  count.innerText = `1/${data.length/2}`;
  elem.appendChild(count);

  rotateArrow1.addEventListener("click", e => {
    let len = rotateData[id][1].length/2;
    rotateData[id][0] = (rotateData[id][0] - 1 + len) % len;
    let [index, data] = rotateData[id];

    count.innerText = `${index + 1}/${len}`;

    let slide2 = createRotateSlide();
    slide2.style.left = "-100%";
    rotateDiv.appendChild(slide2);

    slide2.getElementsByTagName("h3")[0].innerText = data[index + len];
    slide2.getElementsByTagName("img")[0].src = data[index];

    setTimeout(() => slide2.style.left = "0px", 10);

    slide1.style.left = "100%";
    let temp = slide1;
    slide1 = slide2;
    setTimeout(() => {
      rotateDiv.removeChild(temp);
    }, 240);
  });

  rotateArrow2.addEventListener("click", e => {
    let len = rotateData[id][1].length/2;
    rotateData[id][0] = (rotateData[id][0] + 1) % len;
    let [index, data] = rotateData[id];

    count.innerText = `${index + 1}/${len}`;

    let slide2 = createRotateSlide();
    slide2.style.left = "100%";
    rotateDiv.appendChild(slide2);

    slide2.getElementsByTagName("h3")[0].innerText = data[index + len];
    slide2.getElementsByTagName("img")[0].src = data[index];

    setTimeout(() => slide2.style.left = "0px", 10);

    slide1.style.left = "-100%";
    let temp = slide1;
    slide1 = slide2;
    setTimeout(() => {
      rotateDiv.removeChild(temp);
    }, 240);
  });

  elem.setAttribute("data-set-up", "true");
}

function openDate(year, month, day){
  document.body.setAttribute("data-is-submited", "true");
  
  infoTitle.innerText = `${month}/${day}/${year}`;
  
  let horoscope_info = getHoroscopeInfo(month, day);
  
  horoscopeImg.src = horoscope_info[0];
  horoscopeTitle.innerText = horoscope_info[1];
  
  let chineseZodiac_info = chineseZodiacs[Math.abs(year - 1924) % 12];
  
  chineseZodiacImg.src = chineseZodiac_info[0];
  chineseZodiacTitle.innerText = chineseZodiac_info[1];
  
  let birthStone_info = birthStones[month - 1];
  
  setRotate("birthstone", birthStone_info);

  let birthFlower_info = birthFlowers[month - 1];
  
  setRotate("flower", birthFlower_info);
}

function closeDate(){
  document.body.setAttribute("data-is-submited", "");
  dateIn.value = "";
  dateSubmit.className = "";
  
  date = "";
  canContinue = false;
}

light.addEventListener("click", e => { 
  changeTheme(0, true);
});
dark.addEventListener("click", e => { 
  changeTheme(1, true);
});
brown.addEventListener("click", e => { 
  changeTheme(2, true);
});

dateIn.addEventListener("keyup", e => {
  if (dateIn.value == "") {
    canContinue = false;
    dateSubmit.className = "";
  } else{
    canContinue = true;
    dateSubmit.className = "valid";
  }
});

function submitDate(date){
  let seperated = date.split("-");
  
  let year = seperated[0];
  let month = seperated[1];
  let day = seperated[2];
  
  openDate(year, month, day);
}

dateSubmit.addEventListener("click", e => {
  if (canContinue){
    date = dateIn.value;
    submitDate(date);
  }
});

window.addEventListener("keyup", e => {
  if (e.key == "Enter" && canContinue && dateSubmit.classList.contains("valid")){
    date = dateIn.value;
    submitDate(date);
  }
});

X.addEventListener("click", e => {
  closeDate();
});

window.addEventListener('load', e => { 
    changeTheme(localStorage.getItem("theme") | 0, false);
});