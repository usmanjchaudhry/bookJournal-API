import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const getBook = (req, res) => {
  const userId = req.params.id
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    console.log(userId)

    const q = `
      SELECT title, author, cover
      FROM sys.Books
      WHERE userId = ?
    `;
    const values = [userId];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json(data);
    });
  });
};

export const addBook = (req,res)=>{
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    
      const q =
        "INSERT INTO sys.Books(`title`, `author`, `cover`,`userId`) VALUES (?)";
  
      const values = [
        req.body.title,
        req.body.author,
        req.body.cover,
        userInfo.id
    ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Book has been created.");
      });
});
}

export const deleteBook = (req,res)=>{
    res.json("from controller")
}