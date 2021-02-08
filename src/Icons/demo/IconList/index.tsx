import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Icons from '@common/components/Icons';
import icons from '@common/assets/icons/iconfont.json';


import './index.less';

class IconList extends Component {

  state = {
    justCopied: null,
  }


  onCopied = (type: string) => {
    this.setState({
      justCopied: type
    }, () => {
      setTimeout(() => {
        this.setState({ justCopied: null });
      }, 2000);
    })
  }

  render() {

    const { justCopied } = this.state;

    return (
      <ul className="hfins-icons-list">
        {icons?.glyphs?.map(({ font_class }) => (
          <CopyToClipboard
            key={font_class}
            text={`<Icons type="${font_class}" />`}
            onCopy={text => {
              this.onCopied(font_class);
            }}
          >
            <li className={justCopied ? 'copied' : ''}>
              <Icons type={font_class} />
              <span>{font_class}</span>
            </li>
          </CopyToClipboard>
        ))}
      </ul>
    );
  }
}

export default () => <IconList />
