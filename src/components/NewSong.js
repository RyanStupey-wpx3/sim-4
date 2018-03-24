import React, { Component } from 'react';
import axios from 'axios';

export default class NewSong extends Component {
    constructor(props){
        super(props)

        this.state = {
            songs: [],
            song: '',
            artist:'',
            album:'',
        }
        this.addSong = this.addSong.bind(this)
    }
    
     addSong(){
         axios.post('http://localhost:3535/api/song', {song: this.state.song, artist: this.state.artist, album: this.state.album})
         .then(() => {
             axios.get('http://localhost:3535/api/songs')
             .then((resp) => {
                 console.log('resp.data', resp.data)
                 this.setState({
                     songs: resp.data
                 })
             }).catch((err) => {console.log('err', err)})
         })
         .catch((err) => {
             console.log('err', err)
         })
     }

     
    render() {
        console.log(this.state.songs)

        return (
            <div>
                <input type="text"onChange={(e) => { this.setState({song: e.target.value})}}/> 
                <input type="text"onChange={(e) => { this.setState({artist: e.target.value})}}/> 
                <input type="text"onChange={(e) => { this.setState({album: e.target.value})}}/>
                <button onClick={() => {this.addSong()}}> add song</button> 
            </div>
        );
    }
}