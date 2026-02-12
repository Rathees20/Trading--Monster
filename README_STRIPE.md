# Stripe Integration Instructions

To make payments work, you need two terminal processes running simultaneously:

1. **Frontend (Vite):**
   ```bash
   npm run dev
   ```
   Runs on `http://localhost:5173`.

2. **Backend (Express):**
   ```bash
   node server.js
   ```
   Runs on `http://localhost:4242`.

## Troubleshooting
- **ERR_CONNECTION_REFUSED**: This means the backend server (step 2) is not running.
- **Payment Failed**: Ensure your Stripe keys are correct in `server.js` and `UnlockFullAccessSection.jsx`.
