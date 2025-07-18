import '../styles/searchContacts.css';

function SearchContacts() {
  return (
    <div className="search-contacts">
        <h1>Search Contacts</h1>
        <input type="text" placeholder="Search by name" />
        <button>Search</button>
    </div>
  );
}

export default SearchContacts;