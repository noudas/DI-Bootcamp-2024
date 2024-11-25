const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
  
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

let stringy = '';

for (let key in details){
    stringy += key + ' ' + details[key] + ' '
}
console.log(stringy);
