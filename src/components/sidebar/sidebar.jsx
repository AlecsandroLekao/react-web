import { Link } from 'react-router-dom';
import icons from '../../styles/icons';
import './sidebar.css'

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <Link to="/"><img src={icons.home} className='icon' alt="" srcset="" /></Link>
            <Link to="/despesa/add"><img src={icons.add} alt="" className='icon' srcset="" /></Link>
            <Link to="#"><img src={icons.config} alt="" className='icon' srcset="" /></Link>
            <Link to="#"><img src={icons.logout} alt="" className='icon' srcset="" /></Link>
        </div>
    )
}

export default Sidebar;