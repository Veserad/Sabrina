import firebase from "../firebase/firebase"
export const create = async (data)=>{
    const response = await firebase.auth().createUserWithEmailAndPassword(data.correo, data.clave)
    if (response){
        await firebase.firestore().collection("usuarios").doc(response.user.uid).set({
            nombre: data.nombre,
            email: data.correo,
            telefono: data.telefono,
            userId: response.user.uid
        })
        return response.user.uid
    }
}