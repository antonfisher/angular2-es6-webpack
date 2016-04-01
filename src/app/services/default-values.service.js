'use strict'

import {Injectable} from 'angular2/core'

@Injectable()
export class DefaultValuesService {

  get starsArray () {
    return [
      'Andromeda', 'Aquarius', 'Aquila', 'Aries', 'Auriga', 'Bootes', 'Cancer', 'Canes Venatici', 'Canis Major',
      'Canis Minor', 'Capricornus', 'Carina', 'Cassiopeia', 'Centaurus', 'Cepheus', 'Cetus', 'Columba',
      'Coma Berenices', 'Corona Australis', 'Corona Borealis', 'Corvus', 'Crater', 'Crux', 'Cygnus', 'Delphinus',
      'Draco', 'Equuleus', 'Eridanus', 'Gemini', 'Grus', 'Hercules', 'Hydra', 'Hydrus', 'Leo', 'Leo Minor', 'Lepus',
      'Libra', 'Lynx', 'Lyra', 'Octans', 'Ophiuchus', 'Orion', 'Pavo', 'Pegasus', 'Perseus', 'Phoenix', 'Pisces',
      'Piscis Austrinus', 'Puppis', 'Sagitta', 'Sagittarius', 'Scorpius', 'Serpens', 'Taurus', 'Triangulum',
      'Triangulum Australe', 'Ursa Major', 'Ursa Minor', 'Vela', 'Virgo', 'Vulpecula'
    ].map((i) => i.toLocaleLowerCase()).sort()
  }

}
