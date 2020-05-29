<template>
  <div class="e-transfer">
    <div class="Grid-cell e-transfer-panel">
      <div class="e-transfer-panel-header">
        <input type="checkbox" :checked="leftIsAllSelected" v-on:click="leftAllSelect" id="leftAll" />
        <label for="leftAll">{{titles[0]}}</label>
        <span>共有{{leftLists.length}}项</span>
      </div>
      <div class="e-transfer-panel-body">
        <input type="text" />
        <ul>
          <li v-for="(row, index) in leftLists" :key="row.id">
            <input
              type="checkbox"
              :checked="row.checked"
              :disabled="row.disabled"
              :id="row.id"
              v-on:click="leftSingleSelect(row, index)"
            />
            <label :for="row.id">{{row.val}} {{row.checked}}</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="Grid-cell e-transfer-panel-buttons">
      <div class="top_btn">
        <e-button is_circle @click="addToRight" :disabled="addDisable">{{buttonTexts[0]}}</e-button>
      </div>
      <div class="footer_btn">
        <e-button is_circle @click="dropToLeft" :disabled="dropDisable">{{buttonTexts[1]}}</e-button>
      </div>
    </div>
    <div class="Grid-cell e-transfer-panel">
      <div class="e-transfer-panel-header">
        <input
          type="checkbox"
          :checked="rightIsAllSelected"
          v-on:click="rightAllSelect"
          :disabled="rightAllDisabled"
          id="rightAll"
        />
        <label for="rightAll">{{titles[1]}}</label>
        <span>共有{{rightLists.length}}项</span>
      </div>
      <div class="e-transfer-panel-body">
        <ul>
          <li v-for="(row, index) in rightLists" :key="row.id">
            <input
              type="checkbox"
              v-on:click="rightSingleSelect(row, index)"
              :checked="row.checked"
              :disabled="row.disabled"
              :id="row.id"
              :value="row"
            />
            <label :for="row.id">{{row.val}}{{row.checked}}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import eButton from "./e-button";
