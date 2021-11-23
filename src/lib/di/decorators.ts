import 'reflect-metadata'

export function inject(token: string) {
  return function (target: Object, name: string, index: number) {
    const descriptors = Reflect.getMetadata('injectionTokens', target) || {}

    descriptors[index] = token
    Reflect.defineMetadata('injectionTokens', descriptors, target)
  }
}
