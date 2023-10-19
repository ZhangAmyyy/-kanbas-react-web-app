import { Link, useLocation } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function KanbasNavigation() {
    const links = [
        { to: '/Kanbas', label: 'Image', icon: '' },
        { to: '/Kanbas/Account', label: 'Accounts', icon: 'fas fa-heart' },
        { to: '/Kanbas/Dashboard', label: 'Dashboard', icon: 'fas fa-tachometer' },
        { to: '/Kanbas/Courses', label: 'Courses', icon: 'fa-solid fa-book' },
        { to: '/Kanbas/Calendar', label: 'Calendar', icon: 'fa fa-calendar' },
        { to: '/Kanbas/Messages', label: 'Messages', icon: 'fa-solid fa-inbox' },
        { to: '/Kanbas/History', label: 'History', icon: 'fa-regular fa-clock' },
        { to: '/Kanbas/Studio', label: 'Studio', icon: 'fa-solid fa-tv' },
        { to: '/Kanbas/Commons', label: 'Commons', icon: 'fa-solid fa-right-from-bracket' },
        { to: '/Kanbas/Help', label: 'Help', icon: 'fa-regular fa-circle-question' },
      ];
    
      const location = useLocation();

  return (
    <div className="wd-bg-color-black d-none d-md-block">
      <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={location.pathname.includes(link.to)  && link.label!=='Image'? 'wd-active' : ''}>
          <Link to= {link.label!=='Courses'? link.to: '/Kanbas/Courses/RS101/Home'}>
            {link.icon && <i className={link.icon} aria-hidden="true"></i>}
            <br/>
            {link.label === 'Image' && <img src="../../../images/neu.png" alt="NEU Logo" width="55" height="55" />}
            {link.label !== 'Image' &&  link.label}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );

}
export default KanbasNavigation