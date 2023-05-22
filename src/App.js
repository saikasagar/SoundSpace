import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MusicApp = () => {
  const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', poster: 'poster1.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', poster: 'poster2.jpg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', poster: 'poster3.jpg' },
    // Add more songs as needed
  ];

  return (
    <div className="container">
      <h1 className="text-center">My Music App</h1>
      <div className="row">
        {songs.map((song) => (
          <div className="col-md-4" key={song.id}>
            <div className="card">
              <img
                src={song.poster}
                alt={`${song.title} Poster`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{song.title}</h5>
                <p className="card-text">{song.artist}</p>
                <button className="btn btn-primary">Play</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicApp;
