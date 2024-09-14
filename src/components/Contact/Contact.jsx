import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.contactRow}>
      <div className={style.contactBlock}>
        <div className={style.contactContent}>
          <p>
            <span className={style.text}>
              <FaUser /> {name}
            </span>
          </p>
        </div>
        <div className={style.contactContent}>
          <p>
            <span className={style.text}>
              <FaPhone /> {number}
            </span>
          </p>
        </div>
      </div>
      <button
        className={style.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
