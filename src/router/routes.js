import MainLayout from "src/layouts/MainLayout.vue";
import Login from "src/pages/auth/Login.vue";
import Landingpage from "src/pages/Landingpage.vue";
import UserLayout from "src/layouts/UserLayout.vue";
const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "login",
        name: "login-page",
        component: Login,
      }
       
    ],
  },
{ 
  path: "/",
  component: UserLayout,
  children: [
    {
      path: "Landingpage",
      name: "Landing-page",
      component: Landingpage,
    }
  ]
},
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
