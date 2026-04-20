export default function DashboardCard({ title, value }: any) {
  return (
    <div className="glass glow p-6 rounded-2xl">
      <h2 className="text-gray-400">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
