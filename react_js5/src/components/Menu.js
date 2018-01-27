import {Link} from 'react-router'
import HomeIcons from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
export const Menu=()=><ul className="menu">
            <li><HomeIcons/><Link to="/" activeClassName="selected">Home</Link></li>
            <li><AddDayIcon/><Link to="/add-day" activeClassName="selected">Add Day</Link></li>
            <li><ListDaysIcon/><Link to="/list-days" activeClassName="selected">SkiDays List</Link></li>
        </ul>