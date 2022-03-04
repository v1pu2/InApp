import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CorrectSvg = props => (
  <Svg
    width={106}
    height={106}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 49c0-18.225 14.775-33 33-33s33 14.775 33 33-14.775 33-33 33-33-14.775-33-33Z"
        fill="#11D0A2"
      />
    </G>
    <Path
      d="m49.022 56.038 17.741-18.576a2.645 2.645 0 0 1 3.862 0c1.067 1.117 1.067 2.927 0 4.044L49.022 64.125 36.475 50.988c-1.067-1.117-1.067-2.927 0-4.044a2.645 2.645 0 0 1 3.862 0l8.685 9.094Z"
      fill="#fff"
    />
    <Defs></Defs>
  </Svg>
);

export default CorrectSvg;
