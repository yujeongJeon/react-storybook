import { useStoreData } from "./useStoreData";
import {todoContext} from '../providers/todo-provider';

export const useRootData = (
  dataSelector
) => 
  useStoreData(todoContext, contextData => contextData, dataSelector);

