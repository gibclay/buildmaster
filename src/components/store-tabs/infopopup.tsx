import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

export interface InfoPopupProps {
  content?: string;
  position?: 
  | 'top left'
  | 'top right'
  | 'bottom right'
  | 'bottom left'
  | 'right center'
  | 'left center'
  | 'top center'
  | 'bottom center'
  trigger?: React.ReactNode
}

const InfoPopup: React.FC<InfoPopupProps> = (props) => {
  return (
    <Popup content={props.content} position='top right' trigger={<Button compact floated='right' size='mini' icon='question' />} />
  )
}

export default InfoPopup
