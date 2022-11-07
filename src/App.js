import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { featuredImages } from './assets/data/featured-images';
import MainMobile from './components/MainMobile/MainMobile';

const App = () => {
    const isMobileView = window.innerWidth <= 767;

    console.log(isMobileView);

    return (
        <div className='App_wrapper'>
            {isMobileView ? (
                <MainMobile images={featuredImages} />
            ) : (
                <Main images={featuredImages} />
            )}
            <Footer numImages={featuredImages.length} />
        </div>
    );
};

export default App;
