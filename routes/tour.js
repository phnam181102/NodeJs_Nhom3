var express = require("express");
var router = express.Router();
const tourController = require("../controllers/tour");

/* VIEW. */
router.get("/", tourController.viewListTour);
router.get("/quanly-tour", tourController.viewQLTour);
router.get("/add-tour", tourController.viewAddTour);
router.get("/update-tour/:id", tourController.viewUpdateTour);
router.get("/:slug", tourController.viewDetailsTour);
router.post("/search", tourController.viewfindTour);

/* API */
router.get("/api/list", tourController.apiListTour);
router.post("/api/add", tourController.apiAddTour);
router.post("/api/update/:id", tourController.apiUpdateTour);
router.delete("/api/delete/:id", tourController.apiDeleteTour);

module.exports = router;