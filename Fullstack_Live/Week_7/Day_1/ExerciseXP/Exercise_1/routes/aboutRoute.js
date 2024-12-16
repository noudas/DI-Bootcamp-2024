// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. 
// Inside the routes directory, create a JavaScript file (e.g., index.js) where you will define your routes using express.Router():

const express = require("express");
const { Router } = require("express");

const { getAllAboutMe, getAllProfessionalSummary, getAllTechs } = require("../controller/aboutController.js");

const router = Router();

router.get("/all", getAllAboutMe);

module.exports = router;