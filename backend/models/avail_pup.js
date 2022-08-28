const db = require("../db");
const { NotFoundError } = require("../expressError");

class AvailPup{
    static async displayAvailPup(){
        const result = await db.query(
            `SELECT * FROM public.available_pup;`
        )
        return result.rows
    }
}

module.exports = AvailPup;
