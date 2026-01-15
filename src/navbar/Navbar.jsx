import React, { useEffect, useState, useRef } from "react";
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
        const token = localStorage.getItem("token");

        if (!token) {
          setLoading(false);
          return;
        }

        const res = await fetch(`${process.env.REACT_APP_URL}/api/user`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        // console.log("USER RESPONSE:", res.status, data);

        if (res.ok && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Fetch user error:", err);
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
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/", { replace: true });
    }
  };

  const firstChar = user?.name?.charAt(0)?.toUpperCase();

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo" id="home">
          <div className="logo-box">⌘</div>
          <span className="logo-text">Dev.</span>
        </div>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>

        {!loading && user && (
          <div className="avatar-wrapper" ref={menuRef}>
            <div className="avatar" onClick={() => setOpen((prev) => !prev)}>
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
