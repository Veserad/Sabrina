import firebase from "../firebase/firebase";
export const create = async (data) => {
  return fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const logIn = async (data) => {
  return fetch("http://localhost:3000/users//login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

// export const create = async (data)=>{
//     const response = await firebase.auth().createUserWithEmailAndPassword(data.correo, data.clave)
//     if (response){
//         await firebase.firestore().collection("usuarios").doc(response.user.uid).set({
//             nombre: data.nombre,
//             email: data.correo,
//             telefono: data.telefono,
//             userId: response.user.uid
//         })
//         return response.user.uid
//     }
// }
