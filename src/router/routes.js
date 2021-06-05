import UserLayout from "src/layouts/UserLayout.vue";
import Landingpage from "src/pages/LandingPage.vue";
import MainLayout from "src/layouts/MainLayout.vue";
import Login from "src/pages/auth/Login.vue";
import Repositorypage from "src/pages/RepositoryPage.vue";
const routes = [
  {
    path: "/",
    component: UserLayout,
    children: [
      {
        path: "/",
        name: "landing-page",
        component: Landingpage,
      }       
    ],
  },
  { 
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "login",
        name: "login-page",
        component: Login,
      },
      {
        path: "repositorypage",
        name: "repository-page",
        component: Repositorypage,
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
