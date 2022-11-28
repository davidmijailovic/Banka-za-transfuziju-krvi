import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { AuthService } from 'src/app/services/login-services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

interface DisplayMessage {
  msgType: string;
  msgBody: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  form!: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

   /**
   * Notification message from received
   * form request or router
   */
    notification!: DisplayMessage;

    returnUrl!: string;
    private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifyService : NotificationService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: any) => {
        this.notification = params as DisplayMessage;
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */

    this.notification;
    this.submitted = true;

    this.authService.login(this.form.value)
      .subscribe((data: any) => {
        console.log(data);
          this.userService.getMyInfo().subscribe();
          this.router.navigate([this.returnUrl]);
        },
        ( error: any) => {
          console.log(error);
          this.submitted = false;
          this.notifyService.showError('Incorrect email or password.', 'Error');
        });
  }

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

}
