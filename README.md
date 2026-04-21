Aplikasi Manajemen Produk (CRUD) berbasis **Fullstack JavaScript** menggunakan:

- ⚙️ Backend: Node.js + Express.js
- 🎨 Frontend: Vue.js 3 (Single Page Application)
- 🗄 Database: PostgreSQL

---

## 📋 Prerequisites

Pastikan tools berikut sudah terinstall:

- Node.js (v16 atau lebih baru)
- PostgreSQL
- Git

Cek versi:

```bash
node -v
psql --version
git --version
```

---

## 📁 Struktur Proyek

```
.
├── backend/          # REST API (Express.js)
├── frontend/         # SPA Vue.js 3
├── database.sql      # Skema database
└── README.md
```

---

## ⚙️ Setup Database

1. Buka PostgreSQL (pgAdmin / psql)
2. Buat database baru:

```sql
CREATE DATABASE testing;
```

3. Import schema:

```bash
psql -U postgres -d testing -f database.sql
```

---

## 🔧 Setup Backend

1. Masuk ke folder backend:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Buat file `.env`:

```env
PORT=5000

DB_USER=postgres
DB_PASSWORD=passwordnya
DB_HOST=localhost
DB_PORT=5432
DB_NAME=testing
```

4. Jalankan server:

```bash
npm run dev
```

atau:

```bash
npm start
```

5. Backend akan berjalan di:

```
http://localhost:5000
```

---

## 🎨 Setup Frontend

1. Masuk ke folder frontend:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan aplikasi:

```bash
npm run dev
```

4. Akses di browser:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint      | Deskripsi          |
| ------ | ------------- | ------------------ |
| GET    | /products     | Ambil semua produk |
| GET    | /products/:id | Ambil produk by ID |
| POST   | /products     | Tambah produk      |
| PUT    | /products/:id | Update produk      |
| DELETE | /products/:id | Hapus produk       |

---

## 🧪 Fitur Utama

- CRUD Produk (Create, Read, Update, Delete)
- RESTful API dengan Express.js
- Integrasi PostgreSQL
- Frontend interaktif menggunakan Vue.js 3
- Arsitektur project modular & scalable

---

## 🧰 Tools Pendukung

- Postman / Insomnia → testing API
- pgAdmin → manajemen database
- VS Code → code editor

---

## ⚠️ Catatan Penting

- Pastikan PostgreSQL dalam kondisi running
- Periksa kembali konfigurasi `.env`
- Gunakan port yang tidak bentrok
- Jika terjadi error koneksi database, cek:
  - username/password
  - port PostgreSQL
  - database sudah dibuat atau belum

---

## 👨‍💻 Author

Project ini dibuat untuk keperluan:

**Fullstack Developer Assessment**
Doceo

---
