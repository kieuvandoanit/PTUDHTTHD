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
import Payment from './component/payment'
import Cart from './component/cart'
import OrderUser from './component/orderUser'
import OrderDetailUser from './component/orderDetailUser'
import Shipper from './component/admin/shipper/Shipper'
import ShipperDetail from './component/admin/shipper/ShipperDetail'
import ShipperOrder from './component/shipper'
import ShipperOrderDetail from './component/shipperOrderDetail'

export const routes = [
    //Quan ly
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
    {path: '/admin/shipper', name: 'Shipper', component: Shipper, meta:{title: 'Shipper'}},
    {path: '/admin/shipper/:id', name: 'ShipperDetail', component: ShipperDetail, meta:{title: 'ShipperDetail'}},
    //user
    {path: '/user/cart', name: 'Cart', component: Cart, meta: {title: 'Cart'}},
    {path: '/user/order', name: 'OrderUser', component: OrderUser, meta: {title: 'Order'}},
    {path: '/user/order/:id', name: 'OrderDetailUser',component: OrderDetailUser, meta:{title: 'Order detail'}},
    {path: '/payment', name: 'Payment', component: Payment, meta:{title: 'Payment'}},
    //shipper
    {path: '/shipper/order', name: 'ShipperOrder', component: ShipperOrder, meta: {title: 'ShipperOrder'}},
    {path: '/shipper/order/:id',name:'ShipperOrderDetail', component: ShipperOrderDetail, meta:{title:'ShipperOrderDetail'}},

]