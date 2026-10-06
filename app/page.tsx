import Hero from "@/components/home/hero";
import { LogoTicker } from "@/components/logo-ticker-section";
import { RouteMap } from "@/components/routes_map_section";


export default function Page() {
  return (
    <main>
      {/* page content */}
      <Hero />
      <LogoTicker />
      <RouteMap />
      
    </main>
  )
}
