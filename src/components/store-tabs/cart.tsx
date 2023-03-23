import { useNavigate } from 'react-router-dom';
import { Button, Card, Dropdown, DropdownItem, Grid } from 'semantic-ui-react';

export interface CartProps {
  pointing?: boolean | "left" | "right" | "top" | "top left" | "top right" | "bottom" | "bottom left" | "bottom right" | undefined;
  cartMenuOpen?: any;
  setCartMenuOpen?: any;
  cart: string[]| undefined;
}

const Cart: React.FC<CartProps> = (props) => {
  const navigate = useNavigate();

  const handleCartMenuOpen = () => {
    props.setCartMenuOpen(!props.cartMenuOpen);
  }

  return (
    <Dropdown floating fluid pointing={props.pointing} open={props.cartMenuOpen}>
      <Dropdown.Menu>
          <Grid padded stackable centered>
            <Grid.Row>
              <Grid.Column>
                {props.cart && (
                props.cart.map((elem, idx) => {
                  return <Grid.Row centered style={{margin: '1em'}}><Card centered content={elem}></Card></Grid.Row>
                })
                )}
                {!props.cart && ( <DropdownItem text='No items in shopping cart' /> )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Button fluid content='Close' secondary onClick={handleCartMenuOpen} />
            </Grid.Row>
            <Grid.Row>
              <Button fluid content='Buy cart' secondary onClick={() => {navigate('Checkout')}} />
            </Grid.Row>
          </Grid>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Cart
