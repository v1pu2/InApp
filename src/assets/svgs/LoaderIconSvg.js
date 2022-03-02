import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LoaderIconSvg = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.226 4.5C13.002 2.77 11.154 1.8 9 1.8A7.2 7.2 0 1 0 16.2 9H18a9 9 0 1 1-9-9c2.524 0 4.747 1.064 6.3 2.943V0h1.8v6.3h-6.3V4.5h3.426Z"
      fill="#fff"
      fillOpacity={0.65}
    />
  </Svg>
);

export default LoaderIconSvg;
