const window_status = {
   window_width: null
}

let window_size = (state = window_status, action) => {
   if (action.type === 'SMALL_WINDOW'){
      return state = 'small'
   } else if (action.type === 'BIG_WINDOW'){
      return state = 'big'
   } else {
      return state = null
   }
}

export default window_size;