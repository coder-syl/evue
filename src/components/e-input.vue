<!-- input 组件 -->
<template>
  <div class="e-input" :class="inputClass">
    <input
      :type="type"
      :value="value"
      class="e-input-inner"
      :disabled="disabled"
      :style="hasIcon"
      :readonly="readonly"
      placeholder="placeholder"
      v-on:input="$emit('input', $event.target.value)"
      v-on:click="$emit('click')"
    />
    <span v-if="icon" class="e-input-icon">
      <e-icon :name="icon"></e-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "e-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(val) {
        return ["large", "medium", "small", "mini", ""].includes(val);
      }
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    hasIcon() {
      if (this.icon) {
        return "padding-right: 30px;";
      }
    },
    inputClass() {
      let classList = [];
      // 使用es6的反引号来进行字符串的拼接
      // if (this.type) classList.push(`btn-${this.type}`);
      if (this.disabled) classList.push(`e-input-disabled`);
      // if (this.circle) classList.push(`e-input-circle`);
      if (this.size) classList.push(`e-input-${this.size}`);
      return classList.join(" ");
    }
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "./static/css/theme.scss";

.e-input {
  // border: 1px solid #dcdfe6;
  // width: 100%;
  width: 180px;
  height: 40px;
  position: relative;
  display: inline-block;
  .e-input-disabled,
  input:disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .e-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
  .e-input-icon {
    padding-left: 30px;
    position: absolute;
    right: 5px;
    line-height: 40px;
    height: 100%;
    // transition: transform 0.3s;
    // transform: rotate(deg);
  }
  &.e-input-medium {
    height: 30px;
    .e-input_inner {
      height: 30px;
      line-height: 30px;
    }
  }
}

.e-input:click {
  border-color: $color-primary;
}
</style>