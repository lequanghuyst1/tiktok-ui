import PropTypes from 'prop-types';
import styles from './Proper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}
Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}
export default Wrapper;
