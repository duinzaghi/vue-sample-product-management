import cookies from 'js-cookie';
import {_} from 'vue-underscore';

import {setAuthToken, resetAuthToken} from '../utils/auth';
import {mainDomain} from '~/config';

export default function ({store, redirect, route}) {
  const nonAuthorizePages = ['callback', 'signup-success'];
  const isLoggedIn = false;
  const user = store.state.user;

  function checkNonAuthorizePage(path) {
    let result = false;
    if (path === '/login') {
      return false;
    }
    if (path === '/') {
      return true;
    }
    // eslint-disable-next-line no-const-assign
    result = _.find(nonAuthorizePages, function (item) {
      // eslint-disable-next-line unicorn/prefer-includes
      return path.indexOf(item) > -1;
    });
    return result;
  }
  if (user === null) {
    //If user not login, redirect to login '/login'
    //If statement here should be used, to prevent recursive redirect
    if (route.path !== "/login") return redirect("/login");
    else if(route.path !== "/signup") return redirect("/signup");
    else return Promise.resolve();
  } else {
    if (checkNonAuthorizePage(route.path)) {
      if (route.path === '/') {
        const token = cookies.get('x-auth-token');
        if (token) {
          setAuthToken(token);
          store.dispatch('authenticate/fetch').then(result => {
            // Redirect to login page if user not logged in
            if (result.data) {
              if (result.data._id) {
                return Promise.resolve();
              } else {
                return redirect('/401');
              }
            }
          }).catch(error => {
            console.log(error);
            resetAuthToken();
            return redirect('/login');
          });
        } else {
          if (route.path.indexOf('/login') > -1) {
            return Promise.resolve();
          } else {
            resetAuthToken();
            return redirect('/login');
          }
        }

      } else {
        const token = cookies.get('x-auth-token');
        if(!token) {
          if (route.path.indexOf('/login') > -1) {
            return Promise.resolve();
          } else {
            resetAuthToken();
            return redirect('/login');
          }
        }
      }
    }
  }
}
