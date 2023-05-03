import { useState } from "react"
import { StoreTabs } from "../../components/store-tabs"
import PageProps from "../../interfaces/page"
import { Breadcrumb, Card, Container, Grid, Header, Pagination, Segment } from "semantic-ui-react"
import { dummy_items } from "../../pages/store/dummy_items"
import ItemCard from "../../pages/store/item_card"
import SearchBar from "../../components/search-bar"
import { useNavigate } from "react-router-dom"

export const Build: React.FunctionComponent<PageProps> = props => {
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
    navigate('/product-view', { state: { item: item } })
  }

  return (
    <>
      <Segment floated="left" basic>
        <Segment tertiary color='blue' inverted>
          <Header icon='wrench' textAlign="center" content='PC Builder'/>
        </Segment>
        <StoreTabs 
        verticle
        category={category} 
        setCategory={setCategory} 
        filterMenuOpen={filterMenuOpen} 
        setFilterMenuOpen={setFilterMenuOpen} 
        cartMenuOpen={cartMenuOpen} 
        setCartMenuOpen={setCartMenuOpen}
        cart={cart} /></Segment>
      <Grid centered padded>
        <Grid.Row><Container><SearchBar placeholder='Search...' /></Container></Grid.Row>
        <Breadcrumb size='large'>
          <Breadcrumb.Section link content='Build' />
          <Breadcrumb.Divider content='>' />
          <Breadcrumb.Section active content='All' />
        </Breadcrumb>
        <Grid.Row style={{margin: '4em'}} mobile={6} computer={11} largeScreen={12} textAlign="center"><Card.Group stackable>
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
              active={cart.includes(elem.name)} />
              )
            } else return <></>
          })}
        </Card.Group></Grid.Row>
        <Pagination defaultActivePage={5} totalPages={10} />
      </Grid>
    </>
  )
}
