# 🔐 Auth API – CodingNow

This is a basic authentication API for user sign-up, login, OTP verification, and JWT token refresh.

---

## 🚀 Base URL

```
http://localhost:8000/
```

> Replace with your deployed URL in production.

---

## 📦 Available Endpoints

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| POST   | `/signup/`         | Register a new user (sends OTP)     |
| POST   | `/verify-signup/`  | Verify OTP after sign-up            |
| POST   | `/login/`          | Login user (sends OTP)              |
| POST   | `/verify-login/`   | Verify OTP and return access token  |
| POST   | `/send-otp/`       | Send OTP to registered email        |
| POST   | `/token/refresh/`  | Refresh JWT access token            |

---

## 📝 Endpoint Details

### 🔸 `POST /signup/`
Registers a new user and sends an OTP to the provided email.

**Body:**
```json
{
  "email": "user@example.com"
}
```

---

### 🔸 `POST /verify-signup/`
Verifies the OTP sent during signup.

**Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

---

### 🔸 `POST /login/`
Initiates login by sending OTP to registered email.

**Body:**
```json
{
  "email": "user@example.com"
}
```

---

### 🔸 `POST /verify-login/`
Verifies the OTP and returns access + refresh tokens.

**Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

**Response:**
```json
{
  "access": "your_access_token",
  "refresh": "your_refresh_token"
}
```

---

### 🔸 `POST /send-otp/`
Sends OTP to the provided email (useful for password reset flows or additional verification).

**Body:**
```json
{
  "email": "user@example.com"
}
```

---

### 🔸 `POST /token/refresh/`
Refreshes JWT access token using refresh token.

**Body:**
```json
{
  "refresh": "your_refresh_token"
}
```

---

## 📂 Dependencies

Make sure to have these installed:
- Django
- djangorestframework
- djangorestframework-simplejwt

---

## ✅ Example Flow

1. User signs up via `/signup/`
2. Receives OTP → verifies via `/verify-signup/`
3. Logs in via `/login/` → verifies OTP via `/verify-login/`
4. Uses `/token/refresh/` to get a new access token when expired

---

## 🛡️ Security Notes

- Make sure to keep `.env` secrets secure.
- Use HTTPS in production.
- Rate limit OTP requests to avoid abuse.

---

