import { useLocation, useNavigate } from 'react-router-dom'
import Rout from '../../interfaces/route'
import { Image, Menu, MenuItem} from 'semantic-ui-react'
import logo from 'resources/Logo_1.png'

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
      <Image src={logo} size='mini' />
      {props.route_list.map((elem, idx) => {
        if (elem.onNav) return (
          <MenuItem 
            name={elem.title} 
            active={location.pathname === elem.path}
            icon={elem.icon}
            onClick={() => navigateHandler(elem.path)} 
            content={elem.title}
          />
        );
        else return (<div />)
      })}
      <MenuItem  position='right' content={'Log in'} onClick={() => {navigate('login')}} />
    </Menu>
  )
}
