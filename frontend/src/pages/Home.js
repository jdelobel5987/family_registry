import SearchContacts from '../components/SearchContacts';
import DisplayContacts from '../components/DisplayContacts';


function Home() {
  return (
    <div className="Home">

      <main>
        <p style={{color: 'red'}}>Test Home routing</p>
        <h1>Welcome to the Family Registry App</h1>
        <p>This app helps you manage your family records efficiently.</p>

        <SearchContacts /> {/*TODO: Implement SearchContacts component*/}
        {/* <FilterContacts /> */} {/*TODO: Implement FilterContacts component */}
        {/* <SortContacts /> */} {/*TODO: Implement SortContacts component*/}
        {/* <ExportContacts /> */} {/*TODO: Implement ExportContacts component*/}
        {/* <AddNewContact /> */} {/*TODO: Implement AddNewContacts component*/}
        <DisplayContacts /> {/*TODO: Implement DisplayContacts component*/}
      
      </main>
      
    </div>
  );
}

export default Home;