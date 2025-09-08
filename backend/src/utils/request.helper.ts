import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType={
    correlationId: string,
}

export const asyncLoaclStorage = new AsyncLocalStorage<AsyncLocalStorageType> ();

export const getCorrelationId = () => {
   const asyncStore = asyncLoaclStorage.getStore();
   return (
    asyncStore?.correlationId || "correlation_id_is_not_defined"
   );
};