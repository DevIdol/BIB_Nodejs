"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MovieModel_1 = __importDefault(require("../models/MovieModel"));
const MovieController_1 = require("../controllers/MovieController");
const Error_1 = require("../utils/Error");
const router = express_1.default.Router();
// new article form
router.get("/add", function (req, res) {
    res.render("add_movies");
});
// Edit From
router.get("/edit/:id", async (req, res, next) => {
    try {
        const movie = await MovieModel_1.default.findById(req.params.id);
        res.render("edit_movies", {
            movie: movie,
        });
    }
    catch (error) {
        next((0, Error_1.createError)(500, "Something Wrong!"));
    }
});
router.get("/", MovieController_1.getMovies);
router.post("/", MovieController_1.createMovie);
router.post("/:id", MovieController_1.updateMovie);
router.delete("/:id", MovieController_1.deleteMovie);
router.get("/:id", MovieController_1.findMovie);
exports.default = router;
//# sourceMappingURL=MovieRoute.js.map