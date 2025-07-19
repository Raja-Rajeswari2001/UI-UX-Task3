import { NavLink } from 'react-router-dom';
import { HiHome, HiUsers, HiUserGroup, HiCalendar, HiFolder, HiCreditCard, HiChartBar, HiCog } from 'react-icons/hi';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const navItems = [
        { name: 'Dashboard', path: '/', icon: HiHome },
        { name: 'Patients', path: '/patients', icon: HiUsers },
        { name: 'Doctors', path: '/doctors', icon: HiUserGroup },
        { name: 'Appointments', path: '/appointments', icon: HiCalendar },
        { name: 'Departments', path: '/departments', icon: HiFolder },
        { name: 'Billing', path: '/billing', icon: HiCreditCard },
        { name: 'Reports', path: '/reports', icon: HiChartBar },
        { name: 'Settings', path: '/settings', icon: HiCog },
    ];

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
                    <h1 className="text-white font-bold text-xl">MediCare Admin</h1>
                </div>

                <nav className="mt-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center px-6 py-3 text-sm font-medium ${isActive ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;