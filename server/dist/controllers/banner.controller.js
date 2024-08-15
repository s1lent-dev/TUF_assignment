import { asyncHandler } from "../utils/asyncHandler.js";
import { responseHandler } from "../utils/responseHandler.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import { pool } from "../database/database.js";
import { redis } from "../app.js";
import { timerState } from "../utils/countDownHandler.js";
// get Timer 
const getTimer = asyncHandler(async (req, res, next) => {
    let newTimerState = {
        hours: "00",
        minutes: "00",
        seconds: "00",
    };
    if (timerState.hours !== "00" || timerState.minutes !== "00" || timerState.seconds !== "00") {
        newTimerState = timerState;
    }
    res.json(new responseHandler(200, "Timer fetched successfully", { TimerState: newTimerState }));
});
// Get banners
const getBanners = asyncHandler(async (req, res, next) => {
    let banner;
    if (redis.has("banners")) {
        banner = await redis.get("banners");
    }
    else {
        const [rows] = await pool.query("SELECT * FROM banners");
        banner = rows;
        redis.set("banners", JSON.stringify(banner));
    }
    res.json(new responseHandler(200, "Banners fetched successfully", { banner }));
});
// get banner by id
const getBannerById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM banners WHERE bannerId = ?", [id]);
    const banner = rows;
    if (banner.length === 0) {
        throw new ErrorHandler("Banner not found", 404);
    }
    const response = banner[0];
    res.json(new responseHandler(200, "Banner fetched successfully", { response }));
});
//toggle banner status
const toggleBannerStatus = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM banners WHERE bannerId=?", [id]);
    const response = rows;
    if (response.length === 0) {
        throw new ErrorHandler("Banner not found", 404);
    }
    const status = !response[0].isVisible;
    await pool.query("UPDATE banners SET isVisible=? WHERE bannerId=?", [status, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner status updated successfully", {}));
});
// Add banner
const addBanner = asyncHandler(async (req, res, next) => {
    const { bannerId, title, description, link, timer, isVisible } = req.body;
    await pool.query("INSERT INTO banners (bannerId, title, description, link, timer, isVisible) VALUES (?, ?, ?, ?, ?, ?)", [bannerId, title, description, link, timer, isVisible]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner added successfully", {}));
});
// update banner title
const updateBannerTitle = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title } = req.body;
    await pool.query("UPDATE banners SET title=? WHERE bannerId=?", [title, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner title updated successfully", {}));
});
// update banner description
const updateBannerDescription = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE banners SET description=? WHERE bannerId=?", [
        description,
        id,
    ]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner description updated successfully", {}));
});
// update banner timer
const updateBannerTimer = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { timer } = req.body;
    await pool.query("UPDATE banners SET timer=? WHERE bannerId=?", [timer, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner timer updated successfully", {}));
});
// update banner link
const updateBannerLink = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { link } = req.body;
    await pool.query("UPDATE banners SET link=? WHERE bannerId=?", [link, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner link updated successfully", {}));
});
export { getTimer, getBanners, getBannerById, toggleBannerStatus, addBanner, updateBannerTitle, updateBannerDescription, updateBannerTimer, updateBannerLink };
