import React from 'react';
import { ResizableBox as ReactResizableBox } from 'react-resizable';

import 'react-resizable/css/styles.css';

export default function ResizableBox({
  children,
  width = 600,
  height = 300,
  resizable = true,
  style = {},
  className = '',
}: any) {
  return (
    <div style={{ marginLeft: 20 }}>
      <div
        style={{
          display: 'inline-block',
          width: '100%',
          height,
          borderRadius: '0.5rem',
          ...style,
        }}
      >
        {resizable ? (
          <ReactResizableBox width={width} height={height}>
            <div
              style={{
                width: '100%',
                height: '100%',
              }}
              className={className}
            >
              {children}
            </div>
          </ReactResizableBox>
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
            }}
            className={className}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
