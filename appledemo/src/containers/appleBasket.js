import React , {PropTypes , Component} from 'react'
import { connect } from 'react-redux'
import AppleItem from '../components/appleItem'
import '../styles/appleBasket.scss'
import {bindActionCreators} from 'redux'
import actions from '../actions/actions'
import PickApple from '../components/pickApple'
import { Button } from 'antd'
function mapStateToProps(state){
    return{
    appleList:state.appleList
    }
}
function mapDispatchToProps(dispatch){
    return {
      actions:bindActionCreators(actions,dispatch),
      dispatch

    }
}

class AppleBasket extends Component {
    constructor(props){
        super(props)
    }

  state = Object.assign({}, {
      visible: false
   }, this.props.state)

  saveFormRef = (form) => {
        this.form = form;
      }

  showModal = () =>{
      this.setState({ visible: true })
    }

  handleCancel = () => {
        this.setState({ visible: false })
      }

  handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
                if (err) {
                          return;
                        }

                this.props.actions.pickApple(values.weight);
                form.resetFields();
                this.setState({ visible: false });
              });
      }



  render(){

    let {dispatch,actions,appleList } = this.props
    const nowApple = {
      ncount:0,
      nweight:0
  }
    const eatenApple = {
      ecount:0,
      eweight:0
    }

    appleList.apples.map( (apple) => {
      if(apple.isEaten){
          eatenApple.ecount++
          eatenApple.eweight += parseInt(apple.weight)
      }else{
          nowApple.ncount++
          nowApple.nweight += parseInt(apple.weight)
      }
    })

    console.log(this.state)
    const Apple = appleList.apples.map( (apple) => {
        if(!apple.isEaten){
          return <AppleItem key={apple.id} id= {apple.id} weight={apple.weight}eat={actions.eatApple} />
        }
  })
    const {hasApple} = this.props

      return (
        <div>
        <div className='basket'>
          <header className='header'>
              <h2>苹果篮子</h2>
          </header>
          <section className='count'>
              <div className='now'>
                  <h3>当前</h3>
                  <p>{nowApple.ncount}个苹果，{nowApple.nweight}克</p>
              </div>
              <div className='eaten'>
                  <h3>已吃掉</h3>
                  <p>{eatenApple.ecount}个苹果，{eatenApple.eweight}克</p>
              </div>
          </section>
          <section className='appleitem'>
              {Apple}
          </section>
          <section className='getapple'>
              <Button type="primary" onClick={this.showModal}>摘苹果</Button>
                <PickApple
                  ref={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  onCreate={this.handleCreate}
                />
          </section>
        </div>
        </div>
      )

  }

}
export default connect(mapStateToProps,mapDispatchToProps)(AppleBasket)
