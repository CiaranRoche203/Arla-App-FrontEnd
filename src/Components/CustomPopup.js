import { useEffect, useState } from "react";
import popupStyles from './../Styles/custom-popup.module.css';
import PropTypes from "prop-types";
const CustomPopup = (props) => {
  //set state so that popup doesnt show at start
  const [show, setShow] = useState(false);

  //function to close the popup
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  //useEffect to set the state of the popup
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  
  return (
    <div
      style={{
        // set the visibility
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      {//popup htmk
      }
      <div className={popupStyles.popup}>
        <h2>{props.title}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;

