import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup
  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) { 
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: '',
      status: ''
    })
  }

  addIssue(title, responsible, description, severity, status)
  {
    this.issueService.addIssue(title,responsible,description,severity,status).subscribe(() => {
      
      this.router.navigate([`/list`]);
      this.snackBar.open('Issue Added successfully', 'OK', {
        duration: 3000
      });
    });
  }

  ngOnInit(): void {
  }

}
