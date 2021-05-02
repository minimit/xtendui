import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--toggle-animation-multiple-duration-delay',
  mount: ({ ref }) => {
    const unmountToggle = mountToggle({ ref })

    // unmount

    return () => {
      unmountToggle()
    }
  },
})

/* mountToggle */

const mountToggle = ({ ref }) => {
  // init

  new Xt.Toggle(ref.querySelector(':scope > .xt-list'), {
    durationIn: ({ current, total }) => {
      return Math.min((total - current) * 500, 1000)
    },
    durationOut: ({ current }) => {
      return Math.min(current * 500, 1000)
    },
    delayIn: ({ current }) => {
      return Math.min(current * 250, 500)
    },
    delayOut: ({ current, total }) => {
      return Math.min((total - current) * 250, 500)
    },
  })

  // unmount

  return () => {}
}
