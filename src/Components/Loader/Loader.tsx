import React, {useEffect} from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../__fixtures__/lottie_loader.json';
import { IComponentsProps } from '../../utils';

const Loader: React.FC<IComponentsProps> = ({ setState }) => {

  useEffect(() => {
    setTimeout(() => {
      setState('widget');
    }, 3000)
  })

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='loader'>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
      />
    </div>
  )
}

export default Loader;