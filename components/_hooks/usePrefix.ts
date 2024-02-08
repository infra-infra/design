import { useContext } from 'react';
import ConfigContext from '../_context/ConfigContext';

export default function usePrefix() {
  const context = useContext(ConfigContext);
  return context.getPrefix;
}
