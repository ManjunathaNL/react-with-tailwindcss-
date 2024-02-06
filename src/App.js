import { Tabs, Tab } from "./components/mainTabs";
import CompanyDetailsForm from "./components/CompanyDetailsForm";

const App = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Persanal Data">
          <div className="py-4 ">
            <h2 className="text-lg  font-medium mb-2">Persanal Data</h2>
          </div>
        </Tab>
        <Tab label="Company Details">
          <CompanyDetailsForm />
        </Tab>
        <Tab label="Documents">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Documents</h2>
          </div>
        </Tab>
        <Tab label="Servies">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Servies</h2>
          </div>
        </Tab>
        <Tab label="Bank Details">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Bank Details</h2>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
