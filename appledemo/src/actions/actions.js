export const PICK_APPLE = 'PICK_APPLE'
export const EAT_APPLE = 'EAT_APPLE'

let actions = {

  pickApple: (weight) => ({
    type:'PICK_APPLE',
    weight
  }),

  eatApple : (id) => ({
    type:'EAT_APPLE',
    id
  })
}

export default actions
