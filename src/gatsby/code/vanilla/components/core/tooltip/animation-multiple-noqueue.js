import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-tooltip="{ delay: 25, queue: false }">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    tooltip
  </button>

  <div class="xt-tooltip p-2 group" data-xt-duration="300">
    <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
      Lorem ipsum dolor sit amet
    </div>
  </div>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    tooltip
  </button>

  <div class="xt-tooltip p-2 group" data-xt-duration="300">
    <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()} transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
      Consectetur adipiscing elit
    </div>
  </div>

</div>
`