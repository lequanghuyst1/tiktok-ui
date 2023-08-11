import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as getServices from '~/Services/userService';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccount from '../SuggestedAccounts/SuggestedAccounts';
const cx = classNames.bind(styles);
const init_Page = 1;
function Sidebar() {
    const [page, setPage] = useState(init_Page);
    const [listSuggested, setListSuggested] = useState([]);
    const [listAll, setListAll] = useState(false);
    const lengthSuggested = async () => {
        getServices.getAllSuggest().then((data) => {
            //console.log(data.pagination.total);
        });
    };
    lengthSuggested();
    useEffect(() => {
        getServices.getSuggest(page, 5).then((data) => {
            setListSuggested((prev) => [...prev, ...data]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    const handleSeeAll = () => {
        setPage(page + 1);
        //setListAll(!listAll);
    };
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    activeIcon={<HomeActiveIcon />}
                    icon={<HomeIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    activeIcon={<UserGroupActiveIcon />}
                    icon={<UserGroupIcon />}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    activeIcon={<LiveActiveIcon />}
                    icon={<LiveIcon />}
                ></MenuItem>
            </Menu>
            <SuggestedAccount
                label="Suggested Accounts"
                data={listSuggested}
                onclick={handleSeeAll}
                show={listAll}
            ></SuggestedAccount>

            <SuggestedAccount label="Following Accounts" hideOn={false}></SuggestedAccount>
        </aside>
    );
}

export default Sidebar;
