<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
			onLoad() {
			
		
			this.testRequest1()
			this.testRequest2()
		},
		methods: {
			toPage () {
				// 跳到my的页面  query是传递的参数
				this.$openPage({
					name: 'my',
					query: {id: 123}
				})
			},
		
			// 使用方法一
			testRequest1 () {
				this.$minApi.uniapp({page:1,tab:'all'}).then(res => {
					this.res = res
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			},
		
			// 使用方式二
			async testRequest2 () {
				try {
					const res = await this.$minApi.uniapp({page:1,tab:'all'})
					console.log(res)
				} catch (err) {
					console.log(err)
				}
			}
		}
	}
</script>

<style>

</style>
