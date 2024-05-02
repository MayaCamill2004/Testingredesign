import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticStateService {
  private results: any = {};

  constructor() { }

  
  saveAnswer(step: string, answer: any) {
    this.results[step] = answer;
  }

  // calculate the results
  calculateResults() {
    
  }

  // get the results
  getResults() {
    return this.results;
  }
}
