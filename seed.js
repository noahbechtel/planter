const db = require("./models")

const Vegetable = db.model('vegetable')

db.sync({
        force: true
    })
    .then(() => {
        Vegetable.create({
                name: 'onion',
                color: 'white',
                planted_on: '10/10/18'
            })
            .finally(() => {
                db.close()
            })
    })
    .catch(err => {
        console.log(err)
            .finally(() => {
                db.close()
            })
    })



// return Vegetable.create({
//     vegetableId: carrot.id,
//     plotId: plot1.id
// })

//     {
//         name: 'carrot',
//         color: 'orange',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'radish',
//         color: 'pink',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'celery',
//         color: 'green',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'potato',
//         color: 'brown',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'artichoke',
//         color: 'green',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'bean',
//         color: 'black',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'broccoli',
//         color: 'green',
//         planted_on: '10/10/18'
//     },
//     {
//         name: 'cauliflower',
//         color: 'white',
//         planted_on: '10/10/18'
//     }




// ])