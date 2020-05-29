<template>
<!--  @click.self="closeDialog" 实现了点击wrapper也可以关闭 .self保证点击e-dialog不关闭-->
  <div class="e-dialog-wrapper" v-show="visible" @click.self="closeDialog">
    <div class="e-dialog" :style="{width:width,marginTop:top}">
      <div class="e-dialog-header">
        <slot name="title">
          <span>{{title}}</span>
        </slot>
        <e-button class="e-dialog-headerbtn" icon="close" @click="closeDialog"></e-button>
      </div>
      <div class="e-dialog-content">
        <slot></slot>
      </div>
      <div class="e-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "./e-button.vue";

export default {
  components: {
    "e-button": btn
  },
  props: {
    title: {
      type: String,
      default: "提示"
    },
    visible: {
      type: Boolean,
      default: false
    },
    width:{
        type:String
    },
    top:{
        type:String
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style  lang='scss' scoped>
.e-dialog-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2011;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .e-dialog {
    position: relative;
    margin: 0 auto 50px;
    margin-top: 15vh;
    width: 30%;
    background: #fff;
    border-radius: 2px;
    color: #303133;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    .e-dialog-header {
      padding: 20px 20px 10px;
      font-size: 16px;
      .e-dialog-headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      // .one-icon-close{
      //   color:909399
      // }
    }
    }
    
    .e-dialog-content {
      padding: 20px;
    }
    .e-dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .e-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>