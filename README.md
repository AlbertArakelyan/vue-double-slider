# vue-double-slider
> Custom made range slider with two thumbs for Vue. Create highly customizable double range sliders with ease.

## Install
Install with [npm](https://www.npmjs.com/):
```sh
$ npm install vue-double-slider
```

## Initialization and usage

<small style="position: absolute; color: gray;">main.js</small>
```js
import './assets/main.css'
import 'vue-double-slider/dist/style.css' // Add this line for using styles

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueDoubleSlider from 'vue-double-slider' // Add this import for globally using the component

const app = createApp(App) // Add this use for globally using the component

app.use(router)
app.use(vueDoubleSlider)

app.mount('#app')
```

<small style="position: absolute; color: gray">Component.vue</small>
```js
<script setup>
import { ref } from 'vue'

const min = ref(10)
const max = ref(20)
</script>

<template>
  <div style="width: 200px;">
    <double-range-slider
      :min="min"
      :max="max"
      :min-threshold="0"
      :max-threshold="100"
      @update:min="value => min = +value"
      @update:max="value => max = +value"
    ></double-range-slider>
    <span>{{ min }} - {{ max }}</span>
  </div>
</template>
```

## About

The Vue Double Slider package provides a customizable range slider component for Vue applications. With two thumbs, you can easily select a range of values. The component offers a wide range of customization options, including appearance, range limits, step size, and event handling.

<details>
<summary><strong>Contributing</strong></summary>
We welcome contributions from the community to enhance the Vue Double Slider package. If you have any bug reports, feature requests, or pull requests, please submit them to our GitHub repository. We appreciate your help in making the package even better.
</details>

<details>
<summary><strong>Motivation</strong></summary>
The Vue Double Slider package aims to provide Vue developers with a user-friendly solution for creating double range sliders. Our goal is to simplify the process of adding range selection functionality to Vue projects while offering extensive customization options. With <b>Vue Double Slider</b>, you can easily create and customize double range sliders to meet your specific project requirements.
</details>

---

### Author
**Albert Arakelyan**
* [LinkedIn Profile](https://www.linkedin.com/in/albert-arakelyan/)
* [GitHub Profile](https://github.com/ALbert2504)