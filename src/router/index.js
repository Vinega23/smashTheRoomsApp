import { createRouter, createWebHashHistory } from "vue-router";
import FirstView from "../views/FirstView.vue"
import SecondView from "../views/SecondView.vue"
import ShortView from "../views/ShortView.vue"

const routes = [
  {
    path: "/first",
    name: "first",
    component: FirstView,
  },
  {
    path: "/second",
    name: "second",
    component: SecondView,
  },
  {
    path: "/short",
    name: "short",
    component: ShortView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;