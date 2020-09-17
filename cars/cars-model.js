const db = require('../data/dbconfig')

async function insert(car) {
    return db('cars')
        .insert(car, "id")
        .then(([id]) => {
            return findById(id)
        })
}

function findById(id) {
    return db('cars')
        .where({ id })
        .first()
}