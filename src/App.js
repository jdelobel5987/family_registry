import './styles/App.css';
import SearchContacts from './components/SearchContacts';
import DisplayContacts from './components/DisplayContacts';


function App() {
  return (
    <div className="App">

      <main>
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

export default App;
