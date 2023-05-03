import React from 'react'
import { Button, ButtonProps, Card, Header, Icon, Image, SemanticCOLORS } from 'semantic-ui-react'

interface ItemCardProps {
  name?: string
  category?: string
  picture?: string
  active?: boolean
  addItemHandler?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void)
  infoHandler?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void)
}

const ItemCard: React.FC<ItemCardProps> = (props) => {
  let activeColor: SemanticCOLORS = 'green'
  let disabledColor: SemanticCOLORS ='orange'


  return (
    <Card>
      <Card.Content>
        <Image size='medium' src={props.picture} />
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Header sub>Price:</Header>$100
        <Header sub>Rating:</Header>
        <Icon color='orange' name='star' /><Icon color='orange' name='star' /><Icon color='orange' name='star' /><Icon color='orange' name='star' /><Icon color='black' name='star' />
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button
          fluid
          size='medium'
          color={props.active? disabledColor: activeColor} 
          icon={props.active? 'minus': 'plus'} 
          content={props.active? 'Remove': 'Add item'} 
          onClick={props.addItemHandler}/>
          <Button
          fluid
          size='medium'
          color='blue' 
          icon='info' 
          content='Details' 
          onClick={props.infoHandler}/>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ItemCard
