import { useState } from "react";
import "./auth.css"

function Auth() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body =
      mode === "register"
        ? {
            action: "register",
            username: form.username,
            email: form.email,
            password: form.password,
          }
        : {
            action: "login",
            email: form.email,
            password: form.password,
          };

    try {
      const res = await fetch("https://real-from-data-server.onrender.com/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const text = await res.text();
      // console.log("RAW RESPONSE:", text);

      const data = JSON.parse(text);

      // const data = await res.json()

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);
      setForm({ username: "", email: "", password: "" });

      if (mode === "login") {
        window.location.href="/dashboard";
      } else {
        setMode("login");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="auth-container">
  <div className="auth-card">
    <h2>{mode === "login" ? "Login" : "Register"}</h2>

    <form onSubmit={handleSubmit}>
      {mode === "register" && (
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
      )}

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {mode === "login" ? "Login" : "Register"}
      </button>
    </form>

    <p
      className="auth-toggle"
      onClick={() => setMode(mode === "login" ? "register" : "login")}
    >
      {mode === "login" ? "Create Account" : "Back to Login"}
    </p>
  </div>
</div>
  );
}

export default Auth;
