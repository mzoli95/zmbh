const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Ideiglenes felhasználói adatbázis helyettesítése
const users = [{ username: "admin", password: "admin" }];

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } else {
    res.status(401).send("Hibás felhasználónév vagy jelszó");
  }
});

// Token frissítési endpoint
router.get("/refresh", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const newToken = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token: newToken });
  });
});

module.exports = router;
