// Khởi tạo giá trị ban đầu của store
const initialState = {
    arrPlayerChoice: [
        { id: 'keo', image: './img/gameOanTuTi/keo.png' },
        { id: 'bua', image: './img/gameOanTuTi/bua.png' },
        { id: 'bao', image: './img/gameOanTuTi/bao.png' }
    ],
    isPlayerChosen: 'bua',
    gamesResult: 'READY!',
    gamesWin: 0,
    gamesPlayed: 0,
    computerChoice: { id: 'bao', image: './img/gameOanTuTi/bao.png' }
}

const gameOanTuTiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_CHOICE': {
            state.isPlayerChosen = action.payload;
            return { ...state }
        }

        case 'RANDOM_GAME': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = { ...state.arrPlayerChoice[soNgauNhien] };
            state.computerChoice = quanCuocNgauNhien;
            return { ...state }
        }

        case 'END_GAME': {
            const { id } = state.computerChoice;
            state.gamesPlayed++;
            switch (state.isPlayerChosen) {
                case 'keo': {
                    if (id === 'keo') {
                        state.gamesResult = 'DRAW';
                    } else if (id === 'bua') {
                        state.gamesResult = 'YOU LOSE T_T';
                    } else {
                        state.gamesResult = 'CONGRATULATIONS, YOU WIN!';
                        state.gamesWin++;
                    }
                    break;
                }

                case 'bua': {
                    if (id === 'keo') {
                        state.gamesResult = 'CONGRATULATIONS, YOU WIN!';
                        state.gamesWin++;
                    } else if (id === 'bua') {
                        state.gamesResult = 'DRAW';
                    } else {
                        state.gamesResult = 'YOU LOSE T_T';
                    }
                    break;
                }

                case 'bao': {
                    if (id === 'keo') {
                        state.gamesResult = 'YOU LOSE T_T';
                    } else if (id === 'bua') {
                        state.gamesResult = 'CONGRATULATIONS, YOU WIN!';
                        state.gamesWin++;
                    } else {
                        state.gamesResult = 'DRAW';
                    }
                    break;
                }

                default: {
                    return { ...state }
                }
            }
            return { ...state }
        }

        default: {
            return { ...state }
        }
    }
}

export default gameOanTuTiReducer;
