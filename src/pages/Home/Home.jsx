import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Experience the best of entertainment with our exclusive collection of movies, TV shows,
            and originals. Stream now and dive into a world of endless excitement.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <div className="title-cards">
            <TitleCards title={"Trending"} url={"https://api.themoviedb.org/3/trending/movie/day"} />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Now Playing"} url={"https://api.themoviedb.org/3/movie/now_playing"} />
        <TitleCards title={"Latest"} url={"https://api.themoviedb.org/3/movie/popular"} />
        <TitleCards title={"Top Rated"} url={"https://api.themoviedb.org/3/movie/top_rated"} />
        <TitleCards title={"Upcoming"} url={"https://api.themoviedb.org/3/movie/upcoming"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home