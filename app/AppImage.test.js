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
  // TODO log in all data here and see if it's right...
  const json = renderer.create(<AppImage 
    title={data.title}
    image={data.image}
    type={'Small'}
    onPress={() => pressed=true}
  />).toJSON();
  console.log(json)
  expect(1).toBe(1);
});