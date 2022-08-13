import React from "react";

import './backDrop.css'
import { SpinnerRoundOutlined } from 'spinners-react';
const BackDrop = () => {
  return (
    <div className="bacgroundSpinner">
        <div className="spinner">
            <SpinnerRoundOutlined enabled={true} size="120" />
        </div>


    </div>
  );
};

export default BackDrop;