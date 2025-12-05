import Hero from "@/components/sections/hero"
import Categories from "@/components/sections/categories"
import Collections from "@/components/sections/collections"
import Features from "@/components/sections/features"
import Testimonials from "@/components/sections/testimonials"
import Newsletter from "@/components/sections/newsletter"
import Footer from "@/components/layout/footer"
import InfiniteScrollBanner from "@/components/sections/infinite-scroll-banner"
import FAQ from "@/components/sections/faq"

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Collections />
      <InfiniteScrollBanner />
      <Features />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
