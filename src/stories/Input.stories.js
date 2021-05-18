import React from 'react';

import Input from '../lib/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) =>  (
 <div>
   <div>
    <span style={{paddingLeft: '20px', fontSize: '16px'}}>Number Input</span>
    <Input
    type="number"
    help_text="Input can only be numbers" placeholder="Enter Number"/>
 </div>

 <div>
    <span style={{paddingLeft: '20px', fontSize: '16px'}}>Email Input</span>
    <Input
    type="email"
    help_text="Input can only be an email" placeholder="Enter Email"/>
 </div>
 </div>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};
