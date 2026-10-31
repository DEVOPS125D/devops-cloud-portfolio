import React, { useState, useEffect } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Checking...');

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/items/');
      if (!res.ok) throw new Error('API fetch failed');
      const data = await res.json();
      setItems(data);
      setStatus('Operational (Postgres Live)');
    } catch (err) {
      console.error(err);
      setStatus('API Gateway Disconnected');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/items/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        setTitle('');
        setDescription('');
        await fetchItems();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/items/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setItems(items.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <header className="top-nav">
        <div>
          <h1>DevOps Cloud Operations Control</h1>
          <p>Full-Stack Microservices Architecture: FastAPI + PostgreSQL + React + Nginx</p>
        </div>
        <div className={`status-badge ${status.includes('Operational') ? 'status-online' : 'status-offline'}`}>
          ● {status}
        </div>
      </header>

      <div className="metrics-bar">
        <div className="metric-pill">
          <span>Registered Records</span>
          <strong>{items.length} Database Rows</strong>
        </div>
        <div className="metric-pill">
          <span>Telemetry Scrape</span>
          <a href="/metrics" target="_blank" rel="noreferrer">Open /metrics Endpoint ↗</a>
        </div>
        <div className="metric-pill">
          <span>API Documentation</span>
          <a href="http://localhost:8000/docs" target="_blank" rel="noreferrer">Open Swagger Docs ↗</a>
        </div>
      </div>

      <section className="panel-card">
        <h2>Register New Cloud Resource Record</h2>
        <form onSubmit={handleCreate}>
          <div className="form-grid">
            <div className="form-group">
              <label>Service / Resource Title</label>
              <input
                type="text"
                placeholder="e.g. AWS EKS Kubernetes Cluster NodePool"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Deployment Notes & Specs</label>
              <textarea
                rows="2"
                placeholder="e.g. 3x t3.medium worker nodes provisioned via Terraform"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Submitting to PostgreSQL...' : 'Submit to Database'}
          </button>
        </form>
      </section>

      <section className="panel-card">
        <h2>Active PostgreSQL Stored Resources ({items.length})</h2>
        {items.length === 0 ? (
          <p style={{ color: '#64748b' }}>No records present in PostgreSQL. Register one above to test write persistence.</p>
        ) : (
          <div className="items-container">
            {items.map((item) => (
              <div key={item.id} className="resource-row">
                <div className="resource-meta">
                  <h3>#{item.id} — {item.title}</h3>
                  <p>{item.description || 'No additional specifications provided.'}</p>
                  <time>Created at: {new Date(item.created_at).toLocaleString()}</time>
                </div>
                <button onClick={() => handleDelete(item.id)} className="btn-delete">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}