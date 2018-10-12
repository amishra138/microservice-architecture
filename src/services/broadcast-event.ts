import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Events, BroadcastEvent } from '../models/broadcast-event';

Injectable({
  providedIn: "root"
})
export class Broadcaster {
  private eventBus: Subject<BroadcastEvent>;

  constructor() {
    this.eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: Events, data?: any) {
    this.eventBus.next({ key, data });
  }

  on<T>(key: Events): Observable<T> {
    return this.eventBus.asObservable()
      .pipe(filter(event => event.key === key))
      .pipe(map(event => <T>event.data));
  }
}




