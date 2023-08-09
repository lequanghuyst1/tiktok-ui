import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu,{ MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For you' to={config.routes.home} activeIcon ={<HomeActiveIcon/>} icon={<HomeIcon/>} ></MenuItem>
                <MenuItem title='Following' to={config.routes.following} activeIcon={<UserGroupActiveIcon/>} icon={<UserGroupIcon/>}></MenuItem>
                <MenuItem title='Live' to={config.routes.live} activeIcon={<LiveActiveIcon/>} icon={<LiveIcon/>}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;