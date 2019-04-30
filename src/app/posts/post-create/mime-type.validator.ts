import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";

export const mimeType = (control:AbstractControl) => {
    const file = control.value as File;
    const fileReader = new FileReader();
    const frObs = Observable.create(observer => {
        fileReader.addEventListener("loadend", () => {
            const arr = new Uint8Array(fileReader.result).subarray(0,4);
            let header = "";
            for(let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
        });
        fileReader.readAsArrayBuffer(file);
    })    
};
