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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
    path: "/log_in",
    name: "LogIn",
    component: () => import("../views/LogIn.vue"),
  },
  {
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