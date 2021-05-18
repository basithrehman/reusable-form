#### Setup
- Clone the repo.
- Run `npm install`
- Run `npx sb init`
- Run `npm run storybook`
- This will open up a UI to view details on the components being exported along with their documentations.

#### Generate Build
- Run `npm run build`
- This will generate a build file in `dist/build.js` exporting all the components for usage.

The repo uses rollup for generating exportable components and storybook for creating a UI for references.

#### Usage
- Install the package via npm 

npm install git+https://github.com:basithrehman/reusable-form.git --save

### Input
This is a input field with allowed types as number and email.

#### Usage
```
<Input
  type="text"
  help_text="This is a mandatory field"
  show_text_counter
  required />
```

#### Single Select
This is a drop down field

##### Usage
```
<SingleSelect
  options={options}
/>
```

#### EXAMPLE
Refer this repor for example implementation [repo](https://https://github.com/basithrehman/testing-reusable-form/edit/master/README.md).
