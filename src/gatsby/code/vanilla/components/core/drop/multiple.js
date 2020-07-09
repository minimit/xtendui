import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-drop="{ elements: '.drop-container', targets: '.drop-container > .drop' }">
  <div class="list list-default list-space-small align-items-center">

    <div class="drop-container">
      <button type="button" class="btn btn-primary">
        drop
      </button>
      <div class="drop drop-default">
        <div class="drop-inner">
          <div class="drop-design"></div>
          <div class="drop-content">

            <ul class="list list-drop">
              <li>
                <button type="button">
                  Lorem ipsum dolor
                </button>
              </li>
              <li>
                <button type="button">
                  Dolor sit
                </button>
              </li>
              <li>
                <button type="button">
                  Amet
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

    <div class="drop-container">
      <button type="button" class="btn btn-primary">
        drop
      </button>
      <div class="drop drop-default">
        <div class="drop-inner">
          <div class="drop-design"></div>
          <div class="drop-content">

            <ul class="list list-drop">
              <li>
                <button type="button">
                  Lorem ipsum dolor
                </button>
              </li>
              <li>
                <button type="button">
                  Dolor sit
                </button>
              </li>
              <li>
                <button type="button">
                  Amet
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

  </div>
</div>
`