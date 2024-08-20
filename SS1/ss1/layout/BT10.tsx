import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye, faCamera } from '@fortawesome/free-solid-svg-icons';

function BT10() {
  return (
    <div>
      <h2>Danh sách các Icon</h2>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faEye} />
      <FontAwesomeIcon icon={faCamera} />
    </div>
  );
}

export default BT10;
