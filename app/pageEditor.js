import React from "react";
import Component from "./component"

class PageEditor extends Component {

  constructor(props) {
    super(props);

    this.bind("onCancel", "onUpdate");
  }
  render() {
    return <form>
    <input type="text" name="title" value={this.props.title} onChange={this.onUpdate}/>
    <textarea name="body"
              value={this.props.body}
              onChange={this.onUpdate}></textarea>
    <button
          onClick={this.onCancel}> Cancel
    </button>
    </form>;
  }

  onCancel(event) {
    event.preventDefault();
    this.props.onCancel(); //calls the onCancel() of page component
  }

  onUpdate() {
    this.props.onUpdate(
      this.props.id,
      event.target.name,
      event.target.value
    );
  }
}

export default PageEditor;
