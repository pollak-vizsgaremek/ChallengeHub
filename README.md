<div align="center">

# 🏆 ChallengeHub

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📎 Projekt linkek

| Erőforrás | Link |
|---|---|
| 📄 Google Dokumentáció | https://docs.google.com/document/d/1LywTYz7P9tSC847iAAZr0Xbdza5jPRxyxShXGOh9gHE/edit?usp=sharing |
| 🎨 Figma terv / Prototípus | https://www.figma.com/design/ylMzOZ7ZMRJbs8OsFEGz8K/ChallengeHUB?node-id=0-1&t=FUzqrhtAJAZWeviQ-1 |
| 📘 Swagger API Docs (helyi) | `http://localhost:3000/api-docs` |

---

## 👥 Csapattagok

<table>
  <tr>
    <td align="center"><b>Kőrösi Richárd</b><br/>Fejlesztő</td>
    <td align="center"><b>Varga Máté</b><br/>Fejlesztő</td>
  </tr>
</table>

---

## 🛠️ Felhasznált technológiák

### 🖥️ Frontend

| Technológia | Verzió | Felhasználás |
|---|---|---|
| [React](https://react.dev/) | 19 | UI keretrendszer |
| [Vite](https://vitejs.dev/) | rolldown | Build eszköz és dev szerver |
| [React Router DOM](https://reactrouter.com/) | 7 | Kliensoldali útvonalkezelés |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Ikonkönyvtár |
| [React Hot Toast](https://react-hot-toast.com/) | 2 | Toast értesítések |
| [AOS](https://michalsnik.github.io/aos/) | 2 | Görgetésre animálás |
| [hCaptcha](https://www.hcaptcha.com/) | — | Bot védelem |
| [jwt-decode](https://github.com/auth0/jwt-decode) | 4 | JWT token értelmezés |
| CSS | — | Egyedi stílusok |

### ⚙️ Backend

| Technológia | Verzió | Felhasználás |
|---|---|---|
| [Node.js](https://nodejs.org/) | 18+ | Futtatókörnyezet |
| [Express](https://expressjs.com/) | 5 | Web keretrendszer |
| [Prisma ORM](https://www.prisma.io/) | 6 | Adatbázis ORM és migrációk |
| [MySQL](https://www.mysql.com/) | 8 | Relációs adatbázis |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | 9 | Hitelesítési tokenek |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | 6 | Jelszó titkosítás |
| [Google Generative AI](https://ai.google.dev/) | — | AI-alapú kihívás ellenőrzés |
| [Multer](https://github.com/expressjs/multer) | 2 | Fájlfeltöltés kezelése |
| [Swagger](https://swagger.io/) | — | API dokumentáció |
| [Jest](https://jestjs.io/) + [Supertest](https://github.com/ladjs/supertest) | — | Backend tesztelés |
| [Nodemon](https://nodemon.io/) | — | Automatikus újraindítás fejlesztés közben |

---

## 📁 Mappastruktúra

```
ChallengeHub/
├── 📁 backend/
│   ├── controllers/      # Útvonalvezérlők
│   ├── middleware/        # Hitelesítési és validációs middleware
│   ├── prisma/            # Adatbázis séma és migrációk
│   │   └── schema.prisma
│   ├── service/           # Üzleti logika és AI szolgáltatás
│   ├── tests/             # Jest tesztek
│   └── index.js           # Belépési pont
│
├── 📁 frontend/
│   ├── src/               # React forrásfájlok
│   └── index.html         # HTML belépési pont
│
└── package.json           # Gyökér szkriptek — egyszerre indítja mindkettőt
```

---

## ⚙️ Telepítés és beállítás

### Előfeltételek

Győződj meg róla, hogy az alábbiak telepítve vannak:

- ✅ [Node.js](https://nodejs.org/) **v18 vagy újabb**
- ✅ [MySQL](https://www.mysql.com/) **v8**

### 1️⃣ Repository klónozása

```bash
git clone https://github.com/your-org/ChallengeHub.git
cd ChallengeHub
```

### 2️⃣ Alap fájlok telepítése

```bash
# Gyökér (concurrently runner)
npm install

# Backend
npm install --prefix backend

# Frontend
npm install --prefix frontend
```

### 3️⃣ Env beállítása

**Backend** — hozd létre a `backend/.env` fájlt:

```env
DATABASE_URL="mysql://felhasznalo:jelszo@localhost:3306/challengehub"
GEMINI_API_KEY="google_ai_api_kulcs_ide"
```

**Frontend** — hozd létre a `frontend/.env` fájlt:

```env
VITE_API_URL=http://localhost:3000
```

### 4️⃣ Adatbázis inicializálása

```bash
npx prisma migrate dev --prefix backend
```

---

## 🚀 Az alkalmazás indítása

> [!TIP]
> **Nem kell külön elindítani a frontendet és a backendet!**
> Egyetlen parancs a gyökér mappából egyszerre indítja el mindkettőt a `concurrently` csomag segítségével.

```bash
npm run dev
```

| Szolgáltatás | URL |
|---|---|
| 🟢 Frontend | `http://localhost:5173` |
| 🔵 Backend API | `http://localhost:3000` |
| 📘 Swagger Docs | `http://localhost:3000/api-docs` |

---

## 🧪 Tesztek futtatása

### ⚙️ Backend tesztek (Jest + Supertest)

```bash
npm test --prefix backend
```

### 🖥️ Frontend tesztek (Playwright)

```bash
npx playwright test --prefix frontend
```

> [!NOTE]
> A Playwright tesztek futtatásához az alkalmazásnak futnia kell (`npm run dev`).
---

## 📄 Licenc

Ez a projekt iskolai vizsgaremekként készült a **2025/2026**-os tanévre.
