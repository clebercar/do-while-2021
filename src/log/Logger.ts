import { yellow, magenta, red, gray, green } from 'colors'

import { ILogger } from './ILogger'

export default class Logger implements ILogger {
  public info(message: string) {
    console.log(`${green('[INFO]')} ${this.time} ${message}`)
  }

  public error(message: string) {
    console.log(`${red('[ERROR]')} ${this.time} ${message}`)
  }

  public debug(message: string) {
    console.log(`${magenta('[DEBUG]')} ${this.time} ${message}`)
  }

  public warn(message: string) {
    console.log(`${yellow('[WARN]')} ${this.time} ${message}`)
  }

  private get time() {
    return gray(`${new Date().toLocaleString()}`)
  }
}
