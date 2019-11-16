<template>
	<view class="header">
		<!-- 头部默认显示 -->
		<view class="before">
			<view class="back">
				<view  v-if="showback" @tap="back" class="icon iconfont">&#xe679;</view>
			</view>
			<view class="middle"></view>
			<view class="icon-btn">
				<view @tap="showCart" class="icon iconfont">&#xe6af;</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				//是否显示返回按钮
				// #ifndef MP
				showback:true,
				// #endif
			}
		},
		onLoad(){
			//小程序端的判断
			// #ifdef MP
			//如果是小程序端，隐藏返回按钮
			this.showBack = false;
			//  #endif
		},
		methods:{
			back(){
				uni.navigateBack()
			},
			showCart(){
				uni.switchTab({
					url:"../TabBar/cart/cart"
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;

		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.before {
			width: 92%;
			padding: 0 4%;
			height: 100upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
			/*  #endif  */
			transition: opacity 0.05s linear;

			.back {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;

				.icon {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 42upx;
				}
			}

			.middle {
				width: 100%;
			}

			.icon-btn {
				width: 60upx;
				height: 60upx;
				flex-shrink: 0;
				display: flex;

				.icon {
					width: 60upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 42upx;
				}
			}
		}

		.before {
			.back {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}

			.icon-btn {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}
		}
	}
</style>