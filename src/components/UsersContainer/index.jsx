import { connect } from 'react-redux';
import Users from '../Users';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId));
    },
    setUsers: (user) => {
        dispatch(setUsersAC(user));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
