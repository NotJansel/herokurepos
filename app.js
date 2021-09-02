const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello Bitch!");
});

app.listen(PORT, () => {
    console.log(`App runs on port ${PORT}`);
})