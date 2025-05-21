import About from "./about";
import AdminPanel from "./components/AdminPanel";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center h-screen">
      <h1 className="mb-4">Welcome to Facility Management App</h1>
      <AdminPanel />
      <aside className="m-2">
        <About />
      </aside>
    </main>
  );
}
