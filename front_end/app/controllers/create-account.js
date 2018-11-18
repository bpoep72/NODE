import Controller from '@ember/controller';

export default Controller.extend({
  name: 'create-account-controller',
  actions: {
    createAccount() {
      let {email, password} = this.getProperties(['email', 'password']);
      let account = this.get('store').createRecord('account', {email, password});
      let adapterOptions = {signIn: true};
      
      account.save({adapterOptions});
    }
  }
});
