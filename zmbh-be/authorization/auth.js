const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Ideiglenes felhasználói adatbázis helyettesítése
const users = [{ username: "admin", password: "admin" }];
let refreshTokens = [];
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    const refreshToken = jwt.sign(
      {username: user.username},
      process.env.REFRESH_TOKEN_SECRET,
      {expiresIn: "1d"}
    );
    refreshTokens.push(refreshToken);
    res.json({ token, refreshToken });
  } else {
    res.status(401).send("Hibás felhasználónév vagy jelszó");
  }
});



// Regisztrációs endpoint
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Ellenőrizzük, hogy a felhasználónév már létezik-e
  if (users.some(u => u.username === username)) {
    return res.status(400).send("A felhasználónév már foglalt.");
  }

  // Új felhasználó hozzáadása
  const newUser = { username, password };
  users.push(newUser);
  res.status(201).send("Regisztráció sikeres.");
});

// Token frissítési endpoint
// router.get("/refresh", (req, res) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     const newToken = jwt.sign(
//       { username: user.username },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.json({ token: newToken });
//   });
// });

router.post("/refresh", (req, res) => {
  const { token } = req.body;
  if (!token || !refreshTokens.includes(token)) return res.sendStatus(401);

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const newToken = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );
    res.json({ token: newToken });
  });
});

router.delete("/logout", (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== token);
  res.sendStatus(204);
});

module.exports = router;
