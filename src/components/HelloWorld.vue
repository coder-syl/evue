<template>
  <div class="hello">
    <!-- <e-button icon="login" circle></e-button> -->
    <!-- <e-button type="primary" icon="login" icon-left @click="visible=true">打开对话框</e-button> -->
    <!-- <e-button type="primary" icon="login">确定</e-button> -->
    <!-- <div style="margin:10px">
      <e-input type="text" placeholder="请输入您的数据" v-model="msg" size="medium"></e-input>
    </div> -->
    <!-- <div style="margin:10px">
      <e-input type="text" placeholder="请输入您的数据" disabled v-model="msg"></e-input>
    </div> -->
    <div style="margin:10px 0;">
      <e-input type="text" placeholder="请输入您的数据"  v-model="msg"></e-input>
    </div>
    <!-- <div style="margin:10px">
      <e-input type="12" placeholder="请输入您的数据" v-model="msg"></e-input>
    </div> -->
    <!-- <e-select></e-select> -->
    <!-- <e-dialog :visible.sync="visible">
      <template v-slot:title>
        <e-button type="primary">确定</e-button>
      </template>
      <e-input type="text" placeholder="请输入您的数据" v-model="msg"></e-input>
      <template v-slot:footer>
        <e-button type="primary" @click="visible=false">取消</e-button>
        <e-button type="primary">确定</e-button>
      </template>
    </e-dialog> -->
    <!-- {{selectedValue}} -->
    <!-- <e-checkbox :listData="listData" v-model="selectedValue" ifShowSelectAll :maxSelected="0"></e-checkbox> -->
    <!-- <e-icon name="login" color="#000"></e-icon> -->
    <e-select></e-select>
  </div>
</template>
<script>
// import btn from "./e-button.vue";
// import eInput from "./e-input.vue";
// import eSelect from "./e-select.vue";
// import eCheckbox from "./e-checkbox.vue";
// import eIcon from "./e-icon.vue";
// import eDialog from "./e-dialog";
export default {
  // components: {
  //   "e-button": btn,
  //   "e-input": eInput,
  //   "e-checkbox": eCheckbox,
  //   "e-icon": eIcon,
  //   "e-select": eSelect,
  //   "e-dialog": eDialog
  // },
  name: "HelloWorld",
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          value: `备选项 ${i}`,
          // checked:false,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      msg: "Welcome to Your Vue.js App",
      listData: generateData(),
      selectedValue: [1, 2],
      visible: false
      // horizontal:true
    };
  },
  watch: {
    msg() {
      console.log(this.msg);
    },
    selectedValue() {
      console.log("子组件传来的值", this.selectedValue);
    }
  },
  methods: {
    getData() {
      return;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello {
  width: 300px;
} */
/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
