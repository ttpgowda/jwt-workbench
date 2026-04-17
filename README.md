# 🔐 JWT Workbench

> A fast, browser-based developer tool for debugging JSON Web Tokens — decode, verify, extend expiry, edit payloads, and re-sign. **Nothing leaves your browser.**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ttpgowda.github.io/jwt-workbench/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/built%20with-Vite-646cff)](https://vitejs.dev)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Decode** | Instantly decode any JWT into header + payload |
| ✅ **Verify** | Check the signature with your HMAC secret or PEM public key |
| ⏱ **Extend** | Add 1h / 6h / 1d / 7d to the token expiry and re-sign |
| ✏️ **Edit Payload** | Modify any field in the JSON payload and re-sign |
| 📋 **Copy & Download** | Copy decoded JSON or download `payload.json` |
| 🎨 **Dark / Light theme** | Toggle between themes with your preference saved |
| 🔐 **Security warnings** | Detects sensitive fields (email, phone, etc.) in tokens |
| 💾 **Save / Load** | Persist tokens to localStorage (secret opt-in only) |
| 🎨 **Color-coded token** | Visual breakdown of header · payload · signature |
| 📊 **Diff view** | See exactly what changed when extending a token |

---

## 🛠 Tech Stack

- **[Vite](https://vitejs.dev)** — Build tool & dev server
- **[jsrsasign](https://kjur.github.io/jsrsasign/)** — JWT signing & verification (loaded via CDN)
- **[Vitest](https://vitest.dev)** — Unit testing
- Vanilla JS (ES Modules), CSS Custom Properties

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/ttpgowda/jwt-workbench.git
cd jwt-workbench

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
jwt-workbench/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.js           # App entry, event wiring, state
│   ├── styles.css        # Design system (dark/light themes)
│   ├── core/
│   │   ├── decode.js     # JWT base64 decoding
│   │   ├── verify.js     # Signature verification (KJUR)
│   │   ├── extend.js     # Expiry extension + re-signing
│   │   └── resign.js     # Payload edit + re-signing
│   ├── ui/
│   │   ├── renderer.js   # All DOM updates
│   │   ├── tabs.js       # Tab state management
│   │   └── toast.js      # Notification system
│   ├── utils/
│   │   ├── time.js       # humanDuration, formatTimestamp
│   │   └── storage.js    # localStorage helpers
│   └── __tests__/
│       ├── decode.test.js
│       ├── verify.test.js
│       └── extend.test.js
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🧪 Testing

```bash
npm run test
```

Unit tests cover:
- JWT decoding (valid token, malformed, missing parts)
- Signature verification (correct/wrong secret, missing inputs, errors)
- Expiry extension math (future expiry, expired token, no expiry)

---

## 📦 Build & Deploy

### Build for production
```bash
npm run build
npm run preview   # preview the built output locally
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm run build
# push the dist/ folder or use gh-pages action
```

Add `base: '/jwt-workbench/'` to `vite.config.js` if deploying to a subpath.

---

## 🔒 Security Notes

- **Nothing is sent to a server.** All processing is client-side.
- Secrets are **not persisted by default** — you must explicitly opt-in via the checkbox.
- The tool detects and warns about tokens containing potentially sensitive fields.
- Do not use this tool with production secrets on shared machines.

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © [ttpgowda](https://github.com/ttpgowda)
