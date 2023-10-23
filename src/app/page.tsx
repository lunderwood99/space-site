import { Stars } from "@/components/background/Stars/Stars"
import { PlanetMenu } from "@/components/menu/PlanetMenu/PlanetMenu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Stars />
        <PlanetMenu />
      </div>
    </main>
  )
}
