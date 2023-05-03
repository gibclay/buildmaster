import { Image, Grid } from 'semantic-ui-react'
import landing_page_1 from '../../resources/landing1.jpg'

export const LandingPage = () => {
  return (
    <Grid>
      <Grid.Column>
        <Image src={landing_page_1} fluid />
      </Grid.Column>
    </ Grid>
  )
}
