import * as authAction from "./action";

export const registerReq = () => {
    return {
        type: authAction.SIGN_UP_REQUEST,
    };
};
export const registerFail = (err) => {
    return {
        type: authAction.SIGN_UP_FAILED,
        payload: err.message,
    };
};
export const registerSuc = () => {
    return {
        type: authAction.SIGN_UP_SUCCESS,
    };
};

const removeError = () => {
    return {
        type: authAction.REMOVE_ERROR,
    };
};
export const register = (userData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(registerReq());
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(userData.email, userData.password)
            .then(async(data) => {
                const res = await firestore.collection("users").doc(data.user.uid).set({
                    email: userData.email,
                    resumeIds: [],
                });
                //success
                dispatch(registerSuc());
            })
            .catch((err) => {
                dispatch(registerFail(err));
                setTimeout(() => {
                    dispatch(removeError());
                }, 2000);
            });
    };
};

//signin

export const signinReq = () => {
    return {
        type: authAction.SIGN_IN_REQUEST,
    };
};
export const signinFail = (err) => {
    return {
        type: authAction.SIGN_IN_FAILED,
        payload: err.message,
    };
};
export const signinSuc = () => {
    return {
        type: authAction.SIGN_IN_SUCCESS,
    };
};

// const removeError = () => {
//     return {
//         type: authAction.REMOVE_ERROR
//     }
// }
export const signin = (userData) => {
    return async(dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(signinReq());
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
            dispatch(signinSuc());
        } catch (err) {
            dispatch(signinFail(err));
            setTimeout(() => {
                dispatch(removeError());
            }, 2000);
        }
    };
};

//signout
export const signout = () => {
    return async(dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: authAction.SIGN_OUT_SUCCESS })
        }).catch((err) => {
            dispatch({ type: authAction.SIGN_OUT_FAILED, payload: err })
            setTimeout(() => {
                dispatch(removeError());
            }, 2000);
        })
    };
};