import 'reflect-metadata'

export interface IContainerProvider {
  useClass: Function
  token: string
}

export class Container {
  private static instance: Container

  readonly providers: { [key: string]: any } = {}

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container()
    }

    return Container.instance
  }

  public resolve<T>(targetClass: any): T {
    const hasDependencies = Reflect.getMetadata('injectionTokens', targetClass)
    const tokens = (hasDependencies && Object.values(hasDependencies)) || []

    const injections = tokens.map((token: string) => {
      const provider = this.providers[token]

      if (provider.prototype) return container.resolve(provider)

      return provider
    })

    this.providers[targetClass.name] = new targetClass(...injections)

    return this.providers[targetClass.name]
  }

  public register({ token, useClass }: IContainerProvider) {
    console.log(`Token "${token}" registered for class ${useClass.name}`)

    this.providers[token] = useClass
  }
}

export const container = Container.getInstance()
