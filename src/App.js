//process.env.PUBLIC_URL
//import logo from process.env.PUBLIC_URL+'chomik_rys.jpg';
//import logo from './chomik_rys.jpg';
import './App.css';

import Dropdown from 'react-bootstrap/Dropdown';

function App() {






  //<img src={logo} className="App-logo" alt="logo" />
  //<img src={process.env.PUBLIC_URL + "images/chomik_rys.jpg"} />
  //<!--<img src="https://upload.wikimedia.org/wikipedia/en/6/64/The-Days-Nights-EP-by-Avicii.jpg" alt="" />-->
  //<input class="volume-slider" type=range min=0 max=100 value=0 id=fader step=1 oninput="outputUpdate(value)">

  return (
    <div className="App">
      <header className="App-header">



        <div class="container">
          <div class="top">
            <div class="menu float-r">
              <a href="#"><span></span></a>
              <a href="#"><span></span></a>
              <a href="#"><span></span></a>
            </div>
          </div>

          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



          <div class="side-menu">
            <a href="#" class="close"><i class="fa fa-angle-left"></i></a>
            <ul>
              <li><a href="#" class="side-search"><i class="fa fa-search fa-fw"></i> Search</a></li>
              <li class="active"><a href="#" class="side-currently-playing"><i class="fa fa-headphones fa-fw"></i> Currently Playing</a></li>
              <li><a href="#" class="side-popular-music"><i class="fa fa-list-ol fa-fw"></i> Popular Music</a></li>
              <li><a href="#" class="side-your-playlist"><i class="fa fa-music fa-fw"></i> Your Playlists</a></li>
              <li><a href="#" class="side-your-profile"><i class="fa fa-user fa-fw"></i> Your Profile</a></li>
              <li><a href="#" class="side-settings"><i class="fa fa-cog fa-fw"></i> Settings</a></li>
            </ul>
            <div class="side-menu-background"></div>
          </div>
          <div class="center">
            <div class="nav">
              <a href="#" class="side-menu-trigger"><i class="fa fa-bars"></i></a>
            </div>
            <div class="cover">

              <div class="jcarousel">
                <ul>
                  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/bmth-tts.jpg" alt="" /></li>
                </ul>
              </div>


            </div>
            <ul class="jcarousel-pagination"></ul>
            <div class="info">
              <div class="name">
                <h3 class="song">The Nights</h3>
                <p class="artist">Avicii</p>
              </div>
            </div>
          </div>
          
          <div class="bottom">
            <div class="action">
              <a href="#" class="previous jcarousel-prev"><i class="fa fa-step-backward"></i></a>
              <a href="#" class="play"><i class="fa fa-play fa-fw"></i></a>
              <a href="#" class="next jcarousel-next"><i class="fa fa-step-forward"></i></a>
            </div>
            <div class="length">
              <label for="fader">1:00</label>
              <input type="range" min="0" max="100" value="40" id="fader" step="1"></input>
              <output for="fader" class="duration"></output>
            </div>
            <div class="options">
              <a href="#" class="shuffle active"><i class="fa fa-random"></i></a>
              <a href="#" class="replay"><i class="fa fa-refresh"></i></a>
              <a href="#" class="volume"><i class="fa fa-volume-up"></i></a>
              <a href="#" class="favorite active"><i class="fa fa-heart"></i></a>
            </div>
            <div class="volume-slider">
              <a href="#" class="close"><i class="fa fa-chevron-down"></i></a>
              <div class="volume-slider-inner">
                <i class="fa fa-volume-down"></i>

                <i class="fa fa-volume-up"></i>
              </div>
            </div>
          </div>
        </div>

        <audio class="audio-avalanche" src="http://emilcarlsson.se/assets/bring-me-the-horizon-avalanche.mp3" type="audio/mpeg">
          Your browser does not support the audio tag!
        </audio>

        <audio class="audio-dont-look-down" src="http://emilcarlsson.se/assets/Martin Garrix feat. Usher - Don't Look Down (Lyric Video).mp3" type="audio/mpeg">
          Your browser does not support the audio tag!
        </audio>

        <audio class="audio-the-nights" src="http://emilcarlsson.se/assets/Avicii - The Nights.mp3" type="audio/mpeg">
          Your browser does not support the audio tag!
        </audio>


      </header>
    </div>




  );
}

export default App;
