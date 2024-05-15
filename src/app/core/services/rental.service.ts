import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private  _HttpClient:HttpClient) { }
  addrental(data:any):Observable<any>{
    return this._HttpClient.post("https://localhost:7098/api/Rental",data)
  }
  updateAvailability(id:any):Observable<any>{
    return this._HttpClient.put(`https://localhost:7098/api/Rental/${id}`,id)
  }
  getAllRentals(id:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7098/api/Rental/${id}`)
  }
  getAllRequestForCar(id:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7098/api/Rental/getAllReqForCarById/${id}`)
  }
  waitingpayment(id:any):Observable<any>{
    return this._HttpClient.put(`https://localhost:7098/api/Rental/PaymentRequest/${id}`,id)
  }
  rejectRequest(id:any):Observable<any>{
    return this._HttpClient.put(`https://localhost:7098/api/Rental/RejectRequest/${id}`,id)
  }
  confirmRequest(id:any):Observable<any>{
    return this._HttpClient.put(`https://localhost:7098/api/Rental/ConfirmRequest/${id}`,id)
  }
  getAllPendingRentals():Observable<any>{
    return this._HttpClient.get(`https://localhost:7098/api/Rental/getAllPendingRentals`)
  }
  getAllWaitingRentals():Observable<any>{
    return this._HttpClient.get(`https://localhost:7098/api/Rental/getAllWaitingRentals`)
  }
  getAllConfirmedRentals():Observable<any>{
    return this._HttpClient.get(`https://localhost:7098/api/Rental/getAllConfirmedRentals`)
  }
  getAllRejectedRentals():Observable<any>{
    return this._HttpClient.get(`https://localhost:7098/api/Rental/getAllRejectedRentals`)
  }

}
