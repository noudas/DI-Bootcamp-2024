export const CHANGE_TITLE = "change_my_title";

export const changeTitle = (val) => {
  return {
    type: CHANGE_TITLE,
    payload: val,
  };
};
