import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Carrito de Compras</h1>

        {/* Empty Cart State */}
        <div className="text-center py-20">
          <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-8">
            Explora nuestro catálogo y encuentra las luminarias perfectas para tu hogar
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Ver Productos
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
