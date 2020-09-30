/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {Color} from '@react-stately/color';
import {ColorThumb} from '../src/ColorThumb';
import {ColorWheel} from '../';
import {Flex} from '@adobe/react-spectrum';
import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('ColorThumb', module)
  .add(
    'default',
    () => <ColorThumb value={new Color('#f00')} />
  )
  .add(
    'focused',
    () => <ColorThumb value={new Color('#f00')} isFocused />
  )
  .add(
    'focused, dragging',
    () => <ColorThumb value={new Color('#f00')} isFocused isDragging />
  )
  .add(
    'focused, dragging, alpha',
    () => <ColorThumb value={new Color('hsla(0, 100%, 100%, 0)')} isFocused isDragging />
  )
  .add(
    'disabled',
    () => <ColorThumb value={new Color('#f00')} isDisabled />
  );


storiesOf('ColorWheel', module)
  .add(
    'hsl',
    () => <ColorWheel defaultValue={new Color('hsl(0, 100%, 50%)')} />
  )
  // .add(
  //   'hsb',
  //   () => <ColorWheel defaultValue={new Color('hsb(0, 100%, 50%)')} />
  // )
  .add(
    'disabled',
    () => <ColorWheel isDisabled defaultValue={new Color('hsl(0, 100%, 50%)')} />
  )
  .add(
    '* custom size',
    () => <ColorWheel defaultValue={new Color('hsl(0, 100%, 50%)')} />
  )
  .add(
    'controlled',
    () => {
      let [color, setColor] = useState(new Color('hsl(0, 100%, 50%)'));
      let colorCSS = color.toString('css');
      return (<Flex gap={'size-500'} direction="row" alignItems="center">
        <ColorWheel onChange={setColor} value={color} />
        <div style={{width: '50px', height: '50px', backgroundColor: colorCSS, border: '1px solid black'}} />
      </Flex>);
    }
  );
