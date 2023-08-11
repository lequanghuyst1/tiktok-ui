import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label, data = [], onclick, show, hideOn }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((user) => {
                return <AccountItem key={user.id} data={user} />;
            })}
            <button className={cx('more-btn')} onClick={onclick}>
                {!show ? `See all` : `See less`}
            </button>
        </div>
    );
}
SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
