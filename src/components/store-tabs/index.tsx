import React from 'react'
import { Accordion, AccordionContent, Container, Icon, Menu, MenuItem } from 'semantic-ui-react'
import category from '../../interfaces/category'

export interface StoreTabsProps {}

export const StoreTabs: React.FC<StoreTabsProps> = (props) => {
  const categories: category[] = [
    {
      title: 'Case',
      icon: 'mobile alternate',
    },
    {
      title: 'CPU',
      icon: 'microchip',
    },
    {
      title: 'CPU cooler',
      icon: 'snowflake',
    },
    {
      title: 'Graphics card',
      icon: 'microchip',
    },
    {
      title: 'Memory',
      icon: 'microchip',
    },
    {
      title: 'Power supply',
      icon: 'plug',
    },
    {
      title: 'Storage',
      icon: 'hdd',
    },
    {
      title: 'Operating System',
      icon: 'desktop',
    },
    {
      title: 'Peripherals',
      icon: 'keyboard',
    },
  ]

  return (
    <Container textAlign='center'>
      <Menu icon='labeled' borderless stackable compact>
        {categories.map((elem, idx) => {
          return (
            <MenuItem name={elem.title} icon={elem.icon}>
              {/* <Icon size='huge' name={elem.icon} /> */}
            </MenuItem>
          )
        })}
      </Menu>
    </Container>
  )
}
