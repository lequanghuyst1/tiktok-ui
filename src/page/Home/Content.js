/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function Content() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1691913600&x-signature=VKShNtAs1yiMxVEmINq8v2IR%2B68%3D"
            />
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <a href="/" className={cx('info')}>
                        <h3 className={cx('nickname')}>hoaa.hanassii</h3>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    </a>
                </div>
                <div className={cx('body')}>
                    <div className={cx('video')}></div>
                    <div className={cx('action')}></div>
                </div>
            </div>
        </div>
    );
}

export default Content;
