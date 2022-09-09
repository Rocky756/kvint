import React, {useState} from 'react';
import { IComponentsProps } from '../../utils';

const Widget = () => {

  return (
    <div className='message'>
      <h2 style={{fontWeight: '500', color: 'white', margin: '0'}}>Привет</h2>
      <p style={{fontWeight: '400', color: 'white'}}>чем я могу помочь?</p>
    </div>
  )
}

export default Widget;