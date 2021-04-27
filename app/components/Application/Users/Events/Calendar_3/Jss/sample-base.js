import * as React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

export class SampleBase extends React.PureComponent {
  rendereComplete() {
    /** custom render complete function */

    // alert("8665555");
  }

  componentDidMount() {
    setTimeout(() => {
      this.rendereComplete();
    });
  }
}
