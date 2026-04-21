<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p class="price">Rp {{ formatPrice(product.price) }}</p>
    <p>Stok: {{ product.stock }}</p>
    <div class="actions">
      <router-link :to="`/product/${product.id}`" class="btn btn-info"
        >Detail</router-link
      >
      <router-link :to="`/edit/${product.id}`" class="btn btn-warning"
        >Edit</router-link
      >
      <button @click="$emit('delete', product.id)" class="btn btn-danger">
        Hapus
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});

defineEmits(["delete"]);

const formatPrice = (value) => {
  return Number(value).toLocaleString("id-ID");
};
</script>

<style scoped>
.product-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.product-card h3 {
  margin-top: 0;
}
.price {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
}
.actions {
  margin-top: auto;
  padding-top: 15px;
  display: flex;
  gap: 10px;
}
.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
}
.btn-info {
  background: #3498db;
  color: white;
}
.btn-warning {
  background: #f1c40f;
  color: black;
}
.btn-danger {
  background: #e74c3c;
  color: white;
}
</style>
