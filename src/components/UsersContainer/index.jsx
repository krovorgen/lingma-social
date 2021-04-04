import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import {
    followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC,
} from '../../redux/users-reducer';
import Users from '../Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow} />
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
