import {
    PICK_APPLE,
    EAT_APPLE
} from '../actions/actions'
const initialState = {
      isPicking: false,
      newAppleId: 2,
      apples: [
                {
                 id: 0,
                 weight: 235,
                 isEaten: false
               },
               {
                 id: 1,
                 weight: 350,
                 isEaten: false
               }

            ]
}

export default function appleList(state =initialState, action){
      let newState ;
      switch (action.type) {
       case 'PICK_APPLE':
         newState = Object.assign({}, state, { apples:[
          ...state.apples,{
            id:state.newAppleId,
            weight:action.weight,
            isEaten:false
          }
         ],
           newAppleId:state.newAppleId + 1,
           isPicking:false
         });
         return newState;


      case 'EAT_APPLE':
          newState = Object.assign({}, state, {
            apples: [
             ...state.apples.slice(0, action.id),
            Object.assign({}, state.apples[action.id], { isEaten: true }),
             ...state.apples.slice(action.id + 1)
                ]
            })
          return newState;

       default:
        return state;
   }

}

