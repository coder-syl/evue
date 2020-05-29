<template>
  <!-- 预设s-button -->
  <!-- v-bind绑定linkclass来控制button样式 -->
  <a class="e-link" :class="linkClass" v-bind:href="href" :target="target" @click="$emit('click')">
    <!-- button 里面的内容使用slot获取 -->
    <div class="a-content">
      <slot></slot>
    </div>
  </a>
</template>
<script>
export default {
  name: "e-link",
  // props 来获取父组件的参数
  props: {
    type: {
      type: String,
      validator(val) {
        return ["primary", "info", "success", "warning", "danger"].includes(
          val
        );
      }
    },
    size: {
      type: String,
      validator(val) {
        return ["large", "mediun", "small"].includes(val);
      }
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function(val) {
        return val === "left" || val === "right";
      }
    }
  },
  computed: {
    linkClass() {
      let classList = [];
      // 使用es6的反引号来进行字符串的拼接
      if (this.iconPosition) classList.push(`ico-${this.iconPosition}`);
      if (this.type) classList.push(`link-${this.type}`);
      if (this.disabled) classList.push(`link-disabled`);
      if (this.size) classList.push(`link-${this.size}`);
      return classList.join(" ");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./static/css/theme.scss";

.e-link {
  font-size: $font-size;
  color: #606266;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 70px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  // &:active {
  //   background-color: $button-active-bg;
  // }

  // disabled
  &.link-disabled {
    cursor: not-allowed;
    opacity: 0.7;
    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
  // size button的大小
  &.link-large {
    font-size: $font-large-size;
  }
  &.link-medium {
    font-size: $font-medium-size;
  }
  &.link-small {
    font-size: $font-small;
  }

  //  type link的样式
  &.link-primary {
    color: $color-primary;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: $color-primary-light;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &.link-info {
    color: $color-info;

    &:hover {
      text-decoration: none;
      color: $color-info-light;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &.link-success {
    color: $color-success;
    &:hover {
      text-decoration: none;
      color: $color-success-light;
    }
    &:active {
      opacity: 0.7;
    }
  }

  &.link-warning {
    color: $color-warning;
    &:hover {
      text-decoration: none;
      color: $color-warning-light;
    }
    &:active {
      opacity: 0.7;
    }
  }

  &.link-danger {
    color: $color-danger;
    &:hover {
      text-decoration: none;
      color: $color-danger-light;
    }
    &:active {
      opacity: 0.7;
    }
  }
}
</style>
