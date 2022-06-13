import React, { Component } from "react";
//use axios for info user from server
import axios_user from "../../../HOC/Axios";
//read user name from context for get user info  from server
import { Context } from "../../../context/context";
class userInfo extends Component {
  static contextType = Context;
  componentDidMount() {
    const userName = this.context.userName;
    if (!(userName && userName.length > 0)) return;
    axios_user
      .get("/users/" + userName)
      .then((res) => {
        console.log("data = ", res);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  render() {
    return <div>infppppppppp</div>;
  }
}
export default userInfo;
