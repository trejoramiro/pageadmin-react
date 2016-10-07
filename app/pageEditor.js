import React from "react";

class PageEditor extends React.Component {
  render() {
    return <form>
    <input type="text" name="title"/>
    <textarea name="body"></textarea>
    <button
          onClick={this.onCancel.bind(this)}> back
    </button>
    </form>;
  }

  onCancel(event) {
    event.preventDefault();
    this.props.onCancel(); //calls the onCancel() of page component
  }
}

export default PageEditor;
