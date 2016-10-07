import React from "react"
import Page from "./page"

class PageAdmin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      "pages": []
    };
  }

  componentWillMount() {
    this.setState({
      "pages" : this.props.backend.getAll()
    });
  }

  render() {
    return <ol> {
      this.state.pages.map( function(page) {
        return <li key={page.id}> <Page {...page}/> </li>
      })
    }
    </ol>;
  }
}

export default PageAdmin;
