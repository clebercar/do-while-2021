export interface ILogger {
  info(...args: unknown[])
  error(...args: unknown[])
  debug(...args: unknown[])
  warn(...args: unknown[])
}
