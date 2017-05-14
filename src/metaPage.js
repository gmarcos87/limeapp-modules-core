import { h, Component } from 'preact';

import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

import { changeBase } from './metaActions';
import { getBase, getStations, getSelectedHost } from './metaSelectors';

export class Meta extends Component {

  handleChange(e) {
    this.setState({station: e.target.value});
    return this.state.station;
  }

  nextStation(e) {
    e.preventDefault();
    if (typeof this.state.station !== 'undefined') {
      return this.props.changeBase(this.state.station);
    }
  }

  render() {
    return (
      <div class="container" style={{paddingTop:'100px'}}>
        <form onSubmit={this.nextStation.bind(this)}>
            <div class="row">
                <div class="six columns">
                  <p>
                    <label>{I18n.t('Current status')}</label>
                    <span>{I18n.t('Conected Host')}</span>: {this.props.selectedHost}<br />
                    <span>{I18n.t('Base Host')}</span>: {this.props.base}
                  </p>
                </div>
                <div class="six columns">
                 <p>
                    <label>{I18n.t('Select new base station')}</label>
                    <select class="u-full-width" onChange={this.handleChange.bind(this)} >
                        <option selected value={this.props.selectedHost}>{this.props.selectedHost}</option>
                        {this.props.stations.map(x => (<option value={x}>{x}</option>))}
                    </select>
                  </p>
                </div>
            </div>
            
            <button class="button green block" type="submit">{I18n.t('Change')}</button>
            </form>
      </div>
    );
  }
}


export const mapStateToProps = (state) => {
  return {
    stations: getStations(state),
    base: getBase(state),
    selectedHost: getSelectedHost(state)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changeBase: bindActionCreators(changeBase,dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meta);
