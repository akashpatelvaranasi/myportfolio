let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words [currentWordIndex].style.opacity = "1";


let changeText = ()=>{
let currentWord = words [currentWordIndex];
let nextWord=currentWordIndex ===maxWordIndex ? words[0] : words [currentWordIndex + 1];

Array.from(currentWord.children).forEach((letter, i)=>{
   setTimeout(()=>{
       letter.className = "letter out";
   },i * 80);
});
nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
      letter.className="letter behind";
      setTimeout(()=>{
        letter.className="letter in";
      } , 340 + i * 80)
   });
   currentWordIndex=currentWordIndex===maxWordIndex ?  0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)



// mix it up portfolio section..........................

var mixer=mixitup('.portfolio-pic');






// active menu..............................................................

let munuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('section');

function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
        munuLi.forEach(sec => sec.classList.remove("active"));
        munuLi[len].classList.add("active");

}
activeMenu();
window.addEventListener("scroll",activeMenu);



// Sticky navbar................///////////////////////////

const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>50)
})


// toggle icon navbar..............................................

let menuIcon=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
 window.onscroll= ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
 }