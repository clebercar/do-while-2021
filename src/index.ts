import { container } from 'utils/container'
import 'utils/registries'

const application = container.resolve('application')

application.server()
