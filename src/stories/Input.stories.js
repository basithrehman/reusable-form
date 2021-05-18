import React from 'react';

import Input from '../lib/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};
