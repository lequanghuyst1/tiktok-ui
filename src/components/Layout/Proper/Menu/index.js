import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as WrapperProper } from '~/components/Layout/Proper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };
    return (
        <Tippy
            delay={[0,700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperProper className={cx('menu-proper')}>{renderItems()}</WrapperProper>
                </div>
            )}
            content="Tìm kiếm"
        >
            {children}
        </Tippy>
    );
}

export default Menu;
