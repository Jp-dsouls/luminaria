"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "¿Qué tipo de iluminación es mejor para mi hogar?",
    answer: "Depende del espacio y la función. Para salas de estar, recomendamos luz cálida (2700K-3000K) que crea un ambiente acogedor. Para cocinas y baños, luz neutra o fría (4000K-6000K) proporciona mejor visibilidad. Nuestras lámparas tricolor te permiten ajustar la temperatura según tus necesidades."
  },
  {
    id: 2,
    question: "¿Cuál es la diferencia entre luz cálida, fría y neutra?",
    answer: "La luz cálida (3000K) tiene tonos amarillos/anaranjados, ideal para crear ambientes relajantes. La luz fría (6000K) tiene tonos azulados, perfecta para concentración y tareas detalladas. La luz neutra (4000K) es un equilibrio entre ambas, ideal para espacios de trabajo y cocinas."
  },
  {
    id: 3,
    question: "¿Las lámparas LED consumen menos energía?",
    answer: "Sí, las lámparas LED consumen hasta un 80% menos energía que las bombillas tradicionales y duran hasta 25 veces más. Esto se traduce en ahorros significativos en tu factura eléctrica y menor impacto ambiental."
  },
  {
    id: 4,
    question: "¿Ofrecen garantía en sus productos?",
    answer: "Todos nuestros productos cuentan con garantía de 1 año contra defectos de fabricación. Además, ofrecemos soporte técnico y asesoramiento post-venta para asegurar tu satisfacción."
  },
  {
    id: 5,
    question: "¿Cómo instalo las lámparas de techo?",
    answer: "Nuestras lámparas vienen con instrucciones detalladas de instalación. Para lámparas de techo, recomendamos contratar a un electricista certificado para garantizar una instalación segura. También ofrecemos servicio de instalación en algunas zonas."
  },
  {
    id: 6,
    question: "¿Puedo cambiar la intensidad de la luz?",
    answer: "Muchas de nuestras lámparas son regulables (dimmeables) y algunas incluyen control remoto para ajustar la intensidad y temperatura de color. Verifica las especificaciones del producto para confirmar esta característica."
  },
  {
    id: 7,
    question: "¿Realizan envíos a todo el país?",
    answer: "Sí, realizamos envíos a nivel nacional. El tiempo de entrega varía según tu ubicación, generalmente entre 3-7 días hábiles. Ofrecemos envío gratuito en compras superiores a S/ 200."
  },
  {
    id: 8,
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard), transferencias bancarias, y ofrecemos opciones de pago en cuotas sin intereses en compras seleccionadas."
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Header - Left Side */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1d29] sticky top-8 inline-block">
              Preguntas Frecuentes
              <div className="h-1 w-20 bg-primary mt-2"></div>
            </h2>
          </div>

          {/* FAQ Items - Right Side */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`border-b border-gray-700 ${index === 0 ? 'border-t' : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-medium text-[#1a1d29] text-lg pr-8">
                      {faq.question}
                    </span>
                    <Plus
                      className={`w-6 h-6 text-[#1a1d29] flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? "transform rotate-45" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                  >
                    <div className="text-gray-600 leading-relaxed pr-12">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
