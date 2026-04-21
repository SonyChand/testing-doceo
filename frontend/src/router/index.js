import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductForm from "../components/ProductForm.vue";
import ProductDetail from "../views/ProductDetail.vue";

const routes = [
  { path: "/", name: "ProductList", component: ProductList },
  { path: "/add", name: "ProductAdd", component: ProductForm },
  { path: "/edit/:id", name: "ProductEdit", component: ProductForm },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
