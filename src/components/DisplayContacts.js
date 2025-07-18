import '../styles/displayContacts.css';
import getRandom from '../utils/getRandom';
import React, { useState, useEffect } from 'react';


function DisplayContacts() {
    const randomAvatar = {
        avatarStyle: ['Circle'],
        topType: ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairDreads', 'LongHairFrida', 'LongHairFroBand', 'LongHairFro', 'LongHairNotTooLong', 'LongHairStraight02', 'LongHairStraight01', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved'],
        accessoriesType: ['Blank', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
        hairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Blue','Platinum', 'Red', 'SilverGray'],
        facialHairType: ['Blank', 'BeardMedium', 'BeardLight', 'MoustacheFancy', 'MoustacheMagnum'],
        clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
        clotheColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
        eyeType: ['Default', 'Close', 'Cry', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
        eyebrowType: ['Default', 'Angry', 'AngryNatural', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural'],
        mouthType: ['Default', 'Concerned', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
        skinColor: ['Light', 'Brown', 'Black', 'Yellow', 'Pale', 'DarkBrown', 'Tanned'],
      };

    const generateAvatarUrl = () => `https://avataaars.io/?avatarStyle=${getRandom(randomAvatar.avatarStyle)}&topType=${getRandom(randomAvatar.topType)}&accessoriesType=${getRandom(randomAvatar.accessoriesType)}&hairColor=${getRandom(randomAvatar.hairColor)}&facialHairType=${getRandom(randomAvatar.facialHairType)}&clotheType=${getRandom(randomAvatar.clotheType)}&eyeType=${getRandom(randomAvatar.eyeType)}&eyebrowType=${getRandom(randomAvatar.eyebrowType)}&mouthType=${getRandom(randomAvatar.mouthType)}&skinColor=${getRandom(randomAvatar.skinColor)}`;

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      fetch('/data/registry.json') // fetch should be from the public folder!!
        .then(response => response.json()) // convert response to JSON
        .then(data => setContacts(data)) // save data to state
        .catch(error => console.error('Error fetching contacts:', error));
    }, []); // [] ensures this runs once after the initial render

  return (
    <div className="display-contacts">
      <h2>Contacts List</h2>

      <ul className="contact-list">
        {contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <div className="contact-avatar">
              <img src={generateAvatarUrl()} alt="profile avatar"/>
            </div>
            <h3>{contact.lastname} {contact.firstname}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone_fixed} - {contact.phone_mobile}</p>
            <button className="view-contact-details">View Details</button>
            <button className="edit-contact">Edit</button>
            <button className="delete-contact">Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default DisplayContacts;