import React, {useState} from 'react';
import { Button, Divider } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { IComponentsProps } from '../../utils';

const ButtonComponent: React.FC<IComponentsProps> = ({ setState }) => {

  const onClickHandler = () => {
    setState('load');
  }

  return (
    <>
      <Button
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={onClickHandler}
        >
          Click me!
      </Button>
    </>
  )
}

export default ButtonComponent;