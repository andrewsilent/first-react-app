import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { getUsers } from '../../api/index';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    getUsers({ page: currentPage })
      .then(data =>
        this.setState({
          users: data.results,
          isFetching: false,
        })
      )
      .catch(() => this.setState({ isError: true, isFetching: false }))
      .finally(() => this.setState({ isFetching: false }));
  };

  prevPage = () => this.setState({ currentPage: this.state.currentPage - 1 });

  nextPage = () => this.setState({ currentPage: this.state.currentPage + 1 });

  render () {
    const { users, isFetching, isError } = this.state;
    return (
      <div>
        <h1>USER LIST</h1>
        <button onClick={this.prevPage}>prev page</button>
        <button onClick={this.nextPage}>next page</button>
        {/* {isFetching ? <div>Loading...</div> : null} */}
        {isFetching && <Spinner />}
        {isError && <div>Shit happens</div>}
        <ul>
          {users.map(user => (
            <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;
