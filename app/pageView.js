import React from "react";

class PageView extends React.Component {
  render() {
    return <div>
    {this.props.title}
    <button
        onClick={this.props.onEdit}>edit</button>
      <button>Delete</button>
    </div>;
  }
}

export default PageView;
