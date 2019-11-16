const domain = "https://uniapp-interface.herokuapp.com/";
const interfaces = {
	// 获取首页数据
	getMallData: domain + "api/profiles/mall_list",
	// 获取分类数据
	getCategory: domain + "api/profiles/category",
	// 获取商品列表数据
	getGoodsList: domain + 'api/profiles/goodslist',
	// 商品详情信息
	getGoods: domain + "api/profiles/goods"
}
module.exports = interfaces;