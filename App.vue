<script>
	export default {
		/**
		 * 应用生命周期仅可在App.vue中监听，在其它页面监听无效。
		 * 
		 * 以下都是应用生命周期
		 * */ 
		onLaunch: function() {
			//当uni-app 初始化完成时触发（全局只触发一次）
			console.log('App Launch')
		},
		onShow: function() {
			//当 uni-app 启动，或从后台进入前台显示
			console.log('App Show')
		},
		onHide: function() {
			//当 uni-app 从前台进入后台
			console.log('App Hide')
		},
		onUniNViewMessage:function(){
			//对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/css/iconfont.css");
</style>
