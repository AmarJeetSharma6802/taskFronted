import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://backend-task-28rk.onrender.com/api/user", {
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("https://backend-task-28rk.onrender.com/api/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setUser(null);
      navigate("/", { replace: true });
    }
  };

  const firstChar = user?.name?.charAt(0)?.toUpperCase();

  return (
    <header className="navbar">
      <div className="nav-container">
        
        <div className="logo">
          <div className="logo-box">⌘</div>
          <span className="logo-text">
            Dev.
          </span>
        </div>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>

          {user && (
          <div className="avatar-wrapper" ref={menuRef}>
            <div
              className="avatar"
              onClick={() => setOpen(!open)}
            >
              {firstChar}
            </div>

            {open && (
              <div className="avatar-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;
