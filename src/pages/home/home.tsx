import { Grid, Header, Image, Segment } from "semantic-ui-react"
import PageProps from "../../interfaces/page"

import cheap_desktop from '../../resources/basic_computer.png'
import gaming_desktop from '../../resources/gaming_computer.png'
import { Link } from "react-router-dom"

interface pic_text {
  picture: string
  header: string
  link: string
}

export const Home: React.FunctionComponent<PageProps> = props => {
  const desktops: pic_text[] = [ {picture: gaming_desktop, header: 'BUILD NOW', link: '/build'}, {picture: cheap_desktop, header: 'LOOK IN STORE', link: '/store'}]

  return (
    <Segment>
      <Header textAlign="center" as='h1'>BuildMaster</Header>
      <Grid centered padded>
        <Grid.Row centered>
          <Segment.Group compact horizontal stackable>
          {desktops.map((elem, idx) => {
            return (
              <Link to={elem.link}>
                <Segment>
                  <Image key={idx} size='big' src={elem.picture}></Image>
                  <Header size="huge" key={idx}>{elem.header}</Header>
                </Segment>
              </Link>
            )
          })}
          </Segment.Group>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
