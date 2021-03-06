---
type: "Hidden"
category: "Hidden"
parent: "Future"
title: "Infinite Scroll"
description: "Automatic pagination activable on click or on scroll, with browser navigation support that loads only the current page."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/infinitescroll'`.

Initialize automatically **within markup** with `[data-xt-infinitescroll="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Infinitescroll(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **infinite scroll**.

Remember to set a `options.get` variable for a **get request on current url** to load items. Also remember to set `options.max` number of pages.

Try the demo [on a new page](/demos/components/listing/infinitescroll?false=2) to preview location hash changes.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/listing/infinitescroll">
  </div>
</demo>

If you need to add **[Gsap batch](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()) or other code on content added dynamically**, just **check if already done for content added dinamically**.

## Options

Here are the main **javascript options**.

Inside `elements.pagination:Query` you can use this strings that gets populated with variables:

- `xt-num` replaced with current page number
- `xt-tot` replaced with total pages number

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `get:String`                          | `false`        | **url get** variable to use            |
| Option                    | `min:Number`                          | `1`        | Initial and minimum page number            |
| Option                    | `max:Number`                          | `'Infinity'`        | Maximum page number            |
| Option                    | `events.scrollUp:Boolean`                          | `false`        | Automatically activate on scroll up            |
| Option                    | `events.scrollDown:Boolean`                          | `false`        | Automatically activate on scroll down            |
| Option                    | `events.trigger:String`                          | `'click'`        | Event to trigger infinite scroll            |
| Option                    | `events.reset:String`                          | `'click'`        | Event to trigger infinite scroll reset            |
| Option                    | `elements.itemsContainer:Query`                          | `false`        | Container query for items container            |
| Option                    | `elements.item:Query`                          | `false`        | Items container query for items            |
| Option                    | `elements.scrollUp:Query`                          | `false`        | Container query for trigger elements when scrolling up            |
| Option                    | `elements.scrollDown:Query`                          | `false`        | Container query for trigger elements when scrolling down            |
| Option                    | `elements.spaceAdditional:Query`                          | `false`        | Container query for additional space when resuming pages            |
| Option                    | `elements.pagination:Query`                          | `false`        | Container query for pagination            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `populate.xt.infinitescroll`           | `container` | Replace event             |
| Event                   | `init.xt.infinitescroll`           | `container` | Init or reinit event             |
| Event                   | `destroy.xt.infinitescroll`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-infinitescroll', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `current:Number`       | Current page             |
| Property                   | `elementsUp:Nodes`       | Trigger elements when scrolling up             |
| Property                   | `elementsDown:Nodes`       | Trigger elements when scrolling down             |
| Property                   | `itemsContainer:Node`       | Items container node             |
| Property                   | `spaceAdditionals:Node`       | Nodes for space additional             |
| Property                   | `paginations:Node`       | Paginations nodes             |

</div>

## Methods

Call methods by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-infinitescroll', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

## Other

Style on `self.container` the classes `.xt-infinitescroll-first` and `.xt-infinitescroll-last` for when the infinitescroll is on first or on last page.
