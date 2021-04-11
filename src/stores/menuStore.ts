import { observable, action, makeAutoObservable } from "mobx";

export class MenuStore {
  @observable menuActive: boolean = false;
  @observable profileActive: boolean = false;
  @action setProfile = () => {
    this.profileActive = !this.profileActive;
  };
  @action setMenu = () => {
    this.menuActive = !this.menuActive;
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export const menuStore = new MenuStore();
