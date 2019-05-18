import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { initializeDashboard } from './api/dashboard.api';

const getRandomInt = (max) => Math.floor(Math.random() * 10) + 1;
class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  getNextUser = () => this.props.dispatch(initializeDashboard(`https://reqres.in/api/users/${getRandomInt(10)}`));
  Headers = () => {
    return (
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
    );
  };
  componentDidMount() {
    this.props.dispatch(initializeDashboard('https://reqres.in/api/users/1'));
  }
  render() {
    let { Dashboard } = this.props;

    if (Dashboard.user) {
      return (
        <div className="card">
          <img className="card-img-top" src={this.props.Dashboard.user.data.avatar} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.Dashboard.user.data.first_name} {this.props.Dashboard.user.data.last_name}
            </h5>
            <p className="card-text">{this.props.Dashboard.user.data.email}</p>
            <button onClick={this.getNextUser} className="btn btn-primary btn-sm">
              {' '}
              Who is Criminal ?
            </button>
          </div>
        </div>
      );
    }
    return <p>Loading......! Please wait</p>;
  }
}
const mapStateToProps = (state) => state;
const Dashboard = connect(mapStateToProps)(UserDashboard);
export default Dashboard;