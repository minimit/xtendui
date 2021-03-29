const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-hero-v1">
    <div class="xt-slider xt-slider-absolute">
      <div class="xt-slides">
        <div class="xt-slides-inner xt-duration-none xt-transform-none">
          <div class="xt-slide w-full">
            <div class="hero relative overflow-hidden bg-black">
              <div class="hero-inner">
                <div class="xt-media-container bg-gray-700 w-full h-full absolute">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
                <div class="hero-content flex relative min-h-screen">
                  <a
                    href="/"
                    class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                  >
                    <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1. Lorem ipsum</h2>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"
            ></div>
          </div>

          <div class="xt-slide w-full">
            <div class="hero relative overflow-hidden bg-black">
              <div class="hero-inner">
                <div class="xt-media-container bg-gray-700 w-full h-full absolute">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
                <div class="hero-content flex relative min-h-screen">
                  <a
                    href="/"
                    class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                  >
                    <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2. Dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"
            ></div>
          </div>

          <div class="xt-slide w-full">
            <div class="hero relative overflow-hidden bg-black">
              <div class="hero-inner">
                <div class="xt-media-container bg-gray-700 w-full h-full absolute">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
                <div class="hero-content flex relative min-h-screen">
                  <a
                    href="/"
                    class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                  >
                    <h2 class="xt-h1">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"
            ></div>
          </div>

          <div class="xt-slide w-full">
            <div class="hero relative overflow-hidden bg-black">
              <div class="hero-inner">
                <div class="xt-media-container bg-gray-700 w-full h-full absolute">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
                <div class="hero-content flex relative min-h-screen">
                  <div
                    class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                  >
                    <h2 class="xt-h1">4. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a href="/" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"
            ></div>
          </div>

          <div class="xt-slide w-full">
            <div class="hero relative overflow-hidden bg-black">
              <div class="hero-inner">
                <div class="xt-media-container bg-gray-700 w-full h-full absolute">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-black opacity-50"
                  ></div>
                </div>
                <div class="hero-content flex relative min-h-screen">
                  <div
                    class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                  >
                    <h2 class="xt-h1">5. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a href="/" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"
            ></div>
          </div>

          <div class="xt-slide w-full in-slider">
            <div class="hero relative overflow-hidden bg-black">
              <div class="hero-inner">
                <div class="xt-media-container bg-gray-700 w-full h-full absolute">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black opacity-50"
                  ></div>
                </div>
                <div class="hero-content flex relative min-h-screen">
                  <div
                    class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right"
                  >
                    <h2 class="xt-h1">6. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a href="/" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"
            ></div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group"
        data-xt-nav="-1"
        aria-label="Previous slide"
        data-xt-mousefollow
      >
        <div class="xt-mousefollow text-white text-4xl transition-opacity opacity-0 active:opacity-100">
          ${classes.iconArrowLeft({
            classes: 'transform transition-all group-active:opacity-75 group-active:scale-75',
          })}
        </div>
      </button>

      <button
        type="button"
        class="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group"
        data-xt-nav="1"
        aria-label="Next slide"
        data-xt-mousefollow
      >
        <div class="xt-mousefollow text-white text-4xl transition-opacity opacity-0 active:opacity-100">
          ${classes.iconArrowRight({
            classes: 'transform transition-all group-active:opacity-75 group-active:scale-75',
          })}
        </div>
      </button>

      <nav class="xt-slider-pagination hidden">
        <button type="button" class="xt-button xt-ignore" data-xt-pag title="Slide xt-num"></button>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}