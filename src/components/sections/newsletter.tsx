import { Mail, ArrowRight } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/golden-chandelier-ceiling-light-warm.jpg)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 via-orange-50/90 to-amber-50/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary-foreground" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Mantente Iluminado
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Suscríbete para recibir ofertas exclusivas, nuevas colecciones y consejos de iluminación
        </p>

        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-6 py-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            Suscribirse
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-sm text-muted-foreground mt-4">
          No compartimos tu email. Puedes desuscribirte en cualquier momento.
        </p>
      </div>
    </section>
  )
}
