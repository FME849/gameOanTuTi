import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0 {top: 100px}
            40% {top: -100px}
            60% {top: 100px}
            80% {top: -100px}
            100% {top: 0}
        }`;

        return (
            <div>
                <style>
                    {keyframe}
                </style>
                <div className='player__thought' style={{
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img src={this.props.computerChoice.image}
                        style={{
                            transform: 'scaleX(-1)',
                            height: '100%',
                            animation: `randomItem${Date.now()} .5s`,
                            position: 'absolute',
                            left: 0
                        }}
                        alt='computer-choice'></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./img/gameOanTuTi/playerComputer.png' alt='player-computer'></img>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computerChoice: state.gameOanTuTiReducer.computerChoice,
    }
}

export default connect(mapStateToProps)(Computer);
