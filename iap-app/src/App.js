import Card from './components/Card';
import Header from './components/Header';
import data from './mockdata/homepage.json';
import './App.css';

function App() {
  return (
      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex flex-col w-56 overflow-hidden" style={{backgroundColor: '#1D2B35'}}>
          <div className="flex items-center justify-center border-b border-gray-600 py-2">
            <h1 className="text-xl font-semibold text-white">MLscape</h1>
          </div>
        </div>
        <div>
          <Header />
          <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 p-8">
            {
              data && data.assets && data.assets.map((asset,index)=> {
                  return  <Card key={index} asset={asset} />
              })
            }
          </div>
        </div>
      </div>
 
    
  );
}

export default App;
