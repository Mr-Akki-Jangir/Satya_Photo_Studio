const hero_title_one =  new SplitType('#hero_title_top')
const hero_title_two =  new SplitType('#hero_title_btm')

const { innerHeight } = window

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1

})

gsap.to('#zomm-out' ,{
    scale: 0.6,
    stagger: 0.25,
    duration: 2,
    scrollTrigger: {
        trigger: '#zomm-out',
        pin: true,
        end: `+=${innerHeight * 1}`,
        scrub: 3
    }

})




var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".carousels_section",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".carousels_section .uk-container", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".carousels_container", {scaleX: 0, transformOrigin: "center", ease: "none"}, 0)
  .to(".carousels_section", {backgroundColor: "#"}, 0);


  

  let t_section_2 = gsap.timeline({

    // defaults: {
    //     ease: 'power4.inOut',
    //     duration: 2
    // }

    scrollTrigger: {
        trigger: '.services_section',
        scrub: true,
        pin: true
    }
  })

  t_section_2.to('.two_ele_left_side', { opacity: 1, x: 0, ease: "power4.inOut"})
  .to('.two_ele_right_side', { opacity: 1, x: 0, ease: "power4.inOut"})



  let t_section_3 = gsap.timeline({

    scrollTrigger: {
        trigger: '.prices_section',
        scrub: true,
        pin: true
    }
  })

  t_section_3.to('.two_ele_sec_type2_left', { opacity: 1, x: 0, ease: "power4.inOut"})
  .to('.two_ele_type2_right_side', { opacity: 1, x: 0, ease: "power4.inOut"})


  let t_section_5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.tools_and_equipment_section',
        scrub: true,
        pin: true
    }
  })

  t_section_5.from(".gear_container", {scale: 0.3, autoAlpha: 0, ease: "power2"})





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





