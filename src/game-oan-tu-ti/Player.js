import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    renderPlayerChoice = () => {
        return this.props.arrPlayerChoice.map((item, index) => {
            let border = {};
            if (item.id === this.props.isPlayerChosen) {
                border = { border: '3px solid #ffc107' };
            }
            return (
                <div style={{ margin: "0 5px" }} key={index}>
                    <button className='btnItem' style={border} onClick={() => {
                        this.props.submitChoice(item.id);
                    }}>
                        <img style={{ objectFit: "cover", width: "100%" }} src={item.image} alt='player-choice'></img>
                    </button>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <div className='player__thought'>
                    <img src={this.props.arrPlayerChoice.find(item => item.id === this.props.isPlayerChosen).image} style={{ objectFit: 'cover', width: '100%' }} alt='player-thought'></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./img/gameOanTuTi/player.png' alt='player'></img>
                <div className='d-flex player__choice justify-content-center'>
                    {this.renderPlayerChoice()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        arrPlayerChoice: state.gameOanTuTiReducer.arrPlayerChoice,
        isPlayerChosen: state.gameOanTuTiReducer.isPlayerChosen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitChoice: (id) => {
            const action = {
                type: 'SUBMIT_CHOICE',
                payload: id,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
