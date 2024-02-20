const hero_title_one =  new SplitType('#hero_title_top')
const hero_title_two =  new SplitType('#hero_title_btm')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1

})

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.tr')

splitTypes.forEach((char, i) => {
    const txt = new SplitType(char, { types: 'chars'})

    gsap.from(txt.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: 0.2,
        stragger: 0.1
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
