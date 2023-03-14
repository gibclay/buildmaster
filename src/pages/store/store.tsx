import { StoreTabs } from "../../components/store-tabs"
import PageProps from "../../interfaces/page"

export const Store: React.FunctionComponent<PageProps> = props => {
  return (
    <div>
      <StoreTabs />
    </div>
  )
}
