import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import {BusinessCenter, Home as HomeIcon} from "@material-ui/icons";
import { SupervisorAccount as SupervisorAccountIcon } from '@material-ui/icons';
import { BusinessCenter as BusinessCenterIcon } from '@material-ui/icons';
import {Chat as ChatIcon } from '@material-ui/icons';
import { Notifications as NotificationsIcon } from '@material-ui/icons';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src="/img/linkedin.png" alt="" />

            <div className="header_search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header_right">
          <HeaderOption Icon = {HomeIcon} title = 'Home'/>
          <HeaderOption Icon = {SupervisorAccountIcon} title = 'My Network'/> 
          <HeaderOption Icon = {BusinessCenterIcon} title = 'Jobs'/>
          <HeaderOption Icon = {ChatIcon} title = 'Messaging'/>
          <HeaderOption Icon = {NotificationsIcon} title = 'Notifications'/>
          <HeaderOption avatar = "https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonnyjpeg" title = 'me' />
        </div>

    </div>
  )
}

export default Header