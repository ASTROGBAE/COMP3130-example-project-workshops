import React from 'react';
import { Dimensions} from "react-native";
import renderer from 'react-test-renderer';
// component imports
import AppImage from './components/AppImage';
import DataManager from './config/DataManager';

// sample date to use...
let data = DataManager.getInstance().memories[0];

// Regression test for the functionality of the image component with relation to sample data.

test('No parameters returns null', () => {
  const image = renderer.create(<AppImage />).toJSON();
  expect(image).toBe(null);
});

test('Image only returns null', () => {
  const image = renderer.create(<AppImage 
    image={data['image']}
  />).toJSON();
  expect(image).toBe(null);
});

test('Title only returns null', () => {
  const image = renderer.create(<AppImage 
    title={data['title']}
  />).toJSON();
  expect(image).toBe(null);
});

test('Title only returns null', () => {
  const image = renderer.create(<AppImage 
    title={data['title']}
  />).toJSON();
  expect(image).toBe(null);
});

// test('No parameters returns null', () => {
//   let imageClicked = false;
//   const image = renderer.create(
//     <AppImage 
//         image={item.image} 
//         title={item.title} 
//         date={data.getDateString(item.id)}
//         type = 'Big'
//         onPress={() => imageClicked = true}/>
//   ).toJSON();
//   expect(1).toBe(1);
// });