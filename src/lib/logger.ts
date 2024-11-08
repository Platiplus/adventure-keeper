class Logger {
  private isDevelopment: boolean

  constructor() {
    this.isDevelopment = process.env.NODE_ENV !== 'production'
  }

  info(message?: string, ...optionalParams: any[]) {
    if (this.isDevelopment) {
      console.info(`[INFO]: ${message}`, ...optionalParams)
    }
  }

  warn(message?: string, ...optionalParams: any[]) {
    if (this.isDevelopment) {
      console.warn(`[WARN]: ${message}`, ...optionalParams)
    }
  }

  error(message?: string, ...optionalParams: any[]) {
    if (this.isDevelopment) {
      console.error(`[ERROR]: ${message}`, ...optionalParams)
    }
  }

  debug(message?: string, ...optionalParams: any[]) {
    if (this.isDevelopment) {
      console.debug(`[DEBUG]: ${message}`, ...optionalParams)
    }
  }
}

const logger = new Logger()
export default logger