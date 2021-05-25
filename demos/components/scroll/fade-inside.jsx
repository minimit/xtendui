import React, { useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function demo() {
  const refCurrent = useRef(null)
  let unmount
  let ref = useCallback(ref => {
    if (refCurrent.current) {
      unmount(refCurrent.current)
    }
    refCurrent.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--fade-inside-react" ref={ref}>
      <div className="xt-row xt-row-6">
        <div className="w-full">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12">
          <div className="xt-card rounded-md text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h5">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountFade = mountFade({ ref })

  // unmount

  return () => {
    unmountFade()
  }
}

/* mountFade */

const mountFade = ({ ref }) => {
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-card:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  ScrollTrigger.batch(items, {
    once: true,
    onEnter: batch => {
      const triggers = batch.filter(x => !x.dataset.fadesetup)
      if (triggers.length) {
        gsap.killTweensOf(triggers)
        gsap.to(triggers, {
          opacity: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: index => {
            return Math.min(index * 0.15, 0.6)
          },
        })
      }
    },
    onRefresh: (batch, scrollTriggers) => {
      for (const self of scrollTriggers) {
        if (!self.trigger.dataset.fadesetup && self.progress === 0) {
          self.trigger.dataset.fadesetup = 'true'
          gsap.killTweensOf(self.trigger)
          gsap.set(self.trigger, {
            opacity: 1,
          })
        }
      }
    },
  })
}