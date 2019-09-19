module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_all_houses()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(`Problem with getting all houses: ${err}`)
            res.status(500).send(`Problem with getting all houses: ${err}`)
        })
    },
    getOneHouse: (req, res) => {
        const db = req.app.get(db)
        let {id} = req.params
        db.get_one_house(id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(`Problem with getting one house: ${err}`)
            res.status(500).send(`Problem with getting one house: ${err}`)
        })
    }
}