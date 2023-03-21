import { Card, Container, Grid, Header, Image, Segment } from "semantic-ui-react"
import PageProps from "../../interfaces/page"

import cheap_desktop from '../../resources/cheap-desktop-pc.webp'
import gaming_desktop from '../../resources/gaming_desktop.avif'

interface pic_text {
  picture: string
  header: string
}

export const Home: React.FunctionComponent<PageProps> = props => {
  const desktops: pic_text[] = [ {picture: cheap_desktop, header: 'BUILD NOW'}, {picture: gaming_desktop, header: 'LOOK IN STORE'}]

  return (
    <div>
      <Header textAlign="center" as='h1'>BuildMaster</Header>
      <Grid centered padded>
        <Grid.Row centered>
          {desktops.map((elem, idx) => {
            return (
              <>
                <Header key={idx}>{elem.header}</Header>
                <Image key={idx} size='large' src={elem.picture}></Image>
              </>
            )
          })}
        </Grid.Row>
      </Grid>
    </div>
  )
}
