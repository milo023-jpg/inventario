import { Router } from 'express';
import { methodHTTP as categoriasController } from '../controllers/categorias.controller.js';

const router = Router();

// HTTP GET
router.get("/api/categorias", categoriasController.getCategorias);

export default router;