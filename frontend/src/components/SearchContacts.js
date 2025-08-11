import '../styles/searchContacts.css';

function SearchContacts() {
  return (
    <div className="search-contacts">
        <h2>Search Contacts</h2>
        <input type="text" placeholder="Search by name" />
        <button>Search</button>
    </div>
  );
}

export default SearchContacts;