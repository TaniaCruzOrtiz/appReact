import Progress from './Progress.jsx';
import Foto from '../assets/Foto.jpeg'
import './About.css';



const About = () => (
        <>

        <div className='about--container'>
            <div>
            <div>
                <img id='foto' src = {Foto} />
            </div>
            <h2 className='about--name'>Tania Cruz Ortiz</h2>

            <h2 className='email'></h2>
            <p>
            taniacruzortiz142906@gmail.com/ 55 67 54 32 45
            </p>
            <h2 className='about__info'></h2>
            <p>
            
            Me gusta mucho estar con mi familia, compartir tiempo con mis amigos, salir al cine, ver series , <br />
            aprender actividades nuevas. Mi sueño más grande es viajar y conocer varios países. Mi comida <br />
            favorita son las enchiladas verdes, pozole y chilaquiles verdes. <br />
            Lo mejor o más bonito que le puedes regalar a una persona es el tiempo de calidad, el amor y la comprensión. <br />
            Todo esfuerzo merece su recompensa y la más grande recompensa es la satisfacción <br />
            de saber que hiciste y diste lo mejor de ti. 
            </p>
            </div>
        </div> 
        
        </>
    )
    






export default About;