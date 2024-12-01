// Create a self invoking function that takes 4 arguments: 
// number of children, 
// partner’s name, 
// geographic location,
// job title.

// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (number_of_children, partner_name, location, job) {
    let bodyDOMmodule = document.getElementsByTagName("body")[0];
    let h1 = document.createElement("h1");
    h1.textContent = `You will be a ${job} in ${location}, and married to ${partner_name} with ${number_of_children} kids.`;
    bodyDOMmodule.appendChild(h1);
})(8976,"Josicreublington","Northen Ireland","Extreme Underwear Tester");