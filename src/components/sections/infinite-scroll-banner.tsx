"use client"

import { Lightbulb } from "lucide-react"

const bannerItems = [
  "Luz y Estilo en perfecta armonía",
  "Transforma tu espacio en cada rincón",
  "Diseños luminosos para tu hogar",
  "Ilumina tus momentos especiales",
  "Calidad y diseño en cada lámpara",
  "La luz que inspira tus días",
  "Crea ambientes únicos con nuestra iluminación",
  "Innovación y tendencia en cada pieza",
  "Tu hogar, más brillante que nunca",
  "Encuentra la lámpara ideal para ti"
]

export default function InfiniteScrollBanner() {
  return (
    <section className="w-full overflow-hidden relative py-8">
      <div
        className="w-full bg-gradient-to-r from-[#e8f5e9] to-[#f1f8e9] border-y border-green-200 flex items-center justify-center"
        style={{ transform: 'skewY(-2deg)', transformOrigin: 'center', padding: '20px 0' }}
      >
        <div
          className="flex animate-scroll items-center w-full"
          style={{ transform: 'skewY(2deg)' }}
        >
          {/* First set of items */}
          <div className="flex items-center gap-8 px-8 whitespace-nowrap" style={{ transform: 'skewY(-2deg)', paddingBottom: '40px' }}>
            {bannerItems.map((item, index) => (
              <div key={`first-${index}`} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#7cb342] rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#558b2f] font-medium text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 px-8 whitespace-nowrap" style={{ transform: 'skewY(-2deg)', paddingBottom: '40px' }}>
            {bannerItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#7cb342] rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#558b2f] font-medium text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0) skewY(2deg);
          }
          100% {
            transform: translateX(-50%) skewY(2deg);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
