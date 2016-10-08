import React from "react";
import PageEditor from "./pageEditor"
import PageView from "./pageView"


export default class Page extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        "isEditing" : false
      };
  }

  render() {
    if (this.state.isEditing) {
      return <PageEditor {...this.props}
              onCancel={this.onCancel.bind(this)}/>;
    } else {
      return <PageView {...this.props}
              onEdit={this.onEdit.bind(this)}/>;
    }
  }

  onEdit() {
    console.log("hello")
    this.setState({
      "isEditing": true
    });
  }

  onCancel() {
    this.setState({
      "isEditing": false
    });
  }

}
