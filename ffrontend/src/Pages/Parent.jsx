import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Lipika" age={19}
         marks={[90,70,99,80]}
         person={{ name : "Jaisre",dept: ["AIDS"]}}
         />
    </div>
  )
}

export default Parent