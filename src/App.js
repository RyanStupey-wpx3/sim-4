import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewSong from './components/NewSong'
import axios from 'axios'
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      songs: [],
      expand: "content",
      aboutUsTxt: false
    }
    this.expand = this.expand.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:3535/api/songs')
    .then((resp) => {
        console.log('resp.data', resp.data)
        this.setState({
            songs: resp.data
        })
    }).catch((err) => {console.log('err', err)})
    
 }

 expand(){
   if (this.state.expand === "content"){
  this.setState({
    expand: "alter",
    aboutUsTxt: true
  })
    } else {
      this.setState({
        expand: "content",
        aboutUsTxt: false
      })
    }
  }

  render() {
    const displaySongs = this.state.songs.map((elem) => {
      <div>
          <div><h3>{elem.song}</h3></div>
          <div>{elem.artist}</div>
          <div>{elem.album}</div>
      </div>
  })
    return (
      <div className="App">
      <Header/>
          {/* <video width="720" height="540"  autoplay="autoplay" loop>
         <source src={require("./Squares.mp4")} type="video/mp4"/>
           </video> */}
            <section className={this.state.expand} onClick={this.expand}>
            <h2 className="">all about us</h2>
            <p  className={this.state.aboutUsTxt ? 'show' : 'content'}> small Solar System body whose orbit can bring it into proximity with Earth. By definition, a Solar System body is a NEO if its closest approach to the Sun (perihelion) is less than 1.3 astronomical units (AU).[2] If a NEO's orbit crosses the Earth's and the object is larger than 140 meters (m) across—about 460 feet (ft), it is considered a potentially hazardous object (PHO).[3] Most known PHOs and NEOs are asteroids.[1]</p>

              <p className={this.state.aboutUsTxt ? 'show' : 'content'}>Known NEOs include more than seventeen thousand near-Earth asteroids (NEAs), more than one hundred short-period near-Earth comets (NECs),[1] and a              number of solar-orbiting spacecraft and meteoroids, large enough to be tracked in space before striking the Earth. It is now widely accepted that             collisions in the past have had a significant role in shaping the geological and biological history of the Earth.[4] NEOs have become of increased              interest since the 1980s because of greater awareness of the potential danger some of the asteroids or comets pose, and methods of mitigation are             being researched.[5]</p>

              <p className={this.state.aboutUsTxt ? 'show' : 'content'}>Based on the orbit calculations of NEOs, the risk of future impacts is assessed on two scales, the Torino scale and the more complex Palermo scale,              both of which rate a risk of any significance with values above 0. Some NEOs have had positive initial Torino or Palermo scale ratings after             their discovery, but as of March 2018, more precise calculations based on subsequent observations led to a reduction of the rating to or below 0              in all cases.</p>

              <p className={this.state.aboutUsTxt}>Since 1998, the United States, the European Union, and other nations are scanning for NEOs in an effort called Spaceguard.[7] The initial aim of              cataloging at least 90% of NEOs that are at least 1 kilometer (km) wide—about 0.62 miles (mi), which would cause a global catastrophe in case on              an impact on Earth—had be</p>
            </section>
            <h2 className="">Contact me</h2>
          <p>Paragraph: audio embed</p>
          <audio controls>
            <source src={require("./FreshPrinceofBelAir.mp3")} type="audio/mp3"/>
          </audio>
         
          <span> this is a span</span>


        <NewSong/>
        {displaySongs}

        <footer> <h4>this is a footer :)</h4></footer>
      </div>
    );
  }
}

export default App;
