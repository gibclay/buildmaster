import { Grid, Header, Image } from "semantic-ui-react"
import PageProps from "../../interfaces/page"

import cheap_desktop from '../../resources/cheap-desktop-pc.webp'
import gaming_desktop from '../../resources/gaming_desktop.avif'
import chip from '../../resources/chips.webp'

export const Home: React.FunctionComponent<PageProps> = props => {
  const desktops = [ cheap_desktop, gaming_desktop, chip]

  return (
    <div>
      <Header textAlign="center" as='h1'>BuildMaster</Header>
      <Grid centered padded>
        <Grid.Row centered>
          {desktops.map((elem, idx) => {
            return <Image key={idx} size='large' src={elem}></Image>
          })}
        </Grid.Row>
      </Grid>
    </div>
  )
}
