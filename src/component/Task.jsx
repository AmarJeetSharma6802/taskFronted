import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");


  const token = localStorage.getItem("token");
  const API = import.meta.env.VITE_API_URL;

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/api/getTask`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data );
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(
        `${API}/api/updateTaks/${editId}`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditId(null);
    } else {
      await axios.post(
        `${API}/api/createTask`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/api/deleteTask/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

 const filteredTasks = Array.isArray(tasks)
  ? tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
    )
  : [];


  return (
    <div className="task-container">

      <input
  className="search-input"
  placeholder="Search task..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

      <div className="input-row">
        <input
          className="task-input"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="task-input"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="btn-wrapper">
        <button onClick={handleSubmit} className="add-btn">
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {filteredTasks.map((task) => (
        <div key={task._id} className="task-card">
          <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>

          <div className="task-actions">
            <button className="edit-btn" onClick={() => handleEdit(task)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

