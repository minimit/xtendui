const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ matches: { '(min-width: 768px)': { max: 2 } } }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()} in-toggle">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}