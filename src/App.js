import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
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
    </div>
  );
=======
function App() 
{
    const [devs, setDevs] = useState([]);
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    

    useEffect(() => {navigator.geolocation.getCurrentPosition(
        (position) =>{
            const {latitude, longitude} = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
        },

        (err) =>{
            console.log(err);
        },

        {
            timeout: 30000,    
        }
    )}, []);

    useEffect(() => 
    {
        async function loadDevs()
        {
            const response = await api.get('/devs');
            setDevs(response.data);
        }
        loadDevs();
    }, [])

    async function handleAddDev( e)
    {
        e.preventDefault();
        const response = await api.post('/devs',{github_username,techs,latitude,longitude,});
        console.log(response.data);
        setGithubUsername('');
        setTechs('');
        setDevs([...devs, response.data]);
    }

    return ( 
        <div id ="app">
            <aside>
                <strong>Cadastrar</strong>
                <form onSubmit={handleAddDev}>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)}/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required  value={techs} onChange={e => setTechs(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit">Salvar</button>    
                </form>
            </aside>

            <main>
                <ul>
                    {devs.map(dev => 
                        (
                            <li key={dev._id} className="dev-iten">
                                <header>
                                    <img src={dev.avatar_url} alt={dev.name} />
                                    <div className="user-info">
                                        <strong>{dev.name}</strong>
                                        <span>{dev.techs.join(', ')}</span>
                                    </div>
                                </header>
                                <p>{dev.bio}</p>
                                <a href={`https://github.com/${dev.github_username}`} >Acessar perfil do github</a>
                            </li>
                        ))}
                </ul>
            </main>
        </div>
    );
>>>>>>> Web de cadastro de dev
}
export default App;