# PRD: Dashboard Survei Kepuasan Pemerintah Nasional

**Version:** 1.0  
**Author:** Haikal  
**Last Updated:** April 2026  
**Status:** In Development

---

## 1. Overview

Dashboard real-time untuk memvisualisasikan hasil survei kepuasan pemerintah nasional tingkat nasional. Data bersumber dari Google Form → Google Sheets → Google Apps Script API → Next.js dashboard.

Sistem dirancang **dinamis** — tidak ada pertanyaan/kolom yang di-hardcode. Struktur chart otomatis menyesuaikan kolom yang ada di Google Sheet.

---

## 2. Goals

| # | Goal |
|---|---|
| G1 | Tampilkan hasil survei secara real-time tanpa reload manual |
| G2 | Visualisasi dinamis berdasarkan struktur kolom Sheet (tidak hardcoded) |
| G3 | Chart bisa di-download per-item (PNG) atau semua sekaligus (PDF) |
| G4 | Data mentah bisa di-export sebagai CSV |
| G5 | Akses hanya untuk surveyor yang terautentikasi |

---

## 3. Users

| Role | Akses | Auth |
|---|---|---|
| Surveyor | Login → lihat semua data & chart → download semua format | Username + Password |

> v1 hanya support 1 akun surveyor. Multi-user management masuk v2.

---

## 4. Features

### F1 — Authentication
- Login page dengan form username + password
- Session-based auth via NextAuth.js (Credentials provider)
- Semua route `/dashboard/*` diproteksi via middleware
- Unauthorized → redirect otomatis ke `/login`
- Credentials disimpan di environment variable (tidak hardcoded)

### F2 — Dynamic Chart Rendering
Apps Script mendeteksi tipe tiap kolom dari sampel 100 baris pertama, lalu return metadata. Frontend render chart sesuai tipe:

| Tipe Kolom | Contoh | Chart yang Dirender |
|---|---|---|
| `scale` | Rating 1–5, 1–10 | Bar chart (distribusi per nilai) |
| `categorical` | Pilihan ganda, dropdown | Pie / Donut chart |
| `timestamp` | Kolom Timestamp dari Form | Line chart (respons per hari) |
| `numeric` | Angka bebas | Summary card (avg, min, max) |
| `text` | Jawaban teks panjang | Di-skip (tidak divisualisasikan) |

### F3 — Summary Cards
Selalu muncul di bagian atas dashboard:
- **Total Responden** — total semua baris
- **Hari Ini** — responden yang masuk hari ini
- **Kemarin** — responden kemarin
- **Trend** — persentase naik/turun vs kemarin

### F4 — Auto-refresh
- Data di-fetch ulang otomatis setiap **60 detik**
- Indikator "Terakhir diperbarui: HH:MM:SS" selalu visible
- Manual refresh button tersedia

### F5 — Export
| Format | Scope | Trigger |
|---|---|---|
| PNG | Per-chart | Tombol download di setiap chart |
| PDF | Semua chart sekaligus | Tombol di header |
| CSV | Data mentah | Tombol di header |

### F6 — Filter
- Filter by **date range** (date picker start–end)
- Filter langsung mempengaruhi semua chart dan summary

---

## 5. Tech Stack

| Layer | Tech | Alasan |
|---|---|---|
| Frontend Framework | Next.js 14 (App Router) | Familier, deploy mudah di Vercel |
| Styling | Tailwind CSS | Konsisten sama stack lain |
| Charts | Recharts | React-native, customizable, ringan |
| Auth | NextAuth.js v4 (Credentials) | Mudah setup, JWT session |
| Backend / Data | Google Apps Script Web App | Zero-cost, langsung akses Sheets |
| Export PNG | html2canvas | Capture DOM element jadi canvas |
| Export PDF | jsPDF | Generate PDF dari canvas |
| Deploy | Vercel | Auto-deploy dari GitHub |

---

## 6. Data Flow

```
Google Form
    ↓ (submit)
Google Sheets (spreadsheet)
    ↓ (Apps Script baca sheet)
Apps Script Web App (REST-like API)
    ↓ (Next.js API route proxy)
Next.js /api/survey route
    ↓ (client fetch)
Dashboard (React components)
    ↓
Recharts → html2canvas → PNG/PDF export
```

> Next.js API route berfungsi sebagai proxy untuk menyembunyikan Apps Script URL dari client-side code.

---

## 7. Apps Script API

