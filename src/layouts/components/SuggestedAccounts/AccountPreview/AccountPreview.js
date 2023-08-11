import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { Wrapper } from '~/components/Proper';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <Wrapper>
            <div className={cx('wrapper')}>
                <header className={cx('header')}>
                    <img className={cx('avatar')} src={data.avatar} alt="Anh" />
                    <Button primary className={cx('btn-follow')}>
                        Follow
                    </Button>
                </header>
                <div className={cx('body')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>
                        {data.first_name} {data.last_name}
                    </p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>{data.followers_count}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{data.likes_count}</strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export default AccountPreview;
