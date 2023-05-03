import { useNavigate } from 'react-router-dom';
import { Button, Card, Dropdown, Grid } from 'semantic-ui-react';

export interface CartProps {
  pointing?: boolean | "left" | "right" | "top" | "top left" | "top right" | "bottom" | "bottom left" | "bottom right" | undefined;
  cartMenuOpen?: any;
  setCartMenuOpen?: any;
  cart: string[]| undefined;
}

const Cart: React.FC<CartProps> = (props) => {
  const navigate = useNavigate();

  const handleCartMenuOpen = (open: boolean) => {
    props.setCartMenuOpen(!open);
  }

  return (
    <Dropdown floating fluid pointing={props.pointing} open={props.cartMenuOpen}>
      <Dropdown.Menu>
          <Grid padded stackable centered>
            <Grid.Row>
              <Grid.Column>
                {props.cart? (
                props.cart.map((elem, idx) => {
                  return <Grid.Row centered style={{margin: '1em'}}><Card centered content={elem}></Card></Grid.Row>
                }) 
                ) : (
                 <Grid.Row><Card text='No items in shopping cart' /> </Grid.Row>
                )}
              </Grid.Column>
            </Grid.Row>
            <div className='ui two buttons'>
              <Button fluid content='Close' secondary onClick={() => handleCartMenuOpen(props.cartMenuOpen)} />
              <Button fluid content='Buy cart' color='green' onClick={() => {navigate('/Checkout')}} />
            </div>
          </Grid>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Cart
