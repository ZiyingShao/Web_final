Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{count}} times. </buttton>'
})

var demo = new Vue({ el: '#components-demo'})