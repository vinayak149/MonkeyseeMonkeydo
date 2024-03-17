export class UserInfo {
    _user;
  
    constructor() {
      const userStr = localStorage.getItem("user");
  
      // Check if userStr is not undefined before parsing it
      if (userStr !== undefined) {
        try {
          const userObj = JSON.parse(userStr);
          this._user = userObj;
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      } else {
        console.error("User data not found in localStorage.");
      }
    }
  
    getRole() {
      return this._user ? this._user.role : null;
    }
  
    getId() {
      return this._user ? this._user.id : null;
    }
  }
  