<template>
	<view>
		<text>{{vde}}</text>
		 <!-- #ifdef APP-PLUS -->
					<view>{{csw}}</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vde:getApp().globalData.text,
				csw:'c'
			}
		},
		onLoad() {
			console.log('csw====',getApp().globalData.text);
			// #ifdef APP-PLUS
			var appid = plus.runtime.appid;
			this.csw = appid;
			console.log('应用的 appid 为：' + appid);
			// #endif
		}
	}
</script>

<style>

</style>
