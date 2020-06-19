import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { Store, select } from '@ngrx/store';
import { APIService } from "../Shared/api.service";
import * as DataActions from "../actions/data.action";
import { selectUserList } from '../selector/data.selector';

@Injectable()
export class DataEffects {
   constructor(private actions: Actions, private dataService: APIService) {}
  // constructor(
  //   private _userService: APIService,
  //   private _actions$: Actions,
  //   private _store: Store<any>
  // ) {}

  @Effect()
  loadData = this.actions.pipe(
    ofType(DataActions.ActionTypes.LoadDataBegin),
    switchMap(() => {
      return this.dataService.FetchAsia().pipe(
        map(data => new DataActions.LoadDataSuccess({ data: data })),
        catchError(error =>
          of(new DataActions.LoadDataFailure({ error: error }))
        )
      );
    })
   );
  // @Effect()
  // getUser$ = this._actions$.pipe(
  //   ofType<any>(DataActions.LoadDataSuccess),
  //   map(action => action.payload),
  //   withLatestFrom(this._store.pipe(select(selectUserList))),
  //   switchMap(([id, users]) => {
  //     const selectedUser = users.filter(user => user.id === +id)[0];
  //     return of(new DataActions.LoadDataSuccess(selectedUser));
  //   })
  // );




  // @Effect()
  // getUsers$ = this._actions$.pipe(
  //   ofType<any>(DataActions.LoadDataSuccess),
  //   switchMap(() => this._userService.getData()),
  //   switchMap((userHttp: any) => of(new DataActions.LoadDataSuccess(userHttp.users)))
  // );
}