import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../component/Hero";

function Dashboard() {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const ft = async () => {
  //       try {
  //         const res = await fetch("http://localhost:3000/api/get-data", {
  //           credentials: "include",
  //         });

  //       const data = await res.json();

  //       if (!res.ok || !data.user) {
  //         alert("You are not logged in");
  //         navigate("/", { replace: true });
  //         return;
  //       }

  //       setUser(data.user);

  //     } catch (err) {
  //       console.error("FETCH ERROR:", err);
  //       alert("Session expired");
  //       navigate("/", { replace: true });
  //     }
  //   };

  //   ft();
  // }, [navigate]);

  // if (!user) {
  //   return (
  //     <div className="dashboard-container">
  //       <div className="dashboard-card">
  //         <div className="loader"></div>
  //         <p style={{ marginTop: "12px" }}>Loading dashboard...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="dashboard-container">
     <Hero/>
    </div>
  );
}

export default Dashboard;
