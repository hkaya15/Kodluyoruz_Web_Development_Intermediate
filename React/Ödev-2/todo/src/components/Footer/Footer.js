let count = 0;

function Footer({ wholeList, setList }) {
  let arr = Object.entries(wholeList);
  let completedArr = arr.map(function ([key, value]) {
    return value.class === true
  }).reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {})


  return <footer className="footer">
    {/* Count */}
    <span className="todo-count">
      <strong> {
        count = completedArr["true"] !== undefined ? arr.length - Number(completedArr["true"]) : arr.length
      }
      </strong> items left
    </span>
    {/* Filters */}
    <ul className="filters">
      <li>
        <a className="selected">All</a>
      </li>
      <li>
        <a>Active</a>
      </li>
      <li>
        <a>Completed</a>
      </li>
    </ul>
    {/* Clear Complete*/}

    {wholeList.some((el) => {
      if (el.class === true) {
        return true
      }
      return false
    }) && <button className="clear-completed" onClick={() => {
     
      const value = wholeList.filter(e => e.class === false)

      setList([...value])

    }}>Clear completed</button>}




  </footer>
}

export default Footer;