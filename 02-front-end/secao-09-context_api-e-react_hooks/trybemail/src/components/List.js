import PropTypes from 'prop-types';
import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function List({ messages, setMessageStatus }) {
    return (
    <ul className="messages-list">
        { messages.map((message) => {
        const messageClass = message.status === READ
        ? "message-read"
        : "message-unread" 
        return (
            <li key={ message.id }>
                <p className={`message-title ${ messageClass }` }>
                    { message.title }
                </p>
                <div>
                    <button
                    type="button"
                    title='Marcar como lida'
                    onClick={ () => setMessageStatus(message.id, READ)}>
                    <img src={ readIcon } alt='Marcar como lida'></img>
                    </button>

                    <button
                    type="button"
                    title='Marcar não como lida'
                    onClick={ () => setMessageStatus(message.id, UNREAD)}>
                    <img src={ unreadIcon } alt='Marcar não como lida'></img>
                    </button>



                </div>
            </li>            
            )        
        })}
    </ul>
    );
}
List.propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        status: PropTypes.number,
      }),
    ).isRequired,
    setMessageStatus: PropTypes.func.isRequired
  };
  
  export default List;