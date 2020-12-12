import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Cat } from '../cat';

@Component({
    selector: 'cat-form',
    templateUrl: './cat-form.component.html'
})

export class CatFormComponent implements OnInit {
    @Output() onAdd: EventEmitter<Cat> = new EventEmitter<Cat>();
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('',Validators.required),
            img: new FormControl('',),
            description: new FormControl('',Validators.required),
            like: new FormControl(0, Validators.min(0))
        })
    }
    
    submit() {
        console.log(this.form);
        const formData = {...this.form.value};

        this.onAdd.emit(formData);
    }
}