import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackSvg = props => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1 9h20M8.778 1 1 9l7.778 8"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackSvg;
