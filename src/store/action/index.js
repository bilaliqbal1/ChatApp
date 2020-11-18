import firebase from '../../config/firebase'
// import {useHistory} from 'react-router-dom'
// import firebase from 'firebase'
// const set_data = (data) =>{
//     return (dispatch) =>{
//         console.log(data)
//         //object me type setdate dosri property set data he
//         dispatch ({ type :"SETDATE", payload:{name:"bilal" , email:"bilal@gmail.com"}})
//     }
// }

const facebookLogin = (history) => {
    // console.log("okay")
    return (dispatch) =>{
        var provider = new firebase.auth.FacebookAuthProvider();
        // provider.setCustomParameters({
        //     'display': 'popup'
        //   });
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            let createUser = {
                user: user.displayName,
                email : user.email,
                profile : user.photoURL,
                uid : user.uid
            }
            console.log("user",createUser)
            // set https = true in command line


            firebase.database().ref('/').child(`users/${user.uid}`).set(createUser)
            .then(()=>{
                dispatch({type:"SETUSER",payload: createUser})
                alert("successfully login")
                history.push('/Chat')
            })
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage)
          });
    }
}

const getUsers = () => {
    return (dispatch) =>{
        let users = [];
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
                // console.log("firebase data",data.val())
                users.push(data.val())
        })
        // console.log(users)
        dispatch({type:"SETFIREBASEUSERS",payload: users})
    }
}


//
export {
    // set_data,
    facebookLogin,
    getUsers,
}