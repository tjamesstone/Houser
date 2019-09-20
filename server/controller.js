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
    getOneHouse: async (req, res) => {
        const db = req.app.get(db)
        let {id} = req.params
        await db.get_one_house(id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(`Problem with getting one house: ${err}`)
            res.status(500).send(`Problem with getting one house: ${err}`)
        })
    },
    addNewHouse: async (req, res) => {
        const db = req.app.get('db')
        let {img, name, address, city, state, zipcode, monthly_mortgage, desired_rent} = req.body
        let houses = db.add_new_house(img, name, address, city, state, zipcode, monthly_mortgage, desired_rent)
        let house = houses[0]
            res.status(200).send(house)
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house([id])
        .then( result => {
             res.sendStatus(200)
        })
        .catch( err => {
            console.log(`Error with deleting a  house: ${err}`)
            res.status(500).send(`Error with deleting a  house: ${err}`)
        })
        
    }
}