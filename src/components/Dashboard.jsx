import { useState } from 'react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
    // Sample data for charts
    const [patientData] = useState([
        { name: 'Jan', patients: 120 },
        { name: 'Feb', patients: 210 },
        { name: 'Mar', patients: 180 },
        { name: 'Apr', patients: 240 },
        { name: 'May', patients: 300 },
        { name: 'Jun', patients: 350 },
    ]);

    const [departmentData] = useState([
        { name: 'Cardiology', appointments: 120 },
        { name: 'Neurology', appointments: 90 },
        { name: 'Orthopedics', appointments: 80 },
        { name: 'Pediatrics', appointments: 110 },
        { name: 'Oncology', appointments: 70 },
    ]);

    const [recentAppointments] = useState([
        { id: 1, patientName: 'John Smith', doctor: 'Dr. Sarah Johnson', date: '2023-06-15', status: 'Completed' },
        { id: 2, patientName: 'Emily Davis', doctor: 'Dr. Michael Brown', date: '2023-06-16', status: 'Pending' },
        { id: 3, patientName: 'Robert Wilson', doctor: 'Dr. Lisa Chen', date: '2023-06-17', status: 'Completed' },
        { id: 4, patientName: 'Maria Garcia', doctor: 'Dr. David Lee', date: '2023-06-18', status: 'Cancelled' },
        { id: 5, patientName: 'James Taylor', doctor: 'Dr. Sarah Johnson', date: '2023-06-19', status: 'Pending' },
    ]);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <SummaryCard title="Total Patients" value="1,245" change="+12.5%" isIncrease={true} icon="👥" />
                <SummaryCard title="Total Appointments" value="356" change="+5.2%" isIncrease={true} icon="📅" />
                <SummaryCard title="Total Doctors" value="48" change="+2" isIncrease={true} icon="👨‍⚕️" />
                <SummaryCard title="Revenue This Month" value="$86,420" change="-3.1%" isIncrease={false} icon="💰" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="p-6 bg-white rounded-lg shadow">
                    <h2 className="text-lg font-medium text-gray-800 mb-4">Patient Visits (Last 6 Months)</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={patientData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="patients" stroke="#3b82f6" strokeWidth={2} name="Patients" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow">
                    <h2 className="text-lg font-medium text-gray-800 mb-4">Department-wise Appointments</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={departmentData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="appointments" fill="#3b82f6" name="Appointments" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Appointments */}
            <div className="p-6 bg-white rounded-lg shadow">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Recent Appointments</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {recentAppointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patientName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {appointment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const SummaryCard = ({ title, value, change, isIncrease, icon }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
                    <p className={`text-sm mt-2 ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
                        {change} {isIncrease ? '↑' : '↓'}
                    </p>
                </div>
                <div className="p-3 rounded-full bg-blue-50 text-blue-600 text-2xl">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;