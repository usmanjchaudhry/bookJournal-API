import express from 'express'
import { getBook, addBook, deleteBook   } from '../controllers/book.js'

const router = express.Router()

router.get("/:id", getBook)
router.post("/",addBook)
router.delete("/:id",deleteBook)



export default router