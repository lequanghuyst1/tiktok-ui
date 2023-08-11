import classNames from 'classnames/bind';
import style from './Home.module.scss';
import {
    CollectActiveIcon,
    CollectIcon,
    CommentIcon,
    HeartActiveIcon,
    HeartIcon,
    MusicIon,
    ShareIcon,
} from '~/components/Icons';
import ItemIcon from './IconItem';
import { useState } from 'react';
const cx = classNames.bind(style);
function ActionIcon() {
    const [active, setActive] = useState(false);
    const handleActive = (e) => {
        setActive(!active);
    };
    return (
        <div className={cx('action')}>
            {/* <ItemIcon className={cx('heart')} icon={!active ? <HeartIcon /> : <HeartActiveIcon />} onclick = {handleActive} /> */}
            <ItemIcon className={cx('heart')} icon={<HeartIcon />} iconActive={<HeartActiveIcon />}/>
            <ItemIcon icon={<CommentIcon />} />
            <ItemIcon icon={!active ? <CollectIcon /> : <CollectActiveIcon />} />
            <ItemIcon icon={<ShareIcon />} />
        </div>
    );
}

export default ActionIcon;
