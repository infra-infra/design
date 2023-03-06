export type Placement =
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

interface IPosition {
  left: number;
  top: number;
}

interface IUsePlacementProps {
  triggerRect: DOMRect | undefined;
  contentRect: DOMRect | undefined;
  placement: Placement;
}

const getPosition = (
  triggerRect: DOMRect | undefined,
  contentRect: DOMRect | undefined,
  placement: Placement
) => {
  const top = document.documentElement.scrollTop;
  const left = document.documentElement.scrollLeft;
  let position = {
    top: 0,
    left: 0,
  } as IPosition;
  if (triggerRect && contentRect) {
    const dWidth = contentRect.width - triggerRect.width;
    const dHeight = triggerRect.height - contentRect.height;
    switch (placement) {
      case 'top':
        position.left = left + triggerRect.left - dWidth / 2;
        position.top = top + triggerRect.top - contentRect.height;
        break;
      case 'topLeft':
        position.left += triggerRect.left;
        position.top += top + triggerRect.top - contentRect.height;
        break;
      case 'topRight':
        position.left += triggerRect.left - dWidth;
        position.top += top + triggerRect.top - contentRect.height;
        break;
      case 'bottom':
        position.left = left + triggerRect.left - dWidth / 2;
        position.top = top + triggerRect.top + triggerRect.height;
        break;
      case 'bottomLeft':
        position.left = left + triggerRect.left;
        position.top = top + triggerRect.top + triggerRect.height;
        break;
      case 'bottomRight':
        position.left = left + triggerRect.left - dWidth;
        position.top = top + triggerRect.top + triggerRect.height;
        break;
      case 'left':
        position.left += triggerRect.left - contentRect.width;
        position.top += top + triggerRect.top + dHeight / 2;
        break;
      case 'leftTop':
        position.left += triggerRect.left - contentRect.width;
        position.top += top + triggerRect.top;
        break;
      case 'leftBottom':
        position.left += triggerRect.left - contentRect.width;
        position.top += top + triggerRect.top + dHeight;
        break;
      case 'right':
        position.left += triggerRect.left + triggerRect.width;
        position.top += top + triggerRect.top + dHeight / 2;
        break;
      case 'rightTop':
        position.left += triggerRect.left + triggerRect.width;
        position.top += top + triggerRect.top;
        break;
      case 'rightBottom':
        position.left += triggerRect.left + triggerRect.width;
        position.top += top + triggerRect.top + dHeight;
        break;
    }
  }
  return position;
};

export const getPlacement = ({
  triggerRect,
  contentRect,
  placement,
}: IUsePlacementProps): IPosition => getPosition(triggerRect, contentRect, placement);
