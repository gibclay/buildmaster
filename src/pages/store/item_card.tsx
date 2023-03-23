import React from 'react'
import { Button, ButtonProps, Card, Image, SemanticCOLORS } from 'semantic-ui-react'

interface ItemCardProps {
  name?: string
  category?: string
  picture?: string
  active?: boolean
  onButtonClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => void)
}

const ItemCard: React.FC<ItemCardProps> = (props) => {
  let activeColor: SemanticCOLORS = 'green'
  let disabledColor: SemanticCOLORS ='orange'


  return (
    <Card>
      <Image size='medium' src={props.picture} />
      <Card.Content header textAlign='center'>{props.name}</Card.Content>
      <Button
      color={props.active? disabledColor: activeColor} 
      icon={props.active? 'minus': 'plus'} 
      content={props.active? 'Remove Item': 'Add item'} 
      onClick={props.onButtonClick}/>
    </Card>
  )
}

export default ItemCard
