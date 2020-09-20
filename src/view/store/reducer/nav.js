const { bindActionCreators } = require("redux")

let nav_status = {
   show_nav: false
}

const small_nav = (state = nav_status, action) => {
   if (action.type === 'OPEN_NAV'){
      return {
         ...state,
         show_nav: true
      }
   } else {
      return {
         ...state,
         show_nav: false
      }
   }
}

export default small_nav;