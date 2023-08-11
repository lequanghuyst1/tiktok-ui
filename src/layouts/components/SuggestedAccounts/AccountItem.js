import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '~/components/Images';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <AccountPreview data={data} />
            </div>
        );
    };
    return (
        <div>
            <HeadlessTippy offset={[-20, -2]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt="Anh" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>
                            {data.first_name} {data.last_name}
                        </p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
