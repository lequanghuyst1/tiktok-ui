import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { Wrapper } from '~/components/Proper';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <Wrapper>
            <div className={cx('wrapper')}>
                <header className={cx('header')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1691672400&x-signature=d29NsaqtG1ichd2dlQe5dqR6U%2Fo%3D"
                        alt="Anh"
                    />
                    <Button primary className={cx('btn-follow')}>Follow</Button>
                </header>
                <div className={cx('body')}>
                    <p className={cx('nickname')}>
                        <strong>hoaa.hanassii</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>14.9M </strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>383.5M </strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export default AccountPreview;
