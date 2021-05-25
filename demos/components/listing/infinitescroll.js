import { Xt } from 'xtendui'
import 'xtendui/src/infinitescroll'

Xt.mount({
  matches: '.demo--infinitescroll',
  mount: ({ ref }) => {
    const unmountInfinitescroll = mountInfinitescroll({ ref })
    const unmountSwitcher = mountSwitcher({ ref })

    // unmount

    return () => {
      unmountInfinitescroll()
      unmountSwitcher()
    }
  },
})

/* mountInfinitescroll */

const mountInfinitescroll = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')

  // init

  let self = new Xt.Infinitescroll(infinitescroll, {
    get: false,
    max: 4,
    elements: {
      itemsContainer: '.xt-row',
      item: ':scope > *',
      scrollUp: '[data-xt-infinitescroll-up]',
      scrollDown: '[data-xt-infinitescroll-down]',
      spaceAdditional: '[data-xt-infinitescroll-up]',
      pagination: '[data-xt-infinitescroll-pagination]',
    },
    // activated by switcher
    //scrollUp = true,
    //scrollDown = true,
  })

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  // vars

  const infinitescroll = ref.querySelector('.infinitescroll')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    const self = Xt.get('xt-infinitescroll', infinitescroll)
    if (self) {
      if (switcher.checked) {
        self.options.events.scrollUp = true
        self.options.events.scrollDown = true
      } else {
        self.options.events.scrollUp = false
        self.options.events.scrollDown = false
      }
      self.destroy()
      self.reinit()
    }
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}