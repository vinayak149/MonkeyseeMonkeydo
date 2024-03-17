export class UserInfo {
  _user;

  constructor(key) {
    super(key);

    const userStr = localStorage.getItem("user");
    const userObj = JSON.parse(userStr);
    this._user = userObj;
  }

  getRole() {
    return this._user.role;
  }

  getId() {
    return this._user.id;
  }
}