import { useState } from "react"
import { StoreTabs } from "../../components/store-tabs"
import PageProps from "../../interfaces/page"

export const Build: React.FunctionComponent<PageProps> = props => {
  const [category, setCategory] = useState()
  const [filterMenuOpen, setFilterMenuOpen] = useState(false)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cart, setCart] = useState<string[]>([])

  return (
    <StoreTabs 
    verticle
    category={category} 
    setCategory={setCategory} 
    filterMenuOpen={filterMenuOpen} 
    setFilterMenuOpen={setFilterMenuOpen} 
    cartMenuOpen={cartMenuOpen} 
    setCartMenuOpen={setCartMenuOpen}
    cart={cart} />
  )
}
