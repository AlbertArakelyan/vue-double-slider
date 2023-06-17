import DoubleRangeSlider from './components/DoubleRangeSlider.vue';


export default {
  install: (app, options) => {
    app.component('double-range-slider', DoubleRangeSlider);
  },
};