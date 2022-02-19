function Footer(){
    return <footer className="footer">
    {/* Count */}
    <span className="todo-count">
      <strong>2 </strong>
      items left
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
   <button className="clear-completed"></button>
  </footer>
}

export default Footer;