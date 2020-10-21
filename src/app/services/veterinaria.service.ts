import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {observable} from 'rxjs';
import {MessageI} from '../interface/message.interface';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {

  private contactCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('contacts');
   }

   saveMessage(newContact: MessageI): void {
     this.contactCollection.add(newContact);
   }
}

