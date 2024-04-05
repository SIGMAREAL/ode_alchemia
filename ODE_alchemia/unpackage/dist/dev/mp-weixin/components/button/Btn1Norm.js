"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Btn1Norm",
  props: {
    text: {
      type: String,
      default: "Button"
      // 默认按钮文字
    },
    onClick: {
      type: Function,
      default: () => {
      }
      // 默认点击事件处理函数
    }
  },
  setup(__props) {
    const props = __props;
    const buttonText = common_vendor.ref(props.text);
    const handleClick = () => {
      props.onClick();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(buttonText.value),
        b: common_vendor.o(handleClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c22a473c"], ["__file", "D:/UNIAPP_projects/ode_alchemia/ODE_alchemia/components/button/Btn1Norm.vue"]]);
wx.createComponent(Component);
