import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const LocationSvg = props => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.596 11.643h3.175L15.9 15.9H1l2.129-4.257h3.18"
      stroke="#475464"
      strokeLinecap="round"
    />
    <Path
      clipRule="evenodd"
      d="M8.45 1C5.805 1 3.66 3.053 3.66 5.587c0 4.13 4.79 8.184 4.79 8.184s4.79-4.054 4.79-8.184C13.24 3.053 11.094 1 8.45 1Z"
      stroke="#475464"
      strokeLinecap="round"
    />
    <Circle
      cx={8.45}
      cy={5.789}
      r={1.596}
      stroke="#475464"
      strokeLinecap="round"
    />
  </Svg>
);

export default LocationSvg;
