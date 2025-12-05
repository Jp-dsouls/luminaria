import { Lightbulb, Package, Award, Leaf } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Diseño Artesanal",
    description: "Cada luminaria es creada con pasión y atención al detalle por maestros artesanos",
  },
  {
    icon: Package,
    title: "Entrega Segura",
    description: "Embalaje premium que protege tus compras durante el transporte",
  },
  {
    icon: Award,
    title: "Garantía Lifetime",
    description: "Confianza total: garantía de por vida en todos nuestros productos",
  },
  {
    icon: Leaf,
    title: "Ecoamigables",
    description: "Materiales sostenibles y procesos de producción responsables",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance inline-block">
            ¿Por qué elegir Luminara?
            <div className="h-1 w-20 bg-primary mt-2"></div>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
