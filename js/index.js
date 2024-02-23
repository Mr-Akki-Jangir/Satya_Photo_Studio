


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


const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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





