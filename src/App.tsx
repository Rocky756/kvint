import React, {useState} from 'react';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';
import Loader from './Components/Loader/Loader';
import Widget from './Components/Widget/Widget';

const stateComponents: any  = {
  'btn': ButtonComponent,
  'load': Loader,
  'widget': Widget,
};

const getState = (stateName: string): React.Component => {
  return stateComponents[stateName];
}


const renderModal = (state: string, setState: Function) => {
  console.log(state);
  const Component: any = getState(state);
  console.log(Component);
  return <Component state={state} setState={setState}/>;
};

const App: React.FC = () => {
  const [state, setState] = useState('btn');
  console.log(state);
  return (
    <div className='container'>
      {renderModal(state, setState)}
    </div>
  );
}

export default App;
