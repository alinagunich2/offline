let iconMenu = document.getElementById('icon-menu')
let iconCross = document.getElementById('icon-cross')
let menu = document.getElementById('menu')
let body = document.getElementsByTagName('body')[0]
let mainBlock = document.getElementById('main-block')
let header = document.getElementById('header')
let popapCross = document.getElementById('popap-cross')
let popapReg = document.getElementById('popap-reg')
let popap = document.getElementById('popap')
let menuItem =  Array.from(document.getElementsByClassName('menu__item'))

menuItem.forEach(itm=>{
    itm.onclick=function(){
        menu.style.display='none'
        iconCross.style.display='none'
        iconMenu.style.display='block'
        header.classList.remove('active')
        mainBlock.classList.remove('active')
    }
})



iconMenu.onclick=function(){
    menu.style.display='flex'
    iconMenu.style.display='none'
    iconCross.style.display='block'
    header.classList.add('active')
    mainBlock.classList.add('active')
}
iconCross.onclick=function(){
    menu.style.display='none'
    iconCross.style.display='none'
    iconMenu.style.display='block'
    header.classList.remove('active')
    mainBlock.classList.remove('active')
}
popapReg.onclick=function(){
    popap.style.display='block'
}
popapCross.onclick=function(){
    popap.style.display='none'
}

let options={
    root: null,
    rootMargin:'5px',
    threshold:0.5
  }
  let callback=function(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
           
            entry.target.classList.add('active')
            // if(window.innerWidth>557){ 
            //   entry.target.classList.add('activ-show') 
            // }
        }else{
         
        }
    })
  }
  
  
  let observer = new IntersectionObserver(callback,options)
  let targets = document.querySelectorAll('._element-animation')
  targets.forEach(target=>{
    observer.observe(target)
  })


  let viberMob = Array.from(document.getElementsByClassName('viber-mob'))
let viberDes = Array.from(document.getElementsByClassName('viber-des'))

if( window.innerWidth >= 800 ){
    viberDes.forEach(itm=>{
        itm.style.display='block'
    })
    viberMob.forEach(itm=>{
        itm.style.display='none'
    })
} else {
    viberDes.forEach(itm=>{
        itm.style.display='none'
    })
    viberMob.forEach(itm=>{
        itm.style.display='block'
    })
} 