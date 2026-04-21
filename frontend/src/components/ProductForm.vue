<template>
  <div class="form-container">
    <h2>{{ isEdit ? "Edit Produk" : "Tambah Produk Baru" }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Nama Produk</label>
        <input type="text" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label>Deskripsi</label>
        <textarea v-model="form.description" rows="4"></textarea>
      </div>
      <div class="form-group">
        <label>Harga (Rp)</label>
        <input type="number" v-model="form.price" required min="0" />
      </div>
      <div class="form-group">
        <label>Stok</label>
        <input type="number" v-model="form.stock" required min="0" />
      </div>
      <button type="submit" class="btn-submit">
        {{ isEdit ? "Update" : "Simpan" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const router = useRouter();
const route = useRoute();
const isEdit = ref(false);

const form = ref({
  name: "",
  description: "",
  price: 0,
  stock: 0,
});

const fetchProduct = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/products/${id}`,
    );
    form.value = response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => {
  if (route.params.id) {
    isEdit.value = true;
    fetchProduct(route.params.id);
  }
});

const submitForm = async () => {
  try {
    if (isEdit.value) {
      await axios.put(
        `http://localhost:5000/api/products/${route.params.id}`,
        form.value,
      );
    } else {
      await axios.post("http://localhost:5000/api/products", form.value);
    }
    router.push("/");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Terjadi kesalahan saat menyimpan data.");
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.btn-submit {
  background: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}
.btn-submit:hover {
  background: #27ae60;
}
</style>
