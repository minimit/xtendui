import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonDefaultDrop = require('components/snippets/classes/button-default-drop').default
const cardWhite = require('components/snippets/classes/card-white').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop="{ position: 'bottom' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      bottom
    </button>

    <div class="xt-drop">
      <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
      <div class="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
    </div>

  </div>

  <div data-xt-drop="{ position: 'bottom-start' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      bottom start
    </button>

    <div class="xt-drop">
      <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
      <div class="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
    </div>

  </div>

  <div data-xt-drop="{ position: 'right-end' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      right end
    </button>

    <div class="xt-drop">
      <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
      <div class="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
    </div>

  </div>

</div>
`