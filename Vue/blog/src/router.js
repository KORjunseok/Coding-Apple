import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List"
import Home from "./components/Home"
import Detail from "./components/Detail"
import Author from "./components/Author"
import Comment from "./components/Comment"


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
    path : "/detail/:id",
    component: Detail,
    children : [
      {
        path: "author",
        component: Author
      },
      {
        path: "comment",
        component: Comment
      }
    ]
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
