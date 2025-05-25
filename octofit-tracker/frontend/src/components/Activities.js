import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ user: '', type: '', duration: '', date: '' });

  useEffect(() => {
    fetch('https://fantastic-spoon-xrvp567x5x63gwv-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
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
      <h2 className="mb-4 text-primary fw-bold">Activities</h2>
      <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>Add Activity</button>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <tr key={i}>
                  <td>{a.user}</td>
                  <td>{a.type}</td>
                  <td>{a.duration}</td>
                  <td>{a.date}</td>
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
                <h5 className="modal-title">Add Activity</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">User</label>
                    <input name="user" className="form-control" value={form.user} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input name="type" className="form-control" value={form.type} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duration (min)</label>
                    <input name="duration" type="number" className="form-control" value={form.duration} onChange={handleChange} required />
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

export default Activities;
