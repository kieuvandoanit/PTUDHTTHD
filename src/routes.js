import Home from './component/home'
import Store from './component/store'

export const routes = [
    {path: '/', name: 'homepage', component: Home, meta:{title: 'Home'}},
    {path:'/store',name:'Store', component: Store, meta:{title: 'Store'}}
]