import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    ajax: inject(),

    email: '',
    password1: '',
    password2: '',
    first_name: '',
    last_name: '',
    zipcode: '',

    actions: {

        // gatekeeper code goes here

        executePost() {

            window.console.log(this.get('email'), this.get('password1'), this.get('password2'), this.get('first_name'), this.get('last_name'), this.get('zipcode'));
            return this.get('ajax').request('/user', {
                method: 'PUT',
                data: {
                    email: this.get('email'),
                    password1: this.get('password1'),
                    password2: this.get('password2'),
                    first_name: this.get('first_name'),
                    last_name: this.get('last_name'),
                    zipcode: this.get('zipcode')
                },
                host: 'localhost:5000'
            });
        }
    }
});
