import {useQuery} from '@tanstack/react-query'
import { getWeatherData } from './api';
import Card from './components/cards/card';

function App() {

  const {data} = useQuery({
    queryKey: ['weatherData'],
    queryFn: ()=> getWeatherData(28.6026, 81.6330)
  })
    console.log(data)
  return (
    <div className="flex flex-col gap-8">
      <Card title="Coordinates">{JSON.stringify(data?.coord)}</Card>
      <Card title="Weather">{JSON.stringify(data?.weather)}</Card>
    </div>
  )
}
export default App
