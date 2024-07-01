import { userStore } from "../models/user-store.js";
import { accountsController } from './accounts-controller.js';

export const editUserController = {

 async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const user = await userStore.getUserById(loggedInUser._id);

    const viewData = {
      title: "Edit user info",
      user: user
    };
    
    response.render("edit-user-view", viewData);
  },

  
  async editUser(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request) // Get user ID from URL parameter

    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
  
      console.log(`Updating User ${loggedInUser._id}`);
      
      await userStore.updateUser(loggedInUser._id,updatedUser );
      response.redirect("/dashboard/" )
    
    }
  

};
