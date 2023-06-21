import * as toastr from 'toastr';
import 'toastr/build/toastr.css';

export default class Message {
  static success(arg) {
    toastr.options.toastClass = 'toastr';
    toastr.options.positionClass = 'toast-bottom-right';

    toastr.success(arg);
  }

  static error(arg) {
    toastr.options.toastClass = 'toastr';
    toastr.options.positionClass = 'toast-bottom-right';

    toastr.error(arg);
  }
}
