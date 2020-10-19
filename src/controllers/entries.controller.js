//Simular base de datos
const entries = [];

// controlador.

const renderIndex = (req, res) => {
    res.render('index', {entries});
}

const renderNewEntries = (req, res) => {
    res.render('new-entry')
}

const createNewEntries = (req, res) => {
    const newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    };
    entries.push(newEntry);
    res.redirect('/')
};

module.exports = {
    renderIndex,
    renderNewEntries,
    createNewEntries
}