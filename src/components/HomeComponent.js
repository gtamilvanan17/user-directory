import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesComponent from './ParticlesComponent';
import TitleMessage from './TitleMessage';



export default function Home() {
    return(
        <div className='homebackground'>
            <ParticlesComponent />
            <TitleMessage/>
        </div>
    );
}