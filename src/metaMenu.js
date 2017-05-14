import { Component, h } from 'preact';

export class MetaMenu extends Component {
  render() {
    return (<a href={'#/config'}>{I18n.t('Config')}</a>);
  }
}