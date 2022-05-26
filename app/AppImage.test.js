import React from 'react';
import { Dimensions} from "react-native";
import renderer from 'react-test-renderer';
// component imports
import AppImage from './components/AppImage';
import DataManager from './config/DataManager';

// sample date to use...
let data = DataManager.getInstance().getMemory(0);
data.image = 0; // mock image coordinate for testing

// Regression test for the functionality of the image component with relation to sample data.

test('No parameters returns null', () => {
  const json = renderer.create(<AppImage />).toJSON();
  expect(json).toBe(null);
});

test('A basic small image will display correctly', () => {
  let pressed = false;
  const json = renderer.create(<AppImage 
    title={data.title}
    image={data.image}
    type={'Small'}
    onPress={() => pressed=true}
  />).toJSON();
  expect(json).toBeTruthy(); // returned component is not null
  // image component testing
  const imageComponent = json.children[0].children[0] // get image component JSON
  expect(imageComponent.type).toBe('Image'); // image component exists
  expect(imageComponent.props.source).toBe(data.image); // image source matches
  // text component testing
  const textComponent = json.children[0].children[1] // get text component JSON
  expect(textComponent.children[0].children[0]).toBe(data.title); // title string matches
});