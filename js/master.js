const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')


item1.addEventListener('click', itemF1)
item2.addEventListener('click', itemF2)
item3.addEventListener('click', itemF3)
item4.addEventListener('click', itemF4)


function itemF1(){
    item1.classList.add('active')
    item2.classList.remove('active')
    item3.classList.remove('active')
    item4.classList.remove('active')
    cardActive()
}

function itemF2(){
    item1.classList.remove('active')
    item2.classList.add('active')
    item3.classList.remove('active')
    item4.classList.remove('active')
    cardActive()
}

function itemF3(){
    item1.classList.remove('active')
    item2.classList.remove('active')
    item3.classList.add('active')
    item4.classList.remove('active')
    cardActive()
}

function itemF4(){
    item1.classList.remove('active')
    item2.classList.remove('active')
    item3.classList.remove('active')
    item4.classList.add('active')
    cardActive()
}
function cardActive(){
    if(item1.className == 'work_item_link active'){
       workAll.classList.remove('none')
       workAll.classList.add('flex')
    }else{
       workAll.classList.remove('flex')
       workAll.classList.add('none')
    } 
    if(item2.classList == 'work_item_link active'){
       workDp.classList.remove('none')
       workDp.classList.add('flex')
    }else{
       workDp.classList.remove('flex')
       workDp.classList.add('none')
    } 
    if(item3.classList == 'work_item_link active'){
       workManikur.classList.remove('none')
       workManikur.classList.add('flex')
    }else{
       workManikur.classList.remove('flex')
       workManikur.classList.add('none')
    }
    if(item4.classList == 'work_item_link active'){
       workPedikur.classList.remove('none')
       workPedikur.classList.add('flex')
    }else{
       workPedikur.classList.remove('flex')
       workPedikur.classList.add('none')
    }
}
cardActive()