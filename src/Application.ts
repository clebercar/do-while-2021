import 'dotenv/config'
import express, { Express } from 'express'
import { inject } from 'lib/di/decorators'
import { ILogger } from 'log'
import { AppPorts } from 'port/AppPort'

export class Application {
  public express: Express

  constructor(
    @inject('Logger')
    private logger: ILogger,

    @inject('AppPorts')
    private appPort: AppPorts
  ) {
    this.express = express()
  }

  public server() {
    const port = this.appPort.httpServerPort

    this.express.listen(port, () => {
      this.logger.info(`⚡ Server running on port ${port}`)
    })
  }
}
