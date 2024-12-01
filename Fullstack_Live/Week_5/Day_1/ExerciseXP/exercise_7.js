// John has just signed in to your website and you want to welcome him.
// 
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: 
// the name of the user that just signed in.

// The function should add a div in the nabvar, 
// displaying the name of the user and his profile picture.

 (function (name) {
    navbarDOMmodule = document.getElementById("navbar");
    navbarDOMmodule.style.display = "flex";
    navbarDOMmodule.style.alignItems = "center";
    navbarDOMmodule.style.gap = "10px"

    let p = document.createElement("p");
    p.textContent = name;
    p.style.margin = "0";

    let img = document.createElement("img")
    img.setAttribute("src","https://s2-oglobo.glbimg.com/XmDOH8sa3_Rkgg20EMypmn7EE84=/0x0:1086x652/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/M/8/10JmoOSSe08sx41DevIA/fofao.jpg");
    img.style.height = "100px";
    img.style.width = "100px";
    img.style.borderRadius = "50px";

    navbarDOMmodule.appendChild(p)
    navbarDOMmodule.appendChild(img)
 })("Fofitcho_XXX_69_10_XXX")