export const createNotFoundError = (message?: string) => {
  const err = new Error(message ?? "Not found");
  err.name = "NotFoundError";
  // @ts-ignore - add custom code property for easier checks
  err.code = "NOT_FOUND";
  return err;
};
