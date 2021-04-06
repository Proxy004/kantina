import { observable, action, makeAutoObservable } from "mobx";

export class MenuStore {
  @observable menuActive: boolean = false;
  @action setLogin = () => {
    this.menuActive = !this.menuActive;
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export const menuStore = new MenuStore();
