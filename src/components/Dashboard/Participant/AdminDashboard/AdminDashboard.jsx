// import React from 'react';
// import './AdminDashboard.css'; 
// import MyParticles from '../../../Particles/Particles';

// function AdminDashboard() {
//   return (
//     <div className="admin-dashboard">
//         <MyParticles />
//         <div className="dashboard-container">
//             <h1>Admin Dashboard</h1>
//             <div className="form-container">
//                 <h2>Add new Judge/Panelist</h2>
//                 <div className="input-group">
//                     <input type="text" placeholder="Name" />
//                     <input type="email" placeholder="Email" />
//                     <input type="tel" placeholder="Phone Number" />
//                     <input type="password" placeholder="Password" />
//                 </div>
//                 <div className="dropdown-group">
//                     <select>
//                         <option value="panelist">Panelist</option>
//                         <option value="judge">Judge</option>
//                     </select>
//                     <button type="button">ADD</button>
//                 </div>
//             </div>
//             <button type="button" className="show-users-btn">SHOW USERS</button>
//         </div>
//     </div>
    
//   );
// }

// export default AdminDashboard;
import React from 'react';
import './AdminDashboard.css'; 
import MyParticles from '../../../Particles/Particles';

function AdminDashboard() {

  // Sample data, replace with actual data from your state or props
  const panelists = [
    { email: 'panelist1@gmail.com', name: 'panelist1' },
    { email: 'panelist2@gmail.com', name: 'panelist2' },
    { email: 'panelist3@gmail.com', name: 'panelist3' }
  ];

  const judges = [
    { email: 'judge1@gmail.com', name: 'judge1' },
    { email: 'judge2@gmail.com', name: 'judge2' },
    { email: 'judge3@gmail.com', name: 'judge3' }
  ];

  return (
    <div className="admin-dashboard">
      <MyParticles />
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <div className="form-container">
          <h2>Add new Judge/Panelist</h2>
          <div className="input-group">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="dropdown-group">
            <select>
              <option value="panelist">Panelist</option>
              <option value="judge">Judge</option>
            </select>
            <button type="button">ADD</button>
          </div>
        </div>
        <button type="button" className="show-users-btn">SHOW USERS</button>
        
        {/* Panelist Table */}
        <div className="table-container">
          <h2>Panelist table</h2>
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
          <button className="export-btn">Export to CSV</button>
        </div>

        {/* Judge Table */}
        <div className="table-container">
          <h2>Judge table</h2>
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
            </tbody>
          </table>
          <button className="export-btn">Export to CSV</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
