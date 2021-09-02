import Card from './components/Card';
import './App.css';
import data from './mockdata/homepage.json';
function App() {
  return (
    <div className="grid gap-4 grid-cols-3 bg-gray-200 p-8">
      {
        data && data.assets && data.assets.map((asset,index)=> {
            return  <Card key={index} asset={asset} />
        })
      }
    </div>
  );
}

export default App;
