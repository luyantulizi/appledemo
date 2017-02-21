import React ,{PropTypes,Component} from 'react'
import image from '../images/apple.png'
import '../styles/appleItem.scss'

export default class AppleItem extends Component {
  constructor(props){
    super(props)
  }


   render(){
    let {id,eat,weight} = this.props

         return (
          <div>
              <div className='anapple'>
                  <figure>
                      <img src={image}/ >
                      <hgroup>
                          <h3>红苹果-{id}号</h3>
                          <p>{weight}克</p>
                      </hgroup>
                  </figure>
                  <button onClick={()=>eat(id)}>吃掉</button>
              </div>
          </div>
      )
  }
}
