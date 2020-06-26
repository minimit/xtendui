import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      menu left
    </button>
    <div class="overlay overlay-default overlay-position-left overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-item card-item--menu">
                  <div class="list">
                    <button type="button" class="btn">
                      Menu
                    </button>
                    <button type="button" class="btn">
                      Info
                    </button>
                    <button type="button" class="btn">
                      Account
                    </button>
                  </div>
                </div>
                <div class="card-asset">
                  ${img({ classes: 'media-cover', ratio: '37.5%' })}
                </div>
                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
                <div class="card-block card-item card-block-side"
                  style="margin-top: auto">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      contact
    </button>
    <div class="overlay overlay-default overlay-squared overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm">

                  <div class="card-item card-block-side col-5-sm">
                    <div class="card-asset">
                      ${img({ classes: 'media-cover', ratio: '100%', loading: 'eager' })}
                    </div>
                    <div class="card-block card-item">
                      <p class="h5">
                        Lorem ipsum <a href="#">dolor</a> <strong>sit</strong> <code>amet</code>, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div class="card-block card-item">

                    <div class="card-title">
                      Contact us
                    </div>

                    <form class="form-default">

                      <div class="row row-form">
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Name
                            </label>
                            <input type="text" class="form-item"
                              placeholder="Name" required>
                          </div>
                        </div>
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Surname
                            </label>
                            <input type="text" class="form-item"
                              placeholder="Surname" required>
                          </div>
                        </div>
                      </div>

                      <div class="row row-form">
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Email
                            </label>
                            <input type="email" class="form-item"
                              placeholder="Email" required>
                          </div>
                        </div>
                        <div class="col-form-double">
                          <div class="form-group">
                            <label class="form-label">
                              Telephone
                            </label>
                            <input type="text" class="form-item"
                              placeholder="Telephone" required>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label">
                          Select an option
                        </label>
                        <select class="form-item"
                          required>
                          <option selected value="">Select an option</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label class="form-label">
                          Textarea
                        </label>
                        <textarea class="form-item"
                          placeholder="Textarea" required></textarea>
                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="check-contact" name="check-contact"
                          required>
                        <label class="form-label" for="check-contact">
                        <span>
                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.
                        </label>
                      </div>

                      <button type="submit" class="btn btn-primary btn-big">
                        Send
                      </button>

                    </form>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      newsletter
    </button>
    <div class="overlay overlay-default overlay-squared overlay-close-outside">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close" aria-label="Close"></div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm">

                  <div class="card-item col-5-sm">
                    <div class="card-asset">
                      ${img({ classes: 'media-cover', ratio: '100%', loading: 'eager' })}
                    </div>
                  </div>

                  <div class="card-block card-item">

                    <div class="card-title">
                      Contact us
                    </div>

                    <form class="form-default">

                      <div class="form-group">
                        <label class="form-label">
                          Email
                        </label>
                        <input type="email" class="form-item"
                          placeholder="Email" required>
                      </div>

                      <div class="form-group-inline">

                        <label class="form-label flex-full">
                          Select an option
                        </label>

                        <div class="form-group">
                          <input type="radio" id="radio-newsletter-0" name="radio-newsletter"
                            required>
                          <label class="form-label" for="radio-newsletter-0">
                            Option 1
                          </label>
                        </div>

                        <div class="form-group">
                          <input type="radio" id="radio-newsletter-1" name="radio-newsletter"
                            required>
                          <label class="form-label" for="radio-valinewsletterdation-1">
                            Option 2
                          </label>
                        </div>

                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="check-newsletter" name="check-newsletter"
                          required>
                        <label class="form-label" for="check-newsletter">
                        <span>
                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.
                        </label>
                      </div>

                      <button type="submit" class="btn btn-primary btn-big">
                        Subscribe
                      </button>

                    </form>

                  </div>

                </div>

                <div class="card-block card-item card-block-side card-block-small">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>.</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page