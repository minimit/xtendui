import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-progress',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // vars

  const dragEase = 'quart.out'
  let distance
  let duration

  const spinnerTime = 0.25
  const spinnerEase = 'linear'
  const fillerTime = 0.25
  const fillerEase = 'linear'

  // init

  /***/
  let self = new Xt.Slider(slider, {
    auto: {
      time: 4000,
      initial: false,
    },
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on distance
    distance = Math.abs(self.drag.position - self.drag.final)
    duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // autostart

  const autostart = () => {
    // slider
    const spinner = self.container.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
    const timeline = gsap.timeline({
      overwrite: false,
    })
    gsap.killTweensOf(spinner)
    timeline.to(spinner, {
      strokeDashoffset: 628,
      duration: spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    timeline.to(spinner, {
      strokeDashoffset: 0,
      duration: self.options.auto.time / 1000 - spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    // elements
    const els = self.elements.filter(x => self.hasCurrent({ el: x }))
    for (const el of els) {
      const fillers = el.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.set(filler, {
          height: 0,
          top: '100%',
        })
        gsap.to(filler, {
          height: '100%',
          top: 0,
          duration: self.options.auto.time / 1000,
          ease: fillerEase,
        })
      }
    }
    // targets
    const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
    for (const tr of trs) {
      const fillers = tr.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.set(filler, {
          width: 0,
          left: 0,
        })
        gsap.to(filler, {
          width: '100%',
          left: 0,
          duration: self.options.auto.time / 1000,
          ease: fillerEase,
        })
      }
    }
  }

  self.container.addEventListener('autostart.xt.slider', autostart)

  // autostop

  const autostop = () => {
    // elements
    const els = self.elements.filter(x => self.hasCurrent({ el: x }))
    for (const el of els) {
      const fillers = el.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          height: 0,
          top: 0,
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
    // targets
    const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
    for (const tr of trs) {
      const fillers = tr.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          width: 0,
          left: '100%',
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
  }

  self.container.addEventListener('autostop.xt.slider', autostop)

  // autopause

  const autopause = () => {
    // slider
    const spinner = self.container.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
    gsap.killTweensOf(spinner)
    gsap.to(spinner, {
      strokeDashoffset: 628,
      duration: spinnerTime,
      ease: spinnerEase,
      autoRound: false,
    })
    // elements
    const els = self.elements.filter(x => self.hasCurrent({ el: x }))
    for (const el of els) {
      const fillers = el.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          height: 0,
          top: '100%',
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
    // targets
    const trs = self.targets.filter(x => self.hasCurrent({ el: x }))
    for (const tr of trs) {
      const fillers = tr.querySelectorAll('.xt-filler span:nth-child(2)')
      for (const filler of fillers) {
        gsap.killTweensOf(filler)
        gsap.to(filler, {
          width: 0,
          left: 0,
          duration: fillerTime,
          ease: fillerEase,
        })
      }
    }
  }

  self.container.addEventListener('autopause.xt.slider', autopause)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