**Base URL:** `https://script.google.com/macros/s/{DEPLOYMENT_ID}/exec`

| Action | Query Param | Response |
|---|---|---|
| Metadata kolom | `?action=metadata` | Array kolom + tipe yang terdeteksi |
| Semua data | `?action=data` | Array rows sebagai JSON objects |
| Data terfilter | `?action=data&startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` | Rows dalam range |
| Summary stats | `?action=summary` | Total, today, yesterday, trend, dailyCounts |

### Column Type Detection Logic (server-side, Apps Script)
Sampling 100 rows pertama per kolom:
1. Kalau value adalah `Date` object → `timestamp`
2. Kalau semua numeric + range 1–10 → `scale`
3. Kalau semua numeric (range bebas) → `numeric`
4. Kalau unique values ≤ 15 → `categorical`
5. Else → `text`

---

## 8. File Structure

```
survey-dashboard/
├── PRD.md
├── package.json
├── .env.local.example
├── tailwind.config.ts
├── tsconfig.json
│
├── apps-script/
│   └── Code.gs                          # Deploy sebagai Web App di Google Apps Script
│
└── src/
    ├── middleware.ts                     # Proteksi route /dashboard/*
    │
    ├── app/
    │   ├── page.tsx                      # Redirect → /dashboard
    │   ├── login/
    │   │   └── page.tsx                  # Login form
    │   ├── dashboard/
    │   │   └── page.tsx                  # Main dashboard
    │   └── api/
    │       ├── auth/[...nextauth]/
    │       │   └── route.ts              # NextAuth handler
    │       └── survey/
    │           └── route.ts              # Proxy ke Apps Script
    │
    ├── components/
    │   ├── Header.tsx                    # Top bar + export buttons
    │   ├── FilterBar.tsx                 # Date range filter
    │   ├── SummaryCards.tsx              # 4 summary cards
    │   └── charts/
    │       ├── ChartWrapper.tsx          # Container + download PNG per chart
    │       ├── DynamicBarChart.tsx       # Untuk tipe 'scale'
    │       ├── DynamicPieChart.tsx       # Untuk tipe 'categorical'
    │       └── DynamicLineChart.tsx      # Untuk tipe 'timestamp' (respons/hari)
    │
    ├── hooks/
    │   └── useSurveyData.ts              # Fetch + auto-refresh logic
    │
    └── lib/
        └── detectColumnType.ts          # Aggregation helpers (client-side)
```

---

## 9. Environment Variables

```env
# .env.local
NEXTAUTH_SECRET=your-random-secret-min-32-chars
NEXTAUTH_URL=http://localhost:3000

APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

SURVEYOR_USERNAME=admin
SURVEYOR_PASSWORD=your-secure-password
```

---

## 10. Setup Guide

### Google Apps Script
1. Buka Google Sheet yang terhubung ke Google Form
2. **Extensions → Apps Script**
3. Copy-paste isi `apps-script/Code.gs`
4. **Deploy → New deployment → Web App**
   - Execute as: **Me**
   - Who has access: **Anyone** *(URL tetap rahasia karena di-proxy)*
5. Copy deployment URL → paste ke `.env.local` sebagai `APPS_SCRIPT_URL`

### Next.js
```bash
git clone <repo>
cd survey-dashboard
npm install
cp .env.local.example .env.local
# Edit .env.local sesuai kebutuhan
npm run dev
```

### Deploy ke Vercel
1. Push ke GitHub
2. Import di vercel.com
3. Set environment variables (sama dengan .env.local)
4. Deploy

---

## 11. Out of Scope (v1)

| Item | Notes |
|---|---|
| Multi-user management | v1 hanya 1 akun. v2 bisa pakai Supabase Auth |
| Edit / hapus respons dari dashboard | Read-only di v1 |
| WebSocket / SSE real-time | Polling 60s cukup untuk kebutuhan survei |
| Analisis sentimen teks bebas | Butuh LLM integration, masuk v2 |
| Role-based access (admin vs viewer) | v2 |
| Paginasi data besar (>10.000 rows) | Apps Script ada batas 6MB response, perlu pagination di v2 |

---

## 12. Known Limitations

- Apps Script response limit **~6MB** → untuk dataset besar (>5000 rows), pertimbangkan paginasi di v2
- Apps Script **cold start** bisa 2–5 detik untuk request pertama
- Export PDF kualitasnya tergantung render HTML2Canvas — bukan vector
