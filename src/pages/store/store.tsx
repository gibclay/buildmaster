import { Breadcrumb, Card, Container, Grid, Pagination, Segment } from "semantic-ui-react"
import { StoreTabs } from "../../components/store-tabs"
import PageProps from "../../interfaces/page"
import { dummy_items } from "./dummy_items"
import ItemCard from "./item_card"
import { useState } from "react"
import SearchBar from "../../components/search-bar"
import { useNavigate } from "react-router-dom"

export const Store: React.FunctionComponent<PageProps> = props => {
  const [category, setCategory] = useState()
  const [filterMenuOpen, setFilterMenuOpen] = useState(false)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)
  const [cart, setCart] = useState<string[]>([])

  const navigate = useNavigate();

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

  const handleDetailsClick = (item: string) => {
    navigate('/product-view')
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
      
      <Grid.Row><Segment basic secondary><Container><SearchBar placeholder='Search...' /></Container></Segment></Grid.Row>
      <Breadcrumb size='large'>
        <Breadcrumb.Section link content='Store' />
        <Breadcrumb.Divider content='>'  />
        <Breadcrumb.Section active content='All' />
      </Breadcrumb>
      <Grid.Row>
        <Grid.Column mobile={6} computer={11} largeScreen={12} textAlign="center">
          <Card.Group stackable>
            {dummy_items.map((elem, idx) => {
              if (elem.category === category || category == null) {
                return (
                <ItemCard 
                name={elem.name} 
                category={category} 
                picture={elem.picture} 
                key={idx} 
                addItemHandler={() => handleItemClick(elem.name)}
                infoHandler={() => handleDetailsClick(elem.name)}
                active={cart.includes(elem.name)}
                />
                )
              } else return <></>
            })}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
      <Pagination defaultActivePage={5} totalPages={10} />
    </Grid>
  )
}
