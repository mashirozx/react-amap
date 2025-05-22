/// <reference types="@uiw/react-amap-types" />
import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { useCircle } from './useCircle';
export * from './useCircle';

export interface CircleProps extends OverlayProps, AMap.CircleEvents, AMap.CircleOptions {
  /** @deprecated use {@link visible} */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
}
export const Circle = React.forwardRef<CircleProps, CircleProps>((props, ref) => {
  const { circle } = useCircle(props);
  useImperativeHandle(ref, () => ({ ...props, circle }));
  return null;
});
