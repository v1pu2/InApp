import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CreatorSvg = props => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.273 4.636V1.588a6.956 6.956 0 1 1-5.681 1.985L2.5 2.478A8.5 8.5 0 1 0 8.5 0h-.774v4.636h1.546ZM8.5 6.955c-.138 0-.273.018-.4.052L5.183 4.09 4.09 5.183 7.007 8.1A1.548 1.548 0 0 0 8.5 10.046a1.546 1.546 0 0 0 0-3.091Z"
      fill="#595959"
    />
  </Svg>
);

export default CreatorSvg;
