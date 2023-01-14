export interface Task {
  id: string;
  name: string;
}

export interface Props {
  tasks: Task[];
}

export interface CreateTaskProps {
  setTasks: any;
}


export interface deleteBulkProps {
  tasks: Task[];
  addCheckedTask: any;
  removeCheckedTask: any;
  deleteCheckedTasks: any;
}