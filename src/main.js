// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, 
  Select ,
  Container,
  Aside,
  Main,
  Form,
  FormItem,
  Input,
  Option,
  Col,
  CheckboxGroup,
  Checkbox,
  Radio,
  DatePicker,
  TimePicker,
  Switch,
  RadioGroup,
  Tree
} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Option.name, Option)
Vue.component(Col.name, Col)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Radio.name, Radio)
Vue.component(DatePicker.name, DatePicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Switch.name, Switch)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Tree.name, Tree)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) 
