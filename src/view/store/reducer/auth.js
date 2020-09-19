let auth_state = {
   logged_in: false
}

const auth_reducer = (state = auth_state, action) => {
   if (action.type === 'LOGGED_IN'){
      return state = true
   } else if (action.type === 'LOGGED_OUT'){
      return state = false
   } else {
      return state = false
   }
}

export default auth_reducer;