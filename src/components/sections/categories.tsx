"use client"

import { Lightbulb, Lamp, Sparkles, Home, Grid3x3, Info, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const categories = [
  {
    id: "spot-led",
    name: "Spots LED",
    icon: Lightbulb,
    description: "Iluminación direccional moderna",
    image: "/spot-led-warm-lighting.jpg",
    count: "12 productos",
    color: "from-amber-500/80 to-orange-600/80",
    productsDescription: "Ideales para destacar obras de arte, zonas de lectura o crear ambientes focalizados.",
  },
  {
    id: "aplique-led",
    name: "Apliques LED",
    icon: Lamp,
    description: "Elegancia en tus paredes",
    image: "/wall-sconce-led-black-modern.jpg",
    count: "8 productos",
    color: "from-orange-500/80 to-amber-600/80",
    productsDescription: "Perfectos para pasillos, baños o como luz de lectura junto a la cama.",
  },
  {
    id: "lámpara-piso",
    name: "Lámparas de Piso",
    icon: Home,
    description: "Presencia y calidez",
    image: "/floor-lamp-warm-gold-design.jpg",
    count: "10 productos",
    color: "from-amber-600/80 to-yellow-600/80",
    productsDescription: "Añaden altura y elegancia, ideales para esquinas o junto a sofás.",
  },
  {
    id: "candelabro",
    name: "Candelabros",
    icon: Sparkles,
    description: "Lujo y sofisticación",
    image: "/golden-chandelier-ceiling-light-warm.jpg",
    count: "6 productos",
    color: "from-yellow-600/80 to-orange-500/80",
    productsDescription: "La pieza central perfecta para comedores o entradas principales.",
  },
  {
    id: "lámpara-mesa",
    name: "Lámparas de Mesa",
    icon: Grid3x3,
    description: "Funcionalidad y estilo",
    image: "/table-lamp-nordic-warm-modern.jpg",
    count: "15 productos",
    color: "from-orange-600/80 to-amber-500/80",
    productsDescription: "Versátiles y decorativas, para escritorios, mesas de noche o auxiliares.",
  },
]

export default function Categories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-left">
          <p className="text-primary font-medium text-sm md:text-base mb-4 tracking-wide">CATEGORÍAS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Explora por <span className="text-primary">Tipo de Luminaria</span>
            <div className="h-1 w-20 bg-primary mt-2"></div>
          </h2>
          <div className="flex justify-between items-center gap-2">
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Encuentra la iluminación perfecta para cada espacio de tu hogar
            </p>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
              <p className="flex items-center gap-2">Ver todos los productos
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-4 h-4 fill-current">
                  <polygon points="6 3 20 12 6 21 6 3">
                  </polygon>
                </svg>
              </p>
            </Link>

          </div>
        </div>

        {/* Categories Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full !pb-12"
        >
          {categories.map((category) => {
            return (
              <SwiperSlide key={category.id}>
                <Link
                  href={`/products?type=${category.id}`}
                  className="group relative block h-[400px] w-full rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                >
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                  </div>

                  {/* Top Right Info Icon */}
                  <div className="absolute top-4 right-4 z-20 group/info">
                    <div
                      className="bg-[#B86E28] rounded-full p-1 cursor-help relative"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Info className="w-5 h-5 text-white" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute right-0 top-8 w-48 p-3 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 text-xs text-white opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-300 shadow-xl translate-y-2 group-hover/info:translate-y-0 pointer-events-none z-30">
                      <p className="font-semibold mb-1 text-primary">{category.name}</p>
                      <p className="text-gray-300 leading-relaxed">{category.productsDescription}</p>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end h-full">
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                      {category.name}
                    </h3>

                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      <span>Explorar</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
