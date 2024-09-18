import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'Tharita', message: 'Hi there' },
    { name: 'nae', message: 'Hello..' }
  ];

  return (
    <div className='App'>
      < Counter/>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="tharita47@gmail.com" phone="0968528028" />
    </div>
  );
}

export default App;
