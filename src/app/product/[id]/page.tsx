"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState } from "react";
import { Heart, MessageCircle, Truck, Shield, RotateCcw, Star } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id)) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en el producto: ${product.name}. Cantidad: ${quantity}. Precio: $${product.price}`
    );
    const whatsappNum = process.env.NEXT_PUBLIC_WHATSAPP_NUM;
    window.open(`https://wa.me/${whatsappNum}?text=${message}`, "_blank");
  };

  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Inicio</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary">Productos</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <div className="mb-6 bg-card rounded-lg overflow-hidden aspect-square">
              <img src={gallery[selectedImage] || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition ${selectedImage === idx ? "border-primary" : "border-border hover:border-primary"}`}
                >
                  <img src={img || "/placeholder.svg"} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews || 0} reseñas)</span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">${product.originalPrice}</span>
                    <span className="text-lg font-bold text-secondary">Ahorra ${(product.originalPrice - product.price).toFixed(2)}</span>
                  </>
                )}
              </div>

              <p className="text-green-600 font-semibold mb-6">En stock</p>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Características</h3>
              <ul className="space-y-2">
                {product.features?.map((feature: string, idx: number) => (
                  <li key={idx} className="text-muted-foreground flex gap-3">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">Cantidad</label>
              <div className="flex gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-muted-foreground hover:text-foreground">−</button>
                  <span className="px-6 py-2 font-semibold text-foreground">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-muted-foreground hover:text-foreground">+</button>
                </div>

                <button onClick={handleWhatsAppClick} className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Consultar por WhatsApp
                </button>

                <button onClick={() => setIsFavorite(!isFavorite)} className={`px-6 py-3 rounded-lg border-2 transition ${isFavorite ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg text-center">
                <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Envío Gratis</p>
                <p className="text-xs text-muted-foreground">En compras mayores</p>
              </div>
              <div className="bg-card p-4 rounded-lg text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Garantía</p>
                <p className="text-xs text-muted-foreground">2 años</p>
              </div>
              <div className="bg-card p-4 rounded-lg text-center">
                <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Devolución</p>
                <p className="text-xs text-muted-foreground">30 días</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group cursor-pointer">
                <div className="bg-card rounded-lg overflow-hidden mb-4 aspect-square">
                  <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition">{relatedProduct.name}</h3>
                <p className="text-lg font-bold text-primary mt-2">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
