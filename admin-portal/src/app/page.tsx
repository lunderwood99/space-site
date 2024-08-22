import { Shows } from "@/app/components/Shows/Shows";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">
      <h1 className="text-4xl">Moonshake Admin Portal</h1>
      <Shows />
    </main>
  );
}
