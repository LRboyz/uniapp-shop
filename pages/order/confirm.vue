<template>
	<view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(item,index) in goodsList" :key="index">
				<view class="goods-info">
					<view class="img">
						<image :src="item.img"></image>
					</view>
					<view class="info">
						<view class="title">{{item.name}}</view>
						<view class="spec">选择: {{item.spec}} 数量: {{item.number}}</view>
						<view class="price-number">
							<view class="price">￥{{item.price * item.number}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品金额 -->
		<view class="detail">
			<view class="row">
				<view class="amount">商品金额</view>
				<view class="content">￥{{goodsPrice|toFixed}}</view>
			</view>
			<view class="row">
				<view class="amount">运费</view>
				<view class="content">￥{{freight|toFixed}}</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="position"></view>
		<!-- 提交订单 -->
		<view class="footer">
			<view class="settlement">
				<view class="sum">合计: <view class="money">￥{{sumPrice | toFixed}}</view>
				</view>
				<view class="btn">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				goodsList:[],
				goodsPrice:0.0, //商品金额
				sunPrice:0.0, //用户支付金额
				freight:12.0 //运费
			}
		},
		onShow() {
			//将本地存储中的数据拉下来
			uni.getStorage({
				key:"confirmList",
				success:res=>{
					this.goodsList = res.data
				for(let i=0;i<this.goodsList.length;i++){
					this.goodsPrice = this.goodsPrice + (this.goodsList[i].number * this.goodsList[i].price);
				}
				// 用户支付的金额
				this.sumPrice = this.goodsPrice + this.freight;
				}
			})
		},
		filters:{
			toFixed(x){
				return parseFloat(x).toFixed(2); 
			}
		},
		onBackPress(){
			// 页面回退 清除订单信息
			this.clearOrder();
		},
		methods:{
			clearOrder(){
				uni.removeStorage({
					key:"confirmList",
					success: (res) => {
						this.goodsList = [];
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.buy-list {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 22vw;
					height: 22vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 22vw;
						height: 22vw;
					}
				}

				.info {
					width: 100%;
					height: 22vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.number {
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}
		}
	}

	.detail {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			height: 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.amount {
				font-size: 28upx;
			}

			.content {
				font-size: 26upx;
				color: #f06c7a;
			}
		}
	}

	.position {
		width: 100%;
		height: 100upx;
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.settlement {
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 60upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}
</style>

