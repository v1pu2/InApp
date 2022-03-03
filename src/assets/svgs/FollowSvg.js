import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const FollowSvg = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={7}
      cy={7}
      r={2.667}
      stroke="#fff"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <Path
      clipRule="evenodd"
      d="M1.667 14.973v1.36h10.666v-1.36C12.31 12.053 9.935 9.69 7 9.667c-2.935.024-5.31 2.385-5.333 5.306Z"
      stroke="#fff"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <Path
      d="M14.8 1.667a.8.8 0 0 0-1.6 0h1.6Zm-1.6 4.666a.8.8 0 0 0 1.6 0h-1.6ZM11.667 3.2a.8.8 0 1 0 0 1.6V3.2Zm4.666 1.6a.8.8 0 1 0 0-1.6v1.6ZM13.2 1.667v4.666h1.6V1.667h-1.6ZM11.667 4.8h4.666V3.2h-4.666v1.6Z"
      fill="#fff"
    />
  </Svg>
);

export default FollowSvg;
