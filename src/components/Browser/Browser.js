import React, {Component} from 'react';

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page:1
    }
  }

  render() {

    let childrenWithProps = React.cloneElement(this.props.children, {page: this.state.page});

    return(
        <div>
            {childrenWithProps}
        </div>
    );
  }

  
}

export default Browser;
