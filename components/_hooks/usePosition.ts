import { useState, useEffect, useCallback } from 'react';
import { getPlacement, Placement } from '../tooltip/getPlacement';

interface IPositionOptions {
  triggerRect: DOMRect | undefined;
  contentRect: DOMRect | undefined;
  placement: Placement;
}

export const usePosition = ({ triggerRect, contentRect, placement }: IPositionOptions) => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const updatePosition = useCallback(() => {
    if (triggerRect && contentRect) {
      const newPosition = getPlacement({ triggerRect, contentRect, placement });
      setPosition(newPosition);
    }
  }, [triggerRect, contentRect, placement]);

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  return position;
};
