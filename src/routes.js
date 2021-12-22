import Home from './component/home'
import Store from './component/store'
import Order from './component/order'
import OrderDetail from './component/order_detail'
import ProductManager from './component/admin/product/Product'
import CreateProductManager from './component/admin/product/CreateProduct'
import UpdateProductManager from './component/admin/product/UpdateProduct'
import StoreManager from './component/admin/store/Store'
import CreateStoreManager from './component/admin/store/CreateStore'
import UpdateStoreManager from './component/admin/store/UpdateStore'

export const routes = [
    {path: '/', name: 'homepage', component: Home, meta:{title: 'Home'}},
    {path:'/store',name:'Store', component: Store, meta:{title: 'Store'}},
    {path: '/order',name:'Order', component: Order, meta:{title:'Order'}},
    {path:'/order/:id',name:'OrderDetail',component: OrderDetail,meta:{title:'Order Details'}},
    {path:'/admin/product', name:'Product', component: ProductManager, meta:{title:'ProductManager'}},
    {path:'/admin/product/create', name:'CreateProduct', component: CreateProductManager, meta:{title:'CreateProductManager'}},
    {path:'/admin/product/update', name:'UpdateProduct', component: UpdateProductManager, meta:{title:'UpdateProductManager'}},
    {path:'/admin/store', name:'Store', component: StoreManager, meta:{title:'StoreManager'}},
    {path:'/admin/store/create', name:'CreateStore', component: CreateStoreManager, meta:{title:'CreateStoreManager'}},
    {path:'/admin/store/update', name:'UpdateStore', component: UpdateStoreManager, meta:{title:'UpdateStoreManager'}},
]