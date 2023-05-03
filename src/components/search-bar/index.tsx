import React from "react"
import { Button, Icon, Input, Label, Segment } from "semantic-ui-react"

export interface SearchBarProps {
  placeholder: string
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
      <Input
      focus
      fluid 
      placeholder={props.placeholder} 
      size='large' 
      icon={<Icon color='teal' inverted circular className='search' />} 
      />
  )
}

export default SearchBar
