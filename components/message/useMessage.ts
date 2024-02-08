import { useContext } from 'react';
import ConfigContext from '../_context/ConfigContext';

const useMessage = () => {
  const { messageRef } = useContext(ConfigContext);

  return messageRef.current;
};
export default useMessage;
