import { Card, Grid } from "semantic-ui-react"
import { StoreTabs } from "../../components/store-tabs"
import PageProps from "../../interfaces/page"
import { dummy_items } from "./dummy_items"
import ItemCard from "./item_card"
import { useState } from "react"

export const Store: React.FunctionComponent<PageProps> = props => {
  const [category, setCategory] = useState()
  const [filterMenuOpen, setFilterMenuOpen] = useState(false)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cart, setCart] = useState<string[]>([])

  const handleItemClick = (item: string) => {
    let temp: string[]
    if (!cart.includes(item)) {
      temp = cart.concat([item])
    } else {
      let idx: number = cart.indexOf(item)
      temp = cart.filter((_, i) => i !== idx)
    }
    setCart(temp)
  }

  return (
    <Grid centered padded>
      <StoreTabs category={category} 
      setCategory={setCategory} 
      filterMenuOpen={filterMenuOpen} 
      setFilterMenuOpen={setFilterMenuOpen} 
      cartMenuOpen={cartMenuOpen} 
      setCartMenuOpen={setCartMenuOpen}
      cart={cart} />
      <Grid.Row>
        <Grid.Column mobile={6} computer={11} largeScreen={12} textAlign="center">
          <Card.Group stackable>
            {dummy_items.map((elem, idx) => {
              if (elem.category === category) {
                return (
                <ItemCard 
                name={elem.name} 
                category={category} 
                picture={elem.picture} 
                key={idx} 
                onButtonClick={() => handleItemClick(elem.name)}
                active={cart.includes(elem.name)}
                />
                )
              } else return <></>
            })}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
