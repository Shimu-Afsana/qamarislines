
import Hero from "@/components/home/hero";
import { LogoTicker } from "@/components/logo-ticker-section";
import { RouteMap } from "@/components/routes_map_section";
import ContainerTypes from "@/components/home/container-types";
import News from "@/components/home/news";


export default function Page() {
  return (
    <main>
      {/* page content */}
      <Hero />
      <LogoTicker />
      <RouteMap />
      <ContainerTypes />
      <News />
      
    </main>
  )
}
