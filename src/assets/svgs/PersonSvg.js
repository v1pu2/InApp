import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PersonSvg = props => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.267 19.3v-2.033A4.067 4.067 0 0 0 13.2 13.2H5.067A4.067 4.067 0 0 0 1 17.267V19.3M9.133 9.133a4.067 4.067 0 1 0 0-8.133 4.067 4.067 0 0 0 0 8.133Z"
      stroke="#475464"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PersonSvg;
