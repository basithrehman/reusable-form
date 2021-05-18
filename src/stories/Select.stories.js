import React from 'react';
import SingleSelect from '../lib/components/SingleSelect';


export default {
  title: 'Example/SingleSelect',
  component: SingleSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const Template = (args) => (
  <div>
    <span>Singel Select - No Validation</span>
      <div style={{marginTop: '10px'}}>
      <SingleSelect options={options}/>
      </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'SingleSelect',
};
