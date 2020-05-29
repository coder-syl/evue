<template>
  <div>
    <div class="el-select" @click="listShow=!listShow">
      <e-input type="text" placeholder="请输入您的数据" v-model="msg" icon="down" :readonly="true"></e-input>
    </div>
    <div v-if="listShow" class="e-select-dropdown">
      <ul class="e-select-droplist">
        <li
          class="e-select-droplist-item"
          v-for="(item,index) of listData"
          :key="index"
          @click="chose(item.value)"
        >{{item.value}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "e-select",
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
      msg: "",
      listData: generateData(),
      selectedValue: [1, 2],
      listShow:false,
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
<style lang='scss'scoped >
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
} */
.el-select {
  width: 180px;
  height: 40px;
}
.e-select-dropdown {
  width: 180px;
  position: absolute;
  z-index: 1001;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 5px 0;
}
.e-select-droplist {
  list-style: none;
  padding: 6px 0;
  margin: 0px;
  margin-left: 15px;
  box-sizing: border-box;
  .e-select-droplist-item {
    font-size: 14px;
    // padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
  }
}
</style>
