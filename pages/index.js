import Nav from '../components/nav'
import Sidebar from "../components/Sidebar";
import Charts from "../components/Charts";
export default function IndexPage() {

  return (
      <div className="grid-container">
          <div className="Sidebar border-solid border-r border-gray-400"
          >
              <Sidebar/>
          </div>
          <div className="Charts pt-10">
              <Charts/>
          </div>
      </div>
  )
}
