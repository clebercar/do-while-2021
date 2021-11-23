import { inject } from 'lib/di/decorators'
import { ILogger } from 'log'

export class AppPorts {
  constructor(
    @inject('Logger')
    private logger: ILogger
  ) {}

  get httpServerPort() {
    return process.env.PORT || 80
  }
}
