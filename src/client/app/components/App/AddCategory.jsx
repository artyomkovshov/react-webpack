import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../actions/actions.jsx'
import store from '../../store.jsx'

let AddCategory = ({ dispatch }) => {
  let input

  return (
    <div className="App-main__add-category">
      <form onSubmit={e => {
        let id = Date.now();
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addCategory(input.value, id))
        input.value = ''
        console.log(store.getState());
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  )
}
AddCategory = connect()(AddCategory)

export default AddCategory