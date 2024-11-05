import { Placement } from '@floating-ui/react';

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
  const top = Math.max(document.documentElement.scrollTop, document.body.scrollTop, window.scrollY);
  const left = document.documentElement.scrollLeft;
  const position = {
    top: 0,
    left: 0,
  } as IPosition;
  if (triggerRect && contentRect) {
    const dWidth = contentRect.width - triggerRect.width;
    const dHeight = triggerRect.height - contentRect.height;
    const calculatePosition = (placement: Placement) => {
      switch (placement) {
        case 'top':
          position.left = left + triggerRect.left - dWidth / 2;
          position.top = top + triggerRect.top - contentRect.height;
          break;
        case 'top-start':
          position.left += triggerRect.left;
          position.top += top + triggerRect.top - contentRect.height;
          break;
        case 'top-end':
          position.left += triggerRect.left - dWidth;
          position.top += top + triggerRect.top - contentRect.height;
          break;
        case 'bottom':
          position.left = left + triggerRect.left - dWidth / 2;
          position.top = top + triggerRect.top + triggerRect.height;
          break;
        case 'bottom-start':
          position.left = left + triggerRect.left;
          position.top = top + triggerRect.top + triggerRect.height;
          break;
        case 'bottom-end':
          position.left = left + triggerRect.left - dWidth;
          position.top = top + triggerRect.top + triggerRect.height;
          break;
        case 'left':
          position.left += triggerRect.left - contentRect.width;
          position.top += top + triggerRect.top + dHeight / 2;
          break;
        case 'left-start':
          position.left += triggerRect.left - contentRect.width;
          position.top += top + triggerRect.top;
          break;
        case 'left-end':
          position.left += triggerRect.left - contentRect.width;
          position.top += top + triggerRect.top + dHeight;
          break;
        case 'right':
          position.left += triggerRect.left + triggerRect.width;
          position.top += top + triggerRect.top + dHeight / 2;
          break;
        case 'right-start':
          position.left += triggerRect.left + triggerRect.width;
          position.top += top + triggerRect.top;
          break;
        case 'right-end':
          position.left += triggerRect.left + triggerRect.width;
          position.top += top + triggerRect.top + dHeight;
          break;
        default:
          break;
      }
    };
    calculatePosition(placement);
    // 边界检查和调整
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const oppositePlacementMap: Record<Placement, Placement> = {
      top: 'bottom',
      right: 'top',
      bottom: 'top',
      left: 'top',
      'top-start': 'top',
      'top-end': 'top',
      'right-start': 'top',
      'right-end': 'top',
      'bottom-start': 'top',
      'bottom-end': 'top',
      'left-start': 'top',
      'left-end': 'top',
    };

    let adjustedPlacement = placement;
    // 检查左右边界
    if (position.left < 0 || position.left + contentRect.width > windowWidth) {
      if (adjustedPlacement.startsWith('left')) {
        adjustedPlacement = oppositePlacementMap[adjustedPlacement];
      } else if (adjustedPlacement.startsWith('right')) {
        adjustedPlacement = oppositePlacementMap[adjustedPlacement];
      }
    }

    // 检查上下边界
    if (position.top < 0 || position.top - top + contentRect.height > windowHeight) {
      if (adjustedPlacement.startsWith('top')) {
        adjustedPlacement = oppositePlacementMap[adjustedPlacement];
      } else if (adjustedPlacement.startsWith('bottom')) {
        adjustedPlacement = oppositePlacementMap[adjustedPlacement];
      }
    }
    // 如果调整后的位置与初始位置不同，则重新计算位置
    if (adjustedPlacement !== placement) {
      position.left = 0;
      position.top = 0;
      calculatePosition(adjustedPlacement);
    }
  }
  return position;
};

export const getPlacement = ({
  triggerRect,
  contentRect,
  placement,
}: IUsePlacementProps): IPosition => getPosition(triggerRect, contentRect, placement);
