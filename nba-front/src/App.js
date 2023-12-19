import { AppRoutes } from "./Routes";
import GetTodayGames from "./components/GetTodayGames";
import { Menu } from "./components/menu";
import { HomePage } from "./pages/homePage";

export default function App() {
  return (
    <div className="bg-white h-screen">
        <HomePage />
    </div>
    
  )
}