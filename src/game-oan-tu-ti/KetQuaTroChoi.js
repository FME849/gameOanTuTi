import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>{this.props.gamesResult}</div>
                <div className='display-4 text-success'>WIN: <span className='text-warning'>{this.props.gamesWin}</span></div>
                <div className='display-4 text-success'>Games Played: <span className='text-warning'>{this.props.gamesPlayed}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gamesResult: state.gameOanTuTiReducer.gamesResult,
        gamesWin: state.gameOanTuTiReducer.gamesWin,
        gamesPlayed: state.gameOanTuTiReducer.gamesPlayed,
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);