Xt.observe.push({
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index, query) {

  // vars

  let time = .8;
  let timeMask = .8;
  let timeContent = .8;
  let sizeContent = 100;
  CustomEase.create('easeIn', '.36,0,0,1');
  CustomEase.create('easeOut', '1,0,.64,1');
  CustomEase.create('easeInOut', '.68,.13,.25,1');

  // slider

  let self = new Xt.Slider(main, {
    "durationOn": time * 1000,
    "durationOff": time * 1000,
    "instant": false
  });

  let dragger = self.dragger;

  // drag

  dragger.addEventListener('drag.xt.slider', function (e) {
    let target = self.targets.filter(x => x.classList.contains('active'))[0];
    let ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / target.clientWidth;
    // direction
    let direction = 1;
    if (self.detail.xStart - self.detail.xCurrent > 0) {
      direction = -1;
    }
    // mask
    TweenMax.set(target, {x: -self.detail.xPos + 'px', opacity: 1});
    TweenMax.set(dragger, {x: self.detail.xPos});
    // content
    let contents = target.querySelectorAll('.card_content > *');
    for (let content of contents) {
      TweenMax.set(content, {x: sizeContent * ratio * direction, opacity: 1});
    }
  });

  // dragend

  dragger.addEventListener('dragend.xt.slider', function (e) {
    let target = self.targets.filter(x => x.classList.contains('active'))[0];
    // mask
    TweenMax.set(target, {x: -self.detail.xPosOld + 'px'});
    TweenMax.to(target, timeMask, {x: 0, opacity: 1, ease: 'easeInOut'});
    TweenMax.set(dragger, {x: self.detail.xPosOld});
    TweenMax.to(dragger, timeMask, {x: 0, ease: 'easeInOut'});
    // content
    let contents = target.querySelectorAll('.card_content > *');
    for (let content of contents) {
      TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeInOut'});
    }
  });

  // targets

  for (let target of self.targets) {

    // on

    target.addEventListener('on.xt', function (e) {
      if (!self.detail.initial) {
        let xMax = target.clientWidth;
        // direction
        let direction = 1;
        if (target.classList.contains('inverse')) {
          direction = -1;
        }
        // setup
        TweenMax.set(target, {opacity: 0});
        // mask
        TweenMax.set(target, {x: -xMax * direction});
        TweenMax.to(target, timeMask, {x: 0, opacity: 1, ease: 'easeInOut'});
        TweenMax.set(dragger, {x: xMax * direction});
        TweenMax.to(dragger, timeMask, {x: 0, ease: 'easeInOut'});
        // content
        let contents = target.querySelectorAll('.card_content > *');
        for (let content of contents) {
          TweenMax.set(content, {x: sizeContent * direction, opacity: 0});
          TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeInOut'});
        }
      }
    });

    // off

    target.addEventListener('off.xt', function (e) {
      let xMax = target.clientWidth;
      // direction
      let direction = 1;
      if (target.classList.contains('inverse')) {
        direction = -1;
      }
      // mask
      TweenMax.to(target, timeMask, {x: xMax * direction, opacity: 0, ease: 'easeInOut'});
      TweenMax.to(dragger, timeMask, {x: -xMax * direction, ease: 'easeInOut'});
      // content
      let contents = target.querySelectorAll('.card_content > *');
      for (let content of contents) {
        TweenMax.to(content, timeContent, {x: -sizeContent * direction, opacity: 0, ease: 'easeInOut'});
      }
    });

  }

}