export default {
  name: "eTransfer",
  components: {
    "e-button": eButton
  },
  props: {
    'titles': {
      type: Array,
      // 默认要有返回值
      default: () => ["列表1", "列表2"]
    },
    "button-texts": {
      type: Array,
      // 默认要有返回值
      default: () => ["添加", "撤回"]
    },
    leftListdata: {
      type: Array,
      default: () => [],
      required: true
    },
    rightListdata: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  data() {
    return {
      is_circle: true,
      addDisable: true,
      dropDisable: true,
      leftLists: [],
      rightLists: [],
      leftIsAllSelected: false,
      rightIsAllSelected: false,
      leftAllDisabled: false,
      rightAllDisabled: false
    };
  },
  created: function() {
    // 调用methods的方法
    this.initData();
    // this.leftLists = this.LeftListdata.map(el => {
    //   console.log(typeof el);
    //   el["checked"] = false;
    //   return el;
    // });
    // console.log(this.leftLists);
    // if (this.leftLists.length == 0) {
    //   this.leftAllDisabled = true;
    // } else {
    //   this.leftAllDisabled = false;
    // }
    // // console.log(this.rightLists.length)
    // if (this.rightLists.length == 0) {
    //   this.rightAllDisabled = true;
    // } else {
    //   this.rightAllDisabled = false;
    // }
  },
  watch: {
    leftLists() {
      if (this.leftLists.length == 0) {
        this.leftAllDisabled = true;
      } else {
        this.leftIsAllSelected = this.leftLists.every(el => {
          return el.checked;
        });
        this.leftAllDisabled = false;
      }
    },
    rightLists() {
      // console.log(this.rightLists.length)
      if (this.rightLists.length == 0) {
        this.rightAllDisabled = true;
      } else {
        this.rightIsAllSelected = this.rightLists.every(el => {
          return el.checked;
        });
        this.rightAllDisabled = false;
      }
    }
  },
  methods: {
    initData: function() {
      this.leftLists = this.leftListdata.map(el => {
        console.log(typeof el);
        el["checked"] = false;
        return el;
      });
       this.rightLists = this.rightListdata.map(el => {
        console.log(typeof el);
        el["checked"] = false;
        return el;
      });
      console.log(this.leftLists);
      if (this.leftLists.length == 0) {
        this.leftAllDisabled = true;
      } else {
        this.leftAllDisabled = false;
      }
      // console.log(this.rightLists.length)
      if (this.rightLists.length == 0) {
        this.rightAllDisabled = true;
      } else {
        this.rightAllDisabled = false;
      }
    },
    // 全选、全不选
    leftAllSelect: function() {
      this.addDisable = false;
      let checked;
      // 全选
      if (this.leftIsAllSelected == false) {
        this.leftIsAllSelected = true;
        checked = true;
      } else {
        this.leftIsAllSelected = false;
        checked = false;
      }
      this.listLists = this.leftLists.map(el => {
        if (el.disabled == false) {
          el.checked = checked;
        }
        return el;
      });
    },
    rightAllSelect: function() {
      this.dropDisable = false;
      let checked;
      // 全选
      if (this.rightIsAllSelected == false) {
        this.rightIsAllSelected = true;
        checked = true;
      } else {
        this.rightIsAllSelected = false;
        checked = false;
      }
      this.listLists = this.rightLists.map(el => {
        if (el.disabled == false) {
          el.checked = checked;
        }
        return el;
      });
    },
    // 单选
    leftSingleSelect(row, index) {
      this.addDisable = false;
      row.checked = !row.checked;
      console.log("变")
      console.log("当前选定的行", row);
      if (this.leftLists.length > 0) {
        this.leftIsAllSelected = this.leftLists.every(el => {
          return el.checked;
        });
      }
    },
    rightSingleSelect(row, index) {
      this.dropDisable = false;
      row.checked = !row.checked;
      if (this.rightLists.length > 0) {
        this.rightIsAllSelected = this.rightLists.every(el => {
          return el.checked;
        });
      }
    },
    addToRight() {
      this.addDisable = true;
      this.rightLists = this.rightLists.concat(
        this.leftLists.filter(row => {
          return row.checked == true;
        })
      );
      this.leftLists = this.leftLists.filter(row => {
        return row.checked == false;
      });
      this.rightLists.map(item => {
        item.checked = false;
        return item;
      });
      console.log(this.leftLists);
      this.leftIsAllSelected = false;
    },
    dropToLeft() {
      this.dropDisable = true;
      this.leftLists = this.leftLists.concat(
        this.rightLists.filter(row => {
          return row.checked == true;
        })
      );
      this.rightLists = this.rightLists.filter(row => {
        return row.checked == false;
      });
      this.leftLists.map(item => {
        item.checked = false;
        return item;
      });
      this.rightIsAllSelected = false;
    }
  }
};
</script>
<style  rel="../../static/css/reset.css" lang="scss" scoped>
</style>
<style lang='scss' scoped>
@import "./static/css/theme.scss";
.e-transfer {
  height: 100%;
  border: 1px solid #ebeef5;
  font-size: $font-size;
  color: $color-info;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.Grid-cell {
  flex: 1;
}
.Grid-cell.e-transfer-panel-buttons {
  height: 100%;
  // text-align: center;
  // vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 0 25%;
}
.e-transfer-panel {
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 5px;
}
.e-transfer-panel-header {
  height: 10%;
  background-color: #cadcf8;
}
.e-transfer-panel-body {
  overflow: auto;
  height: 85%;
}
.e-transfer-panel-header {
  padding-top: 5%;
  padding-left: 5%;
}
.top_btn {
  padding-bottom: 10px;
}
.footer_btn {
  padding-top: 10px;
}
</style>
