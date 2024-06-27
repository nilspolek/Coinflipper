import {Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CoinflipperComponent} from "./game/coinflipper/coinflipper.component";
import {LotteryComponent} from "./game/lottery/lottery.component";
import {KenoComponent} from "./game/keno/keno.component";
import {DiceComponent} from "./game/dice/dice.component";
import {CardComponent} from "./game/card/card.component";
import {BfgComponent} from "./game/bfg/bfg.component";
import {ImprintComponent} from "./imprint/imprint.component";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'coinflipper', component: CoinflipperComponent},
  {path: 'lottery', component: LotteryComponent},
  {path: 'keno', component: KenoComponent},
  {path: 'dice', component: DiceComponent},
  {path: 'card', component: CardComponent},
  {path: 'bfg', component: BfgComponent},
  {path: 'imprint', component: ImprintComponent}
];
