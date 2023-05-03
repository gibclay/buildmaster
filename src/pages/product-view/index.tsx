import { useState } from 'react'
import { Link } from 'react-router-dom'
import cpu1 from 'resources/processor.webp'
import { Comment, Breadcrumb, Container, Header, Segment, Image, Divider, Menu, Icon, Item, Grid, Button, SemanticCOLORS, Rating } from 'semantic-ui-react'

export interface ProductViewPageProps{
  item: any
}

export const ProductViewPage: React.FC<ProductViewPageProps> = props => {
  let activeColor: SemanticCOLORS = 'green'
  let disabledColor: SemanticCOLORS ='orange'
  
  const [view, setView] = useState('details')
  const [active, setActive] = useState(false)

  const handleSetView = (newView: string) => {
    setView(newView)
  }
  const handleAdditem = (current: boolean) => {
    setActive(!current)
  }

  return (
    <Container>
      <Breadcrumb size='large'>
        <Breadcrumb.Section link content='Store' />
        <Breadcrumb.Divider content='>'  />
        <Breadcrumb.Section link content='Build' />
        <Breadcrumb.Divider content='>'  />
        <Breadcrumb.Section link content='CPUs' />
        <Breadcrumb.Divider content='>'  />
        <Breadcrumb.Section active content='Intel i5 5500' />
      </Breadcrumb>
      <Button floated='right' color='vk' size='medium' content="Go to Cart" icon="shopping cart" circular onClick={() => {} }/>
      <Header as='h1'>
        <Header.Content>Intel i5 5500</Header.Content>
        <Header.Subheader></Header.Subheader>
      </Header>
      <Divider />
      <Grid columns={2}>
        <Grid.Column>
          <Segment textAlign='center'>
            <Image centered size='medium' src={cpu1}/>
            <div className='ui two boxes'>
              <Header>
                <Header.Content>Price:</Header.Content>
                <Header.Subheader>$100</Header.Subheader>
              </Header>
              <Header>
                <Header.Content>Rating:</Header.Content>
                <Header.Subheader><Rating icon='star' rating={4} maxRating={5} /></Header.Subheader>
              </Header>
            </div>
            <Header as='h3'>Description:</Header>
            <Container>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla enim, convallis in fringilla dictum, viverra id justo. Aenean ac ornare erat, pretium pharetra mauris. Donec consectetur leo porttitor, ullamcorper purus a, iaculis velit. In hac habitasse platea dictumst. Nullam nunc metus, suscipit in nisi nec, mattis molestie orci. Fusce vitae ante sit amet arcu ullamcorper tristique.</Container>
          </Segment>
        </Grid.Column>
        
        <Grid.Column>
          <Menu attached='top' tabular>
            <Menu.Item content='Details' active={view==='details'} onClick={() => handleSetView('details')}></Menu.Item>
            <Menu.Item content='Reviews' active={view==='reviews'} onClick={() => handleSetView('reviews')}></Menu.Item>
          </Menu>
          {
            view==='details'? (<DetailsView />) : (<ReviewsView />)
          }
          <Button
          fluid
          size='medium'
          color={active? disabledColor: activeColor} 
          icon={active? 'minus': 'plus'} 
          content={active? 'Remove': 'Add item'} 
          onClick={() => handleAdditem(active)} />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

const DetailsView = () => {
  return (
    <Segment attached='bottom'>
      <Segment.Inline>
        <Header sub>
          <Icon name='server' />
          <Header.Content>Number of Cores:</Header.Content>
          <Header.Subheader>Quad-Core</Header.Subheader>
        </Header>
        
        <Header sub>
          <Icon name='code branch' />
          <Header.Content>Threads:</Header.Content>
          <Header.Subheader>8-Thread</Header.Subheader>
        </Header>

        <Header sub>
          <Icon name='clock' />
          <Header.Content>Clock Speed:</Header.Content>
          <Header.Subheader>3.20GHz</Header.Subheader>
        </Header>

        <Header sub>
          <Icon name='plug' />
          <Header.Content>Power usage:</Header.Content>
          <Header.Subheader>65 Watts</Header.Subheader>
        </Header>

        <Header sub>
          <Icon name='microchip' />
          <Header.Content>Memory:</Header.Content>
          <Header.Subheader>DDR5 4800</Header.Subheader>
        </Header>

        <Header sub>
          <Icon name='image' />
          <Header.Content>Integrated Graphics:</Header.Content>
          <Header.Subheader>None</Header.Subheader>
        </Header>

        <Header sub>
          <Icon name='film' />
          <Header.Content>Socket Type:</Header.Content>
          <Header.Subheader>LGA 1700</Header.Subheader>
        </Header>
      </Segment.Inline>
    </Segment>
  )
}

const ReviewsView = () => {
  return (
    <Segment attached='bottom'>
      <Comment.Group>
        {/* comment 1*/}
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>4<Icon name='star' color='yellow' /></div>
              <div>523 people found this review helpful</div>
            </Comment.Metadata>
            <Comment.Text>
              This processor doesn't even exist.
            </Comment.Text>
          </Comment.Content>
        </Comment>
        
        {/* comment 2*/}
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Stevie Feliciano</Comment.Author>
            <Comment.Metadata>
              <div>3<Icon name='star' color='yellow' /></div>
              <div>123 people found this review helpful</div>
            </Comment.Metadata>
            <Comment.Text>
              This processor doesn't even exist.
            </Comment.Text>
          </Comment.Content>
        </Comment>
        
        {/* comment 3*/}
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Tom Lukic</Comment.Author>
            <Comment.Metadata>
              <div>5<Icon name='star' color='yellow' /></div>
              <div>5 people found this review helpful</div>
            </Comment.Metadata>
            <Comment.Text>
              Oh by the way I borderline copy-pasted these comments off of <a target='https://react.semantic-ui.com/views/comment/#content-actions'>https://react.semantic-ui.com/views/comment/#content-actions</a>.
              We're using them for their pretty pictures!
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Segment>
  )
}
