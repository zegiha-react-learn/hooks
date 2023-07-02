import React, {useContext, createContext} from 'react';

const themeContext = createContext('black');
const ContextSample = () => {
  const theme = useContext(themeContext);
  const style = {
    width: '24px',
    height: '24px',
    background: theme,
  };
  return (
    <div>
      
    </div>
  );
};

export default ContextSample;