import { connect } from 'react-redux';
import Users from '../Users';
import {
    followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC,
} from '../../redux/users-reducer';

const mapStateToProps = ({ usersPage }) => ({
    users: usersPage.users,
    pageSize: usersPage.pageSize,
    totalUsersCount: usersPage.totalUsersCount,
    currentPage: usersPage.currentPage,
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
    setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
