import Header from "./header"
import Sidebar from "./sidebar"
import MainSection from "./mainSections"
const DashboardSection = () => {
  return (
    <main className="dashboard">
      <div className="dashContainer">
        <div className="dashTop">
          <Header />
        </div>
        <div className="dashBottom">
          <Sidebar />
          <MainSection />
        </div>
      </div>
    </main>
  )
}

export default DashboardSection
