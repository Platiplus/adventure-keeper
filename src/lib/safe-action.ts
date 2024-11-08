import { createSafeActionClient } from "next-safe-action";
import logger from "./logger";

export class ActionError extends Error {
  /** A user-friendly, safe message to display to the user in the ui, which should not disclose any `tech-related` messages. */
  friendly_message?: string
  /** A debug message to display in the console for the developers, usually used to display some framework or library `(Eg: Database)` error messages. */
  debug_message?: string
  
  constructor(friendly_message: string, debug_message?: string) {
    super(friendly_message)
    this.debug_message = debug_message
  }
}

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    if (error instanceof ActionError) {
      logger.debug(error.debug_message)
      return error.message
    } else {
      logger.error(error.message)
    }

    return "An unexpected error occurred. Please try again."
  },
})