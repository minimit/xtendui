import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--parallax-multiple',
  mount: ({ object }) => {
    const unmountParallax = mountParallax({ object })

    // unmount

    return () => {
      unmountParallax()
    }
  },
})

/* mountParallax */

const mountParallax = ({ object }) => {
  // vars

  const trigger0 = object.querySelector('.box-0')

  // bottom

  const scrollTriggerBottom = {
    trigger: trigger0,
    start: 'top bottom',
    end: 'top bottom-=500', // end 500px after
    scrub: 1.5,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTriggerBottom,
    })
    .to(trigger0, {
      x: '50vw',
    })

  gsap
    .timeline({
      scrollTrigger: scrollTriggerBottom,
    })
    .to(trigger0, {
      rotate: '180deg',
      ease: 'quint.inOut',
    })

  // top

  const scrollTriggerTop = {
    trigger: trigger0,
    start: `bottom top+=500`, // start 500px before
    end: `bottom top`,
    scrub: 1.5,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTriggerTop,
    })
    .to(trigger0, {
      rotate: '360deg',
      scale: 2,
      ease: 'quint.inOut',
      immediateRender: false, // when multiple scrolltrigger animate the same properties use immediateRender: false
    })

  // unmount

  return () => {}
}