import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from '../Dialogs';

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
    updateNewMessage: (text) => {
        dispatch(updateNewMessageTextCreator(text));
    },
    sendMessage: () => {
        dispatch(addMessageCreator());
    },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
