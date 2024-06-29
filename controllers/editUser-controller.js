import { userStore } from "../models/user-store";

export const editUserController = {
  index(request, response) {
    const viewData = {
      title: "Edit user info",
    };
    
    response.render("edit-user-view", viewData);
  },

  
  async editUser(request, response) {
    const userid = request.params._id;
  
    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
  
      console.log(`Updating User ${userid}`);
      const update = await userStore.getUserById(userid);
      await userStore.updateUser(update,updatedUser );
      response.redirect("/dashboard/" )
    
    }
  

};
