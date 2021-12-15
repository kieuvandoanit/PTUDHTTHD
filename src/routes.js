import Home from './component/home'
import Store from './component/store'
import Order from './component/order'
import OrderDetail from './component/order_detail'
import Payment from './component/payment'

export const routes = [
    {path: '/', name: 'homepage', component: Home, meta:{title: 'Home'}},
    {path:'/store',name:'Store', component: Store, meta:{title: 'Store'}},
    {path: '/order',name:'Order', component: Order, meta:{title:'Order'}},
    {path:'/order/:id',name:'OrderDetail',component: OrderDetail,meta:{title:'Order Details'}},
    {path: '/payment', name: 'Payment', component: Payment, meta:{title: 'Payment'}}
    
]