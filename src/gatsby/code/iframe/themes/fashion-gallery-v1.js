import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="product">

  <div class="container">
    <div class="product_inner">
      <div class="row">
      
        <div class="product_left_col">
          <div class="product_left_outer">
            <div class="product_left">
            
              <div class="product_images">
                <div class="list-block">
                  <a href="#product-image-overlay-0" class="product_image">
                    <div class="product_image_inner" data-xt-overlay="{ targets: '#overlay--product_images' }">
                      <img id="product-image-0" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </a>
                  <a href="#product-image-overlay-1" class="product_image">
                    <div class="product_image_inner" data-xt-overlay="{ targets: '#overlay--product_images' }">
                      <img id="product-image-1" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </a>
                  <a href="#product-image-overlay-3" class="product_image">
                    <div class="product_image_inner" data-xt-overlay="{ targets: '#overlay--product_images' }">
                      <img id="product-image-2" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </a>
                  <a href="#product-image-overlay-4" class="product_image">
                    <div class="product_image_inner" data-xt-overlay="{ targets: '#overlay--product_images' }">
                      <img id="product-image-3" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </a>
                  <a href="#product-image-overlay-4" class="product_image">
                    <div class="product_image_inner" data-xt-overlay="{ targets: '#overlay--product_images' }">
                      <img id="product-image-4" src="/img.svg" loading="lazy" alt=""/>
                    </div>
                  </a>
                </div>
              </div>
              
              <div class="product_images_nav">
                <div class="list-block">
                  <a href="#product-image-0" class="product_images_nav_item" title="Go to image 0">
                    <div class="product_images_nav_item_inner">
                      <span></span>
                    </div>
                  </a>
                  <a href="#product-image-1" class="product_images_nav_item" title="Go to image 1">
                    <div class="product_images_nav_item_inner">
                      <span></span>
                    </div>
                  </a>
                  <a href="#product-image-2" class="product_images_nav_item" title="Go to image 2">
                    <div class="product_images_nav_item_inner">
                      <span></span>
                    </div>
                  </a>
                  <a href="#product-image-3" class="product_images_nav_item" title="Go to image 3">
                    <div class="product_images_nav_item_inner">
                      <span></span>
                    </div>
                  </a>
                  <a href="#product-image-4" class="product_images_nav_item" title="Go to image 3">
                    <div class="product_images_nav_item_inner">
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div class="overlay overlay-default overlay-screen overlay-size-full" id="overlay--product_images">
                <div class="overlay-container">
                  <div class="overlay-inner">
                    <div class="overlay-design"></div>
                    <div class="card card-overlay">
                      <div class="card-design"></div>
                      <div class="btn btn-close" aria-label="Close"></div>
                      <div class="card-inner">
                        <div class="card-content">
                          <div class="card-asset">
                            <div class="list-block">
                              <img id="product-image-overlay-0" src="/img.svg" loading="eager" alt=""/>
                              <img id="product-image-overlay-1" src="/img.svg" loading="eager" alt=""/>
                              <img id="product-image-overlay-2" src="/img.svg" loading="eager" alt=""/>
                              <img id="product-image-overlay-3" src="/img.svg" loading="eager" alt=""/>
                              <img id="product-image-overlay-4" src="/img.svg" loading="eager" alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        
        <div class="product_right_col" id="header-continue-target">
          <div class="product_right">
          
            <h1 class="product_title">
              Lorem ipsum dolor sit amet
            </h1>
            
            <div class="product_price">
              €&nbsp;229,00
            </div>
            
            <div class="product_actions">
              <a href="#" class="btn btn-primary btn-big btn-wide btn-tall">
              Add to cart
              </a>
            </div>
            
            <div class="product_details">
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            
            <div class="product_attributes">
              <dl class="dl-line">
                <dt>
                  Product Code:
                </dt>
                <dd>
                  012345
                </dd>
                <dt>
                  Internal Code:
                </dt>
                <dd>
                  543210
                </dd>
              </dl>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
  <a href="#header-continue-target" class="header-continue">
    <span class="icon-xt-chevron-down"></span>
  </a>
  
  <div class="product_limit-bottom"></div>
  
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
