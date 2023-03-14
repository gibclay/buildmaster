import { useLocation, useNavigate } from 'react-router-dom'
import Rout from '../../interfaces/route'
import { Menu, MenuItem} from 'semantic-ui-react'

export interface NavbarProps {
  route_list: Rout[]
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHandler = (path: string) => {
    navigate(path)
  }

  return (
    <Menu borderless inverted stackable>
      {props.route_list.map((elem, idx) => {
        if (elem.onNav) return (
          <MenuItem 
            name={elem.title} 
            active={location.pathname === elem.path}
            icon={elem.icon}
            onClick={() => navigateHandler(elem.path)} 
            content={elem.title}
          />
        )
      })}
      <MenuItem  position='right' content={'Customer Service'} onClick={() => navigate('./help')} />
    </Menu>
  )
}
