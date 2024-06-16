import { playlistStore } from "../models/playlist-store.js";

export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "Playlist 1 Dashboard",
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
async addPlaylist(request, response) {
  const newPlaylist = {
    title: request.body.title,
  };
  console.log("adding playlist ${newPlaylist.title}");
  response.redirect("/dashboard");
},
};
