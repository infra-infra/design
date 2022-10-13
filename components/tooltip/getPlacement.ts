export type Placement = 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom' | 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'
interface IPosition {
  left: number;
  top: number;
}

interface IUsePlacementProps {
  triggerRect: DOMRect | null;
  contentRect: DOMRect | null;
  placement: Placement;
}

const getPosition = (triggerRect: DOMRect | null, contentRect: DOMRect | null, placement: Placement) => {
  let position = {
    top: document.documentElement.scrollTop,
    left: document.documentElement.scrollLeft,
  } as IPosition;
  if (triggerRect && contentRect) {
    const dWidth = contentRect.width-triggerRect.width;
    const dHeight = triggerRect.height - contentRect.height;

    switch (placement) {
      case 'top':
        position.left += triggerRect.left - dWidth/2;
        position.top += triggerRect.top - contentRect.height;
        break;
      case 'topLeft':
        position.left += triggerRect.left;
        position.top += triggerRect.top - contentRect.height;
        break;
      case 'topRight':
        position.left += triggerRect.left - dWidth;
        position.top += triggerRect.top - contentRect.height;
        break;
      case 'bottom':
        position.left = triggerRect.left - dWidth / 2;
        position.top += triggerRect.top + triggerRect.height;
        console.log(22222,position)
        break;
      case 'bottomLeft':
        position.left += triggerRect.left;
        position.top += triggerRect.top + triggerRect.height;
        break;
      case 'bottomRight':
        position.left += triggerRect.left + dWidth;
        position.top += triggerRect.top + triggerRect.height;
        break;
      case 'left':
        position.left += triggerRect.left - contentRect.width;
        position.top += triggerRect.top + dHeight / 2;
        break;
      case 'leftTop':
        position.left += triggerRect.left - contentRect.width;
        position.top += triggerRect.top;
        break;
      case 'leftBottom':
        position.left += triggerRect.left - contentRect.width;
        position.top += triggerRect.top + dHeight;
        break;
      case 'right':
        position.left += triggerRect.left + triggerRect.width;
        position.top += triggerRect.top + dHeight / 2;
        break;
      case 'rightTop':
        position.left += triggerRect.left + triggerRect.width;
        position.top += triggerRect.top;
        break;
      case 'rightBottom':
        position.left += triggerRect.left + triggerRect.width;
        position.top += triggerRect.top + dHeight;
        break;
    }
  }
  return position;
};

export const getPlacement = ({ triggerRect, contentRect, placement }: IUsePlacementProps): IPosition =>
  getPosition(triggerRect, contentRect, placement);
