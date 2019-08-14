import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const demo = {
  name: path.basename(__filename, '.js'),
  js: true,
  css: false,
  full: true
}
demo.htmlSource = `
<div class="list list-space--small align-items--center">
  <button type="button" class="btn">
    <span>
      Toggle 0
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn">
    <span>
      Toggle 1
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn">
    <span>
      Toggle 2
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn">
    <span>
      Toggle 3
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
      <div class="loader loader--x loader--size-bottom loader--js">
        <div class="filler">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 1
      <div class="loader loader--x loader--size-bottom loader--js">
        <div class="filler">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 2
      <div class="loader loader--x loader--size-bottom loader--js">
        <div class="filler">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 3
      <span class="loader loader--x loader--size-bottom loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
    </div>
  </div>
</div>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require('./' + demo.name + '.source.js')
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require('!!raw-loader!./' + demo.name + '.source.js').default
    }
    if (demo.css) {
      demo.cssSource = require('!!raw-loader!./' + demo.name + '.source.less').default
      demo.css = demo.css ? require('!raw-loader!less-loader!./' + demo.name + '.source.less').default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
