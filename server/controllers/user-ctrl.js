
const User = require('../models/user-model')
const { GenerateJWT, DecodeJWT, ValidateJWT } = require('./dec-enc.js');


createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

// updateMovie = async (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     Movie.findOne({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'Movie not found!',
//             })
//         }
//         movie.name = body.name
//         movie.time = body.time
//         movie.rating = body.rating
//         movie
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: movie._id,
//                     message: 'Movie updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'Movie not updated!',
//                 })
//             })
//     })
// }

// deleteMovie = async (req, res) => {
//     await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!movie) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }

//         return res.status(200).json({ success: true, data: movie })
//     }).catch(err => console.log(err))
// }

// getMovieById = async (req, res) => {
//     await Movie.findOne({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!movie) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }
//         return res.status(200).json({ success: true, data: movie })
//     }).catch(err => console.log(err))
// }

getUsers = async (req, res) => {
    await User.find((err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}



validateUser = (req, res) => {
    const {email, password} = req.body

    User.findOne({}, function(err, result) {
            console.log(result)
            if (result === undefined) {
                return res.status(400).json({
                    success: false,
                    error: 'E-mail is not Registered! Please Sign Up!',
                })
            }
            if (password === result.password) {
                
                const claims = {
                  email,
                  password
                };

                const header = {
                  alg: "HS512",
                  typ: "JWT"
                };
                return res.status(200).json({
                    success: true,
                    message: 'Successfully Signed In!',
                    JWT: GenerateJWT(header, claims, "thisisdefaultkey"),
                })
            }
            else {
                return res.status(400).json({
                    success: false,
                    error: 'Wrong Password!',
                })
            }
        })         
}



module.exports = {
    createUser,
    // updateMovie,
    // deleteMovie,
    getUsers,
    // getMovieById,
    validateUser,
}