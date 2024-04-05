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
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_Card2Nm2 = common_vendor.resolveComponent("Card2Nm");
  const _easycom_BtmBar2 = common_vendor.resolveComponent("BtmBar");
  (_easycom_TopBar2 + _easycom_Card2Nm2 + _easycom_BtmBar2)();
}
const _easycom_TopBar = () => "../../components/TopBar/TopBar.js";
const _easycom_Card2Nm = () => "../../components/Card2Nm/Card2Nm.js";
const _easycom_BtmBar = () => "../../components/BtmBar/BtmBar.js";
if (!Math) {
  (_easycom_TopBar + _easycom_Card2Nm + _easycom_BtmBar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/UNIAPP_projects/ode_alchemia/ODE_alchemia/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
