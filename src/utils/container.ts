export interface IContainerProvider {
  useValue: any
  token: string
}

export class Container {
  private static instance: Container

  readonly providers: { [key: string]: any } = {}

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container()
    }

    return Container.instance
  }

  public resolve(token: string) {
    const matchedProvider = Object.keys(this.providers).find(
      (key) => key === token
    )

    if (matchedProvider) {
      try {
        return new this.providers[matchedProvider]()
      } catch (err) {
        return this.providers[matchedProvider]
      }
    }

    throw new Error(`No provider found for ${token}!`)
  }

  public provide(details: IContainerProvider): void {
    this.providers[details.token] = details.useValue
  }
}

export const container = Container.getInstance()
