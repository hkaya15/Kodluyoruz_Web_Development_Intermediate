let count = 0;


function Footer({ wholeList, setList, complete, setComplete }) {
  let arr = Object.entries(wholeList);
  let completedArr = arr.map(function ([key, value]) {
    return value.class === true
  }).reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {})

  const onActive = () => {

    let act = complete.filter(e => e.class === false)

    setList([...act])



  }

  const onAll = () => {
    setList([...complete])

  }

  const onComplete = () => {

    let act = complete.filter(e => e.class === true)
    setList([...act])



  }

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
        <a className="selected" onClick={onAll}>All</a>
      </li>
      <li>
        <a onClick={onActive}> Active </a>
      </li>
      <li>
        <a onClick={onComplete}>Completed</a>
      </li>
    </ul>
    {/* Clear Complete*/}

    {complete.some((el) => {
      if (el.class === true) {
        return true
      }
      return false
    }) && <button className="clear-completed" onClick={() => {

      const value = complete.filter(e => e.class === false)

      setList([...value])
      setComplete([...value])
    }}>Clear completed</button>}




  </footer>
}

export default Footer;