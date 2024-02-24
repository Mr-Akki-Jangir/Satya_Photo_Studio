


      document.onreadystatechange = function () {
        if (document.readyState !== "complete") {
           $('.loader_wraper').show()
           $('body').hide()
           // show loading indicator and hide body
        } else {
           $('.loader_wraper').fadeOut(1200)
           $('body').fadeIn(500)
           // show body, and hide loading indicator
        }
     };


    
      $('.review_card_rating').find('input').attr("disabled", true);


let win_width = $(window).width()

$('#menu-btn').hide()
$('#desk_nav').show()

if(win_width <= 797)
{
    $('#menu-btn').show()
    $('#desk_nav').hide()
}

const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector("#menu-btn");
let status = false;

const menuAnimation = gsap.to(menuContainer, 1.2,{
  scaleX: 1,
  y: "100%",
  ease: Power4.easeInOut,
  paused: true
});

const link = gsap.from("nav > a", 1,{
  autoAlpha: 1,
  x:250,
  stagger: 0.2,
  ease: Power4.easeInOut,
  opacity: 0,
  delay: 2.5
});

menu.addEventListener("click", () =>{

  if (!status) {
    menuAnimation.play();
    TweenMax.delayedCall(0.3, function(){
      link.play();


    });
    status = !status;
  }
  else {
    link.reverse();
    TweenMax.delayedCall(0.3, function(){
      menuAnimation.reverse();  
    });
    status = !status;
  }

});







const hero_title_one =  new SplitType('#hero_title_top')
const hero_title_two =  new SplitType('#hero_title_btm')

const { innerHeight } = window

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1

})











  gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.txt_revel')

const revel_center_element = document.querySelectorAll('.revel_one');
const revel_left_elements = document.querySelectorAll('.revel_left');
const revel_right_elements = document.querySelectorAll('.revel_right');

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 2,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})

revel_center_element.forEach((el) => {
  el.classList.add('show')
})

revel_left_elements.forEach((el) => {
  el.classList.add('show')
})

revel_right_elements.forEach((el) => {
  el.classList.add('show')
})





const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Revel Animations

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {{
//     console.log(entry);
//     if(entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }else {
//       entry.target.classList.remove('show');
//     }
//   }})
// })

// const revel_center_element = document.querySelectorAll('.revel_one');
// const revel_left_elements = document.querySelectorAll('.revel_left');
// const revel_right_elements = document.querySelectorAll('.revel_right');

// revel_center_element.forEach((el) => observer.observe(el));
// revel_left_elements.forEach((el) => observer.observe(el));
// revel_right_elements.forEach((el) => observer.observe(el));





$('.contact_form_first').show();
$('.contact_form_two').hide();

$('#contact_msg_form').click(function(){
    $('.contact_form_first').show();
$('.contact_form_two').hide();

})
    


$('#contact_info_form').click(function(){
    $('.contact_form_first').hide();
$('.contact_form_two').show();

})









