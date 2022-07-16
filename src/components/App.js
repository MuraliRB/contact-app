import './App.css';
import Header from './Header';
import AddContact from './AddContact';
//import ContactCard from './ContactCard';
import ContactList from './ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const contacts = [
    {
      id: '1',
      name: 'Abhishek',
      email: 'abhi90@gmail.com',
    },
    {
      id: '2',
      name: 'Akshay',
      email: 'akshay99@gmail.com',
    },
  ];
  return (
    <div className="container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
