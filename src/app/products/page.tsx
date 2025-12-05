"use client"

import { useState, useMemo, Suspense } from "react"
import { MessageCircle, Heart, ChevronDown, Grid, List } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { products } from "@/lib/products"

function ProductsContent() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type")

  const [selectedLightColor, setSelectedLightColor] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string[]>(initialType ? [initialType] : [])
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (selectedLightColor.length > 0) {
      filtered = filtered.filter((p) => selectedLightColor.includes(p.lightColor))
    }

    if (selectedType.length > 0) {
      filtered = filtered.filter((p) => selectedType.includes(p.type))
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedLightColor, selectedType, sortBy])

  const toggleLightColor = (color: string) => {
    setSelectedLightColor((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const toggleType = (type: string) => {
    setSelectedType((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${productName}`)
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Catálogo de Luminarias</h1>
          <p className="text-muted-foreground">Mostrando {filteredProducts.length} productos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 sticky top-20">
              <h2 className="text-lg font-bold text-foreground mb-6">Filtros</h2>

              {/* Color de Luz Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center justify-between cursor-pointer">
                  Color de Luz
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "cálida", label: "Luz Cálida" },
                    { id: "amarilla", label: "Luz Amarilla" },
                    { id: "fría", label: "Luz Fría" },
                  ].map((color) => (
                    <label key={color.id} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedLightColor.includes(color.id)}
                        onChange={() => toggleLightColor(color.id)}
                        className="w-4 h-4 rounded border-primary"
                      />
                      <span className="ml-3 text-sm text-muted-foreground group-hover:text-foreground transition">
                        {color.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Product Type Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center justify-between cursor-pointer">
                  Tipo de Producto
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "spot-led", label: "Spot LED" },
                    { id: "aplique-led", label: "Apliques LED" },
                    { id: "lámpara-piso", label: "Lámparas de Piso" },
                    { id: "lámpara-mesa", label: "Lámparas de Mesa" },
                    { id: "candelabro", label: "Candelabros" },
                  ].map((type) => (
                    <label key={type.id} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedType.includes(type.id)}
                        onChange={() => toggleType(type.id)}
                        className="w-4 h-4 rounded border-primary"
                      />
                      <span className="ml-3 text-sm text-muted-foreground group-hover:text-foreground transition">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedLightColor.length > 0 || selectedType.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedLightColor([])
                    setSelectedType([])
                  }}
                  className="text-sm text-primary hover:text-accent font-medium"
                >
                  Borrar todo
                </button>
              )}
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:ring-2 focus:ring-primary"
                >
                  <option value="popular">Más vendidas</option>
                  <option value="price-low">Precio menor</option>
                  <option value="price-high">Precio mayor</option>
                  <option value="rating">Mejor valoradas</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition ${viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition ${viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link href={`/product/${product.id}`}>
                      <div className="relative bg-card rounded-lg overflow-hidden mb-4 aspect-square cursor-pointer">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.badge && (
                          <div className="absolute top-4 left-4 bg-black text-primary font-bold px-3 py-1 rounded text-sm">
                            {product.badge}
                          </div>
                        )}
                        {product.discount && (
                          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-bold px-2 py-1 rounded text-xs">
                            {product.discount}%
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              handleWhatsAppClick(product.name)
                            }}
                            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                            title="Consultar por WhatsApp"
                          >
                            <MessageCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                            }}
                            className="bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-primary transition-colors"
                          >
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{product.category}</p>
                      <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-primary">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">★ {product.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="group bg-card rounded-lg p-4 hover:bg-muted transition flex gap-4 cursor-pointer">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">{product.category}</p>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">Color: {product.lightColor}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">★ {product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Catálogo de Luminarias</h1>
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
