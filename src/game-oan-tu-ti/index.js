import React, { Component } from 'react';
import './gameOanTuTi.css';
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import { connect } from 'react-redux';

class OanTuTi extends Component {
    render() {
        return (
            <div className='gameOanTuTi'>
                <div className='row text-center mt-4'>
                    <div className='col-3'>
                        <Player />
                    </div>
                    <div className='col-6 mt-3'>
                        <KetQuaTroChoi />
                        <button className='btn btn-success mt-3' onClick={this.props.playGame}>Play game</button>
                    </div>
                    <div className='col-3'>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            //Khai bao ham lap di lap lai
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM_GAME',
                })
                count++;
                if (count > 30) {
                    clearInterval(randomComputerItem);
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 500)
        }
    }
}

export default connect(null, mapDispatchToProps)(OanTuTi);