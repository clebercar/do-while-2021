import { yellow, magenta, red, blue } from 'colors'

import { ILogger } from './ILogger'
import { Injectable } from 'utils/dependency-injection'

@Injectable('logger')
export default class Logger implements ILogger {
  public info(message: string) {
    console.info(blue(`[INFO] ${message}`))
  }

  public error(message: string) {
    console.error(red(`[ERROR] ${message}`))
  }

  public debug(message: string) {
    console.log(magenta(`[DEBUG] ${message}`))
  }

  public warn(message: string) {
    console.log(yellow(`[WARN] ${message}`))
  }
}
