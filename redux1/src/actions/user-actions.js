export const UPDATE_USER = 'UPDATE_USER'
export function updateUser(newUSer){
    return {
        type: UPDATE_USER,
        payload:{user:newUSer}
    }
}