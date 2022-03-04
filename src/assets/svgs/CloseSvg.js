import * as React from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';

const CloseSvg = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G opacity={0.6}>
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 24V.303h23.697V24H0Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.697 12.152C23.697 18.695 18.392 24 11.849 24 5.305 24-.001 18.695-.001 12.152 0 5.608 5.306.303 11.85.303c6.543 0 11.848 5.305 11.848 11.848Z"
          fill="#B9BAC0"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.323 12.038 16.9 8.461a.91.91 0 0 0-1.285-1.285l-3.577 3.577L8.46 7.176A.908.908 0 1 0 7.175 8.46l3.577 3.577-3.577 3.577a.909.909 0 0 0 1.286 1.286l3.577-3.578 3.577 3.578a.905.905 0 0 0 1.285 0 .909.909 0 0 0 0-1.286l-3.577-3.577Z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default CloseSvg;
