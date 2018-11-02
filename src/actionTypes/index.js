import candyPickerActionTypes from './candyPickerActionTypes';

const UserActionTypes = {
  ...candyPickerActionTypes.UserActionTypes,
};

const InternalActionTypes = {
  ...candyPickerActionTypes.InternalActionTypes,
};

const ActionTypes = {
  ...UserActionTypes,
  ...InternalActionTypes
};

export { UserActionTypes, InternalActionTypes };

export default ActionTypes;
