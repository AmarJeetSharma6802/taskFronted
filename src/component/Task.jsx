import { useEffect, useState } from "react";
import axios from "axios";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const API = import.meta.env.VITE_API_URL;

  const fetchTasks = async () => {
      const res = await axios.get(`${API}/api/getTask`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data.findTask);
    };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(
        `${API}/api/updateTaks/${editId}`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setEditId(null);
    } else {
      await axios.post(
        `${API}/api/createTask`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } },
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

  return (
    <div className="" style={{minHeight:"100vh" , color:'white'}}>
      <div className="">
        <input
          className=""
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className=""
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit} className="5">
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {tasks.map((task) => (
        <div key={task._id} className="">
          <div>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>

          <div className="">
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button
              className="0"
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
