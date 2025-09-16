import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  
  todoList = []
 

  
  

  today: number = Date.now();

 


  constructor(public modalCtlr: ModalController,
              public todoService:TodoService,
              
              private alertctrl: AlertController){ 
   
  
    this.getAllTask()
  }


  
/*
   async presentAlertConfirm() {  (click)="delete(item.key)"  delete() { 
    this.todoService.deleteTask(key)
    this.getAllTask()
  }  
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          role: 'confirm',
          handler: (key) => {
            
            ;

            
          }
          
        }
        
      ]
      
    });
    

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
    
  }
  */

  

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  async delete(key) { 
    
    let alert = this.alertctrl.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja deletar essa tarefa?',

      buttons:[{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }, {
        text: 'Deletar',
        handler: () => {
          this.todoService.deleteTask(key)
          this.getAllTask()
        }
      }]

    });
    
    (await alert).present();

  }

  
  



  async update(selectedTask){
    const modal = await this.modalCtlr.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    
    return await modal.present()
 
 
  }


   

}


