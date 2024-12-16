const { aboutMe, professionalSummary, technologies } = require("../data/about");

const getAllAboutMe = (req, res) => {
    res.json(aboutMe);
};

const getAllProfessionalSummary = (req, res) => {
    res.json(professionalSummary);
};

const getAllTechs = (req, res) => {
    res.json(technologies);
};

module.exports = {
    getAllAboutMe,
    getAllProfessionalSummary,
    getAllTechs,
};
