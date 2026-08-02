# Day-Wise Implementation Plan: GO-Grocers Vulnerability Resolution

**Project**: GO-Grocers  
**Schedule**: 10-Day Plan (1 Fix + Git Commit/Push per day)  
**Start Date**: August 2, 2026  
**Goal**: Maintain GitHub contribution streak while systematically resolving all 10 security vulnerabilities and code issues.

---

## 📅 Day 1: Aug 02, 2026 — Fix Critical Auth Bypass & Unawaited Token Promises
- **Vulnerability**: `SEC-01` (Authentication Bypass via Unawaited Token Promise & Insecure Route Guard)
- **Target Files**:
  - `src/components/pages/login.jsx`
  - `src/components/pages/signup.jsx`
  - `src/App.js`
- **Actions**:
  1. Add `await` to `user.getIdToken()` in `login.jsx` and `signup.jsx`.
  2. Ensure unresolved Promise strings like `"[object Promise]"` are not stored in `localStorage`.
- **Git Push Command**:
  ```bash
  git add src/components/pages/login.jsx src/components/pages/signup.jsx src/App.js
  git commit -m "fix(auth): resolve unawaited getIdToken promise and token bypass"
  git push origin main
  ```

---

## 📅 Day 2: Aug 03, 2026 — Fix Cart Infinite Re-Render Loop & Auth Syntax Error
- **Vulnerability**: `BUG-01` (Infinite Re-Render Loop) & `BUG-02` (Auth Syntax Error)
- **Target Files**:
  - `src/components/pages/cart.jsx`
- **Actions**:
  1. Fix syntax on line 60: change `getItem("authenticated" === "true")` to `getItem("authenticated") === "true"`.
  2. Remove `cart` state from `useEffect` dependency list to eliminate infinite re-render loop.
- **Git Push Command**:
  ```bash
  git add src/components/pages/cart.jsx
  git commit -m "fix(cart): resolve infinite useEffect loop and auth syntax bug"
  git push origin main
  ```

---

## 📅 Day 3: Aug 04, 2026 — Fix Variable Shadowing in Search Component
- **Vulnerability**: `BUG-03` (Variable Shadowing Causing Incorrect Cart Item Frequency Display)
- **Target Files**:
  - `src/components/pages/search.jsx`
- **Actions**:
  1. Rename callback parameter in `cart.find((item) => item.name === item.name)` on line 77 to `cart.find((cartItem) => cartItem.name === item.name)`.
- **Git Push Command**:
  ```bash
  git add src/components/pages/search.jsx
  git commit -m "fix(search): resolve variable shadowing in cart item frequency lookup"
  git push origin main
  ```

---

## 📅 Day 4: Aug 05, 2026 — Clean Up Auth Listener Memory Leaks
- **Vulnerability**: `BUG-04` (Firebase Auth Listener Memory Leaks)
- **Target Files**:
  - `src/components/pages/checkout.jsx`
  - `src/components/pages/order.jsx`
  - `src/components/pages/orders.jsx`
  - `src/components/pages/profile.jsx`
  - `src/components/pages/addresses.jsx`
  - `src/components/pages/contactus.jsx`
  - `src/components/pages/dashboard.jsx`
- **Actions**:
  1. Wrap `onAuthStateChanged(auth, ...)` in `useEffect` in all page components.
  2. Return unsubscribe cleanup functions to prevent memory leaks and stacked redirects.
- **Git Push Command**:
  ```bash
  git add src/components/pages/
  git commit -m "fix(auth): wrap onAuthStateChanged in useEffect with cleanup functions"
  git push origin main
  ```

---

## 📅 Day 5: Aug 06, 2026 — Fix IDOR Vulnerability in Firestore Operations
- **Vulnerability**: `SEC-02` (Insecure Direct Object Reference via `localStorage.getItem("uid")`)
- **Target Files**:
  - `src/components/firestore.operations.files/*` (`getuser.js`, `getcart.js`, `getorder.js`, `updatecart.js`, `updateaddress.js`, `setaddress.js`, `adduserorder.js`, `markorderascomplete.js`)
- **Actions**:
  1. Replace untrusted `localStorage.getItem("uid")` lookups with `getAuth(app).currentUser?.uid`.
- **Git Push Command**:
  ```bash
  git add src/components/firestore.operations.files/
  git commit -m "security(firestore): replace localstorage UID lookup with auth.currentUser.uid"
  git push origin main
  ```

---

## 📅 Day 6: Aug 07, 2026 — Secure Session Storage & Centralize Auth Context
- **Vulnerability**: `SEC-05` (Sensitive Data Exposure in `localStorage`)
- **Target Files**:
  - `src/App.js`
  - `src/components/elements/navbar.jsx`
- **Actions**:
  1. Move session state into React `MyContext`.
  2. Remove sensitive tokens/UIDs from `localStorage`.
- **Git Push Command**:
  ```bash
  git add src/App.js src/components/elements/navbar.jsx
  git commit -m "refactor(auth): migrate session state from localstorage to React Context"
  git push origin main
  ```

---

## 📅 Day 7: Aug 08, 2026 — Enforce Cloud Firestore Security Rules
- **Vulnerability**: `SEC-03` (Missing Cloud Firestore Security Rules)
- **Target Files**:
  - `firestore.rules` (NEW)
- **Actions**:
  1. Create `firestore.rules` with `request.auth.uid == userId` restrictions.
- **Git Push Command**:
  ```bash
  git add firestore.rules
  git commit -m "security(firestore): add rules for user database authorization"
  git push origin main
  ```

---

## 📅 Day 8: Aug 09, 2026 — Patch Vulnerable npm Dependencies
- **Vulnerability**: `SEC-04` (89 Vulnerable npm Dependencies)
- **Target Files**:
  - `package.json`
  - `package-lock.json`
- **Actions**:
  1. Run `npm audit fix`.
  2. Upgrade outdated dependencies.
- **Git Push Command**:
  ```bash
  git add package.json package-lock.json
  git commit -m "chore(deps): update npm packages to patch vulnerability advisories"
  git push origin main
  ```

---

## 📅 Day 9: Aug 10, 2026 — Validate Price & Discount Calculation Integrity
- **Vulnerability**: `SEC-06` (Client-Side Price & Discount Manipulation)
- **Target Files**:
  - `src/components/pages/cart.jsx`
  - `src/components/pages/checkout.jsx`
- **Actions**:
  1. Validate item price & discount amounts against catalog values before order placement.
- **Git Push Command**:
  ```bash
  git add src/components/pages/cart.jsx src/components/pages/checkout.jsx
  git commit -m "fix(checkout): validate order item prices and coupon discount calculation"
  git push origin main
  ```

---

## 📅 Day 10: Aug 11, 2026 — Refactor Direct DOM Manipulations & Add Input Validation
- **Vulnerability**: `CODE-01` (Direct DOM Manipulations & Unsanitized Inputs)
- **Target Files**:
  - `src/components/elements/navbar.jsx`
  - `src/components/pages/addresses.jsx`
  - `src/components/pages/editprofile.jsx`
- **Actions**:
  1. Replace `window.location.href` search navigation in `navbar.jsx` with `useNavigate()`.
  2. Add regex phone & pincode validation rules.
- **Git Push Command**:
  ```bash
  git add src/components/elements/navbar.jsx src/components/pages/addresses.jsx src/components/pages/editprofile.jsx
  git commit -m "refactor(ui): replace window.location with useNavigate and add input validation"
  git push origin main
  ```

---
*Implementation Plan saved in root directory.*
