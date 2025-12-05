"use client"

import { Sun } from "lucide-react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const products = [
  {
    id: "dorina-led-gray",
    name: "LÁMPARA DE TECHO DORINA LED GRAY 45W + CONTROL REMOTO",
    image: "/golden-chandelier-ceiling-light-warm.jpg",
    price: 389.90,
    originalPrice: 489.90,
    discount: 20,
    type: ["calida", "fria", "neutra"],
    features: "Tricolor 30K 40K 60K",
    installments: {
      count: 3,
      amount: 129.97,
    },
    lightTemperature: "warm",
  },
  {
    id: "dorina-led-white",
    name: "LÁMPARA DE TECHO DORINA LED WHITE 45W + CONTROL REMOTO",
    image: "/minimalist-modern-light-design-white.jpg",
    price: 389.90,
    originalPrice: 489.90,
    discount: 20,
    type: ["calida"],
    features: "Luz Fría 60K",
    installments: {
      count: 3,
      amount: 129.97,
    },
    lightTemperature: "cold",
  },
  {
    id: "dorina-led-neutral",
    name: "LÁMPARA DE TECHO DORINA LED NEUTRAL 45W",
    image: "/vintage-antique-luminarias-warm.jpg",
    price: 389.90,
    originalPrice: 389.90,
    discount: 0,
    type: ["fria"],
    features: "Luz Neutra 40K",
    installments: {
      count: 3,
      amount: 129.97,
    },
    lightTemperature: "neutral",
  },
  {
    id: "dorina-led-black",
    name: "LÁMPARA DE TECHO DORINA LED BLACK 45W + CONTROL REMOTO",
    image: "/amber-golden-luminarias-collection-warm.jpg",
    price: 389.90,
    originalPrice: 489.90,
    discount: 20,
    type: ["neutra"],
    features: "Tricolor 30K 40K 60K",
    installments: {
      count: 3,
      amount: 129.97,
    },
    lightTemperature: "warm",
  },
]

export default function Collections() {
  const getGradient = (types: string[]) => {
    if (types.length > 1) {
      return "linear-gradient(90deg,#ddba5f,#fcf6e2,#6faed4)"
    }

    const type = types[0]
    switch (type) {
      case "calida":
        return "linear-gradient(90deg, #ddba5f, #ddba5f00)"
      case "fria":
        return "linear-gradient(90deg, #5f99dd, #ddba5f00)"
      case "neutra":
        return "linear-gradient(90deg, #bfb98a, #ddba5f00)"
      default:
        return "linear-gradient(90deg,#ddba5f,#fcf6e2,#6faed4)"
    }
  }

  const getColor = (types: string[]) => {
    if (types.length > 1) return "#ddba5f"

    const type = types[0]
    switch (type) {
      case "calida": return "#ddba5f"
      case "fria": return "#5f99dd"
      case "neutra": return "#bfb98a"
      default: return "#ddba5f"
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 uppercase">
            Ofertas Destacadas
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Products Swiper */}
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full border border-transparent hover:border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  {/* Discount Badge */}
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-4 left-4 z-10 h-6 flex items-center drop-shadow-sm">
                      <div className="w-0 h-0 border-y-[12px] border-y-transparent border-r-[12px] border-r-[#D50000]" />
                      <div className="h-full bg-[#D50000] flex items-center pr-2 rounded-r">
                        <div className="w-1.5 h-1.5 bg-white rounded-full ml-1 mr-1.5" />
                        <span className="text-white font-bold text-xs">-{product.discount}%</span>
                      </div>
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Features */}
                  <div className="border-b border-gray-100 pb-3">
                    <div
                      className="w-full h-1.5 rounded-full mb-2"
                      style={{
                        background: getGradient(product.type)
                      }}
                    />
                    <div className="flex items-center gap-2 text-sm">
                      <Sun
                        className="w-5 h-5"
                        color={getColor(product.type)}
                      />
                      <span
                        className="font-medium"
                        style={{
                          background: getGradient(product.type),
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {product.features}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base leading-tight text-gray-900 uppercase min-h-[3rem] line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#D50000] text-xl font-bold">
                      S/ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 text-lg line-through decoration-gray-400">
                        S/ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
