import '../styles/contactCard.css';
import generateAvatarUrl from '../utils/generateAvatarUrl';

function ContactCard({ contact }) {
    return (
        <div className="contact-card">
            <img src={generateAvatarUrl()} alt="Random Avatar" className="contact-avatar" />
            <h3>{contact.lastname} {contact.firstname}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone_fixed} - {contact.phone_mobile}</p>
            <button className="view-contact-details">View Details</button>
            <button className="edit-contact">Edit</button>
            <button className="delete-contact">Delete</button>
        </div>
    );
}

export default ContactCard;