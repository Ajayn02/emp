import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {

  const router=inject(Router)
  const toastr=inject(ToastrService)

  if(sessionStorage.getItem("username")){
    return true;

  }else{

    toastr.warning("Please Login")
    router.navigateByUrl('')
    return false
  }
};
