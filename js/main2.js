//<------------------------------------------------------------------------------ section 1 ---------------------------------------------------------------- >

//global let
let slides = document.getElementsByClassName("mySlides");
let slideIndex = 1;
showSlides(slideIndex);

// run slider
function plusSlides(n) {
  //add one every click on prev or next to get ather logo
  showSlides(slideIndex += n);
  //change src on iframe when change logo on slider
  try{
        if(slides[0].style.cssText == "display: block;"){
            document.querySelector('#television').src="https://www.youtube.com/embed/bRSKpb_xzq0";
        }else if(slides[1].style.cssText == "display: block;"){
            document.querySelector('#television').src="https://www.youtube.com/embed/exk1J7ZMUcg";
        }else if(slides[2].innerText == "مخصص"){
            let prompt = document.querySelector('#prompt');
            prompt.classList.add("change");
        };
        // remove prompt if slider not equal مخصص
        if(slides[0].style.cssText == "display: block;" || slides[1].style.cssText == "display: block;"){
            let prompt = document.querySelector('#prompt');
            prompt.classList.remove("change");
    }
    }catch(error){
        console.error(error);
    }
    
}

// How slider working
function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";  
}

// toggles

// toggle on mobile view (navbar)
function myFunction(x) {
    x.classList.toggle("change");
    let navbar = document.querySelector('#navbar');
    navbar.classList.toggle("change");
}

// toggle change class on custom button
function prompt(x) {
    x.classList.toggle("change");
    let prompt = document.querySelector('#prompt');
    prompt.classList.toggle("change");
}

// // remove prompt after add custom link on television
function changeLink(x) {
    x.classList.remove("change");
    let prompt = document.querySelector('#prompt');
    prompt.classList.remove("change");
    // get right link from youtube link
    let value = document.querySelector('#link').value;
    let rightLink = value.replace("watch?v=","embed/");
    document.querySelector('#television').src=rightLink;
    
}

function addChange(x){
  x.classList.toggle("change");
  let changePhoto = document.querySelector('#change-photo');
  changePhoto.classList.toggle("change");
}

function removeChange(x){
   x.classList.remove("change");
   let prompt = document.querySelector('#prompt');
   prompt.classList.remove("change");
   let changePhoto = document.querySelector('#change-photo');
   changePhoto.classList.remove("change");
}

// toggle class change to appear input1 
let input1 = document.querySelector('#money');
function appearValue1(x){
   x.classList.toggle("change");
   input1.classList.toggle("change");
}

// toggle class change to appear input2 
let input2 = document.querySelector('#silveandgold');
function appearValue2(x){
    x.classList.toggle("change");
    input2.classList.toggle("change");
}

function addSebha(x){
    x.classList.toggle("change");
    let sebha = document.querySelector('#sebha');
    sebha.classList.toggle("change");
    if(sebha.classList.value == "change"){
        document.querySelector('#sebha-now button').innerText="الرجوع";
    }else{
        document.querySelector('#sebha-now button').innerText="سبح الأن";
        document.querySelector('.lines').style=`top:-1325px;`
    }
}

// calc zakat 
let inputs = document.querySelectorAll('#type input');
 inputs.forEach(input=>{
    input.addEventListener("keyup",function(){
        let value1 = document.querySelector('#money-value').innerText=input1.value / 40;
        let value2 = document.querySelector('#gold-value').innerText=input2.value / 40 + "جرام";
        // document.querySelector('#all-value').innerText=value1 + JSON.stringify(value2);
    })
})

// local storage

//use video you choose it and saved on local storage
if(localStorage.length > 0){
    document.querySelector('#video-cover').src= localStorage.srcVideo;
}

//save video on local storage
function changeToVideo(srcVideo){
    localStorage.setItem('srcVideo',srcVideo)
    document.querySelector('#video-cover').src=srcVideo;
}

function incrementValue()
{
    let value = parseInt(document.getElementById('number1').value);
    value = isNaN(value) ? 0 : value;
    value += 40;
    let mins = document.getElementById('number1').value = value;
    document.querySelector('.lines').style=`top:${mins}px;`;
    incValue2()
    saveNumSebha()
};

function incValue2(){
    let value = parseInt(document.getElementById('number2').value);
    value = isNaN(value) ? 0 : value;
    value ++;
    let mins = document.getElementById('number2').value = value;
    if(mins == 33){
        document.getElementById('number1').value=-1325;
     }
    if(mins == 34){
       document.getElementById('number2').value= 1;
       document.getElementById('number3').value++;
    }
    incValue3()
}

function incValue3(){
//     let value = parseInt(document.getElementById('number4').value);
//     value = isNaN(value) ? 0 : value;
//     value ++;
//     document.getElementById('number4').value = value;
    incValue4()
}

function incValue4(){
    let value = parseInt(document.getElementById('number5').value);
    value = isNaN(value) ? 0 : value;
    value ++;
    document.getElementById('number5').value = value;
}

// add nums ti local storage in sebha
function saveNumSebha(){
//     let number4 = document.getElementById('number4').value;
//     localStorage.setItem('number4',number4);
    let number5 = document.getElementById('number5').value;
    localStorage.setItem('number5',number5);
    let number1 = document.getElementById('number1').value;
    localStorage.setItem('number1',number1);
    let number2 = document.getElementById('number2').value;
    localStorage.setItem('number2',number2);
    let number3 = document.getElementById('number3').value;
    localStorage.setItem('number3',number3);

}
// take value from local storage in sebha
if(localStorage.length > 0){
//     document.getElementById('number4').value = localStorage.number4;
    document.getElementById('number5').value = localStorage.number5;
    document.getElementById('number1').value = localStorage.number1;
    document.getElementById('number2').value = localStorage.number2;
    document.getElementById('number3').value = localStorage.number3;
}
