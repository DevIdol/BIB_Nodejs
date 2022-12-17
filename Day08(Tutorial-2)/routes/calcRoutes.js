const express = require("express");
const router = express.Router();

//Sum
router.get("/sum/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;
    res.json({
        message: `Sum of ${num1} + ${num2}`,
        value: `${num1 + num2}`
    });
});

//Subtract
router.get("/sub/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;
    res.json({
        message: `Subtract of ${num1} - ${num2}`,
        value: `${num1 - num2}`,
    });
});

//Multiply
router.get("/mul/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;
    res.json({
        message: `Multipy of ${num1} * ${num2}`,
        value: `${num1 * num2}`,
    });
});

//Divide
router.get("/div/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;
    res.json({
        message: `Divide of ${num1} / ${num2}`,
        value: `${num1 / num2}`
    });
});

//Modulo
router.get("/mod/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;
    res.json({
        message: `Modulo of ${num1} % ${num2}`,
        value: `${num1 % num2}`
    });
});

//Area of Cicle
router.get("/cicle/:radius", (req, res) => {
    const PI = Math.PI;
    const radius = +req.params.radius;
    res.json({
        message: `Area of Cicle (Radius: ${radius})`,
        value: `${PI * radius ** 2}`
    });
});


//Feet Inches to CM Converter
router.get("/conversion/:feet/:inch", (req, res) => {
    const feet = +req.params.feet;
    const inch = +req.params.inch;
    const cm = feet * 30.48 + inch * 2.54;
    res.json({
        message: `${feet}feet + ${inch}inches to CM Conversion`,
        value: `${cm}cm`,
    });
});

module.exports = router;
