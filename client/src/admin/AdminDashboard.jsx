import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";
import "./styles/dashboard.css";
import AdminHeader from "./layout/AdminHeader";
import DataChart from "./DataChart";

const AdminDashboard = () => {
  
  const [usertype, setUsertype] = useState("admin");
  const [data, setData] = useState([]);

  const admindetailsData = [
    {
      counts: "10",
      message1: "Total",
      message2: "Admins",
      to: "all-admins",
    },
    {
      counts: "10",
      message1: "Total",
      message2: "Active Admins",
      to: "active-admins",
    },
    {
      counts: "10",
      message1: "Total",
      message2: "Blocked Admins",
      to: "admin-blocked",
    },
    {
      counts: "10",
      message1: "Total",
      message2: "Pending Request",
      to: "admin-request",
    },
  ];

  const registrationCards = [
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Recieved",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Accepted",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Rejected",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Pending",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Region-1",
      message2: "Registered Users",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Region-2",
      message2: "Registered Users",
      to: "#",
    },
  ];

  const subcriptionCards = [
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Recieved",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Accepted",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Rejected",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Total",
      message2: "Request Pending",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Region-1",
      message2: "Request Accepted",
      to: "#",
    },
    {
      counts: "1243",
      message1: "Region-2",
      message2: "Request Accepted",
      to: "#",
    },
  ];

  return (
    <>
      {usertype === "superadmin" && (
        <Sidebar>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">Admin Details</h2>
            </div>
            <div className="row">
              <div className="">
                <div
                  className="card-contents"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    marginBottom: "30px",
                  }}
                >
                  {admindetailsData.map((elem, idx) => {
                    return (
                      <div
                        className="cards"
                        key={idx}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr style={{ width: "100%", margin: "10px 0" }} />
                        <Link to={elem.to}>
                          View &emsp;
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="section_heading">
              <h2 className="title_heading">Registration Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-div">
                  {registrationCards.map((elem, idx) => {
                    return (
                      <div className="cards" key={idx}>
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr />
                        <Link to={elem.to}>
                          View &emsp;
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <DataChart />
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">Subscription Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-div">
                  {subcriptionCards.map((elem, idx) => {
                    return (
                      <div className="cards" key={idx}>
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr />
                        <Link to={elem.to}>
                          View &emsp;
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <DataChart />
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">User Details by Type...</h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        User Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">User Details by Industry...</h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Industry Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">
                Usage Details by User Type (In Hours)...
              </h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        User Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Sidebar>
      )}
      {usertype === "admin" && (
        <Sidebar>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">Registration Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-div">
                  {registrationCards.map((elem, idx) => {
                    return (
                      <div className="cards" key={idx}>
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr />
                        <Link to={elem.to}>
                          View &emsp;
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <DataChart />
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">Subscription Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-div">
                  {subcriptionCards.map((elem, idx) => {
                    return (
                      <div className="cards" key={idx}>
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr />
                        <Link to={elem.to}>
                          View &emsp;
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <DataChart />
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">User Details by Type...</h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        User Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">User Details by Industry...</h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Industry Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">
                Usage Details by User Type (In Hours)...
              </h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        User Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Sidebar>
      )}
      {usertype === "viewer" && (
        <div>
          <AdminHeader />
          <div className="clear" style={{ margin: "0px 60px " }}>
            <div className="section_heading">
              <h2 className="title_heading">Registration Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-div">
                  {registrationCards.map((elem, idx) => {
                    return (
                      <div className="cards" key={idx}>
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <DataChart />
              </div>
            </div>
          </div>
          <div className="clear" style={{ margin: "0px 60px" }}>
            <div className="section_heading">
              <h2 className="title_heading">Subscription Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card-div">
                  {subcriptionCards.map((elem, idx) => {
                    return (
                      <div className="cards" key={idx}>
                        <h2>{elem.counts}</h2>
                        <p>{elem.message1}</p>
                        <p>{elem.message2}</p>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <DataChart />
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">User Details by Type...</h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        User Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">User Details by Industry...</h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Industry Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="clear">
            <div className="section_heading">
              <h2 className="title_heading">
                Usage Details by User Type (In Hours)...
              </h2>
            </div>
            <div>
              <div className="box_body">
                <table className="table table-bordered data_table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        User Types
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 1 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Region 2 Users
                      </th>
                      <th style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                        Grand Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((elem, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{elem.region1}</td>
                            <td>{elem.region2}</td>
                            <td>{elem.region1 + elem.region2}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
