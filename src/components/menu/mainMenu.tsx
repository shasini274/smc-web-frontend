import styled from 'styled-components'
import { Icon } from '@iconify/react';
import bxHome from '@iconify/icons-bx/bx-home';
import outlineNotificationsActive from '@iconify/icons-ic/outline-notifications-active';
import baselineDeviceHub from '@iconify/icons-ic/baseline-device-hub';

import '../../Reset.css';
import '../../App.css';

// const MenuLink = (props) => {

//   return (
//     <Link
//       {...props}
//       getProps={(props) => {
//         // The object returned here is passed to the
//         // Anchor element's props
//         return {
//           style: {
//             'background': props.isPartiallyCurrent ? "#233567" : "none",
//             'color': props.isPartiallyCurrent ? "#FFF" : "#555",
//           }
//         };
//       }}
//     />
//   )
// }

const StyledMainMenu = styled.div`
  height: 100%;
  width: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-right: 1px solid #AAA;
`;

const StyledMenuBlock = styled.div`
  width: 65px;
  
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0 0 0 0px;
    padding: 10px 0 0 10px;
    overflow: auto;
    
    li {
      display: block;
      margin: 10px 10px 10px 10px;
    //   overflow: auto;
      
      $:last-child {
        margin-top: auto;
      }
      
      a {
        text-decoration: none;
        color: #707070;
        height: 40px;
        display: block;
        width: 40px;
        // padding: 5px;
        border-radius: 5px;
      }
    }
  }
`;

interface Features {
  main: {
    menu: boolean,
    home: boolean,
    donations: boolean,
    user_manual: boolean,
  },
  sub: {
    menu: boolean,
    list: boolean,
    map: boolean,
    power: boolean,
    export: boolean,
    alarms: boolean
  }
}

export interface MainMenuProps {
  /**
   * Features
   */
  features: Features;
  /**
   * user
   */
  user: any;
}

export const MainMenu = (props: MainMenuProps) => {
  
  const features = props.features;
  
  return (
    <StyledMainMenu>
      <StyledMenuBlock>
        <ul>
        
          {features.main.home &&
            <li>
            <Icon width='40px' height='40px' icon={bxHome} />
            </li>}
            
          {features.main.donations &&
            <li>
            <Icon width='40px' height='40px' icon={baselineDeviceHub} />
            </li>}

          {features.main.user_manual &&
            <li>
              <Icon width='40px' height='40px' icon={outlineNotificationsActive} />
            </li>}       

            
        </ul>
      </StyledMenuBlock>

    </StyledMainMenu>
  )
}