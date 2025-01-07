Component({
  properties: {
    status: {
      type: String,
      value: 'loading' // loading, loaded, error
    },
    listIsEmpty: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    retry() {
      this.triggerEvent('retry');
    }
  }
});
