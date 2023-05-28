import "./index.scss"
import { DataTable, Navbar, Sidebar } from "../../components/index"


function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List