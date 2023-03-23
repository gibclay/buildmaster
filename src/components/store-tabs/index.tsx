import React from 'react'
import { Button, Grid, Icon, Menu, Segment } from 'semantic-ui-react'
import { categories } from '../../pages/store/store_categories'
import Filters from './filters';
import Cart from './cart';
import { useNavigate } from 'react-router-dom';
import InfoPopup from './infopopup';

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
  const navigate = useNavigate();

  const handleFilterMenuOpen = () => {
    props.setFilterMenuOpen(!props.filterMenuOpen);
  }

  const handleCartMenuOpen = () => {
    props.setCartMenuOpen(!props.cartMenuOpen);
  }

  const v_buttons = () => {
    return (
      <Grid.Row>
        {/* <Grid.Column style={{margin:'0.2em'}}>
          <Button size='medium' content="Cart" icon="shopping cart" circular fluid onClick={handleCartMenuOpen} />
          <Cart cart={props.cart} cartMenuOpen={props.cartMenuOpen} setCartMenuOpen={props.setCartMenuOpen}/>
        </Grid.Column> */}
        <Grid.Column style={{margin:'0.2em'}}>
          <Button size='medium' color='black' content="Filters" icon="sliders horizontal" circular fluid onClick={handleFilterMenuOpen} />
          <Filters pointing='top right' filterMenuOpen={props.filterMenuOpen} setFilterMenuOpen={props.setFilterMenuOpen} />
        </Grid.Column>
        <Grid.Row style={{margin: '1.5em'}} />
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
          <Button size='medium' content="Filters" icon="sliders horizontal" circular fluid onClick={handleFilterMenuOpen} />
          <Filters pointing='top right' filterMenuOpen={props.filterMenuOpen} setFilterMenuOpen={props.setFilterMenuOpen} />
        </Grid.Column>
      </Grid.Row>
    )
  }

  const build_it_buttons = () => {
    return ( 
      <Grid.Row>
        <Grid.Column style={{margin: '0.2em'}}>
          <Button fluid icon='shopping cart' circular content='Purchase build' color='green' onClick={() => navigate('/checkout')} />
        </Grid.Column>
        <Grid.Column style={{margin: '0.2em'}}>
          <Button fluid icon='share' circular content='Share build' color='vk' onClick={() => {}} />
        </Grid.Column>
      </Grid.Row>
    )
  }

  return (
    <Segment basic floated='right'>
      <Grid>
        <Grid.Row columns={2}>
          <Menu vertical={props.verticle} icon='labeled' size='massive' compact={props.verticle} borderless stackable>
            {props.verticle && build_it_buttons()}
            {props.verticle && v_buttons()}
            {categories.map((elem, idx) => {
              return (
                <Grid.Row>
                  <InfoPopup content={elem.desc} position='top right' trigger={<Button floated='right' size='mini' icon='question' />} />
                  <Menu.Item
                  name={elem.name}
                  disabled={elem.title===props.category? true: false}
                  icon={<Icon name={elem.icon}/>} 
                  onClick={() => {
                    props.setCategory(elem.title)
                  }}
                  key={idx} />
                </Grid.Row>
              )
            })}
          </Menu>
          {!props.verticle && h_buttons()}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
