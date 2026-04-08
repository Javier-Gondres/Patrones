export class Playlist {
  constructor() {
    this._songs = [];
  }

  addSong(title) {
    this._songs.push(title);
  }

  createIterator() {
    return new PlaylistIterator(this._songs);
  }

  get length() {
    return this._songs.length;
  }
}

export class PlaylistIterator {
  constructor(songs) {
    this._songs = songs;
    this._index = 0;
  }

  hasNext() {
    return this._index < this._songs.length;
  }

  next() {
    if (!this.hasNext()) {
      throw new Error('No hay más canciones');
    }
    const song = this._songs[this._index];
    this._index++;
    return song;
  }
}
