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
    <span>Number Input</span>
    <div style={{marginTop: '10px'}}>
    <Input
    type="number"
    help_text="Input can only be numbers" placeholder="Enter Number"/>
    </div>
 </div>

 <div style={{marginTop: '20px'}}>
    <span>Email Input</span>
    <div style={{marginTop: '10px'}}>
    <Input
    type="email"
    help_text="Input can only be an email" placeholder="Enter Email"/>
    </div>
 </div>
 </div>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};
