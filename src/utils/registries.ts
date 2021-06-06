import { container } from './container'

import Logger from 'log/Logger'
import { Application } from 'Application'

container.provide({ token: 'logger', useValue: Logger })
container.provide({ token: 'application', useValue: Application })
