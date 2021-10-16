export enum ACTION_LIST {
  ADDTASK = 'ADD_TASK',
  MARKTASK = 'MARK_TASK',
}

export function addTaskAction(label: string) {
  return {
    type: ACTION_LIST.ADDTASK,
    label,
  };
}

export function markTaskAction(index: number, checked: boolean) {
  const payload = {
    index,
    checked,
  };
  return {
    type: ACTION_LIST.MARKTASK,
    payload,
  };
}
