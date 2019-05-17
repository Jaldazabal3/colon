import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { Validators, FormBuilder, Validator } from '@angular/forms';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { MUNICIPIS } from '../list-municipis';

@Component({
  selector: 'app-municipi',
  templateUrl: './municipi.component.html',
  styleUrls: ['./municipi.component.css']
})
export class MunicipiComponent implements OnInit {


  municipis = MUNICIPIS;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  municipiControl = this.formBuilder.group({
    municipi: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  private validateMunicipi(){
    // return this.municipis.includes(this.municipiControl.get('municipi'));
  }

  private buttonClicked(){
    console.log('Municipi: ' + this.municipiControl.get('municipi').value);
  }

  filterMunicipi = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.municipis
        : this.municipis.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

}
