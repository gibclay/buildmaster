import { Button, Container, Dropdown, DropdownSearchInput, Grid, Input } from 'semantic-ui-react';

export interface FiltersProps {
  filterMenuOpen?: any;
  setFilterMenuOpen?: any;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const handleFilterMenuOpen = () => {
    props.setFilterMenuOpen(!props.filterMenuOpen);
  }

  return (
    <Dropdown fluid pointing='top right' open={props.filterMenuOpen}>
      <Dropdown.Menu>
        <Container textAlign='center' text>
          <Grid padded stackable>
            <Grid.Column>
              <Grid.Row>
                <Dropdown.Header>Search:</Dropdown.Header>
                <Input size='small' fluid />
              </Grid.Row>
              <Dropdown.Header>Pricing:</Dropdown.Header>
              <Grid.Row style={{margin:'1em'}}>
                <Input size='mini' label='Minimum' icon='dollar' /> to <Input size='small' label='maximum' icon='dollar' />
              </Grid.Row>
              <Grid.Row style={{margin:'1em'}}>
                <Dropdown.Header>Product Specifications:</Dropdown.Header>
                <Dropdown selection={'Company names'} text='Manufacturer'><Dropdown.Menu>
                  <Dropdown.Item text='Company names'/>
                  <Dropdown.Item text='Like Intel'/>
                  <Dropdown.Item text='Go Here'/>
                </Dropdown.Menu></Dropdown>
                <Dropdown selection={'Series'} text='Series'><Dropdown.Menu>
                  <Dropdown.Item text='Like AMD Ryzen 9'/>
                  <Dropdown.Item text='or Intel i5'/>
                </Dropdown.Menu></Dropdown>
              </Grid.Row>
              <Grid.Row style={{margin:'1em'}}>
                <Dropdown.Item><Button secondary floated='right' fluid content='Accept' onClick={handleFilterMenuOpen} /></Dropdown.Item>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Filters
