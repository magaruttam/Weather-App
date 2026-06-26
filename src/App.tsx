import {useQuery} from '@tanstack/react-query'
import { getWeatherData } from './api';

function App() {

  const {data} = useQuery({
    queryKey: ['weatherData'],
    queryFn: ()=> getWeatherData(37.7749, -122.4194)
  })
    console.log(data)
  return (
    <>
    {JSON.stringify(data)}
    </>
  )
}
export default App
