import MainLayout from "src/layouts/MainLayout.vue";
import Landingpage from "src/pages/Landingpage.vue";
import Login from "src/pages/auth/Login.vue";
const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Landingpage,
      },
      {
        path: "login",
        name: "login-page",
        component: Login,
      }
       
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
