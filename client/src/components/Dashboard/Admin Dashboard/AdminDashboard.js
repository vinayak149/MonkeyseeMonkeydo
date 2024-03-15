import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('panelist');

    // Sample data for demonstration
    const panelists = [
        { email: 'panelist1@gmail.com', name: 'Panelist 1' },
        { email: 'panelist2@gmail.com', name: 'Panelist 2' },
        { email: 'panelist3@gmail.com', name: 'Panelist 3' },
    ];

    const judges = [
        { email: 'judge1@gmail.com', name: 'Judge 1' },
        { email: 'judge2@gmail.com', name: 'Judge 2' },
        { email: 'judge3@gmail.com', name: 'Judge 3' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password, role });
        // Reset form fields after submission
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="admin-dashboard">
            <div className="section form-section">
                <h2>Add New Judge/Panelist</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="role-selection">
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="panelist">Panelist</option>
                            <option value="judge">Judge</option>
                        </select>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
            <div className="section table-section">
                <h2>Judge Table</h2>
                <table className="dashboard-table">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {judges.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.email}</td>
                        <td>{entry.name}</td>
                        <td><button className="delete-btn">DELETE</button></td>
                    </tr>
                ))}
                </tbody>``
            </table>
            </div>
            <div className="section table-section">
                <h2>Panelist Table</h2>
                <table className="dashboard-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {panelists.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.email}</td>
                  <td>{entry.name}</td>
                  <td><button className="delete-btn">DELETE</button></td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
