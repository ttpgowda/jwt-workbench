# 🚀 JWT Workbench – Project Transformation Prompt

I have built a single-page JWT tool using HTML, CSS, and JavaScript.  
It supports decoding, verifying, extending expiry, editing payloads, and re-signing JWTs.

Now I want to convert it into a **production-ready open-source project**.

---

## 🎯 Goal

Transform this single-file implementation into a **well-structured, scalable, and maintainable project** with modern best practices.

---

## 📁 Target Project Structure

Create a clean modular structure like this:

jwt-workbench/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── main.js
│   ├── styles.css
│   │
│   ├── core/
│   │   ├── decode.js
│   │   ├── verify.js
│   │   ├── extend.js
│   │   └── resign.js
│   │
│   ├── ui/
│   │   ├── renderer.js
│   │   ├── tabs.js
│   │   └── toast.js
│   │
│   └── utils/
│       ├── time.js
│       └── storage.js
│
├── index.html
├── package.json
└── README.md

---

## 🧠 Requirements

### 1. Code Refactoring
- Separate business logic from UI
- Move JWT logic into `core/`
- Keep UI rendering in `ui/`
- Extract reusable helpers into `utils/`

---

### 2. Features to Preserve
Ensure all existing features continue working:
- Decode JWT
- Verify signature
- Display claims and payload
- Extend token expiry
- Edit payload JSON
- Re-sign token
- Copy and reuse tokens
- Local storage save/load

---

### 3. Enhancements to Add

#### 🔒 Security
- Add warning for sensitive tokens
- Avoid persisting secrets by default

#### ⚡ UX Improvements
- Copy decoded JSON button
- Download payload as JSON
- Better error messages
- Loading/feedback states

#### 🌗 UI
- Optional dark/light theme toggle

---

### 4. Testing
- Add unit tests for:
  - decode
  - verify
  - extend logic
- Use a simple testing framework (Vitest or Jest)

---

### 5. Tooling
- Use **Vite** for project setup
- Configure scripts:
  - dev
  - build
  - preview

---

### 6. Documentation

Create a high-quality `README.md` including:
- Project description
- Features
- Screenshots or GIF
- Live demo link (to be added later)
- Usage instructions
- Tech stack

---

### 7. Deployment

Prepare the project for deployment:
- Optimize for static hosting
- Ensure it works on:
  - Vercel (preferred)
  - GitHub Pages

---

## 🚀 Bonus Features (Optional but Recommended)

- Compare two JWT tokens
- Highlight changed claims (diff view)
- Algorithm switch (HS256 / RS256)
- JWT expiration simulator

---

## 📌 Output Expectations

- Clean, modular codebase
- Maintainable folder structure
- Production-ready setup
- Easy for contributors to understand

---

## 💡 Context

This tool is intended to be:
- Developer-friendly
- Fast and browser-based
- Useful for debugging and inspecting JWTs

---

## 🔥 End Goal

Turn this into a **professional-grade open-source developer tool** that can:
- Be deployed publicly
- Attract GitHub stars
- Be extended in the future (React, extensions, etc.)