"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  mounted() {
  },
  methods: {
    // 点击事件处理函数
    handleButtonClick() {
      common_vendor.index.showToast({
        title: "Button clicked!",
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_Card2Nm2 = common_vendor.resolveComponent("Card2Nm");
  const _easycom_Btn1Nm2 = common_vendor.resolveComponent("Btn1Nm");
  (_easycom_Card2Nm2 + _easycom_Btn1Nm2)();
}
const _easycom_Card2Nm = () => "../../components/Card2Nm/Card2Nm.js";
const _easycom_Btn1Nm = () => "../../components/Btn1Nm/Btn1Nm.js";
if (!Math) {
  (_easycom_Card2Nm + _easycom_Btn1Nm)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "Click me",
      onClick: $options.handleButtonClick
    }),
    b: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/UNIAPP_projects/ode_alchemia/ODE_alchemia/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
