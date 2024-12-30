import React, { forwardRef } from 'react';

const InputText = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} placeholder="Change Title..." />
    </div>
  );
});

export default InputText;
