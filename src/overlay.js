import { Xt } from './xt'
import './toggle'
import JSON5 from 'json5'

/**
 * Overlay
 */
class Overlay extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init aria
   */
  initAriaRole() {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      // role
      if (options.aria === true || options.aria.role) {
        if (self.targets.length) {
          for (const el of self.elements) {
            el.setAttribute('aria-haspopup', 'dialog')
          }
          for (const tr of self.targets) {
            tr.setAttribute('role', 'dialog')
            tr.setAttribute('aria-modal', 'true')
          }
        } else {
          for (const el of self.elements) {
            el.setAttribute('role', 'dialog')
            el.setAttribute('aria-modal', 'true')
          }
        }
      }
    }
  }

  //
}

//
// options
//

Overlay.componentName = 'xt-overlay'
Overlay.optionsDefault = {
  // element
  elements: ':scope > a, :scope > button',
  targets: ':scope > .xt-overlay',
  elementsInner: ':scope > a, :scope > button',
  // class
  class: 'in in-overlay',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  eventLimit: '.event-limit, .xt-overlay',
  closeAuto: true,
  closeDeep: '.xt-dismiss',
  closeInside: '.xt-backdrop, .xt-overlay, .xt-overlay-container',
  closeOutside: false,
  // timing
  queue: {
    elements: false,
    targets: true,
    elementsInner: false,
    targetsInner: true,
  },
  // other
  appendTo: 'body',
  classHtml: 'xt-scrollbar-overlay',
  focusLimit: true,
  zIndex: {
    targets: {
      start: 5000, // same as options.zIndex.targets.start
      factor: 0,
    },
  },
}

//
// export
//

Xt.Overlay = Overlay

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount.push({
    matches: `[data-${Xt.Overlay.componentName}]`,
    mount: ({ object }) => {
      // vars

      const optionsMarkup = object.getAttribute(`data-${Xt.Overlay.componentName}`)
      const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Overlay(object, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}