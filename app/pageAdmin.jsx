import React from "react"
import Page from "./page"
import Component from "./component"

class PageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "pages": []
    };

    this.bind("onUpdate", "onDelete");
  }

  componentWillMount() {
    this.setState({
      "pages" : this.props.backend.getAll()
    });
  }

  render() {
    return <ol> {
      this.state.pages.map( (page) => {
        return <li key={page.id}> <Page {...page}
                                    onUpdate={this.onUpdate}
                                    onDelete={this.onDelete}
                                    />
                                </li>;
      })
    }
    </ol>;
  }

  onUpdate(...params) {
    this.props.backend.update(...params);
  }

  onDelete(...params) {
    this.props.backend.delete(...params);
  }
}

export default PageAdmin;
