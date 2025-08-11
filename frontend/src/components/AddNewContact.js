import'../styles/addNewContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function AddNewContact() {
  return (
    <div className="add-new-contact">
        {/* <h2>Add New Contact</h2> */}
        <form>
            {/* <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required /> */}
            <button type="submit" className="add-contact-button">
                <FontAwesomeIcon icon={faUserPlus} className="add-contact-icon" />
                Add Contact
            </button>
        </form>
    </div>
  );
}

export default AddNewContact;