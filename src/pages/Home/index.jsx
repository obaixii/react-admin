import { Chart, Featured, Navbar, Sidebar, MyTable, Widget } from "../../components/index"
import "./index.scss"
import { data } from "../../data/chartData"
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart data={data} title={`Last ${data.length} Months (Revenue)`} aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <MyTable />
        </div>
      </div>
    </div>
  )
}

export default Home