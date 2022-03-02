import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BottomTicketSvg = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.141 5.859a2.95 2.95 0 0 0 3.436.537L19.081 7.9 7.9 19.08l-1.504-1.503a2.95 2.95 0 0 0-3.973-3.973L.919 12.1 12.1.92l1.504 1.503a2.95 2.95 0 0 0 .537 3.436Z"
      stroke={props.color}
      strokeWidth={1.3}
      strokeLinecap="round"
    />
  </Svg>
);

export default BottomTicketSvg;
