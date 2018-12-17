import React from 'react';
import PropTypes from 'prop-types'

export default class Tree extends React.Component {
  render() {
    let indentation = this.props.indentation ? (this.props.indentation + 10) : 0;
    let tree = React.Children.map(this.props.children,child => {

      if (!child.props) {
        return <div style = {{paddingLeft: indentation}}>{child}</div>;
      }

      return (
        <div style = {{paddingLeft: indentation}}>
          {child}
          <Tree indentation = {indentation + 10}>
            {child.props.children}
          </Tree>
        </div>
      );
    });
    return (tree === null)? null : <div>{tree}</div>;
  }
}

Tree.propTypes = {
  children: PropTypes.any(),
  indentation: PropTypes.number()
}