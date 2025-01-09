import ListItem, { Item } from "./ListItem";

export interface List {
    list: ListItem[];
    addItem(itemObj: ListItem): void;
    removeItem(id: string): void;
    load(): void;
    save(): void;
    clearList(): void;
}

interface ParsedListItem {
    _id: string;
    _item: string;
    _checked: boolean;
}

export default class FullList implements List {
    private _list: ListItem[];
    static instance: FullList = new FullList(); // Singleton Pattern

    constructor(list: ListItem[] = []) {
        this._list = list;
    }

    get list(): ListItem[] {
        return this._list;
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }

    load(): void {
        const storeList: string | null = localStorage.getItem("myList");
        if (typeof storeList !== "string") return;

        const parsedList: ParsedListItem[] = JSON.parse(storeList);

        parsedList.forEach((itemObj) => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            this._list.push(newListItem);
        });
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    clearList(): void {
        this._list = [];
        this.save();
    }
}
