import { useState } from "react"
import { StoreTabs } from "../../components/store-tabs"
import PageProps from "../../interfaces/page"
import { Card, Grid, Segment } from "semantic-ui-react"
import { dummy_items } from "../../pages/store/dummy_items"
import ItemCard from "../../pages/store/item_card"

export const Build: React.FunctionComponent<PageProps> = props => {
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
    <Segment basic>
      <StoreTabs 
      verticle
      category={category} 
      setCategory={setCategory} 
      filterMenuOpen={filterMenuOpen} 
      setFilterMenuOpen={setFilterMenuOpen} 
      cartMenuOpen={cartMenuOpen} 
      setCartMenuOpen={setCartMenuOpen}
      cart={cart} />
      <Grid centered padded>
        <Grid.Row style={{margin: '4em'}} mobile={6} computer={11} largeScreen={12} textAlign="center"><Card.Group stackable>
          {dummy_items.map((elem, idx) => {
            if (elem.category === category) {
              return (
              <ItemCard 
              name={elem.name} 
              category={category} 
              picture={elem.picture} 
              key={idx} 
              onButtonClick={() => handleItemClick(elem.name)}
              active={cart.includes(elem.name)} />
              )
            } else return <></>
          })}
        </Card.Group></Grid.Row>
      </Grid>
    </Segment>
  )
}
