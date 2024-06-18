export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "About Weather App 2",
    };
    
    response.render("about-view", viewData);
  },
};
