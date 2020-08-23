import { Xt } from 'xtend-library/src/xt.js'

Xt.mount.push({
  matches: '#demo--drop-events',
  mount: object => {
    // init

    let self = new Xt.Drop(object, {
      elements: ':scope > .drop-container',
      targets: ':scope > .drop-container > .drop',
    })

    // log

    const log = document.querySelector('#demo--drop-events-log')

    const logAdd = text => {
      log.innerHTML += text + '<br/>'
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(window.logTimeout)
      window.logTimeout = setTimeout(() => {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // first element

    const firstEl = document.querySelector('#demo--drop-events-first-element')

    const firstElFnc = () => {
      logAdd('<strong>1st element</strong>')
      const elements = self.elements
      elements[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo--drop-events-first-target')

    const firstTrFnc = () => {
      logAdd('<strong>1st target</strong>')
      const targets = self.targets
      targets[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // add

    const addBtn = document.querySelector('#demo--drop-events-add')
    const btnPrimary = require('components/snippets/classes/btn-primary').default
    const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
    const cardDefaultDropList = require('components/snippets/classes/card-default-drop-list').default

    const addFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>add</strong>')
        // elements
        const strEl = `
        <div class="drop-container">

          <button type="button" class="btn btn-medium ${btnPrimary()}">
            drop
          </button>

          <div class="drop">
            <div class="drop-inner">
              <div class="card card-small ${cardDefaultDropList()}">
                <div class="card-block py-3">
                  <nav class="list-block">
                    <a href="#" class="btn btn-small ${btnDefaultDrop()}">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                    <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                      Dolor sit
                    </button>
                    <button type="button" class="btn btn-small ${btnDefaultDrop()}">
                      Amet
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>

        </div>
      `
        document.querySelector('#demo--drop-events').append(Xt.createElement(strEl))
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo--drop-events-remove')

    const removeFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>remove</strong>')
        // element
        const elements = self.elements
        elements[elements.length - 1].remove()
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    removeBtn.addEventListener('click', removeFnc)

    // block

    const blockBtn = document.querySelector('#demo--drop-events-block')

    const blockFnc = () => {
      logAdd('<strong>block/unblock</strong>')
      for (const element of self.elements) {
        if (element.classList.contains('xt-block')) {
          element.classList.remove('xt-block')
        } else {
          element.classList.add('xt-block')
        }
      }
    }

    blockBtn.addEventListener('click', blockFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo--drop-events-reinit')

    const reinitFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo--drop-events-restart')

    const restartFnc = () => {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo--drop-events-destroy')

    const destroyFnc = () => {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo--drop-events-unmount')

    const unmountFnc = () => {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = e => {
      let str = 'event <strong>' + e.type + '</strong>' + ' direction <strong>' + self.direction + '</strong>'
      if (e.target.getAttribute('title')) {
        str += ' from <strong>' + e.target.getAttribute('title') + '</strong>'
      } else if (e.target.querySelector('.card-title')) {
        str += ' from <strong>' + e.target.querySelector('.card-title').innerHTML + '</strong>'
      } else if (!e.target.querySelector('*')) {
        str += ' from <strong>' + e.target.innerHTML + '</strong>'
      }
      logAdd(str)
    }

    object.addEventListener('init.xt', events)
    object.addEventListener('destroy.xt', events)
    document.addEventListener('on.xt', events, true)
    document.addEventListener('off.xt', events, true)

    // unmount

    const unmount = () => {
      firstEl.removeEventListener('click', firstElFnc)
      firstTr.removeEventListener('click', firstTrFnc)
      addBtn.removeEventListener('click', addFnc)
      removeBtn.removeEventListener('click', removeFnc)
      reinitBtn.removeEventListener('click', reinitFnc)
      restartBtn.removeEventListener('click', restartFnc)
      destroyBtn.removeEventListener('click', destroyFnc)
      unmountBtn.removeEventListener('click', unmountFnc)
      object.removeEventListener('init.xt', events)
      object.removeEventListener('destroy.xt', events)
      document.removeEventListener('on.xt', events, true)
      document.removeEventListener('off.xt', events, true)
      self.destroy()
      self = null
    }
    return unmount
  },
})
