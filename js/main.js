const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.navbar_menu')
const menuIcon = document.querySelector('.menu-up_icon')
const workAll = document.querySelector('.work_c_all')
const workManikur = document.querySelector('.work_c_manikur')
const workPedikur = document.querySelector('.work_c_pedikur')
const workDp = document.querySelector('.work_c_dp')
const navbarLeft = document.querySelector('.navbar_left')
const navbarRight = document.querySelector('.navbar_right')
const burger = document.querySelector('.burger')
const navLinks = document.querySelectorAll('.nav_link')
const burgerSpan = document.querySelectorAll('.burger_span')
const male = document.querySelector('.male')
const female = document.querySelector('.female')
const nameId = document.getElementById('name')
const emailId = document.getElementById('email')
const ageId = document.getElementById('age')
const submitId = document.getElementById('submit')
const comm = document.querySelector('.comm')
const body = document.body
const $imgsView = document.getElementsByTagName('img')
const imgS = Array.from($imgsView)
const view = document.querySelector('.view')
const viewRemove = document.querySelector('.view_remove')
const viewImg = document.querySelector('.view_img')

 

// function

function menuRemove(){
    menu.style.right = '-500px'
    setTimeout(function(){
      menu.style.display = 'none'
    },750);
}

function menuAdd(){
    menu.style.display = 'flex'
    setTimeout(function(){
       menu.style.right = '0'
    }, 100);
}

function navBurger(){
 if(navbarLeft.className == 'navbar_left flex'){
   navbarLeft.style.opacity = '0'
   navbarRight.style.opacity = '0'
   setTimeout(function() {
      navbarLeft.classList.remove('flex')
      navbarRight.classList.remove('flex')
   }, 400);

   burgerSpan.forEach(function(el, i){
      el.style.background = 'transparent'
      el.style.border = '1px solid var(--white)'
   })
 }else{
   navbarLeft.classList.add('flex')
   navbarRight.classList.add('flex')
   setTimeout(function() {
      navbarLeft.style.opacity = '1'
      navbarRight.style.opacity = '1'
   }, 70);
  
   burgerSpan.forEach(function(el, i){
      el.style.background = 'var(--active-color)'
      el.style.border = '1px solid var(--active-color)'
   })
 }
}

function onMale(){
  male.classList.toggle('check')
  if(female.className == 'female check'){
   female.classList.remove('check')
  }else{}
}

function onFemale(){
   female.classList.toggle('check')
   if(male.className == 'male check'){
      male.classList.remove('check')
     }else{}
}

function checkedForm(){
   let error = ''
   let nameEror = ''
   let emailEror = ''
   let ageEror = ''

   if(nameId.value == '' || emailId.value == '' || ageId.value == '' || male.className != 'male check' && female.className != 'female check'){
      error = 'Заполните паля'
      alert(error)
      comm.style.background = 'rgba(48, 9, 9, 0.66)'
      setTimeout(() => {
         comm.style.background = 'rgba(30, 30, 30)'
      }, 1500);
   }else if(nameId.value.length <= 3 ){
      nameEror = 'Некорректное имя'
      alert(nameEror)
      comm.style.background = 'rgba(48, 9, 9, 0.66)'
      setTimeout(() => {
         comm.style.background = 'rgba(30, 30, 30)'
      }, 1500);
   }else if(emailId.value.split("@").length < 2){
      emailEror = 'Укажите правилный Email'
      alert(emailEror)
      comm.style.background = 'rgba(48, 9, 9, 0.66)'
      setTimeout(() => {
         comm.style.background = 'rgba(30, 30, 30)'
      }, 1500);
   }else if(ageId.value <= 15 || ageId.value > 100){
      ageEror = 'Вам менше 15 или боше 100 !'
      alert(ageEror);
      comm.style.background = 'rgba(48, 9, 9, 0.66)'
      setTimeout(() => {
         comm.style.background = 'rgba(30, 30, 30)'
      }, 1500);
   }else{
      alert('Ваш отзыв был отправлен')
      comm.style.background = 'rgba(9, 48, 14, 0.66)'
      setTimeout(() => {
         comm.style.background = 'rgba(30, 30, 30)'
      }, 5000);
   }
}

function viewOff(){
   view.classList.remove('flex')
   body.classList.remove('body_scroll')
}



// forEach
navLinks.forEach(function(el, key){
   el.classList.remove('nav_link')
   if(el.className == document.title){
      el.classList.add('active')
      el.style.color = 'var(--active-color)'
   }
   setTimeout(function(){
      el.classList.add('nav_link')
   }, 200);
})

imgS.forEach(function(el, key){
   el.addEventListener('click', function(){
 
      view.classList.add('flex')
      viewImg.src = el.src
      body.classList.add('body_scroll')
   })
})



// event
viewRemove.addEventListener('click', viewOff);
navMenu.addEventListener('click', menuAdd);
menuIcon.addEventListener('click', menuRemove);
burger.addEventListener('click', navBurger);
male.addEventListener('click', onMale);
female.addEventListener('click', onFemale);
submitId.addEventListener('click', checkedForm);






