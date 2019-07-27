import {TweenMax} from "gsap/TweenMax";
import BezierEasing from "bezier-easing";

/**
 * auto progress
 */

(function () {

  // vars

  let timeHide = 300;
  let easeOut = new Ease(BezierEasing(.14,.63,0,1));

  let lists = document.querySelectorAll('.list');

  for (let list of lists) {

    // xt-toggle

    let self = Xt.init('xt-toggle', list, {
      "auto": {
        "time": 2000,
        "pause": ":scope > button"
      }
    });
    self.unmount = function () {
      self = null;
    };

    // auto start

    self.object.addEventListener('start.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains('active'));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.set(filler, {height: 0, top: '100%', ease: easeOut});
          TweenMax.to(filler, self.options.auto.time / 1000, {height: '100%', top: 0, ease: easeOut});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains('active'));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.set(filler, {width: 0, left: 0, ease: easeOut});
          TweenMax.to(filler, self.options.auto.time / 1000, {width: '100%', left: 0, ease: easeOut});
        }
      }
    });

    // auto stop

    self.object.addEventListener('stop.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains('active'));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: 0, ease: easeOut});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains('active'));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: '100%', ease: easeOut});
        }
      }
    });

    // auto pause

    self.object.addEventListener('pause.xt.auto', function (e) {
      // on elements
      let elements = self.elements.filter(x => x.classList.contains('active'));
      for (let element of elements) {
        let fillers = element.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {height: 0, top: '100%', ease: easeOut});
        }
      }
      // on targets
      let targets = self.targets.filter(x => x.classList.contains('active'));
      for (let target of targets) {
        let fillers = target.querySelectorAll('.filler span:nth-child(1)');
        for (let filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, {width: 0, left: 0, ease: easeOut});
        }
      }
    });

  }

})();
