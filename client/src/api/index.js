import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export const createUser = payload => api.post(`/user`, payload)
export const getUsers = () => api.get(`/users`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)


export const validateUser = (email,password,cb) => {
  api.post(`/users/signin`, { email, password }).then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      cb(err,true);
    });
};

// since we're not generating JWT on client side!
// export const GenerateJWT = (header, claims, key, cb) => {
//   // Send request to /api/GenerateJWT
//   api.post("/GenerateJWT", { header, claims, key }).then(function(res) {
//       cb(res);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// };


export const DecodeJWT = (sJWS, cb) => {
  // Send request to /api/DecodeJWT
  api.post("/DecodeJWT", { sJWS }).then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};
export const ValidateJWT = (header, token, key, cb) => {
  // Send request to /api/ValidateJWT
  api.post("/ValidateJWT", { header, token, key }).then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const apis = {
    createUser,
    getUsers,
    validateUser,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
    // GenerateJWT,
    DecodeJWT,
    ValidateJWT
}

export default apis
