import React from 'react'
import { Button, Grid, Icon, Menu, MenuItem, Segment } from 'semantic-ui-react'
import { categories } from '../../pages/store/store_categories'
import Filters from './filters';
import Cart from './cart';

export interface StoreTabsProps {
  verticle?: boolean;
  category?: any;
  setCategory?: any;
  filterMenuOpen?: any;
  setFilterMenuOpen?: any;
  cartMenuOpen?: any;
  setCartMenuOpen?: any;
  cart?: string[]| undefined;
}

export const StoreTabs: React.FC<StoreTabsProps> = (props) => {

  const handleFilterMenuOpen = () => {
    props.setFilterMenuOpen(!props.filterMenuOpen);
  }

  const handleCartMenuOpen = () => {
    props.setCartMenuOpen(!props.cartMenuOpen);
  }

  const v_buttons = () => {
    return (
      <Grid.Row>
          <Button size='medium' content="Cart" icon="shopping cart" circular fluid onClick={handleCartMenuOpen} />
          <Cart cart={props.cart} cartMenuOpen={props.cartMenuOpen} setCartMenuOpen={props.setCartMenuOpen}/>
        <Grid.Column style={{margin:'0.2em'}}>
          <Button size='medium' content="Filter" icon="sliders horizontal" circular fluid onClick={handleFilterMenuOpen} />
          <Filters filterMenuOpen={props.filterMenuOpen} setFilterMenuOpen={props.setFilterMenuOpen} />
        </Grid.Column>
      </Grid.Row>
    )
  }

  const h_buttons = () => {
    return (
      <Grid.Row>
        <Grid.Column style={{margin:'0.4em'}}>
          <Button size='medium' content="Cart" icon="shopping cart" circular fluid onClick={handleCartMenuOpen} />
          <Cart cart={props.cart} cartMenuOpen={props.cartMenuOpen} setCartMenuOpen={props.cartMenuOpen}/>
        </Grid.Column>
        <Grid.Column style={{margin:'0.4em'}}>
          <Button size='medium' content="Filter" icon="sliders horizontal" circular fluid onClick={handleFilterMenuOpen} />
          <Filters filterMenuOpen={props.filterMenuOpen} setFilterMenuOpen={props.setFilterMenuOpen} />
        </Grid.Column>
      </Grid.Row>
    )
  }

  return (
    <Segment basic floated='right'>
      <Grid>
        <Grid.Row>
          <Menu vertical={props.verticle} icon='labeled' size='massive' borderless stackable compact>
            {categories.map((elem, idx) => {
              return (
                <MenuItem
                name={elem.name}
                disabled={elem.title===props.category? true: false}
                icon={<Icon name={elem.icon}/>} 
                onClick={() => {
                  props.setCategory(elem.title)
                }}
                key={idx} />
              )
            })}
            {props.verticle && v_buttons() }
          </Menu>
          {!props.verticle && h_buttons() }
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
