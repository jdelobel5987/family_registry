import logo from './assets/logo.svg';
import './styles/App.css';
import SearchContacts from './components/SearchContacts';
import DisplayContacts from './components/DisplayContacts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
