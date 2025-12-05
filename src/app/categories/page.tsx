import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Categories from "@/components/sections/categories"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-12">
        <Categories />
      </div>
      <Footer />
    </div>
  )
}
