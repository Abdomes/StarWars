import UiVideo from '@ui/UiVideo';
import video from './video/han-solo.mp4';
import styles from './ErrorMessage.module.css';
import { PropTypes } from 'prop-types';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won. <br />
        We cannot display data.<br />
        Come back when we fix everything.<br />
      </p>
      <UiVideo src={video} classes={styles.video} />
    </>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string
}

export default ErrorMessage;