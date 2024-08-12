import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { responseHandler } from "../utils/responseHandler.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import { pool } from "../database/database.js";
import { redis } from "../app.js";
import { RowDataPacket } from "mysql2"; // Import the RowDataPacket type from the appropriate module


// Get banners

const getBanners = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let banner;
    if (redis.has("banners")) {
      banner = await redis.get("banners");
    } else {
      const [rows] = await pool.query("SELECT * FROM banner");
      banner = rows;
      redis.set("banners", JSON.stringify(banner));
    }
    res.json(
      new responseHandler(200, "Banners fetched successfully", { banner })
    );
  }
);

// get banner by id

const getBannerById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM banner WHERE bannerId = ?", [id]);
    const banner = rows as RowDataPacket[];
    if (banner.length === 0) {
      throw new ErrorHandler("Banner not found", 404);
    }
    const response = banner[0];
    res.json(
      new responseHandler(200, "Banner fetched successfully", { response })
    );
  }
);

//toggle banner status

const toggleBannerStatus = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM banner WHERE bannerId=?", [id]);
    const response = rows as RowDataPacket[];
    if (response.length === 0) {
      throw new ErrorHandler("Banner not found", 404);
    }
    const status = !response[0].isVisible;
    await pool.query("UPDATE banner SET isVisible=? WHERE bannerId=?", [status, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner status updated successfully", {}));
  }
);

// Add banner

const addBanner = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, link, timer } = req.body;
    await pool.query("INSERT INTO banner (title, description, link, timer) VALUES (?, ?, ?, ?)", [title, description, link, timer]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner added successfully", {}));
  }
);


// update banner description

const updateBannerDescription = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE banner SET description=? WHERE bannerId=?", [
      description,
      id,
    ]);
    redis.del("banners");
    res.json(
      new responseHandler(200, "Banner description updated successfully", {})
    );
  }
);


// update banner timer

const updateBannerTimer = asyncHandler( async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { timer } = req.body;
    await pool.query("UPDATE banner SET timer=? WHERE bannerId=?", [timer, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner timer updated successfully", {}));
    }
);


// update banner link

const updateBannerLink = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { link } = req.body;
    await pool.query("UPDATE banner SET link=? WHERE bannerId=?", [link, id]);
    redis.del("banners");
    res.json(new responseHandler(200, "Banner link updated successfully", {}));
  }
);


export { getBanners, getBannerById, toggleBannerStatus, addBanner, updateBannerDescription, updateBannerTimer, updateBannerLink };