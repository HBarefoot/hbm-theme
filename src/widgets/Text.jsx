import React from 'react'

function Text(props) {
    const {
        config
    } = props;

  return (
    <div className={"my-text-widget"}>
        {config?.text}
    </div>
  )
}

export default Text