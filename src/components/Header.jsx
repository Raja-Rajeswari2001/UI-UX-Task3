import { HiBell, HiSearch, HiMenu } from 'react-icons/hi';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
            <div className="flex items-center">
                <button
                    className="p-2 text-gray-500 rounded-md lg:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <HiMenu className="w-6 h-6" />
                </button>

                <div className="relative ml-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <HiSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:bg-white focus:ring-0"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                    <HiBell className="w-6 h-6" />
                    <span className="sr-only">Notifications</span>
                </button>

                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">AD</span>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700 hidden md:inline">Admin</span>
                </div>
            </div>
        </header>
    );
};

export default Header;