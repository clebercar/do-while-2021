import 'dotenv/config'
import express, { Express } from 'express'
import { ILogger } from 'log/ILogger'

import { Inject, Injectable } from 'utils/dependency-injection'

@Injectable('application')
export class Application {
  private express: Express

  @Inject('logger')
  private logger: ILogger

  constructor() {
    this.express = express()
  }

  server() {
    const port = process.env.PORT || 80

    this.express.listen(port, () => {
      this.logger.info(`⚡ Server running on port ${port}`)
    })
  }
}
