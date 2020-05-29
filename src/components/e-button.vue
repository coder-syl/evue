<template>
  <!-- 预设s-button -->
  <!-- v-bind绑定btnclass来控制button样式 -->
  <button class="e-button" :class="btnClass" :disabled="disabled" @click="$emit('click')">
    <!-- button 里面的内容使用slot获取 如果传入了插槽的数据则显示，否则不显示-->
    <e-icon v-if="icon&&!iconLeft " :name="icon" ></e-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <e-icon v-if="icon&&iconLeft" :name="icon" ></e-icon>
  </button>
</template>
<script>
import eIcon from "./e-icon.vue";
export default {
  components: {
    "e-icon": eIcon
  },
  name: "eButton",
  // props 来获取父组件的参数
  props: {
    type: {
      type: String,
      validator(val) {
        return ["primary", "info", "success", "warning", "danger", ""].includes(
          val
        );
      }
    },
    size: {
      type: String,
      validator(val) {
        return ["large", "mediun", "small", "mini", ""].includes(val);
      }
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    iconLeft: {
      type: Boolean,
      default: false
    },
    
    
  },
  created() {},
  computed: {
    btnClass() {
      let classList = [];
      // 使用es6的反引号来进行字符串的拼接
      if (this.type) classList.push(`btn-${this.type}`);
      if (this.disabled) classList.push(`btn-disabled`);
      if (this.circle) classList.push(`btn-circle`);
      if (this.size) classList.push(`btn-${this.size}`);
      return classList.join(" ");
    }
  }
};
</script>
<style  rel="../../static/css/reset.css" lang="scss" scoped>
</style>
<style lang='scss' scoped>
@import "./static/css/theme.scss";
.e-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #000;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
 
  // disabled
  &.btn-disabled {
    cursor: not-allowed;
    opacity: 0.7;
    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
  &.btn-circle {
    padding: 12px 8px;
    border-radius: 50%;
  }
  // size button的大小
  &.btn-medium {
    padding: 12px 20px;
  }

  &.btn-small {
    padding: 10px 20px;
  }
  &.btn-mini {
    padding: 8px 20px;
  }
  &.btn-large {
    padding: 14px 24px;
    font-size: $font-size;
  }
  //  type button的样式
  &.btn-primary {
    background: $color-primary;
    border-color: $color-primary;
    color: #fff;
    &:hover {
      opacity: 0.85;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &.btn-info {
    background: $color-info;
    border-color: $color-info;
    color: #fff;
    &:hover {
      opacity: 0.85;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &.btn-success {
    background: $color-success;
    border-color: $color-success;
    color: #fff;
    &:hover {
      opacity: 0.85;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &.btn-warning {
    background: $color-warning;
    border-color: $color-warning;
    color: #fff;
    &:hover {
      opacity: 0.85;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &.btn-danger {
    background: $color-danger;
    border-color: $color-danger;
    color: #fff;
    &:hover {
      opacity: 0.85;
    }
    &:active {
      opacity: 0.7;
    }
  }
}
// 选择以icon开头的元素紧接着的span元素。
.e-button [class*="e-icon"] + span {
  margin-left: 5px;
}
.e-button span + [class*="e-icon"] {
  margin-left: 5px;
}
// 如果同时出现多个button分开
.e-button + .e-button {
  margin-left: 10px;
}
</style>
