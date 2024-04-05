<script>
	export default {
		onLaunch:function() {
			wx.cloud.init({
				env:'cloud1-6gvwori2b7946e02',
				traceUser: true,
			})
		    // 设置页面的初始配置
		    //uni.setNavigationBarStyle({
		      //navigationStyle: 'custom'
		    //});
		    console.log('App Launch'); // 这里需要确保语法正确，不应该放在uni.setNavigationBarStyle()的内部
		  },
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
