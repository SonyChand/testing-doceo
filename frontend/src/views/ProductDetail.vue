<template>
  <div v-if="product" class="detail-container">
    <h2>{{ product.name }}</h2>
    <div class="detail-content">
      <p>
        <strong>Deskripsi:</strong><br />
        {{ product.description || "Tidak ada deskripsi" }}
      </p>
      <p><strong>Harga:</strong> Rp {{ formatPrice(product.price) }}</p>
      <p><strong>Sisa Stok:</strong> {{ product.stock }} unit</p>
      <p class="timestamp">
        Ditambahkan pada: {{ formatDate(product.created_at) }}
      </p>
    </div>
    <router-link to="/" class="btn-back">Kembali ke Daftar</router-link>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const product = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/products/${route.params.id}`,
    );
    product.value = response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
});

const formatPrice = (value) => Number(value).toLocaleString("id-ID");
const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
</script>

<style scoped>
.detail-container {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}
.detail-content {
  margin: 20px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 5px solid #3498db;
}
.timestamp {
  font-size: 0.9em;
  color: #7f8c8d;
  margin-top: 20px;
}
.btn-back {
  display: inline-block;
  padding: 10px 15px;
  background: #95a5a6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.btn-back:hover {
  background: #7f8c8d;
}
</style>
