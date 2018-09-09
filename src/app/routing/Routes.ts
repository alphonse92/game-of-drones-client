import { GameComponent } from 'src/app/components/game/game.component'
import { GameSummaryComponent } from 'src/app/components/game/game-summary/game-summary.component'


const AppRoutes = [
    { path: '', component: GameComponent },
    { path: 'summary', component: GameSummaryComponent },

]

export { AppRoutes }