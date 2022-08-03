import {useState} from "react"

let count = 0;


function Footer({ wholeList, setList, complete, setComplete }) {
  const [isActive, setActive] = useState(0);

  let arr = Object.entries(wholeList);
  let completedArr = arr.map(function ([key, value]) {
    return value.class === true
  }).reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {})

  const handleToggle = (e) => {
    setActive(Number(e.target.accessKey));
  };

  const onActive = (e) => {
    handleToggle(e)
    let act = complete.filter(e => e.class === false)

    setList([...act])



  }

  const onAll = (e) => {
    handleToggle(e)
    setList([...complete])

  }

  const onComplete = (e) => {
    handleToggle(e)
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
      <li >
        <a  accessKey="0" className={isActive === 0 ? "selected": "unselected" }onClick={onAll}>All</a>
      </li>
      <li >
        <a accessKey="1" className={isActive === 1 ? "selected": "unselected" } onClick={onActive}> Active </a>
      </li>
      <li >
        <a accessKey="2" className={isActive === 2 ? "selected": "unselected" } onClick={onComplete}>Completed</a>
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