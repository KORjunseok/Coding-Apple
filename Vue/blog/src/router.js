import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List"
import Home from "./components/Home"
import Detail from "./components/Detail"

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path : "/",
    component: Home
  },
  {
    path : "/Detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
