"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Sld1Nm",
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    toggleChecked() {
      this.isChecked = !this.isChecked;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.isChecked,
    b: common_vendor.o(($event) => $data.isChecked = $event.detail.value),
    c: $data.isChecked ? 1 : "",
    d: common_vendor.o((...args) => $options.toggleChecked && $options.toggleChecked(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2fd15748"], ["__file", "D:/UNIAPP_projects/ode_alchemia/ODE_alchemia/components/Sld1Nm/Sld1Nm.vue"]]);
wx.createComponent(Component);
