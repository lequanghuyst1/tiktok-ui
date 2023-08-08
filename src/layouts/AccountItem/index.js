import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/:${data.nickname}`}>
            <div className={cx('wrapper')} onClick={onClick}>
                <Image src={data.avatar} alt="Hoaa" className={cx('avatar')}></Image>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;
