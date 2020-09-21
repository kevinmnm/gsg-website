
let nav_status = {
   show_nav: false
}

const small_nav = (state = nav_status, action) => {
   if (action.type === 'OPEN_NAV') {
      return state = true
   } else {
      return state = false
   }
}

export default small_nav;