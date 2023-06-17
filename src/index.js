import DoubleRangeSlider from './components/DoubleRangeSlider.vue';


export default {
  install: (app, options) => {
    app.component('double-reange-slider', DoubleRangeSlider);
  },
};