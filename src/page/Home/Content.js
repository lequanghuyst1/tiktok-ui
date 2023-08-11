/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MusicIon } from '~/components/Icons';
import Button from '~/components/Button/Button';
import ActionIcon from './ActionIcon';
import { useEffect, useState } from 'react';
import { getListVideo } from '~/Services/userService';

const cx = classNames.bind(style);
function Content() {
    const [getVideo, setGetVideo] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getListVideo('for-you', 1);
            setGetVideo(result);
        };
        fetchAPI();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {getVideo.map((data) => (
                <div key={data.id} className={cx('recommend-item')}>
                    <img className={cx('avatar')} src={data.user.avatar} />
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <a href="/" className={cx('info')}>
                                <h3 className={cx('nickname')}>
                                    {data.user.nickname}
                                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>
                                </h3>
                                <h4 className={cx('name')}>
                                    {data.user.first_name} {data.user.last_name}
                                </h4>
                            </a>
                            <Button className={cx('btn-follow')} outline>
                                Follow
                            </Button>
                            <p className={cx('desc')}>{data.description}</p>
                            <div className={cx('video-music')}>
                                <a className={cx('link-music')} href="/">
                                    <MusicIon className={cx('icon-music')} />
                                    <p className={cx('name-music')}>{data.music}</p>
                                </a>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('content-video')}>
                                <img className={cx('img-Poster')} src={data.user.thumb_url}></img>

                                <video className={cx('video')} src={data.file_url}></video>
                            </div>
                            <ActionIcon />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Content;
