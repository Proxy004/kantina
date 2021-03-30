import { observable, action, makeAutoObservable } from "mobx";

export class AuthStore {
  @observable user: any = undefined;
  @observable loggedIn: boolean = false; //false

  @observable authorizedUploader = false;

  @action setUser: (user: any) => void = (user: any) => {
    this.user = user;
  };

  @action setLoggedIn: (value: any) => void = (value: any) => {
    this.loggedIn = value;
  };

  @action login = () => {
    this.loggedIn = true;
  };

  @action logout = () => {
    this.loggedIn = false;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const authStore = new AuthStore();
