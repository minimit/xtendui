import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-default">
  <div class="form-group" style="padding: 1rem 1.5rem; background: #0078ff;">
    <label class="form-label form-label-inverse xt-custom">
      Custom
    </label>
    <input type="text" class="form-item form-item-inverse xt-custom" placeholder="Input">
  </div>

  <div class="form-group">
    <label class="form-label">
      Input
    </label>
    <input type="text" class="form-item" placeholder="Input">
  </div>

  <div class="form-group">
    <label class="form-label">
      Disabled
    </label>
    <input type="text" class="form-item" placeholder="Input" disabled>
  </div>

  <div class="form-group">
    <label class="form-label">
      File
    </label>
    <input type="file" class="form-item">
  </div>

  <div class="form-group">
    <label class="form-label">
      Textarea
    </label>
    <textarea class="form-item" placeholder="Textarea"></textarea>
  </div>

  <div class="form-group">
    <label class="form-label">
      Select
    </label>
    <select class="form-item">
      <option selected>Select an option</option>
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label">
      Select multiple
    </label>
    <select class="form-item" multiple>
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">
    submit
  </button>
</form>
`