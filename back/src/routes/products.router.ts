import { Router } from "express";
import { getProductBiId, getProducts } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductBiId);

export default router;
