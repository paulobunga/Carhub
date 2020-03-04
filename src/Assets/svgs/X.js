import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M11.033 8l4.548-4.549a1.43 1.43 0 000-2.021L14.571.419a1.43 1.43 0 00-2.022 0L8 4.967 3.451.42a1.43 1.43 0 00-2.021 0L.419 1.429a1.43 1.43 0 000 2.022L4.967 8 .42 12.549a1.43 1.43 0 000 2.021l1.01 1.011a1.43 1.43 0 002.022 0L8 11.033l4.549 4.548a1.43 1.43 0 002.021 0l1.011-1.01a1.43 1.43 0 000-2.022L11.033 8z"
        fill="#353E47"
      />
    </Svg>
  );
}

export default SvgComponent;
