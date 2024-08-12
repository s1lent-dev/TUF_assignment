import { Router } from "express";
import { getBanners, toggleBannerStatus, addBanner, updateBannerDescription, updateBannerLink, updateBannerTimer } from "../controllers/banner.controller.js";

const bannerRouter = Router();

// Banner routes
bannerRouter.get("/", getBanners);
bannerRouter.put("/toggle-status/:id", toggleBannerStatus);
bannerRouter.post("/add", addBanner);
bannerRouter.put("/update-description/:id", updateBannerDescription);
bannerRouter.put("/update-timer/:id", updateBannerTimer);
bannerRouter.put("/update-link/:id", updateBannerLink);

export { bannerRouter };

