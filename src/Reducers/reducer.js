export default function reducer(state, action) {
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                users: action.payload
            };
        case "ADD":
            const addUser = [...state.users, action.payload]
            return {
                ...state,
                users: addUser
            };            
        case "EDIT":
            return {
                ...state,
                currentUser: action.payload
            };
        case "UPDATE":
            const updateUser = { ...action.payload };
            const updateUserIndex = state.users.findIndex(
                t => t.id === state.currentUser.id
            );
            const updateUsers = [
                ...state.users.slice(0, updateUserIndex),
                updateUser,
                ...state.users.slice(updateUserIndex + 1)
            ];
            return {
                ...state,
                currentUser: {},
                users: updateUsers
            };
        case "REMOVE":
            const removeUsers = state.users.filter(t => t.id !== action.payload.id);
            const isRemoveUsers = state.currentUser.id === action.payload.id ? {} : state.currentUser;
            return {
                ...state,
                currentUser: isRemoveUsers,
                users: removeUsers
            }
        default:
            return state;
    }
}