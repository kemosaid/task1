function index(req, res) {
    const students = ["kemo", "amr", "medo", "ziyad","hesham"]

    res.render("index.ejs", {
        students: students
    }
    )
}
module.exports = {
    index
}