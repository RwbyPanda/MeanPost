import { HttpInterceptor, HttpHandler, HttpErrorResponse, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { MatDialog } from "@angular/material";
import { ErrorComponent } from "./error/error.component";

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

    constructor(private diolog: MatDialog) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let message = "An unknown error has occurred!"
                if(error.error.message) {
                    message = error.error.message
                }
                this.diolog.open(ErrorComponent, {data: {message: message}})
                return throwError(error)
            })
        )
    }
}