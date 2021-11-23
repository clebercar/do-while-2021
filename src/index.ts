import { Application } from 'Application'
import { container } from 'lib/di/container'
import Logger from 'log/Logger'
import { AppPorts } from 'port/AppPort'

container.register({ token: 'Logger', useClass: Logger })
container.register({ token: 'AppPorts', useClass: AppPorts })

const application = container.resolve<Application>(Application)

application.server()
