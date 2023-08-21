import PropTypes from 'prop-types';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Constrols ({markAllRead, markAllUnread}) {
    return (
        <div className='controls-container'>
            <button 
            type="button"
            title='Marcar todas como lida'
            onClick={ markAllRead }>
                <img src={ readIcon } alt='Marcar todas como lida'></img>
                Marcar todas como lida
            </button>

            <button 
            type="button"
            title='Marcar todas como não lida'
            onClick={ markAllUnread }>
                <img src={ unreadIcon } alt='Marcar todas como não lida'></img>
                Marcar todas como não lida
            </button>
        </div>
        )}

Constrols.propTypes = {
    markAllRead : PropTypes.func.isRequired ,
    markAllUnread: PropTypes.func.isRequired
}

export default Constrols;