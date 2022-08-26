import './App.css';
import Abdallah from './Profile/Abdallah'
function App() {
	const click = () =>{
    alert ('HELLO LAHDERI ABDALLAH');
  }

	return (
		<div className='app'>
			<Abdallah 
      FullName='Lahderi Abdallah'
      bio = 'I am a student and i want to become an entrepreneur so that I can take my many talents to the next level and take control of my economic future.'
      Profession = 'Nothing , I am a student'
      click = {click}

			></Abdallah>
		</div>
	);
}

export default App;
