import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo_source--from">
  <button type="button" class="btn">
    <span>default</span>
  </button>

  <button type="button" class="btn btn--primary">
    <span>primary</span>
  </button>

  <button type="button" class="btn btn--secondary">
    <span>secondary</span>
  </button>

  <button type="button" class="btn btn--text">
    <span>text</span>
  </button>

  <button type="button" class="btn btn--link">
    <span>link</span>
  </button>
</div>
`
