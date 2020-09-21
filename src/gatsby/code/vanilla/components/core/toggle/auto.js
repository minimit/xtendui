import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center"
     data-xt-toggle="{ auto: { time: 2000, initial: false, step: 3, inverse: true, pause: ':scope > button, .toggle' } }">

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()} active-toggle">
    Toggle 2
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 3
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 4
  </button>

  <div class="card toggle ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 1
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 2
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 3
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 4
  </div>

</div>
`
