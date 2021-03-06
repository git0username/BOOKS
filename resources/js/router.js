import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/Index.vue'
import checkoutForm from './components/checkoutForm'
import bookingList from './components/bookingList'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: 'index',
        //     components: {
        //         default:HelloWorld,
        //         first:HelloWorld,
        //         second:HelloJSX            
        //     }  // '/' で接続されたら、Helloworldコンポーネントを表示してね。
        // },

        {
            path:'/',
            redirect:'/index'
        },
        {
            path: '/index',
            name: 'index',
            component:Index,
            props:true
        },
        {
            path:'/checkoutform',
            name: 'checkoutform',
            component:checkoutForm,
            props:true        
        },        
        {
            path:'/bookingList',
            name: 'bookingList',
            component:bookingList,
            props:true        
        },
        
    ],
})

export default router