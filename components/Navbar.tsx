export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-6">
      <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Nexora
      </h1>
      <button className="px-4 py-2 rounded-xl glass hover:scale-105 transition">
        Login
      </button>
    </div>
  );
}
