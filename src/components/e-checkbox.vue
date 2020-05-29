<!-- -->
<template>
  <div>
    <!-- v-if="showSelectAll" -->
    <!-- v-model="selectedValue" -->
    <!-- :value="row" -->
    <ul>
      <li v-if="showSelectAll">
        <input type="checkbox" id="all" v-on:click="selectAll" ref="all" />
        <label for="all">全选</label>
      </li>
      <li v-for="(row,index) in datas" class="e-checkbox" :class="checkboxClass" :key="index">
        <input
          type="checkbox"
          :disabled="row.disabled"
          :id="row.key"
          :value="row"
          v-model="selectedValue"
          v-on:change="_change"
        />
        <label :for="row.key">{{row.value}}{{row.checked}}</label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "e-checkbox",
  data() {
    return {
      selectedValue: [],
      datas: [],
      ableData: [],
      ableDataLen: "",
      showSelectAll: "",
      max: ""
    };
  },
  props: {
    title: {
      type: String
    },
    listData: {
      type: Array,
      default: () => []
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    maxSelected: {
      type: Number,
      default: 0,
      validator: function(value) {
        return value >= 0;
      }
    },
    ifShowSelectAll: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selectedValue() {
      // 判断当前选择的元素数量是否大于最大可选
      if (this.max === this.ableDataLen) {
        if (this.selectedValue.length === this.ableDataLen) {
          this.$refs.all.checked = true;
        } else {
          this.$refs.all.checked = false;
        }
      }
      if (this.max != this.ableDataLen) {
        if (this.selectedValue.length >= this.max) {
          // 将其他元素标记为disable
          this.datas = this.datas.map(el => {
            if (!this.selectedValue.includes(el)) {
              el.disabled = true;
            }
            return el;
          });
        } else {
          this.datas = this.datas.map(el => {
            if (
              this.ableData.includes(el) &&
              !this.selectedValue.includes(el)
            ) {
              el.disabled = false;
            }
            return el;
          });
        }
      }
    }
  },
  created() {
    this.showSelectAll = this.ifShowSelectAll;
    this.max = this.maxSelected;
    this.datas = this.listData;
    // 先找出可以选择的数据，并计算长度
    this.ableData = this.datas.filter(el => {
      return el.disabled === false;
    });
    this.ableDataLen = this.ableData.length;
    // 如果传进来的最大值介于0和长度之间
    // 直接将全选置false
    if (this.max > 0 && this.max < this.ableDataLen) {
      this.showSelectAll = false;
    } else if (this.max == 0 || this.max > this.ableDataLen) {
      this.max = this.ableDataLen;
    }
  },
  components: {},
  computed: {
    // 监控排列方向
    checkboxClass() {
      let classList = [];
      if (this.horizontal) classList.push("e-li");
      return classList.join(" ");
    }
  },
  methods: {
    _change() {
      this.$emit("input", this.selectedValue);
    },
    selectAll() {
      if (this.selectedValue.length != this.ableDataLen) {
        this.$refs.all.checked = true;
        this.selectedValue = this.ableData;
      }
      // 相等的话说明已经是全选了，现在需要将其反选
      else {
        this.datas = this.listData;
        this.selectedValue = [];
      }
      this.$emit("input", this.selectedValue);
    }
  }
};
</script>
<style  rel="../../static/css/reset.css" lang="scss" scoped>
</style>
<style lang='scss' scoped>
@import "./static/css/theme.scss";
.e-checkbox {
  &.e-li {
    //display: inline-block;
    float: left;
    margin: 2px 10px 2px 10px;
  }
}
</style>
