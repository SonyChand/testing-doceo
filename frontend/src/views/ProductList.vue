<template>
  <div>
    <h2>Daftar Produk</h2>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @delete="deleteProduct"
      />
    </div>
    <div v-if="products.length === 0" class="empty-state">
      Belum ada produk. Silakan tambah produk baru.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const deleteProduct = async (id) => {
  if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      products.value = products.value.filter((p) => p.id !== id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.empty-state {
  text-align: center;
  padding: 50px;
  color: #7f8c8d;
}
</style>
