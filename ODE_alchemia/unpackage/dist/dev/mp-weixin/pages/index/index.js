"use strict";
const common_vendor = require("../../common/vendor.js");
const Btn1Norm = () => "../../components/button/Btn1Norm.js";
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    // 点击事件处理函数
    handleButtonClick() {
      common_vendor.index.showToast({
        title: "Button clicked!",
        icon: "none"
      });
    }
  },
  components: {
    Btn1Norm
    // 注册 Btn1Norm 组件
  }
};
if (!Array) {
  const _component_Btn1Norm = common_vendor.resolveComponent("Btn1Norm");
  _component_Btn1Norm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.p({
      text: "Click me",
      onClick: $options.handleButtonClick
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/UNIAPP_projects/ode_alchemia/ODE_alchemia/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
