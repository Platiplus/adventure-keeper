import { createSafeActionClient } from "next-safe-action";

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    if (process.env.NODE_ENV !== "production") console.error("[SERVER_ERROR]", error)

    if (error instanceof ActionError) {
      return error.message
    }

    return "An unexpected error occurred. Please try again."
  },
})