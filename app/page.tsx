import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-10">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Nexora Analytics
          </motion.h1>

          <p className="text-gray-400 mt-2">
            Real-time insights powered by AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <DashboardCard title="Revenue" value="$12,400" />
            <DashboardCard title="Users" value="1,230" />
            <DashboardCard title="Growth" value="+23%" />
          </div>

        </div>
      </div>

    </div>
  );
}
