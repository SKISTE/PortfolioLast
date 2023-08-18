function place_circles() {
    const all_circles = document.getElementsByClassName('hello_circle')
    for (let i = 0; i < all_circles.length; i++) {
        const element = all_circles[i];
        element.style.top = element.getAttribute('data-top')
        element.style.left = element.getAttribute('data-left')
        element.style.opacity = element.getAttribute('data-opacity')
        element.style.width = element.getAttribute('data-size')
        element.style.height = element.getAttribute('data-size')
        element.style.background = element.getAttribute('data-color')
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

colors = ['#a39af9','#e8cafc','#0e67ec','#8f88d1','#5f58a8','#c4a2db','#a463cf','#a43beb','#2d76e3','#88b0eb','#b7cceb']

function random_place_circles() {
    const all_circles = document.getElementsByClassName('hello_circle')
    for (let i = 0; i < all_circles.length; i++) {
        const element = all_circles[i];
        element.style.top = randomInteger(-5,50)+'%'
        element.style.left = randomInteger(-5,90)+'%'
        element.style.opacity = randomInteger(30,75)+'%'
        const rnd_size = randomInteger(5,18)+'vw'
        element.style.width = rnd_size
        element.style.height = rnd_size
        element.style.background = colors[randomInteger(0,colors.length-1)]
        let rnd_time = randomInteger(2,6)
        element.style.animation = 'show_hello_circles '+rnd_time+'s forwards ease-in-out'
        let rnd_gg = randomInteger(1,3)
        element.style.animationDelay = rnd_gg
        element.style.transform = 'translateZ('+randomInteger(1,5)+')'

        setTimeout(function(){
            // console.log('showed! '+element)
            element.style.animation = 'hello_circles_breath 3s infinite linear'
            element.style.animationDuration = randomInteger(6,15)+'s'
            element.style.animationDelay = Math.random()*randomInteger(1,3) + 's'
        },rnd_time*1000)

        // setTimeout(function(){
        //     // console.log('showed! '+element)
        //     element.style.animation = ''
        // },rnd_time*1000+rnd_gg+1000)

    }
}

function show_popup(title,text) {
    const popup_div = document.getElementById('popup')
    popup_div.innerHTML = `<div id="popup_wrapper">
    <div class="popup_header">
        <div class="popup_title">${title}</div>
        <div class="popup_close" onclick="close_popup()">X</div>
    </div>
    <div class="popup_text"><span>${text}</span></div>
</div>`
    const wrapper = document.getElementById('popup_wrapper')
    popup_div.style.animation = 'show_popup_bg .5s forwards'
    popup_div.style.display = 'flex'

    console.log(popup_div)
    console.log(wrapper)

    wrapper.style.animation = 'show_popup .5s forwards .3s'
}
function close_popup() {
    const popup_div = document.getElementById('popup')
    const wrapper = document.getElementById('popup_wrapper')

    wrapper.style.animation = 'remove_popup .5s forwards'
    popup_div.style.animation = 'remove_popup_bg .5s forwards .3s'

    setTimeout(function() {
        popup_div.style.display = 'none'
    },800)
}

function go_paralax() {
    // let elems = document.getElementsByClassName('hello_circle')
    // for (let x = 0; x < elems.length; x++) {
    //     const element = elems[x];
    //     element.style.transform = 'translateY('+scrollY/4+'px)'
    //     console.log(pageYOffset)
    // }
}

// window.addEventListener('scroll', function() {
//     // console.log(scrollY, window.screen.height/2)
//     if(scrollY >= document.getElementById('hello').clientHeight/4){
//         let text = document.getElementById('about').querySelector('span')
//         // console.log(text)
//         text.style.animation = 'animate_from_down .7s forwards ease-in-out'
//     }
//     else{
//         // let text = document.getElementById('about').querySelector('span')
//         // text.style.animation = ''
//     }
//   });


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        // console.log(change.target)
        if (change.target.classList.contains('THIS_IS_SPAN')){
            change.target.classList.add('text_showing');
        }
        else{
            change.target.classList.add('element-show');
        }
      }
    });
  }
  let options = { threshold: [1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

random_place_circles()


