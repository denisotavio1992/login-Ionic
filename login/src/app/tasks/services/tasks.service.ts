import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Task } from '../models/task.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends Firestore<Task> {
  constructor(private authservice: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }
  private init(): void {
    this.authservice.authState$.subscribe(user => {
      if (user) {
        this.setCollection('/users/$(user.uid)/tasks');
        return;
      }
      this.setCollection(null);
    });
  }
}
