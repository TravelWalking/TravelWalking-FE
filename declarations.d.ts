
  declare module '*.jpg' {
    const value: any;
    export = value;
  }
  
  declare module '*.jpeg' {
    const value: any;
    export = value;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }
  
  declare module '*.png';