import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const EventTimeSvg = props => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={8.5} cy={8} r={7.5} stroke="#fff" strokeLinecap="round" />
    <Path d="M8.5 3.5v4.75L11.75 10" stroke="#fff" strokeLinecap="round" />
  </Svg>
);

export default EventTimeSvg;
