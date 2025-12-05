"use client"

import { useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Diseñadora de Interiores",
    company: "Studio Luz",
    image: "/woman-portrait-warm-light.jpg",
    title: "¡Diseño excepcional!",
    testimonial: "Luminara es simplemente increíble. Contiene toneladas de luminarias prediseñadas y colecciones que van desde lámparas de techo hasta complejas instalaciones comerciales. Elección perfecta para tu próximo proyecto de iluminación.\n\nNo hay absolutamente ninguna duda en mi mente de que sin Luminara, no hubiera podido hacer el salto a mi estudio de diseño que inicié en 2020. El trabajo que obtuve a través de Luminara hizo posible que tuviera algo sobre lo cual construir. Ahora tenemos alrededor de 15 proyectos en nuestro equipo, muchos de los cuales encontramos y contratamos a través de Luminara."
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Propietario de Restaurante",
    company: "Sabor Gourmet",
    image: "/professional-man-portrait.png",
    title: "¡Ambiente perfecto!",
    testimonial: "Las luminarias de Luminara transformaron completamente nuestro restaurante. La calidad de la luz y el diseño de las piezas crearon exactamente la atmósfera que buscábamos.\n\nNuestros clientes constantemente comentan sobre la iluminación perfecta. La inversión valió completamente la pena y el servicio de instalación fue impecable."
  },
  {
    id: 3,
    name: "Ana López",
    role: "Arquitecta",
    company: "López & Asociados",
    image: "/woman-architect-portrait.png",
    title: "¡Calidad superior!",
    testimonial: "Como arquitecta, he trabajado con muchos proveedores de iluminación, pero Luminara se destaca por su profesionalismo y la calidad excepcional de sus productos.\n\nRecomiendo Luminara a todos mis clientes sin dudarlo. El catálogo es extenso, el servicio técnico es excelente, y la garantía brinda tranquilidad total."
  }
]

export default function Testimonials() {
  const [selectedId, setSelectedId] = useState(1)
  const selectedTestimonial = testimonials.find(t => t.id === selectedId) || testimonials[0]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1d29]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-balance inline-block">
            Lo que nuestros clientes dicen
            <div className="h-1 w-20 bg-primary mt-2"></div>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - User List */}
          <div className="lg:col-span-4 space-y-3">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setSelectedId(testimonial.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${selectedId === testimonial.id
                  ? 'bg-gray-700 border border-gray-600'
                  : 'bg-transparent hover:bg-gray-800 border border-transparent'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-gray-400 truncate">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Selected Testimonial */}
          <div className="lg:col-span-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {selectedTestimonial.title}
              </h3>

              {/* Testimonial Text */}
              <div className="space-y-4 mb-8">
                {selectedTestimonial.testimonial.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{selectedTestimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {selectedTestimonial.role} at {selectedTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
