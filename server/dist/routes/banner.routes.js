import { Router } from "express";
import { getTimer, getBanners, getBannerById, toggleBannerStatus, addBanner, updateBannerTitle, updateBannerDescription, updateBannerLink, updateBannerTimer } from "../controllers/banner.controller.js";
import { setInitialTimerState } from "../middlewares/timer.middleware.js";
const bannerRouter = Router();
// Banner routes
bannerRouter.get("/get-timer", getTimer);
bannerRouter.get("/getAll", getBanners);
bannerRouter.get("/get/:id", getBannerById);
bannerRouter.put("/toggle-status/:id", toggleBannerStatus);
bannerRouter.post("/add", setInitialTimerState, addBanner);
bannerRouter.put("/update-title/:id", updateBannerTitle);
bannerRouter.put("/update-description/:id", updateBannerDescription);
bannerRouter.put("/update-timer/:id", setInitialTimerState, updateBannerTimer);
bannerRouter.put("/update-link/:id", updateBannerLink);
export { bannerRouter };
