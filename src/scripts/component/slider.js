/* xtend (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

import Xt from '../xtend';
import Core from './core';

//////////////////////
// Slider
//////////////////////

class Slider extends Core {

  /**
   * constructor
   * @param {Node|HTMLElement} object Base node
   * @param {Object} jsOptions User options
   * @constructor
   */
  constructor(object, jsOptions = {}) {
    super(object, jsOptions);
  }

  //////////////////////
  // init
  //////////////////////

  /**
   * init events
   */
  initEvents() {
    super.initEvents();
    let self = this;
    let options = self.options;
    if (options.drag) {
      for (let tr of self.targets) {
        // event on
        let dragstartHandler = Xt.dataStorage.put(tr, 'dragstartHandler' + self.namespace,
          self.eventdragstartHandler.bind(self).bind(self, tr));
        let eventsOn = ['mousedown', 'touchstart'];
        for (let event of eventsOn) {
          tr.removeEventListener(event, dragstartHandler);
          tr.addEventListener(event, dragstartHandler);
        }
      }
    }
  }

  /**
   * element drag on handler
   * @param {Node|HTMLElement} target
   * @param {Event} e
   */
  eventdragstartHandler(target, e) {
    let self = this;
    let options = self.options;
    // handler
    if (!e.button || e.button !== 2) { // not right click or it gets stuck
      if (!self.checkAnim(Xt.arrSingle(target))) {
        // save event
        self.detail.eInit = e;
        // logic
        let eventLimit = self.container.querySelectorAll('.event-limit');
        if (eventLimit.length) {
          if (Xt.checkOutside(e, eventLimit)) {
            self.eventdragstart(target, e);
          }
        } else {
          self.eventdragstart(target, e);
        }
        // auto
        if (options.autoPause) {
          self.autoPause();
        }
        // event off
        let dragendHandler = Xt.dataStorage.put(window, 'dragendHandler' + self.namespace,
          self.eventdragendHandler.bind(self).bind(self, target));
        let eventsOff = ['mouseup', 'touchend'];
        for (let event of eventsOff) {
          window.removeEventListener(event, dragendHandler);
          window.addEventListener(event, dragendHandler);
        }
      }
    }
  }

  /**
   * element drag off handler
   * @param {Node|HTMLElement} target
   * @param {Event} e
   */
  eventdragendHandler(target, e) {
    let self = this;
    let options = self.options;
    // handler
    if (!self.checkAnim(Xt.arrSingle(target))) {
      // logic
      let eventLimit = self.container.querySelectorAll('.event-limit');
      if (eventLimit.length) {
        if (Xt.checkOutside(e, eventLimit)) {
          self.eventdragend(target, e);
        }
      } else {
        self.eventdragend(target, e);
      }
      // auto
      if (options.autoPause) {
        self.autoPause();
      }
      // event off
      let dragendHandler = Xt.dataStorage.get(window, 'dragendHandler' + self.namespace);
      let eventsOff = ['mouseup', 'touchend'];
      for (let event of eventsOff) {
        window.removeEventListener(event, dragendHandler);
      }
    }
  }

  /**
   * element drag on
   * @param {Node|HTMLElement} target
   * @param {Event} e
   */
  eventdragstart(target, e) {
    let self = this;
    // save event
    self.detail.eCurrent = e;
    // eDetail
    self.eDetailSet(e);
    // event move
    let dragHandler = Xt.dataStorage.put(target, 'dragHandler' + self.namespace,
      self.eventDragHandler.bind(self).bind(self, target));
    let events = ['mousemove', 'touchmove'];
    for (let event of events) {
      target.removeEventListener(event, dragHandler);
      target.addEventListener(event, dragHandler);
    }
    // listener dispatch
    target.dispatchEvent(new CustomEvent('dragstart.xt.slider', {detail: self.eDetail}));
  }

  /**
   * element drag off
   * @param {Node|HTMLElement} target
   * @param {Event} e
   */
  eventdragend(target, e) {
    let self = this;
    // save event
    self.detail.eCurrent = e;
    // eDetail
    self.eDetailSet(e);
    // event move
    let dragHandler = Xt.dataStorage.get(target, 'dragHandler' + self.namespace);
    let events = ['mousemove', 'touchmove'];
    for (let event of events) {
      target.removeEventListener(event, dragHandler);
    }
    // listener dispatch
    target.dispatchEvent(new CustomEvent('dragend.xt.slider', {detail: self.eDetail}));
  }

  /**
   * element drag handler
   * @param {Node|HTMLElement} target
   * @param {Event} e
   */
  eventDragHandler(target, e) {
    let self = this;
    let options = self.options;
    // save event
    self.detail.eCurrent = e;
    // eDetail
    self.eDetailSet(e);
    // listener dispatch
    target.dispatchEvent(new CustomEvent('drag.xt.slider', {detail: self.eDetail}));
    // auto
    if (options.autoPause) {
      self.autoPause();
    }
  }

}

//////////////////////
// defaults
//////////////////////

Slider.componentName = 'slider';
Slider.defaults = {
  "elements": ".slide-control",
  "targets": ":scope > .slides > .slide",
  "class": "active",
  "on": "click",
  "min": 1,
  "max": 1,
  "instant": {"elements": true},
  "drag": false,
  "dragThreshold": 100,
  "aria": true
};

//////////////////////
// export
//////////////////////

export default Slider;