export default function Sidebar() {
  return (
    <div className="w-64 h-screen glass p-6 hidden md:block">
      <h2 className="text-lg font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-white cursor-pointer">Overview</li>
        <li className="hover:text-white cursor-pointer">Analytics</li>
        <li className="hover:text-white cursor-pointer">Reports</li>
      </ul>
    </div>
  );
}
