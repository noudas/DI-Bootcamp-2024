//const year = document.getElementById("year");
//year.textContent = `2025`;

//const year = <HTMLSpanElement>document.getElementById("year");
//year.textContent = `2025`;

//const year = document.getElementById("year") as HTMLSpanElement;
//year.textContent = `2025`;

const year: HTMLSpanElement = document.getElementById("year")!;

const thisyear: string = new Date().getFullYear().toString()
year.textContent = thisyear;