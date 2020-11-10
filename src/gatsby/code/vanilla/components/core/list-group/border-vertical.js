import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default
const inputDefaultGroup = require('components/snippets/classes/input-default-group').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <div class="list flex-col">

    <div class="list-inner">
      <button type="button" class="btn btn-md rounded-tl-md border border-gray-500 ${btnDefaultGroup()}">
        ${iconSearch({ classes: 'icon-lg' })}
      </button>
      <input type="text" class="form-item rounded-tr-md border border-l-0 border-gray-500 ${inputDefaultGroup()}" aria-label="Search" placeholder="Seach Catalog" />
    </div>

    <button type="button" class="btn btn-md rounded-b-md border border-t-0 border-gray-500 ${btnPrimaryGroup()}">
      Lorem ipsum
    </button>

  </div>

</form>
`