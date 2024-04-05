"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Card2Nm",
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_Btn1Nm2 = common_vendor.resolveComponent("Btn1Nm");
  const _easycom_Sld1Nm2 = common_vendor.resolveComponent("Sld1Nm");
  (_easycom_Btn1Nm2 + _easycom_Sld1Nm2)();
}
const _easycom_Btn1Nm = () => "../Btn1Nm/Btn1Nm.js";
const _easycom_Sld1Nm = () => "../Sld1Nm/Sld1Nm.js";
if (!Math) {
  (_easycom_Btn1Nm + _easycom_Sld1Nm)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "今天的世界是什么气味",
      onClick: _ctx.handleButtonClick
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-882ca6e2"], ["__file", "D:/UNIAPP_projects/ode_alchemia/ODE_alchemia/components/Card2Nm/Card2Nm.vue"]]);
wx.createComponent(Component);
