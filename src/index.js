const install = {
  install: function (Vue) {
    const dataLayer = window.dataLayer || []
    Vue.prototype.$gtag = {
      send: function(){
        dataLayer.push(arguments)
      }
    }
  }
}
export default install