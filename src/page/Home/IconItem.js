import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { useRef, useState } from 'react';
const cx = classNames.bind(style);
function IconItem({ icon, className, iconActive, onclick }) {
    const [active, setActive] = useState(false);
    return (
        <button className={cx('btn-action', className)} onClick={onclick}>
            <span className={cx('item-icon')}>{icon}</span>
            <span className={cx('item-icon-active')}>{iconActive}</span>
            <p className={cx('counts')}>370.1K</p>
        </button>
    );
}

export default IconItem;
