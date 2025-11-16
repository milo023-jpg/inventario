import getConnection from "../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");

        res.json(rows)
    } catch (error) {
        console.error("Error:");
    }
    
}

export const methodHTTP = {
    getCategorias
};