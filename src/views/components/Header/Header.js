import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-scroll'
import { Link as RouterLink} from '@mui/material';


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className={styles.header} id='header'>
      <img src='../images/home/logo.png' alt='' className={styles.logo} />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            borderRadius: '5px',
            padding: '.5rem',
            cursor: 'pointer',
            zIndex: '1'
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src='../images/home/bars.png' alt='' style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className={styles.header_menu}>
          <li>
            <Link onClick={() => setMenuOpened(false)} activeClass='active' to='header' spy={true} smooth={true}>
              Home
            </Link>
          </li>
          {/* <li onClick={()=>setMenuOpened(false)}><Link
                    onClick={()=>setMenuOpened(false)}
                    to="programs"
                    spy={true}
                    smooth={true}
                    >Programs</Link>
                    </li> */}
          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to='reasons' spy={true} smooth={true}>
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to='plans' spy={true} smooth={true}>
              Pricing
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to='testimonials' spy={true} smooth={true}>
              Testimonials
            </Link>
          </li>

          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to='' spy={true} smooth={true}>
              Campaigns
            </Link>
          </li>

          <li onClick={() => setMenuOpened(false)}>
            <RouterLink href='/login'>
              Login
            </RouterLink>
          </li>

          <li onClick={() => setMenuOpened(false)}>
            <Link onClick={() => setMenuOpened(false)} to='' spy={true} smooth={true}>
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
