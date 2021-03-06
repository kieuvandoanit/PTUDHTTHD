import auth from './middleware/auth';
import log from './middleware/log';
import Home from './component/home'
import Store from './component/store'
import OrderManager from './component/order'
import OrderDetail from './component/order_detail'
import ProductManager from './component/admin/product/Product'
import CreateProductManager from './component/admin/product/CreateProduct'
import UpdateProductManager from './component/admin/product/UpdateProduct'
import StoreManager from './component/admin/store/Store'
import CreateStoreManager from './component/admin/store/CreateStore'
import UpdateStoreManager from './component/admin/store/UpdateStore'
import ProfileManager from './component/admin/profile/Profile'
import CreateProfileManager from './component/admin/profile/CreateProfile'
import UpdateProfileManager from './component/admin/profile/UpdateProfile'
import AdminUser from './component/admin/user/user'

import GetProfit from './component/admin/profit'
import StatisticalUser from './component/admin/Statistical/countUser'
import StatisticalShipper from './component/admin/Statistical/countShipper'
import StatisticalStore from './component/admin/Statistical/countStore'
import StatisticalTopProduct from './component/admin/Statistical/topProduct'
import StatisticalTopStore from './component/admin/Statistical/topStore'
import StatisticalProduct from './component/admin/Statistical/statisticalProduct'

import AdminShipperOrder from './component/admin/shipperOrder/shipperOrder'
import AdminShipperDetailOrder from './component/admin/shipperOrder/shipperDetailOrder'

import Payment from './component/payment'
import Cart from './component/cart'
import StoreProductAdd from './component/addProduct/addProduct'
import OrderUser from './component/orderUser'
import OrderDetailUser from './component/orderDetailUser'
import Shipper from './component/admin/shipper/Shipper'
import ShipperDetail from './component/admin/shipper/ShipperDetail'
import StoreRegister from './component/partner/store/register'
import StorePage from './component/user/store'
import ProductPage from './component/user/product'
import ShipperOrder from './component/shipper'
import ShipperOrderDetail from './component/shipperOrderDetail'
import ShipperOrderHistory from './component/shipperHistoryOrder'
import ShipperReceiveOrder from './component/shipperReiceiveOrder'
import RegisterPage from './component/user/register'
import LoginPage from './component/user/login'
import ProductDetailPage from './component/user/productDetail'
import ProductDetail from './component/product_detail'
import FindShipperNear from './component/user/findShipper'
import StoreManagerDetail from './component/admin/storeDetail/storeDetail'

