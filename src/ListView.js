import React from "react";
import PropTypes from 'prop-types'

const ListView = (props) => {
  const listElements = props.list.map(element => <li key={props.keyFunction(element)}>{element}</li>);
  return props.listType ? <ol>{listElements}</ol> : <ul>{listElements}</ul>;
}

ListView.PropTypes = {
  list: PropTypes.array(),
  keyFunction: PropTypes.func(),
  listType: PropTypes.bool()
}

export default ListView;