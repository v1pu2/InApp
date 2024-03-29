import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LikeSvg = props => (
  <Svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.91 0c-1.295 0-2.13.154-3.086.623a5.518 5.518 0 0 0-.995.625 5.635 5.635 0 0 0-.955-.597C7.898.17 7.02 0 5.773 0 2.429 0 0 2.77 0 6.368c0 2.717 1.515 5.341 4.337 7.88 1.48 1.331 3.372 2.65 4.726 3.35l.775.402.775-.401c1.354-.702 3.245-2.02 4.726-3.352 2.822-2.538 4.337-5.162 4.337-7.88 0-3.559-2.452-6.353-5.766-6.367Zm3.977 6.368c0 2.128-1.264 4.319-3.744 6.55-1.352 1.215-3.09 2.43-4.305 3.068-1.216-.638-2.953-1.853-4.305-3.069-2.48-2.23-3.744-4.42-3.744-6.55 0-2.657 1.684-4.578 3.984-4.578.992 0 1.604.117 2.308.466.415.205.783.477 1.1.816l.659.702.652-.708c.325-.352.698-.63 1.118-.836.684-.334 1.257-.44 2.296-.44 2.271.01 3.981 1.957 3.981 4.579Z"
      fill={props.color}
    />
  </Svg>
);

export default LikeSvg;
