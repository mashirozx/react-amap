/// <reference types="@uiw/react-amap-types" />
import React, { useImperativeHandle, createContext } from 'react';
import { OverlayProps } from '@uiw/react-amap-map';
import { usePolyline } from './usePolyline';

export * from './usePolyline';

export const PolylineContext = createContext<AMap.Polyline | undefined>(undefined);

export interface PolylineProps extends OverlayProps, AMap.PolylineEvents, AMap.PolylineOptions {
  /** @deprecated use {@link visible} */
  visiable?: boolean;
  /** 覆盖物是否可见 */
  visible?: boolean;
  children?: JSX.Element;
}
export const Polyline = React.forwardRef<PolylineProps, PolylineProps>((props, ref) => {
  const { children } = props;
  const { polyline } = usePolyline(props);
  useImperativeHandle(ref, () => ({ ...props, polyline }), [polyline]);
  return <PolylineContext.Provider value={polyline}>{children}</PolylineContext.Provider>;
});
