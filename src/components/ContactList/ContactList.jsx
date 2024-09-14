import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={style.line}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
