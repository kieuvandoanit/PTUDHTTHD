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

import StatisticalUser from './component/admin/Statistical/countUser'
import StatisticalShipper from './component/admin/Statistical/countShipper'
import StatisticalStore from './component/admin/Statistical/countStore'
import StatisticalTopProduct from './component/admin/Statistical/topProduct'
import StatisticalTopStore from './component/admin/Statistical/topStore'
import StatisticalProduct from './component/admin/Statistical/statisticalProduct'

import AdminShipperOrder from './component/admin/shipperOrder/ShipperOrder'
import Payment from './component/payment'
import Cart from './component/cart'
import OrderUser from './component/orderUser'
import OrderDetailUser from './component/orderDetailUser'
import Shipper from './component/admin/shipper/Shipper'
import ShipperDetail from './component/admin/shipper/ShipperDetail'
import StoreRegister from './component/partner/store/register'
import OrderPage from './component/user/store'
import ProductPage from './component/user/product'
import ShipperOrder from './component/shipper'
import ShipperOrderDetail from './component/shipperOrderDetail'
import ShipperOrderHistory from './component/shipperHistoryOrder'
import ShipperReceiveOrder from './component/shipperReiceiveOrder'
import RegisterPage from './component/user/register'
import LoginPage from './component/user/login'
import ProductDetailPage from './component/user/productDetail'
import ProductDetail from './component/product_detail'

export const routes = [
    //Admin
    {path: '/', name: 'homepage', component: Home, meta:{title: 'Home'}},
    {path:'/store',name:'Store', component: Store, meta:{title: 'Store'}},
    {path: '/order',name:'Order', component: OrderManager, meta:{title:'Order'}},
    {path:'/order/:id',name:'OrderDetail',component: OrderDetail,meta:{title:'Order Details'}},
    //admin
    {path:'/admin/product', name:'Product', component: ProductManager, meta:{title:'ProductManager'}},
    {path:'/admin/product/create', name:'CreateProduct', component: CreateProductManager, meta:{title:'CreateProductManager'}},
    {path:'/admin/product/update', name:'UpdateProduct', component: UpdateProductManager, meta:{title:'UpdateProductManager'}},
    {path:'/admin/store', name:'Store', component: StoreManager, meta:{title:'StoreManager'}},
    {path:'/admin/store/create', name:'CreateStore', component: CreateStoreManager, meta:{title:'CreateStoreManager'}},
    {path:'/admin/store/update', name:'UpdateStore', component: UpdateStoreManager, meta:{title:'UpdateStoreManager'}},
    {path:'/admin/profile', name:'Profile', component: ProfileManager, meta:{title:'ProfileManager'}},
    {path:'/admin/profile/create', name:'CreateProfile', component: CreateProfileManager, meta:{title:'CreateProfileManager'}},
    {path:'/admin/profile/update', name:'UpdateProfile', component: UpdateProfileManager, meta:{title:'UpdateProfileManager'}},


    {path:'/admin/statistical/countUser', name:'countShipper', component: StatisticalUser, meta:{title:'StatisticalUser'}},
    {path:'/admin/statistical/countShipper', name:'countShipper', component: StatisticalShipper, meta:{title:'StatisticalShipper'}},
    {path:'/admin/statistical/countStore', name:'countStore', component: StatisticalStore, meta:{title:'StatisticalStore'}},
    {path:'/admin/statistical/topProduct', name:'topProduct', component: StatisticalTopProduct, meta:{title:'StatisticalTopProduct'}},
    {path:'/admin/statistical/topStore', name:'topStore', component: StatisticalTopStore, meta:{title:'StatisticalTopStore'}},
    {path:'/admin/statistical/StatisticalProduct', name:'topStatisticalProduct', component: StatisticalProduct, meta:{title:'StatisticalProduct'}},

    {path: '/payment', name: 'Payment', component: Payment, meta:{title: 'Payment'}},
    {path: '/admin/shipper', name: 'Shipper', component: Shipper, meta:{title: 'Shipper'}},
    {path: '/admin/shipper/:id', name: 'ShipperDetail', component: ShipperDetail, meta:{title: 'ShipperDetail'}},
    {path: '/admin/order', name: 'AdminShipperOrder', component: AdminShipperOrder, meta:{title: 'AdminShipperOrder'}},
    //user
    {path: '/user/cart', name: 'Cart', component: Cart, meta: {title: 'Cart'}},
    {path: '/user/order', name: 'OrderUser', component: OrderUser, meta: {title: 'Order'}},
    {path: '/user/order/:id', name: 'OrderDetailUser',component: OrderDetailUser, meta:{title: 'Order detail'}},
    {path: '/storepage', name: 'Order page',component: OrderPage, meta:{title: 'Order page'}},
    {path: '/product', name: 'Product page',component: ProductPage, meta:{title: 'Product page'}},
    {path: '/register', name: 'Register page',component: RegisterPage, meta:{title: 'Register page'}},
    {path: '/login', name: 'Login page',component: LoginPage, meta:{title: 'Login page'}},
    {path: '/product-detail', name: 'Product Detail page',component: ProductDetailPage, meta:{title: 'Product Detail page'}},
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
