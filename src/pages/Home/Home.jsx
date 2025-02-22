import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import herobanner from '../../assets/hero_banner.jpg'
import herocaption from '../../assets/hero_title.png'
import playicon from '../../assets/play_icon.png'
import infoicon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={herobanner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={herocaption} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Accusamus delectus fuga nobis est quae quia blanditiis vitae 
              debitis velit facere?</p>
              <div className="hero-btns">
                <button className='btn'><img src={playicon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={infoicon} alt="" />More Info</button>
              </div>
              <TitleCards title={"Popular On Netflix"} category={"popular"}/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
