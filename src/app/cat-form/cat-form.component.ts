import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Cat } from '../cat';

@Component({
    selector: 'cat-form',
    templateUrl: './cat-form.component.html'
})

export class CatFormComponent implements OnInit {
    @Output() onAdd: EventEmitter<Cat> = new EventEmitter<Cat>();
    @Output() main: EventEmitter<string> = new EventEmitter<string>();

    form: FormGroup;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('',Validators.required),
            img: new FormControl('',),
            description: new FormControl('',Validators.required),
            like: new FormControl(0, Validators.min(0))
        })
    }
    
    submit() {
        const formData = {...this.form.value};
        this.onAdd.emit(formData);
        this.form.reset();
        this.dataService.addData(formData);
    }

    mainPage() {
        this.main.emit('list');
    }

}