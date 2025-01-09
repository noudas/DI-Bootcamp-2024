import ListItem, { Item } from "./ListItem";

export interface List {
  list: ListItem[];
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
  load(): void;
  save(): void;
  clearList(): void;
}

export default class FullList implements List {
  private _list: ListItem[];
  static instance: FullList = new FullList(); // singleton pattern

  constructor(list: ListItem[] = []) {
    this._list = list;
  }

  get list(): ListItem[] {
    return this._list;
  }
  // add
  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  //remove
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    // let itemIndx = this._list.findIndex(item => item.id === id)
    // this._list.splice(itemIndx, 1)
    this.save();
  }
  // load from localStorage
  load(): void {
    const storedList: string | null = localStorage.getItem("mylist");
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      //   this.addItem(newListItem)
      this._list.push(newListItem);
    });
  }
  //save
  save(): void {
    localStorage.setItem("mylist", JSON.stringify(this._list));
  }
  //clear
  clearList(): void {
    this._list = [];
    this.save();
  }
}
