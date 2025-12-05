import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "../layout/header"

export default function Hero() {
  return (
    <section className="bg-background">
      <Header />
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-primary font-medium text-sm md:text-base mb-4 tracking-wide">ILUMINACIÓN ARTESANAL</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
                Ilumina tu <span className="text-primary">mundo</span> con calidez
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Descubre nuestra colección exclusiva de luminarias diseñadas para crear momentos mágicos. Cada pieza es
                un acto de amor hacia tu hogar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 group"
                >
                  Explorar colección
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
                >
                  Ver catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
