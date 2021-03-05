import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonDefaultDrop = require('components/snippets/classes').buttonDefaultDrop
const cardSm = require('components/snippets/classes').cardSm
const cardWhite = require('components/snippets/classes').cardWhite
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-drop>

  <div class="xt-drop-item" data-xt-group="my-group">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      Group
    </button>

    <div class="xt-drop p-4" data-xt-group="my-group">
      <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${cardWhite()}">
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
    </div>

    <div class="xt-drop p-4" id="drop--unique-2" data-xt-position="right-end" data-xt-group="my-group">
      <div class="xt-card w-64 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="${cardSm()}">
        <div class="xt-h5">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>
        </div>
      </div>
    </div>

  </div>

  <div class="xt-drop-item">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      Drop
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${cardWhite()}">
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
    </div>

  </div>

</div>
`
