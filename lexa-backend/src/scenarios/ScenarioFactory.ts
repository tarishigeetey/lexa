import { SupermarketScenario } from './SupermarketScenario'
import { RestaurantScenario } from './RestaurantScenario'
import { TrainStationScenario } from './TrainStationScenario'
import { DirectionsScenario } from './DirectionsScenario'
import { Scenario } from './Scenario'

export class ScenarioFactory {
  static createScenario(scenario: string): Scenario {
    switch (scenario) {
      case 'supermarket':
        return new SupermarketScenario()
      case 'restaurant':
        return new RestaurantScenario()
      case 'train station':
        return new TrainStationScenario()
      case 'directions':
            return new DirectionsScenario()
      default:
        throw new Error(`Scenario "${scenario}" not found.`)
    }
  }
}