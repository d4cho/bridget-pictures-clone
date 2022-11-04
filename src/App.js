import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { featuredImages } from './assets/data/featured-images';

const App = () => {
    return (
        <div className='App_wrapper'>
            <Main images={featuredImages} />
            <Footer numImages={featuredImages.length} />
        </div>
    );
};

export default App;
