import '../styles/contactCard.css';
import generateAvatarUrl from '../utils/generateAvatarUrl';

function ContactCard({ contact }) {
    return (
        <div className="contact-card">
            <div className="card-inner">
                <div className="front">
                    <img src={generateAvatarUrl()} alt="Random Avatar" className="contact-avatar" />
                    <h3>{contact.lastname} {contact.firstname}</h3>
                </div>
                <div className="back">
                    <h4>Address</h4>
                    <p>{contact.address}</p>
                    <p>{contact.zipcode}, {contact.city}</p>
                    <p>{contact.country}</p>
                    <h4>Contact</h4>
                    <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                    <p>Phone: <a href={`tel:${contact.phone_fixed}`}>{contact.phone_fixed}</a> - <a href={`SMS:${contact.phone_mobile}`}>{contact.phone_mobile}</a></p>
                    <h4>Birthdate</h4>
                    <p>{contact.birthdate}</p>
                    <h4> </h4>
                    <div className="CTA">
                        <button className="edit-contact">Edit</button>
                        <button className="delete-contact">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;