const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()} *** xt-disabled ***"
        aria-disabled="true"
      >
        Gray
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()} *** xt-disabled ***"
        aria-disabled="true"
      >
        Primary
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} text-black ${classes.buttonText()} *** xt-disabled ***"
        aria-disabled="true"
      >
        Text
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} xt-link *** xt-disabled ***"
        aria-disabled="true"
      >
        link
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
