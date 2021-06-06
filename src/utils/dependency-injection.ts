import { container } from './container'

export function Injectable(token: string): Function {
  return function (target: { new () }): void {
    container.providers[token] = new target()
  }
}

export function Inject(token: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      get: () => container.resolve(token),
      enumerable: true,
      configurable: true,
    })
  }
}
