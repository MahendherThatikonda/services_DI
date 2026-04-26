import { Injectable ,inject} from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn:'root'
})
export class TasksService{
private tasks:Task[]=[];
private loggingservice=inject(LoggingService);
//allTasks=this.tasks
get allTasks(): Task[] {
  return this.tasks;
}
addTask(taskData:{title:string,description:string}){
  
//this.tasks.update((oldTasks)=>[...oldTasks,taskData])
  this.tasks.push({
    ...taskData,
    id: Date.now().toString(),
    status: 'OPEN'
  });
  this.loggingservice.log("Added task with title"+taskData.title);
}

updateTaskStatus(taskId:string,newStatus:TaskStatus){
  this.tasks = this.tasks.map((task) =>
    task.id === taskId ? { ...task, status: newStatus } : task
  );
}
}
