import React from "react";
import Component from "./component";

class PageView extends Component {

  constructor(props) {
      super(props);

      this.bind("onDelete");
  }

  render() {
    return <div>
    {this.props.title}
    <br></br>
    <button
        onClick={this.props.onEdit}>Edit</button>
      <button onClick={this.onDelete}>Delete</button>
    </div>;
  }

  onDelete() {
    this.props.onDelete(
      this.props.id
    );
  }
}

export default PageView;
