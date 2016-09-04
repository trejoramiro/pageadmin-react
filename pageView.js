import React from "react";

class PageView extends React.Component {
  render() {
    return <div>
    {this.prop.title}
    <button
        onClick={this.props.onEdit}>edit</button>
    <button>delete</button>
    </div>;
  }
}

export default PageView;