export const routes = [
    //Admin
    {path: '/', name: 'homepage', component: Home, meta:{middleware: auth, title: 'Home'}},
    {path:'/store',name:'Store', component: Store, meta:{title: 'Store'}},
    {path:'/store/product',name:'StoreProduct', component: Store, meta:{title: 'S???n ph???m'}},
    {path:'/store/addProduct',name:'StoreProductAdd', component: StoreProductAdd, meta:{title: 'Th??m s???n ph???m'}},
    {path: '/store/order',name:'StoreOrder', component: OrderManager, meta:{title:'????n h??ng'}},
    {path:'/store/order/:id',name:'StoreOrderDetail',component: OrderDetail,meta:{title:'Chi ti???t ????n h??ng'}},
    //admin
    {path:'/admin/product', name:'Product', component: ProductManager, meta:{title:'ProductManager'}},
    {path:'/admin/product/create', name:'CreateProduct', component: CreateProductManager, meta:{title:'CreateProductManager'}},
    {path:'/admin/product/update', name:'UpdateProduct', component: UpdateProductManager, meta:{title:'UpdateProductManager'}},
    {path:'/admin/store', name:'Store', component: StoreManager, meta:{title:'StoreManager'}},
    {path:'/admin/store/:id', name:'StoreDetail', component: StoreManagerDetail, meta:{title:'StoreManager'}},
    {path:'/admin/store/create', name:'CreateStore', component: CreateStoreManager, meta:{title:'CreateStoreManager'}},
    {path:'/admin/store/update', name:'UpdateStore', component: UpdateStoreManager, meta:{title:'UpdateStoreManager'}},
    {path:'/admin/profile', name:'Profile', component: ProfileManager, meta:{title:'ProfileManager'}},
    {path:'/admin/profile/create', name:'CreateProfile', component: CreateProfileManager, meta:{title:'CreateProfileManager'}},
    {path:'/admin/profile/update', name:'UpdateProfile', component: UpdateProfileManager, meta:{title:'UpdateProfileManager'}},
    {path: '/admin/user', name: 'AdminUser', component: AdminUser, meta:{title: 'AdminUser'}},

    {path:'/admin/statistical/countUser', name:'countShipper', component: StatisticalUser, meta:{title:'StatisticalUser'}},
    {path:'/admin/statistical/countShipper', name:'countShipper', component: StatisticalShipper, meta:{title:'StatisticalShipper'}},
    {path:'/admin/statistical/countStore', name:'countStore', component: StatisticalStore, meta:{title:'StatisticalStore'}},
    {path:'/admin/statistical/topProduct', name:'topProduct', component: StatisticalTopProduct, meta:{title:'StatisticalTopProduct'}},
    {path:'/admin/statistical/topStore', name:'topStore', component: StatisticalTopStore, meta:{title:'StatisticalTopStore'}},
    {path:'/admin/statistical/StatisticalProduct', name:'topStatisticalProduct', component: StatisticalProduct, meta:{title:'StatisticalProduct'}},
    {path:'/admin/profit', name:'getProfit', component: GetProfit, meta:{title:'GetProfit'}},

    {path: '/payment', name: 'Payment', component: Payment, meta:{title: 'Payment'}},
    {path: '/admin/shipper', name: 'Shipper', component: Shipper, meta:{title: 'Shipper'}},
    {path: '/admin/shipper/:id', name: 'ShipperDetail', component: ShipperDetail, meta:{title: 'ShipperDetail'}},
    {path: '/admin/order', name: 'AdminShipperOrder', component: AdminShipperOrder, meta:{title: 'AdminShipperOrder'}},
    {path: '/admin/order/:id', name: 'AdminShipperDetailOrder', component: AdminShipperDetailOrder, meta:{title: 'AdminShipperDetailOrder'}},


    //user
    {path: '/user/cart', name: 'Cart', component: Cart, meta: {title: 'Cart'}},
    {path: '/user/order', name: 'OrderUser', component: OrderUser, meta: {title: 'Order'}},
    {path: '/user/order/:id', name: 'OrderDetailUser',component: OrderDetailUser, meta:{title: 'Order detail'}},
    {path: '/storepage', name: 'Store page',component: StorePage, meta:{title: 'Store page'}},
    {path: '/product', name: 'Product page',component: ProductPage, meta:{title: 'Product page'}},
    {path: '/register', name: 'Register page',component: RegisterPage, meta:{title: 'Register page'}},
    {path: '/login', name: 'Login',component: LoginPage, meta:{title: 'Login page'}},
    {path: '/product-detail', name: 'Product Detail page',component: ProductDetailPage, meta:{title: 'Product Detail page'}},
    {path: '/findShipper', name: 'Find shipper page',component: FindShipperNear, meta:{title: 'Find shipper page'}},
    /**Store router */
    {path: '/store/register', name: 'StoreRegister', component: StoreRegister, meta:{title: 'Store Register'}},
    {path: '/payment', name: 'Payment', component: Payment, meta:{title: 'Payment'}},
    {path:'/products/origin',name:'ProductDetail',component: ProductDetail,meta:{title:'Product Details'}},

    //shipper
    {path: '/shipper/order', name: 'ShipperOrder', component: ShipperOrder, meta: {title: 'ShipperOrder'}},
    {path: '/shipper/receiveOrder/:id',name:'ShipperReceiveOrder', component: ShipperReceiveOrder, meta:{title:'ShipperReceiveOrder'}},
    {path: '/shipper/order/:id',name:'ShipperOrderDetail', component: ShipperOrderDetail, meta:{title:'ShipperOrderDetail'}},
    {path: '/shipper/orderHistory', name: 'ShipperOrderHistory', component: ShipperOrderHistory, meta: {title: 'ShipperOrderHistory'}},
]
