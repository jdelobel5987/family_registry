import '../styles/homePage.css';
import SearchContacts from '../components/SearchContacts';
import AddNewContact from '../components/AddNewContact';
import DisplayContacts from '../components/DisplayContacts';


function Home() {
  return (
    <div className="Home">

      <main>
        <h1>Welcome to the Family Registry App</h1>
        <p>This app helps you manage your family records efficiently.</p>

        <div className="action-bar">
          <SearchContacts /> {/*TODO: Implement SearchContacts component*/}
          <AddNewContact /> {/*TODO: Implement AddNewContacts component*/}
        </div>
        {/* <FilterContacts /> */} {/*TODO: Implement FilterContacts component */}
        {/* <SortContacts /> */} {/*TODO: Implement SortContacts component*/}
        {/* <ExportContacts /> */} {/*TODO: Implement ExportContacts component*/}
        <DisplayContacts /> {/*TODO: Implement DisplayContacts component*/}
      
      </main>
      
    </div>
  );
}

export default Home;