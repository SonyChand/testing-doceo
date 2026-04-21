<template>
  <div id="app">
    <nav class="navbar">
      <h1>Hexagon Store Admin</h1>
      <router-link to="/">Daftar Produk</router-link>
      <router-link to="/add">Tambah Produk</router-link>
    </nav>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f4f9;
}
.navbar {
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 20px;
}
.navbar h1 {
  margin: 0;
  font-size: 1.5rem;
  margin-right: auto;
}
.navbar a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  background: #555;
  border-radius: 4px;
}
.navbar a:hover {
  background: #777;
}
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
