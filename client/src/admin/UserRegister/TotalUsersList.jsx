import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { Link } from 'react-router-dom';

const TotalUsersList = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  const API_URL = 'http://localhost:8000/api/addUser/viewAllRegistrations'; 

  useEffect(() => {
    fetchApplications();
  }, [currentPage, recordsPerPage, searchTerm]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          page: currentPage,
          limit: recordsPerPage,
          search: searchTerm,
        },
      });
      setApplications(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleExport = () => {
    alert('This is excel or csv Data!');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span className="badge bg-success me-2">Active</span>
          <span className="badge bg-secondary me-2">Inactive</span>
          <span className="badge bg-danger">Rejected</span>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-8 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-md-end justify-content-start">
          <button className="btn btn-outline-secondary" onClick={handleExport}>
            Export Table to Excel
          </button>
        </div>
      </div>

      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Sno</th>
            <th>Application No</th>
            <th>Reg. Date/Time</th>
            <th>User Information</th>
            <th>Status</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={app.application_no}>
              <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
              <td>{app.application_no}</td>
              <td>{app.date_created}</td>
              <td>
                <div>
                  <strong>Name:</strong> {app.name} <br />
                  <strong>Email:</strong> {app.email} <br />
                  <strong>Phone:</strong> {app.mobile_no} <br />
                  <strong>User Type:</strong> {app.usertype} <br />
                  <strong>Organization:</strong> {app.emptype} <br />
                  <strong>Region:</strong> {app.region} <br />
                </div>
              </td>
              <td><div>{app.is_rejected}</div><div>{app.rejected_reason}</div></td>
              <td>{app.updatedBy}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  <Link to={`/approved/${app.sno}`} className="text-decoration-none text-dark">
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <select
          className="form-select"
          value={recordsPerPage}
          onChange={(e) => setRecordsPerPage(Number(e.target.value))}
          style={{ width: '100px' }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li className="page-item" key={i}>
                <button className={`page-link ${i + 1 === currentPage ? 'active' : ''}`} onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TotalUsersList;