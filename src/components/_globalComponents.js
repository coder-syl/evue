import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// console.log("注册组件-1")

// Globally register all base components, because they
// will be used very frequently.
const requireComponent = require.context('./', false, /e-[\w-]+\.vue$/)
// console.log(requireComponent)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  // console.log(componentName)
  Vue.component(componentName,componentConfig.default|| componentConfig  )
})
