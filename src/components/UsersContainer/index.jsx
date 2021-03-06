import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow,
} from '../../redux/users-reducer';
import Users from '../Users';
import Preloader from '../atoms/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (<Preloader />) : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </>
        );
    }
}

const mapStateToProps = ({ usersPage }) => ({
    users: usersPage.users,
    pageSize: usersPage.pageSize,
    totalUsersCount: usersPage.totalUsersCount,
    currentPage: usersPage.currentPage,
    isFetching: usersPage.isFetching,
});

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);
