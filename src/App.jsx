import React, { useState, useEffect } from 'react';
import {
  FaUserInjured, FaChartLine, FaDollarSign, FaCalendarAlt,
  FaClipboardCheck, FaDatabase, FaFileMedical, FaHome,
  FaCog, FaSignOutAlt, FaProcedures, FaCalendarDay,
  FaChartPie, FaTable, FaImage, FaMoon, FaSun,
  FaBed, FaUserFriends, FaSyringe, FaFlask
} from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { MdLocalHospital, MdPeople, MdAttachMoney } from 'react-icons/md';
ChartJS.register(...registerables);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Chart data
  const patientRotationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      data: [12000, 19000, 15000, 18000, 12000, 17000],
      backgroundColor: '#4e73df',
      borderColor: '#4e73df',
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
    }],
  };

  const revenueData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      data: [41512, 25612, 32000, 38000],
      backgroundColor: '#1cc88a',
      borderColor: '#1cc88a',
      borderWidth: 1,
      borderRadius: 4,
    }],
  };

  const patientStatusData = {
    labels: ['New', 'Recovered', 'Critical'],
    datasets: [{
      data: [64, 73, 12],
      backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#be2617'],
    }],
  };

  const dailyPatientsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [120, 190, 80, 110, 150, 90, 70],
      backgroundColor: '#f6c23e',
      borderColor: '#f6c23e',
      borderWidth: 1,
      tension: 0.3,
    }],
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'} ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <MdLocalHospital className="hospital-icon" />
          <h2>MediCare</h2>
          <span className="hospital-type">Hospital System</span>
        </div>

        <div className="sidebar-menu">
          <div className="menu-section">
            <div className="menu-item active">
              <FaHome className="menu-icon" />
              <span className="menu-text">Dashboard</span>
            </div>
          </div>

          <div className="menu-section">
            <h3 className="menu-section-title">PATIENT MANAGEMENT</h3>
            <div className="menu-item">
              <FaUserInjured className="menu-icon" />
              <span className="menu-text">Patients</span>
            </div>
            <div className="menu-item">
              <FaBed className="menu-icon" />
              <span className="menu-text">Wards</span>
            </div>
            <div className="menu-item">
              <FaCalendarAlt className="menu-icon" />
              <span className="menu-text">Appointments</span>
            </div>
          </div>

          <div className="menu-section">
            <h3 className="menu-section-title">HOSPITAL ANALYTICS</h3>
            <div className="menu-item">
              <FaChartLine className="menu-icon" />
              <span className="menu-text">Statistics</span>
            </div>
            <div className="menu-item">
              <FaDollarSign className="menu-icon" />
              <span className="menu-text">Revenue</span>
            </div>
            <div className="menu-item">
              <FaDatabase className="menu-icon" />
              <span className="menu-text">Reports</span>
            </div>
          </div>

          <div className="menu-section">
            <h3 className="menu-section-title">MEDICAL SERVICES</h3>
            <div className="menu-item">
              <FaSyringe className="menu-icon" />
              <span className="menu-text">Pharmacy</span>
            </div>
            <div className="menu-item">
              <FaFlask className="menu-icon" />
              <span className="menu-text">Laboratory</span>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="menu-item" onClick={toggleDarkMode}>
            {darkMode ? <FaSun className="menu-icon" /> : <FaMoon className="menu-icon" />}
            <span className="menu-text">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </div>
          <div className="menu-item">
            <FaCog className="menu-icon" />
            <span className="menu-text">Settings</span>
          </div>
          <div className="menu-item">
            <FaSignOutAlt className="menu-icon" />
            <span className="menu-text">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="top-bar-right">
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Dr. Sarah Johnson</span>
                <span className="user-role">Administrator</span>
              </div>
              <div className="user-avatar">SJ</div>
            </div>
          </div>
        </div>

        <div className="dashboard">
          <header className="dashboard-header">
            <div>
              <h1>Hospital Dashboard</h1>
              <p>Welcome back! Here's what's happening with your hospital today.</p>
            </div>
            <div className="dashboard-date">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </header>

          <div className="dashboard-container">
            {/* Summary Cards */}
            <div className="dashboard-row">
              <div className="summary-card primary">
                <div className="card-icon">
                  <FaUserInjured />
                </div>
                <div className="card-content">
                  <h3>Total Patients</h3>
                  <p className="card-value">2,842</p>
                  <p className="card-change positive">↑ 12.5% from last month</p>
                </div>
              </div>

              <div className="summary-card success">
                <div className="card-icon">
                  <FaProcedures />
                </div>
                <div className="card-content">
                  <h3>Recovered</h3>
                  <p className="card-value">1,923</p>
                  <p className="card-change positive">↑ 8.2% from last month</p>
                </div>
              </div>

              <div className="summary-card warning">
                <div className="card-icon">
                  <FaUserFriends />
                </div>
                <div className="card-content">
                  <h3>New Admissions</h3>
                  <p className="card-value">451</p>
                  <p className="card-change negative">↓ 3.1% from last month</p>
                </div>
              </div>

              <div className="summary-card danger">
                <div className="card-icon">
                  <FaBed />
                </div>
                <div className="card-content">
                  <h3>Available Beds</h3>
                  <p className="card-value">124</p>
                  <p className="card-change">32% occupancy</p>
                </div>
              </div>
            </div>

            {/* Main Charts Row */}
            <div className="dashboard-row">
              <div className="dashboard-card large">
                <div className="card-header">
                  <h3><FaChartLine /> Patient Rotation</h3>
                  <select className="time-selector">
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                    <option>Last 2 Years</option>
                  </select>
                </div>
                <div className="chart-container">
                  <Bar
                    data={patientRotationData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          backgroundColor: darkMode ? '#2d3748' : '#ffffff',
                          titleColor: darkMode ? '#ffffff' : '#2d3748',
                          bodyColor: darkMode ? '#e2e8f0' : '#4a5568',
                          borderColor: '#e2e8f0',
                          borderWidth: 1,
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          },
                          ticks: {
                            color: darkMode ? '#e2e8f0' : '#4a5568',
                          }
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                          ticks: {
                            color: darkMode ? '#e2e8f0' : '#4a5568',
                          }
                        }
                      }
                    }}
                  />
                </div>
                <div className="card-footer">
                  <p>Total Patients: <strong>562,084</strong> this year</p>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="card-header">
                  <h3><MdAttachMoney /> Revenue Analysis</h3>
                </div>
                <div className="chart-container">
                  <Bar
                    data={revenueData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          backgroundColor: darkMode ? '#2d3748' : '#ffffff',
                          titleColor: darkMode ? '#ffffff' : '#2d3748',
                          bodyColor: darkMode ? '#e2e8f0' : '#4a5568',
                          borderColor: '#e2e8f0',
                          borderWidth: 1,
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          },
                          ticks: {
                            color: darkMode ? '#e2e8f0' : '#4a5568',
                          }
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                          ticks: {
                            color: darkMode ? '#e2e8f0' : '#4a5568',
                          }
                        }
                      }
                    }}
                  />
                </div>
                <div className="revenue-numbers">
                  <div className="revenue-item">
                    <span>Q1 Revenue</span>
                    <strong>$41,512k</strong>
                  </div>
                  <div className="revenue-item">
                    <span>Q2 Revenue</span>
                    <strong>$25,612k</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Charts Row */}
            <div className="dashboard-row">
              <div className="dashboard-card">
                <div className="card-header">
                  <h3><FaCalendarDay /> Daily Patients</h3>
                </div>
                <div className="chart-container">
                  <Line
                    data={dailyPatientsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        y: {
                          display: false,
                          beginAtZero: true
                        },
                        x: {
                          grid: {
                            display: false,
                          },
                          ticks: {
                            color: darkMode ? '#e2e8f0' : '#4a5568',
                          }
                        }
                      }
                    }}
                  />
                </div>
                <div className="card-footer">
                  <p>Average daily patients: <strong>112</strong></p>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="card-header">
                  <h3><FaClipboardCheck /> Patient Status</h3>
                </div>
                <div className="chart-container pie-chart-container">
                  <Pie
                    data={patientStatusData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: {
                            color: darkMode ? '#e2e8f0' : '#4a5568',
                          }
                        },
                      }
                    }}
                  />
                </div>
                <div className="status-details">
                  <div className="status-item">
                    <span className="status-dot new"></span>
                    <span>New: 64%</span>
                  </div>
                  <div className="status-item">
                    <span className="status-dot recovered"></span>
                    <span>Recovered: 73%</span>
                  </div>
                  <div className="status-item">
                    <span className="status-dot critical"></span>
                    <span>Critical: 12%</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="card-header">
                  <h3><FaUserFriends /> Staff Availability</h3>
                </div>
                <div className="staff-availability">
                  <div className="staff-item">
                    <div className="staff-info">
                      <span>Doctors</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <span className="staff-percent">85%</span>
                  </div>
                  <div className="staff-item">
                    <div className="staff-info">
                      <span>Nurses</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <span className="staff-percent">72%</span>
                  </div>
                  <div className="staff-item">
                    <div className="staff-info">
                      <span>Technicians</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                    <span className="staff-percent">91%</span>
                  </div>
                  <div className="staff-item">
                    <div className="staff-info">
                      <span>Administrative</span>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <span className="staff-percent">68%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Tables Section */}
            <div className="dashboard-card full-width">
              <div className="card-header">
                <h3><FaDatabase /> Recent Admissions</h3>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="data-table">
                <table>
                  <thead>
                    <tr>
                      <th>Patient ID</th>
                      <th>Name</th>
                      <th>Admission Date</th>
                      <th>Department</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#P-00012</td>
                      <td>John Smith</td>
                      <td>24 Jul 2023</td>
                      <td>Cardiology</td>
                      <td><span className="status-badge active">Active</span></td>
                      <td><button className="action-btn">View</button></td>
                    </tr>
                    <tr>
                      <td>#P-00011</td>
                      <td>Sarah Johnson</td>
                      <td>23 Jul 2023</td>
                      <td>Orthopedics</td>
                      <td><span className="status-badge recovered">Recovered</span></td>
                      <td><button className="action-btn">View</button></td>
                    </tr>
                    <tr>
                      <td>#P-00010</td>
                      <td>Michael Brown</td>
                      <td>22 Jul 2023</td>
                      <td>Neurology</td>
                      <td><span className="status-badge critical">Critical</span></td>
                      <td><button className="action-btn">View</button></td>
                    </tr>
                    <tr>
                      <td>#P-00009</td>
                      <td>Emily Davis</td>
                      <td>21 Jul 2023</td>
                      <td>Pediatrics</td>
                      <td><span className="status-badge active">Active</span></td>
                      <td><button className="action-btn">View</button></td>
                    </tr>
                    <tr>
                      <td>#P-00008</td>
                      <td>Robert Wilson</td>
                      <td>20 Jul 2023</td>
                      <td>Oncology</td>
                      <td><span className="status-badge active">Active</span></td>
                      <td><button className="action-btn">View</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dashboard-card full-width">
              <div className="card-header">
                <h3><FaCog /> Quick Actions</h3>
              </div>
              <div className="quick-actions">
                <button className="action-card">
                  <FaUserInjured />
                  <span>New Patient</span>
                </button>
                <button className="action-card">
                  <FaCalendarAlt />
                  <span>Schedule Appointment</span>
                </button>
                <button className="action-card">
                  <FaFileMedical />
                  <span>Generate Report</span>
                </button>
                <button className="action-card">
                  <FaDollarSign />
                  <span>Process Payment</span>
                </button>
                <button className="action-card">
                  <FaBed />
                  <span>Manage Wards</span>
                </button>
              </div>
            </div>

            <footer className="dashboard-footer">
              <p>MediCare Hospital Management System © {new Date().getFullYear()} All Rights Reserved</p>
              <p>v2.4.1 | Developed by MediTech Solutions</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;