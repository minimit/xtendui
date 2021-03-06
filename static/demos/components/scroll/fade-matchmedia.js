import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--fade-matchmedia',
  mount: ({ ref }) => {
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountFade()
    }
  },
})

/* mountFade */

const mountFade = ({ ref }) => {
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-card:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // match media

  /***/
  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // fade

      ScrollTrigger.batch(items, {
        onEnter: batch => {
          gsap.killTweensOf(batch)
          gsap.set(batch, {
            opacity: 0,
          })
          gsap.to(batch, {
            opacity: 1,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(index * 0.15, 0.6)
            },
          })
        },
        onLeave: batch => {
          gsap.killTweensOf(batch)
          gsap.to(batch, {
            opacity: 0,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(index * 0.15, 0.6)
            },
          })
        },
        onEnterBack: batch => {
          gsap.killTweensOf(batch)
          gsap.set(batch, {
            opacity: 0,
          })
          gsap.to(batch, {
            opacity: 1,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(index * 0.15, 0.6)
            },
          })
        },
        onLeaveBack: batch => {
          gsap.killTweensOf(batch)
          gsap.to(batch, {
            opacity: 0,
            duration: 0.5,
            ease: 'quart.out',
            stagger: index => {
              return Math.min(index * 0.15, 0.6)
            },
          })
        },
      })
    },
    '(min-width: 640px)': () => {
      // fade

      for (const trigger of items) {
        gsap.set(trigger, {
          opacity: 1,
        })
      }
    },
  })
  /***/
}
