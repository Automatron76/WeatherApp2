import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("playlists");

export const playlistSTore = {
  async getAllPlaylists() {
    await db.read();
    return db.data.playlists;
  },
  
  async addPlaylist(playlist) {
    await db.read();
    playlist._id= v4();
    db.data.playlist.push(playlist);
    await db.write();
    return playlist;
  },
  
  async getPlaylitById(id) {
    await db.read();
    const list = db.data.playlist.find((playlist) => playlist._id ===id);
    return list;
  },
  
   async deletePlaylistById(id) {
    await db.read();
    const index = db.data.playlists.findIndex((playlist) => playlist._id === id);
    db.data.playlists.splice(index, 1);
    await db.write();
  },

  async deleteAllPlaylists() {
    db.data.playlists = [];
    await db.write();
  },
};