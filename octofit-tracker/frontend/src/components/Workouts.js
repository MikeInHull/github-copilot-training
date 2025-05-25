import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ user: '', description: '', date: '' });

  useEffect(() => {
    fetch('https://fantastic-spoon-xrvp567x5x63gwv-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Submit logic here
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="mb-4 text-primary fw-bold">Workouts</h2>
      <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>Add Workout</button>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-secondary">
              <tr>
                <th>User</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((w, i) => (
                <tr key={i}>
                  <td>{w.user}</td>
                  <td>{w.description}</td>
                  <td>{w.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Workout</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">User</label>
                    <input name="user" className="form-control" value={form.user} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input name="description" className="form-control" value={form.description} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input name="date" type="date" className="form-control" value={form.date} onChange={handleChange} required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workouts;
