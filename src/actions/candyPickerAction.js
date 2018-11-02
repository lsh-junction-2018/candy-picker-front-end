import { UserActionTypes, InternalActionTypes } from '../actionTypes';

/**
 * User action
 */
export function postCandyPickerCommand(command) {
  return {
    type: UserActionTypes.POST_CANDY_PICKER_COMMAND,
    command
  };
}