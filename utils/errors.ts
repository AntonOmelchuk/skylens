import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const isFetchBaseQueryError = (
  error: unknown,
): error is FetchBaseQueryError => typeof error === 'object' && error !== null && 'status' in error && 'data' in error;

const isSerializedError = (
  error: unknown,
): error is SerializedError => typeof error === 'object' && error !== null && 'name' in error && 'message' in error;

const getErrorMsg = (error: string | Error | FetchBaseQueryError | SerializedError | unknown) => {
  if (typeof error === 'string') {
    return error;
  } if (error instanceof Error) {
    return error.message;
  } if (isFetchBaseQueryError(error)) {
    const fetchError = error as FetchBaseQueryError;
    return `Error: ${fetchError.status} - ${JSON.stringify(fetchError.data)}`;
  } if (isSerializedError(error)) {
    const serializedError = error as SerializedError;
    return `Error: ${serializedError.name} - ${serializedError.message}`;
  }
  return 'An unknown error occurred';
};

export default getErrorMsg;
