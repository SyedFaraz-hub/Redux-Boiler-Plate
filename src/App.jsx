import React from 'react'
import { connect } from "react-redux";
import { upload_data } from "../src/store/action";

class App extends React.Component {

  render() {
    let newUser = {

      name: "Ali",
      email: "Ali@gmail.com",

    }
          console.log(this.props.users)
    return (
      <div>
        <h1>Working Fine...</h1>

        <button onClick={() => { this.props.SET_DATA(newUser) }} >SET DATA</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({

  users: state.users
})

const mapDispatchToProps = (dispatch) => ({

  SET_DATA: (newUser) => {dispatch(upload_data(newUser))}

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
