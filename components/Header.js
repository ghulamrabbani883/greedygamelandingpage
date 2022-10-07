import headerStyle from '../styles/header.module.css';
import {HiMenu} from 'react-icons/hi';

const Header = () => {
  return (
    <>
      <header className={`${headerStyle.header}`}>
            <HiMenu className={headerStyle.hamberger} />
            <h2 className={headerStyle.headerHeading}>GREEDYGAME <span className={headerStyle.headerBlue}>^</span> </h2>
      </header>
    </>
  )
}

export default Header
