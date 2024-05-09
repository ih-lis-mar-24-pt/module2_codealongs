import './App.css';
import MyButton from './components/MyButton';
import AmazingDog from './assets/amazing-dog.jpeg';
import Greeting from './components/Greeting';
import Card from './components/Card';

const person = {
  firstName: 'Lúcia',
  lastName: 'Duarte'
};

const nameLength = personObject => {
  return personObject.firstName.length + personObject.lastName.length;
};

function App() {
  return (
    <>
      <h1>I love dogs!</h1>
      <img src={AmazingDog} alt='such a good boy' />
      <Card name='José' info={{ city: 'Lisbon', course: 'Web Dev' }} week={8} />
      <Greeting firstName='Lúcia' />
      <div className='card'>
        <MyButton />
        <Greeting firstName='André' />
        <p>
          Welcome, {person.firstName} {person.lastName.toUpperCase()}!
        </p>
        <p>Your name has {nameLength(person)} characters!</p>
        <Greeting firstName='Gonçalo' />
      </div>
    </>
  );
}

export default App;
