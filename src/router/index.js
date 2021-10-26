import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
<<<<<<< HEAD

    component: () => import("../views/About.vue"),
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/new_post",
    name: "NewPost",
    component: () => import("../views/NewPost.vue"),
  },
  {
    path: "/post",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "/post/:id",
    name: "PostById",
    component: () => import("../views/Post.vue"),
  },
  {
<<<<<<< HEAD
=======
    path: "/log_in",
    name: "LogIn",
    component: () => import("../views/LogIn.vue"),
  },
  {
>>>>>>> 6a607c0e0fa20cccf847a3ad283fb00d5a7debf5
    path: "/users",
    name: "Userlist",
    props: true,
    component: () => import("../views/User.vue"),
  },
  {
    path: "/users/:id",
    name: "User",
    props: true,
    component: () => import("../views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;