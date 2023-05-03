import { Button, Grid, Header, Icon, Input, Modal, Segment, Select } from 'semantic-ui-react';
import internal from 'stream';

export interface FiltersProps {
  pointing?: boolean | "left" | "right" | "top" | "top left" | "top right" | "bottom" | "bottom left" | "bottom right" | undefined;
  filterMenuOpen?: any;
  setFilterMenuOpen?: any;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const handleFilterMenuOpen = () => {
    props.setFilterMenuOpen(!props.filterMenuOpen);
  }

  return (
    // <Dropdown fluid pointing={props.pointing} open={props.filterMenuOpen}>
    //   <Dropdown.Menu>
    //     <Container textAlign='center' text>
    //       <Grid padded stackable>
    //         <Grid.Column>
    //           <Dropdown.Header>Pricing:</Dropdown.Header>
    //           <Grid.Row style={{margin:'1em'}}>
    //             <Input size='mini' label='Minimum' icon='dollar' /> to <Input size='small' label='maximum' icon='dollar' />
    //           </Grid.Row>
    //           <Grid.Row style={{margin:'1em'}}>
    //             <Dropdown.Header>Product Specifications:</Dropdown.Header>
    //             <Dropdown selection={'Company names'} text='Manufacturer'><Dropdown.Menu>
    //               <Dropdown.Item text='Company names'/>
    //               <Dropdown.Item text='Like Intel'/>
    //               <Dropdown.Item text='Go Here'/>
    //             </Dropdown.Menu></Dropdown>
    //             <Dropdown selection={'Series'} text='Series'><Dropdown.Menu>
    //               <Dropdown.Item text='Like AMD Ryzen 9'/>
    //               <Dropdown.Item text='or Intel i5'/>
    //             </Dropdown.Menu></Dropdown>
    //           </Grid.Row>
    //           <Grid.Row style={{margin:'1em'}}>
    //             <Dropdown.Item><Button secondary floated='right' fluid content='Accept' onClick={handleFilterMenuOpen} /></Dropdown.Item>
    //           </Grid.Row>
    //         </Grid.Column>
    //       </Grid>
    //     </Container>
    //   </Dropdown.Menu>
    // </Dropdown>
    <Modal
    onClose={() => props.setFilterMenuOpen(false)}
    onOpen={()=> props.setFilterMenuOpen(true)}
    open={props.filterMenuOpen}
    size='small'>
      <Modal.Header>Filters</Modal.Header>
      <Modal.Content>
        <Segment textAlign='center'>
          <Header sub>Price Range:</Header>
          <Input label='Min' icon='dollar' /> to <Input label='Max' icon='dollar' />
        </Segment>
        <Segment textAlign='center'>
          <Header sub>Product specifications:</Header>
          <Select placeholder='Category' options={cats}></Select>
          <Select placeholder='Manufacturer' options={companies}></Select>
        </Segment>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => props.setFilterMenuOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Set Filters"
          labelPosition='right'
          icon='checkmark'
          onClick={() => props.setFilterMenuOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Filters

const cats = [
  {key: 'case', value: 'case', text: 'Case'}, 
  {key: 'cpu', value: 'cpu', text: 'CPU'},
  {key: 'cpu-cooler', value: 'cpu-cooler', text: 'CPU Cooler'},
  {key: 'video-card', value: 'video-card', text: 'Video Card'},
  {key: 'mem', value: 'mem', text: 'Memory'},
  {key: 'psu', value: 'psu', text: 'Power Supply'},
  {key: 'storage', value: 'storage', text: 'Storage'},
  {key: 'os', value: 'os', text: 'Operating System'},
  {key: 'peripherals', value: 'peripherals', text: 'Peripherals'},]
const companies = [{key: 'intel', value: 'intel', text: 'Intel'}, {key: 'amd', value: 'amd', text: 'AMD'},]
