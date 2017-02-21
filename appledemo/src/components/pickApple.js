import React, {PropTypes, Component} from 'react'
import { Button, Modal, Form, Input } from 'antd'
const FormItem = Form.Item
const createForm = Form.create


 class PickApple extends Component {
  constructor(props){
    super(props)
}

  render(){
      const { visible, onCancel, onCreate, form } =this.props
      const { getFieldDecorator } = form
      const formItemLayout = {
              labelCol: { span: 8 },
              wrapperCol: { span: 16 },
            };
      return (
        <div>
           <Modal
               title="pickApple"
               visible={visible}
               onOk={onCreate}
               onCancel={onCancel}>
                 <FormItem
                     {...formItemLayout}
                     label="苹果重量"
                      hasFeedback
                   >
                  {getFieldDecorator('weight', {
                    rules: [{required:true, message: 'Please input number!', }],
                              })(<Input /> )}
                 </FormItem>
             </Modal>
         </div>
      )
    }
}

export default PickApple = Form.create({})(PickApple);
