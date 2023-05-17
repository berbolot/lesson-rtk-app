import { setError, setUsers, setLoading } from "../reducers/usersSlice";

const fetchAllUsers = () => async (dispatch) => {
    dispatch(setLoading());
    try{
        const response = await fetch("http://localhost:4000/users");
        const data = await response.json();
         
        dispatch(setUsers(data));
    }catch (err) {
         dispatch(setError(err.message));
    }
};

export default fetchAllUsers;


const obAction = () => {
    return {
        payload: 1,
    };
};
const funAction = () => (dispatch) => {
    dispatch({ payload: 3 });
}

const dispatch = (action) => {
    if (typeof action === "object" ){
        console.log(action.payload + 1);
    } else if (typeof action === "function" ){
        action(dispatch);
    }
};

dispatch(obAction());
dispatch(funAction());