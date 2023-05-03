import { useLocation, useNavigate } from 'react-router-dom'
import Rout from '../../interfaces/route'
import { Button, Dropdown, Flag, Image, Menu, MenuItem} from 'semantic-ui-react'
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
        <Menu.Item>
          <Image dimmer src={logo} size='mini' />
        </Menu.Item>
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
        <Menu.Item color='yellow' position='right' />
          <Menu inverted compact>
            <Dropdown item icon={<Flag name='us' />} text='English'>
              <Dropdown.Menu>
                <Dropdown.Item icon={<Flag name='spain'/>} text='Español' />
                <Dropdown.Item icon={<Flag name='france'/>} text='Français' />
                <Dropdown.Item icon={<Flag name='germany'/>} text='Deutsche' />
                <Dropdown.Item icon={<Flag name='russia'/>} text='Русcкий' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        <Menu.Item />
        <MenuItem children={<Button color='blue' content='Log in' onClick={() => {navigate('/login')}} />}  />
      </Menu>
  )
}
