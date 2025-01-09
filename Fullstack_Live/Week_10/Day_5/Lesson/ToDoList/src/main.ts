import './style.css'

import FullList from './model/FullList'
import listItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'
import {v4 as uuidv4} from 'uuid'

const initApp = (): void =>{
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (e: SubmitEvent) : void =>{
    e.preventDefault();

    // get value from the input
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if(!newEntryText) return;

    // create a new ListItem
    const newItem = new listItem(uuidv4(), newEntryText, false);
    fullList.addItem(newItem);
    template.render(fullList);
  });

  const clearList = document.getElementById('clearItemsButton') as HTMLButtonElement;
  clearList.addEventListener("click", () =>{
    fullList.clearList();
    template.clear();
  })

  fullList.load();
  template.render(fullList);
}

initApp